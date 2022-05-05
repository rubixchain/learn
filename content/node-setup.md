---
title: Setup Rubix Node
aliases:
  [
    "/mining",
    "/setup",
    "/mine",
    "/rbt",
    "/wallet",
    "/dist",
    "/start",
  ]
geekdocBreadcrumb: false
weight: 1
---

Nodes in Rubix mine token by utilizing credits earned by validating transactions in the network.

When a new node joins the network, it will have 0 credits and 0 tokens to start with. Over time common pool will pick the node to validate transactions coming to the network. For every transaction that is validated, the node will earn 1 credit. Credits are non transferable and are only used to mine a new RBT token.

Number of credits required by a node to mine a token is determined by the current level of the network. For example, if the network is at level 3, a node will need 32 credits to mine a token. If the network is at level 4, a node will need 64 credits to mine a token. Credit required to mine a token doubles every time the network level increases.

To know more about level and credits, please read the [Whitepaper](https://github.com/rubixchain/rubixnetwork/blob/master/RubiX_WhitePaper_R1.7.pdf).

# Prerequisites

Any computer or personal laptop with 8GB of RAM and a decent internet connection can seamlessly run Rubix for token transfers / become validator / mining.

{{< hint info >}}
### One Step Installation

Use one step installation script for [Linux](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Linux) / [Windows](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Windows.exe) / [Mac](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-MacOS) machines. This script will install all the required dependencies and will run the setup script.

{{< / hint >}}

{{< expand "Setup Instructions for Linux" >}}

{{< button href="https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Linux" >}}One Click Setup for Linux{{< /button >}}

  - Open a fresh instance of terminal under download path and run the following commands (without $)

  - $ chmod +x RubixOneClickSetup-Linux
  
  - $ ./RubixOneClickSetup-Linux
  
  - Provide user password when asked
  
  
{{< /expand >}}

{{< expand "Setup Instructions for Mac" >}}

{{< button href="https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-MacOS" >}}One Click Setup for Mac{{< /button >}}

  - Open a fresh instance of terminal under download path and run the following commands (without $)

  - $ chmod +x RubixOneClickSetup-MacOS
  
  - $ ./RubixOneClickSetup-MacOS
  
  - Provide user password when asked
  
{{< /expand >}}

{{< expand "Setup Instructions for Windows" >}}

{{< button href="https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Windows.exe" >}}One Click Setup for Windows{{< /button >}}
  - Open a fresh instance of cmd.exe under download path and run the following commands (without $)

  - $ RubixOneClickSetup-Windows.exe
  
  - Provide user password when asked

{{< /expand >}}

# Latest Releases

Subscribe to GitHub repo [wallet repository](https://github.com/rubixchain/wallet) or [home repository](https://github.com/rubixchain/rubixnetwork) to be notified on new releases.

For help regarding getting notified for releases see [documentation](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)

## {{< button href="https://github.com/rubixchain/wallet/releases" >}}GUI Wallet{{< /button >}}

## {{< button href="https://github.com/rubixchain/rubixnetwork/releases" >}}CLI Node{{< /button >}}

---

<br>
<br>

# Communication and Troubleshooting

User communicates with node running in the background via below REST APIs.

Common error messages faced by nodes and the known solutions are listed below.

<br>

{{< tabs "uniqueid" >}}
{{< tab "API Endpoints" >}}
| Field | Endpoint | Description | Sample Request |
| ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| DID Creation | `/createDID` | Creates a unique Decentralized IDentity | ```curl --location --request POST 'http://localhost:1898/create' --form 'data="Rubik"' --form 'image=@"imagepath"'``` |
| Initial Setup | `/start` | Does the initial setup of IPFS and syncing the network nodes. | ```curl --header "Content-Type: application/json" --request GET 'http://localhost:1898/start'``` |
| Transfer Tokens | `/initiateTransaction` | Transfers token(s) from one wallet address to another. | ```curl --header "Content-Type: application/json" --request POST http://localhost:1898/initiateTransaction --data '{ "receiver": "<receiver DID here>", "tokenCount":1, "comment":"transaction comments", "type":1}'``` |
| Account Information | `/getAccountInfo` | Retrieves the user account details. | ```curl --header "Content-Type: application/json" --request GET http://localhost:1898/getAccountInfo``` |
| ~~Details for Dashboard~~ | `/getDashboard` | Lists all required details of user's wallet. | ```curl --header "Content-Type: application/json" --request GET http://localhost:1898/getDashboard``` |
| Get Transaction Details with Transaction ID | `/getTxnDetails` | Details of a particular transaction like Quorum involved, token transferred, receiver details, time and more | ```curl --header "Content-Type: application/json" --request POST  http://localhost:1898/getTxnDetails --data '{"transactionID": "<transaction ID here>"}'``` |
| Get Transaction Details with Date | `/getTxnByDate` | Retrieves the details of all the transactions committed during the specified period | ```curl --header "Content-Type: application/json" --request POST <http://localhost:1898/getTxnByDate> --data-raw '{"sDate":"Wed Jun 09 12:56:04 AST 2021","eDate":"Wed Jun 09 12:57:58 AST 2021"}'``` |
| Get Transaction Details with Comment | `/getTxnByComment` | Retrieves the details of all the transactions committed with the specified comment. | ```curl --header "Content-Type: application/json" --request POST http://localhost:1898/getTxnByComment --data '{"comment":"First"}'``` |
| Get Transaction Details with Count | `/getTxnByCount` | Retrieves the last specified count of transactions committed | ```curl --header "Content-Type: application/json" --request POST http://localhost:1898/getTxnByCount --data '{"txnCount" : 3}'``` |
|  Get Transaction Details with User's DID | `/getTxnByDID` | Retrieves all the transactions made with the input DID | ```curl --header "Content-Type: application/json" --request POST <http://localhost:1898/getTxnByDID> --data '{"did" : "QmdkrLpyoGFrhsbeuZrXpcvr2QRsLuQnrbXVfJTe1yXqzy"}'``` |
| Get Transaction Details by Range | `/getTxnByRange` | Retrieves all the transactions made with the input DID | ```curl --header "Content-Type: application/json" --request POST http://localhost:1898/getTxnByRange --data-raw '{"startRange":1, "endRange":4}'``` |
| Synchronise Network Nodes | `/sync` | To synchronize the DIDs of the systems, so that the node will have an updated list of all the DIDs in the network. | ```curl --header "Content-Type: application/json" --request GET http://localhost:1898/sync``` |
| View bootstraps | `/bootstrap` | Return the list of bootstraps connected to the node | ```curl --header "Content-Type: application/json" --request GET http://localhost:1898/bootstrap``` |
| Add bootstrap | `/bootstrap` | Add a bootstrap id to the boostrap list | ```ccurl --header "Content-Type: application/json" --request POST http://localhost:1898/bootstrap?id=<bootstrap-id>``` |
| Remove bootstrap | `/bootstrap` | Remove boostrap id from the boostrap list | ```curl --header "Content-Type: application/json" --request DELETE http://localhost:1898/bootstrap?id=<bootstrap-id>``` |

{{< /tab >}}
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





{{< /tab >}}
{{< /tabs >}}
