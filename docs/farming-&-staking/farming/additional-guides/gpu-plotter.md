---
title: GPU Plotter
sidebar_position: 1
description: Tips on GPU Plotter
slug: /farming/guides/gpu-plotter
keywords:
    - Plotter
    - Farming
    - GPU
---

:::tip
Most NVIDIA GPU users do not need to change any parameters. The default options will automatically find and use any supported GPU, and CPU plotting will be automatically disabled.
:::

## Overview

Autonomys utilizes your drive storage, specifically SSD or NVMe drives, to store plots. After the plotting process is finished, these plots are then farmed using your CPU. Farming is not particularly demanding on the CPU, enabling most modern processors to manage a substantial farm size. However, the plot creation process is highly resource intensive, which makes CPU plotting the main bottleneck.

Utilizing GPU plotting allows you to harness the power of compatible GPUs for plot generation and replotting, either in conjunction with or as a substitute for CPU processing. While many modern CPUs can complete the plotting of a sector in less than two minutes, a single high performance GPU can accomplish the same task in under five seconds, greatly improving efficiency and speed.

Although GPU plotting is not mandatory, it provides enhanced energy efficiency and speed compared to relying solely on a CPU.


:::note Plot Format Compatibility
GPU plotting employs the new v1 plot format, which is applicable to any plots created with versions released on or after July 5th. In contrast, older software versions generated plots in the v0 format, which is only compatible with CPU plotting.
:::


### Platform Compatibility

| Platform          | 🐧 Linux | 🪟 Windows | [Nvidia](#nvidia) | [AMD](#amd) | [Intel](#intel) |
|-------------------|:-------:|:---------:|:---------:|:-----------:|:------------:|
| [Advanced CLI](https://github.com/autonomys/subspace/releases)          |   ✅    |    ✅     |    ✅     |     ✅      |      🔮      |
| [Space Acres](https://github.com/autonomys/space-acres/releases)       |   ✅    |    ✅     |    ✅     |     🔜      |      🔮      |

🛠️ *Limited AMD Support is available in recent test builds. The most recent test builds are linked on the [forum](https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440) 
See Discord [#farmer-chat](https://discord.com/channels/864285291518361610/1062507270539321485) channel for limited support.*

## Supported GPUs

### **Nvidia**

| Series/Model        | Supported |
|---|:---:|
| GTX 1660 Super      | ✅ |
| RTX 20xx and Newer  | ✅ |

*Nvidia [drivers](https://developer.nvidia.com/cuda-downloads) version 550 or later are required. Installing the CUDA Toolkit is not required.*

### **AMD**

:::caution AMD ROCm Support
*There are many challenges to overcome regarding AMD ROCm support. There is much more information on this topic on the [forum](https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440)*
:::

| Series/Model        | Ubuntu |Windows |
|---|:---:|:---:|
| RX 7900 XTX   | ✅ | ❔ |
| RX 7600 XT    | ✅ | ❔ |
| RX 7600       | ✅ | ❔ |
| RX 6800       | ✅ | ❔ |
| RX 6600       | ✅ | ❔ |
| RX 5700 XT    | ❌ | ❔ |
| RX 5700       | ❌ | ❔ |
| RX 5600       | ❌ | ❔ |
| AMD BC-250    | ❌ | ❔ |

:::tip
You must be using the latest test build for AMD support.
:::

### Regular CLI

On Ubuntu and Windows `subspace-farmer-rocm-*` executable can be used for ROCm support with corresponding CLI options being similar to CUDA and prefixed with `--rocm`.
As you might expect all detected GPUs will be used by default and CPU plotting is automatically disabled in such case.

*Prepare your OS (Ubuntu)*

In order to install necessary libraries go to Ubuntu native installation — [ROCm installation (Linux)](https://rocm.docs.amd.com/projects/install-on-linux/en/docs-6.2.2/install/native-install/ubuntu.html) and follow these steps for your Ubuntu version:

- Package signing key
- Register ROCm packages

You don’t need a custom driver or full ROCm toolchain to use already compiled application, so skip all other steps.

Next install a single package with ROCm runtime:

```text
sudo apt-get install --no-install-recommends hip-runtime-amd
```
And register the library so that farmer and other apps can find it:

```text
echo "/opt/rocm/lib" | sudo tee /etc/ld.so.conf.d/rocm.conf > /dev/null
sudo ldconfig
```

Last step is to allow the user to access GPU for compute purposes, for this you need to add your user to render group (please never run farmer as root with sudo :pray: ):

```text
sudo usermod -a -G render $LOGNAME
```

Now you’ll need to log out of your user profile and log back in or simply reboot for group changes to take effect and you’re ready to go.

*Prepare your OS (Windows)*

In order to install necessary libraries go to [https://www.amd.com/en/developer/resources/rocm-hub/hip-sdk.html](https://www.amd.com/en/developer/resources/rocm-hub/hip-sdk.html) and download ROCm version 6.1.2 for your Windows version.

In the installer just the HIP RTC Runtime should be enough under “HIP Runtime Compiler → HIP RTC Runtime 6.1.0”, everything else can be unchecked.

### Docker (container)

Container image now ships with a second executable `/subspace-farmer-rocm` (see explanation above as to why second binary is needed).

Here is how it can be used with Docker Compose, you can use this as an inspiration for other use cases:

```text
services:
  famer:
    image: ghcr.io/autonomys/farmer:TAG
    # Beginning of ROCm-specific options
    devices:
      - /dev/kfd:/dev/kfd
      # This will make all GPUs accessible, you can also limit this
      # to individual devices like `/dev/dri/renderD128`
      - /dev/dri:/dev/dri
    security_opt:
      - seccomp:unconfined
    # `root` user can be replaced with ID of the user on the host system
    # that is in `render` group, needed to access `/dev/kfd` device
    user: root
    entrypoint: /subspace-farmer-rocm
    # End of ROCm-specific options
    ...the rest of typical options you'd normally use
```

:::note
- Cross-compilation no longer requires separate Dockerfiles (which is why they are removed), both native and cross-compilation is supported with a single file
- Container image is now built as multi-platform, meaning no -aarch64 suffix and no awkwardness related to that
- Aarch64 farmer container image is now compiled with CUDA support (while regular executable isn't)
:::

### **Intel**

Intel Arc GPUs *may* be supported in the future, but specific compatibility details have not been announced yet.


## Common Plotting Parameters

Below are some essential parameter examples for configuring the GPU plotter:

- When a compatible GPU is detected, CPU plotting is automatically disabled by default, but can be re-enabled if needed by specifying number of concurrently encoded sectors:
  `--cpu-sector-encoding-concurrency <sectors>`

  ```bash
  --cpu-sector-encoding-concurrency 2
  ```
- Specify particular GPUs for plotting rather than using all available GPUs (the default configuration employs all compatible GPUs):
  `--cuda-gpus <gpu_ids>`

  ```bash
  --cuda-gpus 0,1,3
  ```

- Disable GPU Plotting:

  ```bash
  --cuda-gpus ""
  ```

## Farming Cluster
  
When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher.


## Known Issues

- Many times you will not use all of the compute power of your GPU. While this will be addressed in the future, a workaround when running a farming cluster is to run multiple instances of the plotter on the same machine.