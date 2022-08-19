---
title: API EndPoints
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

User communicates with the node thats running in the background via REST APIs. Below listed are the REST API Endpoints with which user can able to view information, transfer tokens and so on.

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
{{< /tabs >}}