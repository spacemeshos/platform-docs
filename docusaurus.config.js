module.exports = {
  title: 'Spacemesh Platform Docs',
  tagline: 'A proof of space blockmesh',
  url: 'https://platform.spacemesh.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'favicon.png',
  organizationName: 'spacemeshos', // Usually your GitHub org/user name.
  projectName: 'platform-docs', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '46f7f56c2fa8fd9cd947eb1ac390b0bb',
      indexName: 'spacemesh',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'Spacemesh Platform',
      logo: {
        alt: 'Spacemesh',
        src: 'favicon.png',
        href: '/docs'
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',

          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],

          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {
              label: 'Testnet',
              to: 'https://spacemesh.io/testnet',
            },
            {
              label: 'Web',
              to: 'https://spacemesh.io',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'http://chat.spacemesh.io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/teamspacemesh',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/spacemeshos',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spacemesh. This work is licensed under CC BY 4.0.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/spacemeshos/platform-docs/blob/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
