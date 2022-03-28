---
title: Public Share
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

Every node joining the Rubix platform creates a unique network Decentralized Identity (DID). This DID is then split into two shares: Public Share and Private Share. The Public Share is also reffered to as the 'Public Network Share'.


Significance:

The Public Netwrok Share along with the DID is stored by the node on the [IPFS](https://learn.rubix.net/ipfs/). The IPFS hashes of these two values are then communicated to all peer nodes in the network. This information is used for authentication purposes between nodes.

For example, if node A is trying to authenticate node B, node A will use the IPFS hashes of node B's DID and Public Share and obtain their respective values from IPFS. Post this, it will request node B to send its [Private Share](https://learn.rubix.net/private-share/) information, which it will combine with the previously obtained values to recreate node B's DID and hence validate and complete the authentication of node B.



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
