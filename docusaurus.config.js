// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
// @ts-ignore
const ConfigLocalized = require('./docusaurus.config.localized.json');
const defaultLocale = 'en';

function getLocalizedConfigValue(/** @type {string} */ key) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values.locales[currentLocale] ?? values.locales[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: getLocalizedConfigValue('title'),
  tagline: getLocalizedConfigValue('tagline'),
  url: 'https://docs.subspace.network',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
    defaultLocale,
    locales: ["ar", "bn", "en", "fr", "de", "hi", "id", "it", "ja", "uk", "zh", "pt", "ru", "es", "tr"],
  },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-25NWNJB9MR',
        anonymizeIP: false, 
      }
    ],
    // Legacy Link Redirects
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/category/pulsar-recommended',
            from: '/docs/category/pulsar',
          },
          {
            to: '/docs/participate/contribute',
            from: '/docs/community/contribute/',
          },
          {
            to: '/docs/category/develop-on-nova-evm-',
            from: '/docs/category/developer-documentation/',
          },
          {
            to: "/docs/category/operators-and-nominators",
            from: "/docs/operators_and_staking/intro"
          },
          {
            to: "/docs/category/advanced-cli",
            from: ["/docs/protocol/cli/", "/docs/protocol/substrate-cli/"]
          },
          {
            to: "/docs/farming-&-staking/timekeeping",
            from: "/docs/protocol/timekeeping"
          },
          {
            to: "/docs/category/farming",
            from: ["/docs/category/get-started-with-farming", "/protocol/farm/farming"]
          },
          {
            to: "/docs/category/pulsar-recommended",
            from: "/docs/protocol/pulsar/"
          },
          {
            to: "/docs/farming-&-staking/farming/advanced-cli/cli-install",
            from: "/docs/Farming%20&%20Staking/Farming/Advanced-Cli/cli-install"
          }
        ],
      },
    ],
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
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                label: 'Farming',
                href: '/docs/category/farming'
              },
              {
                label: 'Operators & Nominators',
                href: '/docs/category/operators-and-nominators'
              },
              {
                label: 'Develop on Subspace',
                href: '/docs/category/develop',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Contribution Guide',
                href: '/docs/participate/contribute',
              },
              {
                label: 'Community Resources',
                href: '/docs/category/participate',
              },
              {
                label: 'Help Us Translate!',
                href: '/docs/participate/translate',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Network Resources',
            position: 'left',
            items: [
              {
                label: 'Subspace Telemetry',
                href: 'https://telemetry.subspace.network',
              },
              {
                label: 'Subspace Explorer',
                href: 'https://subspace.subscan.io/',
              },
              {
                label: 'PolkadotJS Portal',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu-1.gemini-3g.subspace.network%2Fws#/explorer',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://docs.subspace.network/docs/participate/translate',
                label: '🌏 Help Translate',
              },
            ],
          },
          {
            href: 'https://github.com/subspace',
            label: 'GitHub',
            position: 'right',
          },
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
                href: 'https://reddit.com/r/sub/',
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
        additionalLanguages: ['toml', 'powershell', 'shell-session', 'ini', 'json', 'diff', 'bash'],
      },
    }),
};

module.exports = config;
