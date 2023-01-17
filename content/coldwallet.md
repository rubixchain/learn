---
title: Cold Wallet
geekdocBreadcrumb: false
aliases: ["/wallet", "/cold-wallet", "/keys"]
---


A cold wallet is a cryptocurrency storage wallet that is not connected to the internet, making it difficult to remotely steal the assets it stores. They keep the user's address and private key safe while allowing them to view their portfolio without compromising their private keys. Cold wallets are the safest way to store your crypto assets. They usually require a bit of knowledge to set up. With cold storage, the generation and storage of private keys is done offline. Most crypto assets stored online are vulnerable to hackers who actively attack online crypto wallets. Most exchanges and brokers store large portions of their cryptocurrencies in cold wallets. This makes it impossible for hackers to steal cryptocurrency from wallets. Individual owners of cryptocurrencies can also store cryptocurrencies in cold wallets.

A Cold wallet- Hot Wallet on Rubix is the best way to ensure that the crypto assets and the associated Secret Shares and keys are stored securely in a system that has zero access to internet (Cold wallet). The user can perform Receiver side transaction on the Hot wallet adn when the user is a sender needs to sign the transaction details in the cold wallet for the transaction to go through.

Below given are the steps to set up a Cold-Hot wallet combo on Rubix platform.

# Prerequisites

Any computer or personal laptop with 8GB of RAM and a decent internet connection can seamlessly run Rubix for token transfers / become validator / mining.

Kindly Install the pre-requisites in both the machines which has been chosen to be setup as hot and cold wallet.

{{< hint info >}}
### One Step Installation

