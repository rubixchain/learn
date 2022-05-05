---
title: Subnets
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

Subnets are used to have your own set of quorum nodes instead of acquiring a random set of quorum nodes from advisory server. Add DIDs of validators you would want to have in `quorumlist.json` file. This file is a JSON array of strings. This json file should be placed inside the Rubix/Data folder. To initiate a type 2 transaction, add type as 2 as mentioned in the curl request below:

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
