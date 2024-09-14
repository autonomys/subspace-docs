---
title: GPU Plotter Trial Release
sidebar_position: 4
description: Tips on GPU Plotter
keywords:
    - Plotter
    - Farming
    - GPU
---

The first test builds of the **GPU Plotter** are now available!!!

- [Download GPU Plotter for Linux](https://github.com/autonomys/subspace/actions/runs/10850781628)
- [Download GPU Plotter for Windows](https://github.com/autonomys/subspace/actions/runs/10849228997)

:::note
Be aware that you must be logged into Github in order to download from these links.
:::

## Overview

Autonomys requires a portion of your disk(s) to be reserved for plots on your solid-state drive (SSD). Once created, these plots are farmed using your CPU. This farming process is not CPU-intensive, and most 
modern consumer CPUs can farm a large amount of disk space. However, the initial creation of these plots (and replotting) is much more CPU-intensive, often making the CPU the biggest bottleneck in creating new plots.

With the release of the GPU plotter, you can now use your GPU to create plots, either in addition to or instead of using the CPU. While many newer CPUs can plot a sector in less than 2 minutes, a high-end video card 
can do it in just 6 seconds. Using a GPU is not required, but it is more energy-efficient and significantly faster than using a CPU alone.

:::note
CPU plotting uses a v1 plot format. Any plots created with the application version available on or after July 5th use the v1 format. Earlier versions use the v0 format, which is only supported by CPU plotting.
:::

## Requirements

The GPU Plotter will eventually support most NVIDIA and AMD video cards. Currently, only NVIDIA cards are supported.

The download package includes both the node and farmer Advanced CLI executables, but you only need the farmer for plotting. You can continue to use an official release version for your node. It works for both standalone 
farming/plotting and farming clusters. Support for Space Acres will be added in the future.

For Linux users, you will need to install either the NVIDIA 550 or 560 drivers. Any recent driver for Windows should work. If you get a message that contains this warning: **"the provided PTX was compiled with an unsupported toolchain."**, 
then you need to update your drivers.

:::tip
By default, the plotter uses all available GPUs. You can override this behavior using the `--cuda-gpus` parameter.
:::

## Supported Video Cards

### NVIDIA

All NVIDIA RTX 20 series cards and newer are supported.

### AMD (Future Support) 

While current support is limited to NVIDIA, the following AMD video cards are expected to be supported in the future:
[AMD Cards System Requirements](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html). 

The following professional and consumer cards may be supported (especially [on Windows](https://rocm.docs.amd.com/projects/install-on-windows/en/docs-6.2.0/reference/system-requirements.html), though not yet on Linux):

- PRO W7800, W6800, V620
- 7800 XT, 7700 XT, 7600 (but not 7600 XT)
- 6950 XT, 6900 XT, 6800 XT, 6800

### Potentially Supported (Requires Testing)

- 6750 XT, 6700 XT, 6700
- 6650 XT, 6600 XT, 6600

:::note
No RX 5xxx series cards are currently listed for support.
:::

## CPU and GPU Usage

By default, the plotter utilizes both the CPU and GPU. If you wish to disable CPU usage, you can do so with the following parameter: `--cpu-sector-encoding-concurrency 0`

## Farming Cluster

When using a farming cluster please be aware that that when using GPU's - and especially multiple GPU's - you may exceed the bandwidth of your network connection. A fast GPU will exceed the bandwidth that a 1G 
connection would provide. That doesn't mean it will fail to work, it just means that your video card will be idle while it waits for the data to transfer. Mny people with fast or multiple GPU's are using 2.5G 
or 10G connections.

## Support

Should you have any questions or need further assistance, please don't hesitate to reach out to the team on Discord!