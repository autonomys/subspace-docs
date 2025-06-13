// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const codeTheme = require('prism-react-renderer/themes/dracula'); // Using Dracula theme for both light and dark modes
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
    locales: ["en", "de", "es", "fr", "id", "it", "ja", "pt", "ru", "tr", "uk", "vi", "zh"],
  },
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  plugins: [
    // Legacy Link Redirects
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Redirect Links
          // Redirecting to the new root URL (/) as the previous root (/docs) is no longer in use.

          // Learn
          { to: '/', from: ['/category/learn', '/docs/learn/intro'] },
          { to: '/learn/security', from: ['/docs/learn/security'] },
          { to: '/learn/academy', from: ['/docs/learn/academy'] },

          // Farming & Staking
          {to: '/wallets', from: ['/docs/category/wallets'] }, 
          { to: '/wallets/subwallet', from: ['/docs/farming-&-staking/wallets/subwallet'] },
          { to: '/wallets/polkadot', from: ['/docs/farming-&-staking/wallets/polkadot/'] },


          { to: '/category/farming', from: ['/docs/category/get-started-with-farming', '/protocol/farm/farming', '/docs/category/farming'] },
          { to: '/farming/intro', from: ['/docs/farming-&-staking/farming/prerequisites/', '/docs/farming-&-staking/farming/intro/'] },
          { to: '/farming/space-acres/install', from: ['/docs/protocol/pulsar/', '/docs/category/pulsar-recommended', '/docs/category/pulsar', '/docs/category/space-acres', '/docs/farming-&-staking/farming/pulsar', '/docs/category/space-acres-recommended', '/docs/farming-&-staking/farming/space-acres/space-acres-install', '/docs/farming-&amp;-staking/farming/space-acres/space-acres-install', '/docs/farming-&amp;-staking/farming/space-acres/install', '/docs/farming-&-staking/farming/space-acres/install'] },
          { to: '/farming/space-acres/translate', from: ['/docs/farming-&-staking/farming/space-acres/translate_space_acres'] },
          { to: '/farming/cli/install', from: ['/docs/farming-&amp;-staking/farming/advanced-cli/cli-install', '/docs/protocol/cli/', '/docs/protocol/substrate-cli/', '/docs/Farming%20&%20Staking/Farming/Advanced-Cli/cli-install', '/docs/category/advanced-cli-recommended', '/docs/category/advanced-cli', '/docs/farming-&-staking/farming/advanced-cli/cli-install', '/docs/farming-&amp;-staking/farming/cli/cli-install', '/docs/Farming%20&%20Staking/Farming/Cli/cli-install', '/docs/category/cli-recommended', '/docs/category/cli', '/docs/farming-&-staking/farming/cli/cli-install'] },
          { to: '/farming/cli/cluster', from: ['/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster', '/docs/farming-&-staking/farming/cli/cli-farming-cluster'] },
          { to: '/farming/cli/tips', from: ['/docs/farming-&-staking/farming/advanced-cli/cli-tips', '/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting', '/farming/advanced-cli/troubleshooting', '/docs/farming-&-staking/farming/cli/cli-tips', '/docs/farming-&-staking/farming/cli/cli-troubleshooting', '/farming/cli/troubleshooting'] },
          { to: '/farming/common-problems', from: ['/docs/farming-&-staking/farming/common_problems'] },
          { to: '/farming/guides/gpu-plotter', from: ['/docs/farming-&-staking/farming/additional-guides/gpu-plotter'] },
          { to: '/farming/guides/port-config', from: ['/docs/farming-&-staking/farming/additional-guides/port-config'] },
          { to: '/farming/guides/grafana-dashboard', from: ['/docs/farming-&-staking/farming/additional-guides/grafana-dashboard'] },
          { to: '/farming/guides/verified-roles', from: ['/docs/farming-&-staking/farming/additional-guides/verified-roles'] },

          { to: '/staking/intro', from: ['/docs/operators_and_staking/intro', '/docs/category/operators-and-nominators', '/docs/farming-&-staking/staking/intro'] },
          { to: '/staking/operator/register', from: ['/docs/farming-&-staking/staking/operators', '/docs/farming-&-staking/staking/operators/register-operator'] },
          { to: '/staking/operator/deregister', from: ['/docs/farming-&-staking/staking/operators/deregister-operator'] },
          { to: '/staking/operator/tips', from: ['/docs/farming-&-staking/staking/operators/tips-operator'] },
          { to: '/staking/stake', from: ['/docs/farming-&-staking/staking/'] },

          { to: '/farming/timekeeper', from: ['/docs/protocol/timekeeping', '/docs/farming-&-staking/timekeeping'] },

          // Develop
          // Since external redirects are not supported, redirects are happening on each corresponding page. Redirects below are necessary to ensure that legacy links are still working.
          { to: '/develop/intro', from: ['/docs/category/developer-documentation/', '/docs/developers/intro/', '/docs/category/develop', '/docs/develop/intro'] },

          { to: '/develop/auto-sdk', from: ['/docs/category/develop-using-auto-sdk'] },
          { to: '/develop/auto-sdk/intro', from: ['/docs/develop/auto_sdk/intro'] },
          { to: '/develop/auto-sdk/consensus', from: ['/docs/develop/auto_sdk/auto-consensus'] },
          { to: '/develop/auto-sdk/auto-id', from: ['/docs/develop/auto_sdk/auto-id'] },
          { to: '/develop/auto-sdk/xdm', from: ['/docs/develop/auto_sdk/auto-xdm'] },
          { to: '/develop/auto-sdk/utils', from: ['/docs/develop/auto_sdk/auto-utils'] },

          { to: '/develop/auto-evm', from: ['/docs/category/develop-on-nova-evm', '/develop/nova'] },
          { to: '/develop/auto-evm/introduction', from: ['/docs/develop/nova/quick_start', '/develop/nova/introduction'] },
          { to: '/develop/auto-evm/general', from: ['/docs/develop/nova/general-information', '/develop/nova/general'] },
          { to: '/develop/auto-evm/metamask', from: ['/docs/develop/nova/setting-up-metamask', '/develop/nova/metamask'] },
          { to: '/develop/auto-evm/guides/foundry', from: ['/docs/develop/nova/foundry_guide', '/develop/nova/guides/foundry'] },
          { to: '/develop/auto-evm/guides/hardhat', from: ['/docs/develop/nova/hardhat_guide', '/develop/nova/guides/hardhat'] },
          { to: '/develop/auto-evm/guides/local-development', from: ['/docs/develop/nova/local_development', '/develop/nova/guides/local-development'] },
          { to: '/develop/auto-evm/guides/remix', from: ['/docs/develop/nova/remix_guide', '/develop/nova/guides/remix'] },
          { to: '/develop/auto-evm/faucet', from: ['/docs/develop/nova/faucet', '/develop/nova/faucet'] },
          { to: '/develop/auto-evm/block-explorer', from: ['/docs/develop/nova/block_explorer', '/develop/nova/block-explorer'] },

          // Participate
          { to: '/participate/contribute/intro', from: ['/docs/community/contribute/', '/docs/category/participate'] },

          { to: '/participate/contribute/code-of-conduct', from: ['/docs/participate/CODE_OF_CONDUCT'] },
          { to: '/participate/contribute/translate', from: ['/docs/participate/translate'] },

          { to: '/participate/community/contributions', from: ['/participate/community/tools', '/participate/community/resources', '/docs/participate/', '/docs/participate/contribute', '/docs/participate/community_resources/community-maintained-tools'] },
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
          routeBasePath: '/', // This removes the /docs prefix
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        logo: {
          alt: 'Autonomys',
          src: 'img/banner-black.png',
          srcDark: 'img/banner-white.png',
          href: '/',
          height: 32,
          width: 128,
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                label: 'Start Farming',
                href: '/farming/space-acres/install'
              },
              {
                label: 'Start Staking',
                href: '/staking/stake'
              },
              {
                label: 'Become an Operator',
                href: '/staking/operator/register'
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Contribute',
                href: '/participate/contribute/intro',
              },
              {
                label: 'Community Contributions',
                href: '/participate/community/contributions',
              },
              {
                label: 'Help Us Translate!',
                href: '/participate/contribute/translate',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Network Resources',
            position: 'left',
            items: [
              {
                label: 'Astral Block Explorer',
                href: 'https://astral.autonomys.xyz',
              },
              {
                label: 'PolkadotJS Portal',
                href: 'https://polkadot.js.org/apps/?rpc=wss://rpc.mainnet.subspace.foundation/ws#/explorer',
              },
              {
                label: 'Taurus Auto EVM explorer',
                href: 'https://blockscout.taurus.autonomys.xyz',
              },
              {
                label: 'Telemetry',
                href: 'https://telemetry.subspace.foundation',
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
                label: 'Developer Hub',
                href: 'https://develop.autonomys.xyz/',
              },
              {
                label: 'Litepaper',
                href: 'https://gateway.autonomys.xyz/file/bafkr6ibiqakm4js5yqifosrm2kdtxkbncbya2z2na2a34gaubwirqxt6bi',
              },
              {
                label: 'Whitepaper',
                href: 'https://gateway.autonomys.xyz/file/bafkr6ia6q74kzrtdpfl3scb5v5f2vuvsip7ilfo4qkl27ievd7uvnluw2a',
              }
            ]
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [],
          },
          {
            href: 'https://github.com/autonomys',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Autonomys Labs, Inc.`,
      },
      announcementBar: {
        id: 'developer_hub',
        content:
          'Looking to build on Autonomys Network? Find comprehensive guides, tutorials, and API documentation at our <a target="_blank" href="https://develop.autonomys.xyz/">Developer Hub</a>',
        isCloseable: true,
      },
      prism: {
        theme: codeTheme,
        darkTheme: codeTheme,
        additionalLanguages: ['bash', 'powershell', 'shell-session', 'yaml'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'Y894NAOZLC',

        // Public API key: it is safe to commit it
        apiKey: '29b168f70cdba82eaa79195e98f7286c',

        indexName: 'subspace',

        // Optional: see doc section below
        contextualSearch: true,
      }
    }),
};

module.exports = config;