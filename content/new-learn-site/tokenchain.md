---
title: token chain
geekdocBreadcrumb: false
weight: 1
---

## What  is a Tokenchain?
Tokenchain in Rubix is a dedicated transaction history, bound to a single token. Each Tokenchain acts as a chronological record of state transitions for the token
from its point of origin to its current state.

### Tokenchain Block Structure

Each Tokenchain entry (i.e., transaction) captures:


| **Field**                        | **Description**                                                        |
|----------------------------------|------------------------------------------------------------------------|
| Initiator DID signature          | The digital identity of the node initiating the transaction             |
| Token information                | Referencing the specific RBT or fungible token                         |
| New state change                 | Updated data or ownership                                              |
| Validator DID(s) and signatures  | Nodes that verified and endorsed the transaction                       |
| Timestamp                        | Capturing the precise event time                                       |

### Add here tokenchain block image

