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

Use one step installation script for [Linux](https://github.com/rubixchain/rubixnetwork/linux-oneClickSetupScript.zip) machines. This script will install all the required dependencies and will run the setup script.

{{< / hint >}}

{{< expand "Setup Instructions for Linux" >}}
**Java 11**
Follow the system specific instructions from popular sources for [Linux](https://www.linode.com/docs/guides/how-to-install-openjdk-on-ubuntu-20-04/) to install OpenJDK 11.

**go-ipfs 0.6.0**
Download for [Linux](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-amd64.tar.gz)

After downloading and unzipping go-ipfs, Run install.sh script file within a terminal.

**Run IPFS Setup Script**
Configure your network swarm (unique key for the network nodes) and bootstrap (facilitate node visibility) using the script for [Linux](https://github.com/rubixchain/rubixsetup/raw/main/Linux-SetupScript.zip)

After downloading and unzipping SetupScript, Run init.sh script file within a terminal.

{{< /expand >}}

{{< expand "Setup Instructions for Mac" >}}

**Java 11**
Follow the system specific instructions from popular sources for [Mac](https://techoral.com/blog/java/install-openjdk-11-on-mac.html)  to install OpenJDK 11.

**go-ipfs 0.6.0**
Download for [Mac](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_darwin-amd64.tar.gz)

After downloading and unzipping go-ipfs, Run install.sh script file within a terminal.

**Run IPFS Setup Script**
Configure your network swarm (unique key for the network nodes) and bootstrap (facilitate node visibility) using the script for [Mac](https://github.com/rubixchain/rubixsetup/raw/main/Mac-SetupScript.zip)

After downloading and unzipping SetupScript, Run init.sh script file within a terminal.

{{< /expand >}}

{{< expand "Setup Instructions for Windows" >}}

**Java 11**
Follow the system specific instructions from popular sources for [Windows](https://www.codejava.net/java-se/download-and-install-java-11-openjdk-and-oracle-jdk) to install OpenJDK 11.

**go-ipfs 0.6.0**
Download for [Windows](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_windows-amd64.zip)

After downloading and unzipping go-ipfs, Run install.bat script file within a terminal.

**Run IPFS Setup Script**
Configure your network swarm (unique key for the network nodes) and bootstrap (facilitate node visibility) using the script fo [Windows](https://github.com/rubixchain/rubixsetup/raw/main/Windows-SetupScript.zip)

After downloading and unzipping SetupScript, Run init.bat script file within a terminal.

{{< /expand >}}

# Latest Releases

Subscribe to GitHub repo [wallet repository](https://github.com/rubixchain/wallet) or [home repository](https://github.com/rubixchain/rubixnetwork) to be notified on new releases.

For help regarding getting notified for releases see [documentation](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)

## {{< button href="https://github.com/rubixchain/wallet/releases" >}}GUI Wallet from GitHub{{< /button >}}

## {{< button href="https://github.com/rubixchain/rubixnetwork/releases" >}}CLI Node from GitHub{{< /button >}}

---

<br>
<br>

# Communication and Troubleshooting

User communicates with node running in the background via below REST APIs.

Common error messages faced by nodes and the known solutions are listed below.

<br>

{{< tabs "uniqueid" >}}
{{< tab "API Endpoints" >}}
| Field | Endpoint | Descripton | Sample Request |
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
{{< tab "Resolving Error Messages" >}}

| Message                                    | Type   | Descripton                                                                                                                                                                                                          | Response values                                                  |
| ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `Sender Busy`                  | Int    | Lorem Ipsum is simply dummy text of the printing and typesetting industry.. _Deprecated as of 2021-06-30_.                                                       | Lorem Ipsum is simply dummy text of the printing and typesetting industry.      |
| `Sample`                     | Int    | Lorem Ipsum is simply dummy text of the printing and typesetting industry..                                                                                      |Lorem Ipsum is simply dummy text of the printing and typesetting industry..           |

{{< /tab >}}
{{< /tabs >}}
