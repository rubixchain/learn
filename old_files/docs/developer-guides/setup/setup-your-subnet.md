---
title: Set Up Your Subnet
sidebar_label: Set Up Your Subnet
---

# Set Up Your Own Subnet 🔒

This is an advanced guide for creating a private, isolated network. This is useful for enterprise applications or private testing environments that require a controlled group of validators.

---

### **Create a Private Swarm Key**

A private subnet requires a unique `swarm.key` to ensure only approved nodes can join.

1.  **Install the Key Generation Tool:** Install the `ipfs-swarm-key-gen` tool.

    ```bash
    go install [github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen@latest](https://github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen@latest)
    ```

2.  **Generate your `swarm.key`:** Run the following command to create your unique key.

    ```bash
    ipfs-swarm-key-gen > ~/.ipfs/swarm.key
    ```
    * **Note:** If you are not using the default IPFS path, replace `~/.ipfs/` with your custom path.

---

### **Configure and Run your Subnet**

Once you have your private `swarm.key`, you can start your subnet.

1.  **Distribute the Key:** Ensure all nodes that you want to be part of your subnet have a copy of the **same `swarm.key`** in their root directory.

2.  **Start the Nodes:** Start each node as you normally would for the mainnet (without the `-testNet` flag). The presence of the unique `swarm.key` will automatically connect them to your private subnet instead of the public network.

3.  **Confirm Connection:** Check your node logs to verify the network ID and confirm that all your nodes are connected to each other within the private subnet.