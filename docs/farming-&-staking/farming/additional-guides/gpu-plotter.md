---
title: GPU Plotter
sidebar_position: 4
description: Tips on GPU Plotter
keywords:
    - Plotter
    - Farming
    - GPU
---

Official builds of the **GPU Plotter** are now available!

## Overview

Autonomys requires a portion of your drive(s) to be reserved for plots (SSD or NVMe). Once plotted, these plots are farmed using your CPU. This farming process is not CPU intensive, and most modern consumer CPUs can farm a very large amount of drive space. The initial creation of these plots (and replotting) is much more CPU intensive, generally making the CPU the largest bottleneck in creating these plots.

With the release of GPU plotting, you can now use your supported GPU(s) to create these plots, either in addition to or instead of using the CPU. While many newer CPUs can plot a sector in less than 2 minutes, a high end GPU can do it in less than 6 seconds.

GPU plotting is not required, but it is much more energy efficient and significantly faster than using a CPU alone.


:::note Plot Format Compatibility
GPU plotting employs the new **v1 plot format**, which is applicable to any plots created with versions released on or after **July 5th**. In contrast, older software versions generated plots in the **v0 format**, which is only compatible with CPU plotting.
:::

### Supported and Planned Platforms
| Platform          | Status                |    Linux    |   Windows   |
|-------------------|-----------------------|:-----------:|:-----------:|
| Subspace          | ✅ Available           |     ✅      |     ✅      |
| Space Acres       | 🛠️ In Development     |     ⏳      |     ⏳      |

## Supported Video Cards

### NVIDIA
**Supported Models:**  
RTX 20 series cards and newer running NVIDIA driver version **550** or later.

### AMD (Future Support)

**Supported Models:**
| Series            | Models                                      |
|-------------------|---------------------------------------------|
| PRO               | W7800, W6800, V620                          |
| RX 7000 Series    | 7800 XT, 7700 XT, 7600 (but not 7600 XT)  |
| RX 6000 Series    | 6950 XT, 6900 XT, 6800 XT, 6800           |

### Potentially Supported (Requires Testing)
**Models Potentially Supported:**
| Series            | Models                                      |
|-------------------|---------------------------------------------|
| RX 6000 Series    | 6650 XT, 6600 XT, 6600                     |
| RX 6700 Series    | 6750 XT, 6700 XT, 6700                     |

For more details, please consult the [AMD ROCm Requirements](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html) for compatibility.

### Specifically Unsupported
**Unsupported Models:**
- RX 5xxx series

### Intel Arc (Future Support)

Stay tuned for updates on compatibility for Intel Arc GPUs.


## Common Plotting Parameters

Here are some common parameters to use with the GPU plotter:

- Defines how many sectors the farmer will encode concurrently (default behavior is off when a compatible GPU is detected):
  ```bash
  --cpu-sector-encoding-concurrency <sectors>

  # Example:
  --cpu-sector-encoding-concurrency 2
  ```
- Specify exact GPUs to be used for plotting instead of using all GPUs (default behavior):
  ```bash
  --cuda-gpus <gpu_ids>

  # Example:
  --cuda-gpus 0,1
  ```
  
## Farming Cluster
  
When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher.