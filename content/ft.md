---
title: Secondary Fungible Token
geekdocBreadcrumb: false
aliases: ["/secondaryft", "/about/secondaryft", "/contributing/secondaryft"]
---

<h1> Secondary Fungible Tokens (FTs) on the Rubix Network </h1>

Secondary fungible tokens (FTs) on the Rubix network serve as a versatile tool for decentralized applications (DApps) and community-driven projects, functioning similarly to individual fiat currencies that represent distinct economies. These tokens are created and governed within subnets, enabling developers to tailor them to specific applications while leveraging the security provided by the native Rubix Token (RBT). Just as RBT acts as a foundational asset in the Rubix ecosystem, ensuring stability akin to gold in traditional finance, secondary FTs empower DApps to innovate and engage users effectively.

## Unlocking the Potential: Key Applications of SFTs

<!-- Reduce each line for better readability -->


### 1. Supply Chain Management

SFTs can play a crucial role in supply chain management by enhancing transparency and efficiency. By representing ownership of goods as SFTs on a blockchain, businesses can track products throughout their lifecycle—from production to delivery. This tokenization allows stakeholders to verify the authenticity and origin of products easily, reducing fraud and counterfeiting.

For example, each item in a supply chain can be assigned a unique SFT that records its journey through various stages. This data can include timestamps, locations, and handling conditions, which are immutable and accessible to all authorized parties. As a result, companies can streamline operations, improve inventory management, and enhance customer trust by providing verifiable proof of product provenance.

### 2. Loyalty and Rewards Programs

Businesses can leverage SFTs to create innovative loyalty and rewards programs that enhance customer engagement. By issuing SFTs as rewards for purchases or other interactions (such as social media shares), companies can incentivize repeat business and foster brand loyalty.

These tokens can be redeemed for discounts, exclusive products, or special services within the ecosystem of the business or partnered merchants. The use of SFTs allows for greater flexibility than traditional loyalty points; customers can trade or sell their tokens on secondary markets if they choose not to redeem them directly. This approach not only increases customer satisfaction but also creates a vibrant marketplace around the brand’s ecosystem.

### 3. Asset Tokenization

SFTs enable the tokenization of real-world assets, such as real estate, commodities, or even art. By converting these assets into SFTs, they can be fractionally owned and easily traded on blockchain platforms. This democratizes access to investments that were previously limited to high-net-worth individuals or institutional investors.

For instance, a property valued at $1 million could be tokenized into 1 million SFTs worth $1 each. Investors can purchase as many tokens as they desire, thereby owning a fraction of the asset without needing to buy it outright. This method enhances liquidity in traditionally illiquid markets and opens up new avenues for investment while allowing asset owners to raise capital more efficiently.

### 4. Decentralized Governance

SFTs are instrumental in establishing decentralized governance models within blockchain projects and communities. Token holders are often granted voting rights proportional to their holdings, enabling them to participate in decision-making processes regarding project development, resource allocation, and protocol upgrades.

This democratic approach ensures that stakeholders have a say in the direction of the project, fostering a sense of community ownership and accountability. For example, holders of governance SFTs may vote on proposals such as changes to the platform's fee structure or new feature implementations. This model not only empowers users but also aligns incentives among participants, contributing to the sustainability and growth of decentralized ecosystems.

### 5. Utility within DApps

SFTs serve as a medium of exchange within decentralized applications (DApps), facilitating transactions for services or features offered by these platforms. Users can utilize SFTs to pay for transaction fees, access premium content, or unlock functionalities within the app.

In DeFi applications, users may need SFTs to provide liquidity or participate in yield farming activities. The versatility of SFTs enhances user experience by simplifying transactions and creating an integrated economic environment within DApps.


