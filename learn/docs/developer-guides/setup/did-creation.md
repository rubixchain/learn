---
title: DID Creation & Key Management
sidebar_label: DID Creation & Key Management
---

<!-- File: docs/developer-guides/setup/did-creation.md -->
# Create a DID (Decentralized Identifier) for the Node and register the DID

1. Once the node is running, open a new tab in terminal while being in the same build path, create a DID by executing:

   ```bash
   ./rubixgoplatform createdid -didType 4 -port <port_number>
   ```
   Example
    ```bash
    ./rubixgoplatform createdid -didType 4 -port 20000
    ```
    ![DID Creation](/img/didcreate.png)

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

## Restore DID Using Mnemonic File
- If you already have a mnemonic file, you can restore the DID corresponding to it.

 ```bash
    ./rubixgoplatform createdid -didType 4 -port <port_number> -mnemonicKeyFile < path_to_mnemonic_file > 
```
Example
```bash
 ./rubixgoplatform createdid -didType 4 -port 21200 -mnemonicKeyFile /home/rubix/Sai-Rubix/rubixgoplatform/linux/node12/Rubix/saimnemonic.txt
```


## Purchase test RBTs from Rubix faucet
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
![Account Info](/img/getaccountinfo.png)

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
