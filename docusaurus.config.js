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
    navbar: {
      title: 'Spacemesh Platform',
      logo: {
        alt: 'Spacemesh',
        src: 'favicon.png',
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
          title: 'platform',
          items: [
            {
              label: 'Testnet',
              to: 'https://spacemesh.io/testnet',
            },
            {
              label: 'Code',
              to: 'https://github.com/spacemeshos',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/spacemesh',
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
