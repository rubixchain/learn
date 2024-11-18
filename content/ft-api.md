---
title: FT API Endpoints
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
# Creation of FTs

To create an FT, you can use the following API endpoint:
<br>

**Endpoint**: `api/create-ft`
<br>

**Method**: `POST`

<br>

### Request

**Request format**:
```json
{
  "did": "string",
  "ft_count": 0,
  "ft_name": "string",
  "token_count": 0
}
```
<br>
<br>

- **did** [String]: The DID of the user creating the FTs.
- **ft_count** [Integer]: The total supply of FTs to be created.
- **ft_name** [String]: The name/symbol of the FT being created.
- **token_count** [Integer]: The amount of native token RBT required for the creation process, ensure sufficient RBT funds are available.
<br>

**Model request**:
```json
{
  "did": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
  "ft_count": 100,
  "ft_name": "apple",
  "token_count": 1
}
```
<br>
<br>

**Model cURL request**: 
```bash
curl --location 'localhost:20000/api/create-ft' \
--header 'Content-Type: application/json' \
--data '{
  "did": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
  "ft_count": 100,
  "ft_name": "apple",
  "token_count": 1
}'
```

<br>
<br>

### Response

 **Response format**:
```json
{
  "message": "string",
  "result": "string",
  "status": true
}
```
<br>
<br>
<br>

# Transfer of FTs

To transfer an FT from one DID to another, you can use the following API endpoint:
<br>

**Endpoint**: `/api/initiate-ft-transfer`
<br>

**Method**: `POST`

<br>

### Request

**Request format**:
```json
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
<br>
<br>

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

<br>

**Model request**:
```json
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
<br>
<br>

**Model cURL request**: 
```bash
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

<br>
<br>

### Response

 **Response format**:
```json
{
  "message": "string",
  "result": "string",
  "status": true
}
```
<br>
<br>
<br>

### NOTES:


-	`password` is mandatory when you have a password created during the creation of DID.
-	`creatorDID` is mandatory when you have multiple FTs with the same FT Name.
- The default port is `20000`. If you are using a different port, please modify the sample requests accordingly.


<br>
<br>
<br>

# Preview of FT Token chain

To view a FT token chain using FT Token ID, you can use the following API endpoint:
<br>

**Endpoint**: `/api/get-ft-token-chain`
<br>

**Method**: `GET`

<br>

### Request
 
- Provide the FT token ID as the value for the `tokenID` key in your API request query parameter.

<br>

**Model cURL request**: 
```bash
curl --location 'localhost:20000/api/get-ft-token-chain?tokenID=QmWxBMRbW2uyD27Czm5Bor49hnjvyRHMd1sEHTk8UGbe7i'
```

<br>
<br>

### Response

**Response format**:
```json
{
  "message": "string",
  "result": "string",
  "status": true,
  "tokenChainData": [
    "string"
  ]
}
```
<br>
<br>
<br>

# Get the balance of all FTs 

To get the balance of all FTs using user DID, you can use the following API endpoint:
<br>

**Endpoint**: `/api/get-ft-info-by-did`
<br>

**Method**: `GET`

<br>

### Request

- Provide the user DID as the value for the `did` key in your API request query parameter

<br>

**Model cURL request**: 
```bash
curl --location 'localhost:20000/api/get-ft-info-by-did?did=bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom'
```

<br>
<br>

### Response

**Response format**:
```json
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
<br>
<br>
<br>
<br>
<br>
<br>
