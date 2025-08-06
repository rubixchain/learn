import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Learn, Build & Grow with{' '}
              <span className={styles.heroTitleAccent}>Rubix</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Explore everything you need to go from idea to impact - education, 
              references, integrations, tools and ecosystem resources.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--primary button--lg', styles.heroButton)}
                to="/docs/intro">
                🚀 Start Learning
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.heroButton)}
                to="/docs/quick-start">
                ⚡ Quick Start
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroVisual}>
              <div className={styles.rubixCube}>
                <div className={styles.cubeGrid}>
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={styles.cubeCell}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function LearningPathsSection() {
  const learningPaths = [
    {
      title: '📚 Learn',
      subtitle: 'Start Learning',
      description: 'Comprehensive courses to learn about Rubix blockchain and earn certificates.',
      link: '/docs/academy',
      buttonText: 'Learn more',
      color: 'primary'
    },
    {
      title: '🏆 Hackathons', 
      subtitle: 'Register for Hackathons',
      description: 'Find out about upcoming hackathons and events, and learn how to get involved.',
      link: '/docs/hackathons',
      buttonText: 'Learn more',
      color: 'secondary'
    },
    {
      title: '📖 Guides',
      subtitle: 'Learn from Guides',
      description: 'Comprehensive technical guides with best practices and expert insights.',
      link: '/docs/guides',
      buttonText: 'Learn more', 
      color: 'success'
    }
  ];

  return (
    <section className={styles.learningSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Learn about Rubix</h2>
          <p>Find the learning resources you need to get started with Rubix, from online courses and hackathons.</p>
        </div>
        <div className={styles.learningGrid}>
          {learningPaths.map((path, idx) => (
            <div key={idx} className={clsx('card', styles.learningCard, styles[`card--${path.color}`])}>
              <div className="card__header">
                <h3>{path.title}</h3>
                <p className={styles.cardSubtitle}>{path.subtitle}</p>
              </div>
              <div className="card__body">
                <p>{path.description}</p>
              </div>
              <div className="card__footer">
                <Link
                  className={clsx('button', `button--${path.color}`, 'button--block')}
                  to={path.link}>
                  {path.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildSection() {
  const buildResources = [
    {
      title: '🏗️ Ecosystem',
      subtitle: 'Join the Community',
      description: 'Contribute to the Rubix community initiatives, and get rewarded with exclusive opportunities.',
      link: '/docs/ecosystem'
    },
    {
      title: '📅 Events',
      subtitle: 'Check our Events',
      description: 'Connect with our team at conferences, participate in sponsored hackathons, and organize workshops.',
      link: '/docs/events'
    },
    {
      title: '🚀 Try Rubix',
      subtitle: 'Discover Applications',
      description: 'Discover and try out different applications and tools in the Rubix ecosystem.',
      link: '/docs/applications'
    }
  ];

  return (
    <section className={styles.buildSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Build on Rubix</h2>
          <p>Everything you need to start building on the Rubix blockchain platform.</p>
        </div>
        <div className={styles.buildGrid}>
          {buildResources.map((resource, idx) => (
            <Link key={idx} to={resource.link} className={styles.buildCard}>
              <div className={styles.buildCardContent}>
                <h3>{resource.title}</h3>
                <p className={styles.buildCardSubtitle}>{resource.subtitle}</p>
                <p className={styles.buildCardDescription}>{resource.description}</p>
              </div>
              <div className={styles.buildCardArrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  const supportLinks = [
    {
      title: '💬 Academy Telegram',
      description: 'Get direct technical support from our Developer Relations team while building on Rubix.',
      link: '#'
    },
    {
      title: '🐦 Twitter',
      description: 'Follow the official Rubix Developers handle on Twitter for latest news and development updates.',
      link: '#'
    },
    {
      title: '🆘 Rubix Support',
      description: 'Get direct answers and support for everything related to Rubix: Network Basics, Wallets, Staking, etc.',
      link: '/docs/support'
    }
  ];

  return (
    <section className={styles.supportSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Support & Socials</h2>
          <p>Get help, connect with the community, and stay updated.</p>
        </div>
        <div className={styles.supportGrid}>
          {supportLinks.map((support, idx) => (
            <Link key={idx} to={support.link} className={styles.supportCard}>
              <h3>{support.title}</h3>
              <p>{support.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn, Build & Grow with Rubix - Comprehensive blockchain education platform">
      <HomepageHeader />
      <main>
        <LearningPathsSection />
        <BuildSection />
        <SupportSection />
      </main>
    </Layout>
  );
}