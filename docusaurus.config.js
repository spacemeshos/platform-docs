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
        href: '/docs'
      },
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
