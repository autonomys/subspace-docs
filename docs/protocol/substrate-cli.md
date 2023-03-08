---
title: Substrate CLI (Advanced)
sidebar_position: 3
description: How to run a Subspace Network Farmer with the Substrate CLI
keywords:
    - Farmer
    - Farming
    - CLI
    - Binaries
    - Docker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';


:::caution Advanced Usage
[Subspace CLI](https://github.com/subspace/subspace-cli) is the recommended way to farm on the Subspace Network. Follow the guide below to get started or check out the project [README on GitHub](https://github.com/subspace/subspace-cli/blobl/main/README.md).
:::

## I. Pre-requisites

---

### A. System Requirements

:::note Network Warning
You will also want to ensure you have a stable Network connection. It is also important to note that plotting can be network intensive and may impact network usage if you have a hard data limit.
:::

:::note CoW File Systems Warning
It is advised not to use the Subspace farmer and node on CoW file systems for any OS.

If BTRFS is used with Subspace, the directory/whole file system must be CoW disabled with the following command prior to starting Subspace.

**Command to Cow Disable**
```
sudo chattr +C path/to/data
```
Alternatively, non-CoW file systems like ext4 or xfs can be used instead.
:::


|Hardware|Specs|
|-|-|
|CPU|4 Core+|
|RAM|4GB+ (Rec. 8GB)|
|SWAP|4GB|
|Storage|50GB|


### B. Crypto Wallet

Before running anything you need to have a wallet where you'll receive testnet coins. There are currently two wallets we suggest using, SubWallet being the preferred route.
- [SubWallet](https://subwallet.app/)
- [PolkadotJS](https://polkadot.js.org/extension/)

Install one of the two wallets above into your browser and create a new account there.
The address of your account will be necessary at the last step.

For help refer to our forum post [How to setup Subwallet & a Polkadot.js Wallet](https://forum.subspace.network/t/subspace-wallet/61)
- *make sure to follow the Bonus section of the bottom of the post above.*


### D. Required ports

Currently, a few ports need to be exposed for node to work properly.

If you have a server with no firewall, there is nothing to be done, but otherwise make sure to open the following TCP ports for incoming connections.

- `30333`
- `30433`
- `30533`

On the desktop side if you have a router in front of your computer, you'll need to forward TCP ports to the machine on which your node is running (how this is done varies from router to router, but there is always a feature like this, refer to [How to Forward Ports](port-forwarding.md) for a more in-depth tutorial).
If you're connected directly without any router, then again nothing needs to be done in such case.




## II. Installation

---

:::tip Looking for all Releases?
You can always find these executables in the [Releases](https://github.com/subspace/subspace/releases) section on our GitHub
:::

:::caution OpenCL support
If you use farmer executable starting with `subspace-farmer-opencl-` and see this error:
```
The code execution cannot proceed because OpenCL.dll was not found. Reinstalling the program may fix this problem.
```
Or farmer exits in CLI without any messages, it means you don't have OpenCL-capable GPU or drivers installed.
Installing OpenCL GPU drivers or using farmer executable without `opencl` in file name will fix the issue.


:::

We will be downloading two files for your respective operating system.
1. `Subspace-Node` - This is the executable that actually makes the connection with the Subspace Network
2. `Subspace-Farmer` - This is the executable that will actually farm for rewards on your allocated storage plot.

- *There is also an OpenCL option in case you have OpenCL-capable AMD, Intel or Nvidia GPU*
- *Those using Docker will not have to download anything, just configure the `docker-compose.yml`*


<Tabs groupId="OS">

<TabItem value="docker" label="🐋 Docker" default>

  1. Create `subspace` directory and `docker-compose.yml` in it with following contents:

  ```yml
    version: "3.7"
    services:
      node:
        # For running on Aarch64 add `-aarch64` after `DATE`
        image: ghcr.io/subspace/node:gemini-3c-2023-mar-07
        volumes:
    # Instead of specifying volume (which will store data in `/var/lib/docker`), you can
    # alternatively specify path to the directory where files will be stored, just make
    # sure everyone is allowed to write there
          - node-data:/var/subspace:rw
    #      - /path/to/subspace-node:/var/subspace:rw
        ports:
    # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all
    # occurrences of `30333` or `30433` in this file with another value
          - "0.0.0.0:30333:30333"
          - "0.0.0.0:30433:30433"
        restart: unless-stopped
        command: [
          "--chain", "gemini-3c",
          "--base-path", "/var/subspace",
          "--execution", "wasm",
          "--blocks-pruning", "archive",
          "--state-pruning", "archive",
          "--port", "30333",
          "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",
          "--rpc-cors", "all",
          "--rpc-methods", "safe",
          "--unsafe-ws-external",
          "--dsn-disable-private-ips",
          "--no-private-ipv4",
          "--validator",
    # Replace `INSERT_YOUR_ID` with your node ID (will be shown in telemetry)
          "--name", "INSERT_YOUR_ID"
        ]
        healthcheck:
          timeout: 5s
    # If node setup takes longer than expected, you want to increase `interval` and `retries` number.
          interval: 30s
          retries: 5

      farmer:
        depends_on:
          node:
            condition: service_healthy
        # For running on Aarch64 add `-aarch64` after `DATE`
        image: ghcr.io/subspace/farmer:gemini-3c-2023-mar-07
        volumes:
    # Instead of specifying volume (which will store data in `/var/lib/docker`), you can
    # alternatively specify path to the directory where files will be stored, just make
    # sure everyone is allowed to write there
          - farmer-data:/var/subspace:rw
    #      - /path/to/subspace-farmer:/var/subspace:rw
        ports:
    # If port 30533 is already occupied by something else, replace all
    # occurrences of `30533` in this file with another value
          - "0.0.0.0:30533:30533"
        restart: unless-stopped
        command: [
          "--base-path", "/var/subspace",
          "farm",
          "--disable-private-ips",
          "--node-rpc-url", "ws://node:9944",
          "--listen-on", "/ip4/0.0.0.0/tcp/30533",
    # Replace `WALLET_ADDRESS` with your Polkadot.js wallet address
          "--reward-address", "WALLET_ADDRESS",
    # Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 60G of disk space for node and some for OS)
          "--plot-size", "PLOT_SIZE"
        ]
    volumes:
      node-data:
      farmer-data:
  ```

  2. Now edit created file:

  a. Replace `INSERT_YOUR_ID` with desired name that will be shown in telemetry (doesn't impact anything else)

  b. Replace `WALLET_ADDRESS` with your wallet address

  c. Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)

  *If you want to store files on a separate disk or customize port, read comments in the file.*

  3. Now go to directory with `docker-compose.yml` and type `docker-compose up -d` to start everything

  You can read logs with `docker-compose logs --tail=1000 -f`, for the rest read [Docker Compose CLI reference](https://docs.docker.com/compose/reference/).

</TabItem>

<TabItem value="windows" label="🖼️ Windows" default>
  <div className={styles.buttons}>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-node-windows-x86_64-gemini-3c-2023-mar-07.exe">
      Download Node Executable
    </Link>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-farmer-windows-x86_64-gemini-3c-2023-mar-07.exe">
      Download Farmer Executable
    </Link>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-farmer-opencl-windows-x86_64-gemini-3c-2023-mar-07.exe">
      Download Farmer Executable (OpenCL)
    </Link>
  </div>

  ---

:::caution Windows No Output Bug

  If you face an error where the node outputs nothing and no error code is given it is likely you just need to install the latest Visual C++ Redistributable package [here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

:::

  1. Open `Powershell` (we do not recommend using Command Prompt as its syntax is slightly different)
  2. In the terminal we will change to the Downloads directory using this command `cd Downloads`
  3. We will then start the node using the following command
  > You may get a popup asking for firewall permission, make sure to click `Allow`

  ```PowerShell
  # Replace `INSERT_YOUR_ID` with a nickname you choose
  # Copy all of the lines below, they are all part of the same command
  .\subspace-node-windows-x86_64-gemini-3c-2023-mar-07.exe `
    --chain gemini-3c `
    --execution wasm `
    --blocks-pruning archive `
    --state-pruning archive `
    --dsn-disable-private-ips `
    --no-private-ipv4 `
    --validator `
    --name INSERT_YOUR_ID
  ```
  4. You should see something similar in the terminal:
  ```
  2022-02-03 10:52:23 Subspace
  2022-02-03 10:52:23 ✌️  version 0.1.0-35cf6f5-x86_64-windows
  2022-02-03 10:52:23 ❤️  by Subspace Labs <https://subspace.network>, 2021-2022
  2022-02-03 10:52:23 📋 Chain specification: Subspace Gemini 1
  2022-02-03 10:52:23 🏷  Node name: YOUR_FANCY_NAME
  2022-02-03 10:52:23 👤 Role: AUTHORITY
  2022-02-03 10:52:23 💾 Database: RocksDb at C:\Users\X\AppData\Local\subspace-node-windows-x86_64-snapshot-2022-jan-05.exe\data\chains\subspace_test\db\full
  2022-02-03 10:52:23 ⛓  Native runtime: subspace-100 (subspace-1.tx1.au1)
  2022-02-03 10:52:23 🔨 Initializing Genesis block/state (state: 0x22a5…17ea, header-hash: 0x6ada…0d38)
  2022-02-03 10:52:24 ⏱  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38
  2022-02-03 10:52:24 Starting archiving from genesis
  2022-02-03 10:52:24 Archiving already produced blocks 0..=0
  2022-02-03 10:52:24 🏷  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu
  2022-02-03 10:52:24 🧑‍🌾 Starting Subspace Authorship worker
  2022-02-03 10:52:24 📦 Highest known block at #0
  2022-02-03 10:52:24 〽️ Prometheus exporter started at 127.0.0.1:9615
  2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.
  2022-02-03 10:52:26 🔍 Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu
  2022-02-03 10:52:29 ⚙️  Syncing, target=#215883 (2 peers), best: #55 (0xafc7…bccf), finalized #0 (0x6ada…0d38), ⬇ 850.1kiB/s ⬆ 1.5kiB/s
  ```
  5. After running this command, Windows may ask you for permissions related to firewall, select `allow` in this case.
  6. We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:
    *Change command to feature `subspace-farmer-opencl-windows-x86_64-gemini-3c-2023-mar-07.exe` if using Open CL version.*
  ```PowerShell
  # Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet
  .\subspace-farmer-windows-x86_64-gemini-3c-2023-mar-07.exe farm  `
    --disable-private-ips `
    --reward-address WALLET_ADDRESS `
    --plot-size 10G
  ```
  7. You should see something similar in the terminal:
  ```
  2022-06-02T00:02:04.552120Z  INFO subspace_farmer::commands::farm: Connecting to node at ws://127.0.0.1:9944
  2022-06-02T00:02:04.557220Z  INFO jsonrpsee_client_transport::ws: Connection established to target: Target { sockaddrs: [], host: "127.0.0.1", host_header: "127.0.0.1:9944", _mode: Plain, path_and_query: "/" }
  2022-06-02T00:02:04.575669Z  INFO subspace_farmer::commands::farm: Opening object mapping
  2022-06-02T00:02:04.617553Z  INFO subspace_farmer::multi_farming: Opening plot
  2022-06-02T00:02:04.645422Z  INFO subspace_farmer::multi_farming: Opening commitments
  2022-06-02T00:02:04.666925Z  INFO subspace_farmer::farming: Subscribing to slot info notifications
  2022-06-02T00:02:04.688218Z  INFO subspace_farmer::archiving: Subscribing to archived segments
  2022-06-02T00:02:04.689129Z  INFO subspace_farmer::commands::farm: WS RPC server listening on 127.0.0.1:9955
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=0
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=1
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=2
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=3
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=4
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=5
  ```

  8. You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.

</TabItem>

<TabItem value="macos" label="🍎macOS" default>
  <div className={styles.buttons}>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-node-macos-x86_64-gemini-3c-2023-mar-07.zip">
      Download Node Executable
    </Link>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-farmer-macos-x86_64-gemini-3c-2023-mar-07.zip">
      Download Farmer Executable
    </Link>
  </div>

---

:::caution Minimum macOS Version

  The minimum support macOS version is version 12+

:::

  1. Open your favorite terminal, and change to the Downloads directory using `cd Downloads`
  2. Make the farmer & node executable:
  - `chmod +x subspace-farmer-macos-x86_64-gemini-3c-2023-mar-07`
  - `chmod +x subspace-node-macos-x86_64-gemini-3c-2023-mar-07`
  3. We will then start the node using the following command

  > *Note, when attempting to run this command you may be prompted:* Click on `cancel` instead of moving it to trash.
  To allow execution, go to `System Preferences -> Security & Privacy -> General`, and click on `allow`.
  After this, simply repeat the step you prompted for (step 4 or 6). This time, click the `Open` button when prompted.

  ```bash
  # Replace `INSERT_YOUR_ID` with a nickname you choose
  # Copy all of the lines below, they are all part of the same command
  ./subspace-node-macos-x86_64-gemini-3c-2023-mar-07 \
    --chain gemini-3c \
    --execution wasm \
    --blocks-pruning archive \
    --state-pruning archive \
    --dsn-disable-private-ips \
    --no-private-ipv4 \
    --validator \
    --name INSERT_YOUR_ID
  ```
  4. You should see something similar in the terminal:
  ```
  2022-02-03 10:52:23 Subspace
  2022-02-03 10:52:23 ✌️  version 0.1.0-35cf6f5-x86_64-macos
  2022-02-03 10:52:23 ❤️  by Subspace Labs <https://subspace.network>, 2021-2022
  2022-02-03 10:52:23 📋 Chain specification: Subspace Gemini 1
  2022-02-03 10:52:23 🏷  Node name: YOUR_FANCY_NAME
  2022-02-03 10:52:23 👤 Role: AUTHORITY
  2022-02-03 10:52:23 💾 Database: RocksDb at /Users/X/Library/Application Support/subspace-node-x86_64-macos-11-snapshot-2022-jan-05/chains/subspace_test/db/full
  2022-02-03 10:52:23 ⛓  Native runtime: subspace-100 (subspace-1.tx1.au1)
  2022-02-03 10:52:23 🔨 Initializing Genesis block/state (state: 0x22a5…17ea, header-hash: 0x6ada…0d38)
  2022-02-03 10:52:24 ⏱  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38
  2022-02-03 10:52:24 Starting archiving from genesis
  2022-02-03 10:52:24 Archiving already produced blocks 0..=0
  2022-02-03 10:52:24 🏷  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu
  2022-02-03 10:52:24 🧑‍🌾 Starting Subspace Authorship worker
  2022-02-03 10:52:24 📦 Highest known block at #0
  2022-02-03 10:52:24 〽️ Prometheus exporter started at 127.0.0.1:9615
  2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.
  2022-02-03 10:52:26 🔍 Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu
  2022-02-03 10:52:29 ⚙️  Syncing, target=#215883 (2 peers), best: #55 (0xafc7…bccf), finalized #0 (0x6ada…0d38), ⬇ 850.1kiB/s ⬆ 1.5kiB/s
  ```
  5. We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:
  ```bash
  # Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet
  ./subspace-farmer-macos-x86_64-gemini-3c-2023-mar-07 farm \
    --disable-private-ips \
    --reward-address WALLET_ADDRESS \
    --plot-size 10G
  ```
  6. It may prompt again in here. Refer to the note on step 4.

  7. You should see something similar in the terminal:
  ```
  2022-06-02T00:02:04.552120Z  INFO subspace_farmer::commands::farm: Connecting to node at ws://127.0.0.1:9944
  2022-06-02T00:02:04.557220Z  INFO jsonrpsee_client_transport::ws: Connection established to target: Target { sockaddrs: [], host: "127.0.0.1", host_header: "127.0.0.1:9944", _mode: Plain, path_and_query: "/" }
  2022-06-02T00:02:04.575669Z  INFO subspace_farmer::commands::farm: Opening object mapping
  2022-06-02T00:02:04.617553Z  INFO subspace_farmer::multi_farming: Opening plot
  2022-06-02T00:02:04.645422Z  INFO subspace_farmer::multi_farming: Opening commitments
  2022-06-02T00:02:04.666925Z  INFO subspace_farmer::farming: Subscribing to slot info notifications
  2022-06-02T00:02:04.688218Z  INFO subspace_farmer::archiving: Subscribing to archived segments
  2022-06-02T00:02:04.689129Z  INFO subspace_farmer::commands::farm: WS RPC server listening on 127.0.0.1:9955
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=0
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=1
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=2
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=3
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=4
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=5
  ```

  8. You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.

</TabItem>

<TabItem value="linux" label="🐧Ubuntu">
  <div className={styles.buttons}>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-node-ubuntu-x86_64-gemini-3c-2023-mar-07">
      Download Node Executable
    </Link>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-farmer-ubuntu-x86_64-gemini-3c-2023-mar-07">
      Download Farmer Executable
    </Link>
    <Link
      className="button button--secondary button"
      to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-farmer-opencl-ubuntu-x86_64-gemini-3c-2023-mar-07">
      Download Farmer Executable (OpenCL)
    </Link>
  </div>
  <p>


  </p>


  <details>
    <summary>
    Expand for Aarch64/64-bit Raspberry Pi Executables
    </summary>
    <div className={styles.buttons}>
      <Link
        className="button button--secondary button"
        to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-node-ubuntu-aarch64-gemini-3c-2023-mar-07">
        1. Download Node Executable
      </Link>
      <Link
        className="button button--secondary button"
        to="https://github.com/subspace/subspace/releases/download/gemini-3c-2023-mar-07/subspace-farmer-ubuntu-aarch64-gemini-3c-2023-mar-07">
        2. Download Farmer Executable
      </Link>
    </div>
  </details>

  ### Required dependencies
  There are two packages that are typically already installed, but might be missing on your machine.

  If you see this error:
  > error while loading shared libraries: libOpenCL.so.1: cannot open shared object file: No such file or directory

  Make sure to install `ocl-icd-libopencl1` library with `sudo apt-get install ocl-icd-libopencl1`.

  If you see this error:
  > error while loading shared libraries: libgomp.so.1: cannot open shared object file: No such file or directory

  Make sure to install `libgomp1` library with `sudo apt-get install libgomp1`.

  ### OpenCL support
  Please read following documentation to make sure OpenCL support is enabled and working properly: <https://docs.rs/sloth256-189/latest/sloth256_189/opencl/index.html>

  OpenCL support is used for GPU acceleration (AMD, Intel, Nvidia) of initial plotting.
  GPU is not required generally for farmer to work and is not used at all after initial plotting.

  ---
  1. Open your favorite terminal, and change to the Downloads directory using `cd Downloads`
  2. Make the farmer & node executable
  - `chmod +x subspace-farmer-ubuntu-x86_64-gemini-3c-2023-mar-07`
  - `chmod +x subspace-node-ubuntu-x86_64-gemini-3c-2023-mar-07`
  3. We will then start the node using the following command

  ```bash
  # Replace `INSERT_YOUR_ID` with a nickname you choose
  # Copy all of the lines below, they are all part of the same command
  ./subspace-node-ubuntu-x86_64-gemini-3c-2023-mar-07 \
    --chain gemini-3c \
    --execution wasm \
    --blocks-pruning archive \
    --state-pruning archive \
    --dsn-disable-private-ips \
    --no-private-ipv4 \
    --validator \
    --name INSERT_YOUR_ID
  ```
  4. You should see something similar in the terminal:
  ```
  2022-02-03 10:52:23 Subspace
  2022-02-03 10:52:23 ✌️  version 0.1.0-35cf6f5-x86_64-ubuntu
  2022-02-03 10:52:23 ❤️  by Subspace Labs <https://subspace.network>, 2021-2022
  2022-02-03 10:52:23 📋 Chain specification: Subspace Gemini 1
  2022-02-03 10:52:23 🏷  Node name: YOUR_FANCY_NAME
  2022-02-03 10:52:23 👤 Role: AUTHORITY
  2022-02-03 10:52:23 💾 Database: RocksDb at /home/X/.local/share/subspace-node-x86_64-ubuntu-20.04-snapshot-2022-jan-05/chains/subspace_test/db/full
  2022-02-03 10:52:23 ⛓  Native runtime: subspace-100 (subspace-1.tx1.au1)
  2022-02-03 10:52:23 🔨 Initializing Genesis block/state (state: 0x22a5…17ea, header-hash: 0x6ada…0d38)
  2022-02-03 10:52:24 ⏱  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38
  2022-02-03 10:52:24 Starting archiving from genesis
  2022-02-03 10:52:24 Archiving already produced blocks 0..=0
  2022-02-03 10:52:24 🏷  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu
  2022-02-03 10:52:24 🧑‍🌾 Starting Subspace Authorship worker
  2022-02-03 10:52:24 📦 Highest known block at #0
  2022-02-03 10:52:24 〽️ Prometheus exporter started at 127.0.0.1:9615
  2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.
  2022-02-03 10:52:26 🔍 Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu
  2022-02-03 10:52:29 ⚙️  Syncing, target=#215883 (2 peers), best: #55 (0xafc7…bccf), finalized #0 (0x6ada…0d38), ⬇ 850.1kiB/s ⬆ 1.5kiB/s
  ```
  5. We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:
      *Change command to feature `subspace-farmer-opencl-ubuntu-x86_64-gemini-3c-2023-mar-07` if using openCL.* 
  ```bash
  # Replace `FARMER_FILE_NAME` with the name of the farmer file you downloaded from releases
  # Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet
  ./subspace-farmer-ubuntu-x86_64-gemini-3c-2023-mar-07 farm \
    --disable-private-ips \
    --reward-address WALLET_ADDRESS \
    --plot-size 10G
  ```
  6. You should see something similar in the terminal:
  ```
  2022-06-02T00:02:04.552120Z  INFO subspace_farmer::commands::farm: Connecting to node at ws://127.0.0.1:9944
  2022-06-02T00:02:04.557220Z  INFO jsonrpsee_client_transport::ws: Connection established to target: Target sockaddrs: , host: "127.0.0.1", host_header: "127.0.0.1:9944", _mode: Plain, path_and_query: "/"
  2022-06-02T00:02:04.575669Z  INFO subspace_farmer::commands::farm: Opening object mapping
  2022-06-02T00:02:04.617553Z  INFO subspace_farmer::multi_farming: Opening plot
  2022-06-02T00:02:04.645422Z  INFO subspace_farmer::multi_farming: Opening commitments
  2022-06-02T00:02:04.666925Z  INFO subspace_farmer::farming: Subscribing to slot info notifications
  2022-06-02T00:02:04.688218Z  INFO subspace_farmer::archiving: Subscribing to archived segments
  2022-06-02T00:02:04.689129Z  INFO subspace_farmer::commands::farm: WS RPC server listening on 127.0.0.1:9955
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=0
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=1
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=2
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=3
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=4
  2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=5
  ```

  7. You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.

</TabItem>
</Tabs>

## III. Post Node & Farmer Install Care

---

Now that your Node & Farmer have been started you will wait for the node to sync and the farmer to complete the initial plotting. While this is occurring you can check out some of the helpful resources below.

**- [Telemetry Server](https://telemetry.subspace.network/#/0x9ee86eefc3cc61c71a7751bba7f25e442da2512f408e6286153b3ccc055dccf0)**

**- [Block Explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu.gemini-1b.subspace.network%2Fws#/explorer)**


### Using a Custom Path
You can set a custom path for your node & farmer to use if you want to use an external hard drive, or set a custom path from the default. You can set the node and farmer to different directories if you would like.

<Tabs>
<TabItem value="node" label="1.🚩 Node">

#### Set Node Custom Path.
To set your node to use a custom path all you will need to do is add the `--base-path` parameter after the `--chain` parameter.

**Example:**
```
.\subspace-node-ubuntu-x86_64-gemini-3c-2023-mar-07 --chain gemini-1 --base-path /path/to/directory/here --execution wasm --state-pruning archive --validator --name INSERT_YOUR_ID
```
</TabItem>
<TabItem value="farmer" label="2.🧑‍🌾 Farmer">

#### Set Farmer Custom Path.
To set your node to use a custom path all you will need to do is add the `--base-path` parameter after the `--chain` parameter.

**Example:**
```
.\subspace-farmer-ubuntu-x86_64-gemini-3c-2023-mar-07 --base-path /path/to/directory/here farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE
```
</TabItem>
</Tabs>

### Switching to a new snapshot

:::info
Unless specifically mentioned by the Development team you should **NOT** have to wipe & purge your configuration on new releases.
:::

In general you should be able to download the latest release, and re-start the Node & Farmer with the same commands as you started to prior version with no errors.

There are some cases where version updates will cause issue with your Node & Farmer and you may have to wipe & purge your node, typically when errors occur. If you have any issues you can always check our [Forums](https://forums.subspace.network) and hop in our [Discord](https://discord.gg/subspace-network) Server to ask for help.

#### Wipe & Purge

If you were running a node previously, and want to switch to a new snapshot, please perform these steps and then follow the guideline again:
```
# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases
./FARMER_FILE_NAME wipe
# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases
./NODE_FILE_NAME purge-chain --chain gemini-1
```
Does not matter if the node/farmer executable is the previous one or from the new snapshot, both will work :)
The reason we require this is, with every snapshot change, the network might get partitioned, and you may be on a different genesis than the current one.
In plain English, these commands are like a `reset` button for snapshot changes.

Now follow installation guide.

#### Docker Wipe & Purge

In case of Docker setup run `docker-compose down -v` (and manually delete custom directories if you have specified them).

Now follow installation guide.

### Help

There are extra commands and parameters you can use on farmer or node, use the `--help` after any other command to display additional options.

Below are some helpful samples:

- `./FARMER_FILE_NAME --base-path /path/to/data farm ...` : will store data in `/path/to/data` instead of default location
- `./FARMER_FILE_NAME --base-path /path/to/data wipe` : erases everything related to farmer if data were stored in `/path/to/data`
- `./NODE_FILE_NAME --base-path /path/to/data --chain gemini-1 ...` : start node and store data in `/path/to/data` instead of default location
- `./NODE_FILE_NAME purge-chain --base-path /path/to/data --chain gemini-1` : erases data related to the node if data were stored in `/path/to/data`

Examples:
```bash
# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases
./FARMER_FILE_NAME farm --help
./FARMER_FILE_NAME wipe
```

## IV. Advanced

---

### Running an archival node

Instructions above will get you full node (doesn't store the history and state of the whole blockchain, only last 1024
blocks). If you want to opt in to storing the whole history (archival node), remove following parameters (lines) from
above instructions before starting your node:
* `--pruning 1024`
* `--keep-blocks 1024`

And instead add this:
* `--pruning archive`

Archival node is useful if you run an RPC node and want to support querying older blockchain history.

NOTE: You can't switch between full and archival node without wiping it, so if you need that, follow steps in
[Switching to a new snapshot](#switching-to-a-new-snapshot) section above.

### Build from source (Linux)

If you're running unsupported Linux distribution or CPU architecture, you may try to build binaries yourself from source.

NOTE: This is primarily targeted at tech-savvy users and not recommended unless you know what you're doing.
Please try to find answer to your question online before reaching out to maintainers.

You'll have to have [Rust toolchain](https://rustup.rs/) installed as well as LLVM and Clang in addition to usual developer tooling (Ubuntu example):
```bash
sudo apt-get install llvm clang
```

Now clone the source and build snapshot `gemini-3c-2023-mar-07` (replace occurrences with the snapshot you want to build):
```bash
git clone https://github.com/subspace/subspace.git
cd subspace
git checkout gemini-3c-2023-mar-07
cargo build \
    --profile production \
    --bin subspace-node \
    --bin subspace-farmer
```

You'll find two binaries under `target/production` directory once it succeeds, after which refer to instructions above on how to use them.

## V. Having Trouble?

If you are having some issues with running the node or the farmer for the subspace network, feel free to join our Discord or even better you can take a look at our Forums and review and existing questions or post a new one if needed!

###  - [Forums](https://forum.subspace.network) 
###  - [Discord](https://discord.gg/subspace-network)
