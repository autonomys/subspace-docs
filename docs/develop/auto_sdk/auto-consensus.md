--- 

title: Consensus  
sidebar_position: 2  
description: Functions to interact with the consensus chain  
slug: /develop/auto-sdk/consensus  
keywords:
- Developers Documentation
- DevDocs
- SDK
- Auto SDK
- Auto Consensus

---

## Auto-Consensus Package Documentation

### Introduction

The `@autonomys/auto-consensus` package provides functions for interacting with the Consensus Layer of the Autonomys Network. It allows developers to perform actions such as account management, balance inquiries, transfers, staking operations, and more. This package works hand-in-hand with `@autonomys/auto-utils` to simplify blockchain interactions.

### Installation

Install the package via npm or yarn:

```bash
# Using npm
npm install @autonomys/auto-consensus

# Using yarn
yarn add @autonomys/auto-consensus
```

### Importing the Package

Before using the functions provided by the `auto-consensus` package, you need to import them into your project:

```typescript
// Import specific functions
import { balance, transfer, account } from '@autonomys/auto-consensus';

// Or import everything
import * as consensus from '@autonomys/auto-consensus';
```

### Overview of the `api` Object

Many functions in the `auto-consensus` package require an `api` object as a parameter. This `api` object is an instance of `ApiPromise` from the Polkadot.js API library, which serves as the gateway to interact with the blockchain node.

**Core Components of `api`**:

- **api.rpc**: Methods to perform remote procedure calls to the node.
- **api.query**: Access to the blockchain's runtime storage.
- **api.tx**: Create and submit extrinsics (transactions) to the blockchain.
- **api.consts**: Runtime constants defined in the blockchain's metadata.
- **api.events**: Access to events emitted by the blockchain.
- **api.types**: Type definitions used by the chain.

**Example**:

```typescript
import { createConnection } from '@autonomys/auto-utils';

async function getApiInstance() {
  const endpoint = 'wss://rpc-0.gemini-3h.subspace.network/ws';
  const api = await createConnection(endpoint);
  return api;
}
```

---

## Available Functions

### Account Management

- **`account(api, address): Promise<AccountData>`**: Retrieves account's nonce and balance data.
- **`balance(api, address): Promise<BalanceData>`**: Retrieves an account's balance details.

### Balances

- **`totalIssuance(networkId?): Promise<BigInt>`**: Gets total token issuance in the network.

### Blockchain Information

- **`block(api): Promise<RawBlock>`**: Retrieves the latest block data.
- **`blockHash(api): Promise<string>`**: Retrieves the latest block hash.
- **`blockNumber(api): Promise<number>`**: Retrieves the current block number.
- **`networkTimestamp(api): Promise<bigint>`**: Retrieves the network timestamp.

### Consensus Information

- **`blockchainSize(api): Promise<bigint>`**: Calculates the blockchain's total size.
- **`spacePledge(api): Promise<bigint>`**: Calculates total space pledged by farmers.

### Domains

- **`domainStakingSummary(api): Promise<DomainStakingSummary[]>`**: Retrieves domain staking summaries.
- **`domains(api): Promise<DomainRegistry[]>`**: Retrieves domain registries.
- **`latestConfirmedDomainBlock(api): Promise<ConfirmedDomainBlock[]>`**: Retrieves latest confirmed blocks per domain.

### Operators and Staking

- **`nominateOperator(params): SubmittableExtrinsic`**: Creates a transaction to nominate an operator.
- **`operator(api, operatorId): Promise<OperatorDetails>`**: Retrieves details of a specific operator.
- **`registerOperator(params): SubmittableExtrinsic`**: Creates a transaction to register a new operator.

### Transfers

- **`transfer(api, receiver, amount, allowDeath?): SubmittableExtrinsic`**: Creates a transaction to transfer funds.
- **`transferAll(api, receiver, keepAlive?): SubmittableExtrinsic`**: Creates a transaction to transfer all tokens.

### Utility Functions

- **`query<T>(api, methodPath, params?): Promise<T>`**: Queries blockchain state for a method.
- **`remark(api, remark, withEvent?): SubmittableExtrinsic`**: Creates a remark transaction.
- **`rpc<T>(api, methodPath, params?): Promise<T>`**: Performs an RPC call.

