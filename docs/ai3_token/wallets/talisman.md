---
title: Talisman
sidebar_position: 1
description: How to configure the Talisman wallet for the Autonomys Network
slug: /wallets/talisman
sidebar_custom_props:
    card_thumbnail: /img/doc-imgs/wallets/talisman-card.png
    featured: true
keywords:
    - Farmer
    - Farming
    - CLI
    - Talisman
    - Wallet
---

:::note

The Talisman wallet is a multi-chain web3 wallet that supports both Substrate (Polkadot ecosystem) and EVM (Ethereum ecosystem) networks.

:::

Talisman offers an intuitive interface for managing assets across multiple ecosystems, making it an excellent choice for users interacting with the Autonomys Network.

## Create a New Wallet

1. Download and install the browser extension from the official [Talisman Website](https://talisman.xyz/).

2. Open the browser extension. On the onboarding splash window, review the privacy notes and click the green **"Get Started"** button. Create a strong local master password to lock the extension interface on your machine, then click **"Continue"**.

    ![step-2](/img/doc-imgs/talisman/Talisman-1.png)

3. On the **"Create a new Polkadot account"** screen, locate the **Account name** field and type a local name inside the **"Choose a name"** input box. Click the green **"Create →"** button in the lower-right corner to proceed.

    ![step-3](/img/doc-imgs/talisman/Talisman-2.png)

4. The wallet dashboard will open, showing your newly generated account. To copy your address, click **"Receive"**, select your account, and search for or click on **Autonomys Network**. Your address string should begin with the native network identifier `su`.


## Backup Your Wallet

:::danger Secure Your Backup
Always secure your backup recovery phrase. Anyone who gains access to these words can completely control your assets.
:::

1. Open the Talisman extension and click the **Settings** gear icon or select your account profile avatar in the upper navigation bar.

2. Navigate to **"Backup Recovery Phrase"** or **"Export Account"**. Enter your local master password to unlock your credentials.

3. Write down the 12 or 24-word recovery phrase exactly as displayed on the screen and store it safely offline. Check the confirmation box acknowledging you saved the phrase securely to finalize the backup process.


## Importing an Existing Seed

If you are migrating from another wallet application (such as Polkadot.js), follow these steps to import your account.

1. Open the Talisman interface and open the account options menu by clicking your avatar or the **"Add account"** button in the sidebar.

2. From the multi-tab layout, choose **"Import an existing account"** and select **"Recovery Phrase"**.

    ![import-menu-selection](/img/doc-imgs/talisman/Talisman-6.png)

3. Select **"Polkadot / Substrate"** as your target ecosystem network type.

4. Carefully type or paste your 12-word mnemonic seed phrase into the input field. Give the account a unique local nickname, set up your password authorization, and click **"Import"** to restore your wallet.

    ![wallet-dashboard-restored](/img/doc-imgs/talisman/Talisman-9.png)


## Troubleshooting

If you encounter performance hitches, asset display issues, or balance sync errors, please consult the [Official Talisman Documentation](https://docs.talisman.xyz/talisman). Common network tips are listed below.

### My Autonomys address is missing or shows an incorrect prefix
Talisman handles address prefixes automatically based on the network context. Ensure you are looking at your Substrate/Polkadot identity. If the address doesn't match the native format starting with `su`, ensure you have toggled on the **Autonomys Network** visibility under your active network filtering settings inside the primary dashboard interface.
