// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Farm from Anywhere',
  tagline: 'Earn rewards by running a farmer node by pledging spare disk. No expensive setup or upfront capital is required.',
  url: 'https://docs.subspace.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'subspace', // Usually your GitHub org/user name.
  projectName: 'subspace-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-25NWNJB9MR',
        anonymizeIP: false, 
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Basic Docs Preferences
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editCurrentVersion: true,
          editLocalizedFiles: true,
          editUrl: 'https://github.com/subspace/subspace-docs/blob/main/',
          sidebarPath: require.resolve('./sidebars.js'),

          //Versioning Preferences
          lastVersion: "latest",
          versions: {
            latest: {
              label: 'Latest',
              path: '',
            },
            current: {
              label: 'Pre-Release',
              path: 'pre-release',
              banner: 'unreleased',
              badge: true, 
            },
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode: 'dark'
      },
      navbar: {
        title: 'Subspace',
        logo: {
          alt: 'Subspace Labs Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'dropdown',
            label: 'Network Resources',
            position: 'left',
            items: [
              {
                label: 'Substation Telemetry',
                href: 'https://telemetry.subspace.network',
              },
              {
                label: 'Subspace Explorer',
                href: 'https://subspace.subscan.io/',
              },
              {
                label: 'PolkadotJS Portal',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu-1.gemini-2a.subspace.network%2Fws#/explorer',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Contribution Guide',
                href: '/docs/community/contribute',
              },
              {
                label: 'Community Resources',
                href: '/docs/community',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
          {
            href: 'https://github.com/subspace',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Subspace Network',
            items: [
              {
                label: 'Official Website',
                href: 'https://subspace.network'
              },
              {
                label: 'Subspace Desktop',
                href: 'https://github.com/subspace/subspace-desktop'
              },
              {
                label: 'Subspace Explorer',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer'
              },
              {
                label: 'Subspace Relayer',
                href: 'https://testnet-relayer.subspace.network/'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/subspace',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/subspace-network',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/subspace_network',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/sub',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCojYRCZOtVTJHJXivOYJzeQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/subspace-blockchain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/network_subspace',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/subspace-network',
              },
              {
                label: 'Subsocial',
                href: 'https://app.subsocial.network/@NetworkSubspace'
              }
            ],
          },
        ],
        logo: {
          alt: 'Subspace Labs Banner Logo',
          src: 'img/banner-black.svg',
          srcDark: 'img/banner-white.svg',
          href: 'https://subspace.network',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Subspace Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml'],
      },
    }),
};

module.exports = config;
