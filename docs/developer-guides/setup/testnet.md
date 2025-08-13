---
title: Connect to Rubix Testnet
sidebar_label: Connect to Rubix Testnet
---

## Connect to Rubix Testnet

The testnet is a development environment for testing your applications without risking real assets.

- Start your node using the `-testNet` flag.

    ```bash
    ./rubixgoplatform run -s -testNet -defaultSetup -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ```

- Ensure the `testswarm.key` file is in your node's root folder and matches the official key in the Rubix GitHub repository. This key is crucial for connecting to the test network.

### Rubix faucet

Add short desc on faucet - (Limit and Validity of test tokens)

#### Get Test RBTs
- Go to the [faucet webpage](http://103.209.145.177:4000/).
- Enter your DID to receive test tokens.

#### Check Your Balance
- Verify the tokens have been received by checking your DID's balance.

    ```bash
    ./rubixgoplatform getaccountinfo -did <your_did> -port <your_port_number>
    ```
You should see one RBT as below.
![Account Info](/img/getaccountinfo.png)

Congratulations! You have successfully joined the Rubix TestNet. You can now use the node for testing and development purposes.

## Next Steps

Now that you have successfully joined the Rubix network, you can:
- Explore Rubix’s testnet functionality, such as [smart contracts](https://learn.rubix.net/smartcontract/).