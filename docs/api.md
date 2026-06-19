---
title: API Reference
---

# API Reference

The Rubix node exposes a single RESTful HTTP API, served entirely under **`/rubix/v1/...`**: DIDs, balances, transactions, NFTs, FTs, smart contracts, signatures, and node, bootstrap, quorum, and token management.

The node listens on port `20000 + node_index` (see [Run Rubix Locally](./developer-guides/setup/run-locally.md#configuration-reference)). All examples below use port `20000`. Adjust to match your node.

## Common Response Envelope

Every endpoint returns the same envelope:

```json
{
  "status": true,
  "message": "Got DID created successfully",
  "result": { /* endpoint-specific payload */ }
}
```

- **`status`**: `true` on success, `false` on failure.
- **`message`**: human-readable status.
- **`result`**: endpoint-specific payload (object, array, string, or `null`).

## Asynchronous Signature Flow

Several operations (RBT transfer, DID registration, smart contract deploy/execute, NFT create, FT create) are asynchronous and require a password to complete. They follow this two-step flow:

1. Call the operation endpoint. The response contains an `id` and `"message": "Password needed"`.
2. Call `POST /rubix/v1/signature` with the `id` and the private key password (default: `mypassword`) to complete the operation.

Example first-response:
```json
{
  "status": true,
  "message": "Password needed",
  "result": {
    "id": "62352DFA-4654-45E1-8A31-15BDF9513B52",
    "mode": 4,
    "hash": null,
    "only_priv_key": false
  }
}
```

Then complete via `POST /rubix/v1/signature` (see [Signatures](#signatures)).

---

## DID Management

### Create DID

**Endpoint**: `POST /rubix/v1/dids/create`

Create a new DID. The request body is JSON.

**Request body**:
```json
{
  "password": "mypassword",
  "public_key": "",
  "private_key": "",
  "mnemonic": "",
  "childPath": 0
}
```

- **`password`** [`string`]: Password used to encrypt the private key file (default: `mypassword`).
- **`public_key`** [`string`]: (Optional) Hex of an existing public key. Creates a DID bound to that key.
- **`private_key`** [`string`]: (Optional) Path to an existing private key file.
- **`mnemonic`** [`string`]: (Optional) BIP-39 mnemonic phrase to restore an existing DID.
- **`childPath`** [`int`]: BIP child path (default `0`).

**curl**:
```bash
curl -X POST 'http://localhost:20000/rubix/v1/dids/create' \
  -H 'Content-Type: application/json' \
  -d '{"password":"mypassword"}'
```

**Response**:
```json
{
  "status": true,
  "message": "DID created successfully",
  "result": {
    "did": "bafybmiaiudnmnbpr2kst26tf56vsnsklncucflb6er566twzrk4itryfom",
    "peer_id": "12D3KooWRK3CzoVYGdcMZqPYHJTkdnWZTTZqyAaSgFFETapBmT97"
  }
}
```

### Get All DIDs

**Endpoint**: `GET /rubix/v1/dids`

Returns all DIDs hosted on the node.

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/dids'
```

### Register DID

**Endpoint**: `POST /rubix/v1/dids/{did}/register`

Publish the DID across the network so other nodes can discover it. This is an [async signature flow](#asynchronous-signature-flow).

**curl**:
```bash
curl -X POST 'http://localhost:20000/rubix/v1/dids/bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi/register'
```

---

## DID Balances

### Get Combined Balance

**Endpoint**: `GET /rubix/v1/dids/{did}/balances`

Returns RBT, FT, and NFT balances for the DID in a single call.

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/dids/bafybmiaflq2dxcg5frq5o5myoqtk6zle65okfnwb6y2tjpav4lsfwgknui/balances'
```

**Response**:
```json
{
  "status": true,
  "message": "Got account info successfully",
  "result": {
    "did": "bafybmiaflq2dxcg5frq5o5myoqtk6zle65okfnwb6y2tjpav4lsfwgknui",
    "rbt_balance": [ /* RBT info */ ],
    "ft_balance": [ /* FT info */ ],
    "nft_balance": [ /* NFT info */ ]
  }
}
```

### Get RBT Balance

**Endpoint**: `GET /rubix/v1/dids/{did}/balances/rbt`

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/dids/bafybmiaflq2dxcg5frq5o5myoqtk6zle65okfnwb6y2tjpav4lsfwgknui/balances/rbt'
```

### Get FT Balance

**Endpoint**: `GET /rubix/v1/dids/{did}/balances/ft`

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/dids/bafybmiaflq2dxcg5frq5o5myoqtk6zle65okfnwb6y2tjpav4lsfwgknui/balances/ft'
```

### Get NFT Balance

**Endpoint**: `GET /rubix/v1/dids/{did}/balances/nft`

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/dids/bafybmiaflq2dxcg5frq5o5myoqtk6zle65okfnwb6y2tjpav4lsfwgknui/balances/nft'
```

---

## Transactions

The transactions API is unified: a single endpoint handles RBT transfers, FT transfers, NFT transfers, and smart contract deployments/executions.

### Initiate Transaction

**Endpoint**: `POST /rubix/v1/tx`

This is an [async signature flow](#asynchronous-signature-flow). The body specifies what is being transferred via the `tokens` object.

**Request body**:
```json
{
  "initiator": "string (sender DID)",
  "owner": "string (receiver DID)",
  "tokens": {
    "rbt": 0.0,
    "ft": [
      { "ftName": "string", "numberOfFts": 0, "creatorDID": "string" }
    ],
    "nft": [
      { "nftId": "string", "value": 0.0, "data": "string", "parentNFTId": "" }
    ],
    "smartContract": [
      { "smartContractId": "string", "value": 0.0, "data": "string" }
    ],
    "transferNftOwnership": false
  },
  "memo": "string"
}
```

- **`initiator`** [`string`]: DID initiating the transaction (sender, deployer, or executor).
- **`owner`** [`string`]: DID that will own the result (receiver, or new contract owner).
- **`tokens.rbt`** [`float`]: RBT amount to transfer (set to `0` if not transferring RBT).
- **`tokens.ft`** [`array`]: Fungible tokens being transferred.
- **`tokens.nft`** [`array`]: NFTs being transferred. Set `parentNFTId` to mint a child NFT linked to the named parent.
- **`tokens.smartContract`** [`array`]: Smart contracts being deployed or executed.
- **`tokens.transferNftOwnership`** [`bool`]: Whether to transfer ownership (vs. just executing) of the NFT.
- **`memo`** [`string`]: Optional memo attached to the transaction.

**RBT transfer example**:
```json
{
  "initiator": "bafybmigxslkovkt3rirvtpvscskor4ys223fjdetkzu3drbrxhp3s7t5ui",
  "owner": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi",
  "tokens": { "rbt": 1.0 },
  "memo": "test transfer"
}
```

**FT transfer example**:
```json
{
  "initiator": "bafybmig7cmpfdcxqbvn3wutczeby2a6o46cnfzmcyoy6imgbnt7qzfwxp4",
  "owner": "bafybmicdvgacsdsscn63eaq3faqdtimros23b4j7bpj2m2wsmjjaxoj47i",
  "tokens": {
    "ft": [{ "ftName": "apple", "numberOfFts": 8, "creatorDID": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom" }]
  }
}
```

**Smart contract execution example**:
```json
{
  "initiator": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi",
  "owner": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi",
  "tokens": {
    "smartContract": [{ "smartContractId": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE", "value": 0, "data": "Red" }]
  },
  "memo": "executing smart contract"
}
```

**curl**:
```bash
curl -X POST 'http://localhost:20000/rubix/v1/tx' \
  -H 'Content-Type: application/json' \
  -d '{
    "initiator": "bafybmigxslkovkt3rirvtpvscskor4ys223fjdetkzu3drbrxhp3s7t5ui",
    "owner": "bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi",
    "tokens": { "rbt": 1.0 },
    "memo": "test transfer"
  }'
```

### List Transactions

**Endpoint**: `GET /rubix/v1/tx`

Returns all transactions known to the node.

### Get Transaction by ID

**Endpoint**: `GET /rubix/v1/tx/{tx_id}`

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/tx/aee95cdb9db8794b988063e29400198c3fc741f9f461faae8c83d02119e1d9d6'
```

### Get Transactions by DID and Token Type

**Endpoint**: `GET /rubix/v1/tx/{did}/{token_type}`

Path params:
- **`did`**: DID to filter by.
- **`token_type`**: one of `rbt`, `nft`, `ft`, `smartContract`.

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/tx/bafybmiaflq2dxcg5frq5o5myoqtk6zle65okfnwb6y2tjpav4lsfwgknui/rbt'
```

### Sync Transaction Chain

**Endpoint**: `POST /rubix/v1/sync-transaction-chain`

Returns ordered transaction chains for the requested token IDs.

**Request body**:
```json
{
  "did": "string",
  "token_ids": ["string"],
  "exclude_transaction_ids": ["string"]
}
```

---

## Signatures

### Signature Response

**Endpoint**: `POST /rubix/v1/signature`

Used to supply the password for an in-flight async operation (RBT transfer, register DID, deploy/execute SC, etc.).

**Request body**:
```json
{
  "id": "string (id from the initial response)",
  "password": "mypassword",
  "signature": ""
}
```

**curl**:
```bash
curl -X POST 'http://localhost:20000/rubix/v1/signature' \
  -H 'Content-Type: application/json' \
  -d '{"id":"62352DFA-4654-45E1-8A31-15BDF9513B52","password":"mypassword"}'
```

### Arbitrary Signature

**Endpoint**: `POST /rubix/v1/signature/arbitrary`

Request a signature on an arbitrary message.

**Request body**:
```json
{
  "signer_did": "string",
  "msg_to_sign": "string"
}
```

This is an [async signature flow](#asynchronous-signature-flow).

### Verify Arbitrary Signature

**Endpoint**: `GET /rubix/v1/signature/verify`

Query params: `signer_did`, `signed_msg`, `signature`.

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/signature/verify?signer_did=bafybmi...&signed_msg=hello&signature=304402...'
```

---

## Smart Contracts

### Generate Smart Contract

**Endpoint**: `POST /rubix/v1/smart_contracts/generate`

`multipart/form-data` request.

Form fields:
- **`did`** [`string`]: DID generating the smart contract.
- **`binaryCodePath`** [`file`]: Compiled WASM file (`.wasm`).
- **`rawCodePath`** [`file`]: Raw source file (`.rs`).

**curl**:
```bash
curl -X POST 'http://localhost:20000/rubix/v1/smart_contracts/generate' \
  -F 'did=bafybmicggfkxfz667vnra3datk5h3y5el24ir7gx7tciciaaoniaxnadwi' \
  -F 'binaryCodePath=@./contract.wasm' \
  -F 'rawCodePath=@./contract.rs'
```

**Response**:
```json
{
  "status": true,
  "message": "Smart contract generated successfully",
  "result": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE"
}
```

### List Smart Contracts

**Endpoint**: `GET /rubix/v1/smart_contracts`

### Get Smart Contract Chain

**Endpoint**: `GET /rubix/v1/smart_contracts/{contract_id}/chain`

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/smart_contracts/QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE/chain'
```

### Subscribe to Smart Contract

**Endpoint**: `GET /rubix/v1/smart_contracts/subscribe?smartContractToken=...`

### Register Callback URL

**Endpoint**: `POST /rubix/v1/smart_contracts/register_callback`

**Request body**:
```json
{
  "CallBackURL": "http://localhost:8080/api/contract-input",
  "SmartContractToken": "QmW83PT7dKWT5ccBvQvSmkSQJNbWR5hMheQ3n6vckwDFkE"
}
```

### Fetch Smart Contract

**Endpoint**: `GET /rubix/v1/smart_contracts/fetch?smartContractToken=...`

Downloads all files related to the smart contract into a local folder.

### Deploy and Execute Smart Contract

Both operations now go through the unified [`POST /rubix/v1/tx`](#initiate-transaction) endpoint with a `tokens.smartContract` entry. See the [smart contract execution example](#initiate-transaction) above.

---

## NFTs

### Create NFT

**Endpoint**: `POST /rubix/v1/nfts/generate`

`multipart/form-data` request.

Form fields:
- **`did`** [`string`]: DID creating the NFT.
- **`metadata`** [`file`]: JSON file with NFT metadata.
- **`artifact`** [`file`]: The actual NFT file (image, etc.).

**curl**:
```bash
curl -X POST 'http://localhost:20000/rubix/v1/nfts/generate' \
  -F 'did=bafybmiaflq2dxcg5frq5o5myoqtk6zle65okfnwb6y2tjpav4lsfwgknui' \
  -F 'metadata=@./metadata.json' \
  -F 'artifact=@./image.jpg'
```

**Response**:
```json
{
  "status": true,
  "message": "NFT Token generated successfully",
  "result": "QmRjtbUxw8yh1DN2JjzDqm3wuedVECv5B3jDUzWq9QUEK1"
}
```

### List NFTs

**Endpoint**: `GET /rubix/v1/nfts`

### Get NFT Chain

**Endpoint**: `GET /rubix/v1/nfts/{nft_id}/chain`

**curl**:
```bash
curl -X GET 'http://localhost:20000/rubix/v1/nfts/QmRjtbUxw8yh1DN2JjzDqm3wuedVECv5B3jDUzWq9QUEK1/chain'
```

### Get Child NFTs

**Endpoint**: `GET /rubix/v1/nfts/{nft_id}/children`

Returns NFTs whose parent is the given NFT. Originator-only.

### Get Parent NFT

**Endpoint**: `GET /rubix/v1/nfts/{nft_id}/parent`

Returns the parent NFT (id + value), or `null` if none. Originator-only.

### Subscribe to NFT

**Endpoint**: `GET /rubix/v1/nfts/subscribe?nft=<nft_id>`

### Fetch NFT

**Endpoint**: `GET /rubix/v1/fetch-nft?nft=<nft_id>`

Downloads NFT files into a local folder.

### Deploy, Execute, and Transfer NFT

All NFT transactions now go through the unified [`POST /rubix/v1/tx`](#initiate-transaction) endpoint with a `tokens.nft` entry.

---

## FTs

### Mint FT

**Endpoint**: `POST /rubix/v1/fts/mint`

This is an [async signature flow](#asynchronous-signature-flow).

**Request body**:
```json
{
  "did": "string",
  "ft_name": "string",
  "ft_count": 0,
  "token_count": 0,
  "ft_num_start_index": 0
}
```

- **`did`** [`string`]: Creator DID.
- **`ft_name`** [`string`]: Name or symbol.
- **`ft_count`** [`int`]: Total supply to mint.
- **`token_count`** [`int`]: RBT amount to back the FTs.
- **`ft_num_start_index`** [`int`]: Starting index for FT numbering.

**curl**:
```bash
curl -X POST 'http://localhost:20000/rubix/v1/fts/mint' \
  -H 'Content-Type: application/json' \
  -d '{
    "did": "bafybmidhjebpnarqite2pf7akpb333svhdkhnyucalxv3aelg3c6iq6aom",
    "ft_name": "apple",
    "ft_count": 100,
    "token_count": 1
  }'
```

### List FTs

**Endpoint**: `GET /rubix/v1/fts`

### Transfer FT

FT transfers go through the unified [`POST /rubix/v1/tx`](#initiate-transaction) endpoint with a `tokens.ft` entry.

---

## Node, Bootstrap & Quorum Management

These operational endpoints manage the node, its peers, bootstrap list, quorums, and local/test token minting. Like everything else, they are served under `/rubix/v1/...`.

### Node

| Endpoint | Method | Description |
|---|---|---|
| `/rubix/v1/node/start` | GET | Start the core. No input. |
| `/rubix/v1/node/shutdown` | POST | Shut down the node. No input. |
| `/rubix/v1/node/peer_id` | GET | Returns this node's Peer ID. No input. |

**Ping**: `GET /rubix/v1/node/ping?peerID=<peer_id>`

Ping a peer by its Peer ID. Query param `peerID` is required.

**Add Peer Details**: `POST /rubix/v1/node/add_peers`

Manually add a mapping from a peer's DID to its Peer ID. The field names are matched case-insensitively, so `did` and `peerID` work as well as `DID` and `PeerID`.

```json
{
  "DID": "string",
  "PeerID": "string"
}
```

### Bootstrap

**Add / Remove Bootstrap**: `POST /rubix/v1/bootstrap/add`, `POST /rubix/v1/bootstrap/remove`

Add or remove bootstrap peers. Each peer must be a full multiaddress (starting with `/`).

```json
{
  "peers": ["/ip4/127.0.0.1/tcp/4001/p2p/12D3KooW..."]
}
```

| Endpoint | Method | Description |
|---|---|---|
| `/rubix/v1/bootstrap` | GET | List all bootstrap peers. No input. |
| `/rubix/v1/bootstrap/remove_all` | POST | Remove all bootstrap peers. No input. |

### Quorums

**Add Quorum**: `POST /rubix/v1/quorums/add`

Add a single quorum DID to the node's quorum list. Call once per quorum.

```json
{ "did": "string" }
```

**Setup Quorum**: `POST /rubix/v1/quorums/setup`

Set the node's own DID up as a quorum.

```json
{
  "did": "string",
  "password": "string",
  "priv_password": "string"
}
```

**Check Quorum Status**: `GET /rubix/v1/quorums/status?quorumAddress=<did>`

Check whether a quorum is reachable and set up. Query param `quorumAddress` is the quorum's DID.

| Endpoint | Method | Description |
|---|---|---|
| `/rubix/v1/quorums` | GET | List all configured quorums. No input. |
| `/rubix/v1/quorums/remove_all` | GET | Remove all quorums. No input. |

### Tokens

**Generate Local RBT**: `POST /rubix/v1/tokens/generate_local_rbt`

Mint RBT on a localnet for testing. This is an [async signature flow](#asynchronous-signature-flow).

```json
{
  "did": "string",
  "number_of_tokens": 1,
  "start_index": 0
}
```

**Generate Faucet Test Tokens**: `POST /rubix/v1/tokens/generate_faucet_test`

Issue testnet RBT via the faucet flow. This is an [async signature flow](#asynchronous-signature-flow).

```json
{
  "did": "string",
  "token_count": 1
}
```

**Get All Tokens**: `GET /rubix/v1/tokens?type=<token_type>&did=<did>`

Returns all tokens of the given type for a DID. Query params: `type`, `did`.

### Setup DID from Key Files

**Endpoint**: `POST /rubix/v1/dids/setup`

Set up a DID from existing key files. `multipart/form-data` with a `did_config` field (JSON) plus the key files.
