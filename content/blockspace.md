---
title: Bring your own BlockSpace
geekdocBreadcrumb: false
aliases: ["/blockchain", "/multichain", "/blockspace"]
---
If you are familiar blockspaces, skip to [BlockSpace in Rubix](#Rubix-blockspace).

### what is blockspace?

Blockspace is number of transactions which the blockchain will order before appending to the chain of previous transactions. For example, if max block space is 200KB and average transactions take only 1Kb, then you may have a room for ~190 transactions in one block. Blockspace is a measure of how busy is the blockchain. Blockspace considerations means that when we see some transaction in mempool or in pending state for too long we might think about increasing maximum blocksize on higher levels.

The blockspace limit is intended to protect the decentralized nature of **monolithic blockchains** from centralization via large blocks. It protects small miners from being outcompeted by large blocks by requiring higher minimum fees with larger block size, which regulates the number of transactions that can be included in each block. It does not mean that there will be this many transactions in any given period, but rather gives an idea of **how many transactions the network can process in a certain period when under stress**.

### Why was blockspace limited for a single block?

Blockspaces has historically been limited to a single block, which could be problematic in the event that there were **concerns of hashpower concentration**. These concerns were recently highlighted by a number of community members, and we are pleased to announce our implementation of a new blockspace algorithm. This change helps ensure that no one mining pool can amass enough power to disrupt the Bitcoin network or alter the blockchain without consensus and without creating an opportunity for other miners to participate by increasing their own hash power.

- #### BTC vs BCH

  Bitcoin has a BlockSpace of 2000 to 2500 transactions per block (1mb) created every 10 minutes. Whereas Bitcoin Cash (fork of Bitcoin which allow TPS) has a BlockSpace of 500 to 1000 transactions per block (32mb). BTC’s transaction processing speed is close to 7 transactions per second, while BCH’s transaction processing speed is close to 200 transactions per second as the BlockSpace in BCH is much higher at 100,000 per block added to the chain.

  Since Bitcoin is designed for homogenious transactions (ledger for BTC transfers, not suitable for applications or smart contract to build on it as a platform), gas fee caused by limited BlockSpace is not much of a concern as fluctuation is minimal. However, Bitcoin Cash (BCH) is designed to be used for decentralized applications with high TPS, however, concentration of hashpower increases the risk of 51% of the network being compromised. Also increased BlockSpace made it difficult for miners to mine on the network, which causing centralization concerns for the Bitcoin Cash network thus effecting reliability of the network for Apps to build on it.

- #### ETH vs SOL

  ETH with 2000 in 14 seconds  vs SOL with 200,000 in 0.001 seconds (solana removed ordering requirement in the blockspace thus reducing block creation time but VDF require 512 gb ram in current scenario which barred large part of users from becoming)
  ETH followed same rules as BTC but changed
  User and bots in same pool - Most of the extracted MEV is concentrated in arbitrage actions between popular automated market makers such as Uniswap, Sushiswap, Curve and Balancer, with a smaller slice of the pie being attributed to liquidations on Compound and Aave.
  AVAX with 200,000 in 0.001 seconds but their subnet structure is broken with requirement of L2 tokens for each subnet to run

  Ethereum is designed for heterogeneous transactions with TPS similar to Bitcoin but new blocks being added in less time than Bitcoin. Ethereum network is clogged by bot created transactions and user created transactions competing for the same but limited blockspace. Most of the MEV extracted in arbitrage actions between popular automated market makers such as Uniswap, Sushiswap, Curve and Balancer. Recent issues in high gas fee (sometimes higher than transaction value) has caused apps already build on ETH to look into alternative chains.

  SOL is a fork of Ethereum which allows for more flexibility in the blockspace. To increse TPS, Solana overcame the requirement for validators to order block before it is added to the chain by using a Variable Delay Function (VDF) to ensure that the block is added to the chain in a timely manner. This comes at the cost of high memory requirement (512 GB) and increased CPU usage, thus making it more difficult for miners to mine on the network. This high barrier to entry also makes it more difficult for users to become a part of the network. Apps built on SOL depends largely on small number of nodes to run smoothly. Recently, SOL has faced multiple stoppages which could be linked to inefficiency of the network to handle traffic even before the network is mainstream.

### Rubix with unlimited blockspace {#Rubix-blockspace}

  Rubix is designed for subnets and app chains to enjoy the benifits of being in the same network without having to share data or resources among them. People or Apps can bring their own validators with minimal computational requirement and 0 gas fee. This is a great way to build a network of decentralized apps without hashpower concentration by a specific subnet at any point in the network. Each RBT in circulation carry history of transactions appended to the its token chain validated by the subnets the token was transacted on. With this infinite BlockSpace approach followed by Rubix from its inception, the network can be extended without having wait for the transaction to be added to the chain or pay high gas fee (or any) for the transaction.

### Will Rubix be able to handle when the network is under stress?

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
