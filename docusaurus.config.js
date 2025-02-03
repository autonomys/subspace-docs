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
    locales: ["de", "en", "fr", "id", "it", "ja", "uk", "pt", "ru", "vi", "es", "zh", "tr"],
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
          { to: '/learn/intro', from: ['/category/learn', '/docs/learn/intro'] },
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
          { to: '/farming/cli/install', from: ['/docs/farming-&amp;-staking/farming/advanced-cli/cli-install', '/docs/protocol/cli/', '/docs/protocol/substrate-cli/', '/docs/Farming%20&%20Staking/Farming/Advanced-Cli/cli-install', '/docs/category/advanced-cli-recommended', '/docs/category/advanced-cli', '/docs/farming-&-staking/farming/advanced-cli/cli-install'] },
          { to: '/farming/cli/cluster', from: ['/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster'] },
          { to: '/farming/cli/tips', from: ['/docs/farming-&-staking/farming/advanced-cli/cli-tips', '/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting', '/farming/advanced-cli/troubleshooting'] },
          { to: '/farming/cli/install', from: ['/docs/farming-&amp;-staking/farming/cli/cli-install', '/docs/protocol/cli/', '/docs/protocol/substrate-cli/', '/docs/Farming%20&%20Staking/Farming/Cli/cli-install', '/docs/category/cli-recommended', '/docs/category/cli', '/docs/farming-&-staking/farming/cli/cli-install'] },
          { to: '/farming/cli/cluster', from: ['/docs/farming-&-staking/farming/cli/cli-farming-cluster'] },
          { to: '/farming/cli/tips', from: ['/docs/farming-&-staking/farming/cli/cli-tips', '/docs/farming-&-staking/farming/cli/cli-troubleshooting', '/farming/cli/troubleshooting'] },
          { to: '/farming/common-problems', from: ['/docs/farming-&-staking/farming/common_problems'] },
          { to: '/farming/guides/gpu-plotter', from: ['/docs/farming-&-staking/farming/additional-guides/gpu-plotter'] },
          { to: '/farming/guides/port-config', from: ['/docs/farming-&-staking/farming/additional-guides/port-config'] },
          { to: '/farming/guides/grafana-dashboard', from: ['/docs/farming-&-staking/farming/additional-guides/grafana-dashboard'] },
          { to: '/farming/guides/verified-farmer', from: ['/docs/farming-&-staking/farming/additional-guides/verify-farmer'] },

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
          { to: 'https://develop.autonomys.xyz/sdk/', from: ['/develop/auto-sdk/intro', '/docs/develop/auto_sdk/intro'] },
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
                href: '/category/farming'
              },
              {
                label: 'Operators & Nominators',
                href: '/staking/intro'
              },
              {
                label: 'Develop on Autonomys',
                href: '/develop/intro',
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
                label: 'Telemetry',
                href: 'https://telemetry.subspace.foundation',
              },
              {
                label: 'Astral Block Explorer',
                href: 'https://astral.autonomys.xyz',
              },
              {
                label: 'PolkadotJS Portal',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.mainnet.subspace.foundation%2Fws#/explorer',
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
                label: 'Whitepaper',
                href: 'https://cdn.prod.website-files.com/66d7181179fbc331d39e9df0/6734a4bf4a74c3c5c6b01d34_autonomys_whitepaper.pdf',
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
                href: '/participate/contribute/translate',
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
        id: 'developer_hub',
        content:
          '<br /><h4>Check out our new Autonomys Developer Documentation by visiting our <a target="_blank" href="https://develop.autonomys.xyz/">Developer Hub</a></h4>',
        backgroundColor: '#ac9dc7',
        textColor: '#292929',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml', 'powershell', 'shell-session', 'ini'],
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