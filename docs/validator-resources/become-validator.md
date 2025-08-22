---
title: Become a Validator
sidebar_label: Become a Validator
---

<!-- File: docs/validator-resources/become-validator.md -->
# Become a Validator

Any Rubix node is eligible to become a validator (or "miner") through a decentralized selection mechanism. To qualify as a validator in the open Rubix network, a node must possess sufficient pledgeable RBT tokens. The process of becoming a validator is:
- A Pseudo-Random Function (PRF) is executed to select a set of validator candidates.
- Candidates are checked to see if they have enough pledgeable RBT tokens.
- If a candidate doesn't have enough pledge, a new PRF round is initiated.
- This continues until a group of seven validators is finalized that meets the minimum pledge requirements.
