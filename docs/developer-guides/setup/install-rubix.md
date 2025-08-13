---
title: Install Rubix
sidebar_label: Install Rubix
aliases:
  [
    "/setup",
    "/testnet",
    "/testing",
    "/start",
  ]
---

# Install Rubix

To **install and run a Rubix node**, you will need the following components:

- **`rubixgoplatform`** — Rubix node executable binary  
- **`ipfs`** — IPFS binary for storage and data synchronization  
- **`swarm.key`** and **`testswarm.key`** — Network key files for connecting to the Rubix network  

These items are provided together as a compressed package for your OS and architecture.

📦 **Download the Rubix node package below**  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>
    <div className="os-tab-content">
      <h3>Linux Installation</h3>
      <p>Select your system architecture:</p>
      <ul>
        <li>
          <strong>ARM 64:</strong><br />
          <a href="/executables/linux/arm/rubix-linux-arm-bundle.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD 64:</strong><br />
          <a href="/executables/linux/amd/rubix-linux-amd-bundle.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
        </li>
      </ul>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Extract the contents to the directory where you want to run the Rubix node using <code>tar -xzf</code></li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Verify installation: <code>./rubixgoplatform -v</code> (this will display the installed version)</li>
        </ol>
      </div>
    </div>
  </TabItem>

<TabItem value="windows" label="Windows">
    <div className="os-tab-content">
      <h3>Windows Installation</h3>
      <p>Download the Windows bundle:</p>
      <div className="executable-links" style={{ display: 'flex', flexDirection: 'column' }}>
        <a href="/executables/windows/rubix-windows-bundle.zip" className="executable-link">📦 Download Full Windows Bundle (.zip)</a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Extract the <code>.zip</code> contents to the directory where you want to run the Rubix node.</li>
          <li>Verify installation: <code>./rubixgoplatform.exe -v</code> (this will display the installed version)</li>
        </ol>
      </div>
    </div>
</TabItem>

  <TabItem value="macos" label="macOS">
    <div className="os-tab-content">
      <h3>macOS Installation</h3>
      <p>Select your system architecture:</p>
      <ul>
        <li>
          <strong>ARM (Apple Silicon):</strong><br />
          <a href="/executables/macos/arm/rubix-macos-arm-bundle.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD (Intel):</strong><br />
          <a href="/executables/macos/amd/rubix-macos-amd-bundle.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
        </li>
      </ul>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Extract the contents to the directory where you want to run the Rubix node using <code>tar -xzf</code></li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Verify installation: <code>./rubixgoplatform -v</code> (this will display the installed version)</li>
        </ol>
      </div>
    </div>
  </TabItem>
</Tabs>

Latest Rubix version: `v0.20.0`

You can also refer [Rubix Releases](https://github.com/rubixchain/rubixgoplatform/releases).

## System Requirements

- **Memory**: Minimum 4GB RAM (8GB recommended)  
- **Storage**: At least 10GB available disk space  
- **Operating System**:  
  - Windows 10 or later (64-bit)  
  - macOS 10.15 or later  
  - Linux (Ubuntu 18.04+, CentOS 7+, etc.)  

Once you have successfully installed Rubix, you can proceed to [start a Rubix Node](./run-locally.md)



For additional help, visit our [support page](../../get-in-touch/support.md) or check the [GitHub issues](https://github.com/rubixchain/rubixgoplatform/issues).