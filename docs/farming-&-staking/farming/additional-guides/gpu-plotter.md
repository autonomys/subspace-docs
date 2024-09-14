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

:::info Download Links
You must be signed in to GitHub to access and download from these links.
- [Download GPU Plotter for Linux](https://github.com/autonomys/subspace/actions/runs/10850781628)
- [Download GPU Plotter for Windows](https://github.com/autonomys/subspace/actions/runs/10849228997)

:::

## Overview

Autonomys requires a portion of your disk(s) to be reserved for plots on your solid-state drive (SSD). Once created, these plots are farmed using your CPU. This farming process is not CPU-intensive, and most 
modern consumer CPUs can farm a large amount of disk space. However, the initial creation of these plots (and replotting) is much more CPU-intensive, often making the CPU the biggest bottleneck in creating new plots.

With the release of the GPU plotter, you can now use your GPU to create plots, either in addition to or instead of using the CPU. While many newer CPUs can plot a sector in less than 2 minutes, a high-end video card 
can do it in just 6 seconds. Using a GPU is not required, but it is more energy-efficient and significantly faster than using a CPU alone.

:::note Plot Format Compatibility
GPU plotting uses the newer **v1 plot format**, applied to any plots created with versions released on or after **July 5th**.
Older software versions generated plots in the **v0 format**, which works only with CPU plotting.
:::

## Requirements

:::important Driver Requirement
The GPU plotter requires NVIDIA drivers version **550** or newer.
:::

The GPU Plotter currently supports **NVIDIA RTX 20 series** and newer consumer cards.
Support for additional AMD cards will be added in the future.

The download package contains both the node and farmer Advanced CLI executables, but you only need the farmer for plotting. You can continue using an official release for your node. This setup supports both standalone farming/plotting and farming cluster. Support for Space Acres will be added in the future.

If you encounter the following error message you need to update to supported drivers:
```
Failed to encode sector: Records encoder error:
cudaGetLastError()@C:\actions-runner\_work\subspace\subspace\shared\subspace-proof-of-space-gpu\src\subspace_api.cu:191 failed:
"the provided PTX was compiled with an unsupported toolchain."
```

:::tip GPU Selection Override
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

:::info Unsupported GPUs
RX 5xxx series cards are not supported at this time.
:::

## CPU and GPU Usage

By default, the plotter takes advantage of both the **CPU** and **GPU**. However, if you're aiming to maximize GPU performance, you may want to disable CPU plotting, as GPU plotting still requires some CPU resources for managing tasks. To disable CPU usage, use the following parameter:

```bash
--cpu-sector-encoding-concurrency 0
```

Alternatively, if you prefer to disable **GPU** plotting and rely solely on **CPU**, you can turn off CUDA support by setting the value to an empty string:

```bash
--cuda-gpus ""
```

## Farming Cluster

When using a farming cluster please be aware that that when using GPU's - and especially multiple GPU's - you may exceed the bandwidth of your network connection. A fast GPU will exceed the bandwidth that a 1G 
connection would provide. That doesn't mean it will fail to work, it just means that your video card will be idle while it waits for the data to transfer. Many people with fast or multiple GPU's are using 2.5G 
or 10G connections.

## Support

Should you have any questions or need further assistance, please don't hesitate to reach out to the team on Discord!
