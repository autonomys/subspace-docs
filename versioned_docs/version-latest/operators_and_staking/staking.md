---
title: Staking guide
sidebar_position: 2
description: Staking guide
keywords:
- Staking guide
- Staking
---


### Operator registration using [Polkadot.js](https://polkadot.js.org/)


Any account with **minimum operator stake** can become an operator. 

1. Make sure to select the correct network at the top-left corner. 
2. Select the account you want to use in `using the selected account`.
3. Select `domains` under `submit the following extrinsic` and choose `registerOperator(domainID, amount, config)` in the dropdown.
4. Enter the desired staking amount in the `amount` field.

:::note
In the example below, 1000 SSC is selected for staking. 18 zeros are added because of the `u128` type
:::


5. Enter `MinimumOperatorStake` - in the example, it's set to `1000 SSC`.
6. Enter `nominatorTax` - in the example, it's set to `5%`.


![Registration](/img/doc-imgs/operators-staking/Staking-1.png)




Once registered, the operator has to wait until the domain epoch is complete to start operating for the **Domain**, participate in **Bundle submission**, and **receive rewards**.


### Operator Nomination using [Polkadot.js](https://polkadot.js.org/)


Any account can nominate any existing **Operators** with at least a minimum nominator stake set by the **Operator**. 

1. Make sure to select the correct network at the top-left corner. 
2. Select the account you want to use in `using the selected account`.
3. Select `domains` under `submit the following extrinsic` and choose `nominateOperator(operatorID, amount)` in the dropdown.
4. Set an `operatorID` - in the example, it's set to `1`.
5. Enter the desired amount in the `amount` field to be associated with the nomination.
![Nomination](/img/doc-imgs/operators-staking/Staking-2.png)


Once **nomination** is finalized when the **Domain epoch** is complete, **Nominator** will start receiving rewards.


Any **Operator** or **Nominator** can add more stake by using the same functionality.


### Stake withdrawal using [Polkadot.js](https://polkadot.js.org/)


Any **Operator** or **Nominator** can initiate withdrawal. They can withdraw the total staked amount or a portion of their stake.


- If an Operator is initiating a withdrawal, then their remaining balance should be at least minimum operator stake, else request is rejected.
- If a nominator is initiating a withdrawal, and the remaining balance is less than the operator-defined minimum nominator stake, then the total nominator stake is unlocked else only the requested amount is unlocked.


1. Select the account you want to use in `using the selected account`.
2. Select `domains` under `submit the following extrinsic` and choose `withdrawStake(operatorID, withdraw)` in the dropdown.
3. Choose an operator by selecting an `operatorID` - in the example, it's set to `1`.
4. Choose the withdrawal amount in the `withdraw` field.


:::note
Example of withdrawal of total stake amount from Operator `1`.
:::


![Withdrawal total amount](/img/doc-imgs/operators-staking/Staking-3.png)


5. You can also specify a custom amount to be withdrawn, by selecting `some` and specifying the withdrawal amount in the `some` field.


![Withdrawal custom amount](/img/doc-imgs/operators-staking/Staking-4.png)


Once the withdrawal is submitted, it's finalized after **Domain epoch** is completed. All the withdrawn funds are unlocked after the **Unlocking period** is complete.


### Operator De-registration


An operator can stop **Operating** for a **Domain**. The de-registration is finalized once the **Domain epoch** is complete. Once de-registered, all the nominators stake under that operator is unlocked after the Unlocking period is complete.


1. Select the account you want to use in `using the selected account`.
2. Select `domains` under `submit the following extrinsic` and choose `deregisterOperator(operatorID)` in the dropdown.
3. Provide an `operatorID` you want to be de-registered in the `operatorid` field.


![De-registration](/img/doc-imgs/operators-staking/Staking-5.png)
