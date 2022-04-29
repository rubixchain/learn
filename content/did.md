---
title: Decentralized Identity
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

### DID & its significance:

 DID (Decentralized identity) is a trust framework in which identifiers such as usernames can be replaced with IDs that are self-owned, independent, and enable data exchange using blockchain technology, providing privacy and secure transactions. Our lives are increasingly linked to apps, devices and services, and we’re often subject to data breaches and privacy loss. Hence, a standards-based decentralized identity system can provide greater privacy and control over your data.  

Rubix Decentralized Identity (DID) project is an open standard enabling users to create self-owned identities, and use blockchain networks for getting decentralized tamper proof verifiable claims. The claims are 100% on-chain and publicly verifiable.


### Key features of Rubix DID :

1.	Identities are self-created and self-owned allowing more control for user over his data i.e., no Certificate   Authority (CA) is required for generating identity key pairs. 
2.	Information is immutable, once it is issued by using cryptographic proofs and object-oriented Distributed File System (DFS).
3.	Real world DFS based on content-based addressing, preserves complete integrity over signed data.
4.	Parallel scalable ledger allows asynchronous claims and verification.
5.	Instant confirmation and finality.
6.	Data confidentiality is preserved by encrypting the signed certificate using patented Non-Linear Secret Sharing (NLSS) method.
7.	Selective disclosure property helps user to choose partial revealing of data for verification. 
8.	The information cannot be decrypted without the consent of the issuer and/or the certificate holder.
9.	In Compliance with globally accepted standards like : <br>
        a. IMS Open Badges<br>
        b.W3C Verifiable Claims<br>
        c.W3C Linked Data Signatures<br>
        
10.	Follows digital preservation rules like GDPR, CCPA.
11.	All transactions are on-chain, while also being cost effective.
12.	Light weight infrastructure with support for multi architectural designs.


### How is a DID created ?

Every node joining the Rubix network must create a DID. There is an option for creation of DID after node setup. A CURL request is called when the user selects this option.

The creation process is a logic that combines a 256x256 image and a system generated hash value. The image chosen here is a standard image used for all DID creations across the network. The hash value on the other hand, is the hashed value of the peerID of the node, which is in turn generated during node setup by IPFS protocol. The combination of both is a hash value which is then used as a DID for the node.

The DID is further split into two parts, namely [Public Share](https://learn.rubix.net/public-share/) and [Private Share](https://learn.rubix.net/private-share/). These parts are used during various athentication and data transfer scenarios. More about this can be found on the above links.


### Use Cases:

A DID-oriented blockchain can be used for applications that are currently running on a centralised authentication mechanism. For example, a traditional food delivery app can be transitioned into a DID-oriented authentication system to provide for more user data privacy and security.


### Other possibilities:

The creation logic could be improved or made more effecient and still provide a similar level of functionality.




<!-- <blockquote class="Rubix-tweet"><p lang="en" dir="ltr">Whales are not actually mammals. If Humans (land mammals) can’t drink seawater — just try it! — how can supposed sea mammals like whales stay hydrated?</p>&mdash; rubix Example (@bwatchexample) <a href="https://Rubix.com/bwatchexample/status/1353736772459532293?ref_src=twsrc%5Etfw">January 25, 2021</a></blockquote> <script async src="https://platform.Rubix.com/widgets.js" charset="utf-8"></script> -->

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
<!--

<br>

{{< hint info >}}

### What happens when the mining level upgrades?

Credits required to mine a RBT doubles every time the mining level increases. For example, if a node requires 32 credits to mine a RBT in level 3, then the next level requires 64 credits to mine a RBT in level 4. Hence it is reccomended to mine RBT as soon as the required credits are accumulated.

{{< expand "How to know the current level?" >}}

**Oracle:**

- Network is currently mining in `level 4` - reached on `5 th march 2022`

{{< / expand >}}
{{< / hint >}}

-->
