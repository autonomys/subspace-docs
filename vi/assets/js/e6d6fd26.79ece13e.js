"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6946],{70:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(4848),s=t(8453);t(1470),t(9365),t(1432),t(8774),t(5648);const o={title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",slug:"/staking/operator/deregister",keywords:["Operator","Guide"]},i=void 0,a={id:"farming-&-staking/staking/operators/deregister-operator",title:"Deregister an Operator",description:"Operators Uninstall guide",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/deregister-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/staking/operator/deregister",permalink:"/vi/staking/operator/deregister",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/operators/deregister-operator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",slug:"/staking/operator/deregister",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Register an Operator",permalink:"/vi/staking/operator/register"},next:{title:"Operator Tips & Tricks",permalink:"/vi/staking/operator/tips"}},l={},d=[{value:"Embedded Docs",id:"embedded-docs",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Operator deregistration",id:"operator-deregistration",level:3},{value:"Operator deregistration using <strong>Autonomys Staking interface</strong>",id:"operator-deregistration-using-autonomys-staking-interface",level:4},{value:"Unlocking Funds",id:"unlocking-funds",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"embedded-docs",children:"Embedded Docs"}),"\n",(0,n.jsx)(r.p,{children:"The following command can be used to explore all parameters and subcommands:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"subspace-node --help\n"})}),"\n",(0,n.jsx)(r.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,n.jsxs)(r.p,{children:["If you prefer to build from the source rather using existing builds, the domain operator node is embedded within the ",(0,n.jsx)(r.code,{children:"subspace-node"})," binary, please refer to ",(0,n.jsx)(r.a,{href:"https://github.com/autonomys/subspace/blob/main/crates/subspace-node/README.md",children:"Autonomys node"})," for how to build from source."]}),"\n",(0,n.jsx)(r.h3,{id:"operator-deregistration",children:"Operator deregistration"}),"\n",(0,n.jsx)(r.p,{children:"To deregister an operator on the domain and have your tokens released:"}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"Only account who registered an operator can deregister it. Make sure to use the same wallet / account to sign the transaction for deregistration."})}),"\n",(0,n.jsxs)(r.h4,{id:"operator-deregistration-using-autonomys-staking-interface",children:["Operator deregistration using ",(0,n.jsx)(r.strong,{children:"Autonomys Staking interface"})]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Proceed to the staking tab on ",(0,n.jsx)(r.a,{href:"https://astral.autonomys.xyz/taurus/consensus",children:"Astral"})," and connect your wallet."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-1",src:t(6390).A+"",width:"1393",height:"707"})}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsxs)(r.li,{children:["Select the wallet you would like to connect. Make sure to select the wallet you registered your operator with. Both ",(0,n.jsx)(r.strong,{children:"Subwallet"})," and ",(0,n.jsx)(r.strong,{children:"PolkadotJS"})," wallets are supported."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-2",src:t(3949).A+"",width:"320",height:"293"})}),"\n",(0,n.jsxs)(r.ol,{start:"3",children:["\n",(0,n.jsx)(r.li,{children:"Enter your password to give an access to your wallet."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-3",src:t(6468).A+"",width:"390",height:"633"})}),"\n",(0,n.jsxs)(r.ol,{start:"4",children:["\n",(0,n.jsxs)(r.li,{children:["Click on ",(0,n.jsx)(r.code,{children:"Operators"})," and then toggle the filter from ",(0,n.jsx)(r.code,{children:"All operators"})," to ",(0,n.jsx)(r.code,{children:"My nominations"}),". This will allow you to easily find your operator(s) in the list."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-10",src:t(1604).A+"",width:"1390",height:"514"})}),"\n",(0,n.jsxs)(r.ol,{start:"5",children:["\n",(0,n.jsxs)(r.li,{children:["Click on ",(0,n.jsx)(r.code,{children:"Actions"})," button next to an operator you would like to deregister and select ",(0,n.jsx)(r.code,{children:"Deregister"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-11",src:t(5114).A+"",width:"200",height:"276"})}),"\n",(0,n.jsxs)(r.ol,{start:"6",children:["\n",(0,n.jsx)(r.li,{children:"Approve the request in the pop-up window."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-9",src:t(5774).A+"",width:"395",height:"620"})}),"\n",(0,n.jsxs)(r.ol,{start:"7",children:["\n",(0,n.jsx)(r.li,{children:"Congratulations, your operator was deregistered."}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"It can take up to 10 minutes for the operator to be deregistered, but the funds will stay locked for 14,400 blocks, or 24 hours."})}),"\n",(0,n.jsx)(r.h3,{id:"unlocking-funds",children:"Unlocking Funds"}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"Once 14,400 blocks have passed after deregistering your operator your funds can now be unlocked."})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Follow steps 1 to 4 in ",(0,n.jsx)(r.a,{href:"#operator-deregistration",children:"steps"}),' to connect your wallet and manage your operator.  It should now show the status "Deregistered, funds ready to unlock".']}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-12",src:t(8966).A+"",width:"1684",height:"135"})}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsxs)(r.li,{children:["Click on ",(0,n.jsx)(r.code,{children:"Actions"})," button next to an operator you would like to unlock funds and select ",(0,n.jsx)(r.code,{children:"Unlock Operator"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-13",src:t(4063).A+"",width:"198",height:"267"})}),"\n",(0,n.jsxs)(r.ol,{start:"3",children:["\n",(0,n.jsx)(r.li,{children:"Approve the request in the pop-up window."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"NStaking-9",src:t(5774).A+"",width:"395",height:"620"})}),"\n",(0,n.jsxs)(r.ol,{start:"4",children:["\n",(0,n.jsx)(r.li,{children:"Congratulations, your operator funds should be unlocked."}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"There won't be a visual indication that your funds have been unlocked on this screen.  The Total Stake field will still show the original staked amounts.\nYou should be able to verify the funds are unlocked by clicking the icon in the upper right hand side of the screen next to your wallet address and seeing the correct balance."})})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>i});t(6540);var n=t(8215);const s={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>p});var n=t(6540),s=t(8215),o=t(3104),i=t(6347),a=t(205),l=t(7485),d=t(1682),u=t(679);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function A(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!A({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[d,c]=g({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,u.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),I=(()=>{const e=d??f;return A({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{I&&l(I)}),[I]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!A({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,o]),tabValues:o}}var x=t(2303);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function E(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),s=a[t].value;s!==n&&(d(r),i(s))},c=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:c,onClick:u,...o,className:(0,s.A)("tabs__item",I.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function b(e){let{lazy:r,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function w(e){const r=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",I.tabList),children:[(0,j.jsx)(E,{...r,...e}),(0,j.jsx)(b,{...r,...e})]})}function p(e){const r=(0,x.A)();return(0,j.jsx)(w,{...e,children:c(e.children)},String(r))}},5648:(e,r,t)=>{t.d(r,{A:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},6390:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/NStaking-1-2e39e6082e454924dfc648232e6f8d60.png"},1604:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/NStaking-10-34250383caaa828a2bc15dc1487dd110.png"},5114:(e,r,t)=>{t.d(r,{A:()=>n});const n="data:image/png;base64,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"},8966:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/NStaking-12-3fe19ac3b5b1838d895f7d89ba0a0780.png"},4063:(e,r,t)=>{t.d(r,{A:()=>n});const n="data:image/png;base64,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"},3949:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/NStaking-2-af234232f68ccedede2825513ad0accb.png"},6468:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},5774:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/NStaking-9-21a015fe1afa0b648789ebac66f9553b.png"}}]);