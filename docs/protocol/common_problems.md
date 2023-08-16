---
title: Common problems
sidebar_position: 6
description: Common problems and ways to resolve them
keywords:
- Error
- Problem
- Issues
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';


While Subspace strives to release bug-free software, users may encounter certain errors. Some of these can be safely ignored, while others require attention.


# Common problems and ways to resolve them


### Error while dialing dns telemetry

```
Error while dialing /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F
Custom { kind: Other, error: Timeout }
```
This error is related only to the telemetry server. It's something that can happen occasionally, but doesn't affect farming. You can safely ignore it.


### Farmer stuck on plotting, no progress is made in several hours
Try restarting your node or farmer. We've noticed that sometimes, when creating larger plots, the process might appear to be stalled, but it automatically continues after some time.


### Illegal instruction (core dumped)


This error is caused by old CPUs without necessary instruction support (e.g. ADX 4). Can be fixed by compiling software from the source on that machine.


While processors without ADX instructions are supported, their performance will be impacted significantly compared to processors that do support ADX instructions.


Most modern desktop processors starting with Broadwell on the Intel side and Ryzen (ZEN 1) on the AMD side do support necessary ADX instructions support and shouldn't be affected by the error.


### No rewards after multiple days of farming


Please make sure to:
- Use our latest stable release, as shown on our [Github releases](https://github.com/subspace/subspace-cli/releases)
- Verify your farmer is present and on the highest block on our [telemetry server](https://telemetry.subspace.network/)
- Verify your balance using the [Polkadot explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3e.subspace.network%2Fws#/explorer)


:::note
Make sure to select the correct testnet in the dropdown and tabs, e.g. gemini-3e
:::


### Recovering missing piece failed


```
ERROR single_disk_plot{disk_farm_index=0}:
subspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135
```


This is not a crucial error and it can be ignored.


### Importing block consensus error


```
Error importing block "block_number", consensus error: Import failed: Database
```


Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space


### Unable to author block in slot. No best block header


```
Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash
```


Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space


### Fast node synchronization (more than 100+ blocks per second) goes only up to ±20k blocks, then synchronization speed drops significantly.


As the database size increases and blocks get bigger (as farmers started to produce votes), it is expected that the sync speed will settle on a smaller number. We have made some performance improvements in Gemini 3e and will do more performance tuning when the protocol is functionally complete.


### subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN.


```
subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57
```


This isn’t a bug but rather a warning, it is something to be expected on a Decentralized Storage Network. There is nothing you need to do as a user with this warning, it's likely it will come up occasionally but as long as there aren’t other more catastrophic errors it can be ignored.


### Failed to build a farmer: File exists


```
0: Failed to build a farmer
1: Single disk plot creation error: I/O error: File exists (os error 17)
2: I/O error: File exists (os error 17)
3: File exists (os error 17)
```


The system is detecting a pre-existing installation. If this is the case, you might consider [wiping](../protocol/cli.mdx#wipe-node--farmer) the current setup and [re-initializing](../protocol/cli.mdx#configuration) the CLI to ensure a clean installation.


### Block import error: Potential long-range attack: block not in finalized chain.


```
WARN sc_service::client::client: Block import error: Potential long-range attack: block not in finalized chain.
```
The node somehow ended up being on a fork, try wiping and starting from scratch.


## Gemini 3e specific problems


<details>
<summary>
Some large plots might not work correctly.
</summary>
We're looking more into enabling parallelism for larger plots and further protocol changes will certainly help with this. Stay tuned!
</details>


<details>
<summary>
Sector plotting attempt failed, will retry later sector_offset=0 sector_index=.... error=Failed to retrieve piece 192: Not enough pieces to reconstruct a segment
</summary>
The issue is related to a cache size restriction being hit rather than a particular point in time being reached. If that's the case, the team will enlarge cache size to get it resolved.
</details>

