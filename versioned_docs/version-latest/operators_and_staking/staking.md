---
title: Staking guide
sidebar_position: 2
description: Staking guide
keywords:
- Staking guide
- Staking
---

### Select an operator to nominate 

:::note
Three important factors to pay attention to are `minimumNominatorStake`, `nominationTax`, and `status`.
:::

1. Visit PolkadotJS **[Network Explorer](https://polkadot.js.org/apps/#/explorer)**.
2. Go to `Developer` -> `Chain state`.

 ![Staking-16](/img/doc-imgs/operators-staking/Staking-16.png)
3. Select `domains` under `selected state query` and choose `operators`, exclude `option` and click on `+` to run the query.
4. Browse the list of available operators, make sure the status is `Registered` and that `minimumNominatorStake` is lower than your staking amount. 

 ![Staking-17](/img/doc-imgs/operators-staking/Staking-17.png)

:::note
Number 17 on the screenshot above corresponds to `operatorID`.
:::

### Operator Nomination using [Polkadot.js](https://polkadot.js.org/)

Any account can nominate any existing **operator** with at least a minimum nominator stake set by the **operator**. 

:::info
The only staking mechanism available to non-operators is nominating an operator.
:::

1. Make sure to select the correct network at the top-left corner. 
2. Select the account you want to use in `using the selected account`.
3. Select `domains` under `submit the following extrinsic` and choose `nominateOperator(operatorID, amount)` in the dropdown.
4. Set an `operatorID` - in the example, it's set to **1**, 18 zeros are added since the field is of `u128` type.
5. Enter the desired amount in the `amount` field for staking.
![Staking-18](/img/doc-imgs/operators-staking/Staking-18.png)
6. Submit the signed transaction. 

Once **nomination** is finalized when the **domain epoch** is complete, **nominator** will start receiving rewards.

Any **nominator** can add more stake by using the same functionality.


### To check if your **Nomination** worked succesfully. 

There are two ways to check your Nomination: 

1. You can use PolkadotJS **[Network Explorer](https://polkadot.js.org/apps/#/explorer)**.

 ![Staking-7](/img/doc-imgs/operators-staking/Staking-7.png)
2. Browse the **recent events** and you should see **domains.OperatorNominated** event.

 ![Staking-19](/img/doc-imgs/operators-staking/Staking-19.png)
3. Click on the dropdown arrow to view the **domainID** and **operatorID**.

---

Alternatively, you can use [Subscan](https://subspace.subscan.io/) which provides a slightly better UI. 
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

7. Inspect and ensure that `nominatorID` matches your `id`. 

### Stake withdrawal using [Polkadot.js](https://polkadot.js.org/)

Any **operator** or **nominator** can initiate withdrawal. They can withdraw the total staked amount or a portion of their stake.

- If an operator is initiating a withdrawal, then their remaining balance should be at least minimum operator stake, else request is rejected.
- If a nominator is initiating a withdrawal, and the remaining balance is less than the operator-defined minimum nominator stake, then the total nominator stake is unlocked otherwise, only the requested amount is unlocked.


1. Select the account you want to use in `using the selected account`.
2. Select `domains` under `submit the following extrinsic` and choose `withdrawStake(operatorID, withdraw)` in the dropdown.
3. Choose an operator by selecting an `operatorID` - in the example, it's set to `17`.
4. Choose the withdrawal amount in the `withdraw` field - you can specify to withdraw `all` or `some` staking amount. 

:::note
Example of withdrawal of 1 TSSC stake amount from nominating an operator `17`.
:::

![Staking-23](/img/doc-imgs/operators-staking/Staking-23.png)


Once the withdrawal is submitted, it's finalized after **domain epoch** is completed. All the withdrawn funds are unlocked after the **unlocking period** is complete.
