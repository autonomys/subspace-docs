---
title: Auto SDK
sidebar_position: 1
description: Start Building using Auto SDK
keywords:
    - Developers Documentation
    - DevDocs
    - SDK
    - Auto SDK
---

## Introduction to the Auto SDK
Welcome to the Auto SDK documentation! The Auto SDK is a comprehensive toolkit designed to simplify the development of applications and integrations with the Autonomys Network. It provides a set of modular packages that enable developers to interact seamlessly with the consensus chains and active domains (Auto ID, Nova)

### What is the Auto SDK?
The Auto SDK is a collection of JavaScript/TypeScript packages that abstract the complexity of blockchain interactions. It includes utilities for consensus mechanisms, identity management, and general-purpose functions that are essential for building decentralized applications (dApps) and services on the Autonomys Network.

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

### Getting Started
This guide will help you set up the Auto SDK locally and run it against a current public testnet (Gemini 3h), or a local instance of Autonomys node for testing purposes.

### Prerequisites
- **Node.js**: Make sure you have Node.js installed.
- **Yarn 4**: The project uses Yarn Berry (Yarn 4) as the package manager.

### Repository Structure
The repository is organized as follows:

- packages/auto-utils: Utility functions for the SDK.
- packages/auto-consensus: Consensus-related functions.
- packages/auto-id: Identity management functions.

### Setup Instructions
1. Clone the Repository
Open your terminal and run:

```bash
git clone https://github.com/autonomys/auto-sdk.git
```

2. Navigate to the Project Directory

```bash
cd auto-sdk
```
3. Set Yarn to Use the Berry Version

```bash
yarn set version berry
```
4. Install Dependencies

```bash
yarn install
``` 

### Build and Test

**Build All Packages**: to compile all packages, run:

```bash
yarn run build
```

**Run Tests** 
To execute tests for all packages:

```bash
yarn run test
```

### Localhost Testing 
You can test the SDK packages against a local Autonomys node using the provided scripts instead of a public testnet (**Gemini 3h**).

**Steps**:
1. Verify OS and Architecture Settings
Edit the **scripts/download.sh** file and ensure that lines 3-7 match your current operating system and architecture:

```bash
# Change the following variables as needed
# OS to download
OS="macos" # Options: macos | ubuntu | windows
# Architecture to download
ARCHITECTURE="aarch64" # Options: aarch64 | x86_64-skylake | x86_64-v2
```

2. Run the Development Script
Execute the following command to start the local node and farmer:

```bash
node scripts/run-dev.js
```

This script will:

1. Download the latest version of the node and farmer compatible with your OS and architecture (scripts/download.sh).
2. Start the Node and create/insert the keystore (scripts/run-node.sh).
3. Start the Farmer (scripts/run-farmer.sh).
4. Register the Node as an operator, wait for synchronization, and then terminate the node and farmer (handled within scripts/run-dev.js).
5. Restart the Node as an operator (scripts/run-operator.sh).
6. Restart the Farmer (scripts/run-farmer.sh).

**Run Tests Against the Local Node**

```bash
bash scripts/localhost-run-test.sh
```

The tests will automatically detect the local node and farmer, executing against them instead of the public testnet.

## Next Steps

With the Auto SDK set up locally, you're ready to start building and testing your blockchain applications. Explore the additional pages for the code examples and function overview.