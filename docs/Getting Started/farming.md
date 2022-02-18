---
sidebar_position: 2

tags:
    - Farming
    - Storage
    - Node
    - Getting Started
---

# Getting Started Farming

  Becoming a Farmer on the Subspace Network...

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WindowsFarming from './_windows-farming.mdx';
import MacosFarming from './_macos-farming.mdx';
import LinuxFarming from './_linux-farming.mdx';

## 📝Installation Instructions

<Tabs groupId="os">
  <TabItem value="windows" label="Windows" default>
    <WindowsFarming />
  </TabItem>
  <TabItem value="macos" label="macOS">
    <MacosFarming />
  </TabItem>
  <TabItem value="linux" label="Linux">
    <LinuxFarming />
  </TabItem>
</Tabs>

## 🤔Notes
---
#### Identity Management: 
If you would like to import your polkadot.js wallet so, you can interact with the network, you may do so via
```
./FARMER_FILE_NAME identity import-from-mnemonic "spell out your seed phrase here"
```
then start your farmer as normal.

> You may need to wipe the farm with the `wipe` command if you ran the farmer prior to importing a mnemonic.

You may visit the [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffarm-rpc.subspace.network#/explorer), from here you may interact with the Subspace Farmnet as any substrate based blockchain.

#### Invalid Solution: 
If you are getting `invalid solution` errors (visible on the terminal that Node runs), please perform this step and then follow the guideline again:
```
./FARMER_FILE_NAME erase-plot
```
This will basically erase your plot and commitments, so that the farmer can make a fresh start.

#### Switching to a new snapshot:
If you were running a node previously, and want to switch to a new snapshot, please perform these steps and then follow the guideline again:
```
./NODE_FILE_NAME purge-chain --chain testnet
./FARMER_FILE_NAME erase-plot
```
Does not matter if the node/farmer executable is the previous one or from the new snapshot, both will work :)
The reason we require this is, with every snapshot change, the network might get partitioned, and you may be on a different genesis than the current one.
In plain English, these commands are like a `reset` button for snapshot changes.

## 📖 Glossary For Farm Commands

Structure -> `FARMER_FILE_NAME <COMMAND>`

- `farm` : starts background plotting and farming together
- `erase-plot` : erases the plot (including plot, commitments and object mappings)
- `wipe` : erases the plot and identity (including plot, commitment, object mappings and identity files)
- `identity import-from-mnemonic "spell out your seed phrase here"` : imports your existing identity from your seed phrase
- `identity view` : displays SS58 address (this is the same as `identity view --address`)
- `identity view --public-key` : displays the hex encoded public key
- `identity view --mnemonic` : displays your mnemonic (sensitive information, keep this private)

An example command: `FARMER_FILE_NAME identity view --public-key`



