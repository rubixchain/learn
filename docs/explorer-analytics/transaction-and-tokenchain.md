---
title: Transaction & Tokenchain Search
sidebar_label: Transactions & Tokenchains
---

# Transaction & Tokenchain Search

The Rubix Explorer makes it simple to trace the lifecycle of both **transactions** and **tokenchains**.  

## Transaction Search  

To explore a transaction, open the [Rubix Explorer](https://explorer.rubix.net) (or the [Testnet Explorer](https://testnetexplorer.rubix.net) for testnet transactions), paste the **Transaction ID** into the search bar, and hit **Enter**.  
The result opens in the **Transaction Explorer**, organised into tabs.

The **Transaction Details** tab shows the status (Success / Failed), amount, timestamp, and the sender (**From**) and receiver (**To**) DIDs:

![Transaction details](/img/explorer-images/transaction-search.png)

The transaction's committed tokens are listed in the **Assets** section (RBTs / FTs / NFTs / SC), each with its ID, value, and previous transaction:

![Committed tokens](/img/explorer-images/transaction-search-2.png)

The **Quorums** tab shows the validating quorum's DID and the tokens it staked for the transaction:

![Quorum and staked tokens](/img/explorer-images/transaction-search-3.png)

## Tokenchain Search  

For **tokenchains**, enter a **Token ID** instead of a transaction ID. The **RBT Token Explorer** page opens.

The **Token Details** section shows the asset type, value, status, current **Owner DID**, and the latest transaction ID and time:

![Token details](/img/explorer-images/tokenchain-search.png)

Below it, **Token Chain History** lists every transaction involving the token (from → to, with timestamps) — its full ownership lineage:

![Token chain history](/img/explorer-images/tokenchain-search-2.png)
