---
title: Subnets
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

Subnets are used to have your own set of quorum nodes instead of acquiring a random set of quorum nodes from advisory server. Add DIDs of validators you would want to have in `quorumlist.json` file. This json file should be placed inside the Rubix/Data folder. To initiate a type 2 transaction, add type as 2 as mentioned in the curl request below:

```
curl --header "Content-Type: application/json" --request POST http://localhost:1898/initiateTransaction --data '{ "receiver": "<receiver DID here>", "tokenCount":1, "comment":"transaction comments", "type":2}'
```

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
