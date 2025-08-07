// docusaurus.config.js
module.exports = {
  title: 'Rubix Learn',
  tagline: 'Learn, Build & Grow with Rubix - Comprehensive blockchain education platform',
  url: 'https://your-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rubixchain',
  projectName: 'learn',
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./src/components/sidebars.js'),
          routeBasePath: '/docs',
          editUrl: 'https://github.com/rubixchain/learn/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rubixchain/learn/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Rubix Learn Logo',
        src: 'img/rubix-logo.png', // Updated to match your component
        href: '/', // Links back to homepage
        target: '_self',
      },
      items: [
        // Add the navigation items to the right side of navbar
        {
          href: '/docs/dev-tools',
          label: 'Developer Tools',
          position: 'right',
          className: 'navbar-developer-tools',
        },
        {
          href: '/docs/partnerships',
          label: 'Partnerships', 
          position: 'right',
          className: 'navbar-partnerships',
        },
        {
          href: 'https://github.com/rubixchain',
          label: 'GitHub',
          position: 'right',
          target: '_blank',
          className: 'navbar-github-link',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Core Concepts',
              to: '/docs/core-concepts/what-is-tokenchain',
            },
            {
              label: 'Developer Guides',
              to: '/docs/developer-guides/setup/install-rubix',
            },
          ],
        },
        {
          title: 'Rubix Ecosystem',
          items: [
            {
              label: 'Rubix Tokens',
              to: '/docs/rubix-tokens',
            },
            {
              label: 'Rubix DIDs',
              to: '/docs/rubix-dids',
            },
            {
              label: 'Smart Contracts',
              to: '/docs/rubix-smart-contracts',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rubixchain',
            },
            {
              label: 'Developer Tools',
              href: '/docs/dev-tools',
            },
            {
              label: 'Partnerships',
              href: '/docs/partnerships',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RubixChain. Built with Docusaurus.`,
    },
    
    // Add some additional theme configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    // Add metadata for better SEO
    metadata: [
      {
        name: 'keywords', 
        content: 'rubix, blockchain, tokenchain, smart contracts, decentralized identifiers, DID, consensus, validators'
      },
      {
        name: 'description',
        content: 'Learn, build, and grow with Rubix blockchain platform. Comprehensive documentation and guides for developers.'
      }
    ],
    
    // Add announcement bar if needed
    // announcementBar: {
    //   id: 'testnet_announcement',
    //   content: '🚀 Rubix Testnet is now live! <a target="_blank" rel="noopener noreferrer" href="/docs/testnet-guide">Get started</a>',
    //   backgroundColor: '#25c2a0',
    //   textColor: '#ffffff',
    //   isCloseable: true,
    // },
  },
  
  // Add plugins if needed
  plugins: [
    // Add any additional plugins here
  ],
};