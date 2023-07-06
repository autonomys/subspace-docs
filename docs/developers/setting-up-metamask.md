---
title: Setting up MetaMask
sidebar_position: 4
description: Guide on setting up MetaMask for development purposes
keywords:
  - metamask
  - subspace network
---

### Adding Subspace RPC using MetaMask
---
You can use any EVM-compatible wallet, this guide will be using [**MetaMask**](https://metamask.io/) wallet.

First, let’s set up a MetaMask wallet and then go over connecting it to the Subspace Development Network.

1. Go to the [MetaMask Website](https://metamask.io/) and download an extension for your browser.
   Select your preferred language in the top-right corner. 
   Read and agree to MetaMask's terms of use.

  ![MetaMask-1](/img/developers/MetaMask-1.png)


2. Click on “Create a new wallet”.
  Read a note on gathering usage data and either agree to collect your anonymized data, or skip this step. It does not affect the creation of a wallet. 

  ![MetaMask-2](/img/developers/MetaMask-2.png)

3. On the next screen you will be asked to create a password. Remember to always set a secure password that’s difficult to guess. Type your password twice before proceeding to the next step.

  ![MetaMask-3](/img/developers/MetaMask-3.png)

4. MetaMask automatically assesses the strength of your password. 
  :::tip
  As a rule of thumb, you should set a strong password, meaning that it includes uppercase letters, lowercase letters, numbers and special characters.
  :::

  ![MetaMask-4](/img/developers/MetaMask-4.png)

5. Watch a video to learn more about your Secret Recovery Phrase before proceeding to the next step. 

  ![MetaMask-5](/img/developers/MetaMask-5.png)

6. Have a look and write down your 12-word recovery phrase. 
  :::info
  The wallet with the recovery phrase for this guide will be deleted right after the guide is complete.
  ::: 

  ![MetaMask-6](/img/developers/MetaMask-6.png)

7. Confirm that you’ve written down the recovery phrase by filling in the missing words of your recovery phrase. 

  ![MetaMask-7](/img/developers/MetaMask-7.png)

8. Now that your wallet is created, let’s connect to the Subspace Core EVM. Click on the Ethereum Mainnet logo and select Add Network.

  ![MetaMask-8](/img/developers/MetaMask-8.png)

9. At the settings, click on “Add a network manually”

  ![MetaMask-9](/img/developers/MetaMask-9.png)

10. To connect to Subspace RPC specify the values below

  ```
  Network Name: Subspace EVM
  New RPC URL: https://rpc.evm.gemini-3e.subspace.network/ws
  Chain ID: 1002
  Currency Symbol: TSSC
  ```

You're all set, **you have successfully configured your MetaMask wallet** and connected it to **Subspace Core EVM**. To deploy your smart contract, you first need to get a small amount of **TSSC**  tokens into your wallet. Please make sure to refer to the [faucet section](../developers/faucet.md) of the guide to learn more about getting test tokens. 