---
title: Developer Guides
aliases:
  [
    "/setup",
    "/testnet",
    "/testing",
    "/start",
  ]
geekdocBreadcrumb: false
weight: 1
---



###  Install the Rubix Executable

To install the **Rubix Executable**, use the latest [release binary](https://github.com/rubixchain/rubixgoplatform/releases) or [build from source](http://localhost:1313/new-learn-site/buildfromsource/).



###  Run a Rubix node locally
To run a **Rubix Node**, the following files are needed:
- `rubixgoplatform` executable
- `ipfs` executable
- swarm key. 

| Tool                      | Version       | Purpose                                              |
|---------------------------|---------------|------------------------------------------------------|
| **IPFS Binary**           | v0.19.0       | Enables decentralized storage                        |
| **Test Swarm Key**        | Latest        | (`testswarm.key`) Required to join the Rubix Testnet |
| **Swarm Key**             | Latest        | (`swarm.key`) Required to join the Rubix Mainnet     |




### 1. Download and Extract IPFS Kubo (v19)

- Visit [IPFS Kubo releases](https://github.com/ipfs/kubo/releases/tag/v0.19.0) and download version 19 suitable for your operating system.
- Locate the IPFS executable in the extracted files and verify if it has executable permissions.
- If the IPFS executable does not have executable permissions, run the following command in your terminal to add executable permissions:
    ```bash
    chmod +x ipfs
    ```


### 2. Prepare the Necessary Files

Ensure the following files are in a directory:
- rubixgoplatform executable 
- ipfs executable (from Kubo v19, extract and copy it in the same directory in which rubixgoplatform executable is present)
- <a href="/testswarm.key" download="testswarm.key">testnet-swarmkey</a> (to connect rubix official testnet) or <a href="/swarm.key" download="swarm.key">swarmkey</a> (to connect rubix mainnet). After downloading the swarmkey, copy it in the same directory in which rubixgoplatform and ipfs executables are present.
- To join an existing subnet or [create your own subnet](), copy the swarmkey corresponding to the subnet in the same directory. 




## Setting Up the Node

### Start a Rubix Node

1. Open a terminal and navigate to the directory containing the `rubixgoplatform` executable. This will already be present in the build directory.

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

    - testNet: This flag will start the node in test network

    - defaultSetup: This flag adds a list of default quorums for testing. Skip this flag if you want to use your own quorums.
    
    Replace the placeholders:

    - \<node\_name\>: A unique name for your node

    - \<node\_number\>: Numeric identifier for the node

    - \<grpc\_port\>: Port number for gRPC communication

### Confirm the node is operational and connected to the testnet. Check for below in the logs.

![Bootstrap connection check](/images/bootstrap_verify.png)


### Create a DID (Decentralized Identifier) for the Node and register the DID

1. Once the node is running, open a new tab in terminal while being in the same build path, create a DID by executing:

   ```bash
   ./rubixgoplatform createdid -didType 4 -port <port_number>
   ```
   Example
    ```bash
    ./rubixgoplatform createdid -didType 4 -port 20000
    ```
    ![DID Creation](/images/didcreate.png)

   Copy the mnemonic file somewhere safe. This will help with node recovery. To get the mnemonic file, go to below location:
   ```bash
   cd /path/to/buildFolder/<Node_Name>/Rubix/TestNetDID/<did_generated>
   ```

2. Register the DID created by executing:
   ```bash
   ./rubixgoplatform registerdid -did <did_created> -port <port_number>
    ```
    Example
    ```bash
    ./rubixgoplatform registerdid -did bafybmicfvpln2j5yfjeokmafjsefz7ykibvtsg2swxmnr6nhvflj6qvo34 -port 20000
    ```

    ### Purchase test RBTs from Rubix faucet
To get test RBTs (Rubix Blockchain Test Tokens):
 - Open the [faucet webpage](http://103.209.145.177:4000/) in browser
 - In the address field, provide your DID created above to receive test tokens for your node, and submit DID.


## Verification

### Check Token Balance
Verify test RBTs by checking the node’s token balance. 
To check balance of a particular DID:
   ```bash
   ./rubixgoplatform getaccountinfo -did <did> -port <port_number>
   ```
   Example
   ```bash
   ./rubixgoplatform getaccountinfo -did bafybmicfvpln2j5yfjeokmafjsefz7ykibvtsg2swxmnr6nhvflj6qvo34 -port 20000
   ```
You should see one RBT as below.
![Account Info](/images/getaccountinfo.png)

### Transfer Tokens
To transfer the specified amount of tokens to the destination DID:
   ```bash
   ./rubixgoplatform transferrbt -rbtAmount <transfer_amount> -senderAddr <sender_did> -receiverAddr <receiver_did>  -port <sender_port_number>
   ```
   Example
   ```bash
   ./rubixgoplatform transferrbt -rbtAmount 1.0 -senderAddr bafybmicfvpln2j5yfjeokmafjsefz7ykibvtsg2swxmnr6nhvflj6qvo34 -receiverAddr bafybmibhh5zyobsmrn3t5yfeviwruifkogp3xmonhdzgc7qksyvhgqtble -port 20000
   ```

Congratulations! You have successfully joined the Rubix network. You can now use the node for testing and development purposes.

## Next Steps

Now that you have successfully joined the Rubix network, you can:
- Explore Rubix’s testnet functionality, such as [smart contracts](https://learn.rubix.net/smartcontract/).

## Latest Releases

Subscribe to [rubixgoplatform repository](https://github.com/rubixchain/rubixgoplatform) to be notified on new releases.

For help regarding getting notified for releases see [documentation](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)
