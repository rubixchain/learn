---
title: API
geekdocBreadcrumb: false
weight: 1
---

{{< tabs "uniqueid" >}}

{{< tab "NFT" >}}

| Operation |  Endpoint | Description | Sample Request |
|------------------|---------------|-------------|-------|
| Create NFT | `/api/create-nft` | This API creates an NFT | ```curl -X 'POST' 'http://localhost:20004/api/create-nft' -H 'accept: multipart/form-data' -H 'Content-Type: multipart/form-data' -F 'did=bafybmiacfkwf7uzhfmm6cnhh5fc5xqvwvzai6xvezaop4danm5tbfdu6ri' -F 'metadata=@metadata.json;type=application/json' -F 'artifact=@nft.avif;type=image/avif'```|
| Deploy NFT | `/api/deploy-nft` | This API deploys an NFT | ```curl -X 'POST' 'http://localhost:20004/api/deploy-nft' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"did": "bafymd..", "nft": "Qm..", "quorum_type": 2}'``` |
| Execute NFT | `/api/execute-nft` | This API executes an NFT (Ownership transfer or Internal State change)  | ```curl -X 'POST' 'http://localhost:20004/api/execute-nft' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"comment": "string", "nft": "string", "nft_data": "<any string data>" "nft_value": 10, "owner": "bafymdi..", "quorum_type": 2, "receiver": "bafymdi.."}'``` |
| Subscribe NFT | `/api/subscribe-nft` | This API subscribes to NFT token chain updates | ```curl -X 'POST' 'http://localhost:20004/api/subscribe-nft' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"nft": "string"}'``` |
| Get NFT Chain Data | `/api/get-nft-token-chain-data` | This API fetches NFT Token Chain data | ```curl -X 'GET' 'http://localhost:20004/api/get-nft-token-chain-data?nft=Qm123&latest=false' -H 'accept: application/json'``` |
| List NFTs | `/api/list-nfts` | This API fetches all the NFTs present on the node. | ```curl -X 'GET' 'http://localhost:20004/api/list-nfts' -H 'accept: application/json'``` |
| Get NFTs by did | `/api/get-nfts-by-did` | This API fetches all the NFTs owned by the given did. | ```curl -X 'GET' 'http://localhost:20004/api/get-nfts-by-did?did=bafymdi....' -H 'accept: application/json'``` |
| Fetch NFT | `/api/fetch-nft` | This API will Fetch NFT from network to the node. | ```curl -X 'GET' 'http://localhost:20004/api/fetch-nft?nft=Qm1234' -H 'accept: application/json'``` |

{{< /tab >}}

{{< /tabs >}}