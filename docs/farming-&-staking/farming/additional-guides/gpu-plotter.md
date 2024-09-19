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


### Supported Platforms and Graphics Card Compatibility
| Platform          | 🐧 Linux | 🪟 Windows | [Nvidia](#nvidia) | [AMD](#amd) | [Intel](#intel) |
|-------------------|:-------:|:---------:|:---------:|:-----------:|:------------:|
| [Advanced CLI](https://github.com/autonomys/subspace/releases)          |   ✅    |    ✅     |    ✅     |     🔜      |      🔜      |
| [Space Acres](https://github.com/autonomys/space-acres/releases)       |   ✅    |    ✅     |    ✅     |     🔜      |      🔜      |


## Supported Video Cards

### **Nvidia**
**Supported:**

| Architecture      | Models                                                                 |
|-------------------|------------------------------------------------------------------------|
| Hopper            | H Series (H100, H200, H300)                                            |
| Ada Lovelace      | RTX 40 Series                                                          |
| Ampere            | RTX 30 Series A Series (A100, A40, A30, A10, A6000, A5000, A4000) |
| Turing            | RTX 20 Series Quadro RTX Series (RTX 8000, RTX 6000)              |
| Volta             | PRO Series (Tesla V100, Quadro GV100, Titan V)                         |

*Nvidia [drivers](https://developer.nvidia.com/cuda-downloads) version 550 or later are required. Installing the CUDA Toolkit is not required.*

### **AMD**

**Supported:**

| Series            | Models                                                                 |
|-------------------|------------------------------------------------------------------------|
| PRO               | W7800, W6800, V620                                                     |
| RX 7000 Series    | 7800 XT, 7700 XT, 7600 (but not 7600 XT)                               |
| RX 6000 Series    | 6950 XT, 6900 XT, 6800 XT, 6800                                        |

**Potential Support:**

| Series            | Models                                                                 |
|-------------------|------------------------------------------------------------------------|
| RX 6700 Series    | 6750 XT, 6700 XT, 6700                                                 |
| RX 6000 Series    | 6650 XT, 6600 XT, 6600                                                 |

**Unsupported:**

| Series            | Models                                                                 |
|-------------------|------------------------------------------------------------------------|
| RX 5000 series    | RX 5500, RX 5600                                                       |


*For more details, please consult the [AMD ROCm Requirements](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html) for compatibility.*

### **Intel**

Intel Arc GPUs are expected to be supported in the future, but specific compatibility details have not been announced yet.


## Common Plotting Parameters

Below are some essential parameters for configuring the GPU plotter:

- Set the number of sectors that the CPU plotter will encode simultaneously (the default setting is to use all supported GPUs when a compatible GPU is detected):
  ```bash
  --cpu-sector-encoding-concurrency <sectors>

  # Example:
  --cpu-sector-encoding-concurrency 2
  ```
- Specify particular GPUs for plotting rather than using all available GPUs (the default configuration employs all compatible GPUs):
  ```bash
  --cuda-gpus <gpu_ids>

  # Example:
  --cuda-gpus 0,1,3
  ```


## Farming Cluster
  
When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher.


## Known Issues

- Occasionally, plotting may stop unexpectedly, requiring a restart of the farmer. We are aware of this issue and a fix is in progress.