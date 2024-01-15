---
title: EndPoints
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

User communicates with the node thats running in the background via REST APIs and CLI. Below listed are the Endpoints with which user can able to view information, transfer tokens and so on.

{{< tabs "uniqueid" >}}
{{< tab "Rubix Node Setup & Basic" >}}
| Field | Sample Usage | Description | Flags |
| ---------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Run Rubix node | `./rubixgoplatform run -p node1 -n 0 -s -grpcPort 10500` | Creates a unique Decentralized IDentity | This following options are used to run the Rubix node<br><br>`-c string`<br>Configuration file for the core (default "api_config.json")<br>`-k string`<br>Config file encryption key (default "TestKeyBasic#2022")<br>`-n uint`<br>Node number<br>`-p string`<br>Working directory path (default "./")<br><br>`-s`<br>Start the core<br>`-testNet`<br>Run as test net<br>`-testNetKey string`Test net key (default "testswarm.key")<br> |
| Create DID | `./rubixgoplatform createdid` | This command is used for creating a Decentralized IDentity (DID). | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-didType int`<br>DID type (0-Basic Mode, 1-Standard Mode, 2-Wallet Mode) (default 0)<br>`-didSecret string`<br>DID secret (default "My DID Secret")<br>`-privPWD string`<br>Private key password (default "mypassword")<br>`-quorumPWD string`<br>Quroum key password (default "mypassword")<br>`-imgFile string`<br>Image file to create DID (Must be 256x256 PNG image) (default "image.png")<br>`-didImgFile string`<br>DID image file name (default "did.png")<br>`-privImgFile string`<br>DID private share image file name (default "pvtShare.png")<br>`-pubImgFile string`<br>DID public share image file name (default "pubShare.png")<br>`-privKeyFile string`<br>DID private key file name (default "pvtKey.pem")<br>`-pubKeyFile string`<br>DID public key file name (default "pubKey.pem")<br> |
| Add Bootstrap | `./rubixgoplatform addbootstrap -peers /ip4/103.60.213.76/tcp/4001/p2p/QmR1VH6SsEN1wf4EmstxXtNMvR35KEetbBetiGWWKWavJ6` | This command is used to add bootstrap peers. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-peers string`<br>Bootstrap peers, multiple peers will be separated by a comma<br>`-port string`<br>Server/Host port (default "20000")<br> |
| Remove Bootstrap | `./rubixgoplatform removebootstrap -peers /ip4/103.60.213.76/tcp/4001/p2p/QmR1VH6SsEN1wf4EmstxXtNMvR35KEetbBetiGWWKWavJ6` | This command is used for removing bootstrap peers. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-peers string`<br>Bootstrap peers, multiple peers will be separated by a comma<br>`-port string`<br>Server/Host port (default "20000")<br> |
| Remove All Bootstrap | `./rubixgoplatform removeallbootstrap` | This command is used for removing all bootstrap peers. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br> |
| Get All Bootstrap | `./rubixgoplatform getallbootstrap` | This command is used for retrieving all bootstrap peers. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br> |
| Get All DID | `./rubixgoplatform getalldid` | This command is used for retrieving all Decentralized IDentities (DIDs). | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br> |
| Add Quorum | `./rubixgoplatform addquorum` | This command is used for adding a quorum. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-quorumList string`<br>Quorum list file name (default "quorumlist.json")<br> |
| Get All Quorum | `./rubixgoplatform getallquorum` | This command is used for retrieving all quorum details. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br> |
| Remove All Quorum | `./rubixgoplatform removeallquorum` | Use this command to remove all quorum lists. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br> |
| Setup Quorum | `./rubixgoplatform setupquorum` | Use this command to set up a quorum, providing a quorum private key password. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-quorumPWD string`<br>Quorum key password (default "mypassword")<br> |
| Get Account Info | `./rubixgoplatform getaccountinfo` | Use this command to get account information on the node. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-did string`<br>DID address (default "")<br> |
| Dump Token Chain | `./rubixgoplatform dumptokenchain` | Use this command to dump the token chain on the node. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-token string`<br>Token address (default "")<br> |
| Setup Service | `./rubixgoplatform setupservice` | Use this command to set up a service. | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-srvName string`<br>Service name (default "explorer_service")<br>`-dbAddress string`<br>Database address (default "localhost")<br>`-dbName string`<br>Explorer database name (default "ExplorerDB")<br>`-dbPassword string`<br>Database password (default "password")<br>`-dbPort string`<br>Database port number (default "1433")<br>`-dbType string`<br>DB Type (default "SQLServer")<br>`-dbUsername string`<br>Database username (default "sa")<br> |

*Note: For nodes running in port other than 20000, you need to explicilty mention the port using the flag `-port <port number>` to all the commands

{{< /tab >}}

{{< tab "RBT Transaction and Signature" >}}
| Command | Sample Usage | Description | Options |
| ------- | ------------- | ----------- | ------- |
| Transfer RBT | `./rubixgoplatform transferrbt` | Use this command to transfer RBT (Rubix Tokens). | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-senderAddr string`<br>Sender address (default "")<br>`-receiverAddr string`<br>Receiver address (default "")<br>`-rbtAmount float`<br>RBT amount to be transferred (default 0.0)<br>`-transComment string`<br>Transfer comment (default "Test transaction")<br>`-transType int`<br>Transaction type (default 2)<br>`-fp`<br>Force password to be entered on the terminal<br>`-privPWD string`<br>Private key password (default "mypassword")<br>`-privImgFile string`<br>DID private share image file name (default "pvtShare.png")<br>`-privKeyFile string`<br>DID private key file name (default "pvtKey.pem")<br> |


| Field | Endpoint | Description | Sample Request |
| ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Transfer Tokens | `api/initiate-rbt-transfer` | Transfers token(s) from one wallet address to another | ```curl -X 'POST' 'http://localhost:20000/api/initiate-rbt-transfer' -H 'accept: application/json' -H 'Content-Type: application/json' \-d '{"comment": "string","receiver": "string","sender": "string","tokenCOunt": 0,"type": 0}'``` |
| Provide Signature | `/api/signature-response` | Supply the password for the node along with the ID generated when Initiate RBT transfer is called.| ```curl -X 'POST' 'http://localhost:20000/api/signature-response' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"id": "string","mode": 0,"password": "string"}'``` |
{{< /tab >}}



{{< tab "Account Information" >}}
| Field | Endpoint | Description | Sample Request |
| ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Account Information | `/api/get-account-info` | Retrieves the user account details | ```curl -X 'GET' 'http://localhost:20000/api/get-account-info?did=<did>' -H 'accept: application/json'``` |
| Get Transaction Details with transcation ID | `api/get-by-txnId` | Retrieves the details of the transactions for the given ID | ```curl -X 'GET' 'http://localhost:20000/api/get-by-txnId?txnID=<Transaction ID' -H 'accept: application/json'``` |
| Get Transaction Details with Comment | `/api/get-by-comment` | Retrieves the details of all the transactions committed with the specified comment. | ```curl -X 'GET' 'http://localhost:20000/api/get-by-comment?Comment=<Comment>' -H 'accept: application/json'``` |
|  Get Transaction Details with User's DID | `api/get-by-did` | Retrieves all the transactions made with the input DID | ```curl -X 'GET' 'http://localhost:20000/api/get-by-did?DID=<DID>&Role=<Sender/Receiver>' -H 'accept: application/json'``` |
{{< /tab >}}


{{< /tabs >}}
