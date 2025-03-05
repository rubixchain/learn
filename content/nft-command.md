---
title: CLI
geekdocBreadcrumb: false
weight: 1
---

{{< tabs "uniqueid" >}}

{{< tab "NFT" >}}

| Functionality       |  Usage                      | Description                                               | Flags                                                                                                                                                                                                                                   |
|------------------|-----------------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Create NFT | `./rubixgoplatform create-nft` | Command to create NFT | `-did string`: Creator of the NFT (default "")<br><br>`-metadata string`: Path of JSON file which contains information about the NFT (default "")<br><br>`-artifact string`: Path of file which is meant to be an NFT (default "") |
| Deploy NFT | `./rubixgoplatform deploy-nft` | Command to deploy NFT | `-nft string`: NFT Id (default "")<br><br> `-did string`: Deployer DID (default "")<br><br> `-transType int`: Quorum type (default 2)<br><br> `-nftData string`: Any Data the deployer wishes to write on the NFT chain<br><br> `-nftValue float64`: The value of the NFT while deploying |
| Execute NFT | `./rubixgoplatform execute-nft` | Command to execute NFT. Execution can either indicate transfer of ownership or self-execution  | `-nft string`: NFT Id (default "")<br><br>`-owner string`: DID that owns the NFT (default "")<br><br> `-receiver string`: DID that receives the ownership of NFT (default "")<br><br>`-transType int`: Quorum Type (default 2)<br><br>`-comment string`: Transaction Comment (default "")<br><br>`-rbtAmount float`: Sale value of NFT (default 0.0)<br><br>`-nftData string`: value associated with self-execution operation (default "")<br><br>|
| Subscribe NFT | `./rubixgoplatform subscribe-nft` | Command to subscribe to NFT token chain updates | `-nft string`: NFT Id (Default: "") |
| NFT Token Chain dump | `./rubixgoplatform dump-nft-tokenchain` | Command to export NFT token chain information in `nft.json` | `-nft string`: NFT Id (Default "") |
| Get NFTs by did | `./rubixgoplatform get-nfts-by-did` | Command to get the nfts owned by the particluar did | `-did string`: DID (Default: "") |
| Fetch NFT | `./rubixgoplatform fetch-nft` | Command to Fetch NFT from network to the node | `-nft string`: NFT Id (Default: "") |
{{< /tab >}}

{{< /tabs >}}