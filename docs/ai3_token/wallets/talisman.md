---
title: Talisman (Recommended)
sidebar_position: 1
description: How to configure the Talisman wallet for the Autonomys Network
slug: /wallets/talisman
sidebar_custom_props:
  featured: true
keywords:
  - Farmer
  - Farming
  - CLI
  - Talisman
  - Wallet
  - Staking
---

:::tip Recommended Wallet
Talisman is the highly recommended wallet extension for navigating the Autonomys Network ecosystem, managing assets, and participating in network staking.
:::

:::note
Talisman is a 3rd party Ethereum and Polkadot wallet created by the [Talisman Team](https://talisman.xyz).
:::

## Create or Setup Your Talisman Wallet

1. Visit the [Talisman website](https://talisman.xyz/download) and add the extension to your browser.

2. Once the extension is installed, open it from your browser's extension menu.

![step-2](/img/doc-imgs/talisman/Talisman-1.png)

3. After clicking the `Get Started` button, you will need to set a secure master password for the extension.

![step-3](/img/doc-imgs/talisman/Talisman-2.png)

4. Once you set your password and click `Continue`, you will need to answer a privacy question regarding data sharing preferences.

![step-4](/img/doc-imgs/talisman/Talisman-3.png)

5. You will then get a welcome screen. Click `Enter Talisman` to access your main wallet interface.

![step-5](/img/doc-imgs/talisman/Talisman-4.png)

6. Once you enter Talisman, you will see the primary wallet dashboard.

![step-6](/img/doc-imgs/talisman/Talisman-5.png)

---

## Managing Your Accounts

To participate in Autonomys Network staking, it is highly recommended to create a dedicated fresh account to isolate your staking capital.

### Creating a New Account (Recommended for Staking)

1. On the dashboard, click the `Add account` button to open the account management panel.

![step-1](/img/doc-imgs/talisman/Talisman-6.png)

2. Click on `New Polkadot account`. You will be prompted to choose an account name (e.g., "Autonomys Staking").

![step-2](/img/doc-imgs/talisman/Talisman-7.png)

3. After choosing a name and clicking `Create`, the extension will present crucial safety guidelines about your recovery phrase. Read these carefully.

![step-3](/img/doc-imgs/talisman/Talisman-8.png)

![step-3](/img/doc-imgs/talisman/Talisman-9.png)

4. Click `Acknowledge and Continue` to reveal your unique backup recovery phrase.

![step-4](/img/doc-imgs/talisman/Talisman-10.png)

:::warning Protect Your Cryptocurrency Recovery Phrase at All Costs
Your recovery phrase (also known as a seed phrase) is the master key to your cryptocurrency wallet. Anyone with access to this phrase can take complete control of your funds. Never share it with anyone, never store it in unsecured digital platforms or emails, and always ensure you have a safe offline backup. Treat it like your most sensitive personal or financial information. _If it’s exposed or lost, you could permanently lose access to your cryptocurrency_.
:::

5. You can either verify the recovery phrase immediately or select `Skip Verification` to proceed back to the dashboard.

![step-5](/img/doc-imgs/talisman/Talisman-11.png)

### Importing an Existing Account

If you already have an active consensus-chain Substrate seed phrase, you can import it directly.

1. Click the `Add account` button on your dashboard.

![step-1](/img/doc-imgs/talisman/Talisman-6.png)

2. Navigate to the **Import** tab at the top of the panel.

![step-2](/img/doc-imgs/talisman/Talisman-16.png)

3. Click `Import via Recovery Phrase` and explicitly select **Polkadot** as the network type.

![step-3](/img/doc-imgs/talisman/Talisman-17.png)

4. Provide an account name and enter your secret recovery phrase into the input field.

![step-4](/img/doc-imgs/talisman/Talisman-18.png)

5. Click the final `Import` button at the bottom to link your existing account.

---

## Connect to Autonomys & Find Your Public Address

Once your account is ready, follow these steps to retrieve your public address for receiving tokens or mapping to staking nodes.

1. From the main dashboard view, click the **Receive** button.

2. In the network selection search bar, type `autonomys` to filter the network endpoints.

![step-7](/img/doc-imgs/talisman/Talisman-12.png)

3. Click on the Autonomys Network option. A modal will display your public address along with a scannable QR code. Click **Copy Address** to save it directly to your clipboard.

![step-8](/img/doc-imgs/talisman/Talisman-13.png)

---

## Backing Up Your Wallet (JSON Export)

In addition to your recovery phrase, keeping a backup JSON file adds an extra layer of structural asset security.

1. Click on the three dots menu icon in the top right corner of the extension interface.

![step-1](/img/doc-imgs/talisman/Talisman-19.png)

2. Choose **Export as JSON** from the dropdown options.

![step-2](/img/doc-imgs/talisman/Talisman-20.png)

3. Enter your wallet master password and click `Submit`.

![step-3](/img/doc-imgs/talisman/Talisman-21.png)

4. Create a unique, strong password specifically to encrypt this standalone JSON file.

![step-4](/img/doc-imgs/talisman/Talisman-22.png)

5. Click `Export` to automatically trigger the secure file download to your machine. Keep this file completely offline.

---

## 🚀 Next Steps: The Staking Journey

With your Talisman wallet fully optimized and mapped to the Autonomys Network infrastructure, you can now transition into active staking operations:

- **Fund Your Address:** Use your copied Substrate public address format to receive your tokens.
- **Advanced Portal Setup:** If your workflow requires hooking into full Polkadot apps dashboards, check out the [Polkadot.js Apps Guide](../../staking/additional-guides/polkadot-apps.mdx).
- **Launch Staking Positions:** Head straight over to the main [Staking Guide](../../staking/staking.mdx) to pair your wallet and begin earning block rewards.

## Troubleshooting

If you encounter interface differences or wish to explore advanced developer configurations, refer directly to the [Official Talisman Documentation](https://docs.talisman.xyz/talisman).
