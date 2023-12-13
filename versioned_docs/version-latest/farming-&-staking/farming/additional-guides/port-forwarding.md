---
title: How to Forward Ports
sidebar_position: 5
description: How to forward TCP port 30333 for the Subspace Farmer
keywords:
    - Farmer
    - Farming
    - CLI
    - Binaries
    - Port Forwarding
    - Subspace Desktop
---

:::warning
If you are using Linux and enabled `ufw` (firewall), make sure you have opened up your firewall for traffic on port 30333 with the following commands `sudo ufw allow 30333/tcp` for TCP and `sudo ufw allow 30333/udp` for UDP
:::

First before forwarding ports it is important to understand what that actually means. We would highly suggest reading some information on the topic, here is a guide we find helpful https://www.geeksforgeeks.org/port-forwarding-on-router-and-why-do-we-need-it/

Forwarding ports on your router will open up one specific lane on your router to allow external traffic to flow in or out. This is usually automatically done for most applications such as port 80 for File Transfer Protocol, in our case we will need to do this manually.

It is important to note that forwarding ports is going to be different for most routers, but we have included some general instructions, as well as some links for some major brands.


# How to Port Forward
---
## Additional Resources

[How to Forward Ports on Your Router](https://www.lifewire.com/how-to-port-forward-4163829)

[How to Port Forward - General Guide to Multiple Router Brands - Support | No-IP Knowledge Base](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/)

[Port Forwarding in Your Router](https://portforward.com/how-to-port-forward/)

## Step 1. *Finding Default Gateway Address*
---
Find your local router IP Address & Computer internal IP address.

Router IP address is only necessary to open router settings, if you know how to open router settings - do that instead.

### Find router IP Address on Linux
1. Open up a terminal and type `ip route` or `ip r` .
        1. This will display the IP Address of your home router at the top
2. The top of the terminal will show the IP address typically `192.168.0.1` we will want to record this IP Address
3. We will then type `hostname -I | awk '{print $1}'`  which will return your computer's internal IP address typically something like `192.168.0.25` ensure to record this IP address as well.

### Find router IP Address on Windows
1. Open up PowerShell and type `ipconfig`
    1. This will display the IP Address of your home router as `Default Gateway:`
2. This command will also display your computer's internal IP address named as `IPv4 Address` typically something like `192.168.0.25` ensure to record this IP address as well.

### Find router IP Address on OSX
1. Open up a terminal and type `netstat -nr|grep default`
    1. This will display the IP Address of your home router
2. The top of the terminal will show the IP address typically `192.168.0.1` we will want to record this IP Address
    3. We will then type `ipconfig getifaddr en1` for wireless, or `ipconfig getifaddr en0` for ethernet.  which will return your computer's internal IP address typically something like `192.168.0.25` ensure to record this IP address as well.

## Step 2. *Connecting to your router*
---
Now we will input the router IP Address into an Internet browser (Firefox, Chrome, Edge, etc), this will take you to some kind of login page. At this point we will need to find the default admin login information. There are typically 3 ways to locate this information.

1. It will usually be physically located on the router, in the detailed information area where you may find a barcode, or serial number.
    * It may also be in the user manual of the router as well
2. Sometimes it may also be given to you on an information card from your Internet technician when you first setup your internet.
3. Some ISP's have it configured to your ISP Portal account login information.
4. You may also attempt to google the default information, provided you have the serial number and model. Below is a website which may help in looking this information up. (Often times it's set to some generic default like `Admin` & `Password` as the credentials.

    [All Default Router IP Address, Username and Passwords List | Find it Here!](https://routerslogin.com/all/default-router-list)

## Step 3. *Forwarding your ports*
---
The actual forwarding process will vary based on your router, below is the general process and crucial information you will need along the way.

1. Login to your router at the login page we located in the prior steps.
2. Advanced Settings > Port Forwarding
3. Within the port forwarding screen we will see the following fields, all fields have been filled accordingly to our defaults, except for the Computer IP Address, you will replace this with the computer IP address you received in the first steps.
    1. **Computer IP Address:** `192.168.0.25`
    2. **Protocols:** `TCP`, `UDP`
    3. **Starting Port:** `30333`
    4. **Ending Port:** `30333`
    * Note, that if you change from the default `30333` port on your node configuration you will need to forward the respective port used.
4. Once you have entered the needed information click save/apply. (Note: You may have to reboot your router/router depending on the model.)
5. You can then verify if your port has been forwarded via the following website.
    1. [https://www.whatismyip.com/port-scanner/](https://www.whatismyip.com/port-scanner/)
      The testing website can give false negatives, try running the farmer/node as well to test.
