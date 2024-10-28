---
title: CLI Commands
aliases:
  [
    "/mining",
    "/setup",
    "/mine",
    "/rbt",
    "/wallet",
    "/dist",
    "/start",
  ]
geekdocBreadcrumb: false
weight: 1
---

{{< tabs "uniqueid" >}}


{{< tab "FT" >}}
| Command         | Sample Usage                      | Description                                               | Options                                                                                                                                                                                                                                                                                    |------------------|-----------------------------------|-----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Create FT        | `./rubixgoplatform createft`     | This command is used for creating Fungible Tokens (FTs). | `-ftName string`<br>Name of FT to be created (default "")<br>`-ftCount int`<br>Count of FTs to be created (default "0")<br>`-rbtAmount int`<br>Amount of RBT to be used for the creation of FT (default 0)<br>`-did string`<br>DID of the user (default "")<br>`-port string`<br>Server/Host port (default "20000") |
| Transfer FT      | `./rubixgoplatform transferft`   | This command is used for transferring Fungible Tokens (FTs). | `-port string`<br>Server/Host port (default "20000")<br>`-senderAddr string`<br>Sender address (default "")<br>`-receiverAddr string`<br>Receiver address (default "")<br>`-ftName string`<br>Name of FT to be transferred (default "")<br>`-ftCount int`<br>Count of FTs to be transferred (default "0")<br>`-transComment string`<br>Transfer comment (default "Test transaction")<br>`-transType int`<br>Transaction type (default 2)<br>`-fp`<br>Force password to be entered on the terminal<br> |
| Get FT Info      | `./rubixgoplatform getftinfo`   | This command is used for getting the balance of FTs.    | `-did string`<br>DID of the user (default "")<br>`-port string`<br>Server/Host port (default "20000")                                                                                                                                                                                                                                                                                        |
| Dump FT          | `./rubixgoplatform dumpft`       | Use this command to dump the token chain of FT.         | `-addr string`<br>Server/Host Address (default "localhost")<br>`-port string`<br>Server/Host port (default "20000")<br>`-token string`<br>Token address (default "")                                                                          |
                                                                                                                                                                                                                               |

{{< /tab >}}

{{< /tabs >}}