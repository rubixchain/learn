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
geekdocBreadcrumb: false
weight: 1
---

<!-- File: docs/developer-guides/setup/install-rubix.md -->

# Install Rubix

To install the **Rubix Executable**, use the latest [release binary](https://github.com/rubixchain/rubixgoplatform/releases) or [build from source](http://localhost:1313/new-learn-site/buildfromsource/).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>
    <div className="os-tab-content">
      <h3>Windows Installation</h3>
      <p>Download the Windows executable for your system architecture:</p>
      <div className="executable-links">
        <a href="/learn/executables/windows/" className="executable-link">
          📁 Windows Executables Folder
        </a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download the appropriate Windows executable from the folder above</li>
          <li>Extract the downloaded file to your desired location</li>
          <li>Add the executable path to your system's PATH environment variable</li>
          <li>Open Command Prompt or PowerShell and verify installation by running <code>rubix --version</code></li>
        </ol>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="macos" label="macOS">
    <div className="os-tab-content">
      <h3>macOS Installation</h3>
      <p>Download the macOS executable for your system architecture:</p>
      <div className="executable-links">
        <a href="/learn/executables/macos/" className="executable-link">
          📁 macOS Executables Folder
        </a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download the appropriate macOS executable from the folder above</li>
          <li>Extract the downloaded file to your desired location (e.g., <code>/usr/local/bin</code>)</li>
          <li>Make the file executable: <code>chmod +x rubix</code></li>
          <li>Add the executable path to your PATH if necessary</li>
          <li>Verify installation by running <code>rubix --version</code></li>
        </ol>
        <div className="note">
          <strong>Note:</strong> You may need to allow the executable in System Preferences > Security & Privacy if macOS blocks it.
        </div>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="linux" label="Linux">
    <div className="os-tab-content">
      <h3>Linux Installation</h3>
      <p>Download the Linux executable for your system architecture:</p>
      <div className="executable-links">
        <a href="/learn/executables/linux/" className="executable-link">
          📁 Linux Executables Folder
        </a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download the appropriate Linux executable from the folder above</li>
          <li>Extract the downloaded file to your desired location (e.g., <code>/usr/local/bin</code>)</li>
          <li>Make the file executable: <code>chmod +x rubix</code></li>
          <li>Add the executable path to your PATH if necessary</li>
          <li>Verify installation by running <code>rubix --version</code></li>
        </ol>
        <div className="installation-options">
          <h4>Alternative Installation Methods:</h4>
          <p><strong>Using curl:</strong></p>
          <pre><code>curl -L https://github.com/rubixchain/rubixgoplatform/releases/latest/download/rubix-linux-amd64.tar.gz | tar -xz</code></pre>
          <p><strong>Using wget:</strong></p>
          <pre><code>wget https://github.com/rubixchain/rubixgoplatform/releases/latest/download/rubix-linux-amd64.tar.gz
tar -xzf rubix-linux-amd64.tar.gz</code></pre>
        </div>
      </div>
    </div>
  </TabItem>
</Tabs>

## System Requirements

Before installing Rubix, ensure your system meets the following requirements:

- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Storage**: At least 10GB available disk space
- **Network**: Stable internet connection for blockchain synchronization
- **Operating System**: 
  - Windows 10 or later (64-bit)
  - macOS 10.15 or later
  - Linux (Ubuntu 18.04+, CentOS 7+, or equivalent)

## Verification

After installation, verify that Rubix is properly installed:

```bash
rubix --version
rubix --help
```

## Next Steps

Once you have successfully installed Rubix, you can proceed to:

1. [Run Rubix Locally](./run-locally.md)
2. [Create a DID](./did-creation.md)
3. [Connect to Testnet](./testnet.md)



For additional help, visit our [support page](../../get-in-touch/support.md) or check the [GitHub issues](https://github.com/rubixchain/rubixgoplatform/issues).