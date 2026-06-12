---
title: DID Creation & Key Management
sidebar_label: DID Creation & Key Management
---

# Create a DID (Decentralized Identity)

Each Rubix node is identified by a Decentralized Identity (DID) — a self-generated, cryptographically verifiable public key that anchors the node's presence and authority in the network.

Once your node is [running](./run-locally.md), open a new terminal in the same directory as the `rubixgoplatform` executable.

## Create

Create a new DID using the default BIP-39 flow:

```bash
./rubixgoplatform createdid -port <port_number>
```

Example:

```bash
./rubixgoplatform createdid -port 20001
```

The `-port` value should match your node's Rubix server port (`20000 + node_index`). For `node_index = 1`, use `-port 20001`.

The mnemonic file is generated under your node's network directory:

```
<config_directory>/<network>/dids/<did>/mnemonic.txt
```

**Note:** Copy the mnemonic file somewhere safe. It is required for recovery.

## Register

After creating a DID, publish it across the network so other nodes can discover and interact with it:

```bash
./rubixgoplatform registerdid -did <did_created> -port <port_number>
```

Example:

```bash
./rubixgoplatform registerdid -did bafybmibieftxw5tesd7s5d4l7wiustue44u6r2qepmb22krbx6sanhbc2a -port 20001
```

## Restore from Mnemonic

If you have a mnemonic phrase from a previously created DID, you can restore it:

```bash
./rubixgoplatform createdid -mnemonic "<mnemonic phrase>" -port <port_number>
```

Example:

```bash
./rubixgoplatform createdid -mnemonic "abandon ability able about above absent absorb abstract absurd abuse access accident" -port 20001
```

## Create from Public Key

You can also create a DID by providing an existing public key:

```bash
./rubixgoplatform createdid -publicKey <public_key_hex> -port <port_number>
```

## Useful Queries

```bash
# List all DIDs on the node
./rubixgoplatform getalldid -port 20001

# Get a complete balance breakdown for a DID
./rubixgoplatform getdidbalance -did <did> -port 20001

# Get RBT balance for a DID
./rubixgoplatform getrbtbalance -did <did> -port 20001

# Get fungible token (FT) balance for a DID
./rubixgoplatform getftbalance -did <did> -port 20001

# Get non-fungible token (NFT) balance for a DID
./rubixgoplatform getnftbalance -did <did> -port 20001
```
