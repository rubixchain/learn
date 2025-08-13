---
title: Tokenchain Validation Process
sidebar_label: Tokenchain Validation Process
---

<!-- File: docs/validator-resources/validation-process.md -->
# Tokenchain Validation Process

The Tokenchain validation process is a crucial part of the Rubix protocol. Here's how it works:
- Each transaction is validated by a quorum of seven validators, which ensures finality at the Tokenchain level.
- The validation process proceeds independently for each token.
- A transaction is moved to a "Validated" state when five validator signatures have been collected.
- Once validated, the transaction is immutably written into the Tokenchain.
- Validators are responsible for maintaining the token's state until the next transaction occurs.