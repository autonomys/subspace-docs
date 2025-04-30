---
title: Cross Domain Messaging (XDM) Guide
sidebar_position: 6
description: An overview of the different types of nodes
slug: /farming/guides/xdm
keywords:
    - XDM
    - Domain
    - EVM
    - Messaging
    - Message
    - Transfer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## **Cross Domain Messaging on the Autonomys Network**

This guide explains what XDM is and walks you through how to transfer assets between consensus and domain chains.

### Introducing Cross Domain Messaging (XDM)

Cross Domain Messaging (XDM) is a core feature of the Autonomys Network that enables secure and seamless communication between independent blockchain domains, such as the consensus chain and specialized domains like Auto EVM. XDM allows these separate blockchains to exchange assets, messages, and data reliably, enhancing interoperability and collaboration across the entire Autonomys ecosystem.

If you want to learn more about the technical nuances of XDM you can find further details in our [protocol specs](https://www.notion.so/Messaging-Specification-XDM-v2-6e8b9d3bb2c94e289d70f9e0474b9f9b?pvs=21).


### XDM Confirmation and Timing

To maintain security, there is a challenge period that has to expire when transferring tokens between domains and the consensus chain. Tokens are not fully available for use until the confirmation time has passed. Study the table below to understand confirmation blocks and rough timings:

| Source | Destination | Confirmation Blocks | Confirmation Time |
|:-:|:-:|:-:|:-:|
| Consensus | Domain | 100 consensus | ~10 minutes |
| Domain A | Domain B | 14,400 domain | ~1 day |
| Domain | Consensus | 14,400 domain | ~1 day |

### Refunds due to a failure to complete an XDM transfer will take 28,800 blocks in total

As long as the XDM is confirmed on the source chain (100 consensus blocks or 14,400 domain blocks) the XDM is able to be relayed and executed (the transfer happens) on the destination chain.

The destination chain generates an XDM response that will be sent back to the source chain after the XDM response is confirmed on the destination chain (100 consensus blocks or 14,400 domain blocks), but the XDM response is mostly a no-op and only useful when the XDM is failed and it is necessary to refund the sender on the sender chain.

### XDM Fees

An XDM transfer in any direction costs 2 tAI3 on Taurus. This fee amount is yet to be determined on mainnet and there are plans to make it dynamic. The price is also likely to change based on the outcomes of the SR Labs security audit report.

### What Happens to the XDM Fee?

The tAI3 is earned by the operators for processing the transaction. They share that execution fee with their nominators. A portion also goes to farmers for storing the transaction.

## Executing XDM Transfers

### Consensus to Auto EVM domain

Visit https://astral.autonomys.xyz/taurus/transfer

![Astral - Transfer](/img/doc-imgs/additional-guides/XDM-1.png)

Select networks for XDM consensus → Auto EVM. Enter amount to transfer.

![Astral - XDM Amount](/img/doc-imgs/additional-guides/XDM-2.png)

Hit Send token and you will be asked to approve the signature request.

![SubWallet - Consensus to Auto EVM](/img/doc-imgs/additional-guides/XDM-3.png)

After hitting Approve you will see an extrinsic hash.

![Astral - Extrinsic Hash](/img/doc-imgs/additional-guides/XDM-4.png)

Which you can search on Astral.

![Astral - Search Extrinsic](/img/doc-imgs/additional-guides/XDM-5.png)

![Astral - View Extrinsic](/img/doc-imgs/additional-guides/XDM-6.png)

Our target account starts with no tokens

![SubWallet - No Tokens](/img/doc-imgs/additional-guides/XDM-7.png)

We can also check the balance on the Auto EVM explorer at https://blockscout.taurus.autonomys.xyz/

![Blockscout - No Tokens](/img/doc-imgs/additional-guides/XDM-8.png)

We wait 10 minutes for the confirmation…

![SubWallet - Tokens Arrived](/img/doc-imgs/additional-guides/XDM-9.png)

![Blockscout - Tokens Arrived](/img/doc-imgs/additional-guides/XDM-10.png)

And we have successfully completed an XDM transfer from consensus to Auto EVM.

### Auto EVM domain to consensus

So now we have some tokens on the Auto EVM domain, let’s try and send some back the other way.

First, we will need the `0x` public key of the account you want to send the tokens to on consensus. If you do not have this, you can get it from [ss58.org](http://ss58.org) as per the below screenshot.

![Convert Public Key](/img/doc-imgs/additional-guides/XDM-11.png)

Next, you will need to navigate to the Auto EVM domain in PolkadotJS by either selecting it in the network switcher or following this link: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fauto-evm.taurus.autonomys.xyz%2Fws#/extrinsics

Working from the top down:

1. Select the account you want to XDM from.
2. select the `transporter.transfer()` extrinsic.
3. Select `Consensus` in the `dstLocation` `chainId`.
4. Enter the `0x` account address we got above in the `AccountId32` textbox. *NOTE: it is possible to use the “Substrate: 42” address that starts with a `5` in this box if you find that easier.*
5. Enter the amount. Which will be the number of tokens with 18 zeroes afterwards as the value is in Shannons.
6. Submit Transaction.

![PolkadotJS](/img/doc-imgs/additional-guides/XDM-12.png)

Remember that there is a 2 tAI3 fee for each XDM transaction and that you will need to wait for 14,400 domain blocks to pass which is about a day before the funds are available in the destination account.

We are working on an update for EVM wallet detection in Astral that will enable you to XDM back to consensus without needing to use PolkadotJS and instead stay entirely within Astral.

It is also possible to use the [Auto SDK](https://develop.autonomys.xyz/sdk/auto-xdm)’s `@autonomys/auto-xdm` package to submit these transactions if you’d like to automate them in some way.

### Talisman Shortcut

Due to the way the Unified Accounts feature of the Subwallet works, sending tokens from XDM to Consensus is quite involved. If you use the [Talisman Wallet](/wallets/talisman), it is much more like sending tokens from Consensus to EVM.

In your wallet you should have both a consensus account and an EVM account listed.

![Talisman](/img/doc-imgs/additional-guides/XDM-13.png)

Make sure that you have some funds in your EVM wallet. In these examples, there are 10 tAI3 in both the consensus and EVM accounts.

![Talisman](/img/doc-imgs/additional-guides/XDM-14.png)

![Talisman](/img/doc-imgs/additional-guides/XDM-15.png)

Visit https://astral.autonomys.xyz/taurus/transfer

![Talisman](/img/doc-imgs/additional-guides/XDM-16.png)

Select networks for Auto EVM. → XDM consensus. Enter amount to transfer, and a destination address.

![Talisman](/img/doc-imgs/additional-guides/XDM-17.png)

Hit Send token and you will be asked to approve the signature request.

![Talisman](/img/doc-imgs/additional-guides/XDM-18.png)

After hitting Approve you will see an extrinsic hash.

![Astral - Extrinsic Hash](/img/doc-imgs/additional-guides/XDM-4.png)

Checking the EVM account balance, you can see that it is now 7. 1 tAI3 token was sent and 2 tAI3 was used for the transaction fee.

![Talisman](/img/doc-imgs/additional-guides/XDM-19.png)

After waiting 14,400 domain blocks (can be from 1-2 days), you can see that the Consensus account balance has increased by 1 to 11.

![Talisman](/img/doc-imgs/additional-guides/XDM-20.png)
