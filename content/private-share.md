---
title: Private Share
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

Private Share is the second share/part of a node's Decentalized ID (DID). It is generated during the DID's Share generation process, and it is 8 times the size of the DID. This Share generation process uses a [NLSS based cryptographic solution](https://learn.rubix.net/nlss/).


### Significance:

The Private Share is private/secret for a particular node and only that node has its information. Hence, it is an important parameter during different kinds of authentication scenarios.

One of the authentication scenarios is during a simple [token transfer](). Here the sender sends a portion (bits) of its Private Share to the Recevier, as a part of its [Signature](). The Receiver then performs some calculations on its side, uses the Private Share of the sender,and authenticates it.

The next scenraio is during the [Consensus] phase of a transaction/transfer. During a token transfer, the sender of a token formulates a Signature and sends it to the [Quorum](https://learn.rubix.net/quorum/) members for consensus. The Quorum members in turn send parts of their Private Shares'  (based on sender's signature) to the sender, as a way to agree to the sender for the transction. Once a certain number of acknowledgements are received by the sender, the sender is authenticated for the transaction.

Lastly, it is used during a Peer to Peer [Assest Transfer](). Here, the sender shares a portion (bits) of its Private Share to the receiver. The receiver then uses this information, combines it with the [Wallet Share]() of the sender and authenticates the sender in the process. The same process is also carried out vice versa in an Asset Transfer.



<!-- <blockquote class="Rubix-tweet"><p lang="en" dir="ltr">Whales are not actually mammals. If Humans (land mammals) can’t drink seawater — just try it! — how can supposed sea mammals like whales stay hydrated?</p>&mdash; rubix Example (@bwatchexample) <a href="https://Rubix.com/bwatchexample/status/1353736772459532293?ref_src=twsrc%5Etfw">January 25, 2021</a></blockquote> <script async src="https://platform.Rubix.com/widgets.js" charset="utf-8"></script> -->

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
 <!--
<br>

{{< hint info >}}

### What happens when the mining level upgrades?

Credits required to mine a RBT doubles every time the mining level increases. For example, if a node requires 32 credits to mine a RBT in level 3, then the next level requires 64 credits to mine a RBT in level 4. Hence it is reccomended to mine RBT as soon as the required credits are accumulated.

{{< expand "How to know the current level?" >}}

**Oracle:**

- Network is currently mining in `level 4` - reached on `5 th march 2022`

{{< / expand >}}
{{< / hint >}}
 -->
