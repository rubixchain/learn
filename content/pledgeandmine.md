---
title: Pledging and Mining
geekdocBreadcrumb: false
aliases: ["/pledging", "/credits", "/mining"]
---

1. Designated Quorum signs on the first transfer of NFT/RBT but doesn’t pledge; Pledges 50%
of signed transfer value of he said NFT/ RBT on the next transfer.


```
Example
A transfers 1 RBT to B
- New Quorum Q6,Q7,Q8,Q9,Q10 signs this transaction;
- Previous Quorum Q1,Q2,Q3,Q4,Q5 pledges 0.5 RBT against the value of 1 RBT signed
previously
Now B transfers the same 1 RBT to C
- New Quorum signs the transaction and
- Previous Quorum Q6,Q7,Q8,Q9,Q10 pledge 0.5 RBT.
```

2. Minimum staking for one week if token state unchanged

3. Auto replacement with new quorum after one week in type 1 quorum

4. Proportional credits for staking period less than a week

5. RBTs held by subnets can also participate in type 1 (Main net) quorums

## Credits earned by main net and sub net validators and credits require to mine 1 new RB

{{< tabs "uniqueid" >}}
{{< tab "Credits Table" >}}
| Level | Cumulative Tokens | Tokens Issued | Mainnet credits per week per RBT | Subnet credits per week per RBT | Credits to mine |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | ----------------------------------------- | --------------------------------- |
| 1 | 43,00,000 | 43,00,000 | | | 0.125 |
| 2 | 67,25,000 | 24,25,000 | | | 16 |
| 3 | 90,28,750 | 23,03,750 | | | 32 |
| 4 | 1,12,17,313 | 21,88,563 | 5 | 0.500 | 64 |
| 5 | 1,32,96,447 | 20,79,134 | 5 | 0.556 | 128 |
| 6 | 1,52,71,625 | 19,75,178 | 5 | 0.625 | 256 |
| 7 | 1,71,48,043 | 18,76,418 | 5 | 0.714 | 512 |
| 8 | 1,89,30,641 | 17,82,598 | 5 | 1.429 | 1024 |
| 9 | 2,06,24,109 | 16,93,468 | 5 | 2.500 | 2048 |
| 10 | 2,22,32,904 | 16,08,795 | 5 | 5.000 | 4096 |

{{< /tab >}}
{{< /tabs >}}

## Illustration of Yield earned

### Main Net Validator
Assume a validator who offers 100 RBTs for pledging and say in 52 weeks, out of maximum 5200 (
52x100) weekly pledges possible, say randomization of pledging across validators results in 800
weekly pledges(15.3% probability). At level 4 , this would result in 800x5 , 4000 credits accrued in 52 weeks = 62.5 new RBTs

 ``` Annual Yield of 62.5% ```

### Sub Net Validator
Assume that in a sub net 100 RBTs are under continuous pledge for 52 weeks.
At level 4 , this would result in 100x52 x(0.500) = 2600 credits accrued in 52 weeks = 40.625 new
RBTs

 ``` Annual Yield of 40.625% ```

 ## Credits redemption for new RBT mining mechanism

 1. Work assigned to ‘verification of credits claimed’ to validators as distinct transactions.
 2. Work assigned would be in chunks of 64, 128, 256 and so on so forth starting from level4.
 3. Validators need to provide 2 RBTs to participate in mining logic verification. These 2 RBTs would be locked for a period of 4 weeks( cooling period for newly minted RBT)
 4. Newly minted RBT would be in genesis node in the 4 week cooling period and cannot be
used by the owner
 5. The 4 week period is for any challenges by the network against the validation process.
 6. In case of a successful challenge the RBTs provided by the validator would be slashed and
the new RBT mined would also be cancelled.