---
title: RAC - Rubix Asset Contract
geekdocBreadcrumb: false
aliases: ["/rac", "/asset", "/standards"]
---

The Rubix Asset Contract (RAC) are rules / guidelines to enable users to develop tokens on top of Rubix Blockchain network resulting in Secondary Layer solutions, Decentralized Applications, NFTs and much more. It is a standard by which users can mint/transfer/verify secondary tokens or NFTs transfer/transact through the Rubix validator network.

Tokens minted in the Rubix network need to adhere to rules stated in the Rubix Asset Contract. These rules/guidelines may include details on what the token structure should look like, how they can be transferred in the network, validated by the quorum and so on.

## RAC Structure

The illustration shown below represents the anatomy of an RAC token, whether it be an NFT, a L2 coin or an app token minted on Rubix blockchain, will look like.

<!DOCTYPE html>
<html>
<style>
table, th, td {
  border:2px solid black;
}
</style>
<body>

<table style="width:100%">
  <tr>
    <th>Type</th>
    <th>CreatorDID</th>
    <th>TotalSupply</th>
    <th>TokenNumber</th>
    <th>CreatorInput</th>
    <th>Hash</th>
    <th>URL</th>
    <th>PvtKeySignature</th>
  </tr>
</table>

</body>
</html>

Lets Look in to a bit more Details of what this structure means.

1. Type

The first rule/guideline that RAC structure mentions is to denote the type of application that is being developed using RAC. Type is an integer value like 1,2..
For NFT the value of TYPE field is 1, rest of the standards which can be used for L2 coins etc are in development.

2. CreatorDID

The second rule mentions that a token minted with RAC needs to have the Decentralized Identity (DID) of the Author/Creator/Owner of the asset.

3. TotalSupply

The Third field denotes the total number of NFT tokens or L2 coins or other secondary tokens that the creator wants to mint.

4. TokenNumber

This fourth field of the RAC structure represents the token number in the series of tokens. For eg 1 0f 100 , etc

5. CreatorInput

The fifth field of the RAC structure is where the creator/owner has full fledged individuality in crearting unique tokens. This field can contain data related to assets for which NFTs are minted, to data pretaining to other use cases such as digital collectors item, passes and so on.

6. Hash

The sixth field houses a hash value of a digital asset like audio,video or digital art. The assets are not limited to these but can also be particular files or certificates that can tie the token value to a physical asset.

7. URL

The value in this field is also upto the creator to enter. In scenarios where owner of the RAC token are allowed to actually have the digital asset or any other type of digital document the url to storage can be specified here.

8. PvtKeySignature

 The 8th and final field of the RAC structure is a value called as a Signature, created on the data from fields 1 to 7 and signed using the Creators Private Key(RSA key). This Signature is a mandatory value there by making it as a rule to be included when users are mintng RAC tokens. 
 Furhtermore, this value aids in capturing fake RAC tokens, being minted by scammers posing as Original and reputed creators.

## RAC Token Transaction 

An Token made in adherance to Rubix Asset Contract(RAC), is transfered in a true peer to peer transaxtion, which is backed by the Rubix Token (RBT) whose value is predetermined by the creator of the RAC Tokens or the Current Owner of RAC Token , like NFT, based on the current market trends and its demand.

Following is an illustration of how RAC Tokens are transfered/sold between a buyer and a seller.

<img src = "https://github.com/rubixchain/learn/tree/main/static/images/RAC_Txn_flow.png">


If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).

<br>

