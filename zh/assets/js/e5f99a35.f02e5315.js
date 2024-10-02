"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7568],{9095:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(4848),i=n(8453);const s={title:"Common problems",sidebar_position:6,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},t="Common problems and ways to resolve them",a={id:"farming-&-staking/farming/common_problems",title:"Common problems",description:"Common problems and ways to resolve them",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/common_problems.md",sourceDirName:"farming-&-staking/farming",slug:"/farming-&-staking/farming/common_problems",permalink:"/zh/docs/farming-&-staking/farming/common_problems",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/common_problems.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Common problems",sidebar_position:6,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},sidebar:"tutorialSidebar",previous:{title:"Verified Farmer Discord Role",permalink:"/zh/docs/farming-&-staking/farming/additional-guides/verify-farmer"},next:{title:"Operators and Nominators",permalink:"/zh/docs/category/operators-and-nominators"}},l={},c=[{value:"Error while dialing dns telemetry",id:"error-while-dialing-dns-telemetry",level:3},{value:"Farmer stuck on plotting, no progress is made in several hours",id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours",level:3},{value:"Illegal instruction (core dumped)",id:"illegal-instruction-core-dumped",level:3},{value:"No rewards after multiple days of farming",id:"no-rewards-after-multiple-days-of-farming",level:3},{value:"Recovering missing piece failed",id:"recovering-missing-piece-failed",level:3},{value:"Importing block consensus error",id:"importing-block-consensus-error",level:3},{value:"Unable to author block in slot. No best block header",id:"unable-to-author-block-in-slot-no-best-block-header",level:3},{value:"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly.",id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly",level:3},{value:"subspace_farmer::single_disk_plot::piece_receiver: Couldn&#39;t get a piece from DSN.",id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",level:3},{value:"Block import error: Potential long-range attack: block not in finalized chain.",id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain",level:3},{value:"Still Facing Trouble? Take a look at our forums below",id:"still-facing-trouble-take-a-look-at-our-forums-below",level:3}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"\u4ece\u201c@theme/tabs \u201d\u5bfc\u5165\u9009\u9879\u5361\uff1b\u4ece'@theme/tabitem '\u5bfc\u5165 tabitem\uff1b\u4ece'@docusaurus/link '\u5bfc\u5165\u94fe\u63a5\uff1b\u4ece'@site/SRC/pages/index.module.CSS '\u5bfc\u5165\u6837\u5f0f\uff1b"}),"\n",(0,o.jsx)(r.p,{children:"While Autonomys strives to release bug-free software, users may encounter certain errors. Some of these can be safely ignored, while others require attention."}),"\n",(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"common-problems-and-ways-to-resolve-them",children:"Common problems and ways to resolve them"})}),"\n",(0,o.jsx)(r.h3,{id:"error-while-dialing-dns-telemetry",children:"Error while dialing dns telemetry"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"Error while dialing /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F\nCustom { kind: Other, error: Timeout }\n"})}),"\n",(0,o.jsx)(r.p,{children:"This error is related only to the telemetry server. It's something that can happen occasionally, but doesn't affect farming. You can safely ignore it."}),"\n",(0,o.jsx)(r.h3,{id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours",children:"Farmer stuck on plotting, no progress is made in several hours"}),"\n",(0,o.jsx)(r.p,{children:"Try restarting your node or farmer. We've noticed that sometimes, when creating larger plots, the process might appear to be stalled, but it automatically continues after some time."}),"\n",(0,o.jsx)(r.h3,{id:"illegal-instruction-core-dumped",children:"Illegal instruction (core dumped)"}),"\n",(0,o.jsx)(r.p,{children:"This error is caused by old CPUs without necessary instruction support (e.g. ADX 4). Can be fixed by compiling software from the source on that machine."}),"\n",(0,o.jsx)(r.p,{children:"While processors without ADX instructions are supported, their performance will be impacted significantly compared to processors that do support ADX instructions."}),"\n",(0,o.jsx)(r.p,{children:"Most modern desktop processors starting with Broadwell on the Intel side and Ryzen (ZEN 1) on the AMD side do support necessary ADX instructions support and shouldn't be affected by the error."}),"\n",(0,o.jsx)(r.h3,{id:"no-rewards-after-multiple-days-of-farming",children:"No rewards after multiple days of farming"}),"\n",(0,o.jsx)(r.p,{children:"Please make sure to:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Use our latest stable release, as shown on our ",(0,o.jsx)(r.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Github releases"})]}),"\n",(0,o.jsxs)(r.li,{children:["Verify your farmer is present and on the highest block on our ",(0,o.jsx)(r.a,{href:"https://telemetry.subspace.network/",children:"telemetry server"})]}),"\n",(0,o.jsxs)(r.li,{children:["Verify your balance using the ",(0,o.jsx)(r.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3h.subspace.network%2Fws#/explorer",children:"Polkadot explorer"})]}),"\n"]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsx)(r.p,{children:"Make sure to select the correct testnet in the dropdown and tabs, e.g. gemini-3h"})}),"\n",(0,o.jsx)(r.h3,{id:"recovering-missing-piece-failed",children:"Recovering missing piece failed"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"ERROR single_disk_plot{disk_farm_index=0}:\nsubspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135\n"})}),"\n",(0,o.jsx)(r.p,{children:"This is not a crucial error and it can be ignored."}),"\n",(0,o.jsx)(r.h3,{id:"importing-block-consensus-error",children:"Importing block consensus error"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'Error importing block "block_number", consensus error: Import failed: Database\n'})}),"\n",(0,o.jsx)(r.p,{children:"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"}),"\n",(0,o.jsx)(r.h3,{id:"unable-to-author-block-in-slot-no-best-block-header",children:"Unable to author block in slot. No best block header"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash\n"})}),"\n",(0,o.jsx)(r.p,{children:"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"}),"\n",(0,o.jsx)(r.h3,{id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly",children:"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly."}),"\n",(0,o.jsx)(r.p,{children:"As the database size increases and blocks get bigger (as farmers started to produce votes), it is expected that the sync speed will settle on a smaller number. We have made some performance improvements in Gemini 3e and will do more performance tuning when the protocol is functionally complete."}),"\n",(0,o.jsx)(r.h3,{id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",children:"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57\n"})}),"\n",(0,o.jsx)(r.p,{children:"This isn\u2019t a bug but rather a warning, it is something to be expected on a Decentralized Storage Network. There is nothing you need to do as a user with this warning, it's likely it will come up occasionally but as long as there aren\u2019t other more catastrophic errors it can be ignored."}),"\n",(0,o.jsx)(r.h3,{id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain",children:"Block import error: Potential long-range attack: block not in finalized chain."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"WARN sc_service::client::client: Block import error: Potential long-range attack: block not in finalized chain.\n"})}),"\n",(0,o.jsx)(r.p,{children:"The node somehow ended up being on a fork, try wiping and starting from scratch."}),"\n",(0,o.jsx)(r.h3,{id:"still-facing-trouble-take-a-look-at-our-forums-below",children:"Still Facing Trouble? Take a look at our forums below"}),"\n",(0,o.jsx)("iframe",{src:"https://forum.autonomys.xyz/search?expanded=false&q=tags%3Afaq%20order%3Alatest",width:"100%",height:"600px",frameborder:"0",scrolling:"auto"})]})}function m(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>a});var o=n(6540);const i={},s=o.createContext(i);function t(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);