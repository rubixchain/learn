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

<!-- File: docs/developer-guides/setup/install-rubix.md -->

# Install Rubix

To install the **Rubix Executable**, download the appropriate package for your OS. Each bundle contains:

- `rubixgoplatform` — Rubix binary
- `ipfs` — The IPFS binary used for storage/sync
- `swarm.key` and `testswarm.key` — Network keys files

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows">
    <div className="os-tab-content">
      <h3>Windows Installation</h3>
      <p>Download the Windows bundle:</p>
      <div className="executable-links">
        <a href="/executables/windows/" className="executable-link">
          📁 Browse Windows Files
        </a><br />
        <a href="/executables/windows/rubix-windows-bundle.zip" className="executable-link">
          📦 Download Full Windows Bundle (.zip)
        </a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download and extract the `.zip` file</li>
          <li>Move `rubixgoplatform.exe` and `ipfs.exe` to a directory in your system's <code>PATH</code></li>
          <li>Place `swarm.key` and `testswarm.key` in your Rubix data directory</li>
          <li>Open PowerShell and run <code>rubixgoplatform.exe --version</code></li>
        </ol>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="macos" label="macOS">
    <div className="os-tab-content">
      <h3>macOS Installation</h3>
      <p>Download the macOS bundle:</p>
      <div className="executable-links">
        <a href="/executables/macos/" className="executable-link">
          📁 Browse macOS Files
        </a><br />
        <a href="/executables/macos/rubix-macos-bundle.zip" className="executable-link">
          📦 Download Full macOS Bundle (.zip)
        </a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download and extract the `.zip` file</li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Move them to a directory in your <code>$PATH</code> (e.g. <code>/usr/local/bin</code>)</li>
          <li>Place `swarm.key` and `testswarm.key` in your Rubix data directory</li>
          <li>Verify installation: <code>rubixgoplatform -v</code></li>
        </ol>
        <div className="note">
          <strong>Note:</strong> You may need to allow binaries in System Preferences → Security & Privacy.
        </div>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="linux" label="Linux" default>
    <div className="os-tab-content">
      <h3>Linux Installation</h3>
      <p>Download the Linux bundle:</p>
      <div className="executable-links">
        <a href="/executables/linux/" className="executable-link">
          📁 Browse Linux Files
        </a><br />
        <a href="/executables/linux/rubix-linux-bundle.tar.gz" className="executable-link">
          📦 Download Full Linux Bundle (.tar.gz)
        </a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download and extract the archive using <code>tar -xzf</code></li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Move them to a directory in your <code>$PATH</code> (e.g. <code>/usr/local/bin</code>)</li>
          <li>Place `swarm.key` and `testswarm.key` in your Rubix data directory</li>
          <li>Verify installation: <code>rubixgoplatform -v</code></li>
        </ol>
        <div className="installation-options">
          <h4>Alternative CLI Install:</h4>
          <p><strong>Using curl:</strong></p>
          <pre><code>curl -L https://github.com/rubixchain/rubixgoplatform/releases/latest/download/rubix-linux-bundle.tar.gz | tar -xz</code></pre>
        </div>
      </div>
    </div>
  </TabItem>
</Tabs>

You can also [build from source](http://localhost:1313/new-learn-site/buildfromsource/).

## System Requirements

Before installing Rubix, ensure your system meets the following requirements:

- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Storage**: At least 10GB available disk space
- **Operating System**: 
  - Windows 10 or later (64-bit)
  - macOS 10.15 or later
  - Linux (Ubuntu 18.04+, CentOS 7+, etc.)

## Verification

After installation:

```bash
rubixgoplatform -v
rubixgoplatform -h
```

## Next Steps

Once you have successfully installed Rubix, you can proceed to:

1. [Run Rubix Locally](./run-locally.md)
2. [Create a DID](./did-creation.md)
3. [Connect to Testnet](./testnet.md)



For additional help, visit our [support page](../../get-in-touch/support.md) or check the [GitHub issues](https://github.com/rubixchain/rubixgoplatform/issues).