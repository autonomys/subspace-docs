"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8445],{3086:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(4848),i=r(8453);const s={title:"\u5165\u95e8\u6307\u5357",sidebar_position:1,description:"Introduction to Staking and Operators",slug:"/staking/intro",keywords:["Staking","Operator","Guide","Decoupled Execution","Sub-domain"]},o=void 0,a={id:"farming-&-staking/staking/intro",title:"\u5165\u95e8\u6307\u5357",description:"Introduction to Staking and Operators",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/staking/intro.md",sourceDirName:"farming-&-staking/staking",slug:"/staking/intro",permalink:"/zh/staking/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5165\u95e8\u6307\u5357",sidebar_position:1,description:"Introduction to Staking and Operators",slug:"/staking/intro",keywords:["Staking","Operator","Guide","Decoupled Execution","Sub-domain"]},sidebar:"tutorialSidebar",previous:{title:"Discord \u5df2\u9a8c\u8bc1\u519c\u6c11\u89d2\u8272",permalink:"/zh/farming/guides/verified-farmer"},next:{title:"Register an Operator",permalink:"/zh/staking/operator/register"}},d={},c=[{value:"Operators are a key part in solving the farmer&#39;s dilemma",id:"operators-are-a-key-part-in-solving-the-farmers-dilemma",level:2},{value:"\u8015\u4f5c",id:"\u8015\u4f5c",level:3},{value:"Being an operator",id:"being-an-operator",level:3},{value:"Operator hardware requirements",id:"operator-hardware-requirements",level:3},{value:"Folder structure",id:"folder-structure",level:3},{value:"Staking",id:"staking",level:3},{value:"Stake epoch",id:"stake-epoch",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This guide is focused on how to setup an operator, if you would like to learn more about the function of operators read the ",(0,t.jsx)(n.a,{href:"https://academy.autonomys.xyz/subspace-protocol/decoupled-execution",children:"Autonomys Academy"})," to get a better understanding."]})}),"\n",(0,t.jsx)(n.h2,{id:"operators-are-a-key-part-in-solving-the-farmers-dilemma",children:"Operators are a key part in solving the farmer's dilemma"}),"\n",(0,t.jsx)(n.p,{children:"Autonomys introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme."}),"\n",(0,t.jsx)(n.h1,{id:"key-differences-between-farming-and-being-an-operator",children:"Key differences between farming and being an operator"}),"\n",(0,t.jsx)(n.h3,{id:"\u8015\u4f5c",children:"\u8015\u4f5c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consensus:"})," This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transaction Ordering"}),": Farmers are responsible for confirming the availability of transactions and providing an ordering."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lightweight Requirements"}),": The hardware requirements for farming are designed to be lightweight, making it accessible to anyone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Verification"}),": Farmers only verify the proof-of-election and ensure that the data is available."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transactions"}),": Farmers do not execute transactions; they focus on ordering them and including them in the blockchain."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"being-an-operator",children:"Being an operator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transaction Submission and Execution"}),": Operators are responsible for batching transactions into bundles and submitting them to the consensus chain, executing transactions included in the consensus block and maintaining the resulting chain state."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Higher ",(0,t.jsx)(n.a,{href:"#operator-hardware-requirements",children:"Hardware Requirements"})]}),": Operators require more substantial hardware capabilities, as they must execute complex transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Require Initial Investment:"})," Operators are required to stake a certain amount of SSC. If an operator acts maliciously, their stake is at risk of being ",(0,t.jsx)(n.strong,{children:"slashed"}),". Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pre-Validation and Batching"}),": Operators pre-validate and batch transactions into bundles through a stake-weighted election process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Deterministic Execution"}),": The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Secondary Network Role"}),": Monitors the Domain chain for malicious activity and submits fraud proofs to consensus chain."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Supports Various Environments"}),": Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"operator-hardware-requirements",children:"Operator hardware requirements"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The hardware requirements have been reduced from the first Stake Wars in order to encourage as much participation as possible.  Most likely these will be higher in mainnet."})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CPU"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"x86-64 compatible;"}),"\n",(0,t.jsx)(n.li,{children:"Intel Ice Lake, or newer (Xeon or Core series); AMD Zen3, or newer (EPYC or Ryzen);"}),"\n",(0,t.jsx)(n.li,{children:"4 physical cores @ 3.4GHz;"}),"\n",(0,t.jsxs)(n.li,{children:["Prefer single-threaded performance over higher cores count. A comparison of single-threaded performance can be found ",(0,t.jsx)(n.a,{href:"https://www.cpubenchmark.net/singleThread.html",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Storage"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An NVMe SSD of 300 GB. In general, the latency is more important than the throughput."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Memory"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"16 GB."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"System"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Linux Kernel 5.16 or newer."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Network"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The minimum symmetric networking speed is set to 50 Mbit/s."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"folder-structure",children:"Folder structure"}),"\n",(0,t.jsxs)(n.p,{children:["Starting with Gemini 3h, the ",(0,t.jsx)(n.strong,{children:"Autonomys Node"})," will create the following directory structure:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"subspace-node/db"}),"\n",(0,t.jsx)(n.li,{children:"subspace-node/domains/0/keystore"}),"\n",(0,t.jsx)(n.li,{children:"subspace-node/domains/0/db"}),"\n",(0,t.jsx)(n.li,{children:"subspace-node/domains/1/keystore"}),"\n",(0,t.jsx)(n.li,{children:"subspace-node/domains/1/db"}),"\n",(0,t.jsx)(n.li,{children:"subspace-node/network"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For operators it means that you can find your key pair under ",(0,t.jsx)(n.code,{children:"NODE_DATA_PATH/domains/domainID/keystore"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"staking",children:"Staking"}),"\n",(0,t.jsx)(n.p,{children:"The Autonomys Network relies on staking from both domain operators and farmers to secure the network and provide resources. Autonomys implements a Nominated Proof-of-Stake algorithm where token holders endorse operators who execute transactions and produce blocks."}),"\n",(0,t.jsx)(n.p,{children:"Our staking model consists of two tiers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers who nominate and operators with both parties sharing the execution fees and the potential penalties (slashing)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Operators stake to gain the right to produce bundles within a domain. They are responsible for validating and executing transactions, producing execution receipts, applying state transitions, submitting a storage fee for bundle execution and earning fees for their work. The operator's chances to be elected as a slot leader and produce a bundle are weighted by their stake. Operators can be nominated by farmers or other SSC holders."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The nomination pools in Autonomys are "lazy": any fees earned by the operator are assigned to the pool and are not deposited to the nominators wallet unless they ask for a withdrawal. Unless withdrawn, the fees are "auto-staked" - they count towards the total stake of the pool, increasing its chance of being elected to produce bundles.'}),"\n",(0,t.jsx)(n.h3,{id:"stake-epoch",children:"Stake epoch"}),"\n",(0,t.jsxs)(n.p,{children:["Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every ",(0,t.jsx)(n.code,{children:"StakeEpochDuration"})," blocks (at the moment, it's set to every 100 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Read ",(0,t.jsx)(n.a,{href:"https://academy.autonomys.xyz/subspace-protocol/decoupled-execution",children:"Autonomys Academy"})," to get a full picture behind decoupled execution!"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);