---
title: FAQs
geekdocBreadcrumb: false
aliases: ["/faq", "/about/faq"]
---


{{< expand "What is the support email to reach out to regarding the RBT Wallet?" >}}

Users can reach out to maintainers@rubix.net for questions regaridng RBT Wallet.

{{< /expand >}}



{{< expand "How many transactions can rubix handle?" >}}

Monolithic blockchains like BTC and ETH scale linearly by chaining blocks of transactions sequentially.  The longest chain always represents the truth.  This monolithic architecture though limits how many transactions can be processed concurrenty.  Ethereum for example handles around 2,000 txns in a block (from a global pool of txns).  Other  monolithic chains like Solana attempt to increase throughput by allowing more transactions in a block, which can result in a meaningful decrease in security & decentralization.  Modular L1 blockchains try to achieve better throughput with subnet or shards, but this comes at the cost of reduced decentralization & composability.  The blockchain trilemma refers to the assumption that any network can only achieve two of the three variables, decentralization, security & scalability.

Rubix solves the trilemma with its revolutionary asynchronous paralellism.  Instead of handlind objects as a piece of code on shared ledgers on a monolithic chain, Rubix creates a seperate chain for each object (object could be RBT utility token, NFT, asset contract or smart contract).  All Object chains in Rubix scale in parallell with consensus using the Subnet architecture.  This high level of flexibility in the architecture means the number of validating nodes in Rubix is only limited by the amount of blockspace that is available in the world (rather than being artificially constrained as in the other chains).  Unlike other chains, Rubix scales horizontally.

One Rubix subnet (minimum of 21 validators needed for one Subnet) can process 1 transaction concurrently (or up to 1,030 transactions in batch concurrently). 1,000 subnets can process 1,000x more transactions concurrently.  With every existing cloud or non cloud compute node eligible to become a Rubix node, it is likely that there will be 100s of thousands of subnets processing in parallel at any point of time.  With 100,000 subnets (2.1 million nodes), 200,000 txns can process per minute (1,030x more with batching).  Rubix scales linearly with the amount of blockspace added to the network.

{{< /expand >}}



{{< expand "What happens to a transaction if any of the participating nodes/wallets loses their online connection ?" >}}

The transaction is not completed in this case.
A transaction completes when the sender and the reciver unpin and pin their tokens respectively. If an online connection is lost anytime before that, the transaction will not complete.
Additionally, if any of the quorum nodes lose their connection, and a total of 15 validations aren't performed, the transaction fails in this case as well.

{{< /expand >}}




{{< expand "When a transaction fails, what happens with the involved funds ?" >}}

The funds are reverted back in the case of a failed transaction.

{{< /expand >}}


{{< expand "I am unable to view my Wallet's balance on the Explorer. Where can I view it from ?" >}}

The Wallet's balance can be found on the Home Screen of the GUI Wallet.

{{< /expand >}}




{{< expand "Becoming part of the network?" >}}

You can setup a Rubix node on any laptop, desktop or VM.  Min specs for running each node = i5 or equivalent processor, 4 or 8 GB RAM & 512 GB SSD/HDD.

{{< /expand >}}

{{< expand "How to create a DID?" >}}

{{< /expand >}}

{{< expand "How much does it cost to setup a node?" >}}

{{< /expand >}}

{{< expand "How a token is transfered?" >}}

In cryptocurrency, “token” is often used as a synonym for “cryptocurrency.” Often the two terms are combined and the term “cryptocurrency token” is used. Cryptocurrencies exist as tokenized data (a type of encrypted data used in both cryptocurrency and computer security in general), therefore cryptocurrencies are often called tokens.

All Rubix nodes join the  network to conduct transactions with each other. A transaction can be :
A digital contract that involves exchanges of services or goods in return for exchange of other services or goods
A digital contract that involves exchange of services or goods for exchange of any medium of value such as fiat currency or simple transfer of native token
At any given moment, several peer-to-peer transactions are submitted to the Rubix network, transactions are processed parallely independent of each other unless the transaction involves common peers. A transaction is initiated by one peer node.
To initiate the transaction, the peer node must use at least one RBT token. Depending on the RBT token used by the peer node to initiate the transaction, the transaction is added to the corresponding Proofchain

Sender will request the advisory node a list of quorum list(24) which are online. The sender will ping each members of the quorum
Inorder for token tranx or to transfer a token(s) from one wallet to another the following curl command will be used:
$ curl --header "Content-Type: application/json" --request POST <http://localhost:1898/initiateTransaction> --data '{ "receiver": "445f59c3d71c6769124470cf4b82ca0b9b1626aec4f14f50a8f1e6a13e1fc70d", "tokenCount":1, "comment":"transaction comments", "type":1}'
Request Type: POST
Port: 1898
Input: receiver (String), tokenCount (Integer), comment (String)
Returns: Transaction ID (String), Success / Failure (Boolean), DID (String)

{{< /expand >}}

{{< expand "What are Levels and Credits? How to earn required Credits to mine an RBT?" >}}

Each of the 15 successful validators (5 out of 7 ⍺ validators following PBFT consensus, 10 out of the 15 β![image](https://user-images.githubusercontent.com/63278901/184305536-8826de33-7d46-4958-bbc4-e4a872641ad1.png)
) in any transaction receive one proof credit (p). For a transaction involving an asset token, ⍺ validators get an additional proof credit each (more info on this is in the asset transfer section which is in the later part of this paper).Validators will accumulate proof credits from various transactions across different Proofchains. When a node’s (p) reaches the threshold level , the node can convert the proof credits into one new RBT token. Nodes continue to earn proof credits & thereby harvest new RBT tokens by participating in consensus of various transactions & perpetually storing the consensus proofs. When a node transfers its outstanding proof credits or the harvested RBT tokens along with the supporting proof credits to a new node, the receiving node will continue to store the transaction proofs (otherwise the corresponding RBT token will be invalid).

Each validator node keeps the latest count of outstanding proof credits as well as the number of RBT tokens they have validated in various transactions by pledging the proof credits. New transacting nodes use net outstanding proof credits data to select the ⍺ validators. The authenticity of the proof credits & pledge count is confirmed by PBFT consensus among the 𝝰 validators.

{{< /expand >}}

{{< expand "Do I need to backup my node after every transaction or periodically?" >}}

Rubix is designed differently from other chains, its more decentralized. In other chains everyone's data is stored everywhere, causing privacy issues/slow adoption.  We designed it such that everyone is responsible for their data, but provenance is on the chain & it is immutable.

If a transaction happens after last backup & system crashes, you can restore to latest state by syncing proofchain to any node that did txns after your node txn.  Because every subsequent node will store the latest chain.  So you can always sync to the latest state.  That's not an issue if you are using a backup.

{{< /expand >}}

Have more questions? Feel free to Tweet or message our team [@rubixchain](https://twitter.com/rubixchain)
