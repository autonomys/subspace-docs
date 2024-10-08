---

title: Consensus  
sidebar_position: 2  
description: Functions to interact with consensus chain
slug: /develop/auto-sdk/consensus
keywords:
- Developers Documentation
- DevDocs
- SDK
- Auto SDK
- Auto Consensus

---

## Available Functions

### Account Management

- `account(api: Api, address: string): Promise<AccountData>`: Retrieves account information including nonce and balance data.
- `balance(api: Api, address: string): Promise<BalanceData>`: Retrieves the balance data of a given address.

### Balances

- `totalIssuance(networkId?: string): Promise<BigInt>`: Retrieves the total token issuance in the network.

### Blockchain Information

- `block(api: Api): Promise<RawBlock>`: Retrieves the latest block data.
- `blockHash(api: Api): Promise<string>`: Retrieves the hash of the latest block.
- `blockNumber(api: Api): Promise<number>`: Retrieves the current block number.
- `getInfo(): Promise<Info>`: Retrieves general blockchain information.
- `networkTimestamp(api: Api): Promise<Codec>`: Retrieves the current network timestamp.

### Consensus Information

- `blockchainSize(api: Api): Promise<bigint>`: Calculates the total size of the blockchain.
- `maxPiecesInSector(api: Api): bigint`: Retrieves the maximum number of pieces allowed in a sector.
- `segmentCommitment(api: Api): Promise<[StorageKey, Codec][]>`: Retrieves the segment commitments.
- `shouldAdjustSolutionRange(api: Api): Promise<boolean>`: Determines whether the solution range should be adjusted.
- `slotProbability(api: Api): [number, number]`: Retrieves the slot probability constants.
- `solutionRangeToSectors(solutionRange: bigint, slotProbability: [bigint, bigint], piecesInSector: bigint): bigint`: Calculates the number of sectors based on the solution range, slot probability, and pieces in a sector.
- `solutionRanges(api: Api): Promise<{ current: bigint | null; next: bigint | null; votingCurrent: bigint | null; votingNext: bigint | null }>`: Retrieves the current and next solution ranges.
- `spacePledge(api: Api): Promise<bigint>`: Calculates the total space pledged by farmers.

### Domains

- `domainStakingSummary(api: Api): Promise<DomainStakingSummary[]>`: Retrieves staking summaries for domains.
- `domains(api: Api): Promise<DomainRegistry[]>`: Retrieves a list of domain registries.
- `latestConfirmedDomainBlock(api: Api): Promise<ConfirmedDomainBlock[]>`: Retrieves the latest confirmed blocks for each domain.

### Miscellaneous

- `blockchainSize(api: Api): Promise<bigint>`: Calculates the total size of the blockchain.
- `spacePledge(api: Api): Promise<bigint>`: Calculates the total space pledged in the network.

### Operators and Staking

- `deposits(api: Api, operatorId: StringNumberOrBigInt, account?: string): Promise<Deposit[]>`: Retrieves deposit information for an operator and optional account.
- `deregisterOperator(params: StakingParams): SubmittableExtrinsic`: Creates a transaction to deregister an operator.
- `nominateOperator(params: NominateOperatorParams): SubmittableExtrinsic`: Creates a transaction to nominate an operator and stake an amount.
- `operator(api: Api, operatorId: StringNumberOrBigInt): Promise<OperatorDetails>`: Retrieves detailed information about a specific operator.
- `operators(api: Api): Promise<Operator[]>`: Retrieves a list of all operators.
- `registerOperator(params: RegisterOperatorParams): SubmittableExtrinsic`: Creates a transaction to register a new operator.
- `unlockFunds(params: StakingParams): SubmittableExtrinsic`: Creates a transaction to unlock funds after operator deregistration.
- `unlockNominator(params: StakingParams): SubmittableExtrinsic`: Creates a transaction to unlock a nominator's funds.
- `withdrawStake(params: WithdrawStakeParams): SubmittableExtrinsic`: Creates a transaction to withdraw staked shares from an operator.
- `withdrawals(api: Api, operatorId: StringNumberOrBigInt, account?: string): Promise<Withdrawal[]>`: Retrieves withdrawal information for an operator and optional account.

### Transfers

- `transfer(api: ApiPromise, receiver: string, amount: Amount, allowDeath?: boolean): SubmittableExtrinsic`: Creates a transaction to transfer an amount to a receiver. Uses `transferKeepAlive` if `allowDeath` is false, otherwise uses `transferAllowDeath`.
- `transferAll(api: ApiPromise, receiver: string, keepAlive?: boolean): SubmittableExtrinsic`: Creates a transaction to transfer all tokens to a receiver. If `keepAlive` is true, keeps the sender's account alive.

