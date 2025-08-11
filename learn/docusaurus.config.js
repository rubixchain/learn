// docusaurus.config.js
module.exports = {
  title: 'Rubix Learn',
  tagline: 'Learn to build on the Rubix platform',
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
        // width: 50,
        // height: 50,
      },
      items: [ // Removed "Docs" and "Blog" items
        // { to: '/docs/getting-started/what-is-rubix', label: 'Docs', position: 'left' },
        // { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} RubixChain. Built with Docusaurus.`,
    },
  },
};