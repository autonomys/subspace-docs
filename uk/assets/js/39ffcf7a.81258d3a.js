"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8604],{3883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(4848),s=n(8453);n(1470),n(9365),n(1432),n(8774),n(5648);const a={title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f"]},o=void 0,i={id:"farming-&-staking/staking/operators/deregister-operator",title:"Deregister an Operator",description:"Operators Uninstall guide",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/deregister-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/farming-&-staking/staking/operators/deregister-operator",permalink:"/uk/docs/farming-&-staking/staking/operators/deregister-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/operators/deregister-operator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f"]},sidebar:"tutorialSidebar",previous:{title:"Register an Operator",permalink:"/uk/docs/farming-&-staking/staking/operators/register-operator"},next:{title:"Operator Tips & Tricks",permalink:"/uk/docs/farming-&-staking/staking/operators/tips-operator"}},l={},d=[{value:"Embedded Docs",id:"embedded-docs",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Operator deregistration",id:"operator-deregistration",level:3},{value:"Operator deregistration using <strong>Autonomys Staking interface</strong>",id:"operator-deregistration-using-autonomys-staking-interface",level:4},{value:"Unlocking Funds",id:"unlocking-funds",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"embedded-docs",children:"Embedded Docs"}),"\n",(0,r.jsx)(t.p,{children:"The following command can be used to explore all parameters and subcommands:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"target/production/subspace-node --help\n"})}),"\n",(0,r.jsx)(t.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,r.jsxs)(t.p,{children:["If you prefer to build from the source rather using existing builds, the domain operator node is embedded within the ",(0,r.jsx)(t.code,{children:"subspace-node"})," binary, please refer to ",(0,r.jsx)(t.a,{href:"https://github.com/autonomys/subspace/blob/main/crates/subspace-node/README.md",children:"Autonomys node"})," for how to build from source."]}),"\n",(0,r.jsx)(t.h3,{id:"operator-deregistration",children:"Operator deregistration"}),"\n",(0,r.jsx)(t.p,{children:"To deregister an operator on the domain and have your tokens released:"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Only account who registered an operator can deregister it. Make sure to use the same wallet / account to sign the transaction for deregistration."})}),"\n",(0,r.jsxs)(t.h4,{id:"operator-deregistration-using-autonomys-staking-interface",children:["Operator deregistration using ",(0,r.jsx)(t.strong,{children:"Autonomys Staking interface"})]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Proceed to the staking tab on ",(0,r.jsx)(t.a,{href:"https://astral.autonomys.xyz",children:"Astral"})," and connect your wallet."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-1",src:n(6390).A+"",width:"1697",height:"1070"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Select the wallet you would like to connect. Make sure to select the wallet you registered your operator with. Both ",(0,r.jsx)(t.strong,{children:"Subwallet"})," and ",(0,r.jsx)(t.strong,{children:"PolkadotJS"})," wallets are supported."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-2",src:n(3949).A+"",width:"372",height:"220"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Enter your password to give an access to your wallet."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-3",src:n(6468).A+"",width:"390",height:"633"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.code,{children:"Manage My Operator"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-10",src:n(1604).A+"",width:"1715",height:"516"})}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.code,{children:"Actions"})," button next to an operator you would like to deregister and select ",(0,r.jsx)(t.code,{children:"Deregister"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-11",src:n(2733).A+"",width:"324",height:"277"})}),"\n",(0,r.jsxs)(t.ol,{start:"6",children:["\n",(0,r.jsx)(t.li,{children:"Approve the request in the pop-up window."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-9",src:n(5774).A+"",width:"395",height:"620"})}),"\n",(0,r.jsxs)(t.ol,{start:"7",children:["\n",(0,r.jsx)(t.li,{children:"Congratulations, your operator was deregistered."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"It can take up to 10 minutes for the operator to be deregistered, but the funds will stay locked for 14,400 blocks, or 24 hours."})}),"\n",(0,r.jsx)(t.h3,{id:"unlocking-funds",children:"Unlocking Funds"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Once 14,400 blocks have passed after deregistering your operator your funds can now be unlocked."})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Follow steps 1 to 4 in ",(0,r.jsx)(t.a,{href:"#operator-deregistration",children:"steps"}),' to connect your wallet and manage your operator.  It should now show the status "Deregistered, funds ready to unlock".']}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-12",src:n(8966).A+"",width:"1684",height:"135"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.code,{children:"Actions"})," button next to an operator you would like to unlock funds and select ",(0,r.jsx)(t.code,{children:"Unlock Operator"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-13",src:n(4063).A+"",width:"255",height:"197"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Approve the request in the pop-up window."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"NStaking-9",src:n(5774).A+"",width:"395",height:"620"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"Congratulations, your operator funds should be unlocked."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"There won't be a visual indication that your funds have been unlocked on this screen.  The Total Stake field will still show the original staked amounts.\nYou should be able to verify the funds are unlocked by clicking the icon in the upper right hand side of the screen next to your wallet address and seeing the correct balance."})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(6540),s=n(8215),a=n(3104),o=n(6347),i=n(205),l=n(7485),d=n(1682),c=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[d,u]=g({queryString:n,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=d??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function k(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(d(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(k,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function v(e){const t=(0,m.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(t))}},5648:(e,t,n)=>{n.d(t,{A:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},6390:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-1-3ada281f73b3d558999e05d08e652e20.png"},1604:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-10-2382fb7080753927285015ae6fc723ec.png"},2733:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-11-071960a61b6e487290f98562b0002aa3.png"},8966:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-12-3fe19ac3b5b1838d895f7d89ba0a0780.png"},4063:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-13-53bcd3c5fe53c6b54105072e9077a644.png"},3949:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-2-8f4b3ae2d7a7cd160765c5356f7348fc.png"},6468:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},5774:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/NStaking-9-21a015fe1afa0b648789ebac66f9553b.png"}}]);