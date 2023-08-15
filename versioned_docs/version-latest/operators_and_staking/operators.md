---
title: Operators guide
sidebar_position: 2
description: Operators guide
keywords:
- Operator
- Guide
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';


:::note
Currently, the domain chain does not support syncing from other operator nodes; it needs to be deterministically derived from the consensus chain block by block.
:::


### Build from source


The domain operator node is embedded within the `subspace-node` binary, please refer to [Subspace node](https://github.com/subspace/subspace/blob/main/crates/subspace-node/README.md) for how to build from source.


#### Create operator key:
An operator needs a key pair to participate in bundle production.
You can create a key using the following command:

```bash
target/production/subspace-node key generate --scheme sr25519
```


Back up the key. Take the `public key (hex)` of the Keypair. The public key is part of the operator config.


#### Insert key to Keystore:
The key generated above is added to the Keystore so that the operator node can use it to participate in bundle production.
The key is inserted using the following command:

```bash
target/production/subspace-node key insert \
--suri "<Secret phrase>" --key-type oper --scheme sr25519 --keystore-path /tmp/keystore
```

The command above assumes `/tmp/keystore` as the keystore location.
`suri` is the secret phrase of the operator key.


#### Register operator:
The operator needs to register to a domain they want to operate on using `register_operator`. The registration extrinsic requires an operator configuration.
Once the domain epoch is finished, the operator can produce bundles from the new epoch.


### Start the domain operator node


The domain operator node is running with an embedded consensus node, thus you need to specify the args for both the consensus node and the domain operator node:


```bash
subspace-node [consensus-chain-args] -- [domain-args]
```


Example:
Start a node as operator on `local` chain:
<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

```powershell
target/production/subspace-node `
--chain local `
--rpc-external `
--node-key 0000000000000000000000000000000000000000000000000000000000000001 `
-- `
--domain-id 0 `
--chain local `
--operator `
--keystore-path /tmp/keystore `
--rpc-external
```

</TabItem>

<TabItem value="macos" label="🍎 macOS">

```bash
target/production/subspace-node \
--chain local \
--rpc-external \
--node-key 0000000000000000000000000000000000000000000000000000000000000001 \
-- \
--domain-id 0 \
--chain local \
--operator \
--keystore-path /tmp/keystore \
--rpc-external
```

</TabItem>

<TabItem value="linux" label="🐧 Ubuntu">

```bash
target/production/subspace-node \
--chain local \
--rpc-external \
--node-key 0000000000000000000000000000000000000000000000000000000000000001 \
-- \
--domain-id 0 \
--chain local \
--operator \
--keystore-path /tmp/keystore \
--rpc-external
```

</TabItem>
</Tabs>

:::note
The `node-key` in the example above can by any `hex` string of the same length.
:::


<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

For `dev` chain, you can use `--dev` flag that combines `--chain dev` and `--operator`.

```powershell
target/production/subspace-node `
--dev `
--rpc-external `
--node-key 0000000000000000000000000000000000000000000000000000000000000001 `
-- `
--domain-id 0 `
--dev `
--rpc-external
```


Run another node and sync the consensus chain from the consensus node started earlier:

```powershell
target/production/subspace-node `
--dev `
--rpc-external `
--bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp `
-- `
--domain-id 0 `
--chain dev `
--rpc-external
```

</TabItem>


<TabItem value="macos" label="🍎 macOS">

For `dev` chain, you can use `--dev` flag that combines `--chain dev` and `--operator`.
```bash
target/production/subspace-node \
--dev \
--rpc-external \
--node-key 0000000000000000000000000000000000000000000000000000000000000001 \
-- \
--domain-id 0 \
--dev \
--rpc-external
```

Run another node and sync the consensus chain from the consensus node started earlier:

```bash
target/production/subspace-node \
--dev \
--rpc-external \
--bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp \
-- \
--domain-id 0 \
--chain dev \
--rpc-external
```

</TabItem>


<TabItem value="linux" label="🐧 Ubuntu">


For `dev` chain, you can use `--dev` flag that combines `--chain dev` and `--operator`.


```bash
target/production/subspace-node \
--dev \
--rpc-external \
--node-key 0000000000000000000000000000000000000000000000000000000000000001 \
-- \
--domain-id 0 \
--dev \
--rpc-external
```

Run another node and sync the consensus chain from the consensus node started earlier:

```bash
target/production/subspace-node \
--dev \
--rpc-external \
--bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp \
-- \
--domain-id 0 \
--chain dev \
--rpc-external
```

</TabItem>
</Tabs>

:::note
Specified bootnode ID should always correspond to the `node key`, in the example above, bootnode ID `12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp` corresponds to the `node key` `0000000000000000000000000000000000000000000000000000000000000001` 
:::

Since there is no `operator` flag, this node will not participate in bundle production.
By default, node data is written to `subspace-node/domain-{domain-id}` subdirectory of the OS-specific user's local data directory.


<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>
FOLDERID_LocalAppData e.g. 

`C:\Users\Alice\AppData\Local`

</TabItem>


<TabItem value="macos" label="🍎 macOS">
$HOME/Library/Application Support e.g.

`/Users/Alice/Library/Application Support`

</TabItem>


<TabItem value="linux" label="🐧 Ubuntu">
$XDG_DATA_HOME or /home/alice/.local/share e.g.

`$HOME/.local/share`

</TabItem>
</Tabs>


### Embedded Docs

Once the project has been built, the following command can be used to explore all parameters and subcommands:


```bash
target/production/subspace-node --help
```