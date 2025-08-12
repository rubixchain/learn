---
title: Backing Up and Restoring Wallets
sidebar_label: Backing Up and Restoring Wallets
---

<!-- File: docs/xell-wallet/backup-restore.md -->
# Restoring a Wallet

1. Open Xell Wallet and select **Import Existing Wallet**.
***Add image1 here**
- If you see a login page, then select **Create or Import Wallet** on the bottom.
**Add image2 here**
2. Enter your BIP39 Mnemonic Phrase (12 or 24 words).
**Add recovery image here**
3. Set a new pin for local encryption, as described in the create new wallet section.
4. Verify the mnemonic and connect to the Rubix network.
5. Your assets (RBT, TRIE tokens) and keys will be restored.
**Note:** If you lose your mnemonic phrase, your funds cannot be recovered. Keep it
secure.

## Backing Up Your Wallet
1. **Store the Mnemonic Phrase:**
- Write it on paper or use a durable metal backup (e.g., Coinplate Alpha).
- Store in a secure location (e.g., safe deposit box).
- Consider splitting the phrase across multiple locations using Shamir’s
Secret Sharing (SLIP39) for added security.
2. **Regular Backups:** 
- Update your backup if you add new accounts or change your pin.
- Test restoration periodically to ensure accuracy.
Warning: Do not store your mnemonic digitally (e.g., in cloud storage or email) unless
encrypted.

