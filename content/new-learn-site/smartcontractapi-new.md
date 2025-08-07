---
title: Smart contract API EndPoints
geekdocBreadcrumb: false
weight: 1
---


{{< tabs "uniqueid" >}}
{{< tab "SmartContract API" >}}
| Field | Endpoint | Description | Sample Request |
| ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Deploy Smart Contract | `/api/deploy-smart-contract` | This API will deploy smart contract Token | ```curl --header "Content-Type: application/json" --request POST 'http://localhost:20000/api/deploy-smart-contract' --data '{ "smartContractToken": "your_token", "deployerAddr": "your_address", "rbtAmount": 100, "quorumType": 2, "comment": "your_comment" }'``` |
| Generate Smart Contract | `/api/generate-smart-contract` | This API will Generate smart contract Token | ```curl --location --request POST 'http://localhost:20000/api/generate-smart-contract' --form 'did="your_did"' --form 'binaryCodePath=@"path_to_binary_code"' --form 'rawCodePath=@"path_to_raw_code"' --form 'schemaFilePath=@"path_to_schema"'``` |
| Fetch Smart Contract | `/api/fetch-smart-contract` | This API will Fetch smart contract | ```curl --header "Content-Type: application/json" --request POST 'http://localhost:20000/api/fetch-smart-contract' --data '{ "smart_contract_token": "your_token" }'``` |
| Publish Smart Contract | `/api/publish-contract` | This API endpoint publishes a smart contract. | ```curl --header "Content-Type: application/json" --request POST 'http://localhost:20000/api/publish-contract' --data '{ "contract": "your_contract", "did": "your_did", "contract_block_hash": "your_hash" }'``` |
| Subscribe to Smart Contract | `/api/subscribe-contract` | This API endpoint allows subscribing to a smart contract. | ```curl --header "Content-Type: application/json" --request POST 'http://localhost:20000/api/subscribe-contract' --data '{ "contract": "your_contract" }'``` |
| Execute Smart Contract | `/api/execute-smart-contract` | This API will Execute smart contract Token | ```curl --header "Content-Type: application/json" --request POST 'http://localhost:20000/api/execute-smart-contract' --data '{ "smartContractToken": "your_token", "executorAddr": "your_address", "quorumType": 2, "comment": "your_comment", "smartContractData": "your_data" }'``` |
{{< /tab >}}
{{< /tabs >}}

> **Note**: The default port is `20000`. If you are using a different port, please modify the sample requests accordingly.
