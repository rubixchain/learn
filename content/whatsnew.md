---
title: 📣 What's New 
geekdocBreadcrumb: false
aliases: ["/whats new", "/what's new", "/latest"]
---


### What is new in Rubix Network

 Watch this space to get the updates about all that is happening @ Rubix!!!

{{< hint info >}}

## 🎉 Rubix 2.6: Yamato

We are excited to announce our latest update, Rubix 2.6: Yamato.
This new update transforms the way tokens are used on our platform. We introduce faster token transfers with less number of quorums (Only 5 out of 7 quorums have to sign), pledging/un-pledging of tokens to enforce PoP to the next level of accurate tracking of token transfers with improved security, enhanced authentication using secp256k1 parameterized ECDSA key pairs, and transaction validation.

<a href ="https://github.com/rubixchain/rubixnetwork/releases/tag/2.6"> Click here to download Rubix 2.6: Yamato </a>

### Information 

**JDK version**

- We recommend you to update the JAVA verison in your system to OpenJDK11. This is critical to run the Rubix executable without any hassle.

**ECDSA Keys**

- In this release we have introduced the use of ECDSA Key pair to further enhance the security, authentication and verification of tokens and transactions.

- Please refer to use of the below API to create the ECDSA key pair for transaction and for quorum services, once you have started the rubix jar.

```
$ curl --header "Content-Type: application/json" --request POST 'http://localhost:1898/generateEcDSAKeys' --data '{ "pvtKeyPass" : "<password>" , "returnKey" : 0}'
```


```
$ curl --header "Content-Type: application/json" --request POST 'http://localhost:1898/generateQuorumKeys' --data '{ "pvtKeyPass" : "<password>" , "returnKey" : 0}'
```

- After creation of Quorum service ECDSA key pair, execute the below API to start quorum services. Note, kindly provide the same password that was used to create the quorum keys.

```
curl --header "Content-Type: application/json" --request POST 'http://localhost:1898/startQuorumService' --data '{ "pvtKeyPass" : "<password>" }'
```

**Transaction**

- Since the inception of ECDSA keys to rubix, to initiate a transaction users need to supply the password of the private key created for transactions. Kindly use the below API to initiate a transaction

```
curl --header "Content-Type: application/json" --request POST http://localhost:1898/initiateTransaction --data '{ "receiver": "<receiver DID here>", "tokenCount":1, "comment":"transaction comments", "type":1, "pvtKeyPass" : "<password>"}'
```

**Unpledging of pledged tokens**

- For those users running nodes as subnets, for every transaction the quorum would be pledging equivalent amount tokens to strengthen transactional security.

- The pledged tokens will be moved to the path Rubix/PaymentsApp/PledgedTokens.json

- Kindly use the below API to unpledge the pledged token. The process of unpledging is a PoW mechanism.


```
curl --location --request POST 'http://localhost:1898/unpledgeToken' --header 'Content-Type: application/json' --data-raw '{"tokenList": "<hash of token to be unpledged. >"}'
```

{{< expand "How to know the current level?" >}}

**Oracle:**

- Network is currently mining in `Level 4` - reached on `21st December 2022`

{{< / expand >}}
{{< / hint >}}

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
