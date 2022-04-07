---
sidebar_position: 1
title: "🔥 Common Issues"
---

:::tip

This is by no means an all inclusive list, If you are having issues feel free to join our [Discord](https://discord.gg/subspace-network) server for help 😊

:::

### Invalid Solution
This error is caused when running a version of the Subspace Node that is not compatible with the current network, you likely just need to update. Refer to the "Switching to New Snapshot" section in the [Getting Started](pathname:///docs/Getting%20Started/farming) guide.

### Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash
This error is often caused by lack of disk space on the drive that is being used for farming. Try checking your drives storage usage.

### Error in the WebSocket handshake: i/o error: Connection reset by peer
This error indicates something causing issues with your networking configuration, Try checking ports `30333`, `9944`, & `9955`. You may also want to investigate if there are any other substrate related process running (3rd party Polkadot Wallets, etc).

### Farmers time in the logs is not matching my system time
This is an expected behavior, the farmer logs display things in UTC for developers to correlate things easier. 

