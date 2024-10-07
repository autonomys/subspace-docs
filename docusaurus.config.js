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
  url: 'https://docs.autonomys.xyz',
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
    locales: ["ar", "de", "en", "fr", "id", "it", "ja", "uk", "zh", "pl", "pt", "ru", "vi", "es", "tr"],
  },
  plugins: [
    // Legacy Link Redirects
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          //Latest Links
          {
            to: '/docs/getting-started', 
            from: '/docs/learn/intro'
          },
          {
            to: '/docs/security', 
            from: '/docs/learn/security'
          },
          {
            to: '/docs/academy', 
            from: '/docs/learn/academy'
          },
          {
            to: '/docs/subwallet', 
            from: '/docs/farming-&-staking/wallets/subwallet'
          },
          {
            to: '/docs/polkadot', 
            from: '/docs/farming-&-staking/wallets/polkadot'
          },
          {
            to: '/docs/start-farming',
            from: ['/docs/farming-&-staking/farming/prerequisites/', '/docs/farming-&-staking/farming/intro/'],
          },
          {
            to: '/docs/space-acres-install',
            from: ['/docs/farming-&-staking/farming/space-acres/install', '/docs/protocol/pulsar/', '/docs/category/pulsar-recommended', '/docs/category/pulsar', '/docs/category/space-acres', '/docs/farming-&-staking/farming/pulsar', '/docs/category/space-acres-recommended', '/docs/farming-&-staking/farming/space-acres/space-acres-install', '/docs/farming-&amp;-staking/farming/space-acres/space-acres-install', '/docs/farming-&amp;-staking/farming/space-acres/install']
          },
          {
            to: '/docs/space-acres-translate',
            from: '/docs/farming-&-staking/farming/space-acres/translate_space_acres',
          },
          {
            to: '/docs/cli-install',
            from: ['/docs/farming-&-staking/farming/advanced-cli/cli-install', '/docs/farming-&amp;-staking/farming/advanced-cli/cli-install', '/docs/protocol/cli/', '/docs/protocol/substrate-cli/', '/docs/Farming%20&%20Staking/Farming/Advanced-Cli/cli-install', '/docs/category/advanced-cli-recommended', '/docs/category/advanced-cli']
          },
          {
            to: '/docs/cli-cluster', 
            from: '/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster'
          },
          {
            to: '/docs/cli-tips', 
            from: '/docs/farming-&-staking/farming/advanced-cli/cli-tips'
          },
          {
            to: '/docs/cli-troubleshooting', 
            from: '/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting'
          },
          {
            to: '/docs/farming-common-problems', 
            from: '/docs/farming-&-staking/farming/common_problems'
          },
          {
            to: '/docs/gpu-plotter', 
            from: '/docs/farming-&-staking/farming/additional-guides/gpu-plotter'
          },
          {
            to: '/docs/port-config', 
            from: '/docs/farming-&-staking/farming/additional-guides/port-config'
          },
          {
            to: '/docs/grafana-dashboard', 
            from: '/docs/farming-&-staking/farming/additional-guides/grafana-dashboard'
          },
          {
            to: '/docs/verify-farmer', 
            from: '/docs/farming-&-staking/farming/additional-guides/verify-farmer'
          },
          {
            to: '/docs/staking-intro',
            from: ['/docs/farming-&-staking/staking/intro', '/docs/operators_and_staking/intro', '/docs/category/operators-and-nominators']
          },
          {
            to: '/docs/register-operator',
            from: ['/docs/farming-&-staking/staking/operators/register-operator', '/docs/farming-&-staking/staking/operators']
          },
          {
            to: '/docs/deregister-operator', 
            from: '/docs/farming-&-staking/staking/operators/deregister-operator'
          },
          {
            to: '/docs/tips-operator', 
            from: '/docs/farming-&-staking/staking/operators/tips-operator'
          },
          {
            to: '/docs/staking-guide', 
            from: '/docs/farming-&-staking/staking/'
          },
          {
            to: '/docs/timekeeping',
            from: ['/docs/farming-&-staking/timekeeping', '/docs/protocol/timekeeping']
          },
          {
            to: '/docs/develop-intro',
            from: ['/docs/develop/intro', '/docs/category/developer-documentation/','/docs/developers/intro/', '/docs/pre-release/category/develop-on-nova-evm/']
          },
          {
            to: '/docs/auto-sdk-intro', 
            from: '/docs/develop/auto_sdk/intro'
          },
          {
            to: '/docs/auto-consensus', 
            from: '/docs/develop/auto_sdk/auto-consensus'
          },
          {
            to: '/docs/auto-id', 
            from: '/docs/develop/auto_sdk/auto-id'
          },
          {
            to: '/docs/auto-xdm', 
            from: '/docs/develop/auto_sdk/auto-xdm'
          },
          {
            to: '/docs/auto-utils', 
            from: '/docs/develop/auto_sdk/auto-utils'
          },
          {
            to: '/docs/nova-quick-start', 
            from: '/docs/develop/nova/quick_start'
          },
          {
            to: '/docs/nova-general-information', 
            from: '/docs/develop/nova/general-information'
          },
          {
            to: '/docs/nova-metamask', 
            from: '/docs/develop/nova/setting-up-metamask'
          },
          {
            to: '/docs/nova-faucet', 
            from: '/docs/develop/nova/faucet'
          },
          {
            to: '/docs/nova-remix', 
            from: '/docs/develop/nova/remix_guide'
          },
          {
            to: '/docs/nova-foundry', 
            from: '/docs/develop/nova/foundry_guide'
          },
          {
            to: '/docs/nova-hardhat', 
            from: '/docs/develop/nova/hardhat_guide'
          },
          {
            to: '/docs/nova-local-development', 
            from: '/docs/develop/nova/local_development'
          },
          {
            to: '/docs/nova-block-explorer', 
            from: '/docs/develop/nova/block_explorer'
          },
          {
            to: '/docs/community-maintained-tools', 
            from: '/docs/participate/community_resources/community-maintained-tools'
          },
          {
            to: '/docs/awesome-autonomys', 
            from: '/docs/participate/'
          },
          {
            to: '/docs/awesome-autonomys', 
            from: '/docs/participate/'
          },
          {
            to: '/docs/contribute',
            from: ['/docs/participate/contribute', '/docs/community/contribute/'],
          },
          {
            to: '/docs/translate', 
            from: '/docs/participate/translate'
          },
          {
            to: '/docs/code-of-conduct', 
            from: '/docs/participate/CODE_OF_CONDUCT'
          },
          {
            to: '/docs/category/farming',
            from: ['/docs/category/get-started-with-farming', '/protocol/farm/farming']
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
          editLocalizedFiles: false,
          editUrl: 'https://github.com/autonomys/subspace-docs/edit/main/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        gtag: {
          trackingID: 'G-06691C376E',
          anonymizeIP: false,
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
  scripts: [
    {
      src: '/js/docuscout.umd.js',
      async: true
    },
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "591e207f-fb7d-4966-9bb0-9eaee7844460",
      "data-project-name": "Autonomys Network",
      "data-project-color": "#f2f2f5",
      "data-project-logo": "https://i.postimg.cc/BQjSkRPy/Autonomys-small-light.png",
      "data-button-text-color": "#576eb2",
      "data-modal-disclaimer": "This is a custom LLM for Autonomys Network with access to all documentation (docs.autonomys.xyz/). Since this is AI technology please use your best judgment.",
      async: true
    }
  ],
  stylesheets: [{
    href: "https://cdn.metered.ca/docuscout/1.0/style.css"
  }],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode: 'dark'
      },
      navbar: {
        title: 'Autonomys',
        logo: {
          alt: 'Autonomys Logo',
          src: 'img/logo-black.png',
          srcDark: 'img/logo-white.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                label: 'Farming',
                href: '/docs/start-farming'
              },
              {
                label: 'Operators & Nominators',
                href: '/docs/staking-intro'
              },
              {
                label: 'Develop on Autonomys',
                href: '/docs/develop-intro',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Community Resources',
                href: '/docs/awesome-autonomys',
              },
              {
                label: 'Contribution Guide',
                href: '/docs/contribute',
              },
              {
                label: 'Help Us Translate!',
                href: '/docs/translate',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Network Resources',
            position: 'left',
            items: [
              {
                label: 'Telemetry',
                href: 'https://telemetry.subspace.network',
              },
              {
                label: 'Astral Block Explorer',
                href: 'https://astral.autonomys.xyz',
              },
              {
                label: 'PolkadotJS Portal',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3h.subspace.network%2Fws#/explorer',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Learn',
            position: 'left',
            items: [
              {
                label: 'Autonomys Academy',
                href: 'https://academy.autonomys.xyz',
              },
              {
                label: 'Subspace Protocol Whitepaper',
                href: 'https://subspace.network/news/subspace-network-whitepaper',
              },
              {
                label: 'Autonomys Network Website',
                href: 'https://autonomys.xyz',
              }
            ]
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
                href: 'https://docs.autonomys.xyz/docs/participate/translate',
                label: '🌏 Help Translate',
              },
            ],
          },
          {
            href: 'https://github.com/autonomys',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Autonomys Network',
            items: [
              {
                label: 'Official Website',
                href: 'https://www.autonomys.xyz'
              },
              {
                label: 'Space Acres Desktop GUI',
                href: 'https://github.com/autonomys/space-acres'
              },
              {
                label: 'Astral Block Explorer',
                href: 'https://astral.autonomys.xyz'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/autonomys',
              },
              {
                label: 'Discord',
                href: 'https://autonomys.xyz/discord',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/subspace_network',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@AutonomysNetwork',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/autonomys',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/AutonomysNet',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/subspace-network',
              }
            ],
          },
        ],
        logo: {
          alt: 'Autonomys Labs Banner Logo',
          src: 'img/banner-black.png',
          srcDark: 'img/banner-white.png',
          href: 'https://autonomys.xyz',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Autonomys Labs, Inc.`,
      },
      announcementBar: {
        id: 'academy',
        content:
          '<br /><h4>Learn more about the Autonomys Network by visiting our <a target="_blank" href="https://academy.autonomys.xyz/">Academy</a></h4>',
        backgroundColor: '#ac9dc7',
        textColor: '#292929',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml', 'powershell', 'shell-session', 'ini'],
      }
      // algolia: {
            // The application ID provided by Algolia
            // appId: 'Y894NAOZLC',

            // Public API key: it is safe to commit it
            // apiKey: '29b168f70cdba82eaa79195e98f7286c',

            // indexName: 'subspace',

            // Optional: see doc section below
            // contextualSearch: false,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            //replaceSearchResultPathname: {
            //  from: '/docs/', // or as RegExp: /\/docs\//
            //  to: '/',
            //},

            // Optional: Algolia search parameters
            // searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            // searchPagePath: false,
      // }
    }),
};

module.exports = config;