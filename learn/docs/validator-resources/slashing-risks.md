---
title: Slashing Conditions and Staking Risk
sidebar_label: Slashing Conditions and Staking Risk
---

<!-- File: docs/validator-resources/slashing-risks.md -->
# Slashing Conditions and Staking Risk

The Proof of Pledge (PoP) model is designed with economic accountability to prevent dishonest behavior. Validators' pledged tokens are staked as collateral.

Slashing occurs when a validator behaves maliciously, such as failing to maintain access to a token's state or attempting to go offline prematurely. If a challenger node submits cryptographic proof of this behavior, the validator's pledge tokens will be slashed. Part of the slashed tokens are redistributed to the challenger as a reward for upholding network integrity.

This incentive structure is a core part of the system's security, ensuring that:
- Honest validators earn credits and can eventually mine new RBTs.
- Malicious validators risk losing their pledged RBTs and access to future credits.
