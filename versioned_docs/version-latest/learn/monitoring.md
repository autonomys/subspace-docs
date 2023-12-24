---
title: Subspace Node and Server Monitoring
sidebar_position: 4
description: Monitoring server with Grafana and Prometheus. Scraping metrics from Subspace Node.
keywords:
  - Monitoring
  - Grafana
  - Prometheus
  - Exporter
  - Metrics
  - Docker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';


-----------

### Scheme

1. Start with the installation and setup of exporters (for example, Node Exporter) on the servers you want to monitor. Additionally, sometimes Prometheus client libraries are embedded into application code to expose metrics to Prometheus at `<host>/metrics`, enabling monitoring of that specific application (Subspace node has it!). On these servers, you don't need to modify anything in the exporter configuration files. You can leave their configurations as default.

2. Install and configure Prometheus to collect data from Node Exporter: configure its settings in the `prometheus.yml` file, typically located in `/etc/prometheus`. In this file, you will specify the addresses of remote servers where the exporters are running as scraping targets for Prometheus to gather metrics. Exporters expose metrics via HTTP, and Prometheus collects these metrics by making HTTP requests to the `/metrics` endpoint of these exporters. This communication typically occurs over port 9090 by default. 

3. Install and set up a Grafana server or any other tool that interacts with Prometheus for querying metrics and creating visualizations. This process typically involves establishing connections to databases containing metrics, configuring dashboards, graphs, variables, and jobs to effectively manage the visual representation of data.

It's generally advisable to install Prometheus and Grafana on a separate server dedicated to monitoring and visualizing data. This approach ensures improved performance, security, and simplified management.

4. Add ports to the firewall for all of these components to communicate.

On the server where Prometheus is installed:
In the `prometheus.yml` under the `scrape_configs` section, you'll need to add a block of code like in this example from each monitored server:
```
  - job_name: 'server-farmer-1'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']

  - job_name: 'server-farmer-2'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']
```
etc ..

The port for communication between Prometheus and Grafana is specified in the `prometheus.yml` file under either the "global" or "global_config" section (default port is 9090) .

The port on which Prometheus listens for metrics from the observed machine is defined in the prometheus.yml file under the "scrape_config" section as 'target_port'. For Node Exporter it is `9100`, and for Subspace Node built-in Prometheus client libraries this is `9615`


### Prerequisites
For a central Prometheus server and Grafana, the minimum specifications can vary based on factors like the number of monitored systems, the frequency of metrics collected, and the desired retention period. However, here are some general recommendations for minimum specifications:

Central Prometheus Server:
    CPU: Dual-core or higher
    RAM: 4GB or more
    Storage: Depending on the retention period and the volume of data collected, consider a minimum of 50GB to start. This could increase significantly based on the data retention policies.

Grafana Server:
    CPU: Dual-core or higher
    RAM: 2GB or more
    Storage: 20GB for Grafana installation and to store dashboard configurations and additional data. The actual storage depends on the number and complexity of dashboards and visualizations.


---------

## 1. Node Exporter

### Creating a User
```bash
sudo useradd --no-create-home --shell /sbin/nologin node_exporter
```
### Installing

