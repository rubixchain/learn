---
title: Run Rubix Locally
sidebar_label: Run Rubix Locally
---

# Start a Rubix Node

1. Open a terminal and navigate to the directory containing the `rubixgoplatform` executable.

   ```bash
   cd /path/to/rubixgoplatform
   ```

2. Start a Rubix node with the following command:
   ```bash
   ./rubixgoplatform run -s -testNet -defaultSetup -p <node_name> -n <node_number> -grpcPort <grpc_port>
   ```
    Example
    ```bash
    ./rubixgoplatform run -s -testNet -defaultSetup -p node0 -n 0 -grpcPort 10500
    ```
    This will start the node in port 20000. The port number where the node starts will be 20000+(node_number)

    - `-testNet`: This flag will start the node in test network

    - `-defaultSetup`: This flag adds a list of default quorums for testing. Skip this flag if you want to use your own quorums.
    
    Replace the placeholders:

    - `-p`: Node name

    - `-n`: Node port number (Default: 20000)

    - `-grpcPort`: Port number for gRPC communication

# Confirm the node is operational and connected to the bootstraps. Check for below in the logs.

![Bootstrap connection check](/img/bootstrap_verify.png)

Once you have successfully started a local Rubix Node, you can proceed to [create a DID](./did-creation.md).
Connecting to [mainnet](./mainnet.md) and custon [subnet](./subnet.md) is explained after DID creation. 

