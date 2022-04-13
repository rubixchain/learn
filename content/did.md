---
title: Decentralized IDentity
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

### DID & its significance:

 DID (Decentralized identity) is a trust framework in which identifiers, such as usernames, can be replaced with IDs that are self-owned, independent, and enable data exchange using blockchain technology, protecting privacy and ensuring secure transactions. As our lives are increasingly linked to apps, devices, and services, we’re often subject to data breaches and privacy loss. Hence, a standards-based decentralized identity system can provide greater privacy and control over your data.  

Rubix Decentralized Identity (DID) project is an open standard enabling users to create self-owned identities, and use blockchain networks for getting decentralized tamper proof verifiable claims. The claims are 100% on-chain and publicly verifiable.


### How is a DID created ?

Every node joining the Rubix platform must create a DID. There is an option for creation of DID after node setup. A CURL request is called when the user selects this option.

The creation process is a logic that combines a 256x256 image and a system generated hash value. The image chosen here is a standard image used for all DID creations across the network. The hash value on the other hand, is the hashed value of the peerID of the node, which is in turn generated during node setup by IPFS protocol. The combination of both is a hash value which is then used as a DID for the node.

The DID is further split into two parts, namely [Public Share](https://learn.rubix.net/public-share/) and [Private Share](https://learn.rubix.net/private-share/). These parts are used during various athentication and data transfer scenarios. More about this can be found on the above links. The above split is done via a [NLSS](https://learn.rubix.net/nlss/) algorithm.


### USe Cases:

A DID-oriented blockchain can be used for applications that are currently working with a centralised authentication mechanism. Example, an app like Zomato can be transitioned into a DID-oriented authentication system to provide for more user data privacy and security.


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
