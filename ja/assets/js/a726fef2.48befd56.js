"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8972],{80118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(74848),s=n(28453);const r={title:"Introduction",sidebar_position:1,description:"Quick start one-pager",slug:"/develop/auto-evm/introduction",keywords:["autonomys network","quickstart"]},i=void 0,a={id:"develop/nova/intro",title:"Introduction",description:"Quick start one-pager",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/nova/intro.mdx",sourceDirName:"develop/nova",slug:"/develop/auto-evm/introduction",permalink:"/ja/develop/auto-evm/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"Quick start one-pager",slug:"/develop/auto-evm/introduction",keywords:["autonomys network","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"\u264a Auto EVM",permalink:"/ja/develop/auto-evm"},next:{title:"General Information",permalink:"/ja/develop/auto-evm/general"}},l={},d=[{value:"The only tools needed to get you started",id:"the-only-tools-needed-to-get-you-started",level:2},{value:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM",id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",level:3},{value:"Get tokens to your wallet using our faucet",id:"get-tokens-to-your-wallet-using-our-faucet",level:3},{value:"Test and deploy your smart contract",id:"test-and-deploy-your-smart-contract",level:3},{value:"Important note about submitting a transaction",id:"important-note-about-submitting-a-transaction",level:3},{value:"Gas Estimation Issue",id:"gas-estimation-issue",level:3},{value:"Solutions",id:"solutions",level:4},{value:"Solution examples",id:"solution-examples",level:4},{value:"Have any questions? Feel free to post them on our forum or in our Developer-chat on Discord.",id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Currently, Auto EVM is available exclusively on ",(0,o.jsx)(t.strong,{children:"Taurus"})," network."]}),(0,o.jsxs)(t.p,{children:["Auto EVM's availability on the mainnet is planned for ",(0,o.jsx)(t.strong,{children:"Phase 2 of the mainnet launch"}),". For further details, please refer to our ",(0,o.jsx)(t.a,{href:"https://forum.autonomys.xyz/t/phased-launch-roadmap/4414",children:"Phased Launch Roadmap"})," post on the forum."]})]}),"\n",(0,o.jsx)(t.h2,{id:"the-only-tools-needed-to-get-you-started",children:"The only tools needed to get you started"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."}),"\n",(0,o.jsx)(t.p,{children:"Autonomys utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Autonomys."}),"\n",(0,o.jsx)(t.h3,{id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",children:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Network Name: Autonomys EVM\nNew RPC URL: https://auto-evm-0.taurus.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: tAI3\n"})}),"\n",(0,o.jsx)(t.h3,{id:"get-tokens-to-your-wallet-using-our-faucet",children:"Get tokens to your wallet using our faucet"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["Follow the instructions ",(0,o.jsx)(t.a,{href:"/develop/auto-evm/faucet",children:"here"})," to use our ",(0,o.jsx)(t.strong,{children:"Faucet"})," to get some tAI3."]}),"\n",(0,o.jsx)(t.h3,{id:"test-and-deploy-your-smart-contract",children:"Test and deploy your smart contract"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://remix.ethereum.org/",children:"Remix"})}),", ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://book.getfoundry.sh/",children:"Foundry"})})," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."]}),"\n",(0,o.jsx)(t.p,{children:"If anything above sounds unfamiliar, you can always fall back to our full guide."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"important-note-about-submitting-a-transaction",children:"Important note about submitting a transaction"}),"\n",(0,o.jsx)(t.p,{children:"Please avoid attempting to accelerate a transaction by including a tip alongside the gas fees. The transaction queue operates differently with Autonomys, leading to the possibility of two transactions sharing the same nonce. This could result in dual charges for gas fees - once for the execution and storage in the first transaction, and solely for storage in the second transaction. To prevent this scenario, ensure that you refrain from adding a tip in an attempt to speed the transaction up."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"gas-estimation-issue",children:"Gas Estimation Issue"}),"\n",(0,o.jsxs)(t.p,{children:["When deploying smart contracts to our EVM-compatible domain ",(0,o.jsx)(t.strong,{children:"Auto EVM"}),", you may encounter an error related to gas estimation, typically presenting as:"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:'"No manual gas limit set" or "Gas estimation failed"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This issue often occurs because development tools like Foundry simulate transactions and use calculated or hardcoded gas estimation instead of querying the RPC (Remote Procedure Call) for it. ",(0,o.jsx)(t.strong,{children:"Auto EVM"})," may require different gas amounts for certain operations compared to other EVM-compatible chains like Ethereum's testnets."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["We have submitted an upstream PR to fix this issue with ",(0,o.jsx)(t.strong,{children:"Foundry"}),". Described below are the workarounds, until the issue is resolved by the ",(0,o.jsx)(t.strong,{children:"Foundry team"}),"."]})}),"\n",(0,o.jsx)(t.h4,{id:"solutions",children:"Solutions"}),"\n",(0,o.jsx)(t.p,{children:"If you encounter this issue, try the following solutions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Skip simulation: Use the ",(0,o.jsx)(t.code,{children:"--skip-simulation"})," flag when deploying with Foundry to bypass built-in simulation and rely on RPC for gas estimation."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Set manual gas limit: Specify a higher gas limit manually in your deployment command or UI."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Adjust deployment script: Modify your script to include custom gas settings or implement ",(0,o.jsx)(t.code,{children:"try/catch"})," blocks for handling deployment failures."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Use Web3 provider: If using ",(0,o.jsx)(t.strong,{children:"Remix IDE"}),", switch to ",(0,o.jsx)(t.code,{children:"Injected Web3"})," environment to leverage external Web3 providers like MetaMask."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Custom deployment function: Create a deployment function with adjustable gas parameters."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"solution-examples",children:"Solution examples"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Foundry"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Try using ",(0,o.jsx)(t.code,{children:"--skip-simulation"})," flag: ",(0,o.jsx)(t.code,{children:"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --skip-simulation"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Try setting the gas limit manually: ",(0,o.jsx)(t.code,{children:"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --gas-limit 300000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Adjust the gas limit value as needed. Start with a higher value and gradually lower it to find the optimal limit."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Remix IDE"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Try settiing gas limit manually: In the ",(0,o.jsx)(t.strong,{children:"Deploy & Run Transactions"})," panel, expand the ",(0,o.jsx)(t.strong,{children:"Advanced"})," section.\nSet a higher value in the ",(0,o.jsx)(t.strong,{children:"Gas Limit"})," field. Try starting with ",(0,o.jsx)(t.strong,{children:"300000"})," and adjust as needed."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Try adjusting gas price: In the same ",(0,o.jsx)(t.strong,{children:"Advanced"})," section, you can also adjust the ",(0,o.jsx)(t.strong,{children:"Gas Price"})," if needed."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Try switching to the ",(0,o.jsx)(t.strong,{children:"Injected Web3"})," environment in the ",(0,o.jsx)(t.strong,{children:"Deploy & Run Transactions"})," panel. This will use your browser's Web3 provider (like MetaMask) which might handle gas estimation better for the network."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"If the above steps don't work, you can create a custom deployment function that includes gas parameters:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"function deployWithCustomGas(uint256 gasLimit, uint256 gasPrice) public returns (address) {\n   return address(new YourContract{gas: gasLimit, gasPrice: gasPrice}());\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Other possible solution"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Modify your deployment script and override the default gas settings:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"vm.txGasPrice(uint256 gasPrice);\nvm.txGasLimit(uint256 gasLimit);\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Implement a try/catch block in your script to handle gas estimation failures:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'try yourContract.deploy{gas: 300000}(constructorArgs) returns (YourContract deployed) {\n   // Deployment successful\n} catch Error(string memory reason) {\n   console.log("Deployment failed:", reason);\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.h3,{id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",children:["Have any questions? Feel free to post them on ",(0,o.jsx)(t.a,{href:"https://forum.autonomys.xyz/",children:"our forum"})," or in our ",(0,o.jsx)(t.a,{href:"https://discord.gg/EAw6B48r",children:"Developer-chat on Discord"}),"."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"In order to get access to the role-gated developer chat:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Join our ",(0,o.jsx)(t.a,{href:"https://discord.gg/vhv5cEZN",children:"Discord"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click on Autonomys Network at the top left corner and choose ",(0,o.jsx)(t.strong,{children:"Linked Roles"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Discord-1",src:n(70603).A+"",width:"231",height:"539"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Link your GitHub account to get a developer role and gain access to ",(0,o.jsx)(t.strong,{children:"developer-chat"}),".\n",(0,o.jsx)(t.img,{alt:"Discord-2",src:n(752).A+"",width:"737",height:"206"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},70603:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},752:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);