---
title: Setup Rubix Node
aliases:
  [
    "/mining",
    "/setup",
    "/mine",
    "/rbt",
    "/wallet",
    "/dist",
    "/start",
  ]
geekdocBreadcrumb: false
weight: 1
---

Nodes in Rubix mine tokens by utilizing credits earned by validating transactions in the network.

When a new node joins the network, it will have 0 credits and 0 tokens to start with. Over the time common pool will pick the node to validate transactions coming to the network. For every transaction that is validated, the node will earn 1 credit. Credits are non transferable and are only used to mine a new RBT token.

Number of credits required by a node to mine a RBT token is determined by current level of the network. For example, if the network is at level 3, a node will need 32 credits to mine a token. If the network is at level 4, a node will need 64 credits to mine a RBT token. Credits required to mine a token doubles every time the network level increases.

To know more about level and credits, please read the [Whitepaper](https://github.com/rubixchain/rubixnetwork/raw/master/RubiX_WhitePaper%20R1.8.pdf).

# Prerequisites

Any computer or personal laptop with 8GB of RAM and a decent internet connection can seamlessly run Rubix for token transfers / become validator / mining.

{{< hint info >}}
### One Step Installation

Use one step installation script for [Linux](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Linux) / [Windows](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Windows.exe) / [Mac](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-MacOS) machines. This script will install all the required dependencies. Once the dependencies are installed you can download the Latest Release from the link provided in the [Latest Releases](https://learn.rubix.net/node-setup/#latest-releases).

{{< / hint >}}

{{< expand "Setup Instructions for Linux" >}}

{{< button href="https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Linux" >}}One Click Setup for Linux{{< /button >}}

  - Open a fresh instance of terminal under download path and run the following commands (without $)

  - $ chmod +x RubixOneClickSetup-Linux
  
  - $ ./RubixOneClickSetup-Linux
  
  - Provide user password when asked
  
  For detailed instruction [Click Here](https://learn.rubix.net/linux/)
  
  
{{< /expand >}}

{{< expand "Setup Instructions for Mac" >}}

{{< button href="https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-MacOS" >}}One Click Setup for Mac{{< /button >}}

  - Open a fresh instance of terminal under download path and run the following commands (without $)

  - $ chmod +x RubixOneClickSetup-MacOS
  
  - $ ./RubixOneClickSetup-MacOS
  
  - Provide user password when asked
  
  For detailed instruction [Click Here](https://learn.rubix.net/macos/)
  
{{< /expand >}}

{{< expand "Setup Instructions for Windows" >}}

{{< button href="https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Windows.exe" >}}One Click Setup for Windows{{< /button >}}
  - Open a fresh instance of cmd.exe under download path and run the following commands (without $)

  - $ RubixOneClickSetup-Windows.exe
  
  - Provide user password when asked

  For detailed instruction [Click Here](https://learn.rubix.net/windows/)

{{< /expand >}}

# Latest Releases

Subscribe to GitHub repo [wallet repository](https://github.com/rubixchain/wallet) or [home repository](https://github.com/rubixchain/rubixnetwork) to be notified on new releases.

For help regarding getting notified for releases see [documentation](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)

## {{< button href="https://github.com/rubixchain/wallet/releases" >}}GUI Wallet{{< /button >}}

## {{< button href="https://github.com/rubixchain/rubixnetwork/releases" >}}CLI Node{{< /button >}}

---

<br>
<br>