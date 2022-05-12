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
1. cat  Rubix/Data/DID.json
2. jq '.[] | select (.didHash == "<Linux machines' DID hash>")'Rubix/Data/DataTable.json

If the 'walletHash' values returned in both results don't match then this is the issue.


***NOTE : Wallet recreation isn't advisable at any time. It will cause you to lose all tokens.***


**Solution:** 

Recreate/Regenerate the wallet on the Linux machine.
Run the following commands on the terminal of Linux machine:
1. rm -rf.ipfs/
2. rm -rf Rubix/
3. cd Linux-SetupScript
4. run ./init.sh
5. ipfs daemon  

Go to the download path of the Rubix jar in the system.

6. java -jar rubix.jar
7. curl -s --location --request POST http://localhost:1898/create --form "data=\"${PASSWORD}\"" --form 'image=@Rubix/image.png"'  

Run Sync in both the MacOs and Linux machines.  
Issue should be resolved.



## 2. Token Transer failed from MacOS GUI Wallet to Linux Node.


**Issue:**

 Transaction does'nt complete. The MacOS GUI wallet has a bad/incomplete download. 


**To verify error:** 

- Go to the download path of the wallet on the Mac machine and run the follwoing command in the terminal:    
 $ md5 < rubix wallet downloaded file name >
- Check if the result is equal to the MD5 checksum value of dmg field [here](https://github.com/rubixchain/wallet/releases).
- If it isnt equal, then this is the issue.


**Solution:** 

Redownlaod the MacOS GUI Wallet .dmg file from [github](https://github.com/rubixchain/wallet/releases). Install the wallet.  
Issue should be resoved.




If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
