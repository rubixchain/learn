---
title: Common Issues
geekdocBreadcrumb: false
aliases: ["/Common/issues", "/Rubix/Issues", "/wallet/issue"]
---

## 1. Token Transer failed from MacOS GUI Wallet to Linux Node.


**Error message :** 

Socket timeout


**Issue :** 

MacOS sender not able to connect to the Linux receiver. The Linux wallet which was trying to be reached out to was corrupted, as it was inappropriately recreated at an earlier time.



**To verify error :** 

Run the following commands on the Linux machine:
1. " $ cat  Rubix/Data/DID.json "
2. " $ jq '.[] | select (.didHash == "<Linux machines' DID hash>")'Rubix/Data/DataTable.json "

If the 'walletHash' values returned in both results don't match then this is the issue.


***NOTE : Wallet recreation isn't advisable at any time. It will cause you to lose all tokens.***


**Solution:** 

Recreate/Regenerate the wallet on the Linux machine.
Run the following commands on the terminal of Linux machine:
1. " $ rm -rf.ipfs/ "
2. " $ rm -rf Rubix/ "
3. " $ cd Linux-SetupScript "
4. " $ run ./init.sh "
5. " $ipfs daemon " 

Go to the download path of the Rubix jar in the system.

6. " $ java -jar rubix.jar "
7. " $ curl -s --location --request POST http://localhost:1898/create --form "data=\"${PASSWORD}\"" --form 'image=@Rubix/image.png"' "

Run Sync in both the MacOs and Linux machines.  
Issue should be resolved.



## 2. Token Transer failed from MacOS GUI Wallet to Linux Node.


**Issue:**

 Transaction does'nt complete. The MacOS GUI wallet has a bad/incomplete download. 


**To verify error:** 

- Go to the download path of the wallet on the Mac machine and run the follwoing command in the terminal:    
 " $ md5 < rubix wallet downloaded file name > "
- Check if the result is equal to the MD5 checksum value of dmg field [here](https://github.com/rubixchain/wallet/releases).
- If it isnt equal, then this is the issue.


**Solution:** 

Redownlaod the MacOS GUI Wallet .dmg file from [github](https://github.com/rubixchain/wallet/releases). Install the wallet.  
Issue should be resoved.

## 3. Common Issues and solutions

{{< tabs "uniqueid" >}}
{{< tab "Resolving Issues" >}}

| Issue                                    | Solution     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Token transfer failure due to receiver's node not updated with latest jar.| For successful token transfer, both receiver and sender must be updated with the latest jar. |
| Token transfer failure due to IPFS not running on the receiver's node.  | For successful token transfer, both sender and receiver nodes must have IPFS daemon running. |
| `Read timed out`: When a quorum node is not reachable. | If 15 out of 21 quorum nodes respond back, this time out on couple of nodes is not an issue. Token transfer will continue successfully. |
|`"message":"Sender Data Not Available"`: Error encountered by sender during token transfer. | Receiver has to sync. Through CLI /sync API can be called by running `curl --header "Content-Type: application/json" --request GET http://localhost:1898/sync` |
| `"error":"Bad Request"`: Error encountered by sender while sending curl request to /initiateTransaction for token transfer on a Linux machine. | In the curl request, quotations should be used with care, double quotes on windows system and single quotes on linux system for specifying Content-Type: `"Content-Type: application/json"` must be used for windows and `'Content-Type: application/json'` must be used for Linux systems. |
| `Sender is Busy`: Error message encountered while doing type 2 transactions. | Sender has to restart rubix.jar and retry the transactions in such cases. |
| `"error":"Internal Server Error"` | This is a generic error, log files should be checked in such cases.|
|`"message", "Multiple Owners for <TokenHash>"` | This message means the tokens being transfered have multiple owners/pins. |
|`"message", "Broken Cheque Chain. Kindly re-initiate transaction"`| This message means that the Token chain has been modified.|
|`"message", "Ownership Check Failed"`| This message points that sender does not have ownership of tokens being transfered|
|`"message", "Token wholly spent already. Kindly re-initiate transaction"`|Token used for parts has been used entirely. |
|`"message","Contains Invalid Tokens. Kindly check tokens in your wallet"`| Tokens being transfered are modified tokens or tokens,tokenchains do not exist in senders Rubix wallet.|





{{< /tab >}}
{{< /tabs >}}




If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
