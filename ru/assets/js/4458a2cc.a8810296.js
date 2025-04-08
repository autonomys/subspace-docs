"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[851],{4547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const s={title:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,description:"Introduction to Staking and Operators",slug:"/staking/intro",keywords:["Staking","\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f","Decoupled Execution"]},o=void 0,a={id:"farming-&-staking/staking/intro",title:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435",description:"Introduction to Staking and Operators",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/staking/intro.md",sourceDirName:"farming-&-staking/staking",slug:"/staking/intro",permalink:"/ru/staking/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,description:"Introduction to Staking and Operators",slug:"/staking/intro",keywords:["Staking","\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f","Decoupled Execution"]},sidebar:"tutorialSidebar",previous:{title:"CLI Node Types",permalink:"/ru/farming/guides/nodes"},next:{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430",permalink:"/ru/staking/operator/register"}},d={},c=[{value:"Decoupled Execution Framework",id:"decoupled-execution-framework",level:2},{value:"Farming vs. Operators: Key Differences",id:"farming-vs-operators-key-differences",level:2},{value:"\u0424\u0430\u0440\u043c\u0438\u043d\u0433",id:"\u0444\u0430\u0440\u043c\u0438\u043d\u0433",level:3},{value:"Being an Operator",id:"being-an-operator",level:3},{value:"Operators",id:"operators",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",level:4},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Staking",id:"staking",level:2},{value:"Stake epoch",id:"stake-epoch",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Operator and Staking Availability",type:"warning",children:(0,i.jsxs)(n.p,{children:["Running an Operator and staking are only available on the Taurus and Gemini-3h testnets.",(0,i.jsx)(n.br,{}),"\n","Availability on the mainnet is planned for Phase 2. For further details, please refer to our ",(0,i.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/4414",children:"Phased Launch Roadmap"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"decoupled-execution-framework",children:"Decoupled Execution Framework"}),"\n",(0,i.jsx)(n.p,{children:"Autonomys introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme."}),"\n",(0,i.jsx)(n.admonition,{title:"Decoupled Execution",type:"info",children:(0,i.jsxs)(n.p,{children:["For more information on how Subspace separates consensus and computation, check out ",(0,i.jsx)(n.a,{href:"https://academy.autonomys.xyz/subspace-protocol/decoupled-execution",children:"Autonomys Academy"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"farming-vs-operators-key-differences",children:"Farming vs. Operators: Key Differences"}),"\n",(0,i.jsx)(n.h3,{id:"\u0444\u0430\u0440\u043c\u0438\u043d\u0433",children:"\u0424\u0430\u0440\u043c\u0438\u043d\u0433"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consensus:"})," This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Transaction Ordering"}),": Farmers are responsible for confirming the availability of transactions and providing an ordering."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lightweight Requirements"}),": The hardware requirements for farming are designed to be lightweight, making it accessible to anyone."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Verification"}),": Farmers only verify the proof-of-election and ensure that the data is available."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Transactions"}),": Farmers do not execute transactions; they focus on ordering them and including them in the blockchain."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"being-an-operator",children:"Being an Operator"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Transaction Submission and Execution"}),": Operators are responsible for batching transactions into bundles and submitting them to the consensus chain, executing transactions included in the consensus block and maintaining the resulting chain state."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Higher Hardware Requirements"}),": Operators require more substantial hardware capabilities, as they must execute complex transactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Require Initial Investment:"})," Operators are required to stake a certain amount of AI3. If an operator acts maliciously, their stake is at risk of being ",(0,i.jsx)(n.strong,{children:"slashed"}),". Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pre-Validation and Batching"}),": Operators pre-validate and batch transactions into bundles through a stake-weighted election process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deterministic Execution"}),": The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Secondary Network Role"}),": Monitors the Domain chain for malicious activity and submits fraud proofs to consensus chain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Supports Various Environments"}),": Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"operators",children:"Operators"}),"\n",(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.admonition,{title:"Requirement Changes",type:"warning",children:(0,i.jsx)(n.p,{children:"Hardware requirements are lowered for testing but will likely increase on the mainnet."})}),"\n",(0,i.jsx)(n.h4,{id:"operating-system",children:"Operating System"}),"\n",(0,i.jsxs)("small",{children:[(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Application"}),(0,i.jsx)("th",{colspan:"3",children:"Minimum Supported Version*"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"CLI"})}),(0,i.jsx)("td",{children:"\ud83d\udc27 Ubuntu 22.04"}),(0,i.jsx)("td",{children:"\ud83e\ude9f Windows 11"}),(0,i.jsx)("td",{children:"\ud83c\udf4e macOS 14 (Sonoma)"})]})]}),(0,i.jsx)(n.p,{children:"* Note that these are the officially supported minimum versions. For example, Windows 10 will not be officially supported but is likely to work. Team will not prioritise supporting issues that are only present on Windows 10."})]}),"\n",(0,i.jsx)(n.h4,{id:"\u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,i.jsx)("a",{id:"min-hardware"}),"\n",(0,i.jsx)("a",{id:"min-node-storage"}),"\n",(0,i.jsx)("a",{id:"min-network"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"\u041e\u0417\u0423"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Network"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["4 Cores+ @ 3.4GHz ",(0,i.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-hardware",children:"\xb9"})]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:["300 GB NVMe ",(0,i.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-node-storage",children:"\xb2"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:["50 Mbps ",(0,i.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-network",children:"\xb3"})]})]})})]}),"\n",(0,i.jsx)("small",{children:"\xb9 Intel Ice Lake or newer (Xeon or Core series), and AMD Zen 3 or newer (EPYC or Ryzen), with a preference for single-threaded performance over a higher core count."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("small",{children:"\xb2 Latency is more important than throughput."}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\xb3 Bandwidth throughput listed refers to the required upload speed."}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,i.jsx)(n.admonition,{title:"Key Pair Location",type:"info",children:(0,i.jsxs)(n.p,{children:["For operators, the key pair can be found in ",(0,i.jsx)(n.code,{children:"/<base-path>/domains/<domain-id>/keystore"}),"."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ud83d\udcc2 subspace-node\n \u2523 \ud83d\udcc2 db\n \u2523 \ud83d\udcc2 domains\n \u2503 \u2517 \ud83d\udcc2 0\n \u2503 \u2503 \u2523 \ud83d\udcc2 db\n \u2503 \u2503 \u2523 \ud83d\udcc2 evm\n \u2503 \u2503 \u2517 \ud83d\udcc2 keystore\n \u2517 \ud83d\udcc2 network\n"})}),"\n",(0,i.jsx)(n.h2,{id:"staking",children:"Staking"}),"\n",(0,i.jsx)(n.p,{children:"The Autonomys Network relies on staking from both domain operators and farmers to secure the network and provide resources. Autonomys implements a Nominated Proof-of-Stake algorithm where token holders endorse operators who execute transactions and produce blocks."}),"\n",(0,i.jsx)(n.p,{children:"Our staking model consists of two tiers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers who nominate and operators with both parties sharing the execution fees and the potential penalties (slashing)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Operators stake to gain the right to produce bundles within a domain. They are responsible for validating and executing transactions, producing execution receipts, applying state transitions, submitting a storage fee for bundle execution and earning fees for their work. The operator's chances to be elected as a slot leader and produce a bundle are weighted by their stake. Operators can be nominated by farmers or other AI3 holders."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The nomination pools in Autonomys are "lazy": any fees earned by the operator are assigned to the pool and are not deposited to the nominators wallet unless they ask for a withdrawal. Unless withdrawn, the fees are "auto-staked" - they count towards the total stake of the pool, increasing its chance of being elected to produce bundles.'}),"\n",(0,i.jsx)(n.h3,{id:"stake-epoch",children:"Stake epoch"}),"\n",(0,i.jsxs)(n.p,{children:["Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every ",(0,i.jsx)(n.code,{children:"StakeEpochDuration"})," blocks (at the moment, it's set to every 100 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);