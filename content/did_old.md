---
title: Decentralized IDentity NLSS
geekdocBreadcrumb: false
aliases: ["/dataID", "/about/dataID", "/contributing/dataID"]
---

### DID & its significance

 DID (Decentralized identity) is a trust framework in which identifiers such as usernames can be replaced with IDs that are self-owned, independent, and enable data exchange using blockchain technology, providing privacy and secure transactions. Our lives are increasingly linked to apps, devices and services, and we’re often subject to data breaches and privacy loss. Hence, a standards-based decentralized identity system can provide greater privacy and control over your data.  

Rubix Decentralized Identity (DID) project is an open standard enabling users to create self-owned identities, and use blockchain networks for getting decentralized tamper proof verifiable claims. The claims are 100% on-chain and publicly verifiable.

### Key features of Rubix DID

1. Identities are self-created and self-owned allowing more control for user over his data i.e., no Certificate   Authority (CA) is required for generating identity key pairs.
2. Information is immutable, once it is issued by using cryptographic proofs and object-oriented Distributed File System (DFS).
3. Real world DFS based on content-based addressing, preserves complete integrity over signed data.
4. Parallel scalable ledger allows asynchronous claims and verification.
5. Instant confirmation and finality.
6. Data confidentiality is preserved by encrypting the signed certificate using patented Non-Linear Secret Sharing (NLSS) method.
7. Selective disclosure property helps user to choose partial revealing of data for verification.
8. The information cannot be decrypted without the consent of the issuer and/or the certificate holder.
9. In Compliance with globally accepted standards like : <br>
        a. IMS Open Badges<br>
        b.W3C Verifiable Claims<br>
        c.W3C Linked Data Signatures<br>

10. Follows digital preservation rules like GDPR, CCPA.
11. All transactions are on-chain, while also being cost effective.
12. Light weight infrastructure with support for multi architectural designs.

<br>

## DID creation

There are two common ways of DID creation in Rubix. The standard way is to generate a BIP39 standard HD master key and one child key (path zero) on curve secp256k1. This is faster , lighter and provides account recovery using mnemonics. The second day provides double layer security with addition of an MPC Non Linear Secret Sharing scheme on top of traditional pki system. This type is recommeneded for systems that require addtional security.

### Type 4 : BIP39 DID generation and recovery

To create a BIP based DID in rubix , use flag -didType 4 in createdid command. A random 24 word mnemonic will be created and used as seed to create BIP master key and child key at path zero. The mnemonic file will be stored in mnemonic.txt inside the DID folder. Please do not share the mnemonics and store them in safe place for recovery. The following command create BIP 39 keypair

```
./rubixgoplatform createdid -didType 4
```

Inorder to recover DID and key pairs, backup the mnemonickeyfile in a seperate folder and call createdid with -didType 4 -mnemonicKeyFile /pathtomnemonickeyfile. This will create the same master key and key pairs

```
./rubixgoplatform createdid -didType 4 -mnemonicKeyFile mnemonic.txt
```

<!-- {{< expand "Download SDK for Rust" >}}

**Oracle:**

- Network is currently mining in `level 4` - reached on `5 th march 2022`

{{< / expand >}} -->

### Type 0 : PKI + NLSS DID generation and recovery

Every node joining the Rubix network must create a DID. There is an option for creation of DID after node setup. A CURL request is called when the user selects this option.

The creation process is a logic that combines a 256x256 image and a system generated hash value. The image chosen here is a standard image used for all DID creations across the network. The hash value on the other hand, is the hashed value of the peerID of the node, which is in turn generated during node setup by IPFS protocol. The combination of both is a hash value which is then used as a DID for the node.

The DID is further split into two parts, namely [Public Share](https://learn.rubix.net/public-share/) and [Private Share](https://learn.rubix.net/private-share/). These parts are used during various athentication and data transfer scenarios. More about this can be found on the above links.


### Inner working of createDID method

- When the createDID method is called along with the input parameter which is your .png file of 256x256
- This image is converted into binary.
- An input parameter String is given which can be any string as the user wishes,
- it can be any detail provided by the user such as name,address,phone number etc.
- This input string is hashed, then this hash is again hashed multiple times.
- This hash is embedded with the image binary.
- This embedded image file is then split to provide DID.png, PrivateShare.png, PublicShare.png and your corresponding DID, using our patented NLSS algorithm

### Use Cases

A DID-oriented blockchain can be used for applications that are currently running on a centralised authentication mechanism. For example, a traditional food delivery app can be transitioned into a DID-oriented authentication system to provide for more user data privacy and security.

### Additional points to be  noted by the developer

- developer must look into the basics of ipfs protocol.
- The ipfs version which we follow is 0.6.0.
- Going through this doc will give you an idea about the working of the protocol.
<https://docs.ipfs.io/>
- You can find more about DID in our White Paper (Page 3)
 <https://github.com/rubixchain/rubixnetwork/blob/master/RubiX_WhitePaper_R1.7.pdf>

### Other possibilities

The creation logic could be improved or made more effecient and still provide a similar level of functionality.

<blockquote class="Rubix-tweet"><p lang="en" dir="ltr">Crypto, public chains will transform the access management enormously for the better. In Rubix, every node/user gets #DID automatically assigned,can build verifiable claims around it,build DNS, build alternatives to #SAML & much more</p>&mdash; Rubix (@rubixchain) <a href="https://twitter.com/RubixChain/status/1484763352966447104">January 22, 2022</a></blockquote> <script async src="https://platform.Rubix.com/widgets.js" charset="utf-8"></script>

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
