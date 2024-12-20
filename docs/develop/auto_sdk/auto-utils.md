---
title: Auto Utils
sidebar_position: 4
description: Utility functions for the Auto SDK
slug: /develop/auto-sdk/utils
keywords:
- Developers Documentation
- DevDocs
- SDK
- Auto SDK
- Auto Utils
---

## Auto-Utils Package Documentation

### Introduction

The `@autonomys/auto-utils` package provides core utility functions for interacting with the Autonomys Network. It offers functionalities for:

- **Wallet Management**: Initialize and manage wallets using mnemonics or URIs.
- **Network Configuration**: Access and manage network and domain settings.
- **Data Storage**: Save and read data to and from local storage or the file system.
- **Cryptographic Operations**: Perform hashing and data manipulation using cryptographic functions.
- **API Activation**: Activate and manage connections to the Autonomys Network APIs.
- **Address Utilities**: Convert and decode addresses to and from standardized formats.

This package serves as the foundational layer for building applications within the Autonomys ecosystem.

### Installation

Install the package via npm or yarn:

```bash
# Using npm
npm install @autonomys/auto-utils

# Using yarn
yarn add @autonomys/auto-utils
```

### Importing the Package

Before using the functions provided by the `auto-utils` package, you need to import them into your project:

```typescript
// Import specific functions
import { activateWallet, activate, blake2b_256 } from '@autonomys/auto-utils';

// Or import everything
import * as utils from '@autonomys/auto-utils';
```

---

## Available Functions

### Account and Address Utilities

- **`address(input): string`**: Standardizes an address format.
- **`createAccountIdType(api, address): Uint8Array`**: Creates an `AccountId` object from an address.
- **`decode(input): Uint8Array`**: Decodes an address to bytes.

### API and Connection Management

- **`activate(options?): Promise<ApiPromise>`**: Connects to the Autonomys Network.
- **`activateDomain(params): Promise<ApiPromise>`**: Connects to a specific domain.
- **`createConnection(endpoint, options?): Promise<ApiPromise>`**: Creates a new API connection.
- **`disconnect(api): Promise<void>`**: Disconnects an API instance.

### Cryptographic Functions

- **`blake2b_256(data): string`**: Hashes data with BLAKE2b-256.
- **`concatenateUint8Arrays(...arrays): Uint8Array`**: Concatenates multiple `Uint8Array`s.
- **`stringToUint8Array(string): Uint8Array`**: Converts a string to `Uint8Array`.

### Data Storage

- **`read(key): Promise<any>`**: Reads data from storage.
- **`readFromFileSystem(key): Promise<any>`**: Reads from file system.
- **`readFromLocalStorage(key): Promise<any>`**: Reads from localStorage.
- **`save(key, value): Promise<void>`**: Saves data to storage.
- **`saveOnFileSystem(key, value): Promise<void>`**: Saves to file system.
- **`saveOnLocalStorage(key, value): Promise<void>`**: Saves to localStorage.

### Event Management

- **`eventName(type, event): string`**: Combines type and event to a full event name.
- **`eventsGroup`**: Groups system events by name.
- **`expectSuccessfulTxEvent`**: Default success event names array.
- **`Type`**: Enum for event types (e.g., `system`).
- **`validateEvents(events, eventsExpected?, tx, block, log?): EventsValidated`**: Checks if expected events are in transaction events.

### Network Management

- **`getNetworkDetails(options): NetworkDetails`**: Gets details of a network.
- **`getNetworkDomainDetails(options): DomainDetails`**: Gets details of a domain.
- **`getNetworkDomainRpcUrls(options): string[]`**: Gets RPC URLs for a domain.
- **`getNetworkRpcUrls(options): string[]`**: Gets RPC URLs for a network.
- **`networks`**: Array of available networks.

### Signing Utilities

