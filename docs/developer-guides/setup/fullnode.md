---
title: Run Full Node

---
# Run a Full Node

A full node receives all published transactions and tokenchain details from the network. This guide walks you through setting up a full node.

## Prerequisites

Before proceeding, make sure you have:

- Installed the Rubix binaries (see [Install Rubix](./install-rubix.md))
- Docker installed (see [Install Docker](./install-rubix.md#install-docker) in the install guide)
- Completed the basic [Run Rubix Locally](./run-locally.md) flow at least once

The setup flow for a full node is the same as a regular node, with one extra flag at the end.

## 1. Init Config

```bash
./rubixgoplatform init -p fullnode0
```

Edit the generated `config.toml` inside the `fullnode0/` directory:

```toml
[core]
node_index = 0
network_mode = "testnet"
enable_trusted_network = false

[db]
host = "localhost"
username = "rubix"
password = "rubixpass"
db_name = "rubix"
```

Set `network_mode` to `"testnet"` or `"mainnet"` depending on which network the full node should operate on.

For the full `config.toml` field reference, see the [Configuration Reference](./run-locally.md#configuration-reference) in Run Rubix Locally.

## 2. Setup Postgres

Run Postgres in Docker. Match the host port to your `node_index` (formula: `5433 + node_index`):

```bash
docker run --name fullnode-postgres \
  -e POSTGRES_PASSWORD=rubixpass \
  -e POSTGRES_USER=rubix \
  -e POSTGRES_DB=rubix \
  -p 5433:5432 \
  -v fullnode-pgdata:/var/lib/postgresql \
  --restart always \
  -d postgres
```

The `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` values must match the `[db]` section of your `config.toml`.

## 3. Run the Full Node

Start your node with the `-fullnode` flag:

```bash
./rubixgoplatform run -p fullnode0 -fullnode
```

**Flags:**

| Flag | Description |
|---|---|
| `-p` | Path to the node directory (where `config.toml` lives). |
| `-fullnode` | Run the node as a full node - subscribes to all published transactions and tokenchain details. |
| `-defaultSetup` | (Optional) Add default faucet quorums for testing. |

## Troubleshooting

### Postgres container won't start

Check if another container is already using the host port:

```bash
docker ps -a
```

Stop the conflicting container, or assign a different `node_index` (which shifts the expected Postgres port).

### Connection refused from Rubix to Postgres

- Verify the container is running: `docker ps`
- Verify the host port matches `(5433 + node_index)`
- Verify the credentials in `config.toml` match the `docker run` environment variables
