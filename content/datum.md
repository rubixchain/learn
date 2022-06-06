---
title: Datum
geekdocBreadcrumb: false
aliases: ["/data", "/about/data", "/contributing/data"]
---

### Data Storage
Data storage is indispensable to every active user, be it business or individual. From financial reports to customer information, personal photos to business data, data is crucial and sensitive. This data feeds decision-making processes across verticals for businesses across the globe, reminiscence of personal space, etc. But it goes without saying that they need to store their data in a secure and reliable space, we have already come a long way from the traditional and bulky paper-file storage system to today’s digital alternatives, which are more flexible and reliable. In the past decade, cloud-based centralized storage technology has outgunned local physical storage devices like hard disks or servers. Almost 94% of all businesses today use centralized cloud solutions for data storage.

<img src = "https://pixabay.com/get/gc70f6845e2b9e8af96688e6637ba482b95cd80eb53083aa492b5dcf0df429463abe3692e5a8231702cbe7d5c8e430daf6a1205ad3946fa80e139cc534ce779b9228a3a7f1cf6eba6b128ad79add0d76d_640.jpg">

Centralized storage solutions allow users to store data over the internet and access it remotely from anywhere, anytime. The data gets stored in a single, central location such as the cloud. In a cloud storage system, data is stored centrally by large corporations. Such data becomes vulnerable to cyberattacks and other security risks. The clearest examples are Facebook’s data leak and breach scandals of 2018 and 2021 respectively. These incidents brought to light the weaknesses of the centralized storage systems.
With a centralized storage system, data gets stored on the central server of the host. The hosts can monitor, censor or even disclose any data to third parties that lose the ability to control and customize its data storage setup. Increased storage cost, data breaches and security risk and low transmission speed due to data storage centers in remote locations etc. are some of the issues with decentralized cloud storage.


 ## Rubix Datum

 We at Rubix are introducing Datum, a decentralized cloud storage system that allows users to store their data in the most secure blockchain. Rubix Datum currently provides  a solution to prevent data tampering and manipulation using Rubix Chain. Any user running Rubix Node can be part of Rubix Datum and can commit data as batches into the Rubix Chain, with Rubix’s peer-to-peer, immutable & truly decentralized blockchain platform that can scale significantly with asynchronous parallelism and support real-world decentralized applications and Rubix deploys a superior consensus mechanism ‘Proof-of-Pledge’ (PoP) — a lightweight algorithm, which reduces carbon emissions significantly. Its on-chain validation makes the network immutable. 

Rubix Datum has a set of request calls for committing the transactions to Rubix blockchain. Rubix Datum are served by Rubix nodes which in turn processes and submit the block of transactions to the Rubix blockchain. All transactions to Rubix nodes are committed by Application as batch (multiple files, event, log etc.). The Batch Size will be decided by the Application using the overall batch size or predefined duration.

<img src = "https://github.com/rubixchain/learn/raw/main/static/images/datumChain.png">

To initiate a data commit, Batch Start action is started in which the request will check the status of the node, then initiate a batch process and return a Batch ID with success message if it is not processing any other batch at the point of time. If it is already processing another batch of transactions it will return busy, and failure messages if any error occurs.

Once a batch is initiated then the user can create a transaction under this created batch and then Create Transaction request that will take Batch ID, transaction info as either a file or a Json string as input. The Committer can submit a transaction or list of transactions and the request will return a success or failure message based on the process. All these transactions are listed under the batch that committers have created in the previous Batch Start request. Once a transcation is created we can go ahead with Commit Transcation request. Commit transcation request will take Batch ID as the input and commits the all the transactions listed under the batch from the node to Rubix Chain as transaction metadata file, the request will return success message on successful submission of Commit Transcation request along with metadata file or it will return failure message.

Any data committed to Rubix blockchain is backed by 1 RBT, i.e. each batch needs a RBT to commit the data/transaction into the chain. For a single token once it has reached the limit of 256 commits that RBT token has to do at least one P2P transaction in-order to move ahead with more commits.

<!-- <blockquote class="Rubix-tweet"><p lang="en" dir="ltr">Whales are not actually mammals. If Humans (land mammals) can’t drink seawater — just try it! — how can supposed sea mammals like whales stay hydrated?</p>&mdash; rubix Example (@bwatchexample) <a href="https://Rubix.com/bwatchexample/status/1353736772459532293?ref_src=twsrc%5Etfw">January 25, 2021</a></blockquote> <script async src="https://platform.Rubix.com/widgets.js" charset="utf-8"></script> -->


{{< hint info >}}






{{< expand "Application Usage" >}}

### Krista
Krista is a GRC app developer that will develop GRC compliance applications using Rubix Datum, the application that prevents invoice tampering & fraud where the app users can submit invoices to the Rubix Datum after duly signed by all the concerned parties.  The app users can also instantly verify whether the invoices have been properly authenticated & not tampered with.  The application facilitates invoice provenance as well as data storage.
Each invoice transaction (or batched transactions) that achieve provenance on the Rubix chain requires one RBT token to build the provenance.  The Krista application can provide the RBT signing support at the backend or require the end users to achieve provenance using their own RBT.
{{< / expand >}}
{{< / hint >}}
