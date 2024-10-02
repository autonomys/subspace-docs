"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3856],{7999:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const n={title:"Introduction",sidebar_position:1,description:"A developer guide for the Autonomys Network",keywords:["Getting Started","Learn","Farming","Development"]},r="Developer Guide",a={id:"develop/nova/intro",title:"Introduction",description:"A developer guide for the Autonomys Network",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/develop/nova/intro.md",sourceDirName:"develop/nova",slug:"/develop/nova/intro",permalink:"/pl/docs/develop/nova/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"A developer guide for the Autonomys Network",keywords:["Getting Started","Learn","Farming","Development"]},sidebar:"tutorialSidebar",previous:{title:"Develop on Nova EVM",permalink:"/pl/docs/category/develop-on-nova-evm"},next:{title:"Quick start",permalink:"/pl/docs/develop/nova/quick_start"}},l={},c=[{value:"What makes the Subspace protocol different?",id:"what-makes-the-subspace-protocol-different",level:2},{value:"What is a Proof-of-Archival-Storage?",id:"what-is-a-proof-of-archival-storage",level:2},{value:"A few words about Subspace&#39;s consensus protocol <strong>Dilithium</strong>",id:"a-few-words-about-subspaces-consensus-protocol-dilithium",level:2},{value:"Is it difficult to build applications on Autonomys Network?",id:"is-it-difficult-to-build-applications-on-autonomys-network",level:2}];function h(e){const o={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"developer-guide",children:"Developer Guide"})}),"\n",(0,i.jsx)(o.hr,{}),"\n",(0,i.jsxs)(o.p,{children:["Autonomys is a secure, scalable, decentralized blockchain that resolves the ",(0,i.jsx)(o.strong,{children:(0,i.jsx)(o.a,{href:"https://vitalik.ca/general/2017/12/31/sharding_faq.html#this-sounds-like-theres-some-kind-of-scalability-trilemma-at-play-what-is-this-trilemma-and-can-we-break-through-it",children:"blockchain trilemma"})})," without making compromises. This guide will cover some of the main aspects of Autonomys, if you\u2019re willing to learn more about the technology behind Autonomys it\u2019s better to refer to the ",(0,i.jsxs)(o.a,{href:"https://assets.website-files.com/61526a2af87a54e565b0ae92/617759c00edd0e3bd279aa29_Subspace_%20A%20solution%20to%20the%20farmer%27s%20dilemma.pdf",children:["Whitepaper - ",(0,i.jsx)(o.em,{children:"Full-Length"})]})," or ",(0,i.jsxs)(o.a,{href:"https://subspace.network/news/subspace-network-whitepaper",children:["Whitepaper - ",(0,i.jsx)(o.em,{children:"Summarized"})]})]}),"\n",(0,i.jsx)(o.h2,{id:"what-makes-the-subspace-protocol-different",children:"What makes the Subspace protocol different?"}),"\n",(0,i.jsx)(o.hr,{}),"\n",(0,i.jsx)(o.p,{children:"The Autonomys Network is an instance of the Subspace Protocol. Some new blockchain protocols, designed to be more efficient, fair, and decentralized, are using a system called Proof-of-Capacity (PoC) that prioritizes storage-intensive farming over compute-intensive mining. However, this poses a challenge known as the farmer's dilemma, where users must decide whether to allocate their limited storage to maintain the blockchain's state and history, or to use it for consensus. This may lead to a centralization of farming among a few trusted operators. Subspace, a novel Proof-of-Archival-Storage (PoAS) blockchain protocol, resolves this issue by allowing farmers to store the blockchain's history collectively, separating the processes of consensus and computation. This results in reduced overheads and facilitates participation by regular users, even in complex execution models."}),"\n",(0,i.jsx)(o.p,{children:"Decoupled execution keeps farming lightweight and resistant to pooling, while the farmer storage network enables the blockchain to scale massively without becoming centralized."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Intro-1",src:t(2281).A+"",width:"481",height:"350"})}),"\n",(0,i.jsx)(o.h2,{id:"what-is-a-proof-of-archival-storage",children:"What is a Proof-of-Archival-Storage?"}),"\n",(0,i.jsx)(o.hr,{}),"\n",(0,i.jsx)(o.p,{children:"At Subspace, we implement a Proof-of-Archival-Storage protocol based on the following:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"A Nakamoto (or longest-chain) consensus protocol"}),"\n",(0,i.jsx)(o.li,{children:"Employing a proof-of-capacity resource puzzle for space-bound Sybil resistance"}),"\n",(0,i.jsx)(o.li,{children:"The space reflects some useful storage (as in Proof-of-Replication)"}),"\n",(0,i.jsx)(o.li,{children:"And the specific data being replicated is the archival history of the Autonomys Network chain"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"In its simplest form, our Proof-of-Archival-Storage consensus is a 3-phase protocol:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Archiving phase"}),": given new blocks of the chain, construct canonical history."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Plotting phase"}),": given the canonical history of the blockchain, generate a unique replica (the plot) and store it on disk."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Consensus phase"}),": given a challenge from a secure randomness beacon, audit the plot for a solution that satisfies some threshold, return a proof, and propose a block."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["If you\u2019re curious to read more about our consensus, ",(0,i.jsx)(o.a,{href:"https://blog.subspace.network/dilithium-the-subspace-consensus-v2-3c5df0759e72",children:"here"})," is a great overview written by one of our researchers, Dariia Porechna."]}),"\n",(0,i.jsxs)(o.h2,{id:"a-few-words-about-subspaces-consensus-protocol-dilithium",children:["A few words about Subspace's consensus protocol ",(0,i.jsx)(o.strong,{children:"Dilithium"})]}),"\n",(0,i.jsx)(o.hr,{}),"\n",(0,i.jsx)(o.p,{children:"As we transition to our Dilithium v2 consensus, we've recognized the essential role polynomial schemes will play in the next era of blockchain design, just as hash functions, Merkle trees, and ECC signatures did in the previous decade. Subspace protocol is distinctively equipped to utilize these schemes effectively due to our proof-of-archival-storage (PoAS) consensus, which enables a self-regulating feedback loop for storage costs, helping us scale with demand. This enables us to leverage polynomial schemes for linear blockspace scaling proportional to the number of network participants. We specifically employ Reed-Solomon erasure coding and Kate-Zaverucha-Goldberg (KZG) commitments in our v2 consensus, allowing efficient data recovery and authentication."}),"\n",(0,i.jsx)(o.p,{children:"When archiving the history of Autonomys Network, Subspace protocol replaces Merkle roots with KZG commitments. Farmers can then provide constant-sized Kate proofs to clients of the Distributed Storage Network (DSN) as the witness for their pledged archival storage space. We construct generic proofs-of-replication (PoR) from RS-KZG schemes and extend these into an extremely simple and efficient proof-of-archival-storage (PoAS)."}),"\n",(0,i.jsx)(o.h2,{id:"is-it-difficult-to-build-applications-on-autonomys-network",children:"Is it difficult to build applications on Autonomys Network?"}),"\n",(0,i.jsx)(o.hr,{}),"\n",(0,i.jsx)(o.p,{children:"Our primary objective is to maintain a minimum barrier to entry for both our farmers and developers. The installation of an Autonomys Network node can be accomplished in less than 15 minutes and is compatible with an extensive array of computer systems given the highly accessible minimum requirements for the hardware."}),"\n",(0,i.jsx)(o.p,{children:"When it comes to development on the Autonomys Network, we offer a range of flexible options. At present, you can make use of our multiple Ethereum Virtual Machine (EVM) domains for a familiar experience. Soon, we will also provide the functionality for you to build your own local custom virtual machine if that's your preference. We take pride in the unlimited possibilities we provide - there are no boundaries!"})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2281:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/Intro-1-273670c67aa2becf63908e360b9fa267.png"},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var i=t(6540);const s={},n=i.createContext(s);function r(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);