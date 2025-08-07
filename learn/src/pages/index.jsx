import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// Import the sidebar configuration
const sidebars = require('../components/sidebars.js');

function SidebarItem({ item, level = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.type === 'category') {
    return (
      <li className={styles.sidebarItem}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.categoryButton}
          aria-expanded={isOpen}
        >
          {item.label}
          <span className={styles.arrow}>{isOpen ? '▼' : '▶'}</span>
        </button>
        {isOpen && item.items && (
          <ul className={styles.nestedList}>
            {item.items.map((subItem, index) => (
              <SidebarItem key={index} item={subItem} level={level + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className={styles.sidebarItem}>
      <Link
        to={`/docs/${item}`}
        className={styles.topLevelLink}
      >
        {formatLinkText(item)}
      </Link>
    </li>
  );
}

function formatLinkText(item) {
  // Convert kebab-case to readable text
  return item
    .split('/')
    .pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

function Sidebar() {
  const sidebarItems = sidebars.docs;
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <ul className={styles.sidebarList}>
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>
      </nav>
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
        <Sidebar />
        <MainContent />
      </main>
    </Layout>
  );
}