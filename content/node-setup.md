---
title: Setup Rubix Node
aliases:
  [
    "/mining",
    "/setup",
    "/mine",
    "/rbt",
    "/wallet",
    "/dist",
    "/start",
  ]
geekdocBreadcrumb: false
weight: 1
---

Nodes in Rubix mine tokens by utilizing credits earned by validating transactions in the network.

When a new node joins the network, it will have 0 credits and 0 tokens to start with. Over the time common pool will pick the node to validate transactions coming to the network. For every transaction that is validated, the node will earn 1 credit. Credits are non transferable and are only used to mine a new RBT token.

Number of credits required by a node to mine a RBT token is determined by current level of the network. For example, if the network is at level 3, a node will need 32 credits to mine a token. If the network is at level 4, a node will need 64 credits to mine a RBT token. Credits required to mine a token doubles every time the network level increases.

To know more about level and credits, please read the [Whitepaper](https://github.com/rubixchain/rubixnetwork/raw/master/RubiX_WhitePaper%20R1.8.pdf).

## Prerequisites

Any computer or personal laptop with 8GB of RAM and a decent internet connection can seamlessly run Rubix for token transfers / become validator / mining.

Kindly Install the pre-requisites in your machines.

## Setting up Node

1. To set up a Rubix Wallet, first download the latest rubix compatible ipfs release from IPFS Kubo releases [IPFS Releases](https://github.com/ipfs/kubo/releases/tag/v0.18.0). The latest version of IPFS Kubo supported by Rubix is v18.0

2. To set up a Rubix Wallet, download the Rubix executable from Rubix releases [Latest Releases](https://github.com/rubixchain/rubixgoplatform/releases) and untar.

3. Once untar is done, copy extract the ipfs archive and move the ipfs file to that of rubixgoplatform. Provide r/w access to the executable by running

```
chmod +x rubixgoplatform
```

We recommend you run rubixgoplatform as screen/daemon/nohop etc.

## How to run the executables

1. Run the executable as follows.

```
./rubixgoplatform run -p <name of node> -n 0 -s -testnet
```
Please note in the above command if -port flag not given default port of 20000 will be run for that node.

2. To create a dID, run the following command

```
./rubixgoplatform createdid -fp
```
Input the password for you node (Note: This password is necessary for trnx.)

3. To view the did

```
./rubixgoplatform getalldid
```

4. To add RBT balance (Test Token)

```

./rubixgoplatform generatetestrbt -did <did> -numTokens <no. of token> -port
```

5. To setup a node as quorum (This will enact your node as quorums)

```
./rubixgoplatform setupquorum -did <did> -port <port>
```

6. To add the quorumlist to the sender node

```
./rubixgoplatform addquorum -port <port> -quorumList quorumlist.json
```
below is the quorum list you can use

```
[
    {
        "type": 2,
        "address": "Quorum1DID"
    },
    {
        "type": 2,
        "address": "Quorum2DID"
    },
    {
        "type": 2,
        "address": "Quorum3DID"
    },
    {
        "type": 2,
        "address": "Quorum4DID"
    },
    {
        "type": 2,
        "address": "Quorum5DID"
    },
    {
        "type": 2,
        "address": "Quorum6DID"
    },
    {
        "type": 2,
        "address": "Quorum7DID"
    }
]

```



# Latest Releases

Subscribe to GitHub repo [home repository](https://github.com/rubixchain/rubixgoplatform) to be notified on new releases.

For help regarding getting notified for releases see [documentation](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)

## {{< button href="https://github.com/rubixchain/rubixgoplatform/releases" >}}CLI Node{{< /button >}}

---
<br>

