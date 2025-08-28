---
title: API Reference
---

## Smart Contract
### Generation of smart contract

To generate a smart contract, you can use the following API endpoint:

**Endpoint**: `/api/generate-smart-contract`

**Method**: `POST`

**Request format**:

image of SC generation API

- **did** [String]: The DID of the user genarating the Smart contract.  
- **binaryCodePath** [File]: The compiled WASM binary file.
- **rawCodePath** [File]: The raw smart contract logic code file (Rust/Go/ file).
- **schemaFilePath** [File]: The JSON file for updating state changes if required.

**Model request**:

image of model SC generation API

**cURL request**:  
```
curl --location --request POST 'http://localhost:20000/api/generate-smart-contract' 
--form 'did="your_did"' 
--form 'binaryCodePath=@"path_to_binary_code"' 
--form 'rawCodePath=@"path_to_raw_code"' 
--form 'schemaFilePath=@"path_to_schema"'
```
**Responce**:
```
{
  "status": true,
  "message": "Smart contract generated successfully",
  "result": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE"
}
```
---

### Deployment of smart contract

To deploy a smart contract, you can use the following API endpoint:

**Endpoint**: `/api/deploy-smart-contract`

**Method**: `POST`

**Request format**:
```
{
  "comment": "string",
  "deployerAddr": "string",
  "quorumType": 0,
  "rbtAmount": 0,
  "smartContractToken": "string"
}
```
- **comment** [String]: Any commment during depoyment process. 
- **deployerAddr** [String]: The DID of the deployer.
- **quorum_type** [Integer]: Type of quorum for the transaction.  
  - **1**: Randomly picked quorums.  
  - **2**: Specified by the deployer.  
- **rbt_amount** [Integer]: The amount of native token RBT required for the deployment process, ensure sufficient RBT funds are available.  
- **smartContractToken** [String]: The smart contract hash generated during generation process

**Model request**:
```
{
  "comment": "deploying first contract",
  "deployerAddr": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi",
  "quorumType": 2,
  "rbtAmount": 1,
  "smartContractToken": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE"
}
```
**cURL request**:  
```
curl --header "Content-Type: application/json" --request POST 'http://localhost:20000/api/deploy-smart-contract' --data '{ 
  "smartContractToken": "your_token",
  "deployerAddr": "your_address", 
  "rbtAmount": "rbt_amount_for_deployment", 
  "quorumType": "quorum_type", 
  "comment": "your_comment" 
}'
```
**Responce**:
```
{
  "status": true,
  "message": "Password needed",
  "result": {
    "id": "823A1C97-736F-482D-B911-79F4B5AC205E",
    "mode": 4,
    "hash": null,
    "only_priv_key": false
  }
}
```
NOTE: Use the `id` in the `api/signature-responce` with password if created (default password: mypassword).

```
{
  "status": true,
  "message": "Smart Contract Token Deployed successfully in 2m52.7881096s",
  "result": null
}
```
---

### Execution of smart contract

To execute a smart contract, you can use the following API endpoint:

**Endpoint**: `/api/execute-smart-contract`

**Method**: `POST`

**Request format**:
```
{ 
  "comment": "string", 
  "executorAddr": "string", 
  "quorumType": 0, 
  "smartContractData": "string", 
  "smartContractToken": "string" 
}
```
- **comment** [String]: Any comment during execution process.  
- **executorAddr** [String]: The DID of the executor.
- **quorum_type** [Integer]: Type of quorum for the transaction.  
  - **1**: Randomly picked quorums.  
  - **2**: Specified by the deployer.  
- **smartContractData** [String]: The smart contract data to be given as input during execution.
- **smartContractToken** [String]: The smart contract hash generated during generation process.

