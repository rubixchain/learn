module.exports = {
  title: 'Rubix Learn',
  tagline: 'Learn to build on the Rubix platform',
  url: 'https://your-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'rubixchain',
  projectName: 'learn',
  plugins: [
    // Exposes the resolved docs sidebar tree via global data so the homepage
    // can render the real <DocSidebar> (see src/plugins/docs-sidebar-global-data.js).
    require.resolve('./src/plugins/docs-sidebar-global-data'),
    // Fetches the latest rubixgoplatform release at build time so download
    // pages track the current version (see src/plugins/rubix-release.js).
    require.resolve('./src/plugins/rubix-release'),
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
        },
        blog: {
          showReadingTime: true,
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
        src: 'img/logo.png',
      },
      items: [
        // Left side navigation items
        {
          type: 'doc',
          docId: 'xell-wallet/setup-wallet', 
          position: 'right',
          label: 'Wallet',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        // API References (left of GitHub)
        {
          type: 'doc',
          docId: 'api', 
          position: 'right',
          label: 'API Reference',
        },
        // GitHub link (top right)
        {
          href: 'https://github.com/rubixchain', 
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Rubix`,
    },
  },
};