- **`signMessage(signer, address, data): Promise<{ signature: string }>`**: Signs a message with a signer and address.
- **`signatureVerify`**: Verifies signatures (re-exported from `@polkadot/util-crypto`).
- **`signingKey(publicKey): string`**: Converts a public key to a hex string.

### String Utilities

- **`capitalizeFirstLetter(string): string`**: Capitalizes first letter.
- **`fixLengthEntryId(blockHeight, indexInBlock?): string`**: Creates fixed-length IDs.
- **`isAddress(address): boolean`**: Validates a Substrate address.
- **`isHex(value): boolean`**: Validates a hexadecimal string.
- **`shortString(value, initialLength?, endLength?): string`**: Truncates strings.
- **`stringify(value): string`**: Stringifies values, handling BigInt.

### Token and Value Formatting

- **`formatSpacePledged(value, decimals?): string`**: Formats space amount with units.
- **`formatTokenAmount(amount, decimals?): bigint`**: Formats token amount with decimals.
- **`parseTokenAmount(amount, decimals?): number`**: Parses token amount with decimals.

### Transaction Utilities

- **`signAndSendTx(sender, tx, options?, eventsExpected?, log?, mapErrorCodeToEnum?): Promise<TransactionSignedAndSend>`**: Signs, sends, and validates a transaction.

### Wallet Management

- **`activateWallet(options): Promise<{ api, accounts }>`**: Activates a wallet using mnemonic or URI.
- **`generateWallet(): GeneratedWallet`**: Generates a new wallet with mnemonic.
- **`getMockWallet(name, wallets): Wallet`**: Retrieves a mock wallet by name.
- **`mockWallets(options, api?): Promise<Wallet[]>`**: Creates mock wallets for testing.
- **`setupWallet(params): Wallet`**: Sets up a wallet from mnemonic or URI.

---

*Note:* All asynchronous functions return a `Promise` and should be used with `await` for proper execution flow.

---

## Usage Examples

Below are examples demonstrating how to use the functions provided by `@autonomys/auto-utils`.

### 1. Wallet Management

#### **Activate a Wallet**

Activate a wallet using a mnemonic phrase:

```typescript
import { activateWallet } from '@autonomys/auto-utils';

(async () => {
  const mnemonic = 'your mnemonic phrase here';

  const { api, accounts } = await activateWallet({
    mnemonic,
    networkId: 'gemini-3h', // Optional: specify the network ID
  });

  const account = accounts[0];
  console.log(`Connected with account address: ${account.address}`);

  // Perform actions with the account...

  // Disconnect when done
  await api.disconnect();
})();
```

#### **Activate a Wallet Using URI**

Activate a wallet using a URI:

```typescript
import { activateWallet } from '@autonomys/auto-utils';

(async () => {
  const { api, accounts } = await activateWallet({
    uri: '//Alice',
    networkId: 'localhost', // Connect to a local network
  });

  const account = accounts[0];
  console.log(`Connected with account address: ${account.address}`);

  // Disconnect when done
  await api.disconnect();
})();
```

#### **Create Mock Wallets for Testing**

Create mock wallets for testing purposes:

```typescript
import { activate, mockWallets, getMockWallet } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });

  const wallets = await mockWallets({}, api);
  const aliceWallet = getMockWallet('Alice', wallets);
  const bobWallet = getMockWallet('Bob', wallets);

  console.log(`Alice's address: ${aliceWallet.accounts[0].address}`);
  console.log(`Bob's address: ${bobWallet.accounts[0].address}`);

  // Disconnect when done
  await api.disconnect();
})();
```

### 2. Network Management

#### **Get Available Networks**

List all available networks:

```typescript
import { networks } from '@autonomys/auto-utils';

networks.forEach((network) => {
  console.log(`Network ID: ${network.id}, Name: ${network.name}`);
});
```

#### **Get Network Details**

Retrieve details of a specific network:

```typescript
import { getNetworkDetails } from '@autonomys/auto-utils';

