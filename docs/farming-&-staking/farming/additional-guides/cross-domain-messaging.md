---
title: Cross Domain Messaging (XDM)
sidebar_position: 6
description: An overview of the different types of nodes
slug: /farming/guides/xdm
keywords:
    - XDM
    - Domain
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## **Introducing Cross Domain Messaging (XDM)**

Cross Domain Messaging (XDM) is a core feature of the Autonomys Network that enables secure and seamless communication between independent blockchain domains, such as the consensus chain and specialized domains like the Auto EVM. XDM allows these separate blockchains to exchange assets, messages, and data reliably, enhancing interoperability and collaboration across the entire Autonomys ecosystem.

In this community challenge, you'll put XDM to the test by executing cross-chain transfers between the consensus chain and the Auto EVM domain. Every successful XDM transfer will earn your wallet a point, letting you directly contribute to strengthening the network's interoperability while earning a share of the reward pool. Join us in exploring this groundbreaking technology, help us validate its performance, and earn points with every transfer you complete. Points will be converted to AI3 at a rate to be determined once the Game of Domains are over.

If you want to learn more about the technical nuances of XDM you can find further details in our [protocol specs](https://www.notion.so/Messaging-Specification-XDM-v2-6e8b9d3bb2c94e289d70f9e0474b9f9b?pvs=21).


## **XDM Confirmation and Timing**

To maintain security, there is a challenge period that has to expire when transferring tokens between domains and the consensus chain. Tokens are not fully available for use until the confirmation time has passed. Study the table below to understand confirmation blocks and rough timings:

| Source | Destination | Confirmation Blocks | Confirmation Time |
|:-:|:-:|:-:|:-:|
| Consensus | Domain | 100 consensus | ~10 minutes |
| Domain A | Domain B | 14,400 domain | ~1 day |
| Domain | Consensus | 14,400 domain | ~1 day |

### Refunds due to a failure to complete an XDM transfer will take 28,800 blocks in total

As long as the XDM is confirmed on the source chain (100 consensus blocks or 14,400 domain blocks) the XDM is able to be relayed and executed (i.e. transfer happens) on the destination chain.

The destination chain generates an XDM response that will be sent back to the source chain after the XDM response is confirmed on the destination chain (100 consensus blocks or 14,400 domain blocks), but the XDM response is mostly a no-op and only useful when the XDM is failed and the XDM response to refund the sender on the sender chain.

## How to Participate

### Consensus to Auto EVM domain

Visit https://astral.autonomys.xyz/taurus/transfer

![XDM-1](/img/doc-imgs/additional-guides/XDM-1.png)

Select networks for XDM consensus → Auto EVM. Enter amount to transfer.

![XDM-2](/img/doc-imgs/additional-guides/XDM-2.png)

You will be asked to approve the signature request.

![XDM-3](/img/doc-imgs/additional-guides/XDM-3.png)

After hitting Approve you will see an extrinsic hash

![XDM-4](/img/doc-imgs/additional-guides/XDM-4.png)

Which you can search on Astral

![XDM-5](/img/doc-imgs/additional-guides/XDM-5.png)

![XDM-6](/img/doc-imgs/additional-guides/XDM-6.png)

Our target account starts with no tokens

![XDM-7](/img/doc-imgs/additional-guides/XDM-7.png)

We can also check the balance on https://blockscout.taurus.autonomys.xyz/

![XDM-8](/img/doc-imgs/additional-guides/XDM-8.png)

We wait 10 minutes…

![XDM-9](/img/doc-imgs/additional-guides/XDM-9.png)

![XDM-10](/img/doc-imgs/additional-guides/XDM-10.png)

And we have successfully completed an XDM transfer from consensus to Auto EVM.

### Auto EVM domain to consensus

So now we have some tokens on the Auto EVM domain, let’s try and send some back the other way.

First, we will need the 0x public key of the account you want to send the tokens to on consensus. If you do not have this, you can get it from [ss58.org](http://ss58.org) as per the below screenshot.

![XDM-11](/img/doc-imgs/additional-guides/XDM-11.png)

Next, you will need to navigate to the Auto EVM domain in PolkadotJS by either selecting it in the network switcher or following this link: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fauto-evm.taurus.autonomys.xyz%2Fws#/extrinsics

Working from the top down:

1. Select the account you want to XDM from.
2. select the `transporter.transfer()` extrinsic.
3. Select `Consensus` in the `dstLocation` `chainId`.
4. Enter the `0x` account address we got above in the `AccountId32` textbox. *NOTE: it is possible to use the “Substrate: 42” address that starts with a `5` in this box if you find that easier.*
5. Enter the amount. Which will be the number of tokens with 18 zeroes afterwards as the value is in Shannons.
6. Submit Transaction.

![XDM-12](/img/doc-imgs/additional-guides/XDM-12.png)

Remember that there is a 2 tAI3 fee for the transaction and that you will need to wait for 14,400 domain blocks to pass which is about a day before the funds are available in the destination account.
