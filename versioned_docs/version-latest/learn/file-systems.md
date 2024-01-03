---
title: Partitioning and Mounting
sidebar_position: 7
description: essential info to file systems. partitioning, and mounting.
keywords:
    - Partition
    - Filesystem
    - Mount
    - Boot
    - MBR
    - GPT
    - VFat
    - BTRFS
    - XFS
    - EXT
---

**Topics Covered in this Guide:**

- Boot process details for MBR and GPT partitioning schemes.
- Partitioning types: VFAT, EXT4, XFS, BTRFS, and their related journal partition filesystems.
- Partition manipulatinng: Parted, E2fsprogs, Blocks to Gigabytes Calculator, Gdisk, and Sgdisk.
- Creating file systems: VFAT, EXT4, XFS, and BTRFS, along with their specific details and commands.
- Mounting various partitions with specific options.
- Details on chroot and fstab configurations.

## Boot Process

#### *Boot* Partition:
BIOS (Basic Input/Output System) and UEFI (Unified Extensible Firmware Interface) control a computer's booting process.
- **MBR (Master Boot Record) Scheme:**
  - The primary partition table in MBR starts in the first sector (0th sector) of the storage device.
  - The sector comprises partition table and boot code. Boot code is executed by BIOS, locating and loading the OS's boot loader from the active partition.
  - Recommended codes: 0x07 for NTFS, 0x83 for Linux, 0x0B for FAT32. Sizes usually range from 100 to 200 MiB.

- **GPT (GUID Partition Table) Scheme:**
  - The main partition table starts in sector 1. Sector 0 is for the Protective MBR (PMBR) to maintain legacy compatibility.
  - GPT relies on EFI firmware and an EFI System Partition (ESP) containing EFI boot loaders, firmware executables, etc.
  - ESP is formatted with FAT32 and typically sized between 100 and 500 MiB, sometimes up to 1 GB.

#### *Tmp* Partition:
The tmp partition stores temporary files, preventing them from filling other partitions and causing instability. Its size depends on expected usage and server capacity.

---------------------------------------------------------------------------------------------------------------

#### Checking Disk Conditions
```console
apt-get -y install nvme-cli
nvme list       
nvme --smart-log /dev/ng0n1
nvme --smart-log /dev/ng1n1
```

## Partitioning

