---
title: General and server security guidelines
sidebar_position: 5
description: General security measures. Cyberattacks and fraud protection. Server protection.
keywords:
  - Security
  - Wallet
  - Password
  - Server
  - Protection
  - Fraud
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

Navigating the internet and being part of a crypto project can be exciting! But it's crucial to use best security practices. Here is a general guide to security and safety advice, including basic measures for securing servers and home PCs. This is your contribution to keeping Subspace network up and running and of course the safety of the community's cryptoassets. 

Enjoy Subspace journey with peace of mind!


# 1. Wallet security

### Passwords
*
 Be sure to make the password long enough, combining both registers letters, numbers and special characters. An 11-character password increases the bruteforce attack time to normally impossible limit but plese take a look on [passwords brutforce time illustrating table:](https://www.techrepublic.com/wp-content/uploads/2022/03/tr8423-Figure-A-How-an-8-character-password-could-be-cracked-in-just-a-few-minutes-770x404.jpg).
*
 Avoid using common or easily guessed combinations of words or letters, as well as parts of your online data or reusing any of your existing passwords.

Weak password example:
```
S0methin9C00l!
```
Strong password example:
```
^p$O_~a!4h{G'9C*
```
*
 Consider using password manager to securely store and generate complex passwords.
There are plenty of password managers, make sure they store data in encrypted form, have strong password generators, good reviews, history of updates and work on their project. Use ratings, DYOR etc. At a quick glance (ignore the order) it's the likes of KeePass, Bitwarden, 1Password, LastPass, Dashlane, Keeper etc.
*
 Do not share your 12-word seed phrase or private keys
*
 A hardware wallet is by far the most secure way to store your private keys. Unlike online exchanges and wallets, hardware wallets store keys offline and protect from potential malware or hacking attempts.
The most popular hardware wallets are [Ledger](https://www.ledger.com/) and [Tresor](https://trezor.io/).
*
 Backup your wallets: store the backups securely offline or in encrypted cloud storage. This ensures hat you can recover your funds in case of device loss, damage, or theft. There are also many encrypted cloud storage services available, like Tresorit, pCloud, Sync.com, SpiderOak, Mega (order does not matter). But DYOR.
*
 Be cautious of public Wi-Fi
*
 Keep software up to date
*
 If possible, enable 2FA (two-factor authentication) for all your cryptocurrency accounts and wallets. This provides an extra layer of security by requiring a second verification step, such as a code from a mobile app or hardware token, in addition to a password.
*
 Secure your devices! And here's a little basic guide for servers and home PCs in section #3.

# 2. Community security
*
 Remember: Subspace team members will never send you direct messages first. If this happens to you, ignore the message, block the sender, and report the incident to our ["scam report" channel](https://discord.com/channels/864285291518361610/982023010405990400)
*
 Be ware of fishing attacks.
Do not click on any links on our forum, Discord, or Telegram unless these links are posted by one of team members (ambassadors or staff). Scammers may create fake links looking like legit websites, so the easiest way to stay safe is to avoid such messages at all.

# 3. Basic server securing

*let's assume you just got a new server*

### check SSD' condition (while in a rescue system):
```console
    apt-get -y install nvme-cli
    nvme list       
    nvme --smart-log /dev/ng0n1
    nvme --smart-log /dev/ng1n1
```
etc ... check every SSD

### **SSH port change**
*
First make sure you have not UFW enabled. Or add the rule with the desired port to it.

```console
sudo vi /etc/ssh/sshd_config
#Port 22  -> Port 12345             # specify a custom SSH port within the range of 1025 to 65534
sudo systemctl reload sshd    # for the changes to take effect
```

 *Remember: add this port to UFW*
```console
sudo ufw allow xxxxx/tcp
```
*
Checking new port from homePC:
```console
ssh -p xxxxx user@localhost
```

### SSH key secure login
*
On the server:
```console
vi /etc/ssh/sshd_config
--> PubkeyAuthentication yes
systemctl restart ssh
```
*
Create rsa keys on home PC:

if you don't have keys.
```console
ssh-keygen
```
you will get two keys:

`$HOME/.ssh/id_rsa – Your private RSA key to keep on local PC`

`$HOME/.ssh/id_rsa.pub – Your public RSA key to send to a server`
*
Transfer rsa keys to the server:

On a home PC:

```console
sudo ssh-copy-id -p xxxxx user_name@server-ip-addres
``` 
This utility specifically designed for copying SSH keys to a remote server. 
It automatically handles the key placement and permissions on the remote server, making it more convenient. 
Use -p flag to specify not standard port


if you have created keys before and keep them in somewhere else, use rsync:
```console
sudo rsync -e "ssh -p xxxxx" ~/.ssh/id_rsa.pub USER@SERVER_IP:~/.ssh/authorized_keys
```		
manually transfer the public key file and add it to the authorized_keys file on the remote server. 
Make sure you have permissions 700 for "~/.ssh" directory and 600 for "authorized_keys" in it. 
Use -p flag for specifying not standatr port
*
Test secure connection to a server
```console
ssh username@your-server-ip-addr
```
But this can be much more easier and funny to create a file named "config" in ~/.ssh directory, where the keys are, and add your server to it in a format like this (and then add new servers to it or just other users):
```console
Host subspace                             # Just write here the any name of the alias (for ex. "subspace" or "farmer" etc..)
    HostName 123.123.123.123      # Example. Put you server's IP
    Port xxxxx                                 # your custom port
    User yourusername			    # User for login (in a rescue system here must be root, change it later)
```
*indentation aren't important, use 4 spaces for readability*
*
Check connection using simpliest syntax in terminal:
```console
ssh subspace
``` 

*You will be asked if you allow the connection - reply "yes"*

**Nothing more need to type. You are connected to your server w/o any passwords through the secure encrypted connection with nobody known port!**

### **Restricting password access**

```console
vi /etc/ssh/sshd_config
-->PasswordAuthentication no
systemctl restart ssh
```
*
**To reduce time window for entering credentials:**
```console
vi /etc/ssh/sshd_config
-->LoginGraceTime 1m		#time in minutes (m) or hours (h) or seconds (s); If the authentication process is not completed within this time, the server will terminate the connection.
sudo systemctl restart ssh.service
```
*
**Restricting root login**

```console
sudo vi /etc/ssh/sshd_config
--> PermitRootLogin no
sudo systemctl restart ssh.service
```
*
Reboot to make sure everything is working.


## 4. A few words about partitioning as a secure measure.

As a security measure, it is worth mentioning the practice of allocating separate partitions for critical directories such as /boot, /var, /tmp, and /home (in some cases). This helps isolate system files, logs, temporary files, and user data, which can improve system stability and security. But the cons are there too: 
- if one partition runs out of space while another partition has unused space, it may not be possible to easily reallocate the disk space;
- monitoring and maintaining each partition separately, including backups, permissions;
- having a separate /tmp partition may result in increased disk I/O when temporary files are created and deleted; 
- if the /home partition is separate, migrating to a new server or upgrading the operating system may require additional steps to ensure the proper migration of user data and configurations; 
- having separate partitions can increase the risk of data loss if one partition fails or becomes corrupted; 
The partitioning recommendations for farming in Subspace will be covered in the "Partitioning and mounting file system" section of the left tab menu.

# 5. Upgrading ...
*
Upgrading server components.
While linux distributions regularly release security patches to address already known vulnerabilities in software packages, installing everything on a server without examination makes no sense because of unnecessary features. In some cases may even cause system destabilization. If you have made customizations or modifications to your server's configuration or software, an upgrade may overwrite or conflict with these changes. So ideally, decisions should be made based on understanding of what each package does and their changelogs.
To view the changelog for a particular package: 

`apt changelog <package_name>`
*
Upgrading Kernel.
While kernel updates often come with bug fixes and security patches, there is a possibility that the new kernel version may introduce new bugs or compatibility issues. Not every kernel update is necessary or urgent. Some updates may provide incremental improvements or additional functionality that may not be essential for your specific use case. It's important to evaluate the benefits and potential risks before deciding to update the kernel.
*
Upgrading the distribution version have both pros and cons.
Pros:
    Access to new features
    Software compatibility
    Security updates
    Long-term support (LTS)
Cons:
    Potential for compatibility issues
    Configuration changes
    May have new bugs (can be resolved by downgrading the bugged package)

To get in touch of Release Notes simply use search https://ubuntu.com/search?q=Ubuntu+22.04+Changelogs

# 6. UFW

According to the ordering of UFW rules (DENY rules should be first, followed by ALLOW rules), 
new 'ALLOW' rules can simply be added to the end of existing rules:

```console
your existing rules
...
sudo ufw allow from anywhere to any proto tcp port 30333 comment 'The node port '
sudo ufw allow from anywhere to any proto tcp port 30433 comment 'DSN port'
sudo ufw allow from anywhere to any proto tcp port 30533 comment 'Farmer port'
```

Now with the peace of mind you may go back to installing Node and Farmer
