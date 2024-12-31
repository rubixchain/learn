---
title: Joining the Testnet
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

Faucet tokens are premined tokens available for users to test and interact with the Rubix testnet.

When a new node joins the testnet, it will have 0 tokens to start with. To help users get started, the Rubix testnet provides a faucet service where users can request premined test tokens. These tokens are not earned through validation but are instead distributed for testing and development purposes.

To request test tokens, users must first create a node in the Rubix testnet and generate a Decentralized Identifier (DID). The DID is then submitted to the faucet, which transfers requested amount of tokens to the users DID. The faucet have kept a limit on amount of token per node per day inorder to avoid spam requests.

Test tokens are free and allow users to experiment with the testnet’s functionality, such as performing token transfers, validating token chains, testing smart contracts etc. Unlike mainnet tokens, test tokens do not hold any real-world value and cannot be transferred to the main network.


## Pre-requisites  

### 1. Install Go 

Any computer or personal laptop with 8GB of RAM and a stable internet connection can seamlessly run Rubix for token transfers / become validator.

- Download the latest Go binary package for your operating system from [Go's official site](https://golang.org/).  
- Follow the installation instructions for your OS.  
- Verify the installation and ensure the Go version is correct:

   ```bash
   go version
   ```

### 2. Download and Extract IPFS Kubo (v19)

- Visit [IPFS Kubo releases](https://github.com/ipfs/kubo/releases/tag/v0.19.0) and download version 19 suitable for your operating system.
- Locate the IPFS executable in the extracted files and verify if it has executable permissions.

### 3. Clone the RubixGoPlatform Repository

- Clone the repository:
    ```bash
    git clone https://github.com/rubixchain/rubixgoplatform.git
    ```

- Navigate to the repository directory and checkout to the development branch
    ```bash
    cd rubixgoplatform
    git checkout development
    ```

### 4. Build the RubixGoPlatform Executable
- For Linux : 
    ```bash
    make compile-linux
    ```

- For Windows : 
    ```bash
    make compile-windows
    ```

- For MAC : 
    ```bash
    make compile-mac
    ```

Upon successful compilation, the "rubixgoplatform" executable will be created in a folder corresponding to your operating system. For example, on Linux (build directory), it will be located in the ./linux directory.

### 5. Prepare the Necessary Files

Ensure the following files are in the build directory:
- rubixgoplatform executable
- ipfs executable (from Kubo v19, extract and copy in the build folder)
- testswarm.key (Its already part of executable. Copy it to the build directory)


## Joining the Testnet

### Start a Rubix Node

1. Open a terminal and navigate to the directory containing the `rubixgoplatform` executable. This will already be present in the build directory.

   ```bash
   cd /path/to/rubixgoplatform
   ```

2. Start a Rubix node with the following command:
   ```bash
   ./rubixgoplatform run -s -testNet -addFaucetQuorums -p <node_name> -n <node_number> -grpcPort <grpc_port>
    ```
    Example
    ```bash
    ./rubixgoplatform run -s -testNet -addFaucetQuorums -p node0 -n 0 -grpcPort 10500
    ```
    This will start the node in port 20000. The port number where the node starts will be 20000+(node_number)

    - testNet: This flag will start the node in test network

    - addFaucetQuorums: This flag adds a list of pre-defined quorums
    
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

### Generate Test RBT Tokens
To get test RBTs (Rubix Blockchain Test Tokens):
 - Open the [faucet webpage](http://103.209.145.177:4000/) in browser
 - In the address field, provide your DID created above to receive test tokens for your node, and submit DID.


## Verification
Validate token generation by checking the node’s token balance. 
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
Congratulations! You have successfully joined the Rubix testnet. You can now use the node for testing and development purposes.

## Next Steps

Now that you have successfully joined the Rubix testnet, you can:
- Explore Rubix’s testnet functionality, such as [smart contracts](https://learn.rubix.net/smartcontract/) and other [APIs](https://learn.rubix.net/api/) to get information related to rubix node etc. 
- Use the [Rubix Explorer](www.explorerlink.com) to monitor transactions and node activity.
- Contact the [Rubix team](https://www.rubix.net/Contact) for further support.

## Latest Releases

Subscribe to [rubixgoplatform repository](https://github.com/rubixchain/rubixgoplatform) to be notified on new releases.

For help regarding getting notified for releases see [documentation](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)

## {{< button href="https://github.com/rubixchain/rubixgoplatform/releases" >}}Version Releases{{< /button >}}

---
<br>