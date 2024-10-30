---
title: Fungible Token
geekdocBreadcrumb: false
aliases: ["/ft", "/about/ft", "/contributing/ft"]
---

<h1> Fungible Tokens (FTs) on Rubix Network </h1>

Fungible tokens on the Rubix network serve as a versatile tool for decentralized applications and community-driven projects, functioning similarly to individual fiat currencies that represent distinct economies. These tokens are created and governed within subnets, enabling developers to tailor them to specific applications while leveraging the security provided by the native Rubix Token (RBT). Just as RBT acts as a foundational asset in the Rubix ecosystem, ensuring stability akin to gold in traditional finance, FTs empower DApps to innovate and engage users effectively.

## Unlocking the Potential: Key Applications of FTs

<!-- Reduce each line for better readability -->

### Loyalty and Rewards Programs

Rubix FTs are ideal for modern loyalty programs, enabling businesses to issue transferable, secure tokens as rewards. Customers can redeem or trade these tokens across platforms, while Rubix’s low transaction fees and high-speed processing create a seamless experience that fosters customer loyalty and engagement.

### Asset Tokenization

High-value assets, like real estate or commodities, can be fractionally owned and traded as Rubix FTs, making them more accessible to a wider range of investors. Rubix’s efficient and scalable platform allows for secure transactions and liquidity in traditionally illiquid asset classes.

### Decentralized Governance

FTs on Rubix empower holders to participate in governance activities. As governance tokens, they enable voting on protocol changes or new features while ensuring votes remain secure and immutable. This structure, supported by Rubix’s advanced quorum setup, enables a decentralized decision-making process that aligns with Rubix’s community-driven ethos.

<br>
<br>

Fungible tokens (FTs) on the Rubix network, are gaining popularity for various DApps. They support dynamic ownership transitions while maintaining clear asset histories, making them valuable for real-world asset tokenization. Backed by RBT, these tokens enhance credibility and ensure seamless transfers across subnets. This dual-token system promotes liquidity and fosters the development of unique economic models, encouraging collaboration within the Rubix ecosystem




## Creation of FTs

Creating a fungible token (FT) is a streamlined process that leverages the capabilities of decentralized networks. Users can initiate the creation of their FT by providing essential details such as the name/symbol for the token, total supply, and the amount of native token (RBT) to be utilized in the creation process. This information is submitted via a dedicated API endpoint (api/create-ft), where the user's DID ensures secure and unique identification on the network. Once created, each FT's value is determined by dividing the total RBT used by the number of tokens issued, enabling straightforward trading and utilization within various applications.


### Maximizing Value: The pivotal Role of RBT 

The native token RBT provides significant advantages in creating FTs within the Rubix network. Acting as a stable backing asset, RBT gives intrinsic value to each FT, fostering trust and mitigating volatility, which makes FTs appealing for trading. Additionally, RBT enables seamless transactions and enhances liquidity, allowing for efficient exchanges across various DApps. Overall, RBT strengthens the market position of FTs and contributes to a more efficient blockchain experience.

### Fractional Ownership and value: Enhancing Accessibility 

The fractional value of each FT enhances its utility within the Rubix network. The value is calculated by dividing the total native tokens used in creation by the number of FTs issued. For instance, if 100 FTs named Mango are created with 1 RBT, each Mango is valued at 0.01 RBT. This fractional approach allows users to manage smaller asset portions, democratizing access to digital assets and facilitating broader participation in trading and investment while improving liquidity.

### Customizable Identity and Fixed Supply

The fixed supply of FTs is crucial for market stability within the Rubix network. Users can define a specific total supply during creation, preventing inflation and fostering trust by establishing a clear limit on availability. Additionally, custom naming allows creators to tailor their tokens for specific applications or communities. This combination promotes broader adoption and utilization of FTs across various DApps.

## Trasnfer of FTs

Transferring FTs within the Rubix network is a highly efficient process that aligns with the transfer mechanisms of the native token RBT. Users can execute FT transfers between DIDs by providing essential transaction details, such as the sender and receiver addresses, along with the name and quantity of FTs to be transferred. The transfer process employs a quorum consensus mechanism, which mandates that at least one-fifth of the total token value of the FTs being transferred must be held by the validating quorums. This rigorous validation process ensures secure and reliable transactions, as quorums confirm pledging and authorize the transfer before execution. By leveraging this sophisticated framework, FT transfers not only enhance liquidity but also facilitate seamless interactions across various DApps within the Rubix ecosystem, ensuring a professional and user-centric experience.








