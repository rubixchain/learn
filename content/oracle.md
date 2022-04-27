---
title: Oracle
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---
<!--
 Our team is currently busy writing this content, we'll update the contents here soon!!
<iframe src="https://giphy.com/embed/48zjXYRwBg5IQ" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> -->

<!-- <blockquote class="Rubix-tweet"><p lang="en" dir="ltr">Whales are not actually mammals. If Humans (land mammals) can’t drink seawater — just try it! — how can supposed sea mammals like whales stay hydrated?</p>&mdash; rubix Example (@bwatchexample) <a href="https://Rubix.com/bwatchexample/status/1353736772459532293?ref_src=twsrc%5Etfw">January 25, 2021</a></blockquote> <script async src="https://platform.Rubix.com/widgets.js" charset="utf-8"></script> -->

<!--If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain). -->



Oracle keeps a record of the nodes in the network, credits owned by the quorums and the next token to be mined. It also performs integrity check every few seconds to ensure that all the nodes getting registered in the network get a chance to become a member of the quorum.

### Oracle's role in maintaining synchronised network:
Whenever a node joins the network, an entry is made into the records of the Oracle and from there it goes to every other node. Any node in the network can fetch the IDs of other nodes in the network from the oracle server. This ensures that nodes are in sync with one another. 

### Oracle's role in the mining process:
Every level has certain number of tokens to be mined and this information is available with an Oracle. A node spends its proof credits to mine a token. Credits required to mine a token doubles with increase in the level. For example, if 32 credits are required to mine a token in level 3, then 64 credits are needed in level 4. Oracle's responsibility is to let the node know on which level the next token to be mined is so that credits to be deducted can be calculated. It provides the token to be mined and updates the database to the next token number to ensure that no two tokens with the same number are mined. It is also responsible for deducting the proof credits of the node after mining. 


### Oracle's role in the validation process:
Oracle assigns a quorum of 21 validators during the transaction process and is also responsible for freeing up the validators after the transaction completes. In case of a successful transaction, it is responsible for providing one proof credit to each validator.

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

