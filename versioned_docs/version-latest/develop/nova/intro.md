---
title: Introduction
sidebar_position: 1
description: A developer guide for the Autonomys Network
keywords:
    - Getting Started
    - Learn
    - Farming
    - Development
---

# Developer Guide
---
Autonomys is a secure, scalable, decentralized blockchain that resolves the **[blockchain trilemma](https://vitalik.ca/general/2017/12/31/sharding_faq.html#this-sounds-like-theres-some-kind-of-scalability-trilemma-at-play-what-is-this-trilemma-and-can-we-break-through-it)** without making compromises. This guide will cover some of the main aspects of Autonomys, if you’re willing to learn more about the technology behind Autonomys it’s better to refer to the [Whitepaper - _Full-Length_](https://assets.website-files.com/61526a2af87a54e565b0ae92/617759c00edd0e3bd279aa29_Autonomys_%20A%20solution%20to%20the%20farmer%27s%20dilemma.pdf) or [Whitepaper - _Summarized_](https://subspace.network/news/subspace-network-whitepaper)

## What makes the Autonomys Network protocol different?
---
Some new blockchain protocols, designed to be more efficient, fair, and decentralized, are using a system called Proof-of-Capacity (PoC) that prioritizes storage-intensive farming over compute-intensive mining. However, this poses a challenge known as the farmer's dilemma, where users must decide whether to allocate their limited storage to maintain the blockchain's state and history, or to use it for consensus. This may lead to a centralization of farming among a few trusted operators. Autonomys, a novel Proof-of-Archival-Storage (PoAS) blockchain, resolves this issue by allowing farmers to store the blockchain's history collectively, separating the processes of consensus and computation. This results in reduced overheads and facilitates participation by regular users, even in complex execution models.

Decoupled execution keeps farming lightweight and resistant to pooling, while the farmer storage network enables the blockchain to scale massively without becoming centralized.

![Intro-1](/img/developers/Intro-1.png)

## What is a Proof-of-Archival-Storage?
---
At Autonomys, we implement a Proof-of-Archival-Storage protocol based on the following:
- A Nakamoto (or longest-chain) consensus protocol
- Employing a proof-of-capacity resource puzzle for space-bound Sybil resistance
- The space reflects some useful storage (as in Proof-of-Replication)
- And the specific data being replicated is the archival history of the Autonomys chain

In its simplest form, our Proof-of-Archival-Storage consensus is a 3-phase protocol:
- **Archiving phase**: given new blocks of the chain, construct canonical history.
- **Plotting phase**: given the canonical history of the blockchain, generate a unique replica (the plot) and store it on disk.
- **Consensus phase**: given a challenge from a secure randomness beacon, audit the plot for a solution that satisfies some threshold, return a proof, and propose a block.

If you’re curious to read more about our consensus, [here](https://blog.subspace.network/dilithium-the-subspace-consensus-v2-3c5df0759e72) is a great overview written by one of our researchers, Dariia Porechna.

## A few words about Autonomys's consensus protocol - Subspace
---
As we transition to our Dilithium v2 consensus, we've recognized the essential role polynomial schemes will play in the next era of blockchain design, just as hash functions, Merkle trees, and ECC signatures did in the previous decade. Subspace protocol is distinctively equipped to utilize these schemes effectively due to our proof-of-archival-storage (PoAS) consensus, which enables a self-regulating feedback loop for storage costs, helping us scale with demand. This enables us to leverage polynomial schemes for linear blockspace scaling proportional to the number of network participants. We specifically employ Reed-Solomon erasure coding and Kate-Zaverucha-Goldberg (KZG) commitments in our v2 consensus, allowing efficient data recovery and authentication.

When archiving the history of the Autonomys Network, we replace Merkle roots with KZG commitments. Farmers can then provide constant-sized Kate proofs to clients of the Distributed Storage Network (DSN) as the witness for their pledged archival storage space. We construct generic proofs-of-replication (PoR) from RS-KZG schemes and extend these into an extremely simple and efficient proof-of-archival-storage (PoAS).

## Is it difficult to build applications on Autonomys Network?
---

Our primary objective is to maintain a minimum barrier to entry for both our farmers and developers. The installation of an Autonomys Network node can be accomplished in less than 15 minutes and is compatible with an extensive array of computer systems given the highly accessible minimum requirements for the hardware.

When it comes to development on the Autonomys Network, we offer a range of flexible options. At present, you can make use of our multiple Ethereum Virtual Machine (EVM) domains for a familiar experience. Soon, we will also provide the functionality for you to build your own local custom virtual machine if that's your preference. We take pride in the unlimited possibilities we provide - there are no boundaries!