const network = getNetworkDetails({ networkId: 'gemini-3h' });
console.log(`Network Name: ${network.name}`);
console.log(`RPC URLs: ${network.rpcUrls.join(', ')}`);
```

#### **Get Domain Details**

Retrieve details of a specific domain within a network:

```typescript
import { getNetworkDomainDetails } from '@autonomys/auto-utils';

const domain = getNetworkDomainDetails({ domainId: '1', networkId: 'gemini-3h' });
console.log(`Domain Name: ${domain.name}`);
console.log(`RPC URLs: ${domain.rpcUrls.join(', ')}`);
```

### 3. Cryptographic Functions

#### **Hash Data Using BLAKE2b-256**

Hash a string using BLAKE2b-256:

```typescript
import { blake2b_256, stringToUint8Array } from '@autonomys/auto-utils';

const data = 'Hello, Autonomys!';
const dataBytes = stringToUint8Array(data);
const hash = blake2b_256(dataBytes);

console.log(`Hash: ${hash}`); // Outputs the hash of the input string
```

#### **Convert String to Uint8Array**

Convert a string to a `Uint8Array`:

```typescript
import { stringToUint8Array } from '@autonomys/auto-utils';

const text = 'Sample text';
const byteArray = stringToUint8Array(text);

console.log(byteArray); // Outputs Uint8Array representation of the string
```

#### **Concatenate Uint8Arrays**

Concatenate two `Uint8Array` instances:

```typescript
import { stringToUint8Array, concatenateUint8Arrays } from '@autonomys/auto-utils';

const array1 = stringToUint8Array('First part ');
const array2 = stringToUint8Array('Second part');

const concatenated = concatenateUint8Arrays(array1, array2);
console.log(`Concatenated Result: ${new TextDecoder().decode(concatenated)}`);
// Outputs: "First part Second part"
```

### 4. API Activation

#### **Activate the Network API**

Connect to the Autonomys Network:

```typescript
import { activate } from '@autonomys/auto-utils';

(async () => {
  const api = await activate({ networkId: 'gemini-3h' });

  console.log('API connected');

  // Perform API calls...

  // Disconnect when done
  await api.disconnect();
})();
```

#### **Activate a Domain API**

Connect to a specific domain within the network:

```typescript
import { activateDomain } from '@autonomys/auto-utils';

(async () => {
  const api = await activateDomain({ domainId: '1', networkId: 'gemini-3h' });

  console.log('Domain API connected');

  // Perform domain-specific API calls...

  // Disconnect when done
  await api.disconnect();
})();
```

### 5. Data Storage

#### **Save and Read Data**

Save data to local storage or the file system and read it back:

```typescript
import { save, read } from '@autonomys/auto-utils';

const key = 'myData';
const value = { message: 'Hello, Autonomys!' };

// Save data
save(key, value);

// Read data
const retrievedValue = read(key);
console.log(retrievedValue); // Outputs: { message: 'Hello, Autonomys!' }
```

### 6. Address Utilities

#### **Convert Address Formats**

Convert an address to a standardized format and decode it:

```typescript
import { address, decode } from '@autonomys/auto-utils';

const originalAddress = '5GmS1wtCfR4tK5SSgnZbVT4kYw5W8NmxmijcsxCQE6oLW6A8';
const standardizedAddress = address(originalAddress);
const decodedAddress = decode(originalAddress);

console.log(`Standardized Address: ${standardizedAddress}`);
console.log('Decoded Address:', decodedAddress);
```

---

*Note:* All asynchronous functions return a `Promise` and should be used with `await` for proper execution flow.

---

## Notes

- **Asynchronous Functions**: Use `await` with all promises for proper execution flow.
- **API Disconnection**: Always disconnect the API instance after operations to free up resources.
- **Error Handling**: Wrap asynchronous calls in `try...catch` blocks to handle potential errors gracefully.
- **Security Considerations**:
- **Private Keys**: Handle private keys securely. Do not expose them in code or logs.
- **Data Persistence**: Be cautious when saving sensitive data using `save` and `read`.