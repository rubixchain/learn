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

To install the **Rubix Executable**, download the appropriate package for your OS and architecture. Each bundle contains:

- `rubixgoplatform` — Rubix binary  
- `ipfs` — The IPFS binary used for storage/sync  
- `swarm.key` and `testswarm.key` — Network keys files  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>
    <div className="os-tab-content">
      <h3>Linux Installation</h3>
      <p>Select your system architecture:</p>
      <ul>
        <li>
          <strong>ARM64:</strong><br />
          <a href="/executables/linux/arm/" className="executable-link">📁 Browse ARM Files</a><br />
          <a href="/executables/linux/arm/rubix-linux-arm-bundle.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD64:</strong><br />
          <a href="/executables/linux/amd/" className="executable-link">📁 Browse AMD Files</a><br />
          <a href="/executables/linux/amd/rubix-linux-amd-bundle.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
        </li>
      </ul>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download and extract the archive using <code>tar -xzf</code></li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Move them to a directory in your <code>$PATH</code> (e.g. <code>/usr/local/bin</code>)</li>
          <li>Place <code>swarm.key</code> and <code>testswarm.key</code> in your Rubix data directory</li>
          <li>Verify installation: <code>rubixgoplatform -v</code></li>
        </ol>
      </div>
    </div>
  </TabItem>

<TabItem value="windows" label="Windows">
    <div className="os-tab-content">
      <h3>Windows Installation</h3>
      <p>Download the Windows bundle:</p>
      <div className="executable-links" style={{ display: 'flex', flexDirection: 'column' }}>
        <a href="/executables/windows/" className="executable-link">📁 Browse Windows Files</a>
        <a href="/executables/windows/rubix-windows-bundle.zip" className="executable-link">📦 Download Full Windows Bundle (.zip)</a>
      </div>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download and extract the <code>.zip</code> file</li>
          <li>Move <code>rubixgoplatform.exe</code> and <code>ipfs.exe</code> to a directory in your system's <code>PATH</code></li>
          <li>Place <code>swarm.key</code> and <code>testswarm.key</code> in your Rubix data directory</li>
          <li>Open PowerShell and run <code>rubixgoplatform.exe --version</code></li>
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
          <strong>ARM64:</strong><br />
          <a href="/executables/macos/arm/" className="executable-link">📁 Browse ARM Files</a><br />
          <a href="/executables/macos/arm/rubix-macos-arm-bundle.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD64:</strong><br />
          <a href="/executables/macos/amd/" className="executable-link">📁 Browse AMD Files</a><br />
          <a href="/executables/macos/amd/rubix-macos-amd-bundle.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
        </li>
      </ul>
      <div className="installation-steps">
        <h4>Installation Steps:</h4>
        <ol>
          <li>Download and extract the archive using <code>tar -xzf</code></li>
          <li>Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code></li>
          <li>Move them to a directory in your <code>$PATH</code> (e.g. <code>/usr/local/bin</code>)</li>
          <li>Place <code>swarm.key</code> and <code>testswarm.key</code> in your Rubix data directory</li>
          <li>Verify installation: <code>rubixgoplatform -v</code></li>
        </ol>
        <div className="note">
          <strong>Note:</strong> You may need to allow binaries in System Preferences → Security & Privacy.
        </div>
      </div>
    </div>
  </TabItem>
</Tabs>

You can also [build from source](http://localhost:1313/new-learn-site/buildfromsource/).

## System Requirements

- **Memory**: Minimum 4GB RAM (8GB recommended)  
- **Storage**: At least 10GB available disk space  
- **Operating System**:  
  - Windows 10 or later (64-bit)  
  - macOS 10.15 or later  
  - Linux (Ubuntu 18.04+, CentOS 7+, etc.)  

## Verification

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