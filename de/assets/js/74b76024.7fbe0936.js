"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8347],{4748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(74848),s=r(28453);r(11470),r(19365),r(21432),r(28774),r(65648);const a={title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",slug:"/staking/operator/deregister",keywords:["Operator","Guide"]},o=void 0,i={id:"farming-&-staking/staking/operators/deregister-operator",title:"Deregister an Operator",description:"Operators Uninstall guide",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/deregister-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/staking/operator/deregister",permalink:"/de/staking/operator/deregister",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/operators/deregister-operator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",slug:"/staking/operator/deregister",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Register an Operator",permalink:"/de/staking/operator/register"},next:{title:"Operator Tips & Tricks",permalink:"/de/staking/operator/tips"}},l={},d=[{value:"Embedded Docs",id:"embedded-docs",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Operator deregistration",id:"operator-deregistration",level:3},{value:"Operator deregistration using <strong>Autonomys Staking interface</strong>",id:"operator-deregistration-using-autonomys-staking-interface",level:4},{value:"Unlocking Funds",id:"unlocking-funds",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"embedded-docs",children:"Embedded Docs"}),"\n",(0,n.jsx)(t.p,{children:"The following command can be used to explore all parameters and subcommands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"target/production/subspace-node --help\n"})}),"\n",(0,n.jsx)(t.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,n.jsxs)(t.p,{children:["If you prefer to build from the source rather using existing builds, the domain operator node is embedded within the ",(0,n.jsx)(t.code,{children:"subspace-node"})," binary, please refer to ",(0,n.jsx)(t.a,{href:"https://github.com/autonomys/subspace/blob/main/crates/subspace-node/README.md",children:"Autonomys node"})," for how to build from source."]}),"\n",(0,n.jsx)(t.h3,{id:"operator-deregistration",children:"Operator deregistration"}),"\n",(0,n.jsx)(t.p,{children:"To deregister an operator on the domain and have your tokens released:"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Only account who registered an operator can deregister it. Make sure to use the same wallet / account to sign the transaction for deregistration."})}),"\n",(0,n.jsxs)(t.h4,{id:"operator-deregistration-using-autonomys-staking-interface",children:["Operator deregistration using ",(0,n.jsx)(t.strong,{children:"Autonomys Staking interface"})]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Proceed to the staking tab on ",(0,n.jsx)(t.a,{href:"https://astral.autonomys.xyz",children:"Astral"})," and connect your wallet."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-1",src:r(76390).A+"",width:"1697",height:"1070"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Select the wallet you would like to connect. Make sure to select the wallet you registered your operator with. Both ",(0,n.jsx)(t.strong,{children:"Subwallet"})," and ",(0,n.jsx)(t.strong,{children:"PolkadotJS"})," wallets are supported."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-2",src:r(73949).A+"",width:"372",height:"220"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Enter your password to give an access to your wallet."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-3",src:r(36468).A+"",width:"390",height:"633"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.code,{children:"Manage My Operator"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-10",src:r(11604).A+"",width:"1715",height:"516"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.code,{children:"Actions"})," button next to an operator you would like to deregister and select ",(0,n.jsx)(t.code,{children:"Deregister"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-11",src:r(32733).A+"",width:"324",height:"277"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsx)(t.li,{children:"Approve the request in the pop-up window."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-9",src:r(5774).A+"",width:"395",height:"620"})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsx)(t.li,{children:"Congratulations, your operator was deregistered."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"It can take up to 10 minutes for the operator to be deregistered, but the funds will stay locked for 14,400 blocks, or 24 hours."})}),"\n",(0,n.jsx)(t.h3,{id:"unlocking-funds",children:"Unlocking Funds"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Once 14,400 blocks have passed after deregistering your operator your funds can now be unlocked."})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Follow steps 1 to 4 in ",(0,n.jsx)(t.a,{href:"#operator-deregistration",children:"steps"}),' to connect your wallet and manage your operator.  It should now show the status "Deregistered, funds ready to unlock".']}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-12",src:r(48966).A+"",width:"1684",height:"135"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.code,{children:"Actions"})," button next to an operator you would like to unlock funds and select ",(0,n.jsx)(t.code,{children:"Unlock Operator"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-13",src:r(34063).A+"",width:"255",height:"197"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Approve the request in the pop-up window."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"NStaking-9",src:r(5774).A+"",width:"395",height:"620"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"Congratulations, your operator funds should be unlocked."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"There won't be a visual indication that your funds have been unlocked on this screen.  The Total Stake field will still show the original staked amounts.\nYou should be able to verify the funds are unlocked by clicking the icon in the upper right hand side of the screen next to your wallet address and seeing the correct balance."})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),s=r(18215),a=r(23104),o=r(56347),i=r(205),l=r(57485),d=r(31682),c=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[d,u]=g({queryString:r,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),m=(()=>{const e=d??b;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function k(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==n&&(d(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,x.jsx)(k,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function v(e){const t=(0,f.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(t))}},65648:(e,t,r)=>{r.d(t,{A:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},76390:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-1-3ada281f73b3d558999e05d08e652e20.png"},11604:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-10-2382fb7080753927285015ae6fc723ec.png"},32733:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-11-071960a61b6e487290f98562b0002aa3.png"},48966:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-12-3fe19ac3b5b1838d895f7d89ba0a0780.png"},34063:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-13-53bcd3c5fe53c6b54105072e9077a644.png"},73949:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-2-8f4b3ae2d7a7cd160765c5356f7348fc.png"},36468:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},5774:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/NStaking-9-21a015fe1afa0b648789ebac66f9553b.png"}}]);