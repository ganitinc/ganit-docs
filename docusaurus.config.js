module.exports = {
  title: 'Ganit Docs',
  tagline: '',
  url: 'https://ganit-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ganitinc', // Usually your GitHub org/user name.
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
