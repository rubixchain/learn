---
title: Install Rubix
sidebar_label: Install Rubix
aliases:
  [
    "/setup",
    "/testnet",
    "/testing",
    "/start",
  ]
---

# Install Rubix

To **install and run a Rubix node**, you will need the following components:

- **`rubixgoplatform`**: Rubix node executable binary  
- **Docker**: Required to run the PostgreSQL backend used by the node  

{/*
IPFS and the swarm keys are not part of the v1.0.1 release (executable + README + license only),
so the following are commented out for now. Restore them when a full bundle is hosted again:

- **`ipfs`**: IPFS binary for storage and data synchronization
- **`swarm.key`** and **`testnetswarm.key`**: Swarm key files for connecting to the mainnet and testnet respectively

The Rubix binaries and key files are provided together as a compressed package for your OS and architecture. Docker is installed separately.
*/}

:::note
The **v1.0.1 release download below contains only the `rubixgoplatform` executable** (plus README and license). You also need, obtained separately:

- **IPFS**: compatible version **v0.19.0** ([IPFS Kubo v0.19.0](https://dist.ipfs.tech/kubo/v0.19.0/)).
- **`swarm.key`** and **`testnetswarm.key`**: from the Rubix repo: [swarm.key](https://github.com/rubixchain/rubixgoplatform/blob/v1.0.1/swarm.key) and [testnetswarm.key](https://github.com/rubixchain/rubixgoplatform/blob/v1.0.1/testnetswarm.key).

Docker is installed separately (see below).
:::

📦 **Download the Rubix node executable below**  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>
    <div className="os-tab-content">
      <h3>Linux Installation</h3>
      <p>Select your system architecture:</p>
      <ul>
        <li>
          <strong>ARM 64:</strong><br />
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-linux-arm64.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD 64:</strong><br />
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-linux-amd64.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
        </li>
      </ul>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Extract the contents to the directory where you want to run the Rubix node using <code>tar -xzf</code></li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Verify installation: <code>./rubixgoplatform -v</code> (this will display the installed version)</li>
        </ol>
      </div>
    </div>
  </TabItem>

<TabItem value="windows" label="Windows">
    <div className="os-tab-content">
      <h3>Windows Installation</h3>
      <p>Download the Windows bundle:</p>
      <div className="executable-links" style={{ display: 'flex', flexDirection: 'column' }}>
        <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-windows-amd64.zip" className="executable-link">📦 Download Full Windows Bundle (.zip)</a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Extract the <code>.zip</code> contents to the directory where you want to run the Rubix node.</li>
          <li>Verify installation: <code>./rubixgoplatform.exe -v</code> (this will display the installed version)</li>
        </ol>
      </div>
    </div>
</TabItem>

  <TabItem value="macos" label="macOS">
    <div className="os-tab-content">
      <h3>macOS Installation</h3>
      <p>Select your system architecture:</p>
      <ul>
        <li>
          <strong>ARM (Apple Silicon):</strong><br />
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-darwin-arm64.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD (Intel):</strong><br />
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-darwin-amd64.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
        </li>
      </ul>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Extract the contents to the directory where you want to run the Rubix node using <code>tar -xzf</code></li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Verify installation: <code>./rubixgoplatform -v</code> (this will display the installed version)</li>
        </ol>
      </div>
    </div>
  </TabItem>
</Tabs>

You can also refer [Rubix Releases](https://github.com/rubixchain/rubixgoplatform/releases).

## System Requirements

- **Memory**: Minimum 4GB RAM (8GB recommended)  
- **Storage**: At least 10GB available disk space  
- **Docker**: Required (used to run PostgreSQL)
- **Operating System**:  
  - Windows 10 or later (64-bit)  
  - macOS 10.15 or later  
  - Linux (Ubuntu 18.04+, CentOS 7+, etc.)  

## Install Docker

Rubix uses PostgreSQL as its database backend, and PostgreSQL runs inside a Docker container. Install Docker before proceeding.

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install docker.io
sudo systemctl enable --now docker
```

**macOS:**

Install [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/).

**Windows:**

Install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/).

Verify your installation:
```bash
docker --version
```

The PostgreSQL container itself is launched as part of the node startup flow. See [Run Rubix Locally](./run-locally.md) for the exact command.

Once you have successfully installed Rubix and Docker, you can proceed to [start a Rubix Node](./run-locally.md).

For additional help, visit our [support page](../../get-in-touch/support.md) or check the [GitHub issues](https://github.com/rubixchain/rubixgoplatform/issues).