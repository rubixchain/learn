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
IPFS and the swarm keys are not part of the v1.0.3 release (executable + README + license only),
so the following are commented out for now. Restore them when a full bundle is hosted again:

- **`ipfs`**: IPFS binary for storage and data synchronization
- **`swarm.key`** and **`testnetswarm.key`**: Swarm key files for connecting to the mainnet and testnet respectively

The Rubix binaries and key files are provided together as a compressed package for your OS and architecture. Docker is installed separately.
*/}

:::note
The **latest release download below** (currently <RubixVersion />) contains only the `rubixgoplatform` executable (plus README and license). You also need, obtained separately:

- **IPFS**: compatible version **v0.19.0** ([IPFS Kubo v0.19.0](https://dist.ipfs.tech/kubo/v0.19.0/)).
- **`swarm.key`** and **`testnetswarm.key`**: from the Rubix repo — <RubixSwarmKeys />.

Docker is installed separately (see below).
:::

📦 **Download the Rubix node executable below**  

import RubixDownloads from '@site/src/components/RubixDownloads';
import RubixVersion from '@site/src/components/RubixVersion';
import RubixSwarmKeys from '@site/src/components/RubixSwarmKeys';

<RubixDownloads />

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