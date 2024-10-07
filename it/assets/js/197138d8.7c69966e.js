"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8260],{8570:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(4848),o=n(8453);n(1470),n(9365),n(8774),n(5648);const s={title:"Common problems",sidebar_position:4,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},a="Common problems and ways to resolve them",i={id:"farming-&-staking/farming/common_problems",title:"Common problems",description:"Common problems and ways to resolve them",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/farming-&-staking/farming/common_problems.md",sourceDirName:"farming-&-staking/farming",slug:"/farming-&-staking/farming/common_problems",permalink:"/it/docs/farming-&-staking/farming/common_problems",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/common_problems.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Common problems",sidebar_position:4,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/it/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting"},next:{title:"Additional Guides",permalink:"/it/docs/category/additional-guides"}},l={},c=[{value:"Error while dialing dns telemetry",id:"error-while-dialing-dns-telemetry",level:3},{value:"Farmer stuck on plotting, no progress is made in several hours",id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours",level:3},{value:"Illegal instruction (core dumped)",id:"illegal-instruction-core-dumped",level:3},{value:"No rewards after multiple days of farming",id:"no-rewards-after-multiple-days-of-farming",level:3},{value:"Recovering missing piece failed",id:"recovering-missing-piece-failed",level:3},{value:"Importing block consensus error",id:"importing-block-consensus-error",level:3},{value:"Unable to author block in slot. No best block header",id:"unable-to-author-block-in-slot-no-best-block-header",level:3},{value:"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly.",id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly",level:3},{value:"subspace_farmer::single_disk_plot::piece_receiver: Couldn&#39;t get a piece from DSN.",id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",level:3},{value:"Block import error: Potential long-range attack: block not in finalized chain.",id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain",level:3},{value:"Still Facing Trouble? Take a look at our forums below",id:"still-facing-trouble-take-a-look-at-our-forums-below",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"While Autonomys strives to release bug-free software, users may encounter certain errors. Some of these can be safely ignored, while others require attention."}),"\n",(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"common-problems-and-ways-to-resolve-them",children:"Common problems and ways to resolve them"})}),"\n",(0,t.jsx)(r.h3,{id:"error-while-dialing-dns-telemetry",children:"Error while dialing dns telemetry"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Error while dialing /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F\nCustom { kind: Other, error: Timeout }\n"})}),"\n",(0,t.jsx)(r.p,{children:"This error is related only to the telemetry server. It's something that can happen occasionally, but doesn't affect farming. You can safely ignore it."}),"\n",(0,t.jsx)(r.h3,{id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours",children:"Farmer stuck on plotting, no progress is made in several hours"}),"\n",(0,t.jsx)(r.p,{children:"Try restarting your node or farmer. We've noticed that sometimes, when creating larger plots, the process might appear to be stalled, but it automatically continues after some time."}),"\n",(0,t.jsx)(r.h3,{id:"illegal-instruction-core-dumped",children:"Illegal instruction (core dumped)"}),"\n",(0,t.jsx)(r.p,{children:"This error is caused by old CPUs without necessary instruction support (e.g. ADX 4). Can be fixed by compiling software from the source on that machine."}),"\n",(0,t.jsx)(r.p,{children:"While processors without ADX instructions are supported, their performance will be impacted significantly compared to processors that do support ADX instructions."}),"\n",(0,t.jsx)(r.p,{children:"Most modern desktop processors starting with Broadwell on the Intel side and Ryzen (ZEN 1) on the AMD side do support necessary ADX instructions support and shouldn't be affected by the error."}),"\n",(0,t.jsx)(r.h3,{id:"no-rewards-after-multiple-days-of-farming",children:"No rewards after multiple days of farming"}),"\n",(0,t.jsx)(r.p,{children:"Please make sure to:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Use our latest stable release, as shown on our ",(0,t.jsx)(r.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Github releases"})]}),"\n",(0,t.jsxs)(r.li,{children:["Verify your farmer is present and on the highest block on our ",(0,t.jsx)(r.a,{href:"https://telemetry.subspace.network/",children:"telemetry server"})]}),"\n",(0,t.jsxs)(r.li,{children:["Verify your balance using the ",(0,t.jsx)(r.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3h.subspace.network%2Fws#/explorer",children:"Polkadot explorer"})]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"Make sure to select the correct testnet in the dropdown and tabs, e.g. gemini-3h"})}),"\n",(0,t.jsx)(r.h3,{id:"recovering-missing-piece-failed",children:"Recovering missing piece failed"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"ERROR single_disk_plot{disk_farm_index=0}:\nsubspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135\n"})}),"\n",(0,t.jsx)(r.p,{children:"This is not a crucial error and it can be ignored."}),"\n",(0,t.jsx)(r.h3,{id:"importing-block-consensus-error",children:"Importing block consensus error"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'Error importing block "block_number", consensus error: Import failed: Database\n'})}),"\n",(0,t.jsx)(r.p,{children:"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"}),"\n",(0,t.jsx)(r.h3,{id:"unable-to-author-block-in-slot-no-best-block-header",children:"Unable to author block in slot. No best block header"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash\n"})}),"\n",(0,t.jsx)(r.p,{children:"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"}),"\n",(0,t.jsx)(r.h3,{id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly",children:"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly."}),"\n",(0,t.jsx)(r.p,{children:"As the database size increases and blocks get bigger (as farmers started to produce votes), it is expected that the sync speed will settle on a smaller number. We have made some performance improvements in Gemini 3e and will do more performance tuning when the protocol is functionally complete."}),"\n",(0,t.jsx)(r.h3,{id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",children:"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57\n"})}),"\n",(0,t.jsx)(r.p,{children:"This isn\u2019t a bug but rather a warning, it is something to be expected on a Decentralized Storage Network. There is nothing you need to do as a user with this warning, it's likely it will come up occasionally but as long as there aren\u2019t other more catastrophic errors it can be ignored."}),"\n",(0,t.jsx)(r.h3,{id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain",children:"Block import error: Potential long-range attack: block not in finalized chain."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"WARN sc_service::client::client: Block import error: Potential long-range attack: block not in finalized chain.\n"})}),"\n",(0,t.jsx)(r.p,{children:"The node somehow ended up being on a fork, try wiping and starting from scratch."}),"\n",(0,t.jsx)(r.h3,{id:"still-facing-trouble-take-a-look-at-our-forums-below",children:"Still Facing Trouble? Take a look at our forums below"}),"\n",(0,t.jsx)("iframe",{src:"https://forum.autonomys.xyz/search?expanded=false&q=tags%3Afaq%20order%3Alatest",width:"100%",height:"600px",frameborder:"0",scrolling:"auto"})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>a});n(6540);var t=n(8215);const o={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:n,children:r})}},1470:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(6540),o=n(8215),s=n(3104),a=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:n}=e;const o=(0,a.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,s=m(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,d]=h({queryString:n,groupId:o}),[b,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,u.Dv)(n);return[o,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),g=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function k(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),o=i[n].value;o!==t&&(c(r),a(o))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function x(e){const r=b(e);return(0,y.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,y.jsx)(k,{...r,...e}),(0,y.jsx)(v,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(r))}},5648:(e,r,n)=>{n.d(r,{A:()=>t});const t={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(6540);const o={},s=t.createContext(o);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);