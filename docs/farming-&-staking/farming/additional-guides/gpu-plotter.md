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

![GPU Plotter](https://github.com/autonomys/subspace/actions/runs/10835197512)

While eventually the GPU plotter will support most NVIDIA and AMD video cards and work on Windows, Mac and Linux systems, but for now we are limited to NVIDIA cards on Linux systems.

While the download will contain both the node and farmer Advanced CLI executables, you only need the farmer.  It will work with both a standalone farming/plotting as well as in a farming cluster.  Space Acres will eventually be supported.

You will need to use either the 550 or 560 NVIDIA drivers.

:::note
By default it will use all of your GPU's but you can override this with the `--cuda-gpus` parameter.
:::

## Supported Video Cards

Currently any NVIDIA RTX 2xxx card will work.  

Eventually these AMD video cards will be supported: ![AMD Cards](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html).  Most likely there will be additional cards supported.  

There are a few pro cards that are similar to consumer variants like PRO W7800 W6800 V620, at least ![on Windows](https://discord.com/channels/864285291518361610/1062507270539321485/1281966867476381798) following are listed as supported (but not on Linux for some reason):
7800 XT
7700 XT
7600 (but not 7600 XT)
6950 XT
6900 XT
6800 XT
6800
Probably supported (need to test):
6750 XT
6700 XT
6700
6650 XT
6600 XT
6600

Nothing from RX 5xxx series is listed at all.

:::note
The plotter will use both the CPU and the GPU.  If you want to disable the CPU being used, you can with this parameter: `--cpu-sector-encoding-concurrency 0`
:::

Should you have any questions or need further assistance, please don't hesitate to reach out to the team on Discord!