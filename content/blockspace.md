---
title: Bring your own BlockSpace
geekdocBreadcrumb: false
aliases: ["/blockchain", "/multichain", "/blockspace"]
---
If you are familiar blockspaces, skip to [BlockSpace in Rubix](#Rubix-blockspace).

### What is blockspace?

Blockspace is the number of transactions which the blockchain will order before appending to the chain of previous transactions. For example, if max block space is 200KB and average transactions take only 1Kb, then the chain may have a room for ~190 transactions in one block. Blockspace is a measure of how busy is the blockchain. Low blockcspace may mean transactions remain unattended in the Mempool for very long.  Transactions that compete with each to pay higher fees are likely to be validated faster.

The blockspace limit is intended to protect the decentralized nature of **monolithic blockchains** from centralization via large blocks. It protects small miners from being outcompeted by large blocks by requiring higher minimum fees with larger block size, which regulates the number of transactions that can be included in each block. It does not mean that there will be this many transactions in any given period, but rather gives an idea of **how many transactions the network can process in a certain period when under stress**.

- #### BTC vs BCH

  Bitcoin has a BlockSpace of 2000 to 2500 transactions per block (block size of 1mb) created every 10 minutes. Bitcoin Cash (fork of Bitcoin) on the other hand has a BlockSpace of up to 70,000 txns (block size of 32mb). BTC’s transaction processing speed is close to 7 transactions per second, while BCH’s transaction processing speed is close to 200 transactions per second as the BlockSpace in BCH is much higher.

  Since Bitcoin is designed for homogenious transactions (ledger for BTC transfers, not applications of heterogenous transactions), gas fee caused by limited BlockSpace is less of concern to BTC community. Bitcoin Cash (BCH) is designed to enable scalabe applications due to lower costs & higher speed, but the increased block size coupled with faster transaction speeds increased the risk of 51% attack (weakened security).  It could be because of this that BCH has not seen many applications built on it.
  
- #### ETH vs SOL

  Ethereum has borrowed most of the monolithic design concerps of Bitcoin, but with blocks being added in less time compared to Bitcoin.  However, unlike Bitcoin, Ethereum intends to power multiple applications across verticals.  As Ethereum processes heterogeneous transactions across verticals (unlike Bitcoin), the monolithic sequentual block architecture has resulted in network congestion, high gas fees & smart contract complexity.  Imagine supply chain applications, real estate applications & NFT applications, all around the world, compete for the limited blockspace on the Ethereum chain.  This in our opinion is neither computationally efficient or desired. This design has meant that Ethereum full nodes are now running TBs of ledger state, making them computationally inefficient.  If all the global applications are processed on Ethereum, state storage could be 10,000s of thousands of TB, meaning only few nodes can run full nodes, running against the thesis of decentralization.
  
  Further, most of the activity on Ethereum chain is miners extracting value from users using a technique called MEV (Miner Extractable Value).  Most of the MEV extracted in arbitrage actions between popular automated market makers such as Uniswap, Sushiswap, Curve and Balancer. MEV is akin to front running, back running & sandwich trading, all activies otherwise illegal in regular capital markets.  MEV affects most other monolithic chains as well, not just Ethereum. The monolithic blockspace architecture also raises key issues of privacy & security, hindering wider adoption of Web3 by Web2 apps or enterprises.
  
  While Ethereum community aims to reduce congesion issues by promoting Layer 2 solutions (L2), L2's tend to be less decentralized.  Even with some good Zero Knowledge solutions currently being deployed, issues remain, particularly around the dependency on the limited nodes where L2 data is deployed.  Further, L2s require own tokenomics to be successful, potentially undermining the L1 token itself, which in turn compromises security of the undelrying L1 chain.

  SOL is a fork of Ethereum which allows for more flexibility in the blockspace. To increse TPS, Solana overcame the requirement for validators to order block before it is added to the chain by using a Variable Delay Function (VDF) to ensure that the block is added to the chain in a timely manner. This comes at the cost of high memory requirement (512 GB) and increased CPU usage, thus making it more difficult for miners to mine on the network. This high barrier to entry also makes it more difficult for users to become a part of the network. Apps built on SOL depends largely on small number of nodes to run smoothly. Recently, SOL has faced multiple stoppages which could be linked to inefficiency of the network to handle traffic even before the network is mainstream.
  
  Monolithic chains like SOL, while trying to solve the scale constraints of Ethereum, usually end up attracting bots to clog the enhanced blockspace.  Bots have caused significant issues to the Solana network, leading to multiple stoppages.  When costs of transaction is lowered in networks like Solana, bots tend to spam the network aggressively.  So efforts to scale monolithic L1 chains could cause network security & reliability issues.

<img src="https://miro.medium.com/max/1400/1*6yUGkYyFPNnbaIv2Ptl8Mw.png" >
</img>

### Rubix with unlimited blockspace {#Rubix-blockspace}

  Rubix is designed for subnets and app chains to enjoy the benifits of being in the same network without having to share data or resources among them. People or Apps can bring their own validators with minimal computational requirement. This is a great way to build a network of decentralized apps without hashpower concentration by a specific subnet at any point in the network. Each RBT in circulation carry history of transactions appended to the its token chain validated by the subnets the token was transacted on. With this infinite BlockSpace approach followed by Rubix from its inception, the network can be extended without having wait for the transaction to be added to the chain or pay high gas fee (or any) for the transaction.  
  
  The key innovation in Rubix design is that blockspace should not be arrtificially constrained by design, but by the amount of computing resources brought into the network by applications.  The Bring Your Own Blockspace (BYOB) innovation means that applications & enterprises can now build secure blockchain networks with privacy, while always on one scalable public chain, bound by common utility token, RBT; common identity; common provenance & ability to merge or demerge blockspaces.  There are billions of existing computign nodes in the world that can join Rubix blockspace without any additional cost.
  
  Rubix Blockspace is divided into many Subspaces (subnets).  The Subspaces will revolutionize the way Web will transform, right from how social media is organized, how ecommerce is conducted, how financial services are rendered, how metaverse of metaverses is created & how data storage is structured.  Rubix Subspace is perhaps the single biggest thought change in the web is owned & used.

To learn more about Rubix Subspaces, please DM us at [@rubixchain](http://twitter.com/rubixChain).
