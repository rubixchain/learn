---
title: Subnets
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---
Subnet is a key construct in the Rubix architecture.  The Rubix mainnet is a sum of all its subnets.  Subnets can be of two types (a) private subnets: private Subnets are constructed by application providers or enterprises & consist of chosen validator nodes.  Private subnets can be thought as private chains on a public network (b) pooled or common Subnets: Pooled or common subnets can be operated by anyone, composed of several individual nodes or pools of nodes.  

Rubix protocol is agnostic to how the nodes are selected to be part of the Subnet or the quorum (A subnet can be exactly the minimum number of validators needed in a quorum = 21 OR a larger pool of nodes from which the quorum is picked from using an algorithm). A Rubix quorum is legit as long as the unspect credits pledged by the quorum is higher than the value of the transaction being validated.  This unique subnet/quorum creation ability to allows nodes to pick even potentially sybil nodes (sybil resistance of the protocol is upheld despite this).

To create a private subnet, add DIDs of the chosen validators in the `quorumlist.json` file. This file is a JSON array of strings. This json file should be placed inside the Rubix/Data folder. To initiate a type 2 transaction (type 2 picks the chosen private subnet instead of from a pooled subnet), add type as 2 as mentioned in the curl request below:

```
curl --header "Content-Type: application/json" --request POST http://localhost:1898/initiateTransaction --data '{ "receiver": "<receiver DID here>", "tokenCount":1, "comment":"transaction comments", "type":2}'
```


Sample `quorumlist.json` file:

```
[
    "Qme8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxq9gF",
    "QmZ4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxTJf",
    "QmT3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxMMH9",
    "QmeexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxFi2r",
    "QmPExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx3yvi5",
    "QmPyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1UWQ",
    "QmR1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxemCT",
    "QmR5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx6UdU",
    "QmZBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxqwbL",
    "QmUkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxVGFE",
    "QmSvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxVgX3",
    "QmT1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxYayw",
    "QmYzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx19zb",
    "Qmbwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx9oyS",
    "QmQ6mxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx3fgW",
    "QmRgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxSkJB",
    "QmVUxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxSbtq",
    "QmWYxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpkKP",
    "QmTpxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxB7tU",
    "QmSJxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxiYZp",
    "QmZRxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxLdBo"
]
```

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
