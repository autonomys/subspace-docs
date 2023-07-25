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


