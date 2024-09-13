---
title: Experimental GPU Plotter
sidebar_position: 4
description: Tips on GPU Plotter
keywords:
    - Plotter
    - Farming
    - GPU
---

The first test builds of the **GPU Plotter** are now available!!!

[Download GPU Plotter](https://github.com/autonomys/subspace/actions/runs/10850781628)

## Overview
The GPU Plotter will eventually support most NVIDIA and AMD video cards. For now, only NVIDIA cards are supported.

The download package includes both the node and farmer Advanced CLI executables, but you only need the farmer for plotting. It works for both standalone farming/plotting and farming clusters. Support for Space Acres will be added in the future.

You will need to install either the NVIDIA 550 or 560 drivers if you are using Linux.

:::note
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

The plotter utilizes both the CPU and GPU. If you wish to disable CPU usage, you can do so with the following parameter: `--cpu-sector-encoding-concurrency 0`

## Support

Should you have any questions or need further assistance, please don't hesitate to reach out to the team on Discord!