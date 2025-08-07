import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// All 9 cards as originally requested
const allCards = [
  {
    icon: "🚀",
    title: "Getting Started",
    description: "New to Rubix? Start here to understand the basics and get your first setup running.",
    link: "/docs/getting-started"
  },
  {
    icon: "💡",
    title: "Core Concepts",
    description: "Understand the fundamental concepts behind Rubix's tokenchain technology.",
    link: "/docs/core-concepts/what-is-tokenchain"
  },
  {
    icon: "⚡",
    title: "Developer Guides",
    description: "Ready to build? Jump into our comprehensive developer documentation.",
    link: "/docs/developer-guides/setup/install-rubix"
  },
  {
    icon: "🏷️",
    title: "Rubix Tokens",
    description: "Dive into the Rubix token architecture and utility.",
    link: "/docs/rubix-tokens"
  },
  {
    icon: "🆔",
    title: "Rubix DIDs",
    description: "Explore the identity framework on Rubix powered by decentralized identifiers.",
    link: "/docs/rubix-dids"
  },
  {
    icon: "🛡️",
    title: "Rubix Consensus",
    description: "Learn how consensus works on Rubix and its unique approach.",
    link: "/docs/rubix-consensus"
  },
  {
    icon: "📜",
    title: "Rubix Smart Contracts",
    description: "Understand how to write and deploy smart contracts on Rubix.",
    link: "/docs/rubix-smart-contracts"
  },
  {
    icon: "✅",
    title: "Rubix Validators",
    description: "Get started with validator setup and responsibilities.",
    link: "/docs/rubix-validators"
  },
  {
    icon: "🧪",
    title: "Testnet Guide",
    description: "Step-by-step guide to launch and test on Rubix testnet.",
    link: "/docs/testnet-guide"
  },
];

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>
            {/* <img
              src="/img/logo.png"
              alt="Rubix Logo"
              className={styles.logo}
            /> */}
            Welcome to Rubix Learn
          </h1>
          <p className={styles.heroSubtitle}>
            Explore comprehensive resources to learn, build, and grow with the Rubix blockchain platform.
            Get started with our documentation, tutorials, and developer tools.
          </p>
        </header>

        <section className={styles.quickStartSection}>
          <h2>Quick Start Guide</h2>
          <div className={styles.cardGrid}>
            {allCards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={card.link} className={styles.cardLink}>
                  Learn More →
                </Link>
              </div>
            ))}
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
        <MainContent />
      </main>
    </Layout>
  );
}