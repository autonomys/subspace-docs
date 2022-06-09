---
title: Farming with the CLI
sidebar_position: 1
description: How to run a Subspace Network Farmer with the CLI or Docker
keywords:
    - Farmer
    - Farming
    - CLI
    - Binaries
    - Docker
---

# Update from earlier versions of Gemini 1b
There were some issues in initial Gemini 1b release `gemini-1b-2022-june-02` fixed by later releases.

If you see any of these errors:
> Node is running on non-canonical fork, full node and farmer reset is required
> Attempt to switch to a different fork beyond archiving depth, can't do it...

That means your node is affected, and you need to follow "Switching to a new snapshot" section below to reset your node and farmer.

# 👨‍🌾 Getting Started Farming

This is the documentation/guideline on how to run the farmer. You may also refer to the [help](#help) section for various commands.

## System Requirements

CPU: 2 Core+
RAM: 4GB+ (Preferred to have 8GB)
Storage: 
  - 60GB for Node
  - Preferred Amount required for plot. (Keep in mind, its a good idea to leave ~10-20GB remaining for the Operating System, in case it is needed.)

## Releases

We are regularly releasing stable snapshots. Our CI builds container images and executables for 3 major platforms (Windows, macOS, Linux).

Our snapshots are categorized as the following:
- **Stable releases (you should always grab the latest one, these are the ones that are tested by our team)**
- Pre-releases (for testing things early, intended for developers)

You need 2 executables, select whichever applies to your operating system
* Node Executable - `subspace-node-...`
* Farmer Executable - `subspace-farmer-...`

## Release Links

You can always find these executables in the [Releases](https://github.com/subspace/subspace/releases/tag/gemini-1b-2022-june-05) section on our GitHub

### Windows
- [Node](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-node-windows-x86_64-gemini-1b-2022-june-05.exe)
- [Farmer](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-farmer-windows-x86_64-gemini-1b-2022-june-05.exe)

### macOS
- [Node](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-node-macos-x86_64-gemini-1b-2022-june-05.zip)
- [Farmer](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-farmer-macos-x86_64-gemini-1b-2022-june-05.zip)

### Linux
- [Node](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-node-ubuntu-x86_64-gemini-1b-2022-june-05)
- [Farmer](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-farmer-ubuntu-x86_64-gemini-1b-2022-june-05)

### Linux (Aarch64)
- [Node](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-node-ubuntu-aarch64-gemini-1b-2022-june-05)
- [Farmer](https://github.com/subspace/subspace/releases/download/gemini-1b-2022-june-05/subspace-farmer-ubuntu-aarch64-gemini-1b-2022-june-05)

## Polkadot.js wallet

Before running anything you need to have a wallet where you'll receive testnet coins.
Install [Polkadot.js extension](https://polkadot.js.org/extension/) into your browser and create a new account there.
The address of your account will be necessary at the last step.

## Required ports
Currently, TCP port `30333` needs to be exposed for node to work properly.

If you have a server with no firewall, there is nothing to be done, but otherwise make sure to open TCP port `30333` for incoming connections.

On the desktop side if you have a router in front of your computer, you'll need to forward TCP port `30333` to the machine on which your node is running (how this is done varied from router to router, but there is always a feature like this, refer to [How to Forward Ports](port-forwarding.md) for a more in-depth tutorial).
If you're connected directly without any router, then again nothing needs to be done in such case.

## 🖼️ Windows Instructions

1. Download the executables for your operating system from the [Releases](https://github.com/subspace/subspace/releases) tab.
2. Open `Powershell` (we do not recommend using Command Prompt as it's syntax is slightly different)
3. In the terminal we will change to the Downloads directory using this command `cd Downloads`
4. We will then start the node using the following command

```PowerShell
# Replace `INSERT_YOUR_ID` with a nickname you choose
# Copy all of the lines below, they are all part of the same command
.\subspace-node-windows-x86_64-gemini-1b-2022-june-05.exe `
--chain gemini-1 `
--execution wasm `
--pruning 1024 `
--keep-blocks 1024 `
--validator `
--name INSERT_YOUR_ID
```
5. You should see something similar in the terminal:
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
6. After running this command, Windows may ask you for permissions related to firewall, select `allow` in this case.
7. We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:
```PowerShell
# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet
# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)
.\subspace-farmer-windows-x86_64-gemini-1b-2022-june-05.exe.exe farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE
```
8. You should see something similar in the terminal:
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

9. You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.



## 🐧 Linux Instructions

1. Download the executables for your operating system from the [Releases](https://github.com/subspace/subspace/releases) tab.
2. Open your favorite terminal, and change to the Downloads directory using `cd Downloads`
3. Make the farmer & node executable  `chmod +x subspace-farmer-ubuntu-x86_64-gemini-1b-2022-june-05` & `chmod +x subspace-node-ubuntu-x86_64-gemini-1b-2022-june-05`
4. We will then start the node using the following command

```bash
# Replace `INSERT_YOUR_ID` with a nickname you choose
# Copy all of the lines below, they are all part of the same command
./subspace-node-ubuntu-x86_64-gemini-1b-2022-june-05 \
  --chain gemini-1 \
  --execution wasm \
  --pruning 1024 \
  --keep-blocks 1024 \
  --validator \
  --name INSERT_YOUR_ID
```
5. You should see something similar in the terminal:
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
7. We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:
```bash
# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet
# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)
./subspace-farmer-ubuntu-x86_64-gemini-1b-2022-june-05 farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE
```
8. You should see something similar in the terminal:
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

9. You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.

## 🍎 macOS Instructions

1. Download the executables for your operating system from the [Releases](https://github.com/subspace/subspace/releases) tab and extract binaries from ZIP archives.
2. Open your favorite terminal, and change to the Downloads directory using `cd Downloads`
3. Make the farmer & node executable  `chmod +x subspace-farmer-macos-x86_64-gemini-1b-2022-june-05` & `chmod +x subspace-node-macos-x86_64-gemini-1b-2022-june-05`
4. We will then start the node using the following command

> *Note, when attempting to run this command you may be prompted:* Click on `cancel` instead of moving it to trash.
To allow execution, go to `System Preferences -> Security & Privacy -> General`, and click on `allow`.
After this, simply repeat the step you prompted for (step 4 or 6). This time, click the `Open` button when prompted.

```bash
# Replace `INSERT_YOUR_ID` with a nickname you choose
# Copy all of the lines below, they are all part of the same command
./subspace-node-macos-x86_64-gemini-1b-2022-june-05 \
  --chain gemini-1 \
  --execution wasm \
  --pruning 1024 \
  --keep-blocks 1024 \
  --validator \
  --name INSERT_YOUR_ID
```
5. You should see something similar in the terminal:
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
7. We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:
```bash
# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet
# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)
./subspace-farmer-macos-x86_64-gemini-1b-2022-june-05 farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE
```
8. It may prompt again in here. Refer to the note on step 4.

9. You should see something similar in the terminal:
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

10. You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.


## 🐋 Docker Instructions

Create `subspace` directory and `docker-compose.yml` in it with following contents:
```yml
version: "3.7"
services:
  node:
    # For running on Aarch64 add `-aarch64` after `DATE`
    image: ghcr.io/subspace/node:gemini-1b-2022-june-05
    volumes:
# Instead of specifying volume (which will store data in `/var/lib/docker`), you can
# alternatively specify path to the directory where files will be stored, just make
# sure everyone is allowed to write there
      - node-data:/var/subspace:rw
#      - /path/to/subspace-node:/var/subspace:rw
    ports:
# If port 30333 is already occupied by another Substrate-based node, replace all
# occurrences of `30333` in this file with another value
      - "0.0.0.0:30333:30333"
    restart: unless-stopped
    command: [
      "--chain", "gemini-1",
      "--base-path", "/var/subspace",
      "--execution", "wasm",
      "--pruning", "1024",
      "--keep-blocks", "1024",
      "--port", "30333",
      "--rpc-cors", "all",
      "--rpc-methods", "safe",
      "--unsafe-ws-external",
      "--validator",
# Replace `INSERT_YOUR_ID` with your node ID (will be shown in telemetry)
      "--name", "INSERT_YOUR_ID"
    ]
    healthcheck:
      timeout: 5s
# If node setup takes longer then expected, you want to increase `interval` and `retries` number.
      interval: 30s
      retries: 5

  farmer:
    depends_on:
      node:
        condition: service_healthy
    # For running on Aarch64 add `-aarch64` after `DATE`
    image: ghcr.io/subspace/farmer:gemini-1b-2022-june-05
# Un-comment following 2 lines to unlock farmer's RPC
#    ports:
#      - "127.0.0.1:9955:9955"
# Instead of specifying volume (which will store data in `/var/lib/docker`), you can
# alternatively specify path to the directory where files will be stored, just make
# sure everyone is allowed to write there
    volumes:
      - farmer-data:/var/subspace:rw
#      - /path/to/subspace-farmer:/var/subspace:rw
    restart: unless-stopped
    command: [
      "--base-path", "/var/subspace",
      "farm",
      "--node-rpc-url", "ws://node:9944",
      "--ws-server-listen-addr", "0.0.0.0:9955",
# Replace `WALLET_ADDRESS` with your Polkadot.js wallet address
      "--reward-address", "WALLET_ADDRESS",
# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)
      "--plot-size", "PLOT_SIZE"
    ]
volumes:
  node-data:
  farmer-data:
```

After which follow these steps:
* Now edit created file:
  * Replace `INSERT_YOUR_ID` with desired name that will be shown in telemetry (doesn't impact anything else)
  * Replace `WALLET_ADDRESS` with your wallet address
  * Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)
  * If you want to store files on a separate disk or customize port, read comments in the file
* Ensure [Docker](https://www.docker.com/) is installed and running
* Now go to directory with `docker-compose.yml` and type `docker-compose up -d` to start everything

You can read logs with `docker-compose logs --tail=1000 -f`, for the rest read [Docker Compose CLI reference](https://docs.docker.com/compose/reference/).

# 🤔Notes


## Using a Custom Path
You can set a custom path for your node & farmer to use if you want to use an external hard drive, or set a custom path from the default. You can set the node and farmer to different directories if you would like. 

### Set Node Custom Path. 
To set your node to use a custom path all you will need to do is add the `--base-path` parameter after the `--chain` parameter.

**Example:**
```
.\subspace-node-ubuntu-x86_64-gemini-1b-2022-june-05 --chain gemini-1 --base-path /path/to/directory/here --execution wasm --pruning 1024 --keep-blocks 1024 --validator --name INSERT_YOUR_ID
```

### Set Farmer Custom Path. 
To set your node to use a custom path all you will need to do is add the `--base-path` parameter after the `--chain` parameter.

**Example:**
```
.\subspace-farmer-ubuntu-x86_64-gemini-1b-2022-june-05 --base-path /path/to/directory/here farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE
```

## Checking results and interacting with farmnet

Visit [Polkadot.js explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu.gemini-1b.subspace.network%2Fws#/explorer), from there you can interact with the Subspace Farmnet as any Substrate-based blockchain.

## Invalid Solution
If you are getting `invalid solution` errors (visible on the terminal that Node runs), please follow "Switching to a new snapshot" steps below and start afresh.

## Switching to a new snapshot

### CLI

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

### Docker

In case of Docker setup run `docker-compose down -v` (and manually delete custom directories if you have specified them).

Now follow installation guide.

## Help

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

## [Advanced] Running an archival node

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

## [Advanced] Build from source (Linux)

If you're running unsupported Linux distribution or CPU architecture, you may try to build binaries yourself from source.

NOTE: This is primarily targeted at tech-savvy users and not recommended unless you know what you're doing.
Please try to find answer to your question online before reaching out to maintainers.

You'll have to have [Rust toolchain](https://rustup.rs/) installed as well as LLVM and Clang in addition to usual developer tooling (Ubuntu example):
```bash
sudo apt-get install llvm clang
```

Now clone the source and build snapshot `snapshot-2022-apr-29` (replace occurrences with the snapshot you want to build):
```bash
git clone https://github.com/subspace/subspace.git
cd subspace
git checkout snapshot-2022-apr-29
cargo build \
    --profile production \
    --bin subspace-node \
    --bin subspace-farmer
```

You'll find two binaries under `target/production` directory once it succeeds, after which refer to instructions above on how to use them.