// src/components/layout.js
  import React from 'react';
  import Layout from '@theme/Layout';
  import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

  export default function CustomLayout({ children }) {
    const { siteConfig } = useDocusaurusContext();
    return (
      <Layout title={siteConfig.title} description={siteConfig.tagline}>
        <div className="custom-layout">
          {children}
        </div>
      </Layout>
    );
  }