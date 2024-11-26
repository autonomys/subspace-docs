---
title: ✨ SubWallet
sidebar_position: 1
description: How to configure the SubWallet Substrate wallet for the Subspace Network
slug: /wallets/subwallet
keywords:
    - Farmer
    - Farming
    - CLI
    - SubWallet
    - Wallet
---

:::note

SubWallet is a 3rd party Substrate/EVM wallet created by the [Subwallet Team](https://subwallet.app).

*This guide will be following the browser extension pathway. There is also a mobile application available for [Android](https://play.google.com/store/apps/details?id=app.subwallet.mobile) and [IOS](https://testflight.apple.com/join/ZW3pUbWj).*

:::

SubWallet is a user-friendly Web3 Multiverse Gateway for the Substrate ecosystem. Our vision is to provide you with the simplest and most secure way to connect to blockchain-based applications. 

To learn more about SubWallet visit their [Website](https://subwallet.app).

## Create or Import A New Wallet

1. Visit the [SubWallet website](https://subwallet.app/download.html) and Download your respective version. 
2. Once extension is installed, open it.
3. The extension will give you up to four options. You will most likely want to select `Create a new account`.

:::tip
If you would like to Import an **Existing** Wallet, then select `Import an account`
:::

![step-3](/img/doc-imgs/subwallet/Subwallet-1.png)

4. Carefully read and accept the Terms of Use.

![step-4](/img/doc-imgs/subwallet/Subwallet-2.png)

5. Enter and confirm the password for your account. Make sure to use a strong password. 

![step-5](/img/doc-imgs/subwallet/Subwallet-3.png)

6. Review the information on how to keep your seed phrase secure. Click on each tip to confirm that you have read and understood it. 

![step-6](/img/doc-imgs/subwallet/Subwallet-4.png)

7. Enter a name for your account.

![step-7](/img/doc-imgs/subwallet/Subwallet-5.png)

8. Write down your seed phrase in a secure place. You will need it if you ever forget your password, or decide to transfer the account to another PC. 

![step-8](/img/doc-imgs/subwallet/Subwallet-6.png)

9. Congratulations you have successfully created your wallet with SubWallet.

![step-9](/img/doc-imgs/subwallet/Subwallet-7.png)

## Connect wallet to Autonomys Mainnet and find wallet public address

1. Open SubWallet, scroll all the way down and click on *Manage tokens*.

![wallet-1](/img/doc-imgs/subwallet/Subwallet-8.png)

2. You can deselect all automatically enabled tokens for your convenience.

![wallet-2](/img/doc-imgs/subwallet/Subwallet-9.png)

3. In the search bar, start typing the name of the network, e.g. Autonomys.
You will see two networks - **Mainnet** and **Taurus** test network.

![wallet-3](/img/doc-imgs/subwallet/Subwallet-10.png)

4. Return to the first screen, where you will see the AI3 token along with your balance. To view your wallet's public address, click on its name.

![wallet-4](/img/doc-imgs/subwallet/Subwallet-11.png)

5. And then click on the *Copy* icon to copy the public address. 

![wallet-5](/img/doc-imgs/subwallet/Subwallet-12.png)


## Connect to Subspace via RPC

Sometimes you won't see the network you would like to connect to in a list of available networks. In this case you can connect to Subspace Network manually via RPC.
This also can be helpful for in-development networks such as the Subspace Network as we have regularly changing RPC endpoints and versions of testnets, and soon various domains. Below you will find a simple guide on how to add these new networks. Additionally we will try and keep an updated list of active RPC endpoints below for development.

:::info RPC Endpoints
**Gemini 3h Endpoint:** `wss://rpc-1.gemini-3h.subspace.network/ws`<br />
**Taurus Testnet Endpoint:** `wss://rpc.taurus.subspace.foundation/ws`<br />
**Mainnet Endpoint:** `wss://rpc.mainnet.subspace.foundation/ws`
:::

1. Open SubWallet, Select the 3 Line menu in the top left of the wallet.
    ![rpc-step-1](/img/doc-imgs/subwallet/rpc-1.png)

2. Inside the settings menu you will see the option to Manage Networks, click this.
    ![rpc-step-2](/img/doc-imgs/subwallet/rpc-2.png)
    
3. Within the Manage Networks menu you will see a + in the top right corner, click this.
    ![rpc-step-3](/img/doc-imgs/subwallet/rpc-3.png)

4. This will open the Import Network menu, where you will see a few options
- Provider URL
- Network Name
- Symbol
- Block explorer
- Crowdloan URL
The only required option is the Provider URL. Adding an explorer is optional. You can access the current [Astral Block Explorer](https://astral.autonomys.xyz).
You can refer to the *RPC Endpoints* above for available provider URLs for the Subspace Network.
    
5. Fill in the provider URL, once you click out of this box it will check the URL and add the rest of the information, then click Save. 
- *In this example we will be using `https://nova-0.gemini-3h.subspace.network/ws`*

![rpc-step-4](/img/doc-imgs/subwallet/rpc-4.png)

6. You will then be taken back to the network screen where you can then select your new network that was added.

![rpc-step-5](/img/doc-imgs/subwallet/rpc-5.png)

## Troubleshooting

If you face any trouble or would like to learn about other features for SubWallet, please see the [Official SubWallet Documentation](https://docs.subwallet.app/).


### How do I backup my wallet?

1. You can backup/export your wallet. Click on your *Account*.

    ![trouble-1](/img/doc-imgs/subwallet/Trouble-1.png)


2. Select the account you would like to backup and click on the *edit* sign.

    ![trouble-2](/img/doc-imgs/subwallet/Trouble-2.png)

3. Select *Export*.

    ![trouble-3](/img/doc-imgs/subwallet/Trouble-3.png)

4. You will then enter your wallet password and click which preferred export method you would like to use, either `Seed phrase`, `JSON` or `QR code`.

    ![trouble-4](/img/doc-imgs/subwallet/Trouble-4.png)
