import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {usePluginData} from '@docusaurus/useGlobalData';
import DocSidebar from '@theme/DocSidebar';
import styles from './index.module.css';

const noop = () => {};

// Renders the real Docusaurus docs sidebar so the homepage rail is identical
// to the one shown on every documentation page (same component, styling,
// labels and collapse behavior). The sidebar tree comes from the
// docs-sidebar-global-data plugin (the layout hook only exposes a summary).
function HomeSidebar() {
  const {sidebar} = usePluginData('docs-sidebar-global-data');
  const {pathname} = useLocation();
  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.sidebarViewport}>
        <DocSidebar
          sidebar={sidebar}
          path={pathname}
          onCollapse={noop}
          isHidden={false}
        />
      </div>
    </aside>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <img
              src="/img/rubix-logo.png"
              alt="Rubix Logo"
              className={styles.logo}
            />
            Welcome to Rubix Learn
          </h1>
          <p className={styles.heroSubtitle}>
            Explore comprehensive resources to learn, build, and grow with the Rubix blockchain platform.
            Navigate through tutorials, guides, and tools using the sidebar on the left.
          </p>
        </header>

        <section className={styles.quickStartSection}>
          <h2>Quick Start</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Getting Started</h3>
              <p>New to Rubix? Start here to understand the basics and get your first setup running.</p>
              <Link to="/docs/getting-started/what-is-rubix" className={styles.cardLink}>
                Learn More →
              </Link>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💡</div>
              <h3>Core Concepts</h3>
              <p>Understand the fundamental concepts behind Rubix's tokenchain technology.</p>
              <Link to="/docs/core-concepts/what-is-tokenchain" className={styles.cardLink}>
                Explore →
              </Link>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚡</div>
              <h3>Developer Guides</h3>
              <p>Ready to build? Jump into our comprehensive developer documentation.</p>
              <Link to="/docs/developer-guides/setup/install-rubix" className={styles.cardLink}>
                Start Building →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn, Build & Grow with Rubix - Comprehensive blockchain education platform"
    >
      <main className={styles.container}>
        <HomeSidebar />
        <MainContent />
      </main>
    </Layout>
  );
}
