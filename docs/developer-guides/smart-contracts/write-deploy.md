---
title: Write and Deploy a Contract
sidebar_label: Write and Deploy a Contract
---

<!-- File: docs/developer-guides/smart-contracts/write-deploy.md -->
# Write and Deploy a Contract

At Rubix, smart contracts can be written in languages that compile to WebAssembly, such as Rust and C/C++, and then executed on a blockchain platform that supports WASM. Here are the steps in executing WASM in Rubix.

All smart contract endpoints live under `/rubix/v1/...`. See the [API Reference](../../api.md#smart-contracts) for full details.

## 1. Writing Smart Contracts
Smart contracts are written in high-level programming languages like Rust, GoLang or C/C++. These languages offer the flexibility and expressive power of high-level languages while compiling down to WebAssembly bytecode.

## 2. Compiling to WebAssembly
Once the smart contract code is written, it is compiled to WebAssembly bytecode. Compilers like `rustc` for Rust or Emscripten for C/C++ can be used to generate WebAssembly binaries from the source code.

### About Generate Smart Contract

#### GenerateContract
The first step after generating the WASM binaries is to create a Smart Contract Token (programmable NFTs) that is used to track the proof of execution of the contract. The unique Token ID generated is shared by the owner to peer nodes to participate in contract operations.

**Endpoint:** `POST /rubix/v1/smart_contracts/generate` (`multipart/form-data`)

Form fields: `did`, `binaryCodePath` (the compiled `.wasm`), `rawCodePath` (the raw source file).

```bash
curl -X POST 'http://localhost:20000/rubix/v1/smart_contracts/generate' \
  -F 'did=<User DID>' \
  -F 'binaryCodePath=@<Path to your .wasm file>' \
  -F 'rawCodePath=@<Path to the raw source compiled to wasm>'
```

The response `result` is the generated smart contract Token ID.

## 3. Deployment on Blockchain
The compiled WebAssembly code is then deployed onto a blockchain platform. The contract code, along with any necessary metadata, is stored on the blockchain.

### About Deploy and Subscribe Contract

#### DeployContract
`Generate` is an offline setup event that happens before a contract enters the network. Once a Smart Contract Token ID is created, the owner deploys the contract by submitting a **transaction** that commits RBT to it. Deploy and execute both go through the unified transaction endpoint `POST /rubix/v1/tx` with a `tokens.smartContract` entry — **deployment is simply the contract's first such transaction**, which creates the first element in the tokenchain and pledges the genesis state of the token.

**Endpoint:** `POST /rubix/v1/tx` — this is an [asynchronous signature flow](../../api.md#asynchronous-signature-flow).

```bash
curl -X POST 'http://localhost:20000/rubix/v1/tx' \
  -H 'Content-Type: application/json' \
  -d '{
    "initiator": "<Deployer DID>",
    "owner": "",
    "tokens": {
      "smartContract": [
        { "smartContractId": "<Smart Contract Token ID>", "value": 1, "data": "deploying" }
      ]
    },
    "memo": "deploying smart contract"
  }'
```

- `owner` is left empty for smart contract transactions.
- `value` is the RBT amount committed to the contract.

The response returns `"Password needed"` with an `id`. Complete the deployment by supplying the password:

```bash
curl -X POST 'http://localhost:20000/rubix/v1/signature' \
  -H 'Content-Type: application/json' \
  -d '{ "id": "<id from the response>", "password": "mypassword" }'
```

#### SubscribeContract
Nodes can subscribe to a contract to stay in sync with its state changes. The deploying node is auto-subscribed; other nodes subscribe explicitly.

**Endpoint:** `GET /rubix/v1/smart_contracts/subscribe?smartContractToken=<Smart Contract Token ID>`

```bash
curl -X GET 'http://localhost:20000/rubix/v1/smart_contracts/subscribe?smartContractToken=<Smart Contract Token ID>'
```

## 4. Execution
When a user or another contract interacts with the deployed smart contract, the contract’s functions are called via transactions. These transactions contain input data that specifies which function of the contract to execute and with what parameters.

### About Execute Contract

#### ExecuteContract
Executing a contract uses the **same** `POST /rubix/v1/tx` endpoint as deployment — the only difference is that `data` carries the execution input (the function/parameters to run). Each execution appends a new block to the contract's tokenchain.

```bash
curl -X POST 'http://localhost:20000/rubix/v1/tx' \
  -H 'Content-Type: application/json' \
  -d '{
    "initiator": "<Executor DID>",
    "owner": "",
    "tokens": {
      "smartContract": [
        { "smartContractId": "<Smart Contract Token ID>", "value": 1, "data": "<contract input to write to the token chain>" }
      ]
    },
    "memo": "executing smart contract"
  }'
```

As with deployment, complete the transaction with `POST /rubix/v1/signature` using the returned `id`.

## 5. Validation
The transaction is validated by the quorum to ensure it follows the rules of the protocol. Once validated, the transaction and the associated smart contract state change are processed by the nodes.

### About Publishing Contract State
Publishing is automatic. Once an execute/deploy transaction is approved via consensus, the initiating node automatically publishes the state update to all subscribed peers over the pub-sub mechanism — there is no separate "publish" API call to make.

## 6. State Changes and Output
Smart contracts can read data from the blockchain’s state and modify it as per the logic defined in their functions. They can also produce output data, typically returned to the caller after execution.

The smart contract is executed on the DApp side. The DApp should expose an HTTP endpoint, which is registered with the node via the **register callback** API. Once registered, each time an execution happens on the token chain, the states in all subscribed nodes are updated as per the contract logic.

**Endpoint:** `POST /rubix/v1/smart_contracts/register_callback`

```bash
curl -X POST 'http://localhost:20000/rubix/v1/smart_contracts/register_callback' \
  -H 'Content-Type: application/json' \
  -d '{
    "CallBackURL": "<API endpoint URL defined on the dapp side>",
    "SmartContractToken": "<Smart Contract Token ID>"
  }'
```

## 7. Immutable Execution
Once deployed, the logic of a smart contract, represented by its WebAssembly bytecode, is immutable. This means it cannot be changed. If you need to update the contract’s logic, a new version of the contract needs to be deployed.
