"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9521],{4206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(4848),a=n(8453);n(1470),n(9365),n(8774),n(5648);const i={title:"Timekeeping",sidebar_position:3,description:"Farming on the Autonomys Network",slug:"/farming/timekeeper",keywords:["Timekeeper","Timekeeping","\u8015\u4f5c","Hardware"]},o="Timekeeping",s={id:"farming-&-staking/timekeeping",title:"Timekeeping",description:"Farming on the Autonomys Network",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/timekeeping.md",sourceDirName:"farming-&-staking",slug:"/farming/timekeeper",permalink:"/zh/farming/timekeeper",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/timekeeping.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Timekeeping",sidebar_position:3,description:"Farming on the Autonomys Network",slug:"/farming/timekeeper",keywords:["Timekeeper","Timekeeping","\u8015\u4f5c","Hardware"]},sidebar:"tutorialSidebar",previous:{title:"Staking guide",permalink:"/zh/staking/stake"},next:{title:"\u5165\u95e8\u6307\u5357",permalink:"/zh/develop/intro"}},l={},c=[{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2},{value:"Command Line Parameters",id:"command-line-parameters",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"timekeeping",children:"Timekeeping"})}),"\n",(0,r.jsx)(t.p,{children:"Timekeeping is an essential component of securing the protocol. Without at least one timekeeper online there would be no block production. While it is possible to run a farmer or operator node with timekeeping activated, the ideal is that a high-spec, dedicated machine is used to mitigate processing loads altering the quality of the work they do."}),"\n",(0,r.jsx)(t.p,{children:"Having a good number of timekeepers distributed geographically is our goal to foster a healthy network. Our hope is that our dedicated community run a number in addition to those being run by the team to ensure resilience and decentralization of the protocol."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"There is no explicit economic incentive to running a timekeeper, however, independent timekeeping contributes to stable block production, which benefits every participant of the network."})}),"\n",(0,r.jsxs)(t.p,{children:["You can read more about timekeeping in the ",(0,r.jsx)(t.a,{href:"https://academy.autonomys.xyz/subspace-protocol/consensus/proof-of-time#timekeeping",children:"Proof-of-Time section of the Autonomys Academy"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"\u786c\u4ef6\u8981\u6c42",children:"\u786c\u4ef6\u8981\u6c42"}),"\n",(0,r.jsx)(t.p,{children:"Being a timekeeper has high hardware requirements to ensure that a user with a stronger machine is not able to consistently beat every other timekeeper on the network. All timekeepers are in a race with each other to generate their proofs and we need a grid of equally provisioned F1 cars rather than a mix of classes with varying power."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Note that these specs are our starting point and are subject to change as we discover the exact characteristics required to be a good timekeeper."})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Hardware"}),(0,r.jsx)(t.th,{children:"\u89c4\u683c"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CPU"}),(0,r.jsx)(t.td,{children:"4 core+ with as high a frequency as possible. An overclocked Intel 14900k is the ideal. Note that only 1 core will be occupied with timekeeping."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RAM"}),(0,r.jsx)(t.td,{children:"8GB \u4ee5\u4e0a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Storage"}),(0,r.jsx)(t.td,{children:"100GB \u56fa\u6001\u786c\u76d8"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"command-line-parameters",children:"Command Line Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["There are two new CLI options on the node visible with\xa0",(0,r.jsx)(t.code,{children:"--help"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--timekeeper"}),"\xa0- to become a timekeeper."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--timekeeper-cpu-cores"}),"\xa0- to specify which cores timekeeper should use rather than random cores."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(8215),i=n(3104),o=n(6347),s=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=c??b;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=b(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,k.jsx)(v,{...t,...e}),(0,k.jsx)(x,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,k.jsx)(y,{...e,children:d(e.children)},String(t))}},5648:(e,t,n)=>{n.d(t,{A:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(6540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);