Popular Utilities:
- **[Parted](https://www.gnu.org/software/parted/):** Resizes partitions but not the file systems within them. Alignment issues might occur with GPT partitions.
- **[E2fsprogs](http://e2fsprogs.sourceforge.net/):** Designed for ext2 and ext3 file systems.
- **[Blocks to Gigabytes Calculator](https://www.unitconverters.net/data-storage/block-to-gigabyte.htm):** Aids in converting storage units.
- **[Gdisk](https://www.rodsbooks.com/gdisk/) and [Sgdisk](https://www.rodsbooks.com/gdisk/sgdisk.html):** Primarily for GPT partitions. Useful for reordering, alignment, and labeling tasks but not for resizing partitions.

Example command with `sgdisk`:

```console
sgdisk -z /dev/nvme1n1 -n 1::+512M -t 1:EF00 -c 1:boot -v /dev/nvme1n1 --align-end -n 2::-4076M -t 2:8300 -c 2:main -v /dev/nvme1n1 -n 3::+2038M -t 3:8300 -c 3:j1 -v /dev/nvme1n1 -n 4::+2038M -t 4:8300 -c 4:j2 -v /dev/nvme1n1 -p /dev/nvme1n1
```

Explanation of options: `-v` checks for errors, `-c` changes partition names, `-t` sets partition types, `-p` prints device info, `-z` wipes tables and partitions, `--align-end` aligns partitions.

### Resize Partition 
When resizing partitions, ensure the file system size matches the partition size by reducing the former, resizing the partition, and adjusting the fs accordingly without explicitly specifying the size in the `resize2fs` tool. When resizing with `Parted`, ensure copying the old partition's GUID, deleting it, creating a new one matching starting sectors, and setting the old GUID to the new one.

Tools:
- **[Calculator](https://www.unitconverters.net/data-storage/block-to-gigabyte.htm):** blocks to gigabytes.
- **[E2fsck](https://www.linode.com/docs/guides/using-e2fsck-to-fix-ext-disk-issues/):** (`e2fsck -f device`) - mandatory pre-resizing check for errors, even on an empty partition.

## Creating File Systems

### VFAT
```console
mkfs.vfat -c -n "boot" -F 32 -v /dev/nvme1n1p1  # c-check, n-label, F-FAT size, v-verbose
```

### EXT(3,4)
```console
mkfs.ext4 -L "farmer-0" /dev/nvme0n1p1  # -L - label
```

#### Creating small EXT4 partition for external journal:
```console
mke2fs -L "j0" -O journal_dev /dev/nvme1n1p3
```

#### Attaching the filesystem to the journal device:
```console
tune2fs -J device=/dev/nvme1n1p3 /dev/nvme0n1p1
```
[Detailed EXT4 manual](https://linux.die.net/man/5/ext4)

#### Resizing journal partition:
```console
tune2fs -J size=256M /dev/device
```
Useful options: `-t` for filesystem type, `-c` for error checking, `-b` for block size, `-v` for verbosity.

To check/verify/repair the external journal partition:
```console
e2fsck -j /dev/nvme1n1p3 /dev/nvme1n1p2  # Requires unmounting partition
```

Switching the journal on an EXT4 partition from external to internal:
```console
umount /dev/sdXY	    # unmount
tune2fs -j /dev/sdXY	# create inner journal
e2fsck -f /dev/sdXY	    # check file system
mount /dev/sdXY /mount/point  
```
[Detailed e2fsck manual](https://linux.die.net/man/8/e2fsck)

---

---

### XFS File System

XFS offers various parameters adjustable through `xfs_admin`:

- Modify mount options for behavior change.
- Additional performance tuning options: `delaylog`, `allocsize`, `inode64`.
- For data partition on HDD, external log on fast disks enhances read/write speed significantly, depending on disk types and workload.
- Use `-l logdev=device` in `mkfs.xfs` when creating XFS with a separate partition for external logging.

#### Useful XFS Functions:

- `-l` log_section_options: Specifies log section location, size, and other parameters.
- `nobarrier`: Disables write barriers for specific devices with non-volatile, battery-backed write caches or write-caching disabled.

Metadata Update Process:
File systems employ transactions to bundle metadata updates, ensuring data consistency during power failures. However, challenges arise with storage devices with extra caches, leading to potential data inconsistency. Write barriers ensure data integrity, particularly during power loss, by flushing storage write caches before and after I/O.

`-sunit=values`: Specifies alignment for log writes, leading to performance improvements in certain configurations like software RAID5.

#### Creating External XFS Journal Partition

```console
mkfs.xfs -L j0 /dev/nvme1n1p4
```

#### Creating XFS Data Partition (named farmer-0) with Mentioned Journal

```console
mkfs.xfs -L farmer-0 -l logdev=/dev/nvme1n1p4 /dev/nvme0n1p1

mkfs.xfs -L farmer  /dev/nvme2n1p1		# without logdev
```

Manuals:
- [mkfs.xfs.8](https://www.man7.org/linux/man-pages//man8/mkfs.xfs.8.html)
- [xfs](https://linux.die.net/man/5/xfs)
- [xfsctl](https://linux.die.net/man/3/xfsctl)
- [mkfs.xfs](https://linux.die.net/man/8/mkfs.xfs)

### BTRFS File System

#### Understanding BTRFS:

Btrfs, although not a direct replacement for Ext4, is considered a promising technology by some maintainers due to its scalability and reliability advantages.

#### Some Interesting Features:

- Unlike other file systems supporting external journals like XFS and ext4, Btrfs doesn't offer support for external journaling. Its journaling is integrated into the COW mechanism.
- Multiple devices specified during Btrfs creation span across those devices.
- `commit=0` can be used to disable the automatic commit mechanism for potential performance boosts but at the risk of data loss during system crashes or power failures.

#### DataCoW in BTRFS:

`nodatacow` in Btrfs controls copy-on-write behavior for newly created files. Enabling this option slightly improves performance by directly overwriting data, similar to ext file systems. However, note that enabling `nodatacow` turns off checksumming, potentially compromising data integrity.

#### Formatting farmer-2 partition in BTRFS

```console
mkfs.btrfs -L far2 /dev/nvme2n1p1
```

Manuals:
- [Manual btrfs](https://www.man7.org/linux/man-pages/man8/btrfs.8.html)
- [BTRFS device](https://www.man7.org/linux/man-pages/man8/btrfs-device.8.html)
- [BTRFS filesystem](https://www.man7.org/linux/man-pages/man8/btrfs-filesystem.8.html)

For more information, Wikipedia provides a comprehensive overview of [Btrfs](https://en.wikipedia.org/wiki/Btrfs).



---

## Mounting and Filesystem Configuration

### Mount Commands

Mounting commands provide options to manage filesystems and devices effectively:

- `mount -a`: Mounts all filesystems mentioned in `fstab`, except those flagged with `-noauto`.
- `mount farmer-1`: Mounts what's specified in `fstab` using only device or mount point.
- `mount /dev/nvme0n1p1 /farmer-1`: Mounts without reading `fstab` by specifying both device and mount point.

### Mounting XFS Partitions

#### Mounting XFS data partition (farmer-2) with an external journal (nvme0n1p5)

```console
mkdir /mnt/farmer-2
mount -t xfs -o defaults,logdev=/dev/nvme0n1p5,swalloc,largeio /dev/nvme2n1p1 /mnt/farmer-2

# Without logdev
mount -t xfs -o defaults,swalloc,largeio /dev/nvme2n1p1 /mnt/farmer
```

### Mounting BTRFS Partitions

#### Mounting BTRFS partition without CoW

```console
mkdir /mnt/j2
mount -t btrfs -o nodatacow,nobarrier,commit=0 /dev/nvme2n1p1 /mnt/far2
```

### Chroot

`chroot` command allows executing commands in a different root directory environment:

- Use `chroot /mnt/new-root-directory` to switch to a temporary mounted filesystem containing another system (and root account).

### Fstab

The `/etc/fstab` file contains information about mount points and options for the system's filesystems:

- Six columns describe each filesystem entry: device path/UUID, mount point, filesystem type, mounting options, automatic backup options, and boot-check priority.

#### To add a partition to fstab:

- Use commands like `fdisk -l` and `blkid` to gather partition information.
- Edit `/etc/fstab` as root, including the new partition's UUID and necessary options.

Here's an example of fstab lines, detailing mount points, filesystem types, UUIDs, and options:

```console
# Example of fstab lines for various partitions
UUID=E35A-641E /boot vfat defaults 0 2 # EFI system boot partition
/dev/mapper/cpanel--backups-tmp /tmp xfs loop,nosuid,noexec,nodev,rw 0 0
UUID=2de0e328-2bcd-4823-bfa5-3606f6fe9f92 /mnt ext4 defaults 0 1 # Root partition
# More entries for XFS and BTRFS partitions with specific options...
```

After editing fstab, regenerate mount units using `systemctl daemon-reload`, and verify the configuration with `mount -a`.



---

## Addon: Useful Mounting Options

### For All File Systems

- `async`: Perform all I/O to the filesystem asynchronously.
- `atime`: Control the inode access time by kernel defaults, avoiding the use of the `noatime` feature. Refer to strictatime and relatime mount options for details.
- `noatime`: Prevent updating inode access times on this filesystem for faster access, particularly on news spools to speed up news servers.
- `defaults`: Utilize default options: rw, suid, dev, exec, auto, nouser, async, and relatime.
- `diratime`: Update directory inode access times on this filesystem (default behavior).
- `nodiratime`: Avoid updating directory inode access times on this filesystem.
- `dirsync`: Perform all directory updates within the filesystem synchronously, affecting specific system calls.
- `exec`: Permit the execution of binaries.
- `noexec`: Disallow direct execution of any binaries on the mounted filesystem.
- `mount -o remount,rw /dev/foo /dir`: Replace all old mount options after this call; arbitrary entries from fstab are disregarded, except for the loop= option maintained by the mount command.
- `rw`: Mount the filesystem as read-write.
- `ro`: Mount the filesystem as read-only.

### For EXT4:

- `max_batch_time=usec`: Determines the maximum time ext4 should wait for additional filesystem operations to batch together with a synchronous write operation. This optimization, capped by `max_batch_time` (default 15000us or 15ms), can significantly enhance throughput. It can be disabled by setting `max_batch_time` to 0.
- `journal_ioprio=prio`: Specifies the I/O priority (0 to 7) for I/O operations submitted by kjournald2 during a commit operation. Default is 3, slightly higher than the default I/O priority.

### For XFS:

- `logbufs=value`: Sets the number of in-memory log buffers, with valid numbers ranging from 2-8 inclusive. Increasing buffer numbers may enhance performance on specific workloads at the expense of additional memory usage.
- `logdev=device and rtdev=device`: Utilizes an external log (metadata journal) and/or real-time device. An XFS filesystem typically comprises data, log, and optional real-time sections.
- `osyncisosync`: Implements true `O_SYNC` writes, enhancing performance without compromising data safety. Critical timestamp updates from `O_SYNC` writes are preserved in case of system crashes.
- `swalloc`: Rounds data allocations to stripe width boundaries when extending the file size.
- `largeio|nolargeio`: Specifies optimal I/O behavior, reported in `st_blksize` by `stat`.

For creating an XFS file system with a specific block size using the `mkfs.xfs` command:

1. **Check Available Block Sizes**: Use `xfs_info /dev/<device>` to view supported block sizes.
2. **Unmount the Device**: Unmount the device using `umount /dev/<device>`.
3. **Create the XFS File System**: Execute `mkfs.xfs -b size=4096 /dev/<device>` to create an XFS file system with a block size of 4096 bytes.
4. **Mount the XFS File System**: Mount it using `mount /dev/<device> /mnt/xfs`.

**Note**: Creating a new file system erases existing data. Backup crucial data before proceeding.

Consider XFS for workloads involving numerous random reads, as it excels in handling large files and high-throughput workloads with concurrent read operations. Factors such as hardware configuration, disk I/O subsystem, and caching mechanisms can further optimize XFS performance.

### DataCoW BTRFS

The `nodatacow` option in Btrfs controls copy-on-write behavior for newly created files, offering a performance boost by directly overwriting data. However, enabling `nodatacow` compromises data integrity by turning off checksumming. Use commands like `sudo chattr +C` or `sudo chattr -R +C` to turn off COW for files or directories. Remember, `nodatacow` only affects newly created files.

Btrfs is a modern file system offering advanced features like snapshotting, checksumming, and compression. Disabling CoW might affect functionalities like snapshotting and data deduplication. Ext4 or XFS can be alternative choices if CoW needs to be entirely disabled for specific use cases.

Performance comparisons between Btrfs without CoW and XFS on NVMe SSDs depend on the workload and system configuration. While Btrfs without CoW might offer better write performance, XFS is renowned for its performance in handling large files and high-throughput workloads.

For further information on Btrfs, refer to these resources:

- [BTRFS Wiki Kernel.org](https://btrfs.wiki.kernel.org/)
- [Arch Linux BTRFS Wiki](https://wiki.archlinux.org/title/btrfs)
- [The Btrfs Filesystem: Theory and Practice](https://www.kernel.org/doc/html/latest/filesystems/btrfs.html)
- [Btrfs Requires Noatime](https://gms.tf/btrfs-requires-noatime.html)


