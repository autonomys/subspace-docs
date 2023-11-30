---
title: Subspace Node Monitoring
sidebar_position: 10
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

**Prerequisites**

Small cloud server with the minimum spec. 1/2/20 for monitoring is recommended.

## 1. Intsalling Grafana Server.


### Download
```bash
sudo apt-get install -y apt-transport-https software-properties-common wget
sudo mkdir -p /etc/apt/keyrings/
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```
Update the list of available packages:
```
sudo apt-get update
```
Install the latest Enterprise release:
```
sudo apt-get install grafana-enterprise
```
*this also will do this postinstall script*:
> addgroup --system grafana
adduser --system --home /usr/share/grafana --no-create-home --ingroup grafana --disabled-password --shell /bin/false grafana

> Plus is gives permissions for system user grafana to some folders.



### Start Server

```sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl status grafana-server

sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl status grafana-server
```
### Config
```
cd /etc/grafana
sudo vi garafana.ini
http_port=12345			# This is example. Here specify your custom SSH port (if set)
```
### Enter your Grafana Server

Get IP on your cloud server:
`ip -4 addr`  
From home PC:  
```
http://your-cloud-server-IP-address:12345
```

**In "Connections" section specify the same port as you will do in Prometheus.**

### Setup Jobs

```
job:
/subspacenode|subspaceserver/
```
:::note
The Dashboard for scraping metrics from Subspace Node is available on this [URL](https://github.com/counterpointsoftware/subspace-monitoring/blob/main/grafana/provisioning/dashboards/subspace-dashboard-counterpoint.json).  
To add it to your Grafana server just copy-paste the content.
:::
:::note
For general server monitoring you can DL popular dashboard for Nodeexporter, named: Node Exporter full (most rated)
:::


-----------------------------------------------------------------------------------------------------------------------------
## 2. Installing Prometheus

Command-line flags configure immutable system parameters (such as storage locations, amount of data to keep on disk and in memory, etc.) 
Configuration file (yml) defines everything related to scraping jobs and their instances, as well as which rule file to load. Canonically should be in `/etc/prometheus`  
To view all available command-line flags, run `./prometheus -h`

The following commands must be ran as root.

### Create Group and User
```
sudo addgroup --system prometheus
sudo useradd -M -r -g prometheus -s /sbin/nologin prometheus
```
> > -M: do not create user's home directory;	-r: create a system user;	-s /sbin/nologin: set user's shell as 'nologin';	-g prometheus - add to group 'prometheus'

Prepare directories for settings and data:

```bash
sudo mkdir /etc/prometheus
sudo mkdir /var/lib/prometheus
sudo chown prometheus:prometheus /etc/prometheus
sudo chown prometheus:prometheus /var/lib/prometheus
```
### Download  
From [Prometheus homepage](https://prometheus.io/download) download the last versions of the binaries into home directory:
```bash
cd ~
wget -O prometheus https://prometheus.io/download/........
wget -O promtool https://prometheus.io/download/........
```
Extract archive:
```bash
tar xvfz prometheus-*.tar.gz
```
Copy binaries to `/usr/local/bin/`:
```bash
sudo cp prometheus /usr/local/bin/
sudo cp promtool /usr/local/bin/
```
Set permissions:
```bash
sudo chown prometheus:prometheus /usr/local/bin/prometheus
sudo chown prometheus:prometheus /usr/local/bin/promtool
```

Copy the consoles and console_libraries directories to `/etc/prometheus`.
```bash
sudo cp -r prometheus-2.0.0.linux-amd64/consoles /etc/prometheus			#folder name can vary
sudo cp -r prometheus-2.0.0.linux-amd64/console_libraries /etc/prometheus
```
Set permissions:
	sudo chown -R prometheus:prometheus /etc/prometheus/consoles
	sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries

Settings (`prometheus.yml`) will be in `/etc/prometheus/` :
```bash
sudo nano /etc/prometheus/prometheus.yml
sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
```

Remember to delete archives and all extracted files from home directory after distributing all components.

### Create a Service:
```
sudo nano /etc/systemd/system/prometheus.service
```
```
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

### Manage Service Commands

```
sudo systemctl daemon-reload			# run everytime any service has been changed
sudo systemctl start prometheus
sudo systemctl status prometheus

sudo systemctl enable prometheus		#autostart
sudo systemctl disable prometheus
```

### Prometheus.yml  
(Including the job for scraping Subspace node)

Copy this lines into the file:
```
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "subspace"
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9615']
  - job_name: "FarmerServer"
    static_configs:
      - targets: ["localhost:9100"]
  - job_name: 'any-other-your-job'
    static_configs:
      - targets: ['123.123.123.123:12345']

```
:::note
Remember to allow connections between your cloud server and monitored servers at UFW on the appropriate ports. 
:::
---------------------------------------------------------------------------------------------------------------------------------------------

## 3. Node Exporter.

### Creat a User:
```
sudo useradd -M -r -g prometheus -s /sbin/nologin node_exporter
```
### installing

From [Prometheus homepage](https://prometheus.io/download) download latest version of binary
Extract:
```bash
tar xvfz node_exporter-*-amd64.tar.gz
```

Copy binary:
```bash
cd node_exporter-*-amd64
sudo cp node_exporter-*md64/node_exporter /usr/local/bin
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
```


### NodeExporter Service

```bash
sudo nano /etc/systemd/system/node_exporter.service
```
Copy-paste this into the file:
```
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
```

### Service Management
```
sudo systemctl daemon-reload
sudo systemctl enable node_exporter

sudo systemctl start node_exporter
sudo systemctl status node_exporter
```
### Add NodeExporter to prometheus.yml

```bash
sudo nano /etc/prometheus/prometheus.yml
```
To the end of the file add this section:
```
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']
```
We already did it , and the job named "FarmerServer"

------------------------------------------------------

## 4. Scraping Metrics from Subspace Node

The Subspace Node designed so that it provides it's metrics on port 9615.
The following yaml file is designed to scrape Subspace Node metrics when the Node is ran in Docker.

To use this: 

1) complete upper part of docker-compose.yml  and add:
```
    "--prometheus-external"
    "--prometheus-port", "9615"
```
and
```
            expose:
              - "9615:9615"
```
2) complete lower part (grafana, prometheus and node exporter)

### Docker-Compose.yml Template for Monitoring Subspace Node  
 (the template is dated Sept. 25)
		
    > 
    version: "3.7"

    services:

    # ********************************************************************************
    # The following section should be copied from the official Subspace Docker Compose
    # guide at https://github.com/subspace/subspace/blob/main/docs/farming.md
    #*********************************************************************************

    node:
        container_name: subspace-node
        # Replace `snapshot-DATE` with latest release (like `snapshot-2022-apr-29`)
        # For running on Aarch64 add `-aarch64` after `DATE`
        image: ghcr.io/subspace/node:gemini-3f-2023-sep-25
        volumes:
    # Instead of specifying volume (which will store data in `/var/lib/docker`), you can
    # alternatively specify path to the directory where files will be stored, just make
    # sure everyone is allowed to write there
        - /home/subspace/subspace/node-data:/var/subspace:rw
    #      - /path/to/subspace-node:/var/subspace:rw
        ports:
    # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all
    # occurrences of `30333` or `30433` in this file with another value
        - "0.0.0.0:30333:30333"
        - "0.0.0.0:30433:30433"
        expose:
        - "9615:9615"
        restart: unless-stopped
        command: [
        "--chain", "gemini-3f",
        "--base-path", "/var/subspace",
        "--execution", "wasm",
        "--blocks-pruning", "256",
        "--state-pruning", "archive",
        "--port", "30333",
        "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",
        "--rpc-cors", "all",
        "--rpc-methods", "unsafe",
        "--rpc-external",
        "--no-private-ipv4",
        "--validator",
    # Expose Prometheus exporter on all interfaces.
    # Default is local.
        "--prometheus-external",
    # Specify Prometheus exporter.
        "--prometheus-port", "9615",
    # Replace `INSERT_YOUR_ID` with your node ID (will be shown in telemetry)
        "--name", "st7uhHG"
        ]
        healthcheck:
        timeout: 5s
    # If node setup takes longer then expected, you want to increase `interval` and `retries` number.
        interval: 30s
        retries: 60

    farmer:
        container_name: subspace-farmer
        depends_on:
        node:
            condition: service_healthy
        # For running on Aarch64 add `-aarch64` after `DATE`
        image: ghcr.io/subspace/farmer:gemini-3f-2023-sep-25
        volumes:
    # Instead of specifying volume (which will store data in `/var/lib/docker`), you can
    # alternatively specify path to the directory where files will be stored, just make
    # sure everyone is allowed to write there
        - /home/subspace/subspace/farmer-data:/var/subspace:rw
    #      - /path/to/subspace-farmer:/var/subspace:rw

    # Un-comment following 2 lines to unlock farmer's RPC
        ports:
    # Un-comment following line to unlock farmer's RPC
    #      - "127.0.0.1:9955:9955"
    # If port 30533 is already occupied by something else, replace all
    # occurrences of `30533` in this file with another value
        - "0.0.0.0:30533:30533"
        restart: unless-stopped
        command: [
        "farm",
        "--node-rpc-url", "ws://node:9944",
        "--listen-on", "/ip4/0.0.0.0/tcp/30533",
    # Replace `WALLET_ADDRESS` with your Polkadot.js wallet address
        "--reward-address", "st7uhHGWgj6w5RnGc4TmcguRtK2TE2gMLv5Sp4RX3aQrUTSRG",
    # Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)
        "path=/var/subspace,size=600G"
        ]

    # ********************************************************************************
    # The above section should be copied from the official Subspace Docker Compose
    # guide at https://github.com/subspace/subspace/blob/main/docs/farming.md
    #*********************************************************************************

    # ********************************************************************************
    # The below section defines the containers we need for the monitoring stack
    #*********************************************************************************

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

    # ********************************************************************************
    # The above section defines the containers we need for the monitoring stack
    #*********************************************************************************

    volumes:
    # ********************************************************************************
    # These first two volumes are required by the default setup from the official
    # guide at https://github.com/subspace/subspace/blob/main/docs/farming.md
    #*********************************************************************************
    node-data:
    farmer-data:
    # ********************************************************************************
    # These next volumes are required by the monitoring solution
    #*********************************************************************************
    grafana_data:
    prometheus_data:


-------------------------------------------------------------------------------------------------------------------------------------------------

### Example of Docker-compose.yml file for Monitoring  
(from Separate cloud Grafana Server)
		
		
In this example Grafana use DataSource with Prometheus port: 9615

```
services:
  node:
    image: ghcr.io/subspace/node:gemini-3g-2023-nov-21
    volumes:
      - /home/subspace/subspace/node-data:/var/subspace:rw
    ports:
      - "0.0.0.0:30333:30333"
      - "0.0.0.0:30433:30433"
    restart: unless-stopped
    command:
      [
        "--chain", "gemini-3g",
        "--base-path", "/var/subspace",
        "--execution", "wasm",
        "--blocks-pruning", "256",
        "--state-pruning", "archive",
        "--port", "30333",
        "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",
        "--rpc-cors", "all",
        "--rpc-methods", "unsafe",
        "--rpc-external",
        "--validator",
        "--name", "my-node-name",
        "--prometheus-external",
        "--prometheus-port", "9615"
      ]
    healthcheck:
      timeout: 5s
      interval: 30s
      retries: 60
    expose:
      - "9615:9615"

  farmer:
    depends_on:
      node:
        condition: service_healthy
    image: ghcr.io/subspace/farmer:gemini-3g-2023-nov-21
    volumes:
      - /home/subspace/subspace/farmer-data:/var/subspace:rw
    ports:
      - "0.0.0.0:30533:30533"
    restart: unless-stopped
    command:
      [
        "farm",
        "--node-rpc-url", "ws://node:9944",
        "--listen-on", "/ip4/0.0.0.0/tcp/30533",
        "--reward-address", "y-o-u-r----w-a-l-l-e-t----a-d-d-r-e-s-s",
        "path=/var/subspace,size=600G"
      ]

  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    restart: unless-stopped
    volumes:
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
      - ./prometheus_data:/prometheus
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
```
