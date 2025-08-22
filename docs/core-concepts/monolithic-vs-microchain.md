---
title: Monolithic vs Microchain Architecture
sidebar_label: Monolithic vs Microchain Architecture
---

<!-- File: docs/core-concepts/monolithic-vs-microchain.md -->
# Monolithic vs Microchain Architecture

- A blockchain protocol in which all global transactions will be added to one sequentially organized chain is called as "Monolithic chain"
- A private or domain-specific network built within a network that operates under its own governance and validation logic is called as "Microchain". 

| **Aspect**                          | **Monolithic Architecture**                              | **Microchain Architecture**                                   |
|--------------------------------|----------------------------------------------------|-----------------------------------------------------------|
| Data Availability              | All transaction data is available to the entire network | Transaction data is localized to participants of each microchain network only |
| Network Scope                 | Single unified network where every node stores all data | Multiple smaller, independent networks each with their own data set |
| Scalability                   | Limited scalability due to full data replication and processing by all nodes | Enhanced scalability by partitioning data and consensus to local microchains |
| Data Privacy                  | Low privacy, as all data is visible to all network participants | Higher privacy, as data is confined to relevant participants of the microchain |
| Validator Load               | Every node validates all transactions and data | Validation is performed by a smaller committee in each microchain |
| Consensus                     | Monolithic consensus mechanism on the entire blockchain | Localized consensus per microchain, allowing parallel processing |
| Use Cases                    | Suitable for applications requiring full transparency and security | Suitable for applications needing performance, privacy, and localized trust |
