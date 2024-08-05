---
title: Timekeeping
sidebar_position: 5
description: Farming on the Autonomys Network
keywords:
  - Timekeeper
  - Timekeeping
  - Farming
  - Hardware
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

# Timekeeping

Timekeeping is an essential component of securing the protocol. Without at least one timekeeper online there would be no block production. While it is possible to run a farmer or operator node with timekeeping activated, the ideal is that a high-spec, dedicated machine is used to mitigate processing loads altering the quality of the work they do.

Having a good number of timekeepers distributed geographically is our goal to foster a healthy network. Our hope is that our dedicated community run a number in addition to those being run by the team to ensure resilience and decentralization of the protocol.

:::note
There is no explicit economic incentive to running a timekeeper, however, independent timekeeping contributes to stable block production, which benefits every participant of the network.
:::

You can read more about timekeeping in the [Proof-of-Time section of Autonomys Academy](https://academy.autonomys.xyz/subspace-protocol/consensus/proof-of-time#timekeeping).


## Hardware Requirements

Being a timekeeper has high hardware requirements to ensure that a user with a stronger machine is not able to consistently beat every other timekeeper on the network. All timekeepers are in a race with each other to generate their proofs and we need a grid of equally provisioned F1 cars rather than a mix of classes with varying power.

*Note that these specs are our starting point and are subject to change as we discover the exact characteristics required to be a good timekeeper.*

| Hardware | Specs |
| --- | --- |
| CPU | 4 core+ with as high a frequency as possible. An overclocked Intel 14900k is the ideal. Note that only 1 core will be occupied with timekeeping. |
| RAM | 8GB+ |
| Storage | 100GB SSD |

## Command Line Parameters

There are two new CLI options on the node visible with `--help`:

- `--timekeeper` - to become a timekeeper.
- `--timekeeper-cpu-cores` - to specify which cores timekeeper should use rather than random cores.