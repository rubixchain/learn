---
title: NLSS
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---
Non-Linear Secret Sharing (NLSS) scheme is used for creating public network share and private network share from DID. In a secret sharing scheme, a set of parties share a common secret. The information about the secret a single party owns is called a secret share. During the splitting of DID, two such shares are created. Secret shares are created from shares using some arithmetic function which can be either linear or non-linear. If a non linear function is used to create shares, it is called a NLSS scheme. 

### Advantage of NLSS scheme over LSS scheme:
NLSS scheme is a cheating-immune secret sharing scheme that prevents a cheater, who submits a corrupted share, from gaining an advantage in knowing the secret over the honest participants. Linear secret sharing scheme is a not a cheating immune scheme.

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