"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[706],{48354:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var t=n(74848),r=n(28453);const s={title:"Local Development",sidebar_position:3,description:"Guide on local development Autonomys Node and Farmer",slug:"/develop/auto-evm/guides/local-development",keywords:["local development","autonomys network"]},a=void 0,l={id:"develop/nova/additional-guides/local_development",title:"Local Development",description:"Guide on local development Autonomys Node and Farmer",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/develop/nova/additional-guides/local_development.md",sourceDirName:"develop/nova/additional-guides",slug:"/develop/auto-evm/guides/local-development",permalink:"/fr/develop/auto-evm/guides/local-development",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/additional-guides/local_development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Local Development",sidebar_position:3,description:"Guide on local development Autonomys Node and Farmer",slug:"/develop/auto-evm/guides/local-development",keywords:["local development","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/fr/develop/auto-evm/guides/hardhat"},next:{title:"Remix IDE",permalink:"/fr/develop/auto-evm/guides/remix"}},d={},i=[{value:"Setting up a local development environment",id:"setting-up-a-local-development-environment",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h3,{id:"setting-up-a-local-development-environment",children:"Setting up a local development environment"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"You can always set up a local network to test and deploy your smart contract!"})}),"\n",(0,t.jsx)(o.p,{children:"To establish a full local network, you need to run a local node, a Core-EVM domain, and a farmer."}),"\n",(0,t.jsxs)(o.p,{children:["First, visit the ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://github.com/autonomys/subspace/releases",children:"Autonomys releases"})})," page and download the most up-to-date stable versions of the node and farmer."]}),"\n",(0,t.jsxs)(o.admonition,{type:"tip",children:[(0,t.jsx)(o.p,{children:"For each release, there are two versions:"}),(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"skylake: for newer processors from around 2015 and onwards"}),"\n",(0,t.jsx)(o.li,{children:"x86-64-v2: for older processors from around 2009 and some older VMs"}),"\n"]}),(0,t.jsxs)(o.p,{children:["Older processors/VMs are no longer supported by official releases, but they can still be ",(0,t.jsx)(o.a,{href:"https://github.com/autonomys/subspace/blob/main/docs/development.md",children:"compiled manually"})," if desired."]})]}),"\n",(0,t.jsx)(o.p,{children:"After downloading both files that suit your system, start a node using your preferred terminal. If you want to start an EVM domain on your local machine, you need to specify:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Your local RPC server port"}),"\n",(0,t.jsx)(o.li,{children:"Your local web-socket RPC port\nYou can do this with the following command:"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"./your_subspace_node_path run --dev --rpc-listen-on 127.0.0.1:9944 -- --domain-id 3 --dev --rpc-listen-on 127.0.0.1:8545\n"})}),"\n",(0,t.jsxs)(o.p,{children:["This will create a local RPC on port ",(0,t.jsx)(o.strong,{children:"8545"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"Secondly, you need to start a farmer by running the following command:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:" ./your_subspace_farmer_path farm --reward-address [YOUR REWARD ADDRESS] path=tmp-farm,size=100M\n"})}),"\n",(0,t.jsx)(o.p,{children:"You can specify the desired plot size, but 100M should be sufficient."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"And that\u2019s it!"})," By starting your ",(0,t.jsx)(o.strong,{children:"local node"})," and a ",(0,t.jsx)(o.strong,{children:"farmer"}),", you have your ",(0,t.jsx)(o.strong,{children:"local RPC"})," ready for testing and deploying your smart contracts! You can easily connect your ",(0,t.jsx)(o.a,{href:"https://metamask.io/",children:"MetaMask"})," account to the local development network, as well as use ",(0,t.jsx)(o.a,{href:"https://remix.ethereum.org/",children:"Remix"})," or ",(0,t.jsx)(o.a,{href:"https://book.getfoundry.sh/",children:"Foundry"})," in order to test and deploy smart contracts on a local network!"]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);