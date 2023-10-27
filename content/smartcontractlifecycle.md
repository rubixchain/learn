---
title: Smart Contract Life Cycle
geekdocBreadcrumb: false
aliases: ["/smartcontract", "/about/smartcontract", "/contributing/smartcontract"]
---

<h1> Rubix WASM based smart contracts for Wider Adoption </h1>

Rubix protocol is committed to improve adaptability of blockchain technology. Along with its revolutionary proof of pledge protocol aided by zero gas fee transactions , Rubix focuses on making dApp deployment and execution easier for our ecosystem. With WebAssembly(WASM) based smart contracts, existing web2 codebases and developers can migrate their codebase and knowledge into Rubix with ease.
WebAssembly (WASM) is a binary instruction format that allows code to be executed at near-native speed in a safe , sandboxed and deterministic manner across different platforms. Smart contracts can be written in languages that compile to WebAssembly, such as Rust and C/C++, and then executed on a blockchain platform that supports WASM. Here are the steps in executing WASM in Rubix.
<ol>
<li>
<h3> Writing Smart Contracts: </h3>
Smart contracts are written in high-level programming languages like Rust , GoLang or C/C++. These languages offer the flexibility and expressive power of high-level languages while compiling down to WebAssembly bytecode.
</li>
<li> 
<h3> Compiling to WebAssembly: </h3>
Once the smart contract code is written, it is compiled to WebAssembly bytecode. Compilers like rustc for Rust or Emscripten for C/C++ can be used to generate WebAssembly binaries from the source code.
</li>
    <ol>
    <h3> About generate and subscribe contract </h3>
    <li>  <h3> Generatecontract  </h3>
        The first step after generating the wasm binaries is to create Smart contract Token (programmable NFTs) that is used to track the proof of execution of the contract.  The unique Token ID generated is shared by the owner to peer nodes to participate in contract operations. <br>
        Sample API: 
        </li>
    <code>  curl --location 'http://localhost:20000/api/generate-smart-contract' \ <br>
           --form 'did="User DID"' \    <br>
           --form 'binaryCodePath=@"<Path to your .wasm file>"' \   <br>
           --form 'rawCodePath=@"<Path to the code compiled to wasm>"' \    <br>
           --form 'schemaFilePath=@"<Path to the schema or state update file>"'
    </code>
    </ol>
<li>
<h3> Deployment on Blockchain:
</h3>
The compiled WebAssembly code is then deployed onto a blockchain platform. The contract code, along with any necessary metadata, is stored on the blockchain.
</li>
<ol>
    <h3> About Deploy and Subscribe contract </h3>
    <li> <h3> DeployContract </h3>
    Generate is an offline setup event that happen before a contract enters the network. Once SmartContract Token is created the owner deploy contract to Rubix network by calling —-deployContract—- This creates the first element in tokenchain and pledges the genesis state of token.
    Sample API:
    </li>
    <code>
    curl --location 'http://localhost:20000/api/deploy-smart-contract' \    <br>
--header 'Content-Type: application/json' \ <br>
--data '{
        "comment":            "Your input Comment", <br>
        "deployerAddr":       "PeerId.DID of the user who is deploying the smart contract", <br>
        "quorumType":         2, <br>
        "rbtAmount":          1, <br>
        "smartContractToken": "The smart contract token hash generated in generate-smart-contract api"
}'
    </code>
    <li> <h3> SubscribeContract </h3>
    Nodes can subscribe to contract events by using command "subscribe" . This keeps them in sync with contract state changes. 
    Sample API:
    </li>
    <code>
    </code>
</ol>
<li>
<h3> Execution
</h3>
When a user or another contract interacts with the deployed smart contract, the contract’s functions are called via transactions. These transactions contain input data that specifies which function of the contract to execute and with what parameters.
</li>
    <ol>
    <h3> About execute contract </h3>
    <li> <h3> Executecontract </h3>
    Nodes that want to execute a contract call this API with details on which function they want to run and the corresponding input parameters. Every smart contract will have a schema file that lists all available function names and data type of parameters. 
    Sample API:
</li>
<code>
curl --location 'http://localhost:20000/api/execute-smart-contract' \ <br>
--header 'Content-Type: application/json' \ <br>
--data '{
        "comment":            "Your input Comment", <br>
        "executorAddr":       "PeerId.DID of the user executingwho is  the smart contract", <br>
        "quorumType":         2, <br>
        "smartContractData":  "Smart contract input which should be written to the token chain", <br>
        "smartContractToken": "The smart contract token hash generated in to which the node has subscribed"
    }'
</code>
    </ol>
<li>
<h3> Validation and Execution: </h3>
The transaction is validated by the blockchain nodes to ensure it follows the rules of the blockchain protocol. Once validated, the transaction and the associated smart contract function call are processed by the nodes. 
    <ol>
        <li>
        <h3>  About Publish contract
        </h3>
            <ol>
                <li> <h3> PublishContract </h3>
                Once executeContract state change is approved via consensus , the node who initiated the state change call publishContract to publish the state update to all peers. ExecuteContract and DeployContract is always followed by the PublishContract API. 
                </li>
            </ol>
        </li>
    </ol>
</li>
<li>
<h3> State Changes and Output: </h3>
Smart contracts can read data from the blockchain’s state and modify it as per the logic defined in their functions. Smart contracts can also produce output data, which is typically returned to the caller after the contract function execution is complete.

The smart contract is executed on the DApp side. The DApp should have an api endpoint which must be passed as a parameter to register-callback-url api. This api registers the api endpoint in the node. Once the endpoint is registered, each time an execution happens on the token chain, as per the logic in the smart contract deployed, the states in each of the subscribed nodes get updated.

Sample API : 

<code>
curl --location 'http://localhost:20000/api/register-callback-url' \ <br>
--header 'Content-Type: application/json' \ <br>
--data '{
        "CallBackURL":        "API endpoint url defined on the dapp side", <br>
        "SmartContractToken": "The smart contract hash generated" <br>
}'
</code>
</li>
<li>
<h3> Immutable Execution: </h3>
Once deployed, the logic of a smart contract, represented by its WebAssembly bytecode, is immutable. This means it cannot be changed. If you need to update the contract’s logic, a new version of the contract needs to be deployed.
</li>
</ol>
<br>






If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
