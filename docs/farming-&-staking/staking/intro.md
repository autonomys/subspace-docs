---
title: Introduction to Staking and Operators
sidebar_position: 1
description: Introduction to Staking and Operators
keywords:
    - Staking
    - Operator
    - Guide
    - Decoupled Execution
    - Sub-domain
---

:::note 
This guide is focused on how to setup an operator, if you would like to learn more about the function of operators read the [Autonomys Academy](https://academy.autonomys.net/subspace-protocol/decoupled-execution) to get a better understanding.
:::

## Operators are a key part in solving the farmer's dilemma

Subspace introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme. 

# Key differences between farming and being an operator

### Farming
- **Consensus:** This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify.
- **Transaction Ordering**: Farmers are responsible for confirming the availability of transactions and providing an ordering.
- **Lightweight Requirements**: The hardware requirements for farming are designed to be lightweight, making it accessible to anyone.
- **Verification**: Farmers only verify the proof-of-election and ensure that the data is available.
- **Transactions**: Farmers do not execute transactions; they focus on ordering them and including them in the blockchain.

### Being an operator

- **Transaction Submission and Execution**: Operators are responsible for batching transactions into bundles and submitting them to the consensus chain, executing transactions included in the consensus block and maintaining the resulting chain state.
- **Higher [Hardware Requirements](#operator-hardware-requirements)**: Operators require more substantial hardware capabilities, as they must execute complex transactions.
- **Require Initial Investment:** Operators are required to stake a certain amount of SSC. If an operator acts maliciously, their stake is at risk of being **slashed**. Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution.
- **Pre-Validation and Batching**: Operators pre-validate and batch transactions into bundles through a stake-weighted election process.
- **Deterministic Execution**: The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts.
- **Secondary Network Role**: Monitors the Domain chain for malicious activity and submits fraud proofs to consensus chain.
- **Supports Various Environments**: Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM).


### Operator hardware requirements

**CPU**: 
- x86-64 compatible;
- Intel Ice Lake, or newer (Xeon or Core series); AMD Zen3, or newer (EPYC or Ryzen);
- 4 physical cores @ 3.4GHz;
- Prefer single-threaded performance over higher cores count. A comparison of single-threaded performance can be found [here](https://www.cpubenchmark.net/singleThread.html).

**Storage**:
- An NVMe SSD of 300 GB. In general, the latency is more important than the throughput.

**Memory**:
- 16 GB.

**System**:
- Linux Kernel 5.16 or newer.

**Network**:
- The minimum symmetric networking speed is set to 50 Mbit/s.

### Folder structure

Starting with Gemini 3h, **Subspace Node** will create the following directory structure:

- subspace-node/db
- subspace-node/domains/0/keystore
- subspace-node/domains/0/db
- subspace-node/domains/1/keystore
- subspace-node/domains/1/db
- subspace-node/network

For operators it means that you can find your key pair under `NODE_DATA_PATH/domains/domainID/keystore`.

### Staking

The Subspace Network relies on staking from both domain operators and farmers to secure the network and provide resources. Subspace implements a Nominated Proof-of-Stake algorithm where token holders endorse operators who execute transactions and produce blocks.

Our staking model consists of two tiers:

- Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers who nominate and operators with both parties sharing the execution fees and the potential penalties (slashing). 

- Operators stake to gain the right to produce bundles within a domain. They are responsible for validating and executing transactions, producing execution receipts, applying state transitions, submitting a storage fee for bundle execution and earning fees for their work. The operator's chances to be elected as a slot leader and produce a bundle are weighted by their stake. Operators can be nominated by farmers or other SSC holders.

The nomination pools in Subspace are "lazy": any fees earned by the operator are assigned to the pool and are not deposited to the nominators wallet unless they ask for a withdrawal. Unless withdrawn, the fees are "auto-staked" - they count towards the total stake of the pool, increasing its chance of being elected to produce bundles.

### Stake epoch

Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every `StakeEpochDuration` blocks (at the moment, it's set to every 100 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions.

:::note
Read [Autonomys Academy](https://academy.autonomys.net/subspace-protocol/decoupled-execution) to get a full picture behind decoupled execution!
:::