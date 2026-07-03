---
title: Talisman
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
---

:::note
Talisman is a 3rd party Ethereum and Polkadot wallet created by the [Talisman Team](https://talisman.xyz).
:::

## Create or Import A New Wallet

1. Visit the [Talisman website](https://talisman.xyz/download) and add the extension to your browser.

2. Once the extension is installed, open it. Read through the initialization interface terms and click **"I agree to the privacy policy"**.

![step-2](/img/doc-imgs/talisman/Talisman-1.png)

3. On the welcome screen, choose your main onboarding path:
   * Select **"Create a new wallet"** if you are setting up fresh addresses for the first time.
   * Select **"Import an existing wallet"** if you have a pre-existing recovery phrase or JSON file.

![step-3](/img/doc-imgs/talisman/Talisman-2.png)

4. Type your secure master password into the **"Choose a password"** text box, re-enter it to confirm, and click **"Proceed"**.

![step-4](/img/doc-imgs/talisman/Talisman-3.png)

5. Upon successful setup, the welcome confirmation screen will appear. Click the bright lime-green **"Enter Talisman"** button to open the main web application portfolio dashboard interface.

![step-5](/img/doc-imgs/talisman/Talisman-4.png)

6. Once inside the main Talisman web dashboard, locate the **Get Started** panel. Click on the card labeled **"Add account"** (*Create or import an existing account*). Alternatively, you can click the small `+` icon next to the **Accounts** header in the left-hand sidebar menu.

![step-6](/img/doc-imgs/talisman/Talisman-5.png)

---

## Connect a wallet to Autonomys and find your wallet public address

### Creating a new account

1. In the **Add Account** menu panel, make sure you are on the default **"New"** tab (*Create a new account*).

![step-1](/img/doc-imgs/talisman/Talisman-6.png)

2. To create an account compatible with the Autonomys Network, look under the *Select account type* sub-section and click on the **"New Substrate Account"** option card (*66+ Networks supported*).

![step-2](/img/doc-imgs/talisman/Talisman-7.png)

3. On the **"Create a new Substrate account"** screen, locate the **Account name** field and type a local name inside the **"Choose a name"** input box. Click the green **"Create →"** button in the lower-right corner to proceed.

![step-3](/img/doc-imgs/talisman/Talisman-7-name.png)

4. A **"New recovery phrase"** security warning modal will pop up detailing the rules of seed safety. Review the security statements, then click the wide lime-green **"Acknowledge and Continue"** button at the bottom to reveal your keys.

![step-4](/img/doc-imgs/talisman/Talisman-8.png)

:::warning Protect Your Cryptocurrency Recovery Phrase at All Costs
Your recovery phrase (also known as a seed phrase) is the master key to your cryptocurrency wallet. Anyone with access to this phrase can take complete control of your funds. Never share it with anyone, never store it in unsecured digital platforms or emails, and always ensure you have a safe offline backup. Treat it like your most sensitive personal or financial information. *If it’s exposed or lost, you could permanently lose access to your cryptocurrency*.
:::

5. Your 12-word seed phrase will be displayed on the screen. Write down your words in their exact chronological order. Once backed up safely offline, click the mandatory checkbox that reads **"I have backed up my recovery phrase, don't remind me anymore"**. You can then click **"Verify recovery phrase"** to confirm your words, or click **"Skip Verification"** at the very bottom to return to the dashboard.

![step-5](/img/doc-imgs/talisman/Talisman-10.png)

6. Once completed, you will be redirected to your main Talisman dashboard. Your new account name will appear under the **Accounts** panel on the left. 

    > 💡 **Tip:** For quick access, click your browser's extensions icon (🧩) and select the pin icon (📌) next to Talisman to anchor it to your browser toolbar.

![step-6-dashboard](/img/doc-imgs/talisman/Talisman-11.png)

7. To locate your public wallet address, scroll down to the **"Fund your account"** section on the main dashboard card and click the **"Receive"** button block.

8. In the **"Select network"** modal overlay that appears, click inside the **"Search by network name"** input bar and type *Autonomys*. 

9. Locate the **Autonomys** entry from the filtered list. You will see a preview of your public address starting with the native network characters `sue`. 

10. To manage or copy your credentials, choose one of the quick actions on the right side of the row:
    * Click the **QR code icon** (four squares) to open up an expandable address card layout.
    * Click the **Copy icon** (overlapping document squares) to save your public address directly to your clipboard.

![step-10-network](/img/doc-imgs/talisman/Talisman-12.png)

---

### Importing an existing account

1. Navigate to **Settings > Accounts > Add Account** and click on the **"Import"** tab from the top horizontal navigation menu.

![import-step-1](/img/doc-imgs/talisman/Talisman-13.png)

2. Choose your preferred ingestion method based on your existing backup type:

#### Path A: Import via Recovery Phrase
* From the main import tab layout, click the **"Import via Recovery Phrase"** card.
* Under the prompt **"What type of account would you like to import?"**, select the **Substrate** card option (*Polkadot, Bittensor, and other Substrate chains*).

![import-phrase-selection](/img/doc-imgs/talisman/Talisman-15.png)

* Type or paste your 12 or 24-word seed phrase into the secure text field on the subsequent screen and choose an account name to finalize your deployment.

#### Path B: Import via JSON Backup
* From the main import tab layout, click the **"Import via JSON"** card (labeled *Import your Polkadot.{js} file*).
* On the **"Import via JSON"** layout, drop your encrypted backup file directly onto the dashed target area labeled **"Drop your JSON file"**, or click the lime-green **"Browse"** text link to open your system's file explorer. 

![import-json-upload](/img/doc-imgs/talisman/Talisman-14.png)

* Enter the password originally used to encrypt that specific JSON file to finish restoring your keys.

---

## Troubleshooting

If you face any trouble or would like to learn about other features for Talisman, please see the [Official Talisman Documentation](https://docs.talisman.xyz/talisman).
