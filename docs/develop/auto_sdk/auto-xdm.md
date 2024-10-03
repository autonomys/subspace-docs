---
title: Auto XDM
sidebar_position: 4
description: Functions to utilize Auto XDM (Cross-Domain Messaging)
keywords:
    - Developers Documentation
    - DevDocs
    - SDK
    - Auto SDK
    - Auto XDM
---

### Cross-Domain Transfers

- `transfer(api: ApiPromise, destination: ChainOrDomain, receiver: string, amount: Amount): Promise<SubmittableExtrinsic>`: Creates a transaction to transfer a specified amount to a receiver on a given destination, which can be either the consensus chain or a specific domain.

### Types:

- **Amount**: `BigInt | number | string`  
  Represents the amount to be transferred.

- **Consensus**: `{ type: 'consensus' }`  
  Indicates that the destination is the consensus chain.

- **ChainOrDomain**: `Consensus | Domain`  
  A union type representing either the consensus chain or a domain.

- **Domain**: `{ type: 'domain'; domainId: number }`  
  Specifies a domain as the destination, identified by a `domainId`.

---

### Usage Example

```typescript
// For transferring to the consensus chain
await transfer(api, { type: 'consensus' }, 'receiverAddress', amount)

// For transferring to a specific domain
await transfer(api, { type: 'domain', domainId: 1 }, 'receiverAddress', amount)
```

:::note
The `transfer` function returns a `Promise` that resolves to a `SubmittableExtrinsic`, which can be signed and submitted to the blockchain.
:::