**Model request**:
```
{ 
  "comment": "executing smart contract", 
  "executorAddr": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi", 
  "quorumType": 2, 
  "smartContractData": "Red", 
  "smartContractToken": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE" 
}
```
**cURL request**:  
```
curl -X 'POST' \ 
  'http://localhost:20900/api/execute-smart-contract' \ 
  -H 'accept: application/json' \ 
  -H 'Content-Type: application/json' \ 
  -d '{ 
  "comment": "executing smart contract", 
  "executorAddr": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi", 
  "quorumType": 2, 
  "smartContractData": "Red", 
  "smartContractToken": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE" 
}'
```
**Responce**:
```
{ "status": true,
  "message": "Password needed",
  "result": { 
    "id": "C22411FC-962D-4221-A89A-227EDB07E2E6",
    "mode": 4,
    "hash": null,
    "only_priv_key": false 
  } 
}
```
NOTE: Use the `id` in the `api/signature-responce` with password if created (default password: mypassword).

```
{ 
  "status": true, 
  "message": "Smart Contract Token Executed successfully in 50.188983855s", 
  "result": null 
}
```
---
### Getting Smart contract token chain data

To get the full smart contract token chain data, you can use the following API endpoint:

**Endpoint**: `/api/get-smart-contract-token-chain-data`

**Method**: `POST`

**Request format**:
```
{ 
  "latest": true, 
  "token": "string" 
}
```
- **latest** [String]: Indicates whether need only latest block. (For chain give as `false`)  
- **token** [String]: Smart contract token hash.

**Model request**:
```
{ 
  "latest": true, 
  "token": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE" 
}
```
**cURL request**:  
```
curl -X 'POST' \ 
  'http://localhost:20900/api/get-smart-contract-token-chain-data' \ 
  -H 'accept: application/json' \ 
  -H 'Content-Type: application/json' \ 
  -d '{ 
  "latest": true, 
  "token": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE" 
}'
```
**Response**: 
``` 
{ 
  "status": true, 
  "message": "Fetched latest block smart contract data", 
  "result": null, 
  "SCTDataReply": [ 
    { 
      "BlockNo": 1, 
      "BlockId": "1-96df30c70c5873e3751c593f35ec23e702339e6c721d42b7181adb8653dab21d", 
      "SmartContractData": "Red", 
      "Epoch": 1756375523, 
      "InitiatorSignature": "3044022032786c4333d85492ac334f85ac597a67bf468bd20a40f01ba8febdd0aa30f0d1022010851bf1ff50f8b0db6f6cf11f543de27cf97aa8058551327a0e05db1b9bb4ea", 
      "ExecutorDID": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi", 
      "InitiatorSignData": "48c36408b85a59525095b95ccb2b0241a33f192a53642d740419fb16f3acd842" 
    } 
  ] 
}
```
---
### Registering callback URL

Register a URL as a callback of execution

**Endpoint**: `/api/register-callback-url`

**Method**: `POST`

**Request format**:
```
{ 
  "CallBackURL": "string", 
  "SmartContractToken": "string" 
}
```
**Model request**:
```
{ 
  "CallBackURL": "http://localhost:8080/api/contract-input", 
  "SmartContractToken": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE" 
}
```
**cURL request**:  
```
curl -X 'POST' \ 
  'http://localhost:20900/api/register-callback-url' \ 
  -H 'accept: application/json' \ 
  -H 'Content-Type: application/json' \ 
  -d '{ 
  "CallBackURL": "http://localhost:8080/api/contract-input", 
  "SmartContractToken": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE" 
}'
```
**Response**: 
```
{ 
  "status": true, 
  "message": "Call back URL registered successfully", 
  "result": null 
}
```
---
### Fetching smart contract files

To fetch all files related to a smart contract

**Endpoint**: `/api/fetch-smart-contract`

**Method**: `GET`

Give the smart contract token hash as the value for the `smartContractToken` query parameter.

**cURL request**:  
```
curl -X 'GET' \ 
  'http://localhost:20900/api/fetch-smart-contract?smartContractToken=QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE'\
  -H 'accept: application/json'
```
**Response**: 
```
{ 
  "status": true, 
  "message": "Smart Contract fetched successfully", 
  "result": null 
}
```
A folder will be created with all the files related to the smart contract

---
## FT
### Creation of FTs

To create an FT, you can use the following API endpoint:

**Endpoint**: `api/create-ft`  

**Method**: `POST`

**Request format**:
```
{
  "did": "string",
  "ft_count": 0,
  "ft_name": "string",
  "token_count": 0
}
```

