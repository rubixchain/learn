---
title: Build from Source
geekdocBreadcrumb: false
weight: 1
---

The following tools are required to build from source:

### 📦 Required Tools (for Source Build)

| Tool                      | Version       | Purpose                                              |
|---------------------------|---------------|------------------------------------------------------|
| **Go**                    | 1.20+         | To build the `rubixgoplatform` binary via `make`        |
| **Make**                  | Latest        | To automates the build process                          |
| **Git**                   | Latest        | To clone the Rubix repository                          |

 
### 1. Install Go 


- Download the latest Go binary package for your operating system from [Go's official site](https://golang.org/).  
- Follow the installation instructions for your OS.  
- Verify the installation and ensure the Go version is correct:

   ```bash
   go version 
   ```

### 2. Clone the RubixGoPlatform Repository

- Clone the repository:
    ```bash
    git clone https://github.com/rubixchain/rubixgoplatform.git
    ```

- Navigate to the repository directory and checkout to the development branch
    ```bash
    cd rubixgoplatform
    git checkout development
    ```

### 3. Build the RubixGoPlatform Executable
- For Linux : 
    ```bash
    make compile-linux
    ```

- For Windows : 
    ```bash
    make compile-windows
    ```

- For MAC : 
    ```bash
    make compile-mac
    ```

Upon successful compilation, the "rubixgoplatform" executable will be created in a folder corresponding to your operating system. For example, on Linux, it will be located in the ./linux directory, which is a build directory in this case.