---
title: Connect to Rubix Network
sidebar_label: Connect to Rubix Network
---

# Connect to the Rubix Network

The Rubix network operates on two primary levels: a public **testnet** for development and a live **mainnet** for production. The process for connecting to either is similar, with a key distinction being a single flag.

---

### **Connect to Rubix Testnet**

The testnet is a development environment for testing your applications without risking real assets.

1.  **Start Your Node:** Start your node using the `-testNet` flag.

    ```bash
    ./rubixgoplatform run -s -testNet -defaultSetup -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ```

2.  **Verify the `testswarm.key`:** Ensure the `testswarm.key` file is in your node's root folder and matches the official key in the Rubix GitHub repository. This key is crucial for connecting to the test network.

3.  **Get Test RBTs:** Use the Rubix Faucet to get free test tokens.
    * Go to the [faucet webpage](http://103.209.145.177:4000/).
    * Enter your DID to receive test tokens.

4.  **Check Your Balance:** Verify the tokens have been received by checking your DID's balance.

    ```bash
    ./rubixgoplatform getaccountinfo -did <your_did> -port <your_port_number>
    ```

5.  **Try a Test Transfer:** Practice a token transfer to confirm your node is fully operational on the testnet.

    ```bash
    ./rubixgoplatform transferrbt -rbtAmount 1.0 -senderAddr <your_did> -receiverAddr <destination_did> -port <your_port_number>
    ```

---

### **Connect to Rubix Mainnet**

The mainnet is the live, public network where real transactions occur. Once your application is stable on the testnet, you can deploy it to the mainnet.

1.  **Start Your Node:** Start your node **without** the `-testNet` flag.

    ```bash
    ./rubixgoplatform run -s -defaultSetup -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ```

2.  **Verify the `swarm.key`:** Ensure the `swarm.key` is in your node's root folder and matches the official key from the Rubix GitHub repository. This key is for connecting to the public mainnet.