---
title: Smart Contract Example
geekdocBreadcrumb: false
aliases: ["/smartcontract", "/about/smartcontract", "/contributing/smartcontract"]
---


# Smart Contract Example Walkthrough

We have created a simple voting contract example to understand how smart contract works in Rubix Network
[here](https://github.com/rubixchain/Rubix-Smart-Contract-Examples)

## Prerequisties

1. One or more rubix nodes running in different ports. To work as the smart contract generator and subscriber.
2. A set of quorums which have sufficient test RBTs.

## How to be a node?

Follow the instruction shared in <a href="/node-setup"> Setup Rubix Node </a>
## Working with sample Voting dApp

1. Compile the Rust code in voting-contract/voting_contract using

```
 cargo build --target wasm32-unknown-unknown --release
```
This will compile the Rust code to WebAssembly and the resulting file with the .wasm extension can be found in the directory **voting-contract/voting_contract/target/wasm32-unknown-unknown/release**

2. Provide user node specific info : In the directory voting-contract there is a main.go file, which has some variables which are hardcoded, for ease.  Such as did, deployer address, executor address, port etc which are user specific, so these inputs must be changed according to the user. The variables which needs to be changed are:
   1. did : Every node in Rubix has a unique decentralized identity, that is called Did. So the variable “did” in each of the functions will be to identify the node which is performing that functionality.  For example, if a node is generating the smart contract then the did will be the decentralized identity of that particular node. Eg : bafybmifb4rbwykckpbcnekcha23nckrldhkcqyrhegl7oz44njgci5vhq
   2. deployerAddress : Apart from did there is one more identifier which every node has. That is the peer id. So the deployer address will be the combination of the peer id and the did. Another point to be noted here is that, the deployer address of the node which is generating the smart contract and deploying the smart contract will be the same. But while generating the contract we provides only the did while deploying the smart contract we must provide the peer id as well as the did in the format of “peerid.did” Eg: "12D3KooWCR4BW7gfPmCZhAJusqv1PoS49jgqTGvofcG4WPyg8FxV.bafybmifb4rbwykckpbcnekcha23nckrldhkcqyrhegl7oz44njgci5vhqa"
   3. executorAddress : This is similar to the deployer address. The difference here is that, the nodes which have subscribed to the smart contracts are the only ones that could execute the smart contracts. So this will be a “peerid.did” address combination of the nodes which have already subscribed to the smart contract using the smart contract token hash.
   4. Port : Each of the Rubix node is configured to run on different ports. The port number is given so that the Dapp could identify, to which port the particular api must be called. So when you run the Dapp, you should provide the Port number in which your Rubix node is running.

3. Once the changes mentioned above are saved, you can run the command

```
 go run main.go
```
This will run the go server or the simple cmd Dapp which is performing the smart contract operations. If things goes well you will be greeted in the command line

4. This dapp is enabled with a cli interface to facilitate communication between the dapp and rubix  blockchain.  Each option (as mentioned above) call a specific smart contract API on node . You can configure the inputs to APIs in the main.go. For more information regarding the APIs please refer [Smart contract APIs](https://learn.rubix.net/smartcontractapi/)

## Under the hood of Smart Contract Execution in Rubix

The voting-contract demonstrates a simple DAPP which can generate,subscribe,deploy and execute a simple voting contract to Rubix Network. The contract is simple, any node which is subscribing to the contract can vote for a colour, either blue or red. When each node votes for a colour, the state file in all the nodes subscribed to the contract gets updated.

The flow of execution for this program :

1. The state updation logic is written in Rust and is compiled to wasm using **cargo build --target wasm32-unknown-unknown --release**. [The first "unknown" refers to the target's operating system, and the second "unknown" refers to the target environment. Both of these are given as unknown so that the execution of the wasm can take place in any system.]
2. Once the wasm file is ready, we have to generate the smart contract in Rubix and deploy it. For generating a smart contract we have an api : **/api/generate-smart-contract** [There are some input parameters which needs to be given. Please check the swagger of your Rubix node to learn more about that ]. The function **Generate Contract** in the above cli calls this api. Once this api is called, it will be returned with a smart contract token hash. All the next steps which we are going to perform will revolve around this smart contract hash.
3. The next step here is to subscribe to the smart contract. The nodes which are interested to be part of the voting-contract subscribe to the smart contract using the smart contract hash which was generated during the generation of smart contract. Along with subscribing to the smart contract, a call back url which is an endpoint in the dapp should be registered with the subscribing node. So that each time the smart contract token chain is updated the node can trigger this endpoint in the dapp so that the state updation logic which is there in the wasm can be triggered. The function **Subscribe Contract** in Node 1, will subscribe the smart contract in the node configured as Node 1.
4. Once the subscription is done, we can deploy the smart contract to the network. For deploying the smart contract we have an api : **/api/deploy-smart-contract**.There are some input parameters which need to be given. Please check the swagger of your Rubix node to learn more about that. The deploy smart contract should be done by the node which has generated the smart contract. The function **Deploy Contract** is calling this api.
5. Once the smart contract is deployed, the nodes which are subscribed to the smart contract can execute the contract. For executing the contract we have an api : **/api/execute-smart-contract**. [There are some input parameters which needs to be given. Please check the swagger of your Rubix node to learn more about that ]. The api should be called by the nodes which are subscribed to the smart contract.Here in the case of the voting, executing the contract means adding the Vote either red or blue to the smart contract token chain which was created while generating the contract. Each time a node executes the contract the particular input which is given by the node is recorded in the smart contract token chain. In the above example as shown, we have 3 nodes to which we have already subscribed, so we can execute the contract in those 3 nodes. That is what is achieved using the **Execute Contract** function.
6. As I said in the above point when the contract is executed the token chain is updated, so the tokenchain present in each of the nodes which have been subscribed to the smart contract will get updated. When the token chain gets updated the Rubix node triggers the api endpoint which was registered before and will perform the state updation using the wasm file.
