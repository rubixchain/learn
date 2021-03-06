---
title: Proof-of-Pledge
geekdocBreadcrumb: false
aliases: ["/pop", "/pledge", "/proof-of-pledge"]
---

Proof of pledge is the best of both worlds - proof of work and proof of stake. Validators are doing work and are earning non transferable proof credits by verifying and signing transactions for the network. These credits are pledged for verifying new transactions (validator will loose credits for signing a bogus transaction). These credits are accumulated to mine RBT token in the network.

Proof-of-Work is not viable in the long-term due to its energy consumption. Energy footprint in Rubix to validate a transaction is negligible. Proof-of-Stake leads to  users who have large amount of cryptocurrency to have major influence on the management and direction for a crypto blockchain.

Proof-of-Pledge needs the quorums(Validators) to stake their token in-order to validate any transaction. For any malicious transaction a Quorum has to pledge their proof-credits, thus the pledged proof-credits will be lost along with the transacted token. Quorum performs the work to validate the transaction & verify cryptographic signatures, earn proof credits in return for the work performed. The credits earned as a result of work are pledged by the Quorum to secure the network using the PoP algorithm. What differentiates PoP from PoS is that while PoS requires validating nodes to stake native tokens continuously in order to validate and for reward earning, the power of the nodes with higher coin stakes continue to increase, leading to more concentration. In case of PoP only outstanding proof credits are pledged, not the native RBT tokens.

When the outstanding proof credits are converted into RBT tokens, Quorum need to earn new proof credits before being eligible for ⍺ Quorum. Since nodes are in continuous competition with each other to convert the outstanding proof credits into RBT tokens, accumulation of proof credits in order to control the network is not possible. Hence, every node in the network gets equal opportunity to become a ⍺ Quorum & there is no scope for concentration in Quorum powers eliminating the need for staking also obviates the need for rent seeking, a crucial bone of contention with PoS algorithms.

Read more about Proof-of-Pledge in [White Paper R1.8](https://github.com/rubixchain/rubixnetwork/blob/master/RubiX_WhitePaper%20R1.8.pdf)
