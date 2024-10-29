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
  "ftcount": 0,
  "ftname": "string",
  "tokencount": 0
}
```
<br>
<br>

- **did** [String]: The DID of the user creating the FTs.
- **ftcount** [Integer]: The total supply of FTs to be created.
- **ftname** [String]: The name/symbol of the FT being created.
- **tokencount** [Integer]: The amount of native token RBT required for the creation process, ensure sufficient RBT funds are available.
<br>

**Model request**:
```json
{
  "did": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
  "ftcount": 100,
  "ftname": "apple",
  "tokencount": 1
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
  "ftcount": 100,
  "ftname": "apple",
  "tokencount": 1
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

**Endpoint**: `/api/initiate-ft-tranfer`
<br>

**Method**: `POST`

<br>

### Request

**Request format**:
```json
{
  "FTCount": 0,
  "FTName": "string",
  "comment": "string",
  "creatorDID": "string",
  "password": "string",
  "receiver": "string",
  "sender": "string",
  "type": 0
}
```
<br>
<br>

- **FTCount** [Integer]: Total number of FTs to be transferred.
- **FTName** [String]: Name/symbol of the FT being transferred.
- **comment** [String]: Optional message regarding the transfer.
- **password** [String]: Password to authorize the transfer (default “ ”).
- **receiver** [String]: Address of the recipient receiving the FT.
- **sender** [String]: Address of the user initiating the transfer.
- **type** [Integer]: Type of quorum for the transaction.
  - **1**: Randomly picked quorums.
  - **2**: Specified by the sender.
- **creatorDID** [String]: Defines the creator of an FT.

<br>

**Model request**:
```json
{
  "FTCount": 24,
  "FTName": "apple",
  "comment": "Test transfer",
  "creatorDID": "",
  "password": "****",
  "receiver": "bafybmif2rlpev3xopqukajfj5dzgjoscoxms7sv4ee44743idlxzvjtiqy",
  "sender": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
  "type": 1
}
```
<br>
<br>

**Model cURL request**: 
```bash
curl --location 'localhost:20000/api/initiate-ft-tranfer' \
--header 'Content-Type: application/json' \
--data '{
  "FTCount": 24,
  "FTName": "apple",
  "comment": "Test transfer",
  "creatorDID": "",
  "password": "",
  "receiver": "bafybmif2rlpev3xopqukajfj5dzgjoscoxms7sv4ee44743idlxzvjtiqy",
  "sender": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
  "type": 1
}'
```
<br>

### NOTES:


-	`password` is mandatory when you have a password created during the creation of DID.
-	`creatorDID` is mandatory when you have multiple FTs with the same FT Name.
- The default port is `20000`. If you are using a different port, please modify the sample requests accordingly.


<br>
<br>

# Preview and export of FT Token chain

## Preview of FT Token chain
To view a FT token chain using FT Token ID, you can use the following API endpoint:
<br>

**Endpoint**: `/api/get-ft-token-chain`
<br>

**Method**: `GET`

<br>

### Request
 

**Request format**:
<img src="https://github.com/rubixchain/learn/raw/vaishnav/feature/DocsForFT/static/images/get-ft-token-chain.png">

- Provide the FT token ID as the value for the `tokenID` key in your API request query parameter.

<br>

**Model request**:
<img src="https://github.com/rubixchain/learn/raw/vaishnav/feature/DocsForFT/static/images/get-ft-token-chain.png">

<br>
<br>
