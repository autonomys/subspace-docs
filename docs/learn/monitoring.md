---
title: Monitoring
sidebar_position: 4
description: Server hardware performance monitoring with Grafana and Prometheus. Scraping metrics from Subspace Node.
keywords:
  - Monitoring
  - Grafana
  - Prometheus
  - Exporter
  - Metrics
  - Scraping

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

:::tip 
**It is recommended to install the monitoring stack in the following order:**
* Install metric exporters like Node Exporter on servers intended for monitoring.  
* Install Prometheus to collect data from exporters .
* Setup a Grafana cloud or install Grafana server to query metrics and craft visualizations.  
* Facilitate communication among these components by configuring the firewall to expose necessary ports.
:::

:::note 
For enhanced performance, security, and ease of management, it's advisable to install Prometheus and Grafana on a dedicated (separate) server.
:::

### Prerequisites

**Prometheus Server:**
- **CPU:** a dual-core processor +
- **RAM:** 4GB +
- **Storage:** 50GB +

**Grafana Server:**
- **CPU:** a dual-core processor +
- **RAM:** 2GB +
- **Storage:** 20GB+

---

## 1. Node Exporter

### Creating a User
To create a user:

```bash
sudo useradd --no-create-home --shell /sbin/nologin node_exporter
```

### Installation

