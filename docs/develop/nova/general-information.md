---
title: General information on dev tools and Autonomys EVM
sidebar_position: 3
description: Guide on setting up
keywords:
  - metamask
  - subspace network
---

### What tools are available for developers?
---
Developing smart contracts involves a suite of tools that aid in writing, testing and deploying code on the blockchain. **Autonomys utilizes an instance of the Ethereum Virtual Machine. Therefore, every tool used to build, test, and deploy smart contracts on Ethereum is also available for Autonomys!**

First, Solidity is the primary programming language for writing smart contracts. It is statically typed, supports inheritance, libraries, and complex user-defined types, making it familiar for developers with a background in other statically typed languages such as C++, Java, or JavaScript.

Integrated Development Environments (IDEs) such as the [Remix IDE](https://remix.ethereum.org/) are often used to aid in writing smart contracts. Remix IDE is a browser-based IDE that enables you to write, deploy, and interact with Solidity smart contracts. It features a built-in static analysis tool that checks your code for common errors.

For local development and testing, you have multiple options. You can spin up your own version of a Autonomys Developer Node and farmer to deploy contracts, develop applications, and run tests. Alternatively, you can use Ethereum development tools like [Hardhat](https://hardhat.org/hardhat-network/docs/overview) or [Anvil](https://book.getfoundry.sh/anvil/), which are fully compatible with Autonomys due to their EVM compatibility.

For deploying and interacting with smart contracts, a JavaScript provider like the one injected by the [MetaMask](https://metamask.io/) browser extension is used. This provider enables JavaScript applications to communicate with the Autonomys network or any Ethereum-compatible network. It's compatible with both [ethers.js](https://docs.ethers.org/v5/), [web3.js](https://web3js.readthedocs.io/en/v1.10.0/) and [Web3.py](https://web3py.readthedocs.io/en/stable/), allowing developers to use either library for their blockchain operations.

All these tools together provide an ecosystem for EVM-compatible smart contract development, making the process more manageable and efficient.

### Smart Contract
---
A smart contract is a digital agreement coded into a blockchain network, designed to automatically execute or enforce the terms of a contract. These self-executing contracts, primarily developed on decentralized computer systems, eliminate the need for an intermediary by conducting transactions directly between parties. Smart contracts are transparent, traceable, and irreversible, providing immediate certainty about outcomes once preset conditions are met. They streamline various applications, from finance to supply chain management, by automating workflows and facilitating trustless interactions.

### Differences with Ethereum
---
Autonomys Token (ATC) (TSSC for Subspace Credit during the testnet) is the sole method of payment for gas within the Autonomys EVM runtime.
There will be a bridge to convert farmed tokens into EVM-compatible tokens to cover the gas fees, however, at the moment the only viable option to get some TSSC on your wallet is through the Autonomys [faucet](faucet.md)

### What is Solidity? 
---
Solidity is a statically typed, contract-oriented, high-level language primarily used for implementing smart contracts on blockchain platforms like Ethereum. Its syntax is similar to that of JavaScript and C++, which makes it relatively easy for developers from those language backgrounds to pick it up. Its features such as contract classes, inheritance, complex user-defined types, and libraries bring object-oriented programming capabilities to blockchain development.


One of the key features of Solidity is its first-class support for "contracts." These are akin to classes in object-oriented languages but are deployed on the Ethereum blockchain, allowing them to maintain a persistent state over time and interact with other contracts, the same way as objects interact in traditional programming.


Moreover, Solidity comes with safety features, such as a robust type system and control structures, which help prevent bugs. It also provides a variety of built-in functions for performing operations like cryptographic hashing, signature verification, and address checking, making it easier to write secure code.


The popularity of Solidity is primarily due to its design for Ethereum, the leading smart contract platform. As Ethereum gained traction for decentralized applications (dApps), Solidity became the go-to language for writing smart contracts for these applications. Furthermore, its resemblance to widely-used languages like JavaScript and C++ helped its adoption amongst developers.


Lastly, Solidity is continually evolving with frequent updates, new features, and improvements that address the unique needs of blockchain development. This responsive development and the thriving community around it further solidify its position as the leading language for smart contract development.

Solidity has a great community of developers and extensive documentation is available on the official [website](https://soliditylang.org/).
