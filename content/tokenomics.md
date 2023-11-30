---
title: Tokenomics on Rubix
geekdocBreadcrumb: false
aliases: ["/tokenomics", "/about/data", "/contributing/data"]
---

This section explains tokenomics in Rubix network. A good understanding of [smart contracts](https://learn.rubix.net/smartcontract/) and [tokens](https://learn.rubix.net/token/) is expected before diving deep into this section.

### 1. Smart Contracts

1. Smart contract is codified business logic written by decentralized app (dApps) developers.
2. Every transaction written to the Rubix ledger( other than RBT transfer) is governed by / output of a Smart Contract.
3. RBT transfer is a native transaction on Rubix.

### 2. Pledging Principles

1. Any transactions getting written to the ledger would need to have at least one Rubix DID associated with the same.
2. Any transaction (Unless it&#39;s a native RBT transfer) getting written to the ledger would be coming on back of one or more smart contracts in play as per business logic deployed by the application.
3. The smart contract will have a provision to define the value of every type of transaction getting written the ledger.
4. The floor value for any transaction to the ledger would be set by Rubix and would change from time to time. The app provider would be free to change this floor value and set a higher value.
5. The floor value of transaction defined by Rubix currently is 1/5000 RBT.
6. Different transactions in the same smart contract of the app can have different values and can be defined by the app provider basis the business needs.

Computation of RBTs required for Pledging

| Scenario | Contract | Pledging Logic | Example |
| ---------------------------------------- | ------ | ---------------------------------------- | ------ |
| RBT transfer from DID 1 to DID 2 (P-P) | Rubix Native | Size of Pledge equal to Value of RBTs transferred | Value of password supplied by the user to create their ECDSA Key pair|
| Data from consumer app written to the ledger ( P-A) in the enterprise subnet with private quorum | App defined | Maximum Size of Pledge required equal to Number of DIDs x Highest Value data transaction against the consumer DID | 1 Million DIDs in a mobile App. If dApp provider doesn’t change the Rubix defined floor value ( ie 1 transaction = 1/5000 RBT) then 10,00,000/ 5000= 200 RBTs are required in the private quorum of the subnet to maintain the DID chain of 1 Million app users. Each of the 5 nodes making up the private quorum would then need to have 200/5 = 40 RBTs with them|
| Contract between two enterprises (A- A) in a subnet with private quorum | App defined | Size of pledge would be equal to the value of the contract as agreed by the two enterprises | Assume that 100,000 users signed up for Verified Credentials service offered by the above dApp and provide their data/insights to be monetized by the dApp. The dApp offers the VC look up service to interested enterprises. Say the value of each VC look up by the contracting enterprise is custom defined in the smart contract as 1/50 of RBT by the dApp. The total value of the contract for a Single VC look up of all signed up users would be 1,00,000/ 50 = 2000 RBTs The contracting enterprise needs to transfer 2000 RBTs to the App to be able to look up VCs of 1,00,000 users. Hence a maximum of 2000 RBTs would be required to be in the private quorum of the smart contract to facilitate the value exchange between the app and the contracting enterprise. Each of the 5 nodes making up the private quorum would then need to have 2000/5 = 400 RBTs with them. Back to Back share (of VC look up revenues) to the 1,00,000 consumers can also be built in the same smart contract.|
| Off chain data being written to the ledger | App defined | Pledge Value increases with addition of records | Upto 1 Mn Records – 200 RBT 1 Mn to 2 Mn – 400 RBT 2 Mn to 5 Mn – 1000 RBT.|

Notes

1. Net pledge in a contract is a sum of pledge required by type 1 (public) and type 2(private) quorums.
2. dApps that require ultrafast finality and high volume are advised to set up their own subnet quorums.
3. These quorums should be loaded with required RBTs as per above mentioned metrics.

### 3. Fungible Tokens(FT)/Non Fungible Tokens(NFT) Minting principles

1. dApps can mint Fungible or Non Fungible tokens using Rubix native feature for minting.
2. dApps would need to define the
    - Value of each FT/NFT in RBT
    - Number of FT/NFTs to be minted
3. The minting feature native to Rubix core protocol would calculate the corresponding number of RBTs that would go into lock state at the time of minting of the FTs/NFTs.
4. The lot sizes of FTs/NFTs could be dynamic and vary across dApps depending on their value of RBT at the instance of mining but each lot would have unique number(s) of full RBTs mapped to them.
5. The dApp would need to acquire the requisite number of RBTs to proceed with minting process.
6. The unique RBTs which would go into the lock state would not be available for any other purpose.

### 4. Fungible Token(FT) Burning principles

1. Invoking the Rubix native feature for burning of FTs the dApp can burn FTs lot wise.
2. FTs can be burnt by dapp owner / list DIDs dApp owner has given permission to.
3. Minimum of one lot has to be burned and all the corresponding RBTs mapped to the lot would be released from the lock
state
   - If the value of FT is lower than RBTs at the time of minting then the burning would release one Unique RBT.
   - If the value of FT is higher than RBTs at the time of minting then all the RBTs mapped in the lot would be released from the lock state at the time of burning
