---
title: Rubix Wallet API
geekdocBreadcrumb: false
weight: 1
---



## **Base URLs**  
- **Testnet:** `http://20.193.136.169:8080`  
- **Mainnet:** `https://safepass.rubix.net`  

## **Getting Started**  

To interact with the Rubix network, follow the sequence below:  

1. **Create a Wallet** – Initiate the wallet creation process to generate a unique DID.  
2. **Authenticate** – Log in using your credentials to obtain an authentication token, which is required for all further API calls.  
3. **Register DID** – Once authenticated, register your DID to be recognized on the network.  
4. **Check Balance** – Retrieve the current RBT balance associated with the DID.  
5. **Transactions & Signing** – Any transaction requiring authorization must be signed using the **Pass Signature** endpoint.  

## **Developer Access & Advanced Controls**  

For developers integrating Rubix Wallet with their dApps or requiring extended functionalities, a comprehensive set of API endpoints is available. Refer to the **[SafePass API Documentation](https://safepass.rubix.net/swagger/index.html)** for complete specifications and additional features.  

---

## **API Endpoints**  

{{< tabs "uniqueid" >}}

{{< tab "Wallet" >}}
| Operation | Endpoint | Description | Sample Request | Sample Response |
|------------------|---------------|-------------|-------|------|
| Create Wallet | `/create` | Creates a new wallet and returns a DID | ```curl -X POST http://20.193.136.169:8080/create -d '{"email":"bob@c.com","password":"123","name":"bob", "wallet_type":"self-custody", "public_key":"041756d13ad46e7811c99c961762472aa64a67554ae09e78b9c096350bc6a8bed3798fe19e3e3203a69d0ac00a60dc32b3652a2e7e372a7c60a64a1f3e06ec4c18"}'``` | ```json { "did": "bafybmiatw5srgqlw3t5sm4buktu5gcgbfhkgujohem3o3a4cusvt424sei", "email": "bob@c.com", "name": "bob" }``` |
| Login | `/login` | Authenticates user and returns JWT token | ```curl -L -X POST 'http://20.193.136.169:8080/login' --data-raw '{ "email": "bob@c.com", "password": "123" }'``` | ```json { "token": "<jwt token>" }``` |
| Register DID | `/register_did` | Registers user DID on the network | ```curl -L -X POST http://20.193.136.169:8080/register_did -H 'Authorization: Bearer <jwt token>' -d '{ "did":"<user DID>" }'``` | ```json { "status": true, "message": "DID registered successfully", "result": null }``` |
| Get Balance | `/request_balance` | Fetches current balance of the user | ```curl -L -X GET "http://20.193.136.169:8080/request_balance?did=<user DID>" -H 'Authorization: Bearer <jwt token>'``` | ```json { "status": true, "message": "Got account info successfully", "result": [{ "Did": "<user DID>", "Rbt_amount": 1 }] }``` |
| Transfer RBT | `/request_txn` | Initiates an RBT transfer | ```curl -L -X POST http://20.193.136.169:8080/request_txn -H 'Authorization: Bearer <jwt token>' -d '{ "did":"<sender DID>", "receiver":"<receiver DID>", "rbt_amount": <transaction amount> }'``` | ```json { "status": true, "message": "Transaction initiated", "result": { "did": "<rubix node DID>", "sign_data": { "hash": "<string>", "id": "<string>", "mode": 4 } } }``` |
| Pass Signature | `/pass_signature` | Provides signature for transaction finalization | ```curl -L -X POST http://20.193.136.169:8080/pass_signature -H 'Authorization: Bearer <jwt token>' -d '{ "did": "<sender DID>", "sign_response": { "id": "<string>", "mode": 4, "signature": { "Signature": "<[ ]byte>" } } }'``` | ```json { "status": true, "message": "Transfer finished successfully in <time> with trnxid <transaction id>", "result": null }``` |

{{< /tab >}}

{{< /tabs >}}

