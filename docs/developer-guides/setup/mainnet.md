---
title: Connect to Rubix Mainnet
sidebar_label: Connect to Rubix Mainnet
---

# Connect to Rubix Mainnet

The mainnet is the live, public network where real transactions occur. Once your application is stable on the testnet, you can deploy it to the mainnet.

- Start Your Node

    ```bash
    ./rubixgoplatform run -s -defaultSetup -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ```

Note: Do not use `-testNet` flag in Mainnet

- Ensure the `swarm.key` is in your node's root folder and matches the official key from the Rubix GitHub repository. This key is for connecting to the public mainnet.

    ```bash
    /key/swarm/psk/1.0.0/
    /base16/
    278b9a199c43fa84178920bd9f5cbcd69e933ddf02a8f69e47a3ea5a1705512f
    ```

#### Check Your Balance
- Verify the tokens have been received by checking your DID's balance.

    ```bash
    ./rubixgoplatform getaccountinfo -did <your_did> -port <your_port_number>
    `

## Purchase RBT from exchanges

- [MEXC Exchange](https://www.mexc.fm/en-IN/price/RBT)
- [BloFin Exchange](https://blofin.com/spot/RBT-USDT)