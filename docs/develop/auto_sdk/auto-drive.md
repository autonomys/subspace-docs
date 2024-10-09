---
title: Drive
sidebar_position: 6
description: Utilities for creating and managing IPLD DAGs
slug: /develop/auto-sdk/drive
keywords:
- Developers Documentation
- DevDocs
- SDK
- Auto SDK
- Auto Drive
---

## Auto-Drive Package Documentation

### Introduction

The `@autonomys/auto-drive` package provides utilities for creating and managing IPLD DAGs (InterPlanetary Linked Data Directed Acyclic Graphs) for files and folders. It facilitates chunking large files, handling metadata, and creating folder structures suitable for distributed storage systems like IPFS.

### Features

- **File Chunking and DAG Creation**: Efficiently split large files into smaller chunks and create IPLD DAGs.
- **Folder Structure Creation**: Generate IPLD DAGs for directory structures.
- **Metadata Handling**: Add and manage metadata for files and folders.
- **CID Management**: Utilities for working with Content Identifiers (CIDs).
- **TypeScript Support**: Fully typed for enhanced developer experience.

### Installation

Install the package via npm or yarn:

```bash
# Using npm
npm install @autonomys/auto-drive

# Using yarn
yarn add @autonomys/auto-drive
```

### Importing the Package

Before using the functions provided by the `auto-drive` package, you need to import them into your project:

```typescript
// Import specific functions
import { createFileIPLDDag, createFolderIPLDDag } from '@autonomys/auto-drive';

// Or import everything
import * as drive from '@autonomys/auto-drive';
```

---

## Available Functions

### File and Folder DAG Creation

- **`createFileIPLDDag(fileBuffer, fileName): IPLDDag`**: Creates an IPLD DAG for a file from its buffer and name.
- **`createFolderIPLDDag(childCIDs, folderName, folderSize): IPLDDag`**: Creates an IPLD DAG for a folder with given child CIDs, name, and size.

### CID Utilities

- **`cidOfNode(node): CID`**: Generates a CID from an IPLD node.
- **`cidToString(cid): string`**: Converts a CID to its string representation.
- **`stringToCid(cidString): CID`**: Parses a CID string back into a CID object.

### Node Encoding and Decoding

- **`encodeNode(node): Uint8Array`**: Encodes an IPLD node into a byte array.
- **`decodeNode(encodedNode): any`**: Decodes a byte array back into an IPLD node.

### Metadata Handling

- **`createMetadataNode(metadata): any`**: Creates a metadata node for an IPLD DAG.
- **`createMetadataIPLDDag(metadata): IPLDDag`**: Creates an IPLD DAG for metadata.

---

*Note:* All asynchronous functions return a `Promise` and should be used with `await` for proper execution flow.

---

## Usage Examples

### 1. Creating an IPLD DAG from a File

Create an IPLD DAG for a file:

```typescript
import { createFileIPLDDag } from '@autonomys/auto-drive';
import fs from 'fs';

const fileBuffer = fs.readFileSync('path/to/your/file.txt');

const dag = createFileIPLDDag(fileBuffer, 'file.txt');

console.log('File DAG created:', dag);
```

### 2. Creating an IPLD DAG from a Folder

Create an IPLD DAG for a folder:

```typescript
import { createFolderIPLDDag } from '@autonomys/auto-drive';
import { CID } from 'multiformats';

// Example child CIDs and folder information
const childCIDs: CID[] = [
  /* array of CIDs */
];
const folderName = 'my-folder';
const folderSize = 1024; // size in bytes

const folderDag = createFolderIPLDDag(childCIDs, folderName, folderSize);

console.log('Folder DAG created:', folderDag);
```

### 3. Working with CIDs

Generate and manipulate CIDs:

```typescript
import { cidOfNode, cidToString, stringToCid } from '@autonomys/auto-drive';

// Assuming you have an IPLD node
const node = { /* IPLD node data */ };

// Create a CID from a node
const cid = cidOfNode(node);

// Convert the CID to a string
const cidString = cidToString(cid);
console.log('CID as string:', cidString);

// Parse a string back into a CID
const parsedCID = stringToCid(cidString);
console.log('Parsed CID:', parsedCID);
```

### 4. Encoding and Decoding Nodes

Encode and decode IPLD nodes:

```typescript
import { encodeNode, decodeNode } from '@autonomys/auto-drive';

// Assume you have an IPLD node
const node = { /* IPLD node data */ };

// Encode a node
const encodedNode = encodeNode(node);

// Decode a node
const decodedNode = decodeNode(encodedNode);

console.log('Decoded node:', decodedNode);
```

### 5. Handling Metadata

Add metadata to a node:

```typescript
import { createMetadataNode } from '@autonomys/auto-drive';

const metadata = {
  name: 'My File',
  description: 'This is a sample file',
  // ... other metadata fields
};

const metadataNode = createMetadataNode(metadata);

console.log('Metadata node created:', metadataNode);
```

### 6. Example: Creating a File DAG and Converting to CID

```typescript
import { createFileIPLDDag, cidOfNode, cidToString } from '@autonomys/auto-drive';
import fs from 'fs';

const fileBuffer = fs.readFileSync('path/to/your/file.txt');

const dag = createFileIPLDDag(fileBuffer, 'file.txt');

// Generate CID from the DAG
const cid = cidOfNode(dag.head);

// Convert CID to string
const cidString = cidToString(cid);

console.log(`CID of the file DAG: ${cidString}`);
```

### 7. Example: Converting Metadata to DAG

```typescript
import {
  createMetadataIPLDDag,
  cidOfNode,
  cidToString,
  type OffchainMetadata,
} from '@autonomys/auto-drive';
import fs from 'fs';

const metadataContent = fs.readFileSync('path/to/your/metadata.json', 'utf-8');
const metadata: OffchainMetadata = JSON.parse(metadataContent);

const dag = createMetadataIPLDDag(metadata);

const cid = cidOfNode(dag.head);
const cidString = cidToString(cid);

console.log(`CID of the metadata DAG: ${cidString}`);
```

---

## Notes

- **Asynchronous Functions**: Use `await` with all promises for proper execution flow.
- **Error Handling**: Wrap asynchronous calls in `try...catch` blocks to handle potential errors gracefully.
- **File System Operations**: Ensure that file paths are correct and accessible when reading from or writing to the file system.

---
