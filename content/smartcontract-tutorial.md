---
title: Tutorial
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

## Getting Started
 
 ### Rubix Mesh Testnet Setup

**Rubix Mesh** is a tool that helps in setting up a **Rubix Network Testnet**. It provides a streamlined process to initialize configurations, validate settings, and run Rubix nodes in **Docker containers**. 

---

### Building the Executable

To build the executable for different platforms, use the following commands:

- **Windows:**  
  ```bash
  make build-windows
  ```
- **Linux and Mac:**
   ```bash
  make build-unix
  ```

---
 
 ### Prerequisites

- Ensure that **Docker** is installed and the **Docker daemon** is running before executing the binary.  
   - Docker Installation Guide: [Install Docker](https://docs.docker.com/get-docker/)  
   - To check if Docker is running, execute:  
     ```bash
     docker info
     ```

 ### Installation instructions

The binary provides three core commands:

1. **`init`**  
   Initializes the configuration file required to run the Rubix testnet.

2. **`validate`**  
   Validates the configuration file for correct syntax and required parameter values.

3. **`start`**  
   - Runs multiple Rubix nodes in **Docker containers**.  
   - Nodes are configured to run on ports ranging from `20005` to `20011`.  
   - Takes care of all pre-requisites for setting up the testnet.

---