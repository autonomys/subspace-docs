---
title: Staking guide
sidebar_position: 2
description: Staking guide
keywords:
- Staking guide
- Staking
---

### Select an operator to nominate using Autonomys Staking interface

:::note
Three important factors to pay attention to are `*Nominator Tax`, `Min. Stake`, and `Status`.
:::

1. Proceed to the staking tab on [Astral](https://explorer.subspace.network/gemini-3h/staking) and connect your wallet.

![NStaking-1](/img/doc-imgs/operators-staking/NStaking-1.png)

2. Select the wallet you would like to connect. Both **Subwallet** and **PolkadotJS** wallets are supported.

![NStaking-2](/img/doc-imgs/operators-staking/NStaking-2.png)

3. Enter your password to give an access to your wallet.

![NStaking-3](/img/doc-imgs/operators-staking/NStaking-3.png)

4. Select the account you'd like to use from the dropdown menu. You can click the button in the upper left corner to see available token balances for the selected account. 

![NStaking-4](/img/doc-imgs/operators-staking/NStaking-4.png)

![NStaking-5](/img/doc-imgs/operators-staking/NStaking-5.png)

5. Make sure you are on the **Operators** tab to view the list of available **operators**. Scroll the page down, pay close attention to the **Nominator Tax**, **Min. Stake**, and **Status**, as these three parameters help you choose an operator to nominate. 

![N-nominators-5](/img/doc-imgs/operators-staking/N-Nominators-1.png)

6. Once you have picked the operator to nominate, click on **Actions** -> **Nominate**.

![N-nominators-7](/img/doc-imgs/operators-staking/N-Nominators-2.png)

7. Choose the token amount you want to nominate to the operator. It is also possible to nominate multiple operators. Click on **Submit** and approve the transaction in a pop-up window. 

![N-nominators-9](/img/doc-imgs/operators-staking/N-Nominators-3.png)

8. Wait for the transaction to go through. It takes 100 blocks (1 epoch duration) to complete the nomination. You may need to refresh the page but if you click the button on the right top of the screen to open the wallet, you should see a lower balance.

![NStaking-4](/img/doc-imgs/operators-staking/NStaking-4.png)

![N-nominators-10](/img/doc-imgs/operators-staking/N-Nominators-4.png)

9. You can also scroll down on the wallet panel and look at the last extrinsics section. Congratulations, you successfully became a **nominator**.

![N-nominators-11](/img/doc-imgs/operators-staking/N-Nominators-5.png)


### Check if your **nomination** worked successfully. 

1. Navigate to **[Subspace Subscan](https://subspace.subscan.io/)** portal.
2. Click on `Blockchain` -> `Extrinsics`.

  ![Staking-9](/img/doc-imgs/operators-staking/Staking-9.png)

3. Scroll to the bottom of the page to view all recent events, search for `nominate_operator` event.

 ![Staking-20](/img/doc-imgs/operators-staking/Staking-20.png)

4. Click on `Extrinsic ID` for the desired event.

5. Scroll to `Parameters` to view the stake value.

 ![Staking-21](/img/doc-imgs/operators-staking/Staking-21.png)

6. Scroll to `Events` and click on dropdown arrow for `domains(OperatorNominated)`.

  ![Staking-22](/img/doc-imgs/operators-staking/Staking-22.png)

7. Inspect and ensure that `nominatorId` matches your `id`. 

### Stake withdrawal using Autonomys Staking interface

Any **operator** or **nominator** can initiate withdrawal. They can withdraw the total staked amount or a portion of their stake.

:::note
- If an operator is initiating a withdrawal, then their remaining balance should be at least the minimum operator stake, otherwise the request is rejected.
- If a nominator is initiating a withdrawal, and the remaining balance is less than the operator-defined minimum nominator stake, then the total nominator stake is unlocked otherwise, only the requested amount is unlocked.
:::

1. Proceed to the staking tab on [Astral](https://explorer.subspace.network/gemini-3h/staking) and connect your wallet.

![NStaking-1](/img/doc-imgs/operators-staking/NStaking-1.png)

2. Select the wallet you would like to connect. Both **Subwallet** and **PolkadotJS** wallets are supported.

![NStaking-2](/img/doc-imgs/operators-staking/NStaking-2.png)

3. Enter your password to give an access to your wallet.

![NStaking-3](/img/doc-imgs/operators-staking/NStaking-3.png)

4. Select the account you'd like to use form the dropdown menu. You can click the button in the upper left corner to see available token balances for the selected account. 

![NStaking-4](/img/doc-imgs/operators-staking/NStaking-4.png)

![NStaking-5](/img/doc-imgs/operators-staking/NStaking-5.png)

6. Once you picked the operator to withdraw your stake from, click on **Actions** -> **Withdraw**.

![N-nominators-6](/img/doc-imgs/operators-staking/N-Nominators-6.png)

7. You will get a pop-up requesting how much you want to withdraw.  Use the slider to determine what percentage you want to withdraw or you can click the max button to withdraw your entire stake.

![N-nominators-7](/img/doc-imgs/operators-staking/N-Nominators-7.png)


Once the withdrawal is submitted, it's finalized after the **domain epoch** is completed. All the withdrawn funds are unlocked after the **locking period** is complete. The current **locking period** is set to 28,800 blocks, or about 48 hours. The locking period is necessary to ensure that the domain block executing the withdrawal is confirmed and not challenged by a fraud proof and to increase the economic stability of domains.

After the **locking period**, the withdrawn amount can be unlocked in the user's account.

8. Using the same operator you used to withdraw your stake from, click on **Actions** -> **Unlock Funds**.

![N-nominators-8](/img/doc-imgs/operators-staking/N-Nominators-8.png)

6. Submit the transaction, your funds should be unclocked and available once the epoch is complete (up to 10 minutes).

:::note
You can also withdraw your stake using the Nominators tab.  Your nomination(s) will be the only ones with an action buttin on the last collumn of the grid, ut with so many nominators it can be difficult to find yours.
:::
