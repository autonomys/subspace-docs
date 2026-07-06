---
title: Polkadot
sidebar_position: 3
description: How to configure the Polkadot{.js} Substrate wallet for the Autonomys Network
slug: /wallets/polkadot
keywords:
    - Farmer
    - Farming
    - CLI
    - polkadot.js
    - Wallet
---

:::note

The Polkadot{.js} extension is a Substrate/EVM wallet created by the creators of Substrate & Polkadot/Kusama, the [Parity Team](https://www.parity.io/).

:::

This is the barebones wallet framework designed to support all Substrate-based networks. The extension functions similarly to MetaMask or other browser-based Web3 wallets you may have used.

## Create a New Wallet

1. Visit the official [Polkadot{.js} Extension website](https://polkadot.js.org/extension/) and download the respective version for your browser (Chrome/Firefox). 

:::tip

The Chrome extension works seamlessly on all Chromium-based browsers, including Google Chrome, Brave, Vivaldi, Microsoft Edge, and Opera.

:::

2. Once the extension is installed, open it from your browser's extension toolbar. Review the privacy and information notes, then click the orange **"Understood, let me continue"** button at the bottom.

    ![step-2](/img/doc-imgs/polkadot/Polkadot-1.png)

3. On the **Add Account** splash screen, click the large `+` icon in the center of the window (or the small `+` icon in the top-right corner) to create your first account.

    ![add-account-screen](/img/doc-imgs/polkadot/Polkadot-2.png)

4. The extension will generate and display your unique 12-word mnemonic seed phrase. Write this down or click **"Copy to clipboard"** to back it up. 

:::danger Secure Your Backup
MAKE SURE YOU STORE THIS MNEMONIC SEED SECURELY AND NEVER SHARE IT. Anyone who obtains these 12 words can access and control your network funds permanently.
:::

   Once securely backed up, click the checkbox for **"I have saved my mnemonic seed safely."** and then click the brown **"Next step"** button at the bottom.

    ![mnemonic-seed-screen](/img/doc-imgs/polkadot/Polkadot-3.png)

5. On the second configuration page (**Create an account 2/2**), set up your account parameters:
   * **Network:** Leave this set to the default **"Allow use on any chain"** option (you will map this to the Autonomys mainnet via metadata settings later).
   * **A Descriptive Name for Your Account:** Input a local reference name for your wallet.
   * **A New Password for This Account:** Create a strong password to encrypt your keys locally, then confirm it in the secondary password field.
   
   Once all fields are complete, click the brown **"Add the account with the generated seed"** button at the bottom.

    ![account-credentials-setup](/img/doc-imgs/polkadot/Polkadot-4.png)

6. Congratulations! You have successfully created your Polkadot.js wallet extension account. Your active account profile card will now be displayed inside the main dashboard interface.

    ![wallet-dashboard-active](/img/doc-imgs/polkadot/Polkadot-5.png)


## Importing an Existing Seed

If you have an existing mnemonic seed phrase (for instance, one generated from Subspace-Desktop), use this workflow to restore your account.

1. Install the Extension (See step 1 of the previous section).

2. Once the extension is installed, open it and click the orange `+` icon in the top-right toolbar. From the dropdown menu that appears, select **"Import account from pre-existing seed"**.

    ![import-menu-selection](/img/doc-imgs/polkadot/step-2a.png)

3. Type or paste your 12-word mnemonic seed phrase into the designated input box and click the brown **"Next"** button.

    ![seed-input-entry](/img/doc-imgs/polkadot/step-3a.png)

4. On the final page (**Import account 2/2**), fill out your account identification and security credentials:
   * **A Descriptive Name for Your Account:** Enter a local identifier for your imported profile.
   * **A New Password for This Account:** Set a strong password to encrypt this wallet account locally on your device, then confirm it in the field below.

   Once both fields are filled, click the brown **"Add the account with the supplied seed"** button at the bottom to finalize importing your account.

    ![import-credentials-setup](/img/doc-imgs/polkadot/step-4a.png)


## Troubleshooting

If you face any issues or want to explore advanced features, consult the [Official Polkadot.js Documentation](https://polkadot.js.org/). Common network FAQs are detailed below.

### How can I find my Public Address?
* You can see your default Substrate public address starting with `5` directly below your wallet name inside the main extension window.
    
    ![trouble-1](/img/doc-imgs/polkadot/trouble-1.png)

* To view your specific Autonomys mainnet address, click the three orange vertical dots on the right side of your account card to open the options menu. Click the dropdown at the bottom that reads **"Allow use on any chain"** and switch it to **"Autonomys mainnet"**. Once you exit the menu, your public address string will update to start with the native network identifier `su`.

    ![account-chain-dropdown](/img/doc-imgs/polkadot/trouble-2.png)


### I Don't See 'Autonomys mainnet' in the Chain Settings Dropdown
Sometimes when installing or updating the extension on a new browser, the local wallet doesn't automatically recognize the latest Autonomys Network parameters. You simply need to push the latest blockchain metadata directly from the portal interface into your browser extension.

Follow these steps with your browser window open:

1. Navigate to the official **Autonomys Portal**. When your browser extension detects the site, an access permissions popup will appear. Check the box for your desired account(s) and click **"Connect 1 account(s)"** to allow the portal to communicate with your wallet.
    
    ![authorize-connection](/img/doc-imgs/polkadot/trouble-4.png)

2. In the main top navigation menu of the web interface, click on **Settings**.
    
    ![portal-settings](/img/doc-imgs/polkadot/trouble-5.png)

3. Within the sub-tabs under the settings menu, click on the **Metadata** option.
    
    ![metadata-tab](/img/doc-imgs/polkadot/trouble-6.png)

4. Click the active action button labeled **"Update Metadata"**.
    
    ![update-metadata-btn](/img/doc-imgs/polkadot/trouble-7.png)

5. Your browser extension will display a prompt asking to authorize the injection. Click **"Yes, do this metadata update"** to finalize the network sync.
    
    ![confirm-metadata-popup](/img/doc-imgs/polkadot/trouble-8.png)

Once completed, open your wallet extension window, click the `...` menu on your account card, and select the **"Allow use on any chain"** dropdown. **Autonomys mainnet** will now be fully available.


### How Do I Backup my Wallet?

1. Open the account settings menu by clicking the three orange vertical dots on your account card, then click the red **"Export Account"** option.

    ![export-account-selection](/img/doc-imgs/polkadot/trouble-11.png)

2. On the **Export account** screen, type your local password into the **"PASSWORD FOR THIS ACCOUNT"** input field, then click the dark red button that reads **"I want to export this account"**. This will generate and download an encrypted backup `.json` file containing your account data to your machine.

    ![export-account-password-confirm](/img/doc-imgs/polkadot/trouble-12.png)
