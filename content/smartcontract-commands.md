---
title: CLI
geekdocBreadcrumb: false
weight: 1
---

{{< tabs "uniqueid" >}}

{{< tab "NFT" >}}

| Functionality       |  Usage                      | Description                                               | Flags                                                                                                                                                                                                                                   |
|------------------|-----------------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Generate Smart Contract | `./rubixgoplatform generatesct` | Command to generate smartcontract token | `-did string`: Creator of the smartcontract (default "")<br><br>`-binCode string`: Path of the WASM file (default "")<br><br>`-rawCode string`: Path of the file in which the smartcontract logic is written (default "")<br><br> `schemaFile string`: Path of the state updating file |
| Deploy Smart Contract | `./rubixgoplatform deploysmartcontract` | Command to deploy smartcontract | `-sct string`: Smartcontract token id which is returned while generating a contract (default "")<br><br> `-deployerAddr string`: Deployer DID (default "")<br><br> `-transType int`: Quorum type (default 2)<br><br> `comment string`: The comment user wish to give (default "")<br><br> `-rbtAmount int`: The amount of RBT associated with the contract|
| Execute Smart Contract | `./rubixgoplatform executesmartcontract` | Command to execute a smart contract. Execution means adding data to the smart contract token chain  | `-smartContractToken string`: Smart Contract token Id (default "")<br><br>`-executorAddr string`: DID of the node which has subscribed to the contract and wishes to participate in the contract execution (default "")<br><br> `-sctData string`: The data that the executor wishes to write to the smart contract token chain (default "")<br><br>`-transType int`: Quorum Type (default 2)<br><br>`-comment string`: Transaction Comment (default "")<br><br>`-rbtAmount float`: Sale value of NFT (default 0.0)<br><br>`-nftData string`: value associated with self-execution operation (default "")<br><br>|
| Subscribe Smart Contract | `./rubixgoplatform subscribesct` | Command to subscribe to Smart Contract token chain updates | `-sct string`: Smart contract token Id (Default: "") |
{{< /tab >}}

{{< /tabs >}}