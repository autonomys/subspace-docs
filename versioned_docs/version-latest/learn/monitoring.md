---
title: Monitoring
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

### Setting Up Monitoring Infrastructure

**Infrastructure Setup:**

Commence by installing and configuring exporters, such as Node Exporter, on the servers earmarked for monitoring. Occasionally, Prometheus client libraries are integrated into application code to reveal metrics at `<host>/metrics`, facilitating the monitoring of specific applications (e.g., Subspace node leverages this functionality). No alterations are necessary in the exporter configuration files on these servers; the default configurations suffice.

Configure Prometheus to collect data from Node Exporter by specifying settings in the `prometheus.yml` file, often found in `/etc/prometheus`. This file defines remote server addresses where exporters operate as scraping targets for Prometheus to retrieve metrics. Exporters make metrics available via HTTP, accessible through HTTP requests to the `/metrics` endpoint. Typically, this communication occurs over port 9090 by default.

Set up a Grafana server or any tool interacting with Prometheus to query metrics and craft visualizations. This process encompasses establishing connections to databases housing metrics, configuring dashboards, graphs, variables, and jobs to aptly represent the data.

For enhanced performance, security, and ease of management, it's advisable to install Prometheus and Grafana on a dedicated server for monitoring purposes.

**Configuration Steps:**

Facilitate communication among these components by adding ports to the firewall.

On the server hosting Prometheus, modify the `prometheus.yml` file under the `scrape_configs` section. Below is an example block for each monitored server:

```yaml
- job_name: 'server-farmer-1'
  scrape_interval: 5s
  static_configs:
    - targets: ['localhost:9100']

- job_name: 'server-farmer-2'
  scrape_interval: 5s
  static_configs:
    - targets: ['localhost:9100']
```

Configure the port for communication between Prometheus and Grafana in the `prometheus.yml` file under either the "global" or "global_config" section (default is port 9090).

Define the port on which Prometheus listens for metrics from the observed machines in the `prometheus.yml` file under the "scrape_config" section as `target_port`. For Node Exporter, it's 9100, and for Subspace Node using built-in Prometheus client libraries, it is 9615.


### Prerequisites for Central Prometheus Server and Grafana

**Central Prometheus Server:**
- **CPU:** A dual-core processor or higher is recommended.
- **RAM:** Aim for a minimum of 4GB or more to handle data effectively.
- **Storage:** Consider at least 50GB as a starting point, with flexibility based on data retention policies. The actual storage requirement will vary depending on the retention period and data volume collected.

**Grafana Server:**
- **CPU:** Similar to the Prometheus server, a dual-core processor or higher is advised.
- **RAM:** Allocate a minimum of 2GB or more to support Grafana's functionalities.
- **Storage:** Plan for 20GB to accommodate Grafana's installation and storage of dashboard configurations and additional data. The exact storage demand depends on the number and complexity of dashboards and visualizations.

These recommendations provide a foundation; however, actual resource needs might scale according to the number of monitored systems, data collection frequency, and retention duration.

---
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

---

Here's a revised version:

---

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

After making changes to any service, reload the daemon:

```bash
sudo systemctl daemon-reload			
```

### Service Management Commands:

Enable automatic start on boot:

```bash
sudo systemctl enable node_exporter		
```

Start the service:

```bash
sudo systemctl start node_exporter		
```

Check the status of the service:

```bash
sudo systemctl status node_exporter		
```

---

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


---

### Prometheus.yml on a Prometheus Server
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

Once modifications are done in the `prometheus.yml` file, remember to reload the service:

```bash
sudo systemctl daemon-reload
```

Ensure to provide names for the `job_name`.

Please remember to delete archives and all extracted files from the home directory after distributing all components:

```bash
cd ~
rm -r prometheus*
```

---

Here's a revised version:

---

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

Remember to reload the daemon after making any service changes:

```bash
sudo systemctl daemon-reload			
# Run this whenever any service configuration changes
```

---
Here's a revised version for better readability:

---

### UFW Configuration

On the Prometheus Server:
```bash
sudo ufw allow from <farmer-server-1-ip> to any proto tcp port 9100 comment 'Exporter-farmer-1'
sudo ufw allow from <farmer-server-2-ip> to any proto tcp port 9100 comment 'Exporter-farmer-2' 
```
Repeat this configuration for other farmer servers as necessary.

