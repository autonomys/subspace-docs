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
GPU plotting employs the new **v1 plot format**, which is applicable to any plots created with versions released on or after **July 5th**. In contrast, older software versions generated plots in the **v0 format**, which is only compatible with CPU plotting.
:::


### Supported Platforms and Graphics Card Compatibility
| Platform          | 🐧 Linux | 🪟 Windows | [Nvidia](#nvidia) | [AMD](#amd) | [Intel](#intel) |
|-------------------|:-------:|:---------:|:---------:|:-----------:|:------------:|
| [Subspace](https://github.com/autonomys/subspace/releases)          |   ✅    |    ✅     |    ✅     |     🔜      |      🔜      |
| [Space Acres](https://github.com/autonomys/space-acres/releases)       |   ✅    |    ✅     |    ✅     |     🔜      |      🔜      |


## Supported Video Cards

### Nvidia
**Supported:**

| Series            | Models                                      |
|-------------------|---------------------------------------------|
| RTX 40 Series     | RTX 4060, RTX 4060 Ti, RTX 4070, RTX 4070 Ti, RTX 4080, RTX 4090 |
| RTX 30 Series     | RTX 3060, RTX 3060 Ti, RTX 3070, RTX 3070 Ti, RTX 3080, RTX 3080 Ti, RTX 3090, RTX 3090 Ti |
| RTX 20 Series     | RTX 2060, RTX 2060 Super, RTX 2070, RTX 2070 Super, RTX 2080, RTX 2080 Super, RTX 2080 Ti |
| Drivers           | Nvidia drivers version **550** or later    |

### AMD

**Supported:**

| Series            | Models                                      |
|-------------------|---------------------------------------------|
| PRO               | W7800, W6800, V620                          |
| RX 7000 Series    | 7800 XT, 7700 XT, 7600 (but not 7600 XT)  |
| RX 6000 Series    | 6950 XT, 6900 XT, 6800 XT, 6800           |

**Potential Support:**

| Series            | Models                                      |
|-------------------|---------------------------------------------|
| RX 6700 Series    | 6750 XT, 6700 XT, 6700                     |
| RX 6000 Series    | 6650 XT, 6600 XT, 6600                     |

**Unsupported:**

| Series            | Models              |
|-------------------|---------------------|
| RX 5000 series    | RX 5500, RX 5600    |

<span style="font-size: smaller;">For more details, please consult the <a href="https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html">AMD ROCm Requirements</a> for compatibility.</span>

### Intel

Intel Arc GPUs are expected to be supported in the future, but specific models have not been released yet.


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


### Known Issues

- Plotting may occasionally halt unexpectedly, which necessitates a restart of the farmer.