In the current Web3 landscape, secondary fungible tokens (SFTs), particularly those created using the Rubix network's native token (RBT), are gaining traction as a versatile solution for various digital asset applications. As decentralized finance (DeFi) and blockchain technologies evolve, SFTs are being recognized for their ability to combine the benefits of fungible and non-fungible tokens, offering enhanced liquidity and flexibility in asset management. The Rubix network's architecture supports high scalability and zero gas fees, making it an attractive platform for deploying SFTs in diverse sectors such as supply chain management, loyalty programs, and asset tokenization. Recent developments highlight the potential of SFTs to facilitate more efficient transactions by enabling batch transfers, which significantly reduce costs compared to traditional NFT transactions. Furthermore, as enterprises increasingly seek to integrate blockchain solutions for real-world asset tokenization, SFTs provide a robust framework that allows for dynamic ownership transitions while maintaining a clear record of asset history. This adaptability positions SFTs as a key component in the ongoing evolution of digital economies within the Web3 ecosystem


The integration of fungible tokens enhances scalability and reduces transaction costs, allowing for faster transactions without compromising security. This advancement makes FTs more accessible for diverse applications. The ability to name and back these tokens with RBT not only enhances their credibility but also facilitates seamless transfers within and across subnets. This dual-token system promotes liquidity and fosters a diverse range of applications, empowering communities to create unique economic models while enriching the overall Rubix ecosystem through collaboration and growth among developers and users alike.




## Creation of FTs

Creating a fungible token (FT) is a streamlined process that leverages the capabilities of decentralized networks. Users can initiate the creation of their FT by providing essential details such as the name/symbol for the token, total supply, and the amount of native token (RBT) to be utilized in the creation process. This information is submitted via a dedicated API endpoint (api/create-ft), where the user's DID ensures secure and unique identification on the network. Once created, each FT's value is determined by dividing the total RBT used by the number of tokens issued, enabling straightforward trading and utilization within various applications.


### Maximizing Value: The pivotal Role of RBT 

The native token RBT provides significant advantages in creating secondary fungible tokens (SFTs) within the Rubix network. Acting as a stable backing asset, RBT gives intrinsic value to each SFT, fostering trust and mitigating volatility, which makes SFTs appealing for trading. Additionally, RBT enables seamless transactions and enhances liquidity, allowing for efficient exchanges across various decentralized applications (DApps). Overall, RBT strengthens the market position of SFTs and contributes to a more efficient blockchain experience

### Fractional Ownership and value: Enhancing Accessibility 

The fractional value of each secondary fungible token (SFT) enhances its utility within the Rubix network. The value is calculated by dividing the total native tokens used in creation by the number of SFTs issued. For instance, if 100 SFTs named Mango are created with 1 RBT, each Mango is valued at 0.01 RBT. This fractional approach allows users to manage smaller asset portions, democratizing access to digital assets and facilitating broader participation in trading and investment while improving liquidity.

### Customizable Identity and Fixed Supply

The fixed supply of secondary fungible tokens (SFTs) is crucial for market stability within the Rubix network. Users can define a specific total supply during creation, preventing inflation and fostering trust by establishing a clear limit on availability. Additionally, custom naming allows creators to tailor their tokens for specific applications or communities. This combination promotes broader adoption and utilization of SFTs across various decentralized applications (DApps).

## Trasnfer of FTs

Transferring secondary fungible tokens (SFTs) within the Rubix network is a highly efficient process that aligns with the transfer mechanisms of the native token RBT. Users can execute SFT transfers between Decentralized Identifiers (DIDs) by providing essential transaction details, such as the sender and receiver addresses, along with the name and quantity of SFTs involved. The transfer process employs a quorum consensus mechanism, which mandates that at least one-fifth of the total token value of the SFTs being transferred must be held by the validating quorum. This rigorous validation process ensures secure and reliable transactions, as validators confirm ownership and authorize the transfer before execution. By leveraging this sophisticated framework, SFT transfers not only enhance liquidity but also facilitate seamless interactions across various decentralized applications (DApps) within the Rubix ecosystem, ensuring a professional and user-centric experience.








