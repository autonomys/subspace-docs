---
title: Introduction
sidebar_position: 1
description: Start Building using Auto SDK
slug: /develop/auto-sdk/intro
keywords:
    - Developers Documentation
    - DevDocs
    - SDK
    - Auto SDK
---

## Introduction to the Auto SDK

Welcome to the Auto SDK documentation! The Autonomys Auto SDK is a powerful toolkit designed to empower developers to seamlessly integrate with the Autonomys Network. It enables interaction through familiar programming languages like TypeScript, without needing to delve into the complexities of blockchain or smart contracts. The SDK provides simple APIs for issuing and verifying Auto IDs, interacting with the consensus layer, handling data uploads, and managing payments using Auto Coin.

### What is the Auto SDK?

The Auto SDK is a collection of JavaScript/TypeScript packages that abstract away the complexity of blockchain interactions. It includes utilities for consensus interactions, identity management, data storage, and general-purpose functions that are essential for building decentralized applications (dApps) and services on the Autonomys Network.

### Key Features:

- **Modular Architecture**: Use only the packages you need.
- **Ease of Use**: Simplifies blockchain operations with high-level functions.
- **Flexibility**: Suitable for both beginners and experienced blockchain developers.
- **Community-Driven and Open-source**.

### Why Use the Auto SDK?

- **Simplify Development**: Focus on your application's logic rather than blockchain intricacies.
- **Accelerate Time-to-Market**: Reduce development time with ready-to-use functions.
- **Ensure Compatibility**: Stay up-to-date with the latest Autonomys blockchain protocols.
- **Enhance Security**: Utilize well-tested code for critical operations like identity management.

## Packages

This monorepo contains multiple packages, each serving a specific purpose. All packages are published to npm under the `@autonomys` scope:

- **@autonomys/auto-utils**: Core utility functions for interacting with the Autonomys Network.
- **@autonomys/auto-consensus**: Functions for interacting with the Consensus Layer.
- **@autonomys/auto-drive**: Tools for preparing and managing data for on-chain storage.
- **@autonomys/auto-id**: Functions for generating, renewing, and revoking Decentralized Identities (Auto IDs).

## Video Guide: Installing Auto SDK and Retrieving Account Balance 
For those who prefer a visual guide, we have created a short video demonstrating how to install the Auto SDK, along with a simple coding example that shows how to retrieve an account balance using the SDK. For step-by-step instructions, please refer to the [Requirements and Installation Guide below](#requirements).

<iframe width="560" height="315" src="https://www.youtube.com/embed/B5J9fwE5-vI?si=Mt133r3I2QnCae0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Installation

### Requirements

- **Node.js** (version 14 or higher)
- **Yarn** or **npm**

### Installing the Packages

Install the packages you need via npm or yarn. For example, to install `@autonomys/auto-utils` and `@autonomys/auto-consensus`:

#### Using npm

```bash
npm install @autonomys/auto-utils @autonomys/auto-consensus
```

#### Using yarn

```bash
yarn add @autonomys/auto-utils @autonomys/auto-consensus
```

## Cloning the Repository and Building Locally (Optional)

If you wish to contribute to the SDK or run the SDK packages locally, you can clone the repository and build the packages from source.

### Setup Instructions

1. **Clone the Repository**

   Open your terminal and run:

   ```bash
   git clone https://github.com/autonomys/auto-sdk.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd auto-sdk
   ```

3. **Install Dependencies**

   ```bash
   yarn install
   ```

4. **Build All Packages**

   To compile all packages, run:

   ```bash
   yarn run build
   ```

5. **Run Tests**

   To execute tests for all packages:

   ```bash
   yarn run test
   ```

## Localhost Testing

You can test the SDK packages against a local Autonomys node using the provided scripts instead of a public testnet (**Gemini 3h**).

### Steps

1. **Verify OS and Architecture Settings**

    Edit the `scripts/download.sh` file and ensure that lines 3-7 match your current operating system and architecture:

    ```bash
    # Change the following variables as needed
    # OS to download
    OS="macos" # Options: macos | ubuntu | windows
    # Architecture to download
    ARCHITECTURE="aarch64" # Options: aarch64 | x86_64-skylake | x86_64-v2
    ```

2. **Run the Development Script**

    Execute the following command to start the local node and farmer:

    ```bash
    node scripts/run-dev.js
    ```

    This script will:

    1. Download the latest version of the node and farmer compatible with your OS and architecture (`scripts/download.sh`).
    2. Start the Node and create/insert the keystore (`scripts/run-node.sh`).
    3. Start the Farmer (`scripts/run-farmer.sh`).
    4. Register the Node as an operator, wait for synchronization, and then terminate the node and farmer (handled within `scripts/run-dev.js`).
    5. Restart the Node as an operator (`scripts/run-operator.sh`).
    6. Restart the Farmer (`scripts/run-farmer.sh`).

**Run Tests Against the Local Node**

```bash
bash scripts/localhost-run-test.sh
```

The tests will automatically detect the local node and farmer, executing against them instead of the public testnet.

## Next Steps

With the Auto SDK set up locally, you're ready to start building and testing your blockchain applications. Explore the additional pages for code examples and a functions overview.