### Utility Functions

- `query<T>(api: Api, methodPath: string, params?: any[]): Promise<T>`: Queries the blockchain state for a specified method with optional parameters.
- `remark(api: ApiPromise, remark: string, withEvent?: boolean): SubmittableExtrinsic`: Creates a remark transaction with or without an event.
- `rpc<T>(api: Api, methodPath: string, params?: any[]): Promise<T>`: Performs an RPC call to a specified method with optional parameters.

---

### Import Example

```typescript
import { generateAddress, getBalance, stake, transfer, getInfo } from '@autonomys/auto-consensus'
```

### Overview of Api Object

When working with the SDK functions like those in `auto-consensus`, the `api: Api` parameter is a crucial component. It's an instance of the Polkadot.js API, specifically `ApiPromise`, which serves as the gateway to interact with the blockchain node.

**Core Components**:
- **api.rpc**: Contains methods to perform remote procedure calls to the node. These include calls for querying system information, submitting extrinsics, and accessing chain data.

- **api.query**: Provides access to the blockchain's runtime storage. You can query on-chain storage items, such as balances, staking information, and module-specific data.

- **api.tx**: Allows you to create and submit extrinsics (transactions) to the blockchain. It includes methods for constructing and signing transactions for various pallets/modules.

- **api.consts**: Exposes the runtime constants defined in the blockchain's metadata. This includes information like existential deposit, block time, or any constants set by runtime modules.

- **api.types**: Contains the type definitions used by the chain, which are crucial for encoding and decoding data correctly.

- **api.events**: Provides access to the events emitted by the blockchain, which can be subscribed to for real-time updates.

This code examples might be helpful to understrand `api: API object`: 

```typescript
// Getting the current chain header (block height)
const endpoint = 'wss://rpc-0.gemini-3h.subspace.network/ws'
const api = await createConnection(endpoint)
const blockNumber = await api.rpc.chain.getHeader()
console.log('Block Number:', blockNumber.number.toNumber())
```

---

:::note
All functions that return a `SubmittableExtrinsic` can be signed and submitted to the blockchain. Functions returning `Promise<T>` should be awaited to retrieve the desired data.
:::


### Usage Example

**Task**: To get the wallet balance on a consensus chain

1. Get the RPC endpoint information for the consensus chain, which is available [here](/develop/intro#rpc-endpoints).

    - For this example, we'll use 'wss://rpc-0.gemini-3h.subspace.network/ws' as the endpoint.

2. Determine which methods are needed to accomplish the task. 

    - `createConnection` from `@autonomys/auto-utils` to establish a connection to the node.
    - `balance` from `@autonomys/auto-consensus` to retrieve the wallet balance.

3. Create a `.js` or `.ts` file and include the following code. 

    ```typescript
    // Required to get the API for the balance function
    const { createConnection } = require('@autonomys/auto-utils');
    // Required to query the RPC in order to get the balance
    const { balance } = require('@autonomys/auto-consensus');

    async function getApiInstance() {
        // Use the correct, up-to-date endpoint
        const endpoint = 'wss://rpc-0.gemini-3h.subspace.network/ws';
        const api = await createConnection(endpoint);
        return api;
    }

    async function getWalletBalance() {
        try {
            // Initialize the API instance
            const api = await getApiInstance();

            // Replace with your wallet address
            const walletAddress = 'st7woZs4wA6F9ssvdg3DzZi6v3s9MB7DXE3LS1fzTQA16nJSP';

            // Call the balance function with the API and wallet address
            const walletBalance = await balance(api, walletAddress);

            console.log('Wallet Balance:', walletBalance);

            // Disconnect when done
            await api.disconnect();
        } catch (error) {
            console.error('Error fetching wallet balance:', error);
        }
    }

    getWalletBalance();

    ```

    :::note
    Replace 'st7woZs4wA6F9ssvdg3DzZi6v3s9MB7DXE3LS1fzTQA16nJSP' with your actual wallet address.

    The createConnection function initializes the API instance connected to the specified endpoint.
    :::

4. Save the file and run it using the following command `node ./test-function.js`. You should see the wallet balance printed in the console.

**Additional Tips**:

    - **Async/Await**: Both createConnection and balance are **asynchronous functions** returning **promises**. Using `await` ensures that the code waits for these operations to complete before proceeding.

    - **API Disconnection**: It's good practice to disconnect from the API when you're done to free up resources.

    - **Logging**: The script logs the wallet balance to the console. You can modify this to format the output or handle it as needed for your application.
