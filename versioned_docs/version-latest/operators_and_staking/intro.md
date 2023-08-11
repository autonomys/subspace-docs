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
- **Transaction Ordering**: Farmers are responsible for confirming the availability of transactions and providing an ordering.
- **Lightweight Requirements**: The hardware requirements for farming are designed to be lightweight, making it accessible to anyone.
- **Verification**: Farmers only verify the proof-of-election and ensure that the data is available.
- **Transactions**: Farmers do not execute transactions; they focus on ordering them and including them in the blockchain.
- **Primary Role**: Focuses on the probabilistic process of achieving consensus over transaction ordering.

### Being an operator

- **Transaction Execution**: Operators are responsible for executing transactions and maintaining the resulting chain state.
- **Higher Hardware Requirements**: Operators require more substantial hardware capabilities, as they must execute complex transactions.
- **Pre-Validation and Batching**: Operators pre-validate and batch transactions into bundles through a stake-weighted election process.
- **Deterministic Execution**: The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts.
- **Secondary Network Role**: Participates in a more deterministic process involving the execution of transactions, potentially requiring specialized infrastructure or capabilities.
- **Supports Various Environments**: Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM).

### Staking

The Subspace Network relies on staking from both domain operators and farmers to secure the network and provide resources. Subspace implements a Nominated Proof-of-Stake algorithm where farmers endorse operators who execute transactions and produce blocks.

Our staking model consists of two tiers:

- Operators stake to gain the right to execute transactions within a domain and produce blocks. They are responsible for validating and executing transactions, producing execution receipts, and applying state transitions and earn rewards for their work. The operator chances to be elected as a slot leader are weighted by stake. Operators can be nominated by farmers.

- Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. We implement a mechanism for farmers to automatically stake their block rewards with nominated operators to maximize yield.


:::note
Read [Subspace Subnomicon](https://subnomicon.subspace.network/docs/category/decoupled-execution) to get a full picture behind decoupled execution!
:::








