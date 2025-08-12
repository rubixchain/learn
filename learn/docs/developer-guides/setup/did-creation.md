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

   To get the mnemonic file, go to below location:
   ```bash
   cd /path/to/buildFolder/<Node_Name>/Rubix/TestNetDID/<did_generated>/mnemonic.txt
   ```
   Note: Copy the mnemonic file to somewhere safe. This will help with node recovery. 

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

## Latest Releases

Subscribe to [rubixgoplatform repository](https://github.com/rubixchain/rubixgoplatform) to be notified on new releases.

For help regarding getting notified for releases see [documentation](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)
