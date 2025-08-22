// src/components/ExecutablesFolder.js
import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

const ExecutablesFolder = ({ os, folderPath }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // Simulate checking for files in the folder
    // In a real implementation, you might want to fetch this from an API
    // or have a static list of available executables
    const checkFiles = async () => {
      try {
        // This would be replaced with actual file checking logic
        // For now, we'll simulate an empty folder
        const mockFiles = []; // Empty array to simulate empty folder
        
        setFiles(mockFiles);
        setIsEmpty(mockFiles.length === 0);
        setLoading(false);
      } catch (error) {
        console.error('Error checking files:', error);
        setIsEmpty(true);
        setLoading(false);
      }
    };

    checkFiles();
  }, [folderPath]);

  if (loading) {
    return (
      <div className="executables-folder">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading executables...</p>
        </div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="executables-folder">
        <div className="empty-folder">
          <div className="empty-folder-icon">📁</div>
          <div className="empty-folder-message">Folder Empty</div>
          <div className="empty-folder-submessage">
            No {os} executables are currently available in this folder.
            <br />
            Please check the <Link to="https://github.com/rubixchain/rubixgoplatform/releases">GitHub releases</Link> page for the latest binaries.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="executables-folder">
      <div className="folder-header">
        <h3>{os} Executables</h3>
        <p>Available executables for {os}:</p>
      </div>
      <div className="files-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <div className="file-icon">📄</div>
            <div className="file-info">
              <div className="file-name">{file.name}</div>
              <div className="file-details">
                Size: {file.size} | Modified: {file.modified}
              </div>
            </div>
            <Link to={file.downloadUrl} className="download-btn">
              Download
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutablesFolder;