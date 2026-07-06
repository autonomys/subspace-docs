---
title: Talisman
sidebar_position: 4
description: How to configure the Talisman wallet for the Autonomys Network
slug: /wallets/talisman
keywords:
    - Farmer
    - Farming
    - CLI
    - Talisman
    - Wallet
---

:::note

The Talisman extension is a multi-chain web wallet supporting Substrate (Polkadot/Kusama/Autonomys) and EVM (Ethereum) ecosystems. You can manage multiple accounts and network configurations via its holistic sidebar application design.

:::

## Create a New Wallet

1. Go to the official [Talisman Website](https://www.talisman.xyz/) and select the download option matching your browser (Chrome/Firefox/Brave).

2. Open the browser extension. On the onboarding splash window, review the privacy notes and click the green **"Get Started"** button. Create a strong local master password to lock the extension interface on your machine, then click **"Continue"**.

3. On the **"Create a new Substrate account"** screen, locate the **Account name** field and type a local name inside the **"Choose a name"** input box. Click the green **"Create →"** button in the lower-right corner to proceed.

    ![step-3](/img/doc-imgs/talisman/Talisman-8.png)

4. Your new wallet identity is now initialized. To retrieve your public address strings for funding, click the active account profile card from your sidebar dashboard.

5. Click on **"Receive Funds"** to access the multi-chain public address portal.

6. In the **"Select network"** modal overlay that appears, click inside the **"Search by network name"** input bar and type *Autonomys*.

7. Locate the **Autonomys** entry from the filtered list. You will see a preview of your public address starting with the native network characters `su`. Click it to automatically copy your native address string directly to your clipboard.


## Backup Your Wallet

Before interacting with the mainnet or funding your wallet, you must back up your security keys. If your computer fails and you do not have a secure backup, your funds will be lost permanently.

1. Open the Talisman dashboard and click the **Settings** cog wheel icon in the bottom-left corner of the interface.

2. Select the **"Accounts"** option, then click on the individual wallet profile you wish to secure.

3. Next, click **"Backup Account"** followed by **"Reveal Recovery Phrase"**. Enter your local master password to authorize the decryption.

    ![step-4](/img/doc-imgs/talisman/Talisman-9.png)

4. Your unique 12-word recovery phrase will appear on the screen. Write these words down exactly as shown in their numerical sequence.

    ![step-5](/img/doc-imgs/talisman/Talisman-10.png)

:::danger Store Safely
NEVER save your phrase digitally as plain text or share it with anyone. Anyone who gets hold of this recovery phrase has full, permanent control over your tokens.
:::

5. Click the verification checkbox confirming you have safely written the seed words down, then finalize the backup action.


## Importing an Existing Seed

If you have an existing 12-word mnemonic phrase from another Substrate configuration (like Polkadot.js), follow this workflow to import it.

1. Install the extension using the baseline installation instructions. On the setup window, choose **"Import an existing wallet"** instead of creating a new one.

2. Select **"Import via Recovery Phrase"** and ensure your ecosystem target configuration is set to **"Polkadot / Substrate"**.

3. Carefully type your 12-word phrase into the input blocks in the correct order. Click **"Continue"**.

4. Assign a descriptive local name for your wallet profile and set a strong master password to secure the client locally on your device. Click the green completion button to finish the import flow.

    ![step-6](/img/doc-imgs/talisman/Talisman-22.png)


## Troubleshooting

If you encounter general network connection delays or balance synchronization errors, please check the [Official Talisman Support Center](https://docs.talisman.xyz/). Common network tips are listed below.

### Why is my balance not updating instantly?
* The local wallet extension relies on public RPC node infrastructure to pull block updates. If the node is experiencing heavy traffic, your balance view may lag slightly behind the block explorer. Your funds are completely safe on the ledger.
