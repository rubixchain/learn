---
title: Proof of Pledge
geekdocBreadcrumb: false
aliases: ["/pop", "/pledge", "/protocol"]
---

 Rubix introduces the lightweight, low carbon footprint consensus protocol, a superior  of Proof of Work (PoW) and Proof of Stake(PoS). Quorum performs work to validate the transaction & verify cryptographic signatures. Quorum earn proof credits in return for the work performed. The credits earned as a result of work are pledged by the Quorum to secure the network using the PoP algorithm. Proof of Pledge (PoP) is the important part of the Rubix Network’s consensus algorithm. What differentiates PoP from PoS is that while PoS requires validating nodes to stake native tokens continuously in order to validate and for reward earning, the power of the nodes with higher coin stakes continue to increase, leading to more concentration. In case of PoP only outstanding proof credits are pledged, not the native RBT tokens.



When the outstanding proof credits are converted into RBT tokens, Quorum need to earn new proof credits before being eligible for ⍺ Quorum (more in this later in this section). Since nodes are in continuous competition with each other to convert the outstanding proof credits into RBT tokens (before the credits deprecate in their value as the network moves into next level), accumulation of proof credits in order to control the network is not possible. Hence, every node in the network gets equal chance to become a ⍺ Quorum & there is no scope for concentration in Quorum powers Eliminating the need for staking also obviates the need for rent seeking, a crucial bone of contention with PoS algorithms.

<div class="tenor-gif-embed" data-postid="17544086" data-share-method="host" data-aspect-ratio="1.38528" data-width="100%"><a href="https://tenor.com/view/bugs-bunny-looney-tunes-cash-money-counting-money-gif-17544086">Bugs Bunny Looney Tunes GIF</a>from <a href="https://tenor.com/search/bugs+bunny-gifs">Bugs Bunny GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>


For each transaction (a transaction may involve multiple nodes & proofs could be built on multiple proofchains using multiple RBT tokens), the transacting nodes choose a set of minimum 21 validators. Out of these, 7 validators (named ⍺ validators) are chosen by the transacting nodes based on the combined proof credits outstanding while the remaining 14 (including 7 β validators & 7 validators) are chosen by each of the participating nodes respectively. The number 7 is chosen in order to achieve PBFT consensus (3n+1) where n = 2. The key design principle is that any honest buying node in the transaction would choose the ⍺ validators such that, the combined outstanding proof credits of the ⍺ validators > the combined value of the tokens involved in the transaction. Cheating ⍺ validators lose all their valuable outstanding proof credits, while not gaining anything directly from the forking attempt. This prevents any remote possibility that validators will collude with the transacting nodes to cheat & cause forks.


<!-- <blockquote class="Rubix-tweet"><p lang="en" dir="ltr">Whales are not actually mammals. If Humans (land mammals) can’t drink seawater — just try it! — how can supposed sea mammals like whales stay hydrated?</p>&mdash; rubix Example (@bwatchexample) <a href="https://Rubix.com/bwatchexample/status/1353736772459532293?ref_src=twsrc%5Etfw">January 25, 2021</a></blockquote> <script async src="https://platform.Rubix.com/widgets.js" charset="utf-8"></script> -->

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).

<br>

{{< hint info >}}

### Should I be making any specific configuration to be a Quorum?

No. Rubix Network is configured in such a way that there is no need for additional setup to be a Quorum, default installation will make you a Quorum also. Inorder to be picked us a Quorum for validating the transcation there are some pre-determined check to make sure the availability.

{{< / hint >}}
