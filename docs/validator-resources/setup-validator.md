---
title: Setting Up a Validator Node
sidebar_label: Setting Up a Validator Node
---

## Setting Up a Validator Node

The Rubix Proof of Pledge (PoP) consensus mechanism is designed to be lightweight and distributed. It doesn't require energy-intensive mining or large-scale staking. This means that even basic computing nodes can act as validators. The sharded approach, where each validator only stores and maintains tokens for transactions they have validated, significantly reduces the required storage, computational load, and pledge amounts.

To get started, a validator needs to perform a few key steps:
### 1.Run your Rubix node 
    The foundation of being a validator is running a node on the network. Use below command to run your Rubix node.
    ```bash
    ./rubixgoplatform run -s -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ```
    Do not use `-testNet` flag for being a validator in mainnet.

    Refer [running a rubix node](docs/developer-guides/setup/run-locally.md) section for more details.

### 2.Generate and register your Decentralized Identity (DID)
    Create your decentralized identity and register the DID
    ```bash
    ./rubixgoplatform createdid -didType 4 -port 20000
    ```
    `-didType 4` represents BIP-39 DID.

    Refer [DID creation](docs/developer-guides/setup/did-creation.md) section for more details.

    Publish your DID among others in your network by registering your DID by executing:
    ```bash
    ./rubixgoplatform registerdid -did <did_created> -port <port_number>
    ```

### 3.Setup your DID to be a validator
    Just by creating and register the DID will not make you a validator. Setup your DID to validate transactions by executing:
    ```bash
    ./rubixgoplatform setupquorum -did <did_created> -port <port_number>
    ```
    You'll get a `Quorum setup successfully` message.

### 4.Get tokens for pledging
    Get RBT tokens for pledging

#### For Mainnet:
    Get RBT tokens for pledging in mainnet from below exchages:

    <a
  href="https://www.mexc.fm/en-IN/price/RBT"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={useBaseUrl('/img/exchange/mexc.png')}
    alt="MEXC Exchange"
    width="120"
  />
</a>
<a
  href="https://blofin.com/spot/RBT-USDT"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={useBaseUrl('/img/exchange/blofin.png')}
    alt="Blofin Exchange"
    width="120"
  />
</a>

import useBaseUrl from '@docusaurus/useBaseUrl';

#### For Testnet:

Visit Rubix Faucet below for getting test tokens. You can purchase a free Rubix test token in every hour.

- Go to the [faucet webpage](http://103.209.145.177:4000/).
- Enter your DID to receive test tokens.


## Setting Up a Validator Node in Subnet

Ensure you are on the correct Subnet by verifying `network.key` & swarm fingerprint in node logs.

![swarm-fingerprint](/img/swarm-fingerprint.png)

In mainnet, the quorum is randomly picked. In a Subnet, user can choose and define the set of quorum.
- Running of Node
- Creation of DID
- Setup DID as a validator.

These steps are similar to that of mainnet. Other than this, the sender should create a .json file with picked validator's DID. The json file should be like:
```
[
  {
    "type": <quorum_type>,
    "address": "<DID_of_validator_1>"
  },
  {
    "type": <quorum_type>,
    "address": "<DID_of_validator_2>"
  },
  {
    "type": <quorum_type>,
    "address": "<DID_of_validator_3>"
  },
  {
    "type": <quorum_type>,
    "address": "<DID_of_validator_4>"
  },
  {
    "type": <quorum_type>,
    "address": "<DID_of_validator_5>"
  },
]
```
Use `type` as 2 as it's private quorum list

Below are the steps to add the private quorum list to a sender:

- Save this file as quorum_list.json or any name as you wish but with .json extension in the executable root path.
- Use the command below to add the quorum list to the sender in the subnet

```
./rubixgoplatform addquorum -quorumList <quorum-list-file-name.json> -port <port-number>
```

- After adding, confirm the quorum list using below command

```
./rubixgoplatform getallquorum -port <port-number>
```
