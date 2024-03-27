// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
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
          //Latest Links
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
            from: ["/docs/protocol/cli/", "/docs/protocol/substrate-cli/", "/docs/category/advanced-cli", "/docs/category/advanced-cli-recommended"]
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
            to: "/docs/category/space-acres-recommended",
            from: ["/docs/protocol/pulsar/", "/docs/category/pulsar-recommended", "/docs/category/pulsar"]
          },
          {
            to: "/docs/farming-&-staking/farming/advanced-cli/cli-install",
            from: "/docs/Farming%20&%20Staking/Farming/Advanced-Cli/cli-install"
          },
          {
            to: "/docs/farming-&-staking/staking/operators/register-operator",
            from: "/docs/farming-&-staking/staking/operators"
          },
          //Pre-Release Links
          {
            to: "/docs/pre-release/participate/contribute",
            from: "/docs/pre-release/community/contribute/",
          },
          {
            to: "/docs/pre-release/category/develop-on-nova-evm-",
            from: "/docs/pre-release/category/developer-documentation/",
          },
          {
            to: "/docs/pre-release/category/operators-and-nominators",
            from: "/docs/pre-release/operators_and_staking/intro"
          },
          {
            to: "/docs/pre-release/category/advanced-cli",
            from: ["/docs/pre-release/protocol/cli/", "/docs/pre-release/protocol/substrate-cli/", "/docs/pre-release/category/advanced-cli", "/docs/pre-release/category/advanced-cli-recommended"]
          },
          {
            to: "/docs/pre-release/farming-&-staking/timekeeping",
            from: "/docs/pre-release/protocol/timekeeping"
          },
          {
            to: "/docs/pre-release/category/farming",
            from: ["/docs/pre-release/category/get-started-with-farming", "/protocol/pre-release/farm/farming"]
          },
          {
            to: "/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-install",
            from: "/docs/Farming%20&%20Staking/Pre-Release/Farming/Advanced-Cli/cli-install"
          },
          {
            to: "/docs/pre-release/farming-&-staking/staking/operators/register-operator",
            from: "/docs/farming-&-staking/pre-release/staking/operators"
          },
          {
            to: "/docs/farming-&-staking/farming/additional-guides/networking",
            from: "/docs/farming-&-staking/farming/additional-guides/port-forwarding"
          },
          {
            to: "/docs/pre-release/farming-&-staking/farming/additional-guides/networking",
            from: "/docs/pre-release/farming-&-staking/farming/additional-guides/port-forwarding"
          },
          {
            to: "/docs/pre-release/category/space-acres-recommended",
            from: ["/docs/pre-release/protocol/pulsar/", "/docs/pre-release/category/pulsar-recommended", "/docs/pre-release/category/pulsar"]
          },
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
          editUrl: 'https://github.com/subspace/subspace-docs/edit/main/',
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
            type: 'dropdown',
            label: 'Learn',
            position: 'left',
            items: [
              {
                label: 'Subspace Subnomicon',
                href: 'https://subnomicon.subspace.network',
              },
              {
                label: 'Subspace Hitchikers Guide',
                href: 'https://blog.subspace.network/guidetosubspace/home',
              },
              {
                label: 'Subspace Original Whitepaper',
                href: 'https://subspace.network/news/subspace-network-whitepaper',
              },
              {
                label: 'Additional Videos',
                href: 'https://subspace.network/learn',
              }
            ]
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
          {
            type: 'search',
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
      announcementBar: {
        id: 'subnomicon',
        content:
          '<br /><h4>Learn more about the Subspace Network by visiting our <a target="_blank" href="https://subnomicon.subspace.network">Subnomicon</a></h4>',
        backgroundColor: '#ac9dc7',
        textColor: '#292929',
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml', 'powershell', 'shell-session', 'ini'],
      },
      algolia: {
            // The application ID provided by Algolia
            appId: 'PURWQGSNUR',

            // Public API key: it is safe to commit it
            apiKey: '3317f8373bc49a240f45964de434250c',

            indexName: 'subspace-documentation',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            //replaceSearchResultPathname: {
            //  from: '/docs/', // or as RegExp: /\/docs\//
            //  to: '/',
            //},

            // Optional: Algolia search parameters
            searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: false,
      }
    }),
};

module.exports = config;