---

*Note:* All asynchronous functions return a `Promise` and should be used with `await` for proper execution flow.

---

## Usage Examples

Below are examples demonstrating how to use the functions provided by `@autonomys/auto-consensus`.

### 1. Account Management

#### Retrieve Account Information

Get detailed account information, including the nonce and balance data.

```typescript
import { account } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });
  const accountData = await account(api, 'your_address');

  console.log(`Nonce: ${accountData.nonce}`);
  console.log(`Free Balance: ${accountData.data.free}`);
  console.log(`Reserved Balance: ${accountData.data.reserved}`);

  await api.disconnect();
})();
```

#### Activate a Wallet and Check Balance

```typescript
import { activateWallet } from '@autonomys/auto-utils';
import { balance } from '@autonomys/auto-consensus';

(async () => {
  // Activate a wallet using a mnemonic phrase
  const { api, accounts } = await activateWallet({
    mnemonic: 'your mnemonic phrase here', // Replace with your mnemonic
    networkId: 'gemini-3h', // Optional: specify the network ID
  });

  const account = accounts[0];
  console.log(`Connected with account address: ${account.address}`);

  // Check the account balance
  const accountBalance = await balance(api, account.address);
  console.log(`Account balance: ${accountBalance.free}`);

  // Disconnect when done
  await api.disconnect();
})();
```

### 2. Balance Operations

#### Retrieve Account Balance

Get the free balance of an account.

```typescript
import { balance } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });
  const accountBalance = await balance(api, 'your_address');

  console.log(`Free Balance: ${accountBalance.free}`);

  await api.disconnect();
})();
```

#### Get Total Issuance

Retrieve the total token issuance in the network.

```typescript
import { totalIssuance } from '@autonomys/auto-consensus';

(async () => {
  const total = await totalIssuance('gemini-3h');

  console.log(`Total Issuance: ${total.toString()}`);
})();
```

### 3. Transfers

#### Transfer Funds Between Accounts

```typescript
import { activateWallet } from '@autonomys/auto-utils';
import { transfer } from '@autonomys/auto-consensus';

(async () => {
  // Activate sender's wallet
  const senderWallet = await activateWallet({
    mnemonic: 'sender mnemonic phrase', // Replace with sender's mnemonic
  });
  const sender = senderWallet.accounts[0];

  // Activate receiver's wallet
  const receiverWallet = await activateWallet({
    mnemonic: 'receiver mnemonic phrase', // Replace with receiver's mnemonic
  });
  const receiver = receiverWallet.accounts[0];

  // Transfer 1 ATC from sender to receiver
  const amount = 1; // Amount in ATC
  const transferTx = await transfer(senderWallet.api, receiver.address, amount);

  // Sign and send the transaction
  await transferTx.signAndSend(sender, ({ status, txHash, events }) => {
    if (status.isInBlock) {
      console.log(`Transaction included at blockHash ${status.asInBlock}`);
      console.log(`Transaction hash: ${txHash}`);
    } else if (status.isFinalized) {
      console.log(`Transaction finalized at blockHash ${status.asFinalized}`);
    }
  });

  // Disconnect when done
  await senderWallet.api.disconnect();
  await receiverWallet.api.disconnect();
})();
```

#### Transfer Tokens

Transfer tokens from one account to another.

```typescript
import { transfer } from '@autonomys/auto-consensus';
import { activateWallet, signAndSendTx, disconnect } from '@autonomys/auto-utils';

(async () => {
  const { api, accounts } = await activateWallet({
    networkId: 'gemini-3h',
    mnemonic: 'your_mnemonic',
  });

  const sender = accounts[0];
  const recipientAddress = 'recipient_address';
  const amount = '1000000000000'; // Amount in smallest units (e.g., wei)

  const tx = await transfer(api, recipientAddress, amount);

  // Sign and send the transaction
  await signAndSendTx(sender, tx);

  console.log(`Transferred ${amount} tokens to ${recipientAddress}`);

  await disconnect(api);
})();
```

### 4. Staking Operations

#### Register an Operator

Register a new operator for staking.

```typescript
import { registerOperator } from '@autonomys/auto-consensus';
import { activateWallet, signAndSendTx } from '@autonomys

/auto-utils';

(async () => {
  const { api } = await activateWallet({
    networkId: 'gemini-3h',
    mnemonic: 'sender_mnemonic',
  });

  // Sender's account (who will register the operator)
  const { accounts: senderAccounts } = await activateWallet({
    networkId: 'gemini-3h',
    mnemonic: 'sender_mnemonic',
  });
  const sender = senderAccounts[0];

  // Operator's account
  const { accounts: operatorAccounts } = await activateWallet({
    networkId: 'gemini-3h',
    mnemonic: 'operator_mnemonic',
  });
  const operatorAccount = operatorAccounts[0];

  const tx = await registerOperator({
    api,
    senderAddress: sender.address,
    Operator: operatorAccount,
    domainId: '0', // Domain ID where the operator will be registered
    amountToStake: '1000000000000000000', // Amount in smallest units
    minimumNominatorStake: '10000000000000000',
    nominationTax: '5', // Percentage as a string (e.g., '5' for 5%)
  });

  // Sign and send the transaction
  await signAndSendTx(sender, tx);

  console.log('Operator registered successfully');
})();
```

#### Nominate an Operator

Nominate an existing operator by staking tokens.

```typescript
import { nominateOperator } from '@autonomys/auto-consensus';
import { activateWallet, signAndSendTx } from '@autonomys/auto-utils';

(async () => {
  const { api, accounts } = await activateWallet({
    networkId: 'gemini-3h',
    mnemonic: 'nominator_mnemonic',
  });
  const nominator = accounts[0];

  const operatorId = '1'; // The ID of the operator to nominate
  const amountToStake = '5000000000000000000'; // Amount in smallest units

  const tx = await nominateOperator({
    api,
    operatorId,
    amountToStake,
  });

  // Sign and send the transaction
  await signAndSendTx(nominator, tx);

  console.log(`Nominated operator ${operatorId} with ${amountToStake} stake`);
})();
```

### 5. Blockchain Information

#### Get Block and Network Information

Retrieve the current block number, block hash, and network timestamp.

```typescript
import { blockNumber, blockHash, networkTimestamp } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });

  const currentBlockNumber = await blockNumber(api);
  const currentBlockHash = await blockHash(api);
  const currentTimestamp = await networkTimestamp(api);

  console.log(`Current Block Number: ${currentBlockNumber}`);
  console.log(`Current Block Hash: ${currentBlockHash}`);
  console.log(`Network Timestamp: ${currentTimestamp}`);

  await api.disconnect();
})();
```

### 6. Domain Interactions

#### Retrieve Domains Information

Get the list of domains registered on the network.

```typescript
import { domains } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });
  const domainList = await domains(api);

  domainList.forEach((domain) => {
    console.log(`Domain ID: ${domain.id}`);
    console.log(`Owner Address: ${domain.owner}`);
    console.log(`Creation Block: ${domain.creationBlock}`);
    // ...other domain properties
  });

  await api.disconnect();
})();
```

#### Get Domain Staking Summary

Retrieve staking summaries for all domains.

```typescript
import { domainStakingSummary } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });
  const stakingSummaries = await domainStakingSummary(api);

  stakingSummaries.forEach((summary) => {
    console.log(`Domain ID: ${summary.domainId}`);
    console.log(`Total Stake: ${summary.totalStake}`);
    // ...other summary properties
  });

  await api.disconnect();
})();
```

#### Get Latest Confirmed Domain Blocks

Fetch the latest confirmed blocks for each domain.

```typescript
import { latestConfirmedDomainBlock } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });
  const confirmedBlocks = await latestConfirmedDomainBlock(api);

  confirmedBlocks.forEach((blockInfo) => {
    console.log(`Domain ID: ${blockInfo.id}`);
    console.log(`Block Number: ${blockInfo.number}`);
    console.log(`Block Hash: ${blockInfo.hash}`);
    // ...other block properties
  });

  await api.disconnect();
})();
```

---

## Notes

- **Asynchronous Functions**: Many functions return promises and should be used with `await` to ensure proper execution flow.

- **API Disconnection**: Always disconnect the API instance after your operations are complete to free up resources.

- **Error Handling**: Wrap your asynchronous calls in `try...catch` blocks to handle potential errors gracefully.