- **did** [String]: The DID of the user creating the FTs.  
- **ft_count** [Integer]: The total supply of FTs to be created.  
- **ft_name** [String]: The name/symbol of the FT being created.  
- **token_count** [Integer]: The amount of native token RBT required for the creation process, ensure sufficient RBT funds are available.  

**Model request**:
```
{
  "did": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
  "ft_count": 100,
  "ft_name": "apple",
  "token_count": 1
}
```

**Model cURL request**:  
```
curl --location 'localhost:20000/api/create-ft' \
--header 'Content-Type: application/json' \
--data '{
  "did": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
  "ft_count": 100,
  "ft_name": "apple",
  "token_count": 1
}'
```

**Response**
```
{
  "message": "string",
  "result": "string",
  "status": true
}
```

---

### Transfer of FTs

To transfer an FT from one DID to another, you can use:

**Endpoint**: `/api/initiate-ft-transfer`  

**Method**: `POST`

**Request format**:
```
{
  "comment": "string",
  "creatorDID": "string",
  "ft_count": 0,
  "ft_name": "string",
  "password": "string",
  "quorum_type": 0,
  "receiver": "string",
  "sender": "string"
}
```

- **ft_count** [Integer]: Total number of FTs to be transferred.  
- **ft_name** [String]: Name/symbol of the FT being transferred.  
- **comment** [String]: Optional message regarding the transfer.  
- **password** [String]: Password to authorize the transfer (default “ ”).  
- **receiver** [String]: Address of the recipient receiving the FT.  
- **sender** [String]: Address of the user initiating the transfer.  
- **quorum_type** [Integer]: Type of quorum for the transaction.  
  - **1**: Randomly picked quorums.  
  - **2**: Specified by the sender.  
- **creatorDID** [String]: Defines the creator of an FT.

**Model request**:
```
{
  "comment": "",
  "creatorDID": "",
  "ft_count": 8,
  "ft_name": "ARR",
  "password": "",
  "quorum_type": 2,
  "receiver": "bafybmicdvgacsdsscn63eaq3faqdtimros23b4j7bpj2m2wsmjjaxoj47i",
  "sender": "bafybmig7cmpfdcxqbvn3wutczeby2a6o46cnfzmcyoy6imgbnt7qzfwxp4"
}
```

**Model cURL request**:  
```
curl --location 'localhost:20051/api/initiate-ft-transfer' \
--header 'Content-Type: application/json' \
--data '{
  "comment": "",
  "creatorDID": "",
  "ft_count": 3,
  "ft_name": "ARR",
  "password": "",
  "quorum_type": 2,
  "receiver": "bafybmicdvgacsdsscn63eaq3faqdtimros23b4j7bpj2m2wsmjjaxoj47i",
  "sender": "bafybmig7cmpfdcxqbvn3wutczeby2a6o46cnfzmcyoy6imgbnt7qzfwxp4"
}'
```

**Response**

```
{
  "message": "string",
  "result": "string",
  "status": true
}
```

**NOTES:**
- `password` is mandatory when you have a password created during the creation of DID.  
- `creatorDID` is mandatory when you have multiple FTs with the same FT Name.  
- Default port: `20000`. Adjust if needed.  

---

### Preview of FT Token chain

Provide the FT token ID as the value for the `tokenID` query parameter.  

**Endpoint**: `/api/get-ft-token-chain`  

**Method**: `GET`

**Model cURL request**:  
```
curl --location 'localhost:20000/api/get-ft-token-chain?tokenID=QmWxBMRbW2uyD27Czm5Bor49hnjvyRHMd1sEHTk8UGbe7i'
```

**Response**

```
{
  "message": "string",
  "result": "string",
  "status": true,
  "tokenChainData": [
    "string"
  ]
}
```

---

### Get the balance of all FTs

Provide the user DID as the value for the `did` query parameter.

**Endpoint**: `/api/get-ft-info-by-did`  

**Method**: `GET`

**Model cURL request**:  
```
curl --location 'localhost:20000/api/get-ft-info-by-did?did=bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom'
```

**Response**

```
{
  "ft_info": [
    {
      "creator_did": "string",
      "ft_count": 0,
      "ft_name": "string"
    }
  ],
  "message": "string",
  "result": "string",
  "status": true
}
```
