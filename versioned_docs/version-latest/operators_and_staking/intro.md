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

## Operators are a key part in solving the farmer's dilemma

Subspace introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme. 

# Key differences between farming and being an operator

### Farming
- **Consensus:** This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify.
- **Transaction Ordering**: Farmers are responsible for confirming the availability of transactions and providing an ordering.
- **Lightweight Requirements**: The hardware requirements for farming are designed to be lightweight, making it accessible to anyone.
- **Verification**: Farmers only verify the proof-of-election and ensure that the data is available.
- **Transactions**: Farmers do not execute transactions; they focus on ordering them and including them in the blockchain.
- **Primary Role**: Focuses on the probabilistic process of achieving consensus over transaction ordering.

### Being an operator

- **Transaction Execution**: Operators are responsible for executing transactions and maintaining the resulting chain state.
- **Higher Hardware Requirements**: Operators require more substantial hardware capabilities, as they must execute complex transactions.
- **Require Initial Investment:** Operators are required to stake a certain amount of SSC. If an operator acts maliciously, their stake is at risk of being **slashed**. Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution.
- **Pre-Validation and Batching**: Operators pre-validate and batch transactions into bundles through a stake-weighted election process.
- **Deterministic Execution**: The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts.
- **Secondary Network Role**: Participates in a more deterministic process involving the execution of transactions, potentially requiring specialized infrastructure or capabilities.
- **Supports Various Environments**: Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM).

### Staking

The Subspace Network relies on staking from both domain operators and farmers to secure the network and provide resources. Subspace implements a Nominated Proof-of-Stake algorithm where farmers endorse operators who execute transactions and produce blocks.

Our staking model consists of two tiers:

- Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers and operators and both parties share the rewards and the potential penalties (slashing). 

- Operators stake to gain the right to execute transactions within a domain and produce blocks. They are responsible for validating and executing transactions, producing execution receipts, and applying state transitions and earn rewards for their work. The operator chances to be elected as a slot leader are weighted by stake. Operators can be nominated by farmers. 


### Stake epoch

Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every `StakeEpochDuration` blocks (at the moment, it's set to every 600 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions.

:::note
Read [Subspace Subnomicon](https://subnomicon.subspace.network/docs/category/decoupled-execution) to get a full picture behind decoupled execution!
:::
