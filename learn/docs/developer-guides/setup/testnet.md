---
title: Connect to Rubix Testnet
sidebar_label: Connect to Rubix Testnet
---

# Connect to Rubix Testnet

- Use the `-testNet` flag when starting the Node to connect to Rubix testnet.
- Ensure `testswarm.key` is present in the root folder 

## Rubix faucet

Add short desc on faucet - (Limit and Validity of test tokens)

### Get test RBTs from Rubix faucet
To get test RBTs (Rubix Blockchain Test Tokens):
 - Open the [faucet webpage](http://103.209.145.177:4000/) in browser
 - In the address field, provide your DID created above to receive test tokens for your node, and submit DID.

## Verification

### Check test token balance
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

### Try transfer test okens
To transfer a specified amount of tokens to the destination DID:
   ```bash
   ./rubixgoplatform transferrbt -rbtAmount <transfer_amount> -senderAddr <sender_did> -receiverAddr <receiver_did>  -port <sender_port_number>
   ```
   Example
   ```bash
   ./rubixgoplatform transferrbt -rbtAmount 1.0 -senderAddr bafybmicfvpln2j5yfjeokmafjsefz7ykibvtsg2swxmnr6nhvflj6qvo34 -receiverAddr bafybmibhh5zyobsmrn3t5yfeviwruifkogp3xmonhdzgc7qksyvhgqtble -port 20000
   ```

Congratulations! You have successfully joined the Rubix TestNet. You can now use the node for testing and development purposes.
