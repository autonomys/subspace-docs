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
    locales: ["ar", "en", "fr", "de", "id", "it", "ja", "uk", "zh", "pl", "ru", "es", "tr"],
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
            to: '/docs/category/develop-on-nova-evm',
            from: ['/docs/category/developer-documentation/','/docs/developers/intro/']
          },
          {
            to: "/docs/category/operators-and-nominators",
            from: "/docs/operators_and_staking/intro"
          },
          {
            to: "/docs/category/advanced-cli",
            from: ["/docs/protocol/cli/", "/docs/protocol/substrate-cli/", "/docs/category/advanced-cli-recommended"]
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
            from: ["/docs/protocol/pulsar/", "/docs/category/pulsar-recommended", "/docs/category/pulsar", "/docs/category/space-acres", "/docs/farming-&-staking/farming/pulsar"]
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
            to: "/docs/pre-release/category/develop-on-nova-evm",
            from: "/docs/pre-release/category/developer-documentation/",
          },
          {
            to: "/docs/pre-release/category/operators-and-nominators",
            from: "/docs/pre-release/operators_and_staking/intro"
          },
          {
            to: "/docs/pre-release/category/advanced-cli",
            from: ["/docs/pre-release/protocol/cli/", "/docs/pre-release/protocol/substrate-cli/", "/docs/pre-release/category/advanced-cli-recommended"]
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
            from:["/docs/farming-&-staking/additional-guides/networking",  "/docs/farming-&-staking/farming/additional-guides/port-forwarding"]
          },
          {
            to: "/docs/pre-release/farming-&-staking/farming/additional-guides/networking",
            from:["/docs/pre-release/farming-&-staking/additional-guides/networking",  "/docs/pre-release/farming-&-staking/farming/additional-guides/port-forwarding"]
          },
          {
            to: "/docs/pre-release/category/space-acres-recommended",
            from: ["/docs/pre-release/protocol/pulsar/", "/docs/pre-release/category/pulsar-recommended", "/docs/pre-release/category/pulsar", "/docs/pre-release/category/space-acres", "/docs/pre-release/farming-&-staking/farming/pulsar"]
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
  scripts: [
    {
      src: '/js/docuscout.umd.js',
      async: true
    },
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "591e207f-fb7d-4966-9bb0-9eaee7844460",
      "data-project-name": "Subspace Network",
      "data-project-color": "#1B1B1D",
      "data-project-logo": "https://i.postimg.cc/NGJ4jgKx/download.png",
      "data-button-text-color": "#89CFF0",
      "data-modal-disclaimer": "This is a custom LLM for Autonomys with access to all documentation. Since this is AI technology please use your best judgment.",
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
                href: '/docs/category/farming'
              },
              {
                label: 'Operators & Nominators',
                href: '/docs/category/operators-and-nominators'
              },
              {
                label: 'Develop on Autonomys',
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
                label: 'Telemetry',
                href: 'https://telemetry.subspace.network',
              },
              {
                label: 'Autonomys Explorer',
                href: 'https://explorer.subspace.network/',
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
                label: 'The Hitchhiker’s Guide to Subspace',
                href: 'https://blog.subspace.network/subspaceresearch/home',
              },
              {
                label: 'Subspace Protocol Whitepaper',
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
                href: 'https://www.autonomys.xyz/'
              },
              {
                label: 'Space Acres Desktop GUI',
                href: 'https://github.com/autonomys/space-acres'
              },
              {
                label: 'Astral Autonomys Explorer',
                href: 'https://explorer.subspace.network/#/gemini-3h/consensus'
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
                href: 'https://discord.gg/subspace-network',
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
                href: 'https://www.youtube.com/channel/UCojYRCZOtVTJHJXivOYJzeQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/subspace-blockchain',
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
          href: 'https://subspace.network',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Autonomys Labs, Inc.`,
      },
      announcementBar: {
        id: 'academy',
        content:
          '<br /><h4>Learn more about the Autonomys Network by visiting our <a target="_blank" href="https://academy.autonomys.xyz/">Academy</a></h4>',
        backgroundColor: '#ac9dc7',
        textColor: '#292929',
        isCloseable: false,
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