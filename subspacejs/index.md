# @subspace/subspace

This JavaScript library provides a simple API to submit and retrieve user data to the [Subspace network](https://subspace.network/). The project is in active development with a [live test network](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer) designed to provide scalable and distributed archival storage.

# Storage API.

The Storage API exposes a Subspace node feature called [pallet-object-store](https://github.com/subspace/subspace/tree/main/crates/pallet-object-store) that implements RPC methods to store an **Object** from user-provided data. The user can send a simple text or even a file; the `pallet-object-store` receives an **Object** to store and generate an **objectId**.

- `put`: Receive a signed transaction containing an **Object** to store. It emit a `DataSubmitted Event` with an **objectId** to get the **Object** from the network.

- `findObject`: Receives an **objectId** to find the related **Object** stored, if it exists this method will return the **Object** data.

To expose these methods, this library implements two main classes:

- **Identity**: Class to load a **keyPair** from different sources. An instance of this class is required to create a **SubspaceClient**.

  - `fromWeb3`: Load **keyPair** from `web3Accounts` using `@polkadot/extension-dapp`.

  - `fromUri`: Load **keyPair** from a secret URI, Example: `//Alice///password` or a `mnemonic phrase`.

- **SubspaceClient**: Class that loads an **Identity** instance and creates providers to interact with the network.

  - `connect`: Create an `ApiPromise` and `WsProvider`, returning a **SubspaceClient** instance ready to call:

    - `putObject`: Receives an **Object** as Uint8Array, it create and submit a signed `put` transaction and return an **objectId**.

    - `getObject`: Receives an **objectId** calling `findObject` to return the **Object** as Uint8Array.

> Please, note that object will be retrievable after it is archived on the blockchain, it won't be available right away. Archiving takes 100-120 blocks to complete. Caching mechanism for faster retrievability will be introduced soon

# Run this project.

Clone this repository:

- `git clone https://github.com/subspace/subspace.js.git`

Install dependencies

- `npm ci`

Build the library.

- `npm run build`

## Usage

```javascript
// Import the library.
import { SubspaceClient, Identity } from "@subspace/subspace";

// Generate an Identity from node.js
const identity = await Identity.fromUri(mnemonic);
// Generate an Identity from broser using web3Account (injected by extension)
const identity = await Identity.fromWeb3();

// Generate a SubspaceClient and connect to node and farmer rpc endpoints.
const subspaceClient = await SubspaceClient.connect(
  identity,
  NODE_WS_PROVIDER,
  FARMER_WS_PROVIDER
);

// Put the file as (Uint8Array) in to the objectStore and return the objectId
const objectId: string = await subspaceClient.putObject(objectData);

// Using the objectId get the file as (Uint8Array) from the objectStore.
const object: Uint8Array = await subspaceClient.getObject(objectId);
```

## Run the examples.

- Check the examples folder for node.js and browser.

  - [node.js](./examples/ts-node).
  - [dapp](./examples/dapp).
  - [html](./examples/html).

## Running a local network

You can check the [Subspace repository](https://github.com/subspace/subspace) to learn how configure and run your local network.
