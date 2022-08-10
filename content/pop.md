---
title: Proof-of-Pledge
geekdocBreadcrumb: false
aliases: ["/pop", "/pledge", "/proof-of-pledge"]
---

Proof of Pledge (PoP) is a revolutionary protocol designed to bring the bet of both proof of work (PoW) and proof of stake (PoS). PoW is essential for security of a decentralized network.  However, unlike the highly energy intensive PoW in Bitcoin & Ethereum, Rubix validators are required to work to verify cryptographic proofs of the Proofchains & produce new cryptographic work to sign the transactions.  This work of validators in validating the transactions is translated into Proof Credits.  Each transaction validated = one Proof Credit.  Once a validator earns enough credits (the difficulty level is hard defined), the credits can be mined into a RBT token. 

The strong security of the Proof of Pledge protocol stems from the stipulation that validators need to pledge sufficient unspent Proof Credits to sign a new transaction.  By signing a new transaction, validators pledge their legit unspent Proof Credits.  If the validators are dishonest, their unspent Proof Credits will become illegit.  Since each validator can indepdendently verify whether a transaction (RBT, NFT, Object or Contract commit) is double spent or not, it is expected that the validator has everything to lose & nothing to gain by signing an illegal transaction.  Sybil risk is extremely low with the PoP protocol.

Sum(Unspent Proof Credits of the Quorum Validators) > The value of the transaction being signed

It should be noted here that the validators pledge their unspent credits to sign a new transaction, not stake.  Once the unspent credits are mined into a new RBT token, the validator needs to earn new Proof Credits by signing new transactions.  The key innovation in the PoP protocol is to avoid the wholesale staking as used in the PoS protocols.  In PoS protocols, nodes stake tokens to gain voting power on the longest chain.  Over time, the larger stakers tend to become even bigger, resulting in more centralization & weaker security.

PoP protocol keeps the network decentralized, keeps cost of validating transactions very low & significantly mitigates security risks.  Coupled with the subnet paralellism, consensus failures are localized keeping the overall network always resilient (partition tolerence is very high).

Where validators dont have enough unspent Proof Credits, they can stake RBT utility tokens instead for an equivalent value.  It should be noted that the staking in PoP is quite different from PoS.  The tokens are not permanently staked, but only till enough Proof Credits are earnt to reach the threshold level.  Since every Subnet does its own staking, the centralization & security risks associated with PoS protocols are avoided.

When the outstanding proof credits are converted into RBT tokens, Quorum need to earn new proof credits before being eligible for ⍺ Quorum. Since nodes are in continuous competition with each other to convert the outstanding proof credits into RBT tokens, accumulation of proof credits in order to control the network is not possible. Hence, every node in the network gets equal opportunity to become a ⍺ Quorum & there is no scope for concentration in Quorum powers eliminating the need for staking also obviates the need for rent seeking, a crucial bone of contention with PoS algorithms.

What if a Subnet colludes? A key advantage of the PoP protocol is that apps & enterprises can set up own subnets for efficiency, privacy & security.  But would this lead to collusion & cheating.  The answer is NO.  Even while cheating, the validators in the Subnet do need to the same amount of Work as in a legit transaction.  This work will remain a cost, unless the validators are able to convince an honest outside Subnet about the legitimacy of the transactions, which is made impossible by the common DID, signing & verification across all the Rubix Subnets.  So cheating transactions are always result in failures in the Rubix Network.

Read more about Proof-of-Pledge in [White Paper R1.8](https://github.com/rubixchain/rubixnetwork/blob/master/RubiX_WhitePaper%20R1.8.pdf)