Use one step installation script for [Linux](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Linux) / [Windows](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Windows.exe) / [Mac](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-MacOS) machines. This script will install all the required dependencies. Once the dependencies are installed you can download the Latest Release from the link provided in the [Latest Releases](https://learn.rubix.net/node-setup/#latest-releases).

If you are not interested in One-Click Pre-Requisite setup, kindly download the document from [here for Linux](https://www.dropbox.com/s/8o8sathz81lmnho/Rubix%20Node%20Installation%20Instructions_%20Command%20Line%20-%20Linux.pdf?dl=0)
{{< / hint >}}

# Setting up Cold Wallet

1. To set up a Rubix Cold Wallet, download the Rubix executable JAR from Rubix Github [Latest Releases](https://learn.rubix.net/node-setup/#latest-releases) along with the file [didcreateimag.png](https://github.com/rubixchain/rubixnetwork/blob/master/didcreateimag.png) and save it to a portable drive such as a USB.

2. Connect the portable drive to the Machine dedicated for cold wallet setup and copy the 2 files to a folder. 
3. Open a command prompt window(for Windows)/terminal (fro mac and linux) and navigate to the folder where the Rubix executable JAR and the png file are saved.
4. Once the above step is finished execute the below command.
```
$  java -jar <jar_name>.jar
```

5. Once the jar is now running, next step would be to create the shares namely, **DID.png, PrivateShare.png, PublicShare.png**
6. For creating the above 3 files open a new command prompt tab and execute the following curl command.
```
$ curl --location --request POST 'http://localhost:1898/newColdWallet' --form 'passPhrase="<passPhrase>"' --form 'image=@"<imagepath>"'
```

Please note to input PassPhrase and imagepath - imagepath would be the path where the didimagecreate.png is saved in the machine.

7. On Execution of the command in the previous step, if successful following would be the output received for the curl command.
```
{
    "data": {
        "response": {
            "status": "Success",
            "message": "Shares created successfully and stored in <location>"
        }
    },
    "message": "",
    "status": "true"
}
```
8. In the Home folder of the Machine a Folder named **Rubix** would be created and the 3 file **DID.png, PrivateShare.png, PublicShare.png,** will be generated and stored in the Path **Rubix/DATA/RubixShares**

9. With this Cold wallet set-up is partially completed. We move on to set up the Hot Wallet, the part of the Rubix Col-Hot Wallet that communicated to the nodes in Rubix network for transactions.

# Setting up Hot Wallet

1. After the successful setup of the Cold wallet, moving on to the setup of the Hot wallet.
2. Using the ***[one-click-setup](https://github.com/rubixchain/rubixnetwork/tree/master/setupscripts/OneClickSetup)*** script available for mac, windows and linux os from Rubix github page, install the pre-requisites, such as OpenJDK Java  and ipfs. Follow the instructions given in github.
3. To check if ipfs is installed, in a cmd/terminal, type and execute the command ipfs id.
4. Now in the Hot wallet also download the Rubix Executable JAR and run it as in **Part 1.d**
5. Copy the files **DID.png and PublicShare.png** from the cold wallet in the path **Rubix/DATA/RubixShares,** to the system dedicated to be set up as a Hot Wallet.
6. Once above step is completed, execute the below curl command
```
 curl --location --request POST 'http://localhost:1898/hotWallet' --form 'did=@"<imagepath>"' --form 'publicShare=@"<imagepath>"'
```
7. In the Previous step please provide the path where the DID.png and Publicshare.png are copied and stored in the machine designated for HotWallet.
8. On the Successful execution of the above curl command following will be the output.
```
{
    "data": {
        "response": {
            "status": "Success",
            "DID": "didIpfsHash",
            "PeerId": "peerId",
            "walletHash": "widIpfsHash"
        }
    },
    "message": "",
    "status": "true"
}
```
9. with the completion of above steps the Hot wallet has been successfully set up.

10. To finish up the setup of coldwallet follow the below steps

11. Copy the value of DID from the above response and in the cold wallet create a folder in the path **Rubix/DATA/** where folder name is the value of DID and move the DID.png , PrivateShare.png and PublicShare.png
12. Also copy the file named **DID.json** in the Path **Rubix/DATA/** from the Hot Wallet to the path **Rubix/DATA/** in the Cold Wallet.
13. After the completion of the above steps, please proceed to create the Private and Public Key pairs for the rubix node.
14. To Create the Private and Public Key pairs execute the below curl command. Enter the private key password according to user

```
curl --header "Content-Type: application/json" --request POST 'http://localhost:1898/generateEcDSAKeys' --data '{ "pvtKeyPass" : "<password>" , "returnKey" : 0}'
```

Please do note, the user will have sole responsibility to remember the password for the Private Key.

# Transactions on Cold - Hot Wallet

## Initiating a Transaction

1. To initiate a transaction from Rubix node open a new cmd/terminal tab on the Hot wallet system, and execute the below curl script.

```
curl --header "Content-Type: application/json" --request POST http://localhost:1898/initiateTransaction --data '{ "receiver": "<Receiver DID>", "tokenCount":2, "comment":"<any comment>", "type":1, "pvtKeyPass":"<Sending node Pvt key Password>"}'
```

2. Since the Hot Wallet does not contain the PrivateShare.png that is required to sign transactions, the output of the above curl execution will be a file which holds the txn data to be signed.
3. On the command line tab where the Rubix executable is running, after the successful execution  of the above curl command, the below message will be displayed.

```
Challenge Payload for txnId 7e71777133c87d36c46c22f9ae3b67e5225e684760395c0ff06e85a4b99919b9
generated and saved to path /home/nodeadmin/Rubix/Wallet/WALLET_DATA//ChallengePayload7e71777133c87d36c46c22f9ae3b67e5225e684760395c0ff06e85a4b99919b9.json
```

4. The ChallengePayload file for the corresponding txn contains the data that needs to be signed for txn to continue.

## Signing a Transaction

1. To Sign an Offline transaction copy the Challenge Payload file, for the transaction that was initiated, to the Cold Wallet.
2. Save the Challenge Payload file in the path **Rubix/Wallet/WALLET\_DATA** in the cold wallet
3. Once this is done, check whether the Rubix jar is started or not
4. To Sign the challenge payload execute the below curl command, by supplying the txn ID of the Challenge Payload file.
```
curl --header "Content-Type:application/json" --request POST http://localhost:1898/signChallenge --data '{"transactionID": ""}'
```
5. The result of the above curl command will be the Signed payload. Written into a file with name in the format

```
signedPayload<txnId>.json saved in the path Rubix/Wallet/WALLET\_DATA
```

## Continuing a Transaction
1. Now after getting the Signed payload from Cold wallet, move the signed payload file from the cold wallet to the Path **Rubix/Wallet/WALLET\_DATA** in the Hot Wallet.
2. The next step will be to execute the below curl command to continue the txn and send the token to receiver

```
curl --header "Content-Type: application/json" --request POST http://localhost:1898/transactionFinality --data '{"transactionID": ""}'
```

3. In the above curl command the transaction Id field is mandatory and the value should be the ID that was generated when calling the curl command in **3.a.i**