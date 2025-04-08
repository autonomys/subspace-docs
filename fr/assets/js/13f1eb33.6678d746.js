"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7479],{36984:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});var i=o(74848),s=o(28453);const a={title:"CLI Node Types",sidebar_position:5,description:"An overview of the different types of nodes",slug:"/farming/guides/nodes",keywords:["Farmer","Farming","Node","Executable","Domain"]},r=void 0,t={id:"farming-&-staking/farming/additional-guides/cli-node-types",title:"CLI Node Types",description:"An overview of the different types of nodes",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/cli-node-types.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming/guides/nodes",permalink:"/fr/farming/guides/nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/cli-node-types.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"CLI Node Types",sidebar_position:5,description:"An overview of the different types of nodes",slug:"/farming/guides/nodes",keywords:["Farmer","Farming","Node","Executable","Domain"]},sidebar:"tutorialSidebar",previous:{title:"Verified Farmer Discord Role",permalink:"/fr/farming/guides/verified-farmer"},next:{title:"Getting Started",permalink:"/fr/staking/intro"}},d={},l=[{value:"Consensus Nodes",id:"consensus-nodes",level:2},{value:"Full Consensus Node",id:"full-consensus-node",level:3},{value:"Archive Consensus Node",id:"archive-consensus-node",level:3},{value:"Domain Nodes",id:"domain-nodes",level:2},{value:"Full Domain Node",id:"full-domain-node",level:3},{value:"Archive Domain Node",id:"archive-domain-node",level:3},{value:"Specialized Nodes",id:"specialized-nodes",level:2},{value:"Operator Node",id:"operator-node",level:3},{value:"Timekeeper Node",id:"timekeeper-node",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["There are two main categories of nodes - one for ",(0,i.jsx)(n.strong,{children:"Consensus"})," and one for ",(0,i.jsx)(n.strong,{children:"Domains"}),". Each of these can be configured in different ways to perform various functions. Nodes are launched with the CLI Application."]}),"\n",(0,i.jsx)(n.h2,{id:"consensus-nodes",children:"Consensus Nodes"}),"\n",(0,i.jsxs)(n.p,{children:["There are two ways to configure a Consensus node. One is for ",(0,i.jsx)(n.strong,{children:"Full nodes"})," and one for ",(0,i.jsx)(n.strong,{children:"Archive nodes"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"full-consensus-node",children:"Full Consensus Node"}),"\n",(0,i.jsx)(n.p,{children:"This is the most common type of node as it is used by farmers. It processes all blocks and serves peers. It preserves the blockchain's state and recent history. While you can customize the block and state pruning, the defaults are 256 and 140,000. Running a full node allows the participant to verify all blocks, ensuring independent auditability. All farmers, operators and timekeepers are full nodes by default."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"subspace-node run \\\n--chain mainnet \\\n--base-path NODE_DATA_PATH\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Farming with a full node",type:"info",children:(0,i.jsxs)(n.p,{children:["When running a full node, farmers need to add the ",(0,i.jsx)(n.code,{children:"--farmer"})," parameter to allow the farmer CLI to connect to the full node."]})}),"\n",(0,i.jsx)(n.h3,{id:"archive-consensus-node",children:"Archive Consensus Node"}),"\n",(0,i.jsx)(n.p,{children:"An archival node keeps a history of all blocks and serves peers. It preserves the blockchain's state and entire history. It is useful for faster historical block retrieval and block explorers. All farmers, operators and timekeepers can be archival nodes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"subspace-node run \\\n--chain mainnet \\\n--base-path NODE_DATA_PATH \\\n--blocks-pruning archive \\\n--state-pruning archive \\\n--sync full\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"archive vs archive-canonical",type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"blocks-pruning"})," and ",(0,i.jsx)(n.em,{children:"state-pruning"})," can be set to ",(0,i.jsx)(n.code,{children:"archive"})," or ",(0,i.jsx)(n.code,{children:"archive-canonical"}),".  The former keeps state of all blocks and the latter only blocks which form the canonical chain."]})}),"\n",(0,i.jsx)(n.h2,{id:"domain-nodes",children:"Domain Nodes"}),"\n",(0,i.jsx)(n.p,{children:"Domains are essentially built-in rollups that support any conceivable state transition framework and smart contract execution environment through custom runtimes. Deploying a domain as easy as deploying a smart contract. They allow builders to easily launch their own network without bootstrapping a new validator set, while still benefiting from the shared security and interoperability provided by the Autonomys Network consensus chain."}),"\n",(0,i.jsxs)(n.p,{children:["There are also two ways to configure a Domain node. One is for ",(0,i.jsx)(n.strong,{children:"Full nodes"})," and one for ",(0,i.jsx)(n.strong,{children:"Archive nodes"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To configure the domain part of the node, you need to include a line that is just two dashes ",(0,i.jsx)(n.code,{children:"--"}),". That will tell the CLI that anything after those dashes applies to the domain portion."]})}),"\n",(0,i.jsx)(n.h3,{id:"full-domain-node",children:"Full Domain Node"}),"\n",(0,i.jsx)(n.p,{children:"A domain full node processes all blocks and serves peers. It preserves the blockchain's state and recent history."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"subspace-node run \\\n--chain mainnet \\\n--base-path NODE_DATA_PATH \\\n--blocks-pruning archive \\\n--state-pruning archive \\\n--sync full \\\n-- \\\n--domain-id your_domain_id\n"})}),"\n",(0,i.jsx)(n.h3,{id:"archive-domain-node",children:"Archive Domain Node"}),"\n",(0,i.jsx)(n.p,{children:"A domain archive node allows an RPC user to query any historical blocks on the domain it targets. It is useful when a complete history of the domain needs to be made available. An example use case would be indexing the domain chain via RPC."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"subspace-node run \\\n--chain mainnet \\\n--base-path NODE_DATA_PATH \\\n--blocks-pruning archive \\\n--state-pruning archive \\\n--sync full \\\n-- \\\n--domain-id your_domain_id \\\n--blocks-pruning archive \\\n--state-pruning archive\n"})}),"\n",(0,i.jsx)(n.h2,{id:"specialized-nodes",children:"Specialized Nodes"}),"\n",(0,i.jsx)(n.h3,{id:"operator-node",children:"Operator Node"}),"\n",(0,i.jsxs)(n.p,{children:["An operator node is closer to an ",(0,i.jsx)(n.em,{children:"archive domain node"})," rather than a ",(0,i.jsx)(n.em,{children:"full domain node"}),". The differences are that ",(0,i.jsx)(n.code,{children:"archive-canonical"})," can be used and the ",(0,i.jsx)(n.code,{children:"state-pruning"})," is set to 28,800 blocks. Also you need to specify a ",(0,i.jsx)(n.code,{children:"--domain-id"})," and an ",(0,i.jsx)(n.code,{children:"--operator-id"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"subspace-node run \\\n--chain taurus \\\n--name your_node_name \\\n--base-path NODE_DATA_PATH \\\n--sync full \\\n-- \\\n--domain-id your_domain_id \\\n--operator-id your_operator_id \\\n"})}),"\n",(0,i.jsx)(n.h3,{id:"timekeeper-node",children:"Timekeeper Node"}),"\n",(0,i.jsxs)(n.p,{children:["Timekeepers run the Proof-of-Time chain and maintain the randomness beacon for the consensus chain. They are responsible for evaluating the delay function (within the target time slot duration of 1 second) and announcing the outputs to other nodes, requiring a powerful latest-generation CPU. You will need to set the ",(0,i.jsx)(n.code,{children:"--timekeeper"})," parameter and you can also force it to use the fastest core with ",(0,i.jsx)(n.code,{children:"--timekeeper-cpu-cores"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"subspace-node run \\\n--chain mainnet \\\n--timekeeper \\\n--timekeeper-cpu-cores 4 \\ \n--base-path NODE_DATA_PATH\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The Subspace Foundation maintains several timekeepers as a public good."})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>t});var i=o(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);