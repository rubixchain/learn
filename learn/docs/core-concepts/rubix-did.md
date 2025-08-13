---
title: Rubix DID
sidebar_label: Rubix DID
---

<!-- File: docs/core-concepts/rubix-did.md -->
# Rubix DID

## Decentralized Identity

Each Rubix node is identified by a Decentralized Identity (DID) a self-generated, cryptographically verifiable public key that anchors the node’s presence and authority in the network.

## Creating a DID in Rubix

In Rubix, a Decentralized Identifier (DID) is created by generating a public key using the Secp256k1 elliptic curve and storing it on the InterPlanetary File System (IPFS) through the ipfs add operation. The resulting Content Identifier (CID) from IPFS becomes the unique DID, ensuring a truly decentralized and immutable digital identity that operates without any central authority.

## Key characteristics of Rubix DID

- Self-issued and does not rely on any central certificate authority.
- DID acts as the node’s permanent, verifiable identifier 
- Shared with peers across the network to enable secure validation and communication.