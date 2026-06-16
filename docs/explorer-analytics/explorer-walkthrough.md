---
title: Rubix Explorer Walkthrough
sidebar_label: Rubix Explorer Walkthrough
---

# Rubix Explorer Walkthrough

The Rubix Explorer is your public gateway to the decentralized Rubix Mainnet and Testnet. It provides a transparent, real-time window into all on-chain activity. Unlike explorers for monolithic blockchains, which are structured around linear block histories, the Rubix Explorer is uniquely designed to reflect the network's maximally sharded architecture, offering deeper, more granular insights.

The mainnet explorer provides a high-level snapshot of the network's health and economic activity, including key metrics for the native RBT token like its price and trading volume. At a more granular level, the explorer provides detailed data and robust search capabilities for specific on-chain entities.

The explorer is your guide to the network’s on-chain activity through several key features:

Transaction Explorer: Trace the full lifecycle of any transaction. A dedicated page for each Transaction ID (TXID) provides a transparent record of the entire validation process, displaying the sender and receiver's Decentralized Identifiers (DIDs) and the validating quorum along with the tokens it staked. This serves as a clear audit trail for every transaction.

Tokenchain Explorer: Unique to Rubix's sharded architecture, this feature allows you to view the immutable history of a single token. By searching for a specific Token ID, you can access a complete list of every transaction involving that token.

DID Explorer: As the fundamental identity primitive on the Rubix network, each DID has a detailed profile. Search for a DID to view its address, a balance summary (RBT, pledged value, FT, NFTs, and smart contracts deployed), and its transaction history.

## Testnet

In contrast to the mainnet, the Rubix Testnet Explorer is a purpose-built sandbox for developers. It provides a risk-free environment for testing smart contracts and dApps with features like a testnet faucet for free test tokens.

## Accessing the Explorer

The Rubix Explorer is available as two separate sites:

- **Mainnet Explorer:** [explorer.rubix.net](https://explorer.rubix.net)
- **Testnet Explorer:** [testnetexplorer.rubix.net](https://testnetexplorer.rubix.net)

Both share the same interface, with a **Mainnet / Testnet toggle** in the top-right to switch network context.

![Rubix Explorer Home](/img/explorer-images/explorer-home.png)

The home page doubles as the network **dashboard** — a real-time snapshot of RBT supply and value, plus recent on-chain activity.

## How to Use the Explorer

A quick-reference guide to the explorer interface:

- **Global Search:** Query by DID, token ID, or transaction hash.
- **Stat cards:** At-a-glance metrics — RBT Price, Total / Max / Circulating Supply, Total FT / NFT / SC, and TVL.
- **Activity tabs:** Browse recent **Transactions**, **Holders**, **Tokens**, and **Smart Contracts**.
- **Mainnet / Testnet toggle** and a **GRAPH** view for visualizing transaction relationships.
