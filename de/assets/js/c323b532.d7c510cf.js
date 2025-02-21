"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6748],{74625:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(74848),r=i(28453);const s={title:"Getting Started",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,description:"Introduction to Staking and Operators",slug:"/staking/intro",keywords:["Staking","Operator","Guide","Decoupled Execution"]},a=void 0,o={id:"farming-&-staking/staking/intro",title:"Getting Started",description:"Introduction to Staking and Operators",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/farming-&-staking/staking/intro.md",sourceDirName:"farming-&-staking/staking",slug:"/staking/intro",permalink:"/de/staking/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,description:"Introduction to Staking and Operators",slug:"/staking/intro",keywords:["Staking","Operator","Guide","Decoupled Execution"]},sidebar:"tutorialSidebar",previous:{title:"Verified Farmer Discord Role",permalink:"/de/farming/guides/verified-farmer"},next:{title:"Register an Operator",permalink:"/de/staking/operator/register"}},d={},c=[{value:"Decoupled Execution Framework",id:"decoupled-execution-framework",level:2},{value:"Farming vs. Operators: Key Differences",id:"farming-vs-operators-key-differences",level:2},{value:"Farming",id:"farming",level:3},{value:"Being an Operator",id:"being-an-operator",level:3},{value:"Operators",id:"operators",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"Hardware",id:"hardware",level:4},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Staking",id:"staking",level:2},{value:"Stake epoch",id:"stake-epoch",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Operator and Staking Availability",type:"warning",children:(0,t.jsxs)(n.p,{children:["Running an Operator and staking are only available on the Taurus and Gemini-3h testnets.",(0,t.jsx)(n.br,{}),"\n","Availability on the mainnet is planned for Phase 2. For further details, please refer to our ",(0,t.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/4414",children:"Phased Launch Roadmap"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"decoupled-execution-framework",children:"Decoupled Execution Framework"}),"\n",(0,t.jsx)(n.p,{children:"Autonomys f\xfchrt das De Coupled Execution Framework (DecEx) ein, um das State-Bloat-Problem zu l\xf6sen, indem die Transaktionsreihenfolge von der Ausf\xfchrung getrennt wird. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme."}),"\n",(0,t.jsx)(n.admonition,{title:"Decoupled Execution",type:"info",children:(0,t.jsxs)(n.p,{children:["For more information on how Subspace separates consensus and computation, check out ",(0,t.jsx)(n.a,{href:"https://academy.autonomys.xyz/subspace-protocol/decoupled-execution",children:"Autonomys Academy"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"farming-vs-operators-key-differences",children:"Farming vs. Operators: Key Differences"}),"\n",(0,t.jsx)(n.h3,{id:"farming",children:"Farming"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consensus:"})," This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transaction Ordering"}),": Farmers are responsible for confirming the availability of transactions and providing an ordering."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lightweight Requirements"}),": The hardware requirements for farming are designed to be lightweight, making it accessible to anyone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Verification"}),": Farmers only verify the proof-of-election and ensure that the data is available."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transactions"}),": Farmers do not execute transactions; they focus on ordering them and including them in the blockchain."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"being-an-operator",children:"Being an Operator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transaction Submission and Execution"}),": Operators are responsible for batching transactions into bundles and submitting them to the consensus chain, executing transactions included in the consensus block and maintaining the resulting chain state."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Higher Hardware Requirements"}),": Operators require more substantial hardware capabilities, as they must execute complex transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Anfangsinvestition erforderlich:"})," Betreiber m\xfcssen einen bestimmten Betrag an AI3 einsetzen. If an operator acts maliciously, their stake is at risk of being ",(0,t.jsx)(n.strong,{children:"slashed"}),". Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pre-Validation and Batching"}),": Operators pre-validate and batch transactions into bundles through a stake-weighted election process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Deterministic Execution"}),": The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Secondary Network Role"}),": Monitors the Domain chain for malicious activity and submits fraud proofs to consensus chain."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Supports Various Environments"}),": Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"operators",children:"Operators"}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement Changes",type:"warning",children:(0,t.jsx)(n.p,{children:"Hardware requirements are lowered for testing but will likely increase on the mainnet."})}),"\n",(0,t.jsx)(n.h4,{id:"operating-system",children:"Operating System"}),"\n",(0,t.jsxs)("small",{children:[(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Application"}),(0,t.jsx)("th",{colspan:"3",children:"Minimum Supported Version*"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"CLI"})}),(0,t.jsx)("td",{children:"\ud83d\udc27 Ubuntu 22.04"}),(0,t.jsx)("td",{children:"\ud83e\ude9f Windows 11"}),(0,t.jsx)("td",{children:"\ud83c\udf4e macOS 14 (Sonoma)"})]})]}),(0,t.jsx)(n.p,{children:"* Note that these are the officially supported minimum versions. For example, Windows 10 will not be officially supported but is likely to work. Team will not prioritise supporting issues that are only present on Windows 10."})]}),"\n",(0,t.jsx)(n.h4,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsx)("a",{id:"min-hardware"}),"\n",(0,t.jsx)("a",{id:"min-node-storage"}),"\n",(0,t.jsx)("a",{id:"min-network"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"CPU"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"RAM"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Storage"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Network"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["4 Cores+ @ 3.4GHz ",(0,t.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-hardware",children:"\xb9"})]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["300 GB NVMe ",(0,t.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-node-storage",children:"\xb2"})]}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["50 Mbps ",(0,t.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-network",children:"\xb3"})]})]})})]}),"\n",(0,t.jsx)("small",{children:"\xb9 Intel Ice Lake or newer (Xeon or Core series), and AMD Zen 3 or newer (EPYC or Ryzen), with a preference for single-threaded performance over a higher core count."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("small",{children:"\xb2 Latency is more important than throughput."}),(0,t.jsx)("br",{}),(0,t.jsx)("small",{children:"\xb3 Bandwidth throughput listed refers to the required upload speed."}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h3,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,t.jsx)(n.admonition,{title:"Key Pair Location",type:"info",children:(0,t.jsxs)(n.p,{children:["For operators, the key pair can be found in ",(0,t.jsx)(n.code,{children:"/<base-path>/domains/<domain-id>/keystore"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ud83d\udcc2 subspace-node\n \u2523 \ud83d\udcc2 db\n \u2523 \ud83d\udcc2 domains\n \u2503 \u2517 \ud83d\udcc2 0\n \u2503 \u2503 \u2523 \ud83d\udcc2 db\n \u2503 \u2503 \u2523 \ud83d\udcc2 evm\n \u2503 \u2503 \u2517 \ud83d\udcc2 keystore\n \u2517 \ud83d\udcc2 network\n"})}),"\n",(0,t.jsx)(n.h2,{id:"staking",children:"Staking"}),"\n",(0,t.jsx)(n.p,{children:"Das Autonomys-Netzwerk ist auf die Beteiligung sowohl von Domain-Betreibern als auch von Landwirten angewiesen, um das Netzwerk zu sichern und Ressourcen bereitzustellen. Autonomys implementiert einen Nominated Proof-of-Stake-Algorithmus, bei dem Token-Inhaber Betreiber unterst\xfctzen, die Transaktionen ausf\xfchren und Bl\xf6cke produzieren."}),"\n",(0,t.jsx)(n.p,{children:"Our staking model consists of two tiers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. Dieses Nominierungssystem gleicht die Macht zwischen den nominierenden Landwirten und den Betreibern aus, wobei sich beide Parteien die Ausf\xfchrungsgeb\xfchren und die m\xf6glichen Strafen (K\xfcrzungen) teilen."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Operators stake to gain the right to produce bundles within a domain. Sie sind f\xfcr die Validierung und Ausf\xfchrung von Transaktionen, die Erstellung von Ausf\xfchrungsbelegen, die Anwendung von Zustands\xfcberg\xe4ngen, die Einreichung einer Speichergeb\xfchr f\xfcr die B\xfcndelausf\xfchrung und die Erhebung von Geb\xfchren f\xfcr ihre Arbeit verantwortlich. The operator's chances to be elected as a slot leader and produce a bundle are weighted by their stake. Betreiber k\xf6nnen von Landwirten oder anderen AI3-Inhabern nominiert werden."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Die Nominierungspools in Autonomys sind \u201efaul\u201c: Alle vom Betreiber verdienten Geb\xfchren werden dem Pool zugewiesen und nicht in die Brieftasche des Nominierenden eingezahlt, es sei denn, dieser bittet um eine Auszahlung. Sofern sie nicht zur\xfcckgezogen werden, werden die Geb\xfchren \u201eautomatisch eingesetzt\u201c \u2013 sie z\xe4hlen zum Gesamteinsatz des Pools und erh\xf6hen so dessen Chance, f\xfcr die Produktion von Paketen ausgew\xe4hlt zu werden."}),"\n",(0,t.jsx)(n.h3,{id:"stake-epoch",children:"Stake epoch"}),"\n",(0,t.jsxs)(n.p,{children:["Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every ",(0,t.jsx)(n.code,{children:"StakeEpochDuration"})," blocks (at the moment, it's set to every 100 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);