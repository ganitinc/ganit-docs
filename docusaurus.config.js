module.exports = {
  title: 'Ganit Docs',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ganit', // Usually your GitHub org/user name.
  projectName: 'ganit-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GANIT DOCS',
      logo: {
        alt: 'Ganit Docs',
        src: 'img/favicon.ico',
      },
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ganit.png',
      },
      copyright: `Powered By Ganit, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    // Object format.
    {
      href: 'https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css',
      type: 'text/css',
    },
  ],
};