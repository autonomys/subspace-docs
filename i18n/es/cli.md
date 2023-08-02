---
title: Simple CLI (Recommended)
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



Simple CLI also known as [Subspace CLI](https://github.com/subspace/subspace-cli) is the recommended way to farm on the Subspace Network. To get started, follow the guide below. For more information, you can check out the project [README on GitHub](https://github.com/subspace/subspace-cli/blob/main/README.md).
:::




## Pre-Requisites

---

### System Requirements

:::danger Farming can be Network Intensive.




Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive.

This may impact your network usage so please check your network connection if you have a hard data limit.
:::




Subspace CLI requires commodity hardware specs to operate. At a **minimum**, it is recommended to have:

| Hardware | Specs           |
| -------- | --------------- |
| CPU      | 4 Core+         |
| RAM      | 4GB+ (Rec. 8GB) |
| SWAP     | 4GB             |
| Storage  | 100GB SSD       |

:::caution BUG#1388 - Storage Growing Too Large




We are currently investigating a bug that is causing the node Archive to exceed its expected growth. As a result, we suggest having a minimum of 150-200GB of storage available for your system.

Therefore, please make sure that you have at least ~150-200GB of storage in addition to your desired plot size.

For more information, please visit: https://github.com/subspace/subspace/issues/1388

:::




:::note CoW File Systems Warning



It is advised not to use the Subspace farmer and node on CoW file systems for any OS.

If BTRFS is used with Subspace, the directory/whole file system must be CoW disabled with the following command prior to starting Subspace.

**Command to Cow Disable**

```
sudo chattr +C path/to/datasubspace-cli-windows-x86_64-skylake-v0.42-alpha.exe
```

Alternatively, non-CoW file systems like ext4 or xfs can be used instead.
:::




### Getting A Crypto Wallet

Before running anything you need to have a wallet where you'll receive testnet coins. Follow our how-to guides in the [Wallets section](/docs/category/wallets/) of the documentation for steps on how to get your wallet setup.

### Required ports

Currently, a few ports need to be exposed for node to work properly.

If you have a server with no firewall, there is nothing to be done, but otherwise make sure to open the following TCP ports for incoming connections.

- `30333`
- `30433`

On the desktop side if you have a router in front of your computer, you'll need to forward TCP ports to the machine on which your node is running (how this is done varies from router to router, but there is always a feature like this, refer to [How to Forward Ports](port-forwarding.md) for a more in-depth tutorial). If you're connected directly without any router, then again nothing needs to be done in such case.



## Installation

:::caution ALPHA SOFTWARE



Subspace CLI is in **alpha**. Please feel free to file bug reports on our GitHub issues.
:::

<details>
  <summary>
   
  </summary>
  <div>
  <iframe width="560" height="315" src="" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</details>

### Download Binaries



---

Compiled versions of the Subspace CLI is [hosted on GitHub](https://github.com/subspace/subspace-cli/releases). This is the recommended way to install the application. Please find the appropriate binary for your operating system.

<Tabs groupId="OS">

<TabItem value="windows" label="🖼️ Windows" default>

:::caution
  
  
  

Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired

:::
  
  
  
1. Download the Release Binary below.

<details>
  <summary>
  Expand for Version 2 - For older processors since ~2009 and some old VMs
  </summary>
  <div className={styles.buttons}>
    
           className="button button--secondary button"
      to="https://github.com/subspace/subspace-cli/releases/download/v0.5.1-alpha-2/subspace-cli-windows-x86_64-v2-v0.5.1-alpha-2.exe">
      Windows CLI Executable
    </Link>
  </div>
</details>

<details>
  <summary>
  Expand for Version 3 - For newer processors since ~2015
  </summary>
  <div className={styles.buttons}>
    
           className="button button--secondary button"
      to="https://github.com/subspace/subspace-cli/releases/download/v0.5.1-alpha-2/subspace-cli-windows-x86_64-skylake-v0.5.1-alpha-2.exe">
      Windows CLI Executable
    </Link>
  </div>
</details>




2. Open Powershell, type `cd Downloads` (or `cd Your-File-Location`).

:::warning
  
  
  
The warning below may appear because the application is trying to access the internet. This is expected as it is how the farmer talks to other farmers on the network. Please select 'Allow access' to continue farming.
:::
  
  
  
![Windows Defender Firewall](/img/doc-imgs/Windows_Security_Alert.png)

</TabItem>

<TabItem value="macos" label="🍎macOS" default>

:::caution
  
  
  

Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired

:::
  
  
  
1. Download your Release Binary below.

<details>
  <summary>
  Mac CLI Executable (Intel)
  </summary>
  <div className={styles.buttons}>
    
           className="button button--secondary button"
      to="https://github.com/subspace/subspace-cli/releases/download/v0.5.1-alpha-2/subspace-cli-macos-x86_64-v0.5.1-alpha-2.zip">
      Mac CLI Executable (Intel)
    </Link>
  </div>
</details>

<details>
  <summary>
  Mac CLI Executable (Apple M Series)
  </summary>
  <div className={styles.buttons}>
    
             className="button button--secondary button"
        to="https://github.com/subspace/subspace-cli/releases/download/v0.5.1-alpha-2/subspace-cli-macos-aarch64-v0.5.1-alpha-2.zip">
        Mac CLI Executable (Apple M Series)
    </Link>
  </div>
</details>

2. Extract the `.zip` file.
3. Open Terminal, type `cd Downloads` (or `cd Your-File-Location`).
4. Make the binary executable by running:
    * `chmod +x subspace-cli-macos-x86_64-v0.5.1-alpha-2` (Intel Chip)
    * `chmod +x subspace-cli-macos-aarch64-v0.5.1-alpha-2` (Apple M Series)

:::warning
  
  
  
Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security&Privacy -> General -> Allow
:::
  
  
  

</TabItem>
<TabItem value="linux" label="🐧Ubuntu">

:::caution
  
  
  

Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired

:::
  
  
  
1. Download your Release Binary below.

<details>
  <summary>
  Expand for Ubuntu Executable
  </summary>
  <details>
    <summary>
    Version 2 - for older processors since ~2009 and some old VMs
    </summary>
    <div className={styles.buttons}>
      
               className="button button--secondary button"
          to="https://github.com/subspace/subspace-cli/releases/download/v0.5.1-alpha-2/subspace-cli-ubuntu-x86_64-v2-v0.5.1-alpha-2">
          Ubuntu Executable
      </Link>
    </div>
  </details>
  <details>
    <summary>
    Version 3 - For newer processors since ~2015
    </summary>
    <div className={styles.buttons}>
      
               className="button button--secondary button"
          to="https://github.com/subspace/subspace-cli/releases/download/v0.5.1-alpha-2/subspace-cli-ubuntu-x86_64-skylake-v0.5.1-alpha-2">
          Ubuntu Executable
      </Link>
    </div>
  </details>
</details>

<details>
  <summary>
  Expand for Aarch64/64-bit Raspberry Pi Executables
  </summary>
  <div className={styles.buttons}>
    
             className="button button--secondary button"
        to="https://github.com/subspace/subspace-cli/releases/download/v0.5.1-alpha-2/subspace-cli-ubuntu-aarch64-v0.5.1-alpha-2">
        Ubuntu Executable (aarch64)
    </Link>
  </div>
</details>

2. Open Terminal, type `cd Downloads` (or `cd Your-File-Location`).
3. Make the binary executable by running:
    * `chmod +x subspace-cli-ubuntu-x86_64-skylake-v0.5.1-alpha-2` (Ubuntu)
    * `chmod +x subspace-cli-ubuntu-aarch64-v0.5.1-alpha-2` (Ubuntu aarch64)

</TabItem>

</Tabs>

### Configuration

---

To start we have to initialize our Farmer, this can be done with:

<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

```powershell
./subspace-cli-windows-x86_64-skylake-v0.5.1-alpha-2.exe init
```

</TabItem>

<TabItem value="macos" label="🍎 macOS">
Intel Chip:

```bash

./subspace-cli-macos-x86_64-v0.5.1-alpha-2 init

```
Apple M Series:

```bash

./subspace-cli-macos-aarch64-v0.5.1-alpha-2 init

```

</TabItem>

<TabItem value="linux" label="🐧 Ubuntu">
Ubuntu:

```bash

./subspace-cli-ubuntu-x86_64-skylake-v0.5.1-alpha-2 init

```
Ubuntu Executable (aarch64):

```bash

./subspace-cli-ubuntu-aarch64-v0.5.1-alpha-2 init

```

</TabItem>
</Tabs>

This will prompt you to setup your CLI configurations to begin farming. You should see a similar prompt like so (some info might be different than shown here w.r.t your OS):

```bash
version: 0.5.0

Configuration creation process has started...
Enter your farmer/reward address: REDACTED_ADDRESS
Enter your node name to be identified on the network(defaults to `username`, press enter to use the default):
Specify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/subspace-cli/plots"`):
Specify a path for storing node files (press enter to use the default: `"/home/username/.local/share/subspace-cli/node"`):
Specify a plot size (defaults to `1000.0 MB`, press enter to use the default):
Specify the chain to farm. Available options are: [Gemini3e, Dev, DevNet].
Defaults to `Gemini3e`, press enter to use the default:
Configuration has been generated at /home/username/.config/subspace-cli
Ready for lift off! Run the follow command to begin: `"path/to/executable" farm`
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

If you are using the default configurations from Subspace CLI, you are ready to go with the Gemini 3 Testnet. Alternatively, you can ensure this occurs by manually setting the network like so.

Open your `settings.toml` directory and ensure your `chain` is correctly specified to `gemini-3e` as so:

```toml
# settings.toml
[node]
chain = 'gemini-3e'
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
./subspace-cli-windows-x86_64-v0.5.1-alpha-2.exe farm
```

</TabItem>

<TabItem value="macos" label="🍎 macOS">

Intel Chip:

```bash

./subspace-cli-macos-x86_64-v0.5.1-alpha-2 farm

```
Apple M1 Chip:

```bash

./subspace-cli-macos-aarch64-v0.5.1-alpha-2 farm

```

</TabItem>

<TabItem value="linux" label="🐧 Ubuntu">

Ubuntu:

```bash

./subspace-cli-ubuntu-x86_64-skylake-v0.5.1-alpha-2 farm

```
Ubuntu Executable (aarch64):

```bash

./subspace-cli-ubuntu-aarch64-v0.5.1-alpha-2 farm

```

</TabItem>
</Tabs>

You should see the farmer and node start successfully and begin syncing, plotting, and then farming:

```bash
Starting node ... (this might take up to couple of minutes)
Node started successfully!
Starting farmer ...
Farmer started successfully!
Initial plotting for plot: #0 (/home/username/.local/share/subspace-cli/plots)
⠁ [00:00:00] 3% [=>                                      ]
      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s
```

That's it! Enjoy and Happy Farming!

#### Moving the Farming Process to the Background

<Tabs groupId="OS">
<TabItem value="tmux" label="Tmux" default>

:::tip Learn More about Tmux
  
  
  

If you want to learn more about Tmux and its options check out their Repo [here](https://github.com/tmux/tmux/wiki)

:::
  
  
  

* Create a new tmux session using a socket file named farming

```bash
$ tmux -S farming
```


* Move process to background by detaching
```bash
Ctrl+b d OR ⌘+b d (Mac)
```

* To re-attach
```bash
$ tmux -S farming attach
```

* To delete farming session
```bash
$ tmux kill-session -t farming
```

</TabItem>
<TabItem value="screen" label="Screen">

:::tip Learn More about Screen
  
  
  

If you want to learn more about Screen and its options check out their Webpage [here](https://www.gnu.org/software/screen/)

:::
  
  
  

* Create new screen using a socket file named farming
```bash
$ screen -S farming
```

* Move process to background by detaching
```bash
Ctrl+d a OR ⌘+d a (Mac)
```

* To re-attach
```bash
$ screen -r farming
```
* To delete farming session
```bash
$ screen -S farming -X quit
```
</TabItem>
</Tabs>

## Having Trouble?

If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our [Forums](https://forums.subspace.network) to see if your issue may have been solved, if its a new one feel free to post it! You can also join our [Discord](https://discord.gg/subspace-network) for additional Peer to Peer help.

### View your Logs

A good place to start if you are facing trouble is by viewing your logs and seeing if there are any errors or insights that might be available. You can find the location for your logs below

<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

Your Logs will be found in `%USERPROFILE%/AppData/Local/subspace-cli/logs`

</TabItem>

<TabItem value="macos" label="🍎macOS">

Your Logs will be found in `$HOME/Library/Logs/subspace-cli/`

</TabItem>

<TabItem value="linux" label="🐧Ubuntu">

Your Logs will be found in `$HOME/.local/share/subspace-cli/logs`

</TabItem>
</Tabs>

### Wipe Node & Farmer

:::tip Updated from a previous version and now having issues?




Occasionally after updating to a new version of the CLI you will need to wipe your node and farmer, generally this should not be required but can be attempted if your farmer is having issues after having had worked fine previously.

:::




To simply restart the node, go to the terminal where you started the `farm` command, and press `Ctrl + C` you should see a shutdown message appear and the application will attempt a simple shutdown, if you dont see the message press `Ctrl + C` again to force shutdown. You can then simply start the farmer again with the `farm` command you used prior.

Use the same file name as the previous init and farm steps, then add the wipe command to free the previous memory that was being used. Generally, only do this if you have severe errors and are prompted by a staff member.

```bash
./subspace-cli-file-name wipe
```

After wiping, follow the init and farm steps above to start farming again!