From [Prometheus homepage](https://prometheus.io/download) download archived latest version binary:
```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz
tar xvfz node_exporter-*-amd64.tar.gz
```

Copy binary:
```bash
sudo cp node_exporter*amd64/node_exporter /usr/local/bin
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
rm -R node_exporter*
```

### NodeExporter Service

```bash
sudo vi /etc/systemd/system/node_exporter.service
```
Copy-paste this into the file:
```bash
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter --collector.systemd --collector.processes
#arguments recommended for prometheus-node-exporter ‘–collector.systemd –collector.processes’ because the graph uses some of their metrics

[Install]
WantedBy=multi-user.target
```

Run this everytime any service has been changed:
```bash
sudo systemctl daemon-reload			
```

-------

Service Management Commands:

```bash
#autostart
sudo systemctl enable node_exporter		
#start
sudo systemctl start node_exporter		
#status
sudo systemctl status node_exporter		
```
------

## 2. Prometheus

### Creating Group and User
This creates user prometheus along with prometheus group with no home directory and without a shell:
```bash
sudo addgroup --system prometheus
sudo useradd --no-create-home --shell /sbin/nologin prometheus
```

Prepare directories for settings and data:

```bash
sudo mkdir /etc/prometheus
sudo mkdir /var/lib/prometheus
sudo chown prometheus:prometheus /etc/prometheus
sudo chown prometheus:prometheus /var/lib/prometheus
```
### Download
From [Prometheus homepage](https://prometheus.io/download) download the last versions of the 'prometheus' and 'promtool' binaries into home directory:
```bash
cd ~
curl -LO https://github.com/prometheus/prometheus/releases/download/v2.48.1/prometheus-2.48.1.linux-amd64.tar.gz
```
Extract archive:
```bash
tar xvf prometheus-*.linux-amd64.tar.gz
```
Copy binaries to `/usr/local/bin/`:

```bash
cd prometheus*amd64
sudo cp prometheus /usr/local/bin/
sudo cp promtool /usr/local/bin/
```
Set permissions:
```bash
sudo chown prometheus:prometheus /usr/local/bin/prometheus
sudo chown prometheus:prometheus /usr/local/bin/promtool
```
Copy the `consoles` and `console_libraries` directories to `/etc/prometheus` (folder names can vary)
```bash
sudo cp -r consoles /etc/prometheus
sudo cp -r console_libraries /etc/prometheus
```
Set permissions:
```bash
sudo chown -R prometheus:prometheus /etc/prometheus/consoles
sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
```

Copy `prometheus.yml` to `/etc/prometheus/`:
```bash
sudo cp prometheus.yml /etc/prometheus/
sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
```
### Prometheus.yml on a Prometheus Server
(with the job for scraping Subspace node added)

```bash
sudo vi /etc/prometheus/prometheus.yml
```
Copy these lines to the file:

```bash
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'farmer-1'
    scrape_interval: 5s
    static_configs:
      - targets: ['<farmer-1-ip>:xxxx']
  - job_name: 'farmer-2'
    scrape_interval: 5s
    static_configs:
      - targets: ['<farmer-2-ip>:xxxx']
  - job_name: 'farmer-3'
    scrape_interval: 5s
    static_configs:
      - targets: ['<farmer-3-ip>:xxxx']
# job for scraping metrics from node
  - job_name: "subspace"
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9615']
  - job_name: "FarmerServer"
    static_configs:
      - targets: ["localhost:9100"]

```
After making changes to the `prometheus.yml` file, do also reload the service:
```bash
sudo systemctl daemon-reload
```

Here you need to come up with names for `job_name`


Remember to delete archives and all extracted files from home directory after distributing all components.
cd ~
rm -r prometheus*

### Creating a Service
```bash
sudo vi /etc/systemd/system/prometheus.service
```
```bash
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
    --config.file /etc/prometheus/prometheus.yml \
    --storage.tsdb.path /var/lib/prometheus/ \
    --web.console.templates=/etc/prometheus/consoles \
    --web.console.libraries=/etc/prometheus/console_libraries

[Install]
WantedBy=multi-user.target
```

------
```bash
sudo systemctl daemon-reload			
# first of all run this everytime any service has been changed
```
------

### UFW

On Prometheus server:
```bash
sudo ufw allow from <farmer-server-1-ip> to any proto tcp port 9100 comment 'Exproter-farmer-1'
sudo ufw allow from <farmer-server-2-ip> to any proto tcp port 9100 comment 'Exproter-farmer-2' 
```
etc.

On monitored servers:
```bash
sudo ufw allow from <prometheus-server-ip> to any proto tcp port 9100 comment 'Exproter-PrometheusServer'
```
-------

Service Management Commands:

```bash
sudo systemctl start prometheus			
#start
sudo systemctl status prometheus

sudo systemctl enable prometheus			
#autostart
sudo systemctl disable prometheus
```

------------------------------------------------------------------------------------------------------------------------
## 3. Grafana Server


You can use Grafana Cloud instead of installation, maintaining, and scaling your own instance of Grafana. [Create a free account to get started](https://grafana.com/auth/sign-up?pg=download&plcmt=box-right), which includes free forever access to 10k metrics, 50GB logs, 50GB traces, & more.

How to install latest Open Source Grafana release from APT repository:

:::note
Enterprise: This is the recommended version. It is functionally identical to the open source version, but includes features you can unlock with a license, if you so choose.
Open Source: This version is functionally identical to the Enterprise version, but you will need to download the Enterprise version if you want Enterprise features.
:::
### Download
```bash
sudo apt-get install -y apt-transport-https software-properties-common wget
sudo mkdir -p /etc/apt/keyrings/
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
sudo apt-get update
sudo apt-get install grafana
# or `sudo apt-get install grafana-enterprise` for Enterprise version.
```
> *This commands will also run post-install script*:
```bash
addgroup --system grafana
adduser --system --home /usr/share/grafana --no-create-home --ingroup grafana --disabled-password --shell /bin/false grafana
```
> and gives permissions for system user grafana to needed folders.

:::note
During installation in some cases you may encounter the error "cannot access /etc/grafana/*: No such file or directory". This is because of VM doesn’t had the permissions to create the missing configuration files, and the solution is to proceed to  /var/cache/apt/archives directory - this is the default location where apt stores downloaded packages before installing them - or to download the .deb file manually and use `--force flag of dpkg`. For example: dpkg --force-all -i grafana_10.2.2_amd64.deb
:::
### Starting Server

```bash 
sudo systemctl daemon-reload
```
```bash
sudo systemctl start grafana-server
sudo systemctl status grafana-server
```
### Configuration
There is configuration file for configuring different parameters including those not provided via Grafana's web interface.
```bash
cd /etc/grafana
sudo vi grafana.ini
```
Here are some settings that can be adjusted in grafana.ini:

> *Server Settings: Port where Grafana operates or the IP address it binds to.  *
A*uthentication and Authorization Settings: User settings, email authentication, LDAP binding, or OAuth configurations.  
Database: Settings to connect to a database like MySQL or PostgreSQL. * 
*Caching and Performance: Cache settings to improve Grafana's performance. * 
*SSL and HTTPS: Configurations for SSL operation, certificate settings, and keys.  *

The grafana server runs on port 3000 by default, and you can change this port as you see fit. But we will connect to Grafana UI via SSH tunnel to avoid opening any additional port on our server for the best security.

### Entering your Grafana Server
:::note
Opening Grafana web server for access from the Internet poses a security risk if you do not take appropriate security measures.
:::
> *There are methods of securely connecting to the Grafana server:  *
*HTTPS (TLS/SSL) : Enabling HTTPS ensures encrypted communication between the browser and the Grafana server, securing data transmission.  *
*SSH Tunneling: Creating an SSH tunnel allows a secure connection between your local machine and the remote Grafana server. It encrypts traffic between your machine and the server.  
VPN: Using a Virtual Private Network (VPN) establishes a secure, encrypted connection over a public network, enabling access to the Grafana server within a private network.  *
*Two-Factor Authentication (2FA) : Implementing 2FA adds an extra layer of security by requiring not only a password but also a second form of verification.  *
*Firewalls and Network Security: Configuring firewalls and network security rules to control access to the Grafana server from specific IPs or networks enhances security.*

Here we will look at the most secure method of interacting with our Grafana server - SSH tunnel. It allows connection only with ssh keys!

### Creating SSH Tunnel
**It is assumed that you already have SSH access to your server configured.**

Get IP on your server:
```bash
ip -4 addr
```

From your home PC sent the command to forward all data from port 3000 on your remote server to port 3000 on your local machine:
```bash
ssh -L 3000:localhost:3000 -p xxxx username@xx.xx.xx.xx -N -f
```
Where 
`-p xxxxx` is a custom SSH port to connect to your server; 
`-N` tells SSH not to start the shell after a connection is established. Useful for tunneling or port forwarding, without having to interact with the remote shell.
`-f` tells SSH to run the connection in the background.
**But you can of course assign any other port Grafana will run it's server on and use it in your local machine browser accordingly.**

After that you can open you grafana server as if it's hosting on your home PC. Type in browser:
```
http://localhost:3000
```
Enter default login and password: `admin` `admin` and set up your own ones.

### Breaking SSH Tunnel
To break the tunnel
```bash
ps aux | grep 'ssh -L'
#look for ssh tunnel process PID 
kill PID
```
--------

### Adjusting Grafana Server Settings
In your Grafana instance open the "three lines" menu.
Go to Connections, choose Prometheus, click "Add new data source".
Than in Prometheus Settings:
In "Connections" section make sure using the same port as you have in Prometheus. Default is 9090. Adjust other parametres as desired.
:::note
your Prometheus service must be running (wherever it is) so that there is no error in Grafana Connections section.
:::
Go to Menu: Dashboards/New/Import..

To add a dashboard for whole server monitoring you can import most rated dashboard: ["Node Exporter full"](https://grafana.com/grafana/dashboards/1860-node-exporter-full/) by its ID 1860. 

The Dashboard for scraping Subspace Node metrics is available on [this URL](https://github.com/counterpointsoftware/subspace-monitoring/blob/main/grafana/provisioning/dashboards/subspace-dashboard-counterpoint.json). To add it to your Grafana just copy-paste the content.


### Jobs and Variables
It is important and useful to know how to manage jobs in Grafana. As it is said in `Prometheus.yml` notes, " The job name is added as a label `job=<job_name>` to any timeseries scraped from this config." 

In Grafana's "Node Exporter Full" Dashboard, variables are used to dynamically change the content of charts, queries, and other components depending on the selected variable values, for example jobs. Please read this [documentation](https://grafana.com/docs/grafana/latest/dashboards/variables/) for learning variables setup.

Use "gear" pictogram to open Dashboard settings.

According to the example `prometheus.yml` file given in this guide with `job_name` equal to `subspace` and `server` respectively, the `Variables` setting will be as follows:
for Node Exporter Full:
In `Home/Dashboard/Node Exporter Full/Variables/Job` there are already almost everything you need, just make sure you have (For Node-Exporter-Full -Dashboard):
```bash
Query type = Label values
Label* = job
Regex = /.*server*/
Click `Save dashboard` btn.
```

This setting filters out all jobs containing the word `server` in the `prometheus.yml` file, so that this dashboard will only be available for jobs related to the metrics collected from the Node Exporters.

For the built-in exporter in Subspace-node (For Subspace-dashboard):
```bash
Click `create variables`...
Query type = Label values
Label* = job
Regex = /.*subspace*/
Remember to click `Save dashboard` btn.
```

This setting will filter out all jobs containing the word `subspace` in the `prometheus.yml` file, so that this dashboard will only be available for jobs related to Subspace nodes metrics given by Subspace-node built-in exporters.

------------------------------------------------------

## 4. Scraping Metrics from Subspace Node application


The Subspace Node provides it's metrics on port 9615 via prometheus client libraries.
The following `yaml` file is designed to scrape Subspace Node metrics when the Node is run in Docker.

We add following lines to the end of node service section in `Docker-Compose.yml` file:
```bash
"--prometheus-external"
"--prometheus-port", "9615"
```
and
```bash
expose:
- "9615:9615"
```

### The `Docker-Compose.yml` for Monitoring the Subspace Node


> The following section should be copied from the [official Subspace Docker Compose
guide](https://docs.subspace.network/docs/farming-&-staking/farming/advanced-cli/cli-install)

```bash
version: "3.7"
services:
  node:
    image: ghcr.io/subspace/node:gemini-3g-2023-dec-22
    volumes:
      - node-data:/var/subspace:rw
    ports:
      - "0.0.0.0:30333:30333/udp"
      - "0.0.0.0:30333:30333/tcp"
      - "0.0.0.0:30433:30433/udp"
      - "0.0.0.0:30433:30433/tcp"
    restart: unless-stopped
    command:
      [
        "--chain", "gemini-3g",
        "--base-path", "/var/subspace",
        "--blocks-pruning", "256",
        "--state-pruning", "archive-canonical",
        "--port", "30333",
        "--dsn-listen-on", "/ip4/0.0.0.0/udp/30433/quic-v1",
        "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",
        "--rpc-cors", "all",
        "--rpc-methods", "unsafe",
        "--rpc-external",
        "--no-private-ipv4",
        "--validator",
        "--name", "subspace"
#Prometheus port:
        "--prometheus-external"
        "--prometheus-port", "9615",

      ]
    healthcheck:
      timeout: 5s
      interval: 30s
      retries: 60
#This maps port 9615 on the host where Prometheus is running to the same port 9615 within Docker container.
    expose:
      - "9615:9615"
  
  farmer:
    depends_on:
      node:
        condition: service_healthy
    image: ghcr.io/subspace/farmer:gemini-3g-2023-dec-22
    volumes:
      - farmer-data:/var/subspace:rw
    ports:
      - "0.0.0.0:30533:30533/udp"
      - "0.0.0.0:30533:30533/tcp"
    restart: unless-stopped
    command:
      [
        "farm",
        "--node-rpc-url", "ws://node:9944",
        "--listen-on", "/ip4/0.0.0.0/udp/30533/quic-v1",
        "--listen-on", "/ip4/0.0.0.0/tcp/30533",
        "--reward-address", "st7GBwATPqtBkK5y4uXbV52euszPpFPw7wmkF8FywEqJaf8uP",
        "path=/var/subspace,size=100G"
      ]
volumes:
  node-data:
  farmer-data:            
```
> The above section should be copied from the [official Subspace Docker Compose
guide](https://docs.subspace.network/docs/farming-&-staking/farming/advanced-cli/cli-install)
    
> The below section defines the containers we need for the monitoring stack
    
```bash
    grafana:
        image: grafana/grafana:latest
        container_name: grafana
        volumes:
        - grafana_data:/var/lib/grafana
        - ./grafana/provisioning:/etc/grafana/provisioning
        environment:
        - GF_SECURITY_ADMIN_USER=ADMIN
        - GF_SECURITY_ADMIN_PASSWORD=5u65pac3
        - GF_USERS_ALLOW_SIGN_UP=false
        restart: unless-stopped
        ports:
        - 3000:3000

    prometheus:
        image: prom/prometheus:latest
        container_name: prometheus
        restart: unless-stopped
    volumes:
        - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
        - prometheus_data:/prometheus
        command:
        - '--config.file=/etc/prometheus/prometheus.yml'
        - '--storage.tsdb.path=/prometheus'
        - '--web.console.libraries=/etc/prometheus/console_libraries'
        - '--web.console.templates=/etc/prometheus/consoles'
        - '--web.enable-lifecycle'
        expose:
        - 9090:9090

    node-exporter:
        image: prom/node-exporter:latest
        container_name: node-exporter
        restart: unless-stopped
        volumes:
        - /proc:/host/proc:ro
        - /sys:/host/sys:ro
        - /:/rootfs:ro
        command:
        - '--path.procfs=/host/proc'
        - '--path.rootfs=/rootfs'
        - '--path.sysfs=/host/sys'
        - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)'
        expose:
        - 9100
    # The above section defines the containers we need for the monitoring stack
    volumes:
    # These first two volumes are required by the default setup from the official guide
    node-data:
    farmer-data:
    # These next volumes are required by the monitoring solution
    grafana_data:
    prometheus_data:
```
End of the file

------------

If you do use external Prometheus, that is on a different server, the bottom part - monitoring the stack - will not be needed.