On the Monitored Servers:
```bash
sudo ufw allow from <prometheus-server-ip> to any proto tcp port 9100 comment 'Exporter-PrometheusServer'
```

### Service Management Commands:

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

---

Here's a revised version for improved readability:

---

## 3. Grafana Server

You have the option to utilize Grafana Cloud instead of managing and scaling your instance of Grafana. [Sign up for a free account](https://grafana.com/auth/sign-up?pg=download&plcmt=box-right), offering free access to 10k metrics, 50GB logs, 50GB traces, and more.

### Installation Guide - Latest Open Source Grafana Release (APT repository)

:::note
Choose between:
- Enterprise: Identical to the open-source version but offers additional features unlockable with a license.
- Open Source: Functionally identical to the Enterprise version without enterprise-specific features.
:::

### Steps to Download

```bash
sudo apt-get install -y apt-transport-https software-properties-common wget
sudo mkdir -p /etc/apt/keyrings/
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
sudo apt-get update
sudo apt-get install grafana
# Alternatively, use `sudo apt-get install grafana-enterprise` for the Enterprise version.
```

> *These commands execute a post-install script*:
```bash
addgroup --system grafana
adduser --system --home /usr/share/grafana --no-create-home --ingroup grafana --disabled-password --shell /bin/false grafana
```
> They grant necessary permissions for the system user 'grafana' to required folders.

:::note
In some cases during installation, you might encounter the error:  
> cannot access /etc/grafana/*: No such file or directory.  

This might occur due to VM permissions issues in creating missing configuration files. A solution is to navigate to the `/var/cache/apt/archives` directory—where apt stores downloaded packages before installation—or manually download the `.deb` file and use `dpkg --force flag`. For example: `dpkg --force-all -i grafana_10.2.2_amd64.deb`
:::

---

### Starting Server

```bash 
sudo systemctl daemon-reload
```
```bash
sudo systemctl start grafana-server
sudo systemctl status grafana-server
```

### Configuration
A configuration file, `grafana.ini`, manages various parameters not available through Grafana's web interface.

```bash
cd /etc/grafana
sudo vi grafana.ini
```

Adjust settings in `grafana.ini` for:

- **Server Settings**: Define the port or IP Grafana operates on.
- **Authentication and Authorization Settings**: Configure user settings, email authentication, LDAP binding, or OAuth configurations.
- **Database**: Connect to databases like MySQL or PostgreSQL.
- **Caching and Performance**: Improve Grafana's performance with cache settings.
- **SSL and HTTPS**: Set up SSL operation, certificate settings, and keys.

By default, Grafana runs on port 3000, but for secure access, we'll use an SSH tunnel to avoid opening additional ports.

### Entering your Grafana Server
:::note
Opening Grafana to the Internet poses security risks if not properly secured.
:::

### Secure Connection Methods:
- **HTTPS (TLS/SSL)**: Encrypts communication between the browser and Grafana for secure data transmission.
- **SSH Tunneling**: Creates a secure connection between your local machine and the remote Grafana server, encrypting traffic.
- **VPN**: Establishes a secure, encrypted connection over a public network, providing access to the Grafana server within a private network.
- **Two-Factor Authentication (2FA)**: Adds an extra layer of security by requiring a password and a second form of verification.
- **Firewalls and Network Security**: Configure rules to control access to Grafana from specific IPs or networks for enhanced security.

An SSH tunnel stands out as one of the most secure methods for interacting with a Grafana server, primarily due to its reliance on SSH keys for connection.

### SSH Tunnel Setup
Ensure SSH access to your server is configured. Get the server's IP:

```bash
ip -4 addr
```

Set up an SSH tunnel from your home PC to the remote server:

```bash
ssh -L 3000:localhost:3000 -p xxxx username@xx.xx.xx.xx -N -f
```
Replace `-p xxxx` with your custom SSH port. `-N` and `-f` run the connection in the background without starting the shell.

Access Grafana on your local machine:

```
http://localhost:3000
```

Login using default credentials (`admin` `admin`) and update your credentials.
:::note
To reset your Grafana password:

```bash
sudo apt-get update
sudo apt-get install sqlite3
sudo sqlite3 /var/lib/grafana/grafana.db
sqlite> update user set password = '59acf18b94d7eb0694c61e60ce44c110c7a683ac6a8f09580d626f90f4a242000746579358d77dd9e570e83fa24faa88a8a6', salt = 'F3FAxVm33R' where login = 'admin';
sqlite> .exit
```
This command resets `admin`'s password to default without requiring a restart.
:::

### Breaking SSH Tunnel

To break the tunnel:

```bash
ps aux | grep 'ssh -L'
# Look for the SSH tunnel process PID 
kill PID
```

### Adjusting Grafana Server Settings
In your Grafana instance, open the "three lines" menu and navigate to Connections, select Prometheus, then "Add new data source."

For Prometheus Settings:

- Ensure you're using the same port as in Prometheus (default is 9090).
- Adjust other parameters as needed.

:::note
Ensure your Prometheus service is running to prevent errors in Grafana's Connections section.
:::

### Jobs and Variables
Managing jobs in Grafana is crucial. The `job_name` added in `Prometheus.yml` becomes a label `job=<job_name>` to any timeseries scraped from the config.

In the "Node Exporter Full" Dashboard, variables dynamically change the content of charts, queries, etc., based on selected variable values, like jobs. Refer to the [documentation](https://grafana.com/docs/grafana/latest/dashboards/variables/) for setting up variables.

Use the gear icon to open Dashboard settings.

Based on the `prometheus.yml` example:

**For Node Exporter Full Dashboard:**

Navigate to `Home/Dashboard/Node Exporter Full/Variables/Job`:
```bash
Query type = Label values
Label* = job
Regex = /.*server*/
Click `Save dashboard`.
```

This setting filters jobs with the word `server`, making the dashboard available for Node Exporter-related jobs.

**For Subspace-dashboard:**

Create a variable:

```bash
Query type = Label values
Label* = job
Regex = /.*subspace*/
Remember to click `Save dashboard`.
```

This setting filters jobs with the word `subspace`, linking the dashboard to Subspace-node-related exporters.

---

## 4. Scraping Metrics from Subspace Node application
:::note
Only for node running in Docker!
:::


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

:::note
If you're using an external Prometheus located on a different server, the setup might exclude the monitoring stack configuration provided in this template.
:::

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
> End of the file


---

## 5. Alerting

Access your Grafana page and navigate to Alerting / Contact Point in the menu, accessed via `http://localhost:3000/alerting/notifications`. Click the `[+Add contact point]` button, specify a name (e.g., "grafana"), and choose Telegram from the Integration dropdown menu.

### Creating a Telegram Bot
To fill in the required fields, begin by creating a Telegram bot using the official Telegram [BotFather](https://t.me/BotFather). Running the `/start` command in the BotFather chat and following the instructions will guide you through the bot creation process (more details on using **@BotFather** can be found [here](https://core.telegram.org/bots/features#botfather)). Save the bot's token in a secure location.

Create a group for your alerting bot or add it to an existing group, ensuring the bot has administrator privileges. Obtain the chat ID by visiting the URL `https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates`, replacing the Xs with your bot's token. Copy-paste the chat ID with the hyphen. Please `Test` to ensure everything is functioning properly.

You can receive alerts with Grafana graphs, rendered images, by installing [Grafana image renderer](https://grafana.com/grafana/plugins/grafana-image-renderer/). Use the following command on your server:

```bash
grafana-cli plugins install grafana-image-renderer
```
### Getting chat ID

Navigate to `Home/Alerting/Notification Policies`, access the three dots menu: -> Edit -> Default -> contact point: choose your Telegram contact point name, and click `Update default policies`.

### Setting up alert conditions:

1. Go to Dashboards, find the needed dashboard, and select the panel for alerting.
2. From the panel's dropdown menu (three dots), choose `Edit`, then go to the `Alert` tab and hit `Create new rules`.
3. You will be directed to the `Alert rules` section. Key options include `time range`, `folder` for saving rules, `group`, and `conditions`.
4. In the `Expression` section, you can set conditions. For `instance`, adding a new expression `Classic condition` and defining a Condition 
```
WHEN last() OF A (query) IS ABOVE 6
```
will trigger a notification when the observed parameter in query "A" exceeds this threshold value (`6` in this example). Ensure your Expression is marked as an Alert condition (green-colored).

5. To configure alerts for server downtimes or data collection interruptions from targets, adjust settings in the "Configure no data and error handling" section on the `Alert rules` page.

Refer to the official [Alert rules guide on Grafana's site](https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/) for more detailed instructions.

