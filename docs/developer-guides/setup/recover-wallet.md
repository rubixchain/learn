---
title: Recover Wallet from a Fullnode
sidebar_label: Wallet Recovery
---

# Recover Wallet from a Fullnode

:::note
Requires **rubixgoplatform v1.0.3 or later**.
:::

Restoring a DID from its mnemonic recreates the keys, but not the tokens the DID owned. If your node lost its local database but you still have your DID, you can rebuild your wallet's token state by syncing from a **published fullnode**.

## When to use this

- Your node's local database was lost or corrupted.
- You moved to a new machine and [restored your DID from its mnemonic](./did-creation.md#restore-from-mnemonic).
- You still have (or have re-created) your DID, but your balance shows empty.

## Prerequisites

- Your node is [running](./run-locally.md).
- Your DID exists on the node — create it, or restore it from the mnemonic.

## Sync from a fullnode

```bash
./rubixgoplatform sync -did <did> -port <port_number>
```

Example:

```bash
./rubixgoplatform sync -did bafybmibieftxw5tesd7s5d4l7wiustue44u6r2qepmb22krbx6sanhbc2a -port 20001
```

This pulls the tokens owned by your DID (status `Free` or `Pledged`) from an active fullnode and restores them locally.

## How it works

The node fetches the list of active fullnodes published by the network, then proves ownership of the DID through a signed challenge — the same asynchronous signature step used by `registerdid`. The command completes that signature automatically using your private key password, and once it finishes the node reports a summary of the recovered tokens.

## Verify

Confirm your balance has been restored:

```bash
./rubixgoplatform getrbtbalance -did <did> -port 20001
```

## API equivalent

This command maps to the [`POST /rubix/v1/sync`](../../api.md#sync-wallet-from-a-fullnode) endpoint. See the [Recovery section of the API Reference](../../api.md#recovery) for request and response details.
