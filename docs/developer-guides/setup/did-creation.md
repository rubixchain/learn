---
title: DID Creation & Key Management
sidebar_label: DID Creation & Key Management
---

# Create a DID(Decentralized Identity)

Each Rubix node is identified by a Decentralized Identity (DID) a self-generated, cryptographically verifiable public key that anchors the node’s presence and authority in the network. If you have a DID, [register](#register) the DID or if you have mneumonics key, you can [restrore](#restore) your DID.

## Create
Once the node is running, open a new tab in terminal while being in the same build path, create a DID by executing:

   ```bash
   ./rubixgoplatform createdid -didType <did_type> -port <port_number>
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

## Register
After creating a DID, you can publish your DID among others in your network by registering your DID by executing:

    ```bash
      ./rubixgoplatform registerdid -did <did_created> -port <port_number>
    ```
    Example
    ```bash
      ./rubixgoplatform registerdid -did bafybmicfvpln2j5yfjeokmafjsefz7ykibvtsg2swxmnr6nhvflj6qvo34 -port 20000
    ```

## Restore
If you already have a mnemonic file, you can restore your DID.

```bash
  ./rubixgoplatform createdid -didType <did_type> -port <port_number> -mnemonicKeyFile <mnemonic_file_path> 
```
Example
```bash
  ./rubixgoplatform createdid -didType 4 -port 21200 -mnemonicKeyFile /home/rubix/Sai-Rubix/rubixgoplatform/linux/node12/Rubix/saimnemonic.txt
```

