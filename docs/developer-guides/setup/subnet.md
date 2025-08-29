---
title: Set Up Your Subnet
sidebar_label: Set Up Your Subnet
---

# Set Up Your Own Subnet

This is an advanced guide for creating a private, isolated network. This is useful for enterprise applications or private testing environments that require a controlled group of validators.

## Create a custom Swarm Key

A custom subnet requires a unique `network.key` to ensure only approved nodes can join.

- Install the `ipfs-swarm-key-gen` Key Generation Tool.

    ```bash
    go install [github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen@latest](https://github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen@latest)
    ```

- Run the following command to create your unique network key.

    ```bash
    ipfs-swarm-key-gen > ~/.ipfs/network.key
    ```
    * **Note:** If you are not using the default IPFS path, replace `~/.ipfs/` with your custom path.

---

### Configure and Run your Subnet

- Once you have your custom `network.key`, you can start your subnet.

- Ensure all nodes that you want to be part of your subnet have a copy of the same `network.key` in their root directory.

## Start Rubix node on custum subnet

### Subnet with test tokens

- Start your node with `-testNet` flag and `network.key` in your build path.

    ```bash
    ./rubixgoplatform run -s -testNet -defaultSetup -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ``

### Subnet with Mainnet tokens

- Start your node with your custom `network.key` in your build path.

    ```bash
    ./rubixgoplatform run -s -defaultSetup -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ``
Note: Do not use `-testNet` flag in Mainnet
