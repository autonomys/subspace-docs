---
title: Getting Started
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
description: Introduction to Staking and Operators
slug: /staking/intro
keywords:
    - Staking
    - Operator
    - Guide
    - Decoupled Execution
---

:::warning Operator and Staking Availability
Running an Operator and staking are only available on the Taurus testnet.  
Availability on mainnet is planned for Phase 2. For further details, please refer to our [Phased Launch Roadmap](https://forum.autonomys.xyz/t/4831).
:::

## Decoupled Execution Framework

Autonomys introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme. 

:::info Decoupled Execution
For more information on how Subspace separates consensus and computation, check out [Autonomys Academy](https://academy.autonomys.xyz/subspace-protocol/decoupled-execution).
:::

## Farming vs. Operators: Key Differences

### Farming
- **Consensus:** This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify.
- **Transaction Ordering**: Farmers are responsible for confirming the availability of transactions and providing an ordering.
- **Lightweight Requirements**: The hardware requirements for farming are designed to be lightweight, making it accessible to anyone.
- **Verification**: Farmers only verify the proof-of-election and ensure that the data is available.
- **Transactions**: Farmers do not execute transactions; they focus on ordering them and including them in the blockchain.

### Being an Operator

- **Transaction Submission and Execution**: Operators are responsible for batching transactions into bundles and submitting them to the consensus chain, executing transactions included in the consensus block and maintaining the resulting chain state.
- **Higher Hardware Requirements**: Operators require more substantial hardware capabilities, as they must execute complex transactions.
- **Require Initial Investment:** Operators are required to stake a certain amount of AI3. If an operator acts maliciously, their stake is at risk of being **slashed**. Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution.
- **Pre-Validation and Batching**: Operators pre-validate and batch transactions into bundles through a stake-weighted election process.
- **Deterministic Execution**: The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts.
- **Secondary Network Role**: Monitors the Domain chain for malicious activity and submits fraud proofs to consensus chain.
- **Supports Various Environments**: Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM).

## Operators

### Requirements

:::warning Requirement Changes
Hardware requirements are lowered for testing but will likely increase on mainnet.
:::

#### Operating System

<small>
    <table>
    <tr>
        <th>Application</th>
        <th colspan="3">Minimum Supported Version*</th>
    </tr>
    <tr>
        <td><strong>CLI</strong></td>
        <td>🐧 Ubuntu 22.04</td>
        <td>🪟 Windows 11</td>
        <td>🍎 macOS 14 (Sonoma)</td>
    </tr>
    </table>
&#42; Note that these are the officially supported minimum versions. For example, Windows 10 will not be officially supported but is likely to work. Team will not prioritise supporting issues that are only present on Windows 10.
</small>

#### Hardware

<a id="min-hardware"></a>
<a id="min-node-storage"></a>
<a id="min-network"></a>

| CPU | RAM | Storage | Network |
| --- | :-: | :-: | :-: |
| 4 Cores+ @ 3.4GHz [¹](https://docs.autonomys.xyz/staking/intro#min-hardware) | 16 GB | 300 GB NVMe [²](https://docs.autonomys.xyz/staking/intro#min-node-storage) | 50 Mbps [³](https://docs.autonomys.xyz/staking/intro#min-network) |

<small>¹ Intel Ice Lake or newer (Xeon or Core series), and AMD Zen 3 or newer (EPYC or Ryzen), with a preference for single-threaded performance over a higher core count.</small>
<br />
<p>
<small>² Latency is more important than throughput.</small>
<br />
<small>³ Bandwidth throughput listed refers to the required upload speed.</small>
<br />
</p>

### Directory Structure

:::info Key Pair Location
For operators, the key pair can be found in `/<BASE_PATH>/domains/<DOMAIN_ID>/keystore`.
:::

```bash
📂 subspace-node
 ┣ 📂 db
 ┣ 📂 domains
 ┃ ┗ 📂 0
 ┃ ┃ ┣ 📂 db
 ┃ ┃ ┣ 📂 evm
 ┃ ┃ ┗ 📂 keystore
 ┗ 📂 network
```

## Staking

The Autonomys Network relies on staking from both domain operators and farmers to secure the network and provide resources. Autonomys implements a Nominated Proof-of-Stake algorithm where token holders endorse operators who execute transactions and produce blocks.

Our staking model consists of two tiers:

- Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers who nominate and operators with both parties sharing the execution fees and the potential penalties (slashing). 

- Operators stake to gain the right to produce bundles within a domain. They are responsible for validating and executing transactions, producing execution receipts, applying state transitions, submitting a storage fee for bundle execution and earning fees for their work. The operator's chances to be elected as a slot leader and produce a bundle are weighted by their stake. Operators can be nominated by farmers or other AI3 holders.

The nomination pools in Autonomys are "lazy": any fees earned by the operator are assigned to the pool and are not deposited to the nominators wallet unless they ask for a withdrawal. Unless withdrawn, the fees are "auto-staked" - they count towards the total stake of the pool, increasing its chance of being elected to produce bundles.

### Stake epoch

Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every `StakeEpochDuration` blocks (at the moment, it's set to every 100 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions.