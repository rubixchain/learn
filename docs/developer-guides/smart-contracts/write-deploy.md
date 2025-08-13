---
title: Write and Deploy a Contract
sidebar_label: Write and Deploy a Contract
---

<!-- File: docs/developer-guides/smart-contracts/write-deploy.md -->
# Write and Deploy a Contract

At Rubix, smart contracts can be written in languages that compile to WebAssembly, such as Rust and C/C++, and then executed on a blockchain platform that supports WASM. Here are the steps in executing WASM in Rubix.

## 1. Writing Smart Contracts
Smart contracts are written in high-level programming languages like Rust, GoLang or C/C++. These languages offer the flexibility and expressive power of high-level languages while compiling down to WebAssembly bytecode.

## 2. Compiling to WebAssembly
Once the smart contract code is written, it is compiled to WebAssembly bytecode. Compilers like `rustc` for Rust or Emscripten for C/C++ can be used to generate WebAssembly binaries from the source code.

### About Generate and Subscribe Contract

#### GenerateContract
The first step after generating the WASM binaries is to create a Smart Contract Token (programmable NFTs) that is used to track the proof of execution of the contract. The unique Token ID generated is shared by the owner to peer nodes to participate in contract operations.  
**Sample API:**

```
curl --location 'http://localhost:20000/api/generate-smart-contract' --form 'did="User DID"' --form 'binaryCodePath=@"<Path to your .wasm file>"' --form 'rawCodePath=@"<Path to the code compiled to wasm>"' --form 'schemaFilePath=@"<Path to the schema or state update file>"'
```

## 3. Deployment on Blockchain
The compiled WebAssembly code is then deployed onto a blockchain platform. The contract code, along with any necessary metadata, is stored on the blockchain.

### About Deploy and Subscribe Contract

#### DeployContract
`Generate` is an offline setup event that happens before a contract enters the network. Once a SmartContract Token is created, the owner deploys the contract to the Rubix network by calling `deployContract`. This creates the first element in the tokenchain and pledges the genesis state of the token.  
**Sample API:**

```
curl --location 'http://localhost:20000/api/deploy-smart-contract' --header 'Content-Type: application/json' --data '{
  "comment": "Your input Comment",
  "deployerAddr": "PeerId.DID of the user who is deploying the smart contract",
  "quorumType": 2,
  "rbtAmount": 1,
  "smartContractToken": "The smart contract token hash generated in generate-smart-contract api"
}'
```

#### SubscribeContract
Nodes can subscribe to contract events using the `subscribe` command. This keeps them in sync with contract state changes.  
**Sample API:**

```
curl --location 'http://localhost:20000/api/subscribe-smart-contract' --header 'Content-Type: application/json' --data '{
  "smartContractToken": "smart contract token hash generated from generate-smart-contract api"
}'
```

## 4. Execution
When a user or another contract interacts with the deployed smart contract, the contract’s functions are called via transactions. These transactions contain input data that specifies which function of the contract to execute and with what parameters.

### About Execute Contract

#### ExecuteContract
Nodes that want to execute a contract call this API with details on which function they want to run and the corresponding input parameters. Every smart contract will have a schema file that lists all available function names and data types of parameters.  
**Sample API:**

```
curl --location 'http://localhost:20000/api/execute-smart-contract' --header 'Content-Type: application/json' --data '{
  "comment": "Your input Comment",
  "executorAddr": "PeerId.DID of the user executing the smart contract",
  "quorumType": 2,
  "smartContractData": "Smart contract input which should be written to the token chain",
  "smartContractToken": "The smart contract token hash generated to which the node has subscribed"
}'
```

## 5. Validation
The transaction is validated by the blockchain nodes to ensure it follows the rules of the blockchain protocol. Once validated, the transaction and the associated smart contract function call are processed by the nodes.

### About Publish Contract

#### PublishContract
Once `executeContract` state change is approved via consensus, the node who initiated the state change calls `publishContract` to publish the state update to all peers. `ExecuteContract` and `DeployContract` are always followed by the `PublishContract` API.

## 6. State Changes and Output
Smart contracts can read data from the blockchain’s state and modify it as per the logic defined in their functions. They can also produce output data, typically returned to the caller after execution.

The smart contract is executed on the DApp side. The DApp should have an API endpoint, which must be passed as a parameter to the `register-callback-url` API. This API registers the endpoint in the node. Once registered, each time an execution happens on the token chain, the states in all subscribed nodes are updated as per the contract logic.

**Sample API:**

```
curl --location 'http://localhost:20000/api/register-callback-url' --header 'Content-Type: application/json' --data '{
  "CallBackURL": "API endpoint url defined on the dapp side",
  "SmartContractToken": "The smart contract hash generated"
}'
```

## 7. Immutable Execution
Once deployed, the logic of a smart contract, represented by its WebAssembly bytecode, is immutable. This means it cannot be changed. If you need to update the contract’s logic, a new version of the contract needs to be deployed.
