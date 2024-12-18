---
title: Non Fungible Tokens
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

Non Fungible Tokens are unique entities in the Rubix network whose value is derived from an underlying asset. This could be Real World Assets (RWAs) , unique access tokens , digital collectables. Each has distinct levels of properties , some would have more regulatory restrictions , some could be on time usage , some changes ownership whereas others change only its properties. 

Generating an NFT is free in Rubix but deploying and minting NFT require native RBT tokens to be locked. The fee of NFT is decided by the owner / seller of NFT and in most cases is the actual value of the underlying asset. There are however some restrictions when it comes to regulatory records such as real world assets backed by authorities where the NFT is only a placeholder for proof of ownership. 

Due to Rubix’s architecture of maintaining separate object chains for tokens , we recommend NFTs to be created for unique assets / tokens that have medium-high liquidity. Tokens without much state changes can be created as objects in smart contracts since there is no benefit in maintaining separate chains.

# Lifecycle

## Create NFT

In this step, we have to generate a directory which consists of the file meant to be an NFT, and a `metadata.json` file which contains the information about the NFT. For creating NFT for multiple files, the archive of these files should be given. A directory is created in `<node directory>/NFT/` with the name being hash of NFT

## Subscribe NFT

If a counterparty node wants to receive updates of an NFT's Token Chain, then it has to subscribe to the NFT.

## Deploy NFT

Once the the NFT is created locally, it is then deployed in the network. It essentially initialises the NFT's chain with a genesis block. We don't specify any value for NFT in this step, and hence only 1 RBT is pledged.

## Execute NFT

For Rubix NFT, it can either undergo a transfer of ownership or it can updates its own state without the need of former, through self-execution. The sale value of an NFT, decided by the parties, is passed here. To perform Self-execution, the `receiver` parameter here must be empty. The pledge value matches the Sale Value. 

