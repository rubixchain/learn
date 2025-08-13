---
title: Validator Quorum and Credit Issuance
sidebar_label: Validator Quorum and Credit Issuance
---

<!-- File: docs/validator-resources/quorum-credits.md -->
# Validator Quorum and Credit Issuance

A validator quorum is a group of seven validators selected to validate a transaction. These validators are chosen using a Pseudo-Random Function (PRF), which makes the selection unpredictable and adds a layer of resistance to collusion.

Validators are incentivized through a credit-based reward system. The number of credits earned depends on the type of network and the type of token pledged.
- Open Rubix Network (Type 1): Validators earn one credit per week for every one RBT they pledge to secure a transaction. These credits are earned as long as the pledge remains active and verifiable and they contribute toward the threshold needed to mine a new RBT.
- Subnets/Microchains (Type 2): Validators in private subnets earn reduced credits. The rate is 1/15 credit per week for RBT or RBT-based tokens and 1/30 credit per week for non-RBT tokens.