Download the latest version binary from the [Prometheus homepage](https://prometheus.io/download):

```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz
tar xvfz node_exporter-*-amd64.tar.gz
```

Copy the binary:

```bash
sudo cp node_exporter*amd64/node_exporter /usr/local/bin
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
rm -R node_exporter*
```

### Node Exporter Service Setup

Open the service file using your preferred text editor:

```bash
sudo vi /etc/systemd/system/node_exporter.service
```

Paste the following configuration into the file:

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
# Recommended arguments for prometheus-node-exporter to support necessary metrics for graphing.

[Install]
WantedBy=multi-user.target
```

When you have made changes to any system unit files, which define how services should behave, reload the systemd manager configuration. The `daemon-reload` command tells systemd to re-read all unit files:

```bash
sudo systemctl daemon-reload			
```

### Service Management Commands

```bash
# Enable automatic start on boot:
sudo systemctl enable node_exporter		

# Start the service:
sudo systemctl start node_exporter		

# Check the status of the service:
sudo systemctl status node_exporter		
```
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
### Installation

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

### `Prometheus.yml` on a Prometheus Server
(incorporating the job for scraping the Subspace node)

To edit the Prometheus configuration file:

```bash
sudo vi /etc/prometheus/prometheus.yml
```

Copy and paste these lines into the file:

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
# Job for scraping metrics from node
  - job_name: "subspace"
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9615']
  - job_name: "FarmerServer"
    static_configs:
      - targets: ["localhost:9100"]

```

Once modifications are done in the `prometheus.yml` file, remember to reload the systemd manager:

```bash
sudo systemctl daemon-reload
```

Ensure to provide names for the `job_name`.

Please remember to delete archives and all extracted files from the home directory after distributing all components:

```bash
cd ~
rm -r prometheus*
```

### Creating a Service for Prometheus

Open the service file using your preferred text editor:

```bash
sudo vi /etc/systemd/system/prometheus.service
```

Add the following configuration to the file:

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

Reload the systemd manager after making any changes in services:

```bash
sudo systemctl daemon-reload			
```

### Service Management Commands

```bash
sudo systemctl start prometheus			
# Start Prometheus service

sudo systemctl status prometheus			
# Check Prometheus service status

sudo systemctl enable prometheus			
# Enable Prometheus service for autostart

sudo systemctl disable prometheus			
# Disable autostart for Prometheus service
```

### UFW Configuration

On the Prometheus Server:

Prometheus server initiates outgoing connections to exporters on monitored machines.
Exporters expose metrics on their own ports (9100 for Node Exporter).
So prometheus server doesn't need to have its 9100 port exposed for incoming connections, as it's pulling data from the exporters.

On the Monitored Servers:
```bash
sudo ufw allow from <prometheus-server-ip> to any proto tcp port 9100 comment 'Exporter-PrometheusServer'
```
## 3. Grafana Server

You have the option to utilize Grafana Cloud instead of managing and scaling your instance of Grafana. [Sign up for a free account](https://grafana.com/auth/sign-up?pg=download&plcmt=box-right), offering free access to 10k metrics, 50GB logs, 50GB traces, and more.

### Installation from APT Repository
:::note 
More detailed guide: [Install Grafana on Debian or Ubuntu](https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/)  
:::


To install your own Grafana server complete the following steps:

```bash
# Install the prerequisite packages:
sudo apt-get install -y apt-transport-https software-properties-common wget

# Import the GPG key:
sudo mkdir -p /etc/apt/keyrings/
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null

# Add a repository for stable releases:
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```
:::note
It's important to only add repositories from sources you trust to avoid potential security risks. Here we add the official Grafana repository.
:::
```bash
# Update the list of available packages:
sudo apt-get update

# Install Grafana OSS (Open Source Software):
sudo apt-get install grafana

# Or install Enterprise version:
sudo apt-get install grafana-enterprise
```

> *The aforementioned commands also execute a post-install script:*
```bash
addgroup --system grafana
adduser --system --home /usr/share/grafana --no-create-home --ingroup grafana --disabled-password --shell /bin/false grafana
```
> They grant necessary permissions for the system user 'grafana' to required folders.

:::note
In some cases during installation, you might encounter the error:  
> cannot access /etc/grafana/*: No such file or directory.  

This might occur due to VM permissions issues in creating, modifying, or viewing files within `/etc/grafana`. A solution is to navigate to the `/var/cache/apt/archives` directory, where `apt` stores downloaded packages before installation (or manually re-download the `.deb` file), and use `dpkg --force flag` on appropriate file.  
For example:
```bash 
dpkg --force-all -i grafana_10.2.2_amd64.deb 
:::

### Service Management Commands

```bash
sudo systemctl start grafana-server			
# Start Grafana-server

sudo systemctl status grafana-server			
# Check Grafana-server status

sudo systemctl enable grafana-server			
# Enable Grafana-server service for autostart

sudo systemctl disable grafana-server			
# Disable autostart
``` 


:::note
A configuration file `grafana.ini` manages various parameters not available through Grafana's web interface. If you made changes to the `grafana.ini` configuration file after installing Grafana, you should run
```bash
sudo systemctl daemon-reload
```
This will ensure that the systemd manager picks up the changes you made to the configuration file. After running this command, you may also need to restart the Grafana service for the changes to take effect.
:::
 
### Entering your Grafana Server
:::note
Opening Grafana to the Internet poses security risks if not properly secured.
:::

**Consider Secure Connection Methods:**
- **HTTPS (TLS/SSL)**: Encrypts communication between the browser and Grafana for secure data transmission.
- **SSH Tunneling**: Creates a secure connection between your local machine and the remote Grafana server, encrypting traffic.
- **VPN**: Establishes a secure, encrypted connection over a public network, providing access to the Grafana server within a private network.
- **Two-Factor Authentication (2FA)**: Adds an extra layer of security by requiring a password and a second form of verification.
- **Firewalls and Network Security**: Configure rules to control access to Grafana from specific IPs or networks for enhanced security.

### Adjusting Grafana Server Settings
In your Grafana instance, open the "three lines" menu and navigate to Connections, select Prometheus, then "Add new data source."

For Prometheus Settings:

- Ensure you're using the same port as in Prometheus (default is 9090).
- Adjust other parameters as needed.

:::note
Ensure your Prometheus service is running to prevent errors.
:::

### Jobs and Variables

In the "Node Exporter Full" Dashboard, variables dynamically change the content of charts, queries, etc., based on selected variable values, like jobs. Refer to the [documentation](https://grafana.com/docs/grafana/latest/dashboards/variables/) for setting up variables.

Use the gear icon to open Dashboard settings.

Based on the given `prometheus.yml` example:
* for Node Exporter Full Dashboard:

navigate to `Home/Dashboard/Node Exporter Full/Variables/Job`:
```bash
Query type = Label values
Label* = job
Regex = /.*server*/
Click `Save dashboard`.
```

This setting filters jobs with the word `server`, making the dashboard available for Node Exporter related jobs.

* For Subspace-dashboard:

Create a variable:

```bash
Query type = Label values
Label* = job
Regex = /.*subspace*/
Remember to click `Save dashboard`.
```

This setting filters jobs with the word `subspace`, linking the dashboard to Subspace node related exporters.

## 4. Scraping Metrics from Subspace Node application
:::note
The following template is only for Subspace node running in Docker!
:::


The Subspace Node provides it's metrics on port 9615 via prometheus libraries.
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

Below is the `Docker-Compose.yml` file, which is consists of two sections. The first one is sourced from the Official Subspace Docker Compose guide, while the second section outlines the containers required for our monitoring stack. Please merge these two sections into a single file.

:::note
If you're using an external Prometheus located on a different server, the setup might exclude the monitoring stack configuration provided in this template.
:::

&#8595;&#8595; The following section should be copied from the [official Subspace Docker Compose
guide](https://docs.subspace.network/docs/farming-&-staking/farming/advanced-cli/cli-install) &#8595;&#8595;

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
&#8593;&#8593; The above section should be copied from the [official Subspace Docker Compose
guide](https://docs.subspace.network/docs/farming-&-staking/farming/advanced-cli/cli-install) &#8593;&#8593;

    
&#8595;&#8595; The below section defines the containers we need for the monitoring stack &#8595;&#8595;
    
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
&#x2191;&#x2191; The above section defines the containers we need for the monitoring stack &#x2191;&#x2191; 

## Alerting
:::note
For more thorough monitoring of critical parameters, consider the Alerting functionality provided by the Grafana server UI.
:::
 
### Refer to the official guides on Grafana site for more detailed instructions:  
[Use images in notifications](https://grafana.com/docs/grafana-cloud/alerting-and-irm/alerting/manage-notifications/images-in-notifications/)  
[Alert rules](https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/)  
[Configure Grafana-managed alert rules](https://grafana.com/docs/grafana/next/alerting/alerting-rules/create-grafana-managed-rule/)  
[Create notification templates](https://grafana.com/docs/grafana-cloud/alerting-and-irm/alerting/manage-notifications/template-notifications/create-notification-templates/)



