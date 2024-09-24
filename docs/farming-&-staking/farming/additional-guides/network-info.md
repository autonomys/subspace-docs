---
title: Port Forwarding
sidebar_position: 2
description: Comprehensive guide on port forwarding and network information for Autonomys Network products.
slug: networking
keywords:
    - Farmer
    - Farming
    - Node
    - Domain
    - RPC
    - Port Forwarding
    - Ports
    - Networking
    - Network
---

## Overview

This guide explains how to configure network settings and set up port forwarding for Autonomys Network. Correct port forwarding is essential to ensure proper communication between your node, farmer, and the Autonomys Network. 

By opening specific ports on your router, you allow external traffic to reach your node, which is necessary for blockchain synchronization, data exchange, and remote procedure calls (RPC).

## Required Ports for Autonomys Network

### Space Acres

| Port | Protocol | Component| Purpose |
|--|--|--|--|
| 30333  | TCP | Node (Consensus) | Facilitate block, transaction, and PoT gossip exchange. |
| 30433  | TCP | Farmer | Retrieve archival history from the blockchain. |

### Advanced CLI (Farmer)

| Port | Protocol | Component| Purpose |
|--|--|--|--|
| 30333  | TCP | Node (Consensus) | Facilitate block, transaction, and PoT gossip exchange. |
| 30433  | TCP | Farmer | Retrieve archival history from the blockchain. |
| 30533  | TCP | Farmer | Synchronize with node peers to access archival history. |

### Advanced CLI (Domain Operator)

| Port | Protocol | Component| Purpose |
|--|--|--|--|
| 30333  | TCP | Node (Consensus) | Facilitate block, transaction, and PoT gossip exchange. |
| 40333  | TCP | Node (Domain) | Facilitate transaction gossip within the domain network. |

### RPC Server (Public)

:::caution Exposing RPC Ports
For security reasons, these RPC ports should never be exposed unless you intend to operate a public RPC server, and they should never be exposed on a system that is running a farmer or an operator.

RPC ports facilitate communication between the node and the farmer. If both the node and farmer are on the same local network, no port forwarding is required, as they communicate internally.
:::

| Port | Protocol | Component| Purpose |
|--|--|--|--|
| 9944   | TCP | Node (Consensus RPC) | Exposes real-time and historical blockchain data, enables transaction submissions through HTTP and WebSocket, and is used for slot challenges. |
| 9945   | TCP | Node (Domain RPC) | Exposes real-time and historical blockchain data, enables transaction submissions through HTTP and WebSocket, and includes smart contracts. |

## Steps to Forward Ports

Since the port forwarding process varies by router, follow these general steps:

1. **Find Your Router’s IP Address:**
   Check your network settings to locate your router’s IP address. You will also need the internal IP address of the computer running the Autonomys components.

2. **Access Router Settings:**
   Open your router’s settings by entering the router's IP address into a web browser. You may need the default login credentials, often printed on the router or provided by your ISP.

3. **Set Up Port Forwarding:**
   In the router's configuration interface, navigate to `Advanced Settings` or `Port Forwarding` and enter the following details:
   - The internal IP address of your computer
   - Consult the tables above for the ports and protocols that need to be forwarded (30333, 30433, 30533, etc.).

   Once entered, apply the changes and reboot your router if necessary.

### Network Configuration Scenarios

| Scenario | Required Action |
|--|--|
| Using a Router | Ensure that the necessary ports are properly forwarded to the machine running your services. |
| Firewall | Configure your firewall settings to ensure the required ports are open for incoming and outgoing traffic. |
| No Firewall | No additional configuration is necessary if a firewall is not in use. |
| Direct Internet Connection | If you are connected directly to the internet without a router, no port forwarding is required. |

Proper configuration of these ports ensures secure and reliable communication with the Autonomys network.

## Linux Firewall Configuration

If you are using Linux with `ufw` (Uncomplicated Firewall) enabled, you will need to allow traffic on the necessary ports to ensure your node and farmer can communicate properly. Use the following commands to update your firewall settings:

- Allow node traffic on ports 30333 and 30433:
  ```bash
  sudo ufw allow 30333,30433 comment 'Autonomys Node'
  ```
- Allow farmer traffic on port 30533:
  ```bash
  sudo ufw allow 30533 comment 'Autonomys Farmer'
  ```
- If you are connecting remote farmers within your local network (LAN), allow RPC connections by running this command (assuming your LAN IP range is `192.168.1.0/24`):
  ```bash
  sudo ufw allow from 192.168.1.0/24 to any port 9944 proto tcp comment 'Autonomys Remote Farmer RPC'
  ```

## Additional Resources and Verification

:::caution External Links
Autonomys provides these links for reference only and does not guarantee the accuracy, completeness, or reliability of the information contained within them. Users are advised to verify the details independently and use these resources at their own discretion.
:::

- [How to Forward Ports on Your Router](https://www.lifewire.com/how-to-port-forward-4163829)
- [General Port Forwarding Guide](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/)
- [Default Router Username & Passwords List](https://routerslogin.com/all/default-router-list)
- [Verify Port Forwarding](https://www.whatismyip.com/port-scanner/)