---
sidebar_position: 2
title: "🔖 Command Index"
---

> This may be outdated as commands are adjusted and modified constantly. For more accurate command list always refer to the `--help` flag of the Farmer or Node

### Node

Our node is a Substrate node, and has the same flags as Substrate. Refer to the [Official Substrate](https://docs.substrate.io/v3/getting-started/overview/) documentation for further reference. 

### Farmer

Structure -> `./FARMER_FILE_NAME <COMMAND> <SUBCOMMAND>`

- `erase-plot`: Erase existing plot (doesn't touch identity)
  - `--custom-path <CUSTOM_PATH>`: Use custom path for data storage instead of platform-specific default.
- `farm`: Start a farmer using previously created plot
  - `--bootstrap-node <BOOTSTRAP_NODE>`: Multiaddrs of bootstrap node to connect to on startup, multiple are supported
  - `--custom-path <CUSTOM_PATH>`: Custom path for data storage instead of platform-specific default
  - `--listen-on <LISTEN_ON>`: Multiaddrs to listen on for subspace network, for instance '/ip4/0.0.0.0/tcp/0', multiple are supported, subspace networking is disabled when non is specified.
  - `--node-rpc-url <NODE_RPC_URL>`: WebSocket RPC URL of the Subspace node to connect to (default: ws://127.0.0.1:9944)
  - `--reward-address <REWARD_ADDRESS>`: Address for farming rewards
  - `-w`, `--ws-server-listen-addr <WS_SERVER_LISTEN_ADDR>`: Host & Port where built-in WebSocket RPC server should listen for incoming connections (default: 127.0.0.1:9955)
- `help`: Print this message or the help of the given subcommand(s)
- `identity`: Identity management - *This refers to the farmer identity, **not** the reward address.*
  - `import-from-mnemonic <PHRASE>`: Import identity from BIP39 mnemonic phrase
  - `view`: View identity information
    - `-a`, `--address`: Print SS58 address (default if no other option is specified)
    - `-m`, `--mnemonic`: Print Mnemonic (NOTE: never share this with ANYONE!)
    - `-p`, `--public-key`: Print public key (hex)
- `wipe`: Wipes plot and identity
  - `--custom-path <CUSTOM_PATH>`: Use custom path for data storage instead of platform-specific default.