---
title: Quick start
sidebar_position: 2
description: Quick start one-pager
keywords:
  - subspace network
  - quickstart
---

## The only tools needed to get you started
---
The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment.

Subspace utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Subspace.

### Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM
---
```
Network Name: Subspace EVM
New RPC URL: https://nova.gemini-3g.subspace.network/ws
Chain ID: 1002
Currency Symbol: TSSC
```

### Get tokens to your wallet using our faucet
---
Follow the instructions [here](faucet.md) to use our **Faucet** to get some TSSC.

### Test and deploy your smart contract
---
You can use **[Remix](https://remix.ethereum.org/)**, **[Foundry](https://book.getfoundry.sh/)** or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set.

If anything above sounds unfamiliar, you can always fall back to our full guide. 

---
### Important note about submitting a transaction

Please avoid attempting to accelerate a transaction by including a tip alongside the gas fees. The transaction queue operates differently with Subspace, leading to the possibility of two transactions sharing the same nonce. This could result in dual charges for gas fees - once for the execution and storage in the first transaction, and solely for storage in the second transaction. To prevent this scenario, ensure that you refrain from adding a tip in an attempt to speed the transaction up.

---
### Have any questions? Feel free to post them on [our forum](https://forum.subspace.network/) or in our [Developer-chat on Discord](https://discord.gg/EAw6B48r).
---

In order to get access to the role-gated developer chat:
1. Join our [Discord](https://discord.gg/vhv5cEZN)
2. Click on Subspace Network at the top left corner and choose **Linked Roles**.

   ![Discord-1](/img/developers/Discord-1.png)

3. Link your GitHub account to get a developer role and gain access to **developer-chat**. 
   ![Discord-2](/img/developers/Discord-2.png)