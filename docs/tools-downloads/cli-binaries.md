---
title: Rubix CLI Binaries
sidebar_label: Rubix CLI Binaries
---

<!-- File: docs/tools-downloads/cli-binaries.md -->
# Rubix CLI Binaries

📦 **Download the Rubix node executable below**  

:::note
The download provides the `rubixgoplatform` executable only (plus README and license). You also need **IPFS** (compatible version **v0.19.0**) and the swarm key files — [`swarm.key`](https://github.com/rubixchain/rubixgoplatform/blob/v1.0.1/swarm.key) and [`testnetswarm.key`](https://github.com/rubixchain/rubixgoplatform/blob/v1.0.1/testnetswarm.key) — from the Rubix repo. See [Install Rubix](../developer-guides/setup/install-rubix.md) for the full setup.
:::

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
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-linux-arm64.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD 64:</strong><br />
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-linux-amd64.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
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
        <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-windows-amd64.zip" className="executable-link">📦 Download Full Windows Bundle (.zip)</a>
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
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-darwin-arm64.tar.gz" className="executable-link">📦 Download ARM Bundle (.tar.gz)</a>
        </li>
        <li>
          <strong>AMD (Intel):</strong><br />
          <a href="https://github.com/rubixchain/rubixgoplatform/releases/download/v1.0.1/rubixgoplatform-v1.0.1-darwin-amd64.tar.gz" className="executable-link">📦 Download AMD Bundle (.tar.gz)</a>
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

Latest Rubix version: `v1.0.1`

You can also refer [Rubix Releases](https://github.com/rubixchain/rubixgoplatform/releases).