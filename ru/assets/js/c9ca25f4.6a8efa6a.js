"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2182],{88212:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(74848),n=s(28453),o=s(11470),a=s(19365);s(28774),s(65648);const i={title:"Common Problems",sidebar_position:4,description:"This page addresses common problems users may encounter while using Autonomys software. It provides details on specific errors, their severity levels, and suggested remediation steps, helping users troubleshoot effectively.",slug:"/farming/common-problems",keywords:["Error","Warn","\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435","Problem","Issues"]},l=void 0,c={id:"farming-&-staking/farming/common-problems",title:"Common Problems",description:"This page addresses common problems users may encounter while using Autonomys software. It provides details on specific errors, their severity levels, and suggested remediation steps, helping users troubleshoot effectively.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/farming/common-problems.mdx",sourceDirName:"farming-&-staking/farming",slug:"/farming/common-problems",permalink:"/ru/farming/common-problems",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/common-problems.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Common Problems",sidebar_position:4,description:"This page addresses common problems users may encounter while using Autonomys software. It provides details on specific errors, their severity levels, and suggested remediation steps, helping users troubleshoot effectively.",slug:"/farming/common-problems",keywords:["Error","Warn","\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435","Problem","Issues"]},sidebar:"tutorialSidebar",previous:{title:"Taurus Network",permalink:"/ru/farming/advanced-cli/taurus"},next:{title:"Additional Guides",permalink:"/ru/farming/guides"}},u={},d=[{value:"Program Issues",id:"program-issues",level:2},{value:"Unexpected Behavior",id:"unexpected-behavior",level:2}];function h(e){const r={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["While the aim is to deliver software free of bugs, users may encounter certain errors. Some of these can be safely ignored, while others require attention. If you're still experiencing issues, check out our ",(0,t.jsx)(r.a,{href:"https://forum.autonomys.xyz/search?expanded=false&q=tags",children:"forums"})," or visit our ",(0,t.jsx)(r.a,{href:"https://discord.com/channels/864285291518361610/1062507270539321485",children:"Discord"})," server for assistance."]}),"\n",(0,t.jsx)(r.h2,{id:"program-issues",children:"Program Issues"}),"\n",(0,t.jsx)(r.p,{children:"These errors and warnings are tied to specific components. In this section, we will highlight known issues, offer any available remediation steps to address them, and specify their severity levels. \ud83d\udfe2 \ud83d\udfe0 \ud83d\udd34"}),"\n",(0,t.jsxs)(o.A,{queryString:"component",children:[(0,t.jsxs)(a.A,{value:"node",label:"Node",default:!0,children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"WARN Consensus: telemetry: \u274c Error while dialing /dns/telemetry.subspace.foundation/tcp/443/x-parity-wss/%2Fsubmit%2F: Custom { kind: Other, error: Timeout }"})}),(0,t.jsx)(r.p,{children:"\ud83d\udfe2 This error is specifically related to the telemetry server. It may occur occasionally, but it has no impact on farming operations and can be safely ignored."}),(0,t.jsx)("small",{children:"Last Confirmed: mainnet-2024-nov-13"})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"WARN Consensus: sc_proof_of_time::source: Proof of time chain reorg happened from_next_slot=<block> to_next_slot=<block>"})}),(0,t.jsx)(r.p,{children:"\ud83d\udfe0 This situation arises when two or more valid blocks are created at the same height in the blockchain. Initially, network nodes may disagree on which block to add to the chain, resulting in multiple temporary forks. Once this disagreement is resolved, the blocks from the discarded fork become orphaned, and the chain reorganizes to incorporate the blocks from the winning fork."}),(0,t.jsx)(r.p,{children:"This should resolve on its own."}),(0,t.jsx)("small",{children:"Last Confirmed: mainnet-2024-nov-13"})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"WARN Consensus: sc_proof_of_time::source: Proof of time chain was extended from block import from_next_slot=<block> to_next_slot=<block>"})}),(0,t.jsx)(r.p,{children:"\ud83d\udfe0 This warning message should not affect your rewards or the operation of your node. It's just a log message indicating the normal operation of the network."}),(0,t.jsx)("small",{children:"Last Confirmed: mainnet-2024-nov-13"})]})]}),(0,t.jsx)(a.A,{value:"farmer",label:"\u0424\u0435\u0440\u043c\u0435\u0440",children:(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"ERROR subspace_farmer::farmer_cache: Failed to store piece in cache, there was no space piece_index=<piece>"})}),(0,t.jsx)(r.p,{children:"\ud83d\udd34 This indicates that there is not enough space in the cache to store a new piece of data."}),(0,t.jsx)(r.p,{children:"The drive where you are storing your plot is out of space. Reduce the plot size and restart the farmer. Additionally, ensure that you are saving the plot to the correct drive and that it is properly mounted."}),(0,t.jsx)("small",{children:"Last Confirmed: mainnet-2024-nov-13"})]})}),(0,t.jsx)(a.A,{value:"farming-cluster",label:"Farming Cluster",children:(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"WARN {farm_index=3}:{sector_index=1036}: subspace_farmer::single_disk_farm::plotting: Failed to plot sector, retrying in 1s error=Low-level plotting error: Received only <sector> sector bytes out of <bytes> expected bytes"})}),(0,t.jsx)(r.p,{children:"\ud83d\udfe0 This is a known issue that is actively being investigated. To help mitigate these errors, run your NATS component on the same system as your Controller, Cache, and Plotter components."}),(0,t.jsx)("small",{children:"Last Confirmed: mainnet-2024-nov-13"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"unexpected-behavior",children:"Unexpected Behavior"}),"\n",(0,t.jsx)(r.p,{children:"These unexpected behaviors are not linked to specific components. In this section, we will outline common issues and provide any available remediation steps to address them."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"No Output and Missing Error Codes"})}),(0,t.jsxs)(r.p,{children:["If you encounter a situation in Windows where the node produces no output and does not display any error code, it is likely that you simply need to install the latest version of the ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist",children:"Visual C++ Redistributable package"}),"."]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"Farmer is stuck on plotting and has not made any progress for several hours."})}),(0,t.jsx)(r.p,{children:"Try restarting your node or farmer. We've observed that when creating larger plots, the process may sometimes seem stalled, but it typically resumes automatically after a while."})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("small",{children:"Rewards have not been earned after several days of farming."})}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Ensure you are using the latest release of either ",(0,t.jsx)(r.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Space Acres"})," or the ",(0,t.jsx)(r.a,{href:"https://github.com/autonomys/subspace/releases",children:"Advanced CLI"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Confirm that your farmer is active and on the highest block by checking our ",(0,t.jsx)(r.a,{href:"https://telemetry.subspace.foundation",children:"telemetry"})," server."]}),"\n",(0,t.jsxs)(r.li,{children:["Check your balance using ",(0,t.jsx)(r.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"})," or the ",(0,t.jsx)(r.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.mainnet.subspace.foundation%2Fws#/explorer",children:"Polkadot Explorer"})]}),"\n"]})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,r,s)=>{s.d(r,{A:()=>a});s(96540);var t=s(18215);const n={tabItem:"tabItem_Ymn6"};var o=s(74848);function a(e){let{children:r,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,a),hidden:s,children:r})}},11470:(e,r,s)=>{s.d(r,{A:()=>w});var t=s(96540),n=s(18215),o=s(23104),a=s(56347),i=s(205),l=s(57485),c=s(31682),u=s(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function m(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:s}=e;const n=(0,a.W6)(),o=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function f(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,o=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,d]=p({queryString:s,groupId:n}),[f,b]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,u.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:n}),g=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(74848);function v(e){let{className:r,block:s,selectedValue:t,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,s=l.indexOf(r),n=i[s].value;n!==t&&(c(r),a(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;r=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;r=l[s]??l[l.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:i.map((e=>{let{value:r,label:s,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function x(e){let{lazy:r,children:s,selectedValue:o}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function j(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...r,...e}),(0,y.jsx)(x,{...r,...e})]})}function w(e){const r=(0,b.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(r))}},65648:(e,r,s)=>{s.d(r,{A:()=>t});const t={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>i});var t=s(96540);const n={},o=t.createContext(n);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);