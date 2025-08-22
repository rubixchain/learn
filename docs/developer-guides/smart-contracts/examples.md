---
title: Example Smart Contracts
sidebar_label: Example Smart Contracts
---

<!-- File: docs/developer-guides/smart-contracts/examples.md -->
# Example Smart Contracts

## Voting Contract

This contract allows users to **register a color**, **vote** for one, and **retrieve the winning color**. It's written in **Rust**, compiled to **WASM**, and deployed on the **Rubix blockchain**.



# Smart Contract Setup Steps for Voting Contract

### 1. Clone the Voting Smart Contract

```bash
git clone https://github.com/rubixchain/rubix-dapps
cd contracts
cd voting-contract
```

### 2. Generate WASM & Run Server

```bash
cd voting-contract
cargo build --target wasm32-unknown-unknown
```

The WASM file will be generated at:

```
target/wasm32-unknown-unknown/debug/voting_contract.wasm
```
Create a folder `artifacts` and copy the wasm file into it.

To run the DApp server:

```bash
go run main.go
```

---

### 3. Generate the Smart Contract 

Open Swagger at: `http://localhost:<port at which node is running>/swagger/index.html`

From the deployer node, we will generate the contract using `/api/genarate-smart-contract` . It has 4 params:
    - `did` : Provide the Deployer DID
    - `binaryCodePath` :  Upload WASM contract here
    - `rawCodePath` : Upload the contract source code file (`voting_contract/src/lib.rs`)
    - `schemaFilePath` : Upload the Schema File Path (`store_state/vote_contract/votefile.json`)

![Generate smart contract](/img/smart-contract-images/generate-smart-contract.png)

Get the contract tokenID from the output (example: `QmXyz...`)

---
- **Note:** For all the following steps you can use either swagger or CLI.

### 4. Subscribe to Smart Contract

In Rubix’s stateless, event-driven architecture, not all nodes are aware of every smart contract by default. To participate in or track the execution of a specific contract, a node must explicitly subscribe to it. This subscription uses a publish-subscribe (pub-sub) mechanism that ensures only interested nodes receive updates or execution events related to the contract. By subscribing, a node signals that it wants to stay in sync with the contract’s state transitions and be notified when actions like execution or deployment occur. Without subscribing, a node would remain unaware of these updates, as Rubix does not broadcast all contract activity globally like traditional blockchains.

![Subscribe smart contract](/img/smart-contract-images/subscribe.png)

---

```bash
curl -X POST http://localhost:20000/api/subscribe-smart-contract \
-H 'Content-Type: application/json' \
-d '{"smartContractToken": "<Smart Contract Token Hash>"}'
```

### 5. Register Callback URL

Since Rubix is designed to be stateless, it ensures that the blockchain itself does not bear the computational or storage load of executing smart contract logic.

To facilitate this, when a smart contract is executed via the Rubix node, the node sends a POST request to a Callback URL registered by the developer or user. This URL typically points to a server (e.g., `http://localhost:8080/api/contract-input`) which:

* Receives the smart contract execution request.

* Loads the corresponding WASM file.

* Calls the appropriate function inside the WASM using a compatible runtime.

* Reads/writes to external state (like JSON, databases, or other storage).

![Register callback](/img/smart-contract-images/register-call-back.png)

---

```bash
curl -X POST http://localhost:20000/api/register-callback-url \
-H 'Content-Type: application/json' \
-d '{
  "CallBackURL": "http://localhost:8080/api/contract-input",
  "SmartContractToken": "<Smart Contract Token Hash>"
}'
```



### 6. Deploy the Smart Contract 
- We will now proceed to deploy the contract from the Deployer node and commit 1 RBT to it:

![Deploy smart contract](/img/smart-contract-images/deploy.png)

-you will get response with an ID, use it to do the signature. 

![Deploy response](/img/smart-contract-images/deploy-response.png)

- confirm deployment of the smart contract by doing the signature

![Signature](/img/smart-contract-images/deploy-signature.png)


```

```bash
curl -X POST http://localhost:20000/api/deploy-smart-contract \
-H 'Content-Type: application/json' \
-d '{
  "comment": "deploying..",
  "deployerAddr": "<Deployer DID>",
  "quorumType": 2,
  "rbtAmount": 1,
  "smartContractToken": "<Smart Contract Token Hash>"
}'
```

Then, confirm using:

```bash
curl -X POST http://localhost:20000/api/signature-response \
-H 'Content-Type: application/json' \
-d '{
  "id": "<UUID from deploy response>",
  "mode": 0,
  "password": "mypassword"
}'
```

---

### 7. Execute the Smart Contract 

- we can now proceed to execute the contract with "Red" as a vote.

![Execute smart contract](/img/smart-contract-images/execute.png)

- similar to deployment of the smart contract, use the output of the execute smart contract to go ahead with the signature response.

```bash
curl -X POST http://localhost:20000/api/execute-smart-contract \
-H 'Content-Type: application/json' \
-d '{
  "comment": "executing..",
  "executorAddr": "<Executor DID>",
  "quorumType": 2,
  "smartContractData": "Red",
  "smartContractToken": "<Smart Contract Token Hash>"
}'
```

Then, confirm using:

```bash
curl -X POST http://localhost:20000/api/signature-response \
-H 'Content-Type: application/json' \
-d '{
  "id": "<UUID from execute response>",
  "mode": 0,
  "password": "mypassword"
}'
```

---

### 8. Display Smart Contract Chain Data

**Full Chain:**

```bash
curl -X POST http://localhost:20000/api/get-smart-contract-token-chain-data \
-H 'Content-Type: application/json' \
-d '{
  "latest": false,
  "token": "<Smart Contract Token Hash>"
}'
```

**Latest Block:**

```bash
curl -X POST http://localhost:20000/api/get-smart-contract-token-chain-data \
-H 'Content-Type: application/json' \
-d '{
  "latest": true,
  "token": "<Smart Contract Token Hash>"
}'
```