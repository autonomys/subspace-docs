"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3082],{93687:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const o={title:"XDM",sidebar_position:4,description:"Functions to utilize Auto XDM (Cross-Domain Messaging)",slug:"/develop/auto-sdk/xdm",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto XDM"]},r=void 0,a={id:"develop/auto_sdk/auto-xdm",title:"XDM",description:"Functions to utilize Auto XDM (Cross-Domain Messaging)",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-xdm.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/xdm",permalink:"/ar/develop/auto-sdk/xdm",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-xdm.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"XDM",sidebar_position:4,description:"Functions to utilize Auto XDM (Cross-Domain Messaging)",slug:"/develop/auto-sdk/xdm",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto XDM"]},sidebar:"tutorialSidebar",previous:{title:"Auto ID",permalink:"/ar/develop/auto-sdk/auto-id"},next:{title:"Utils",permalink:"/ar/develop/auto-sdk/utils"}},d={},c=[{value:"Cross-Domain Transfers",id:"cross-domain-transfers",level:3},{value:"Types:",id:"types",level:3},{value:"Usage Example",id:"usage-example",level:3}];function l(e){const n={admonition:"admonition",br:"br",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"cross-domain-transfers",children:"Cross-Domain Transfers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transfer(api: ApiPromise, destination: ChainOrDomain, receiver: string, amount: Amount): Promise<SubmittableExtrinsic>"}),": Creates a transaction to transfer a specified amount to a receiver on a given destination, which can be either the consensus chain or a specific domain."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"types",children:"Types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Amount"}),": ",(0,t.jsx)(n.code,{children:"BigInt | number | string"}),(0,t.jsx)(n.br,{}),"\n","Represents the amount to be transferred."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Consensus"}),": ",(0,t.jsx)(n.code,{children:"{ type: 'consensus' }"}),(0,t.jsx)(n.br,{}),"\n","Indicates that the destination is the consensus chain."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ChainOrDomain"}),": ",(0,t.jsx)(n.code,{children:"Consensus | Domain"}),(0,t.jsx)(n.br,{}),"\n","A union type representing either the consensus chain or a domain."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Domain"}),": ",(0,t.jsx)(n.code,{children:"{ type: 'domain'; domainId: number }"}),(0,t.jsx)(n.br,{}),"\n","Specifies a domain as the destination, identified by a ",(0,t.jsx)(n.code,{children:"domainId"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// For transferring to the consensus chain\nawait transfer(api, { type: 'consensus' }, 'receiverAddress', amount)\n\n// For transferring to a specific domain\nawait transfer(api, { type: 'domain', domainId: 1 }, 'receiverAddress', amount)\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"transfer"})," function returns a ",(0,t.jsx)(n.code,{children:"Promise"})," that resolves to a ",(0,t.jsx)(n.code,{children:"SubmittableExtrinsic"}),", which can be signed and submitted to the blockchain."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);