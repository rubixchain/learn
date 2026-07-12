import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {usePluginData} from '@docusaurus/useGlobalData';

// OS-tabbed download links for the current rubixgoplatform release. URLs come
// from the rubix-release plugin's global data, so they track the latest
// published release on each rebuild.
export default function RubixDownloads() {
  const {assets} = usePluginData('rubix-release');
  return (
    <Tabs>
      <TabItem value="linux" label="Linux" default>
        <div className="os-tab-content">
          <h3>Linux Installation</h3>
          <p>Select your system architecture:</p>
          <ul>
            <li>
              <strong>ARM 64:</strong>
              <br />
              <a href={assets.linuxArm64} className="executable-link">
                📦 Download ARM Bundle (.tar.gz)
              </a>
            </li>
            <li>
              <strong>AMD 64:</strong>
              <br />
              <a href={assets.linuxAmd64} className="executable-link">
                📦 Download AMD Bundle (.tar.gz)
              </a>
            </li>
          </ul>
          <div className="installation-steps">
            <h4>Installation Steps:</h4>
            <ol>
              <li>
                Extract the contents to the directory where you want to run the
                Rubix node using <code>tar -xzf</code>
              </li>
              <li>
                Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code>
              </li>
              <li>
                Verify installation: <code>./rubixgoplatform -v</code> (this will
                display the installed version)
              </li>
            </ol>
          </div>
        </div>
      </TabItem>

      <TabItem value="windows" label="Windows">
        <div className="os-tab-content">
          <h3>Windows Installation</h3>
          <p>Download the Windows bundle:</p>
          <div
            className="executable-links"
            style={{display: 'flex', flexDirection: 'column'}}>
            <a href={assets.windowsAmd64} className="executable-link">
              📦 Download Full Windows Bundle (.zip)
            </a>
          </div>
          <div className="installation-steps">
            <h4>Installation Steps:</h4>
            <ol>
              <li>
                Extract the <code>.zip</code> contents to the directory where you
                want to run the Rubix node.
              </li>
              <li>
                Verify installation: <code>./rubixgoplatform.exe -v</code> (this
                will display the installed version)
              </li>
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
              <strong>ARM (Apple Silicon):</strong>
              <br />
              <a href={assets.darwinArm64} className="executable-link">
                📦 Download ARM Bundle (.tar.gz)
              </a>
            </li>
            <li>
              <strong>AMD (Intel):</strong>
              <br />
              <a href={assets.darwinAmd64} className="executable-link">
                📦 Download AMD Bundle (.tar.gz)
              </a>
            </li>
          </ul>
          <div className="installation-steps">
            <h4>Installation Steps:</h4>
            <ol>
              <li>
                Extract the contents to the directory where you want to run the
                Rubix node using <code>tar -xzf</code>
              </li>
              <li>
                Make binaries executable: <code>chmod +x rubixgoplatform ipfs</code>
              </li>
              <li>
                Verify installation: <code>./rubixgoplatform -v</code> (this will
                display the installed version)
              </li>
            </ol>
          </div>
        </div>
      </TabItem>
    </Tabs>
  );
}
