---
title: GPU Plotter
sidebar_position: 1
description: Tips on GPU Plotter
keywords:
    - Plotter
    - Farming
    - GPU
---

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
| [Advanced CLI](https://github.com/autonomys/subspace/releases)          |   ✅    |    ✅     |    ✅     |     🛠️      |      🔜      |
| [Space Acres](https://github.com/autonomys/space-acres/releases)       |   ✅    |    ✅     |    ✅     |     🔜      |      🔜      |

🛠️ *Limited AMD Support for just Linux is available in recent test builds. See Discord [#farmer-chat](https://discord.com/channels/864285291518361610/1062507270539321485) channel for details.*

## Supported GPUs

### **Nvidia**

| Series              |
|---------------------|
| RTX 20xx and Newer  |

*Nvidia [drivers](https://developer.nvidia.com/cuda-downloads) version 550 or later are required. Installing the CUDA Toolkit is not required.*

### **AMD**

:::caution AMD ROCm Support
*There are many challenges to overcome regarding AMD ROCm support. There is much more information on this topic on the [forum](https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440)*
:::

| Series            | Models                                                                 |
|-------------------|------------------------------------------------------------------------|
| RX 7900 Series    | 7900 XT, 7900 XTX, 7900 GRE                                            |

Supported on Test Builds for Linux Only

*For more details, please consult the [AMD ROCm Requirements](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html) for compatibility.*

### **Intel**

Intel Arc GPUs are expected to be supported in the future, but specific compatibility details have not been announced yet.


## Common Plotting Parameters

:::note
Most NVIDIA GPU users do not need to change any of these parameters. The default options will automatically find and use any supported GPU's and CPU plotting will be automatically disabled.
:::

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

- Occasionally, plotting may stop unexpectedly, requiring a restart of the farmer. We are aware of this issue and a fix is in progress.