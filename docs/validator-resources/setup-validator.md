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
    Get RBT tokens for pledging during 

## Setting Up a Validator Node in Subnet

Step to be

- Ensure the `network.key` is correct for the Subnet.


