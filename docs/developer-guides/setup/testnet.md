---
title: Connect to Rubix Testnet
sidebar_label: Connect to Rubix Testnet
---

## Connect to Rubix Testnet

The testnet is a development environment for testing your applications without risking real assets.

Connecting to a network is the same process for every network — testnet, mainnet, or a private subnet. You set the `network_mode` in `config.toml` and place the matching swarm key file in your node's root folder. The swarm key forms a private IPFS network so only nodes sharing the same key can connect. The file the node looks for depends on the network:

| `network_mode` | Swarm key file |
|---|---|
| `mainnet` | `swarm.key` |
| `testnet` | `testnetswarm.key` |
| `localnet` | `localnetswarm.key` |

To connect to the testnet:

- Set `network_mode` to `"testnet"` in your node's `config.toml`:

```toml
[core]
node_index = 0
network_mode = "testnet"
```

- Ensure the `testnetswarm.key` file is in your node's root folder and matches the official key in the Rubix GitHub repository. This key is what connects you to the test network.

- Start your node:

```bash
./rubixgoplatform run -p node0
```

### Rubix Faucet

The faucet provides free test RBT tokens for development and testing on the testnet.

#### Get Test RBTs
- Go to the [faucet webpage](https://faucet.rubix.net/).
- Enter your DID to receive test tokens.

#### Check Your Balance
- Verify the tokens have been received by checking your DID's balance.

    ```bash
    ./rubixgoplatform getrbtbalance -did <your_did> -port <your_port_number>
    ```
You should see one RBT.

Congratulations! You have successfully joined the Rubix TestNet. You can now use the node for testing and development purposes.
