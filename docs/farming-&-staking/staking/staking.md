---
title: Staking guide
sidebar_position: 2
description: Staking guide
slug: /staking/stake
keywords:
- Staking guide
- Staking
---

### Select an operator to nominate using Autonomys Staking interface

:::note Determing which operator to stake
The important parameters to pay attention to are the `Min. Stake` and `Nominator Tax`.
:::

1. Proceed to the staking tab on [Astral](https://astral.autonomys.xyz) and connect your wallet.

![NStaking-1](/img/doc-imgs/operators-staking/NStaking-1.png)

2. Select the wallet you would like to connect. **SubWallet**, **NovaWallet**, and **Talisman** wallets are supported.

![NStaking-2](/img/doc-imgs/operators-staking/NStaking-2.png)

3. Enter your password to give access to your wallet.

![NStaking-3](/img/doc-imgs/operators-staking/NStaking-3.png)

4. Select the account you'd like to use from the dropdown menu. You can click the button in the upper left corner to see available token balances for the selected account. 

![NStaking-4](/img/doc-imgs/operators-staking/NStaking-4.png)

![NStaking-5](/img/doc-imgs/operators-staking/NStaking-5.png)

5. Make sure you are on the **Operators** tab to view the list of available operators. Scroll the page down, pay close attention to the **Min. Stake** and **Nominator Tax**, as these parameters help you choose an operator to nominate. 

![NStaking-14](/img/doc-imgs/operators-staking/NStaking-14.png)

6. Once you have picked the operator to nominate, click on the `Nominate` button.

![NStaking-15](/img/doc-imgs/operators-staking/NStaking-15.png)

7. Choose the token amount you want to nominate to the operator. It is also possible to nominate multiple operators. Click on the `Nominate` button and approve the transaction in a pop-up window. 

![NStaking-8](/img/doc-imgs/operators-staking/NStaking-8.png)

8. Wait for the transaction to go through. It takes 100 blocks (1 epoch duration) to complete the nomination. You may need to refresh the page but if you click the button on the right top of the screen to open the wallet, you should see a lower balance.

![NStaking-4](/img/doc-imgs/operators-staking/NStaking-4.png)

![NStaking-27](/img/doc-imgs/operators-staking/NStaking-27.png)

9. You can also scroll down on the wallet panel and look at the last extrinsics section. Congratulations, you successfully became a **nominator**.

![NStaking-28](/img/doc-imgs/operators-staking/NStaking-28.png)


### Stake withdrawal using Autonomys Staking interface

Any **operator** or **nominator** can initiate withdrawal. They can withdraw the total staked amount or a portion of their stake.

:::note
- If an operator is initiating a withdrawal, then their remaining balance should be at least the minimum operator stake, otherwise the request is rejected.
- If a nominator is initiating a withdrawal, and the remaining balance is less than the operator-defined minimum nominator stake, then the total nominator stake is unlocked otherwise, only the requested amount is unlocked.
:::

1. Proceed to the staking tab on [Astral](https://astral.autonomys.xyz) and connect your wallet.

![NStaking-1](/img/doc-imgs/operators-staking/NStaking-1.png)

2. Select the wallet you would like to connect. **SubWallet**, **NovaWallet**, and **Talisman** wallets are supported.

![NStaking-2](/img/doc-imgs/operators-staking/NStaking-2.png)

3. Enter your password to give access to your wallet.

![NStaking-3](/img/doc-imgs/operators-staking/NStaking-3.png)

4. Select the account you'd like to use form the dropdown menu. You can click the button in the upper left corner to see available token balances for the selected account. 

![NStaking-4](/img/doc-imgs/operators-staking/NStaking-4.png)

![NStaking-5](/img/doc-imgs/operators-staking/NStaking-5.png)

5. Click the `My Nominations` button to view the list of your nominations.

![NStaking-18](/img/doc-imgs/operators-staking/NStaking-18.png)

6. Once you have picked the operator to withdraw your stake from, click on the `Withdraw` button.

![NStaking-22](/img/doc-imgs/operators-staking/NStaking-22.png)

7. You will get a pop-up requesting how much you want to withdraw. Use the slider to determine what percentage you want to withdraw or you can click one of the preset percentages as well as the max button to withdraw your entire stake.  

![NStaking-26](/img/doc-imgs/operators-staking/NStaking-26.png)

8. Click the `Withdrawl` button to submit and then approve the transaction.

Once the withdrawal is submitted, it's finalized after the **domain epoch** is completed. All the withdrawn funds are unlocked after the **locking period** is complete. The current **locking period** is set to 14,400 blocks, or about 24 hours. The locking period is necessary to ensure that the domain block executing the withdrawal is confirmed and not challenged by a fraud proof and to increase the economic stability of domains.

After the **locking period**, the withdrawn amount can be unlocked in the user's account.

9. Using the same operator you used to withdraw your stake from, click on the `Unlock funds` button.

![NStaking-13](/img/doc-imgs/operators-staking/NStaking-13.png)

10. Submit the transaction, your funds should be unlocked and available once the epoch is complete (up to 10 minutes).

:::note
You can also withdraw your stake using the Nominators tab. Your nomination(s) will be the only ones with an action button on the last column of the table, but with so many nominators it can be difficult to find yours.
:::
