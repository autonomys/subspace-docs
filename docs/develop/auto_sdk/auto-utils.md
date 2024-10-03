---
title: Auto Utils
sidebar_position: 5
description: Start Building using Auto SDK
keywords:
    - Developers Documentation
    - DevDocs
    - SDK
    - Auto SDK
    - Auto Utils
---


### Available functions

### Account Utilities

- `createAccountIdType(api: ApiPromise, address: string): Uint8Array`  
  Creates a typed `AccountId` object from an address and returns it as a `Uint8Array`. This is useful for low-level interactions where the account ID needs to be in a specific binary format.

### Event Utilities

- `Type` (Enum)  
  Enum representing event types:
  - `system`: `'system'`

- `eventName(type: Type, event: string): string`  
  Constructs a full event name by combining the event type and event name, e.g., `system.ExtrinsicSuccess`.

- `eventsGroup: { system: { [key: string]: string } }`  
  An object grouping system events by name, such as `failure`, `newAccount`, and `success`.

- `expectSuccessfulTxEvent: string[]`  
  An array containing the default success event names, typically used to validate transaction success.

### Transaction Utilities

- `signAndSendTx<TError>(sender: AddressOrPair | KeyringPair, tx: SubmittableExtrinsic<'promise', ISubmittableResult>, options?: Partial<SignerOptions>, eventsExpected?: Events, log?: boolean, mapErrorCodeToEnum?: (errorCode: string) => TError | undefined): Promise<TransactionSignedAndSend & { receipt: SubmittableResult; identifier?: string | null }>`  
  Signs and sends a transaction, waits for its inclusion in a block, and validates that expected events have occurred. It returns an object containing the transaction hash, block hash, events, receipt, and any identifier if applicable.

  - **Parameters:**
    - `sender`: The account or keyring pair sending the transaction.
    - `tx`: The transaction to be sent.
    - `options`: Optional signer options.
    - `eventsExpected`: An array of expected event names to validate against.
    - `log`: If `true`, logs transaction progress and events.
    - `mapErrorCodeToEnum`: Optional function to map error codes to custom error enums.

  - **Returns:** A promise that resolves to an object containing transaction details and receipt.

### Signing Utilities

- `signMessage(signer: Signer, address: string, data: string): Promise<{ signature: string }>`  
  Signs a message using the provided signer and address. Returns an object containing the signature.

  - **Parameters:**
    - `signer`: The signer object capable of signing raw messages.
    - `address`: The address of the account used for signing.
    - `data`: The message or data to be signed.

- `signingKey(publicKey: Uint8Array): string`  
  Converts a public key `Uint8Array` into a hexadecimal string representation.

- `signatureVerify`:  
  Re-exported from `@polkadot/util-crypto`. A function used to verify signatures against messages and public keys.

### Event Validation

- `validateEvents(events: EventRecord[], eventsExpected?: Events, tx: string, block: string, log?: boolean): EventsValidated`  
  Validates that the expected events are present in the list of events from a transaction.

  - **Parameters:**
    - `events`: The array of `EventRecord` objects emitted by the transaction.
    - `eventsExpected`: An array of expected event names to validate against.
    - `tx`: The transaction hash as a string.
    - `block`: The block hash as a string.
    - `log`: If `true`, logs detailed information about event validation.

  - **Returns:** An object containing arrays of expected events and found events.

### Utility Functions

- `isAddress(address: string): boolean`  
  Checks if the provided string is a valid Substrate address.

- `isHex(value: string): boolean`  
  Checks if the provided string is a valid hexadecimal value.

### Types and Interfaces

- **Type Enums:**

  - `Type`: Enum for event types, currently includes:
    - `system`: Represents system events.

- **Custom Types:**

  - `AddressOrPair`: Represents an address string or a keyring pair.

  - `Events`: An array of event names (`string[]`) or nested arrays for grouping.

  - `EventsValidated`: An object with two properties:
    - `expected`: Events that were expected but not found.
    - `found`: Events that were found during validation.

  - `TransactionSignedAndSend`: An object containing transaction details like `success`, `txHash`, `blockHash`, and `events`.

---

### Usage Examples

- **Signing and Sending a Transaction:**

  ```typescript
  import { signAndSendTx } from '.packages/auto-utils';

  const sender = keyringPair; // Your keyring pair or address
  const tx = api.tx.balances.transfer(receiverAddress, amount);
  const result = await signAndSendTx(sender, tx);

  if (result.success) {
    console.log('Transaction successful:', result.txHash);
  } else {
    console.error('Transaction failed');
  }
  ```

- **Signing a Message:**

  ```typescript
  import { signMessage } from '.packages/auto-utils';

  const signature = await signMessage(signer, address, 'Message to sign');
  console.log('Signature:', signature);
  ```

- **Validating Events:**

  ```typescript
  import { validateEvents } from '.packages/auto-utils';

  const eventsValidated = validateEvents(events, ['system.ExtrinsicSuccess'], txHash, blockHash);

  if (eventsValidated.expected.length === 0) {
    console.log('All expected events were found.');
  } else {
    console.warn('Some expected events were not found:', eventsValidated.expected);
  }
  ```

- **Checking an Address and Hex Value:**

  ```typescript
  import { isAddress, isHex } from '.packages/auto-utils';

  const addressValid = isAddress('5F3sa2TJAWMqDhXG6jhV4N8ko9p2Y3j5N5eZ5c9pWAFaFfLZ');
  console.log('Address is valid:', addressValid);

  const hexValid = isHex('0x123abc');
  console.log('Hex value is valid:', hexValid);
  ```

---
:::note
All asynchronous functions that return a `Promise<T>` should be awaited to retrieve the desired data. Functions interacting with the blockchain may require an active connection (`api`) to a node.
:::

:::important
Ensure that you handle any errors that may occur during asynchronous operations, especially when dealing with transactions or network requests. Always validate user input and be cautious with private keys and sensitive data.
:::