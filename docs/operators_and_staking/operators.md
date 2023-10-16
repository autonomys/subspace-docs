---
title: Operators guide
sidebar_position: 2
description: Operators guide
keywords:
- Operator
- Guide
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';


:::note
Currently, the domain chain does not support syncing from other operator nodes; it needs to be deterministically derived from the consensus chain block by block.
:::

### Check the list of the available domains:
In order to participate in block production, operator needs to register on a specific domain. 

:::note
Any account with the **minimum operator stake** can become an operator. 
:::

To check the list of available domains: 
1. Proceed to [PolkadotJS](https://polkadot.js.org/apps/#/explorer)
2. Make sure to select the correct network at the top-left corner.
3. Go to Developer -> Chain state
 ![Staking-1](/img/doc-imgs/operators-staking/Staking-1.png)
4. Select `domains` under `selected state query` and choose `domainRegistry`
5. Exclude `option`
6. Click on `+` to query the chain state.
 ![Staking-2](/img/doc-imgs/operators-staking/Staking-2.png)
7. Review the list of available domains
 ![Staking-3](/img/doc-imgs/operators-staking/Staking-3.png)
:::tip
In the example above the number 3 corresponds to the domainId. 
:::

### Register an operator on domain

#### Create operator key:
An operator needs a key pair to participate in bundle production.
You can create a key using the following command:

```bash
target/production/subspace-node key generate --scheme sr25519
```

 ![Staking-4](/img/doc-imgs/operators-staking/Staking-4.png)

Back up the key. Take the `public key (hex)` of the Keypair. The public key is part of the operator config we will be using later on [PolkadotJS portal](https://polkadot.js.org/apps/#/explorer).

#### Insert key to Keystore:
The key generated above needs to be added to the Keystore so that the operator node can use it to participate in bundle production.

To insert the key, use the following command:

```bash
target/production/subspace-node key insert \
--suri "<Secret phrase>" --key-type oper --scheme sr25519 --keystore-path /tmp/keystore
```

The command above assumes `/tmp/keystore` as the keystore location.
`suri` is the secret phrase of the operator key.

To register an operator on the domain: 
1. Proceed to [PolkadotJS](https://polkadot.js.org/apps/#/explorer)
2. Make sure to select the correct network at the top-left corner. 
3. Select the account you want to use in `using the selected account`.
4. Select `domains` under `submit the following extrinsic` and choose `registerOperator(domainID, amount, config)` in the dropdown.
5. Enter the `domainId` to be registered on. 
6. Enter the desired staking amount in the `amount` field.
7. Put your public signing key at the `signingKey` field. 


:::note
In the example below, 1 TSSC is selected for staking. 18 zeros are added because of the `u128` type, so make sure to put 1000000000000000000 instead. 
:::


![Staking-5](/img/doc-imgs/operators-staking/Staking-5.png)

:::info
Make sure to use the signing key generated on the previous **[Create operator key](#create-operator-key)** step 
:::

8. Enter `minimumNominatorStake` - in the example, it's set to `1 TSSC`.
9. Enter `nominatorTax` - in the example, it's set to `5%`.
10. Sign and submit the transaction to register an operator.

![Staking-6](/img/doc-imgs/operators-staking/Staking-6.png)

:::info
Make sure to select **Submit Transaction** since the transaction needs to be signed.
:::

Once registered, the operator has to wait until the domain epoch is complete to start operating for the **domain**, participate in **bundle production**, and **receive rewards**.

Once the domain epoch is finished, the operator can produce bundles from the new epoch.

Any **operator** can add more stake by using the same functionality.

### Checking your operatorId

There are two ways to check your operatorId: 

1. You can use PolkadotJS **[Network Explorer](https://polkadot.js.org/apps/#/explorer)**.

 ![Staking-7](/img/doc-imgs/operators-staking/Staking-7.png)
2. Browse the **recent events** and you should see **domains.OperatorRegistered** event.

 ![Staking-8](/img/doc-imgs/operators-staking/Staking-8.png)
3. Click on the dropdown arrow to view the **domainId** and **operatorId**.

---

Alternatively, you can use [Subscan](https://subspace.subscan.io/) which is a little easier to navigate for this job. 
1. Navigate to **[Subspace Subscan](https://subspace.subscan.io/)** portal.
2. Click on `Blockchain` -> `Extrinsics`.

  ![Staking-9](/img/doc-imgs/operators-staking/Staking-9.png)

3. Scroll to the bottom of the page to view all recent events, search for `register_operator` event.

 ![Staking-10](/img/doc-imgs/operators-staking/Staking-10.png)

4. Click on `Extrinsic ID` for the desired event.

5. Scroll to `Parameters` and ensure that `signing_key` corresponds to your signing key.

 ![Staking-11](/img/doc-imgs/operators-staking/Staking-11.png)

6. Scroll to `Events` and click on dropdown arrow for `domains(OperatorRegistered)`.

  ![Staking-12](/img/doc-imgs/operators-staking/Staking-12.png)

7. Inspect and remember your `domain_id`. 


### Start the domain operator node


The domain operator node is running with an embedded consensus node, thus you need to specify the args for both the consensus node and the domain operator node:

```bash
subspace-node [consensus-chain-args] -- [domain-args]
```


Example:
Start a node as operator on `gemini-3f` chain:

<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>

```powershell
target/production/subspace-node `
--chain gemini-3f `
--rpc-external `
--node-key 0xxeea96fe9cfbd6c1d7e9657e36447a158c0c80432b2bc8869a1c6706707843f `
-- `
--domain-id 3 `
--chain gemini-3f `
--operator `
--keystore-path /tmp/keystore `
--rpc-external
```

</TabItem>

<TabItem value="macos" label="🍎 macOS">

```bash
target/production/subspace-node \
--chain gemini-3f \
--rpc-external \
--node-key 0xxeea96fe9cfbd6c1d7e9657e36447a158c0c80432b2bc8869a1c6706707843f \
-- \
--domain-id 3 \
--chain gemini-3f \
--operator \
--keystore-path /tmp/keystore \
--rpc-external
```

</TabItem>

<TabItem value="linux" label="🐧 Ubuntu">

```bash
target/production/subspace-node \
--chain gemini-3f \
--rpc-external \
--node-key 0xxeea96fe9cfbd6c1d7e9657e36447a158c0c80432b2bc8869a1c6706707843f \
-- \
--domain-id 3 \
--chain gemini-3f \
--operator \
--keystore-path /tmp/keystore \
--rpc-external
```

</TabItem>
</Tabs>

:::note
Make sure to use the public key (hex) that we generated earlier in the [Create Operator Key](#create-operator-key) section
:::

You should see the node start sucesfully and begin syncing

 ![Staking-13](/img/doc-imgs/operators-staking/Staking-13.png)



To view the stored node information navigate to: 

<Tabs groupId="OS">
<TabItem value="windows" label="🖼️ Windows" default>
FOLDERID_LocalAppData e.g. 

`C:\Users\Alice\AppData\Local`

</TabItem>


<TabItem value="macos" label="🍎 macOS">
$HOME/Library/Application Support e.g.

`/Users/Alice/Library/Application Support`

</TabItem>


<TabItem value="linux" label="🐧 Ubuntu">
$XDG_DATA_HOME or /home/alice/.local/share e.g.

`$HOME/.local/share`

</TabItem>
</Tabs>

### Embedded Docs


The following command can be used to explore all parameters and subcommands:


```bash
target/production/subspace-node --help
```


### Build from source

If you prefer to build from the source rather using existing builds, the domain operator node is embedded within the `subspace-node` binary, please refer to [Subspace node](https://github.com/subspace/subspace/blob/main/crates/subspace-node/README.md) for how to build from source.


### Operator deregistration

To deregister an operator on the domain and have your tokens released:

:::info
Only account who registered an operator can deregister it. Make sure to use the same wallet / account to sign the transaction for deregistration. 
:::

1. Proceed to [PolkadotJS](https://polkadot.js.org/apps/#/explorer)
2. Make sure to select the correct network at the top-left corner. 
3. Select the account you want to use in `using the selected account`.
4. Select `domains` under `submit the following extrinsic` and choose `deregisterOperator(operatorId)` in the dropdown.

 ![Staking-14](/img/doc-imgs/operators-staking/Staking-14.png)

5. Your tokens and tokens of operator `Nominators` will be released after the `lockingPeriod`.
6. To check the locking period you can go to `Developer` -> `Chain state` -> `Constants`.
7. Select `domains` under `selected contant query` and choose `stakeWithdrawalLockingPeriod`. 
8. Click on `+` to run the query. 

![Staking-15](/img/doc-imgs/operators-staking/Staking-15.png)

:::info
Number 256 above corresponds to the number of the domain blocks, and not the consensus chain blocks. 
:::


### Operator Stake Withdrawal

**Operator** stake withdrawal works similarly to **Nominator** stake withdrawal. Refer to [this section](./staking.md#stake-withdrawal-using-polkadotjs) to withdraw your stake. 


### Switch domains

Any **Operator** can switch domain they operate on anytime. 
In order to switch domain:

1. Proceed to [PolkadotJS](https://polkadot.js.org/apps/#/explorer)
2. Make sure to select the correct network at the top-left corner. 
3. Select the account you want to use in `using the selected account`.
4. Select `domains` under `submit the following extrinsic` and choose `switchDomain(operatorId, newDomainId)` in the dropdown.
5. Add your `operatorId` and `newDomainId` to the corresponding fields. 

![Staking-24](/img/doc-imgs/operators-staking/Staking-24.png)

:::note
Only the account who registered **Operator** can swith the domain. 
:::

:::note
Stake of your **Nominators** won't be released, but will be moved to the new domain as well. 
:::

