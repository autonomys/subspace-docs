---
title: Auto Consensus
sidebar_position: 2
description: Functions to interact with consensus chain
keywords:
    - Developers Documentation
    - DevDocs
    - SDK
    - Auto SDK
    - Auto Consensus
---


## Available functions

### Account Management

- `account(api: Api, address: string): Promise<AccountData>`: Retrieves account information including nonce and balance data.
- `balance(api: Api, address: string): Promise<BalanceData>`: Retrieves the balance data of a given address.

### Balances

- `totalIssuance(networkId?: string): Promise<BigInt>`: Retrieves the total token issuance in the network.

### Domains

- `domains(api: Api): Promise<DomainRegistry[]>`: Retrieves a list of domain registries.
- `domainStakingSummary(api: Api): Promise<DomainStakingSummary[]>`: Retrieves staking summaries for domains.
- `latestConfirmedDomainBlock(api: Api): Promise<ConfirmedDomainBlock[]>`: Retrieves the latest confirmed blocks for each domain.

### Blockchain Information

- `block(api: Api): Promise<RawBlock>`: Retrieves the latest block data.
- `blockNumber(api: Api): Promise<number>`: Retrieves the current block number.
- `blockHash(api: Api): Promise<string>`: Retrieves the hash of the latest block.
- `networkTimestamp(api: Api): Promise<Codec>`: Retrieves the current network timestamp.
- `getInfo(): Promise<Info>`: Retrieves general blockchain information.

### Consensus Information

- `solutionRanges(api: Api): Promise<{ current: bigint | null; next: bigint | null; votingCurrent: bigint | null; votingNext: bigint | null }>`: Retrieves the current and next solution ranges.
- `shouldAdjustSolutionRange(api: Api): Promise<boolean>`: Determines whether the solution range should be adjusted.
- `segmentCommitment(api: Api): Promise<[StorageKey, Codec][]>`: Retrieves the segment commitments.
- `slotProbability(api: Api): [number, number]`: Retrieves the slot probability constants.
- `maxPiecesInSector(api: Api): bigint`: Retrieves the maximum number of pieces allowed in a sector.
- `solutionRangeToSectors(solutionRange: bigint, slotProbability: [bigint, bigint], piecesInSector: bigint): bigint`: Calculates the number of sectors based on the solution range, slot probability, and pieces in a sector.
- `spacePledge(api: Api): Promise<bigint>`: Calculates the total space pledged by farmers.
- `blockchainSize(api: Api): Promise<bigint>`: Calculates the total size of the blockchain.

### Operators and Staking

- `operators(api: Api): Promise<Operator[]>`: Retrieves a list of all operators.
- `operator(api: Api, operatorId: StringNumberOrBigInt): Promise<OperatorDetails>`: Retrieves detailed information about a specific operator.
- `registerOperator(params: RegisterOperatorParams): SubmittableExtrinsic`: Creates a transaction to register a new operator.
- `nominateOperator(params: NominateOperatorParams): SubmittableExtrinsic`: Creates a transaction to nominate an operator and stake an amount.
- `withdrawStake(params: WithdrawStakeParams): SubmittableExtrinsic`: Creates a transaction to withdraw staked shares from an operator.
- `deregisterOperator(params: StakingParams): SubmittableExtrinsic`: Creates a transaction to deregister an operator.
- `unlockFunds(params: StakingParams): SubmittableExtrinsic`: Creates a transaction to unlock funds after operator deregistration.
- `unlockNominator(params: StakingParams): SubmittableExtrinsic`: Creates a transaction to unlock a nominator's funds.
- `deposits(api: Api, operatorId: StringNumberOrBigInt, account?: string): Promise<Deposit[]>`: Retrieves deposit information for an operator and optional account.
- `withdrawals(api: Api, operatorId: StringNumberOrBigInt, account?: string): Promise<Withdrawal[]>`: Retrieves withdrawal information for an operator and optional account.

### Transfers

- `transfer(api: ApiPromise, receiver: string, amount: Amount, allowDeath?: boolean): SubmittableExtrinsic`: Creates a transaction to transfer an amount to a receiver. Uses `transferKeepAlive` if `allowDeath` is false, otherwise uses `transferAllowDeath`.
- `transferAll(api: ApiPromise, receiver: string, keepAlive?: boolean): SubmittableExtrinsic`: Creates a transaction to transfer all tokens to a receiver. If `keepAlive` is true, keeps the sender's account alive.

### Utility Functions

- `rpc<T>(api: Api, methodPath: string, params?: any[]): Promise<T>`: Performs an RPC call to a specified method with optional parameters.
- `query<T>(api: Api, methodPath: string, params?: any[]): Promise<T>`: Queries the blockchain state for a specified method with optional parameters.
- `remark(api: ApiPromise, remark: string, withEvent?: boolean): SubmittableExtrinsic`: Creates a remark transaction with or without an event.

### Miscellaneous

- `blockchainSize(api: Api): Promise<bigint>`: Calculates the total size of the blockchain.
- `spacePledge(api: Api): Promise<bigint>`: Calculates the total space pledged in the network.

### Import Example

```typescript
import { generateAddress, getBalance, stake, transfer, getInfo } from '@autonomys/auto-consensus'
```

---

**Note:** All functions that return a `SubmittableExtrinsic` can be signed and submitted to the blockchain. Functions returning `Promise<T>` should be awaited to retrieve the desired data.

