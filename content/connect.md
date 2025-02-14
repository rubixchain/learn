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
| Create Wallet | `/create` | Creates a new wallet and returns a DID | ```curl -X POST http://20.193.136.169:8080/create -d '{"email":"bob@c.com","password":"123","name":"bob", "wallet_type":"self-custody", "public_key":"041756d13ad46e7811c99c961762472aa64a67554ae09e78b9c096350bc6a8bed3798fe19e3e3203a69d0ac00a60dc32b3652a2e7e372a7c60a64a1f3e06ec4c18"}'```<br><br>`"wallet_type" string`<br>"self-custody": when user manages keys and on-demand signing, else pass empty string ""<br>`"public_key" string`<br>in case "wallet_type" is self-custody, pass user's public key to get DID<br>`"secret_key" string (optional)`<br>to encrypt user's private key, in case "wallet_type" is not self-custody <br> | ```json { "did": "bafybmiatw5srgqlw3t5sm4buktu5gcgbfhkgujohem3o3a4cusvt424sei", "email": "bob@c.com", "name": "bob" }```<br><br>`"did"`<br>Rubix DID generated from user's public key<br> |
| Login | `/login` | Authenticates user and returns jwt token| ```curl -L -X POST 'http://20.193.136.169:8080/login' --data-raw '{ "email": "bob@c.com", "password": "123" }'``` | ```json { "token": "<jwt token>" }``` <br><br> `"token"` is the authorzation header that the user needs to pass to access the subsequent operations<br> |
| Register DID | `/register_did` | Registers user DID on the network | ```curl -L -X POST http://20.193.136.169:8080/register_did -H 'Authorization: Bearer <jwt token>' -d '{ "did":"<user DID>" }'``` | ```json { "status": true, "message": "DID registered successfully", "result": null }``` |
| Get Balance | `/request_balance` | Fetches current balance of the user | ```curl -L -X GET "http://20.193.136.169:8080/request_balance?did=<user DID>" -H 'Authorization: Bearer <jwt token>'``` | ```json { "status": true, "message": "Got account info successfully", "result": [{ "Did": "<user DID>", "Rbt_amount": 1 }] }``` |
| Transfer RBT | `/request_txn` | Initiates an RBT transfer | ```curl -L -X POST http://20.193.136.169:8080/request_txn -H 'Authorization: Bearer <jwt token>' -d '{ "did":"<sender DID>", "receiver":"<receiver DID>", "rbt_amount": <transaction amount> }'```<br><br>`"rbt_amount" float64`<br>transaction amount with 3 decimals limit<br> | In case of self-custodial wallet:<br>```json { "status": true, "message": "Transaction initiated", "result": { "did": "<user DID>", "sign_data": { "hash": "<string>", "id": "<string>", "mode": 4 } } }```<br>`"hash"` is the message to be signed<br>`"id"` is the unique signature session Id<br>`"mode"` is the requested signature mode(mode:4 represents secp256k1 curve based signature)<br><br>In other cases:<br>```{"status":true,"message":"Transfer finished successfully in 14.059856393s with trnxid d5e06dbdb20e235031afdbc958fe153357ee748dcb79d3b50d49a6f0413d39e4","result":null}``` |
| Pass Signature | `/pass_signature` | Provides signature for transaction finalization | ```curl -L -X POST http://20.193.136.169:8080/pass_signature -H 'Authorization: Bearer <jwt token>' -d '{ "did": "<sender DID>", "sign_response": { "id": "<string>", "mode": 4, "signature": { "Signature": "<[]byte>" } } }'```<br><br>*Note: use this operation in case of self-custodial wallet*<br> | ```json { "status": true, "message": "Transfer finished successfully in <time> with trnxid <transaction id>", "result": null }``` |
| Create FT | `/create_ft` | Creates required number of FTs, each of same value | ```curl -L -X POST "http://localhost:8080/create_ft -H 'Authorization: Bearer <jwt token>' -d '{"did":"<user DID>", "ft_count":<number of FTs in int>, "ft_name":"<ft name>", "token_count":<number of RBTs in int>}'``` | ```{"status":true,"message":"FT created successfully","result":null}``` |
| Transfer FT | `/transfer_ft` | Initiates an FT transfer | ```curl -L -X POST "http://localhost:8080/transfer_ft -H 'Authorization: Bearer <jwt token>' -d '{"sender":"<sender DID>", "receiver":<receiver DID>, "ft_count":<number of FTs in int>, "ft_name":"<ft name>", "creatorDID":<DID of FT creator>}'``` | ```{"status":true,"message":"FT Transfer finished successfully in 12.41772759s with trnxid 8effdf7d21d8a4b019ddb30c4441bfa8c575a6b055785d160fd4d11a7d9ee633","result":null}``` |
| Get All FTs | `/get_all_ft` | Fetches information of all FTs owned by user | ```curl -L -X GET "http://localhost:8080/get_all_ft?did=<user DID>" -H 'Authorization: Bearer <jwt token>'``` | ```{"status":true,"message":"Got FT info successfully","result":[{"creator_did":"bafybmiaysyb5hbdb6clsk7jncdejxwomxumv3zos5t57f6bwz7numvaina","ft_count":4,"ft_name":"testFT-1"}]}``` |
| Create NFT | `/create_nft` | Creates NFT of the provided artifact | ```curl -L -X POST "http://localhost:8080/create_nft -H 'Authorization: Bearer <jwt token>' -d '{"did":"<user DID>", "metadata":"<metadata file path in string>", "artifact":"<artifact file path in string>"}'``` | ```{"status":true,"message":"NFT Token generated successfully","result":null}``` |
| Subscribe FT | `/subscribe_nft` | Subscribes an NFT to get all updates and be able to execute the NFT | ```curl -L -X POST "http://localhost:8080/subscribe_nft -H 'Authorization: Bearer <jwt token>' -d '{"did":"<user DID>", "nft":<nft token ID>}'``` | ```{"status":true,"message":"NFT subscribed successfully","result":null}``` |
| Deploy NFT | `/deploy_nft` | Initiates NFT deployment on chain | ```curl -L -X POST "http://localhost:8080/deploy_nft -H 'Authorization: Bearer <jwt token>' -d '{"did":"<user DID>", "nft":"<nft ID>", "quorum_type":<1 or 2>}'``` | ```{"status":true,"message":"NFT Deployed successfully in 10.891008617s","result":null}``` |
| Transfer NFT | `/execute_nft` | Initiates NFT transfer | ```curl -L -X POST http://localhost:8080/execute_nft -H 'Authorization: Bearer <jwt token>' -d '{"comment": "<string>", "nft": "<NFT tokenID>", "nft_data": "<string>", "nft_value": <value assigned to NFT in float64>, "owner": "<sender DID>", "quorum_type": <1 or 2 int>, "receiver": "<receiver DID>"}'``` | ```{"status":true,"message":"NFT Deployed successfully in 10.891008617s","result":null}``` |
| Get All NFTs | `/get_all_nft` | Fetches information of all NFTs owned by user | ```curl -L -X GET "http://localhost:8080/get_all_nft?did=<string>" -H 'Authorization: Bearer <jwt token returned while logging in>'``` | ```{"status":true,"message":"Got All NFTs","result":[{"nft":"QmNMBaU9B6ZaBjaPgufTaTsTu9dHjtf3XWWogFPJ3zy9u6","nft_value":0,"owner_did":"bafybmiaysyb5hbdb6clsk7jncdejxwomxumv3zos5t57f6bwz7numvaina"}]}``` |
| Generate Smart Contract Token | `/generate-smart-contract` | Genertaes a smart contract tokenID | ```curl -L -X POST 'http://localhost:8080/generate-smart-contract' \ -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mzc3MjExODgsInN1YiI6ImJhZnlibWlheXN5YjVoYmRiNmNsc2s3am5jZGVqeHdvbXh1bXYzem9zNXQ1N2Y2Ynd6N251bXZhaW5hIn0.WU8P4UJiq-Jap_NhmHONhCah6d5xtoL6lHaH6ceUFJ4' \ -F 'did=<user DID>' \ -F 'binaryCodePath=@/path/to/bidding_contract.wasm' \ -F 'rawCodePath=@/path/to/lib.rs' \ -F 'schemaFilePath=@/path/to/bidding_contract.json'``` | ```{"status":true,"message":"Smart contract generated successfully","result":{"binaryFilePath":"binary/file/path_binaryCodePath","rawFilePath":"raw/code/path_rawCodePath","schemaFilePath":"schema/file/path_schemaFilePath"}}``` |
| Subscribe Smart Contract | `/subscribe-smart-contract` | Subscribes a smart contract to get all updates and be able to execute it | ```curl -L -X POST "http://localhost:8080/subscribe-smart-contract -H 'Authorization: Bearer <jwt token returned while logging in>' -d '{"did":"<user DID>", "smartContractToken":<smart contract token ID>}'``` | ```{"status":true,"message":"Smart contract subscribed successfully","result":null}``` |
| Deploy Smart Contract | `/deploy-smart-contract` | Initiates smart contract deployment on chain | ```curl -L -X POST "http://localhost:8080/deploy-smart-contract -H 'Authorization: Bearer <jwt token returned while logging in>' -d '{"deployerAddr":"<user DID>", "smartContractToken":"<smart Contract Token ID>", "quorumType":<1 or 2>, "rbtAmount":<float64>,"comment":"<string>"}'``` | ```{"status":true,"message":"Smart Contract Token Deployed successfully in 16.916829104s","result":null}``` |
| Execute Smart Contract | `/execute-smart-contract` | Initiates smart contract execution | ```curl -L -X POST http://localhost:8080/execute-smart-contract -H 'Authorization: Bearer <jwt token returned while logging in>' -d '{"comment": "<comment>","smartContractToken": "<smart Contract Token ID>","smartContractData": "<string>","executorAddr": "<executor DID>","quorumType": <1 or 2>}'``` | ```{"status":true,"message":"Smart Contract Token Executed successfully in 11.302358297s","result":null}``` |

{{< /tab >}}

{{< /tabs >}}

