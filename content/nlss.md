---
title: NLSS
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---
Non-Linear Secret Sharing (NLSS) scheme is used for creating public network share and private network share from DID. In a secret sharing scheme, a set of parties share a common secret. The information about the secret a single party owns is called a secret share. During the splitting of DID, two such shares are created. Secret shares are created from shares using some arithmetic function which can be either linear or non-linear. If a non linear function is used to create shares, it is called NLSS scheme. As per this scheme, pixels of DID (256x256) are extracted, from which random pixels are selected. Complex arithmetic functions are done on these selected pixels to get private share (1024x256) and public share (1024x256).  

### Advantage of NLSS scheme over LSS scheme

NLSS scheme is a cheating-immune secret sharing scheme that prevents a cheater, who submits a corrupted share, from gaining an advantage in knowing the secret over the honest participants. Linear secret sharing scheme is a not a cheating immune scheme. NLSS scheme is also quantum immune.

If you have questions or feedback, please DM us at [@rubixchain](http://twitter.com/rubixChain).
