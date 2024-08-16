---
title: Quick start
sidebar_position: 2
description: Quick start one-pager
keywords:
  - autonomys network
  - quickstart
---

## The only tools needed to get you started
---
The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment.

Autonomys utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Autonomys.

### Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM
---
```
Network Name: Autonomys EVM
New RPC URL: https://nova-0.gemini-3h.subspace.network/ws
Chain ID: 490000
Currency Symbol: TSSC
```

### Get tokens to your wallet using our faucet
---
Follow the instructions [here](faucet.md) to use our **Faucet** to get some TSSC.

### Test and deploy your smart contract
---
You can use **[Remix](https://remix.ethereum.org/)**, **[Foundry](https://book.getfoundry.sh/)** or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set.

If anything above sounds unfamiliar, you can always fall back to our full guide. 

---
### Important note about submitting a transaction

Please avoid attempting to accelerate a transaction by including a tip alongside the gas fees. The transaction queue operates differently with Autonomys, leading to the possibility of two transactions sharing the same nonce. This could result in dual charges for gas fees - once for the execution and storage in the first transaction, and solely for storage in the second transaction. To prevent this scenario, ensure that you refrain from adding a tip in an attempt to speed the transaction up.

---
### Gas Estimation Issue

When deploying smart contracts to our EVM-compatible domain **Nova**, you may encounter an error related to gas estimation, typically presenting as:

`"No manual gas limit set" or "Gas estimation failed"`.

This issue often occurs because development tools like Foundry simulate transactions and use calculated or hardcoded gas estimation instead of querying the RPC (Remote Procedure Call) for it. **Nova** may require different gas amounts for certain operations compared to other EVM-compatible chains like Ethereum's testnets.

:::note
We have submitted an upstream PR to fix this issue with **Foundry**. Described below are the workarounds, until the issue is resolved by the **Foundry team**.
:::

#### Solutions

If you encounter this issue, try the following solutions:

- Skip simulation: Use the `--skip-simulation` flag when deploying with Foundry to bypass built-in simulation and rely on RPC for gas estimation.

- Set manual gas limit: Specify a higher gas limit manually in your deployment command or UI.

- Adjust deployment script: Modify your script to include custom gas settings or implement `try/catch` blocks for handling deployment failures.

- Use Web3 provider: If using **Remix IDE**, switch to `Injected Web3` environment to leverage external Web3 providers like MetaMask.

- Custom deployment function: Create a deployment function with adjustable gas parameters. 


#### Solution examples

**Foundry**

1. Try using `--skip-simulation` flag: `forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --skip-simulation`.

2. Try setting the gas limit manually: `forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --gas-limit 300000`.

Adjust the gas limit value as needed. Start with a higher value and gradually lower it to find the optimal limit.

**Remix IDE**

1. Try settiing gas limit manually: In the **Deploy & Run Transactions** panel, expand the **Advanced** section.
Set a higher value in the **Gas Limit** field. Try starting with **300000** and adjust as needed.

2. Try adjusting gas price: In the same **Advanced** section, you can also adjust the **Gas Price** if needed.

3. Try switching to the **Injected Web3** environment in the **Deploy & Run Transactions** panel. This will use your browser's Web3 provider (like MetaMask) which might handle gas estimation better for the network.

4. If the above steps don't work, you can create a custom deployment function that includes gas parameters:

   ```
   function deployWithCustomGas(uint256 gasLimit, uint256 gasPrice) public returns (address) {
      return address(new YourContract{gas: gasLimit, gasPrice: gasPrice}());
   }
   ```

**Other possible solution**

1. Modify your deployment script and override the default gas settings: 

   ```
   vm.txGasPrice(uint256 gasPrice);
   vm.txGasLimit(uint256 gasLimit);
   ```

2. Implement a try/catch block in your script to handle gas estimation failures:

   ```
   try yourContract.deploy{gas: 300000}(constructorArgs) returns (YourContract deployed) {
      // Deployment successful
   } catch Error(string memory reason) {
      console.log("Deployment failed:", reason);
   }
   ```

---

### Have any questions? Feel free to post them on [our forum](https://forum.autonomys.xyz/) or in our [Developer-chat on Discord](https://discord.gg/EAw6B48r).
---

In order to get access to the role-gated developer chat:
1. Join our [Discord](https://discord.gg/vhv5cEZN)
2. Click on Autonomys Network at the top left corner and choose **Linked Roles**.

   ![Discord-1](/img/developers/Discord-1.png)

3. Link your GitHub account to get a developer role and gain access to **developer-chat**. 
   ![Discord-2](/img/developers/Discord-2.png)