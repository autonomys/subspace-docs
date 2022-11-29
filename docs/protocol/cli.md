---
title: Subspace CLI (Recommended)
sidebar_position: 2
description: Farming on the Subspace Network
keywords:
    - Farmer
    - Farming
    - CLI
    - Binaries
    - GitHub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';


:::tip Recommended
[Subspace CLI](https://github.com/subspace/subspace-cli) is the recommended way to farm on the Subspace Network. Follow the guide below to get started or check out the project [README on GitHub](https://github.com/subspace/subspace-cli/blobl/main/README.md).
:::

## Pre-Requisites
---

### System Requirements

:::danger Farming can be Network Intensive.

Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive.

This may impact your network usage so please check your network connection if you have a hard data limit.
:::

Subspace CLI requires commodity hardware specs to operate. At a **minimum**, you should have:

* CPU with greater than 2 cores
* 4 GB RAM (8 GB is **recommended**)
* 150 GB Storage


### Getting A Crypto Wallet

Before running anything you need to have a wallet where you'll receive testnet coins. 
Follow our how-to guides in the [Wallets section](/docs/category/wallets/) of the documentation for steps on how to get your wallet setup.

## Installation

:::caution ALPHA SOFTWARE
Subspace CLI is  in **alpha**.
Please feel free to file bug reports on our GitHub issues.
Subspace CLI is still in alpha.
:::

### Download Binaries

---

Compiled versions of the Subspace CLI is [hosted on GitHub](https://github.com/subspace/subspace-cli/releases). This is the recommended way to install the application. Please find the appropriate binary for your operating system.

<Tabs groupId="OS">

<TabItem value="windows" label="🖼️ Windows" default>

1. Download the Release Binary below.
    
<div className={styles.buttons}>
    <Link
    className="button button--secondary button"
    to="https://github.com/subspace/subspace-cli/releases/download/v0.1.0-alpha/subspace-cli-windows-x86_64-v0.1.0-alpha.exe">
    Windows CLI Executable
    </Link>
</div>

2. Open Powershell, type `cd Downloads` (or `cd Your-File-Location`). 

</TabItem>

<TabItem value="macos" label="🍎macOS" default>

1. Download your Release Binary below. 

<div className={styles.buttons}>
    <Link
    className="button button--secondary button"
    to="https://github.com/subspace/subspace-cli/releases/download/v0.1.0-alpha/subspace-cli-macos-x86_64-v0.1.0-alpha.zip">
    Mac CLI Executable (Intel)
    </Link>
</div>
<div className={styles.buttons}>
    <Link
    className="button button--secondary button"
    to="https://github.com/subspace/subspace-cli/releases/download/v0.1.0-alpha/subspace-cli-macos-aarch64-v0.1.0-alpha.zip">
    Mac CLI Executable (Apple M1)
    </Link>
</div>

2. Extract the `.zip` file.
3. Open Terminal, type `cd Downloads` (or `cd Your-File-Location`).
4. Make the binary executable by running `chmod +x subspace-cli-macos-x86_64-v0.1.0-alpha`.

</TabItem>
<TabItem value="linux" label="🐧Ubuntu">

1. Download your Release Binary below. 

<div className={styles.buttons}>
    <Link
    className="button button--secondary button"
    to="https://github.com/subspace/subspace-cli/releases/download/v0.1.0-alpha/subspace-cli-Ubuntu-x86_64-v0.1.0-alpha">
    Ubuntu Executable
    </Link>
</div>
<div className={styles.buttons}>
    <Link
    className="button button--secondary button"
    to="https://github.com/subspace/subspace-cli/releases/download/v0.1.0-alpha/subspace-cli-ubuntu-aarch64-v0.1.0-alpha">
    Linux Arch Executable
    </Link>
</div>

2. Open Terminal, type `cd Downloads` (or `cd Your-File-Location`).
3. Make the binary executable by running `chmod +x subspace-cli-macos-x86_64-v0.1.0-alpha`.


</TabItem>

</Tabs>

### Configuration

---

To start we will have to initialize our Farmer, this can be done with:

<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

```powershell
subspace-cli-windows-x86_64-v0.1.0-alpha init
```

</TabItem>

<TabItem value="macos" label="🍎 macOS">

```bash
subspace-cli-macos-x86_64-v0.1.0-alpha init
```

</TabItem>

<TabItem value="linux" label="🐧 Ubuntu">

```bash
subspace-cli-ubuntu-x86_64-v0.1.0-alpha init
```

</TabItem>
</Tabs>

This will prompt you to setup your CLI configurations to begin farming. You should see a similar prompt like so:

```bash
$ ./subspace-cli-ubuntu-x86_64-v0.1.0-alpha init

version: 0.1.0

SUBSPACE NETWORK

Configuration creation process has started...
Enter your farmer/reward address: REDACTED_ADDRESS
Enter your node name to be identified on the network(defaults to `username`, press enter to use the default):
Specify a plot location (press enter to use the default: `"/home/username/.local/share/subspace-cli/plots"`):
Specify a plot size (defaults to `100.0 GB`, press enter to use the default):
Specify the chain to farm(defaults to `dev`, press enter to use the default):
Configuration has been generated at /home/username/.config/subspace-cli
Ready for lift off! Run the follow command to begin:
`./subspace-cli farm`
```

:::info Finding your settings.toml

After running `subspace-cli init`, the prompt will display where the `settings.toml` is generated. However in case you missed it, you can find the file based on your operating system:

<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

Your `settings.toml` will be found in `$FOLDERID_RoamingAppData/subspace-cli/settings.toml`

</TabItem>

<TabItem value="macos" label="🍎macOS">

Your `settings.toml` will be found in `$HOME/Library/Application Support/subspace-cli/settings.toml`

</TabItem>

<TabItem value="linux" label="🐧Ubuntu">

Your `settings.toml` will be found in `$HOME/.config/subspace-cli/settings.toml`

</TabItem>
</Tabs>

:::






### Gemini 3 Testnet

---

:::tip Use the default generated configuration!
The default configuration generated by Subspace CLI will have you ready for Gemini 3.
:::

If you are using the default configurations from Subspace CLI, you are ready to go with the Gemini 3 Testnet. Alternatively, you can ensure this occurs by manually setting the network like so.

Open your `settings.toml` directory and ensure your `chain` is correctly specified to `gemini-3a` as so:


```toml
# settings.toml
[node]
chain = 'gemini-3a'
# ... redacted ... 
```

### Local Development

---

To run Subspace CLI in a local development mode, modify your `settings.toml` and ensure your `chain` points to `dev`:

```toml
# settings.toml
[node]
chain = 'dev'
# ... redacted ... 
```

## Farming

---

To begin farming on the network, just run the `farm` command with the CLI like so:

<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

```powershell
./subspace-cli-windows-x86_64-v0.1.0-alpha farm
```

</TabItem>

<TabItem value="macos" label="🍎 macOS">

```bash
./subspace-cli-macos-x86_64-v0.1.0-alpha farm
```

</TabItem>

<TabItem value="linux" label="🐧 Ubuntu">

```bash
./subspace-cli-ubuntu-x86_64-v0.1.0-alpha farm
```

</TabItem>
</Tabs>

You should see the farmer and node start successfully and begin syncing, plotting, and then farming:

```bash
$ ./subspace-cli-ubuntu-x86_64-v0.1.0-alpha farm
Starting node ... (this might take up to couple of minutes)
Node started successfully!
Starting farmer ...
Farmer started successfully!
Initial plotting for plot: #0 (/home/username/.local/share/subspace-cli/plots)
⠁ [00:00:00] 3% [=>                                      ]
      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s 
```

That's it! Enjoy and Happy Farming!
