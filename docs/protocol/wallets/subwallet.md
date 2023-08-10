---
title: SubWallet (Recommended)
sidebar_position: 1
description: How to configure the SubWallet Substrate wallet for the Subspace Network
keywords:
    - Farmer
    - Farming
    - CLI
    - SubWallet
    - Wallet
---

:::note

SubWallet is a 3rd party Substrate/EVM wallet created by the [Subwallet Team](https://subwallet.app).

*This guide will be following the browser extension pathway. There is also a mobile application available for [Android](https://play.google.com/store/apps/details?id=app.subwallet.mobile&pli=1) and [IOS](https://testflight.apple.com/join/ZW3pUbWj).*

:::

SubWallet is a user-friendly Web3 Multiverse Gateway for the Substrate ecosystem. Our vision is to provide you with the simplest and most secure way to connect to blockchain-based applications. 

To learn more about SubWallet visit their [Website](https://subwallet.app).

## Create or Import A New Wallet

1. Visit the [SubWallet website](https://subwallet.app/download.html) and Download your respective version. 
2. Once extension is installed, Open it and click `+`, & `Get Started`

	![step-2](/img/doc-imgs/subwallet/welcome-back.png)

3. The extension will give you up to four options. You will most likely want to select `Create New Account`

	:::tip
	If you would like to Import an **Existing** Wallet, then select `Import from pre-existing seed`
	:::

	![step-3](/img/doc-imgs/subwallet/create-new.png)

4. When you create a new account you will see the following.

	:::info Info
	SubWallet supports Substrate and EVM, so when a wallet is generated you will see the top option which is simply the substrate chain information, then a section labeled EVM which is evm wallet information. **For subspace, we currently have no EVM integrations so you can disregard this portion.**
	:::

	![step-4](/img/doc-imgs/subwallet/select-account.png)
	

5. Check which accounts you would like to import, and check `I have saved my mnemonic seed safely` and click `Next`

	:::danger
    MAKE SURE YOU STORE THIS SECURELY, AND NEVER SHARE IT
    :::

	![step-5](/img/doc-imgs/subwallet/next-step.png)

6. Next we will create a password for our wallet. (Make sure not to reuse passwords!)

	![step-6](/img/doc-imgs/subwallet/create-password.png)

7. Next Subwallet will ask you which networks you want to enable, **Scroll down and select the Subspace Testnet/s** including any other substrate based networks you may like to use in the future, click `Confirm`

	![step-7](/img/doc-imgs/subwallet/select-network.png)

8. Congratulations you have fully created your substrate wallet with subwallet! 

## Adding New Networks to SubWallet

:::caution

This tutorial assumes you have already completed the setup for SubWallet. If you have not please refer to the **[section above](#create-or-import-a-new-wallet)**

:::

SubWallet supports adding custom networks. This can be helpful for in-development networks such as the Subspace Network as we have regularly changing RPC endpoints and versions of testnets, and soon various domains. Below you will find a simple guide on how to add these new networks. Additionally we will try and keep an updated list of active RPC endpoints below for development. 

:::info RPC Endendpoints

- **Gemini 3d Endpoint: ** wss://rpc.gemini-3d.subspace.network/ws
- **Gemini 3e Endpoint: ** wss://rpc.gemini-3e.subspace.network/ws


:::

1. Open SubWallet, Select the 3 Line menu in the top left of the wallet

    ![rpc-step-1](/img/doc-imgs/subwallet/rpc-step-1.png)

2. Inside the settings menu you will see the option to *Manage Networks*, click this.

    ![rpc-step-2](/img/doc-imgs/subwallet/rpc-step-2.png)

3. Within the *Manage Networks* menu you will see a `+` in the top right corner, click this

    ![rpc-step-3](/img/doc-imgs/subwallet/rpc-step-3.png)

4. This will open the *Import Network* menu, where you will see a few options
    - Provider URL
    - Network Name
    - Symbol
    - Astral Explorer
    - Crowdloan URL

    The only option that is required is the Provider URL. You can add an explorer if you would like but it is not required. (The current Subspace Explorer is available [here](https://explorer.subspace.network).

    You can refer to the *RPC Endpoints* above for available provider URLs for the Subspace Network. 

    ![rpc-step-4](/img/doc-imgs/subwallet/rpc-step-4.png)

5. Fill in the provider URL, once you click out of this box it will check the URL and add the rest of the information, then click Save. 
    - *In this example we will be using `wss://rpc.devnet.subspace.network`*

    ![rpc-step-5](/img/doc-imgs/subwallet/rpc-step-5.png)

6. You will then be taken back to the network screen where you can then see your new network that was added.

    ![rpc-step-6](/img/doc-imgs/subwallet/rpc-step-6.png)





## Troubleshooting

If you face any trouble or would like to learn about other features for SubWallet, please see the [Official SubWallet Documentation.](https://docs.subwallet.app/) We have included some basic FAQ's below.

### How can I find my Public Address?
- You can see your default substrate public address right next to your Wallet name inside the extension

    ![trouble-1](/img/doc-imgs/subwallet/trouble-1.png)

- You can see your Subspace Testnet public address via the dropdown menu and setting the chain to `Subspace Testnet`, once you done you will see the public address now starts with `st`

    ![step-8](/img/doc-imgs/subwallet/final-page.png)

### I Dont see `Subspace Testnet` or any Subspace Networks as an option in chain settings

- Sometimes when you first install or update the Substrate wallet you will need to update the wallet metadata.

1. Go to the Subspace/Polkadot Explorer here: [Polkadot/Substrate Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer)

2. You will be prompted to allow the extension to connect, select which account you want to connect and click `Connect`

    ![trouble-4](/img/doc-imgs/subwallet/trouble-2.png)

3. On the Webpage, click `settings`

    ![trouble-5](/img/doc-imgs/polkadot/trouble-5.png)

4. Click `Metadata`

    ![trouble-6](/img/doc-imgs/polkadot/trouble-6.png)

5. Click `Update Metadata`

    ![trouble-3](/img/doc-imgs/subwallet/trouble-3.png)

6. You will get a popup from the extension telling you that your metadata is out of date, confirming that you want to update. Click `Approve` 

    ![trouble-4](/img/doc-imgs/subwallet/trouble-4.png)

7. You will now see `Subspace Testnet` as an option on the `Allow use on any chain` dropdown. 

    ![trouble-9](/img/doc-imgs/subwallet/trouble-5.png)

### How do I backup my wallet?

1. You can backup/export your wallet via the `...` menu, then click `Export Account`

    ![trouble-6](/img/doc-imgs/subwallet/trouble-6.png)

2. You will then enter your wallet password and click which preferred export method you would like to use, either `Private Key`, `QR`, or `JSON`

    ![trouble-7](/img/doc-imgs/subwallet/trouble-7.png)


