---
title: Common Issues
geekdocBreadcrumb: false
aliases: ["/Common/issues", "/Rubix/Issues", "/wallet/issue"]
---

# 1. ### Token Transer failed from MacOS GUI Wallet to Linux Node.


**Error message :** Socket timeout


**Issue:** MacOS sender not able to connect to the Linux receiver. The Linux wallet was corrupted as it was inappropriately recreated at an earlier time.


**NOTE : Wallet recreation isn't advisable. It may cause you to lose all tokens.**


**To verify error:** Run the following commands:
1. cat  Rubix/Data/DID.json
2. jq '.[] | select (.didHash == "<Your node's DID hash, in this case MacOS system's DID hash>")'Rubix/Data/DataTable.json

If the 'walletHash' values returned in both results don't match then this is the issue.


**Solution:** Recreate/Regenerate the wallet on the Linux machine. Steps:
Run the following commands on the terminal of Linux machine:
1. rm -rf.ipfs/
2. rm -rf Rubix/
3. cd Linux-SetupScript
4. run ./init.sh
5. ipfs daemon
Now go to the download path of the Rubix jar in the system.
cd <path>
6. java -jar rubix.jar
7. curl -s --location --request POST http://localhost:1898/create --form "data=\"${PASSWORD}\"" --form 'image=@Rubix/image.png"'  

Now run Sync in the MacOs and Linux machine. 
Issue should be solved.



# 2. ### Token Transer failed from MacOS GUI Wallet to Linux Node.


**Issue:** Transaction does'nt complete. The MacOS GUI wallet had a bad/incomplete download. 


**To verify error:** 

1. Go to the download path of the wallet on the Mac machine and run the follwoing command in the terminal
    $ md5 <rubix wallet downloaded file name>
2. Check if the result is equal to the MD5 checksum value for dmg field on this github [link] (https://github.com/rubixchain/wallet/releases).


**Solution:** Redownlaod the MacOS GUI Wallet .dmg file from [github] (https://github.com/rubixchain/wallet/releases). Install the wallet. Try running the transaction again.




If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
