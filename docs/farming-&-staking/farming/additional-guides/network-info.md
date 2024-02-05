---
title: Ports & Network Information
sidebar_position: 5
description: Comprehensive guide on port forwarding and network information for Subspace Network products.
slug: networking
keywords:
    - Farmer
    - Farming
    - CLI
    - Binaries
    - Port Forwarding
    - Subspace Desktop
    - Ports
    - QUIC
    - Networking
    - Network
---

:::caution
If you are using Linux and enabled `ufw` (firewall), make sure you have opened up your firewall for traffic on the following ports (adjust the port numbers here if you are changing them from the defaults in your startup parameters, of course) with the following commands:  `sudo ufw allow 30333,30433 comment 'Subspace Node'` for the node and `sudo ufw allow 30533 comment 'Subspace Farmer'` for the farmer.  Also, if you are connecting remote farmers to a node and your firewall rules do not permit devices in your LAN to communicate freely, you should add a variation of this rule using your remote farmer's IP addresses (192.168.1.10 in this example) in your node server's firewall:  `sudo ufw allow from 192.168.1.10 to any port 9944 proto tcp comment 'Remote Farmer RPC'`.
:::

Configuring the right network settings is crucial for the effective operation of blockchain nodes. This guide provides detailed information about the necessary ports, network configurations, and steps for port forwarding for Subspace Network products, ensuring smooth communication and optimal performance.

## Understanding Port Forwarding

Forwarding ports on your router will open up a specific lane on your router to allow external traffic to flow in or out. This process is usually automatic for common applications, but for specific needs like ours, it must be done manually. For a foundational understanding of port forwarding, you can read this guide: [Port Forwarding Overview](https://www.geeksforgeeks.org/port-forwarding-on-router-and-why-do-we-need-it/).

## Required Ports for Subspace Network

For optimal performance of our blockchain node, specific ports need to be configured to handle incoming connections. These ports facilitate various critical functions within our blockchain network

Below is a table summarizing the necessary port configurations for uninterrupted network performance:

| Port  | Protocol            | Exposure                                                | Short Description           | Used By                                                                                                                                                              | Purpose                                              |
|-------|---------------------|---------------------------------------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| 30333 | TCP/UDP (QUIC)      | Always public                                           | Substrate networking P2P   | <ul><li>[Pulsar](../../../category/pulsar/)</li><li>[Advanced CLI Node (Consensus)](../../../category/advanced-cli-recommended)</li><li>[Space Acres](https://github.com/nazar-pc/space-acres)</li></ul> | Connecting to the rest of the network for exchanging blocks, transactions, PoT gossip, etc. |
| 30433 | TCP/UDP (QUIC)      | Always public                                           | Subspace networking P2P    | <ul><li>[Pulsar](../../../category/pulsar/)</li><li>[Advanced CLI Node (Consensus)](../../../category/advanced-cli-recommended)</li><li>[Space Acres](https://github.com/nazar-pc/space-acres)</li></ul> | Connecting to the rest of the network and retrieving archival history.            |
| 30533 | TCP/UDP (QUIC)      | Always public                                           | Subspace networking P2P    | <ul><li>[Advanced CLI Node (Consensus)](../../../category/advanced-cli-recommended)</li></ul>                                                                        | Connecting to the rest of the network and retrieving archival history, not required for Pulsar and Space Acres because the node and the farmer share the Subspace networking stack there. |
| 40333 | TCP (QUIC)          | Always public                                           | Subspace networking P2P    | <ul><li>[Advanced CLI Node (Domain)](../../../category/operators-and-nominators)</li></ul>                                                                           | Connecting to the rest of the domain network for transaction gossipping.      |
| 9944  | TCP (HTTP/WebSocket)| Public: <ul><li>RPC server</li></ul> Private: <ul><li>Internal node-to-farmer connections</li></ul> | Consensus RPC port         | <ul><li>[Advanced CLI Node (Consensus)](../../../category/advanced-cli-recommended)</li></ul>                                                                        | RPC server: Exposes various details about the blockchain (real-time and historical events, storage, transactions, etc) as well as submitting transactions to the network (balance transfers, staking, etc). <br /><br /> Farmer connections: The farmer connects in unsafe mode and receives notifications about slot challenges for block/vote production, archival history extension events, querying of various chain details. Nodes that process farmer connections should never be exposed publicly as public exposure of unsafe APIs can be used to not only prevent farmer from working, but even block node sync completely. |
| 9945  | TCP (HTTP/WebSocket)| Public: <ul><li>RPC server</li></ul>                     | Domain RPC port            | <ul><li>[Advanced CLI Node (Domain)](../../../category/operators-and-nominators)</li></ul>                                                                           | RPC server: Expose various details about blockchain (real-time and historical events, storage, transactions, etc.) as well as submitting transactions to the network (balance transfers, interacting with smart contracts, etc). |

### Special Note on Port 9944

- Port 9944 is used for Remote Procedure Calls (RPC) between the node and the farmer. It does not require forwarding if the node and farmer are on the same local network, as they communicate internally.

## How to Port Forward

It is important to note that forwarding ports is going to be different for most routers, but we have included some general instructions, as well as some links for some major brands.

### Step 1. *Finding Default Gateway Address*

First, find your local router IP Address & Computer internal IP address. Instructions for finding the router IP address are provided for Linux, Windows, and OSX.

### Step 2. *Connecting to your router*

Input the router IP Address into a web browser to access router settings. Locate the default admin login information, which might be on the router itself, in the user manual, or provided by your ISP.

### Step 3. *Forwarding your ports*

The process varies based on your router. Generally, navigate to Advanced Settings > Port Forwarding, and enter the necessary information, such as Computer IP Address, Protocols, Starting, and Ending Port. Ensure to apply changes and possibly reboot your router.

## Additional Resources and Verification

- [How to Forward Ports on Your Router](https://www.lifewire.com/how-to-port-forward-4163829)
- [General Port Forwarding Guide](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/)
- [Router IP Address and Passwords List](https://routerslogin.com/all/default-router-list)
- [Verify Port Forwarding](https://www.whatismyip.com/port-scanner/)

## Network Configuration Scenarios

- **Router Configuration (Desktop):** Forward the specified TCP and UDP ports to the machine running your node.
- **No Firewall Scenario:** No additional configuration needed if operating without a firewall.
- **With Firewall:** Ensure TCP and UDP ports are open in your firewall settings.
- **Direct Connection:** No further action if directly connected to the internet.

Proper configuration of these ports ensures reliable and secure communication within the Subspace Network.
