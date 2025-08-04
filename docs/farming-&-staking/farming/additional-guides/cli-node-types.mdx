---
title: CLI Node Types
sidebar_position: 5
description: An overview of the different types of nodes
slug: /farming/guides/nodes
keywords:
    - Farmer
    - Farming
    - Node
    - Executable
    - Domain
---

There are two main categories of nodes - one for **Consensus** and one for **Domains**. Each of these can be configured in different ways to perform various functions. Nodes are launched with the CLI Application.

## Consensus Nodes

There are two ways to configure a Consensus node. One is for **Full nodes** and one for **Archive nodes**. 

### Full Consensus Node

This is the most common type of node as it is used by farmers. It processes all blocks and serves peers. It preserves the blockchain's state and recent history. While you can customize the block and state pruning, the defaults are 256 and 140,000. Running a full node allows the participant to verify all blocks, ensuring independent auditability. All farmers, operators and timekeepers are full nodes by default.

:::tip Replace these placeholders
- `<BASE_PATH>`: Path where you want to store the node database
:::

```bash
./subspace-node-ubuntu-x86_64-skylake-mainnet-2025-jul-14 run \
--chain mainnet \
--base-path "<BASE_PATH>"
```

:::info Farming with a full node 
When running a full node, farmers need to add the `--farmer` parameter to allow the farmer CLI to connect to the full node.
:::

### Archive Consensus Node

An archival node keeps a history of all blocks and serves peers. It preserves the blockchain's state and entire history. It is useful for faster historical block retrieval and block explorers. All farmers, operators and timekeepers can be archival nodes.

:::tip Replace these placeholders
- `<BASE_PATH>`: Path where you want to store the node database
:::

```bash
./subspace-node-ubuntu-x86_64-skylake-mainnet-2025-jul-14 run \
--chain mainnet \
--base-path "<BASE_PATH>" \
--blocks-pruning archive \
--state-pruning archive \
--sync full
```

:::note archive vs archive-canonical
*blocks-pruning* and *state-pruning* can be set to `archive` or `archive-canonical`.  The former keeps state of all blocks and the latter only blocks which form the canonical chain.
:::

## Domain Nodes

Domains are essentially built-in rollups that support any conceivable state transition framework and smart contract execution environment through custom runtimes. Deploying a domain as easy as deploying a smart contract. They allow builders to easily launch their own network without bootstrapping a new validator set, while still benefiting from the shared security and interoperability provided by the Autonomys Network consensus chain.

There are also two ways to configure a Domain node. One is for **Full nodes** and one for **Archive nodes**. 

:::info
To configure the domain part of the node, you need to include a line that is just two dashes `--`. That will tell the CLI that anything after those dashes applies to the domain portion.
:::

### Full Domain Node

A domain full node processes all blocks and serves peers. It preserves the blockchain's state and recent history. 

:::tip Replace these placeholders
- `<BASE_PATH>`: Path where you want to store the node database
- `<DOMAIN_ID>`: The domain ID you want to connect to
:::

```bash
./subspace-node-ubuntu-x86_64-skylake-mainnet-2025-jul-14 run \
--chain mainnet \
--base-path "<BASE_PATH>" \
--blocks-pruning archive \
--state-pruning archive \
--sync full \
-- \
--domain-id "<DOMAIN_ID>"
```

### Archive Domain Node

A domain archive node allows an RPC user to query any historical blocks on the domain it targets. It is useful when a complete history of the domain needs to be made available. An example use case would be indexing the domain chain via RPC.

:::tip Replace these placeholders
- `<BASE_PATH>`: Path where you want to store the node database
- `<DOMAIN_ID>`: The domain ID you want to connect to
- `<RPC_PORT>`: The RPC port you want your node to be accessible at

By default the RPC port is 9944 so you can leave the `rpc-listen-on` out. If you want to change it, you can set it to `0.0.0.0:"<RPC_PORT>"`
:::

```bash
./subspace-node-ubuntu-x86_64-skylake-mainnet-2025-jul-14 run \
--chain mainnet \
--base-path "<BASE_PATH>" \
--blocks-pruning archive \
--state-pruning archive \
--sync full \
-- \
--domain-id "<DOMAIN_ID>" \
--blocks-pruning archive \
--state-pruning archive \
--rpc-methods unsafe \
--rpc-cors all \
--rpc-listen-on 0.0.0.0:"<RPC_PORT>"
```

## Specialized Nodes

### Operator Node

An operator node is closer to an *archive domain node* rather than a *full domain node*. The differences are that `archive-canonical` can be used and the `state-pruning` is set to 28,800 blocks. Also you need to specify a `--domain-id` and an `--operator-id`.

:::tip Replace these placeholders
- `<NAME>`: Your node name for telemetry
- `<BASE_PATH>`: Path where you want to store the node database
- `<DOMAIN_ID>`: The domain ID you want to operate on
- `<OPERATOR_ID>`: Your operator ID (obtained after registration)
:::

```bash
./subspace-node-ubuntu-x86_64-skylake-mainnet-2025-jul-14 run \
--chain taurus \
--name "<NAME>" \
--base-path "<BASE_PATH>" \
--sync full \
-- \
--domain-id "<DOMAIN_ID>" \
--operator-id "<OPERATOR_ID>" \
```

### Timekeeper Node

Timekeepers run the Proof-of-Time chain and maintain the randomness beacon for the consensus chain. They are responsible for evaluating the delay function (within the target time slot duration of 1 second) and announcing the outputs to other nodes, requiring a powerful latest-generation CPU. You will need to set the `--timekeeper` parameter and you can also force it to use the fastest core with `--timekeeper-cpu-cores`.

:::tip Replace these placeholders
- `<BASE_PATH>`: Path where you want to store the node database
:::

```bash
./subspace-node-ubuntu-x86_64-skylake-mainnet-2025-jul-14 run \
--chain mainnet \
--timekeeper \
--timekeeper-cpu-cores 4 \ 
--base-path "<BASE_PATH>"
```

:::note
The Subspace Foundation maintains several timekeepers as a public good.
:::