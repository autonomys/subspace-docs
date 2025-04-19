"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7700],{66152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(74848),a=r(28453);r(11470),r(19365),r(28774),r(65648);const i={title:"Timekeeping",sidebar_position:3,description:"Farming on the Autonomys Network",slug:"/farming/timekeeper",keywords:["Timekeeper","Timekeeping","Farming","Hardware"]},o="Timekeeping",s={id:"farming-&-staking/timekeeping",title:"Timekeeping",description:"Farming on the Autonomys Network",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/farming-&-staking/timekeeping.md",sourceDirName:"farming-&-staking",slug:"/farming/timekeeper",permalink:"/pt/farming/timekeeper",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/timekeeping.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Timekeeping",sidebar_position:3,description:"Farming on the Autonomys Network",slug:"/farming/timekeeper",keywords:["Timekeeper","Timekeeping","Farming","Hardware"]},sidebar:"tutorialSidebar",previous:{title:"Polkadot Apps",permalink:"/pt/staking/operator/polkadot"},next:{title:"Getting Started",permalink:"/pt/develop/intro"}},l={},c=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Command Line Parameters",id:"command-line-parameters",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"timekeeping",children:"Timekeeping"})}),"\n",(0,n.jsx)(t.p,{children:"Timekeeping is an essential component of securing the protocol. Without at least one timekeeper online there would be no block production. While it is possible to run a farmer or operator node with timekeeping activated, the ideal is that a high-spec, dedicated machine is used to mitigate processing loads altering the quality of the work they do."}),"\n",(0,n.jsx)(t.p,{children:"Having a good number of timekeepers distributed geographically is our goal to foster a healthy network. Our hope is that our dedicated community run a number in addition to those being run by the team to ensure resilience and decentralization of the protocol."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"There is no explicit economic incentive to running a timekeeper, however, independent timekeeping contributes to stable block production, which benefits every participant of the network."})}),"\n",(0,n.jsxs)(t.p,{children:["You can read more about timekeeping in the ",(0,n.jsx)(t.a,{href:"https://academy.autonomys.xyz/subspace-protocol/consensus/proof-of-time#timekeeping",children:"Proof-of-Time section of the Autonomys Academy"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,n.jsx)(t.p,{children:"Being a timekeeper has high hardware requirements to ensure that a user with a stronger machine is not able to consistently beat every other timekeeper on the network. All timekeepers are in a race with each other to generate their proofs and we need a grid of equally provisioned F1 cars rather than a mix of classes with varying power."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Note that these specs are our starting point and are subject to change as we discover the exact characteristics required to be a good timekeeper."})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Hardware"}),(0,n.jsx)(t.th,{children:"Specs"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU"}),(0,n.jsx)(t.td,{children:"4 core+ with as high a frequency as possible. An overclocked Intel 14900k is the ideal. Note that only 1 core will be occupied with timekeeping."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"8GB+"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"100GB SSD"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"command-line-parameters",children:"Command Line Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["There are two new CLI options on the node visible with\xa0",(0,n.jsx)(t.code,{children:"--help"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--timekeeper"}),"\xa0- to become a timekeeper."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--timekeeper-cpu-cores"}),"\xa0- to specify which cores timekeeper should use rather than random cores."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),a=r(18215),i=r(23104),o=r(56347),s=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:i}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=b(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,k.jsx)(v,{...t,...e}),(0,k.jsx)(x,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,k.jsx)(w,{...e,children:d(e.children)},String(t))}},65648:(e,t,r)=>{r.d(t,{A:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);