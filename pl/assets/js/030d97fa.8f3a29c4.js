"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6462],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},i=void 0,s={unversionedId:"develop/nova/quick_start",id:"develop/nova/quick_start",title:"Quick start",description:"Quick start one-pager",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/develop/nova/quick_start.md",sourceDirName:"develop/nova",slug:"/develop/nova/quick_start",permalink:"/pl/docs/develop/nova/quick_start",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pl/docs/develop/nova/intro"},next:{title:"General information on dev tools and Autonomys EVM",permalink:"/pl/docs/develop/nova/general-information"}},l={},p=[{value:"The only tools needed to get you started",id:"the-only-tools-needed-to-get-you-started",level:2},{value:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM",id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",level:3},{value:"Get tokens to your wallet using our faucet",id:"get-tokens-to-your-wallet-using-our-faucet",level:3},{value:"Test and deploy your smart contract",id:"test-and-deploy-your-smart-contract",level:3},{value:"Important note about submitting a transaction",id:"important-note-about-submitting-a-transaction",level:3},{value:"Gas Estimation Issue",id:"gas-estimation-issue",level:3},{value:"Solutions",id:"solutions",level:4},{value:"Solution examples",id:"solution-examples",level:4},{value:"Have any questions? Feel free to post them on our forum or in our Developer-chat on Discord.",id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-only-tools-needed-to-get-you-started"},"The only tools needed to get you started"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."),(0,o.kt)("p",null,"Autonomys utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Autonomys."),(0,o.kt)("h3",{id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm"},"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Network Name: Autonomys EVM\nNew RPC URL: https://nova-0.gemini-3h.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: TSSC\n")),(0,o.kt)("h3",{id:"get-tokens-to-your-wallet-using-our-faucet"},"Get tokens to your wallet using our faucet"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"/pl/docs/develop/nova/faucet"},"here")," to use our ",(0,o.kt)("strong",{parentName:"p"},"Faucet")," to get some TSSC."),(0,o.kt)("h3",{id:"test-and-deploy-your-smart-contract"},"Test and deploy your smart contract"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://remix.ethereum.org/"},"Remix")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://book.getfoundry.sh/"},"Foundry"))," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."),(0,o.kt)("p",null,"If anything above sounds unfamiliar, you can always fall back to our full guide."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"important-note-about-submitting-a-transaction"},"Important note about submitting a transaction"),(0,o.kt)("p",null,"Please avoid attempting to accelerate a transaction by including a tip alongside the gas fees. The transaction queue operates differently with Autonomys, leading to the possibility of two transactions sharing the same nonce. This could result in dual charges for gas fees - once for the execution and storage in the first transaction, and solely for storage in the second transaction. To prevent this scenario, ensure that you refrain from adding a tip in an attempt to speed the transaction up."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gas-estimation-issue"},"Gas Estimation Issue"),(0,o.kt)("p",null,"When deploying smart contracts to our EVM-compatible domain ",(0,o.kt)("strong",{parentName:"p"},"Nova"),", you may encounter an error related to gas estimation, typically presenting as:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"No manual gas limit set" or "Gas estimation failed"'),"."),(0,o.kt)("p",null,"This issue often occurs because development tools like Foundry simulate transactions and use calculated or hardcoded gas estimation instead of querying the RPC (Remote Procedure Call) for it. ",(0,o.kt)("strong",{parentName:"p"},"Nova")," may require different gas amounts for certain operations compared to other EVM-compatible chains like Ethereum's testnets."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We have submitted an upstream PR to fix this issue with ",(0,o.kt)("strong",{parentName:"p"},"Foundry"),". Described below are the workarounds, until the issue is resolved by the ",(0,o.kt)("strong",{parentName:"p"},"Foundry team"),".")),(0,o.kt)("h4",{id:"solutions"},"Solutions"),(0,o.kt)("p",null,"If you encounter this issue, try the following solutions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Skip simulation: Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-simulation")," flag when deploying with Foundry to bypass built-in simulation and rely on RPC for gas estimation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set manual gas limit: Specify a higher gas limit manually in your deployment command or UI.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adjust deployment script: Modify your script to include custom gas settings or implement ",(0,o.kt)("inlineCode",{parentName:"p"},"try/catch")," blocks for handling deployment failures.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use Web3 provider: If using ",(0,o.kt)("strong",{parentName:"p"},"Remix IDE"),", switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3")," environment to leverage external Web3 providers like MetaMask.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Custom deployment function: Create a deployment function with adjustable gas parameters."))),(0,o.kt)("h4",{id:"solution-examples"},"Solution examples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Foundry")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try using ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-simulation")," flag: ",(0,o.kt)("inlineCode",{parentName:"p"},"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --skip-simulation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try setting the gas limit manually: ",(0,o.kt)("inlineCode",{parentName:"p"},"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --gas-limit 300000"),"."))),(0,o.kt)("p",null,"Adjust the gas limit value as needed. Start with a higher value and gradually lower it to find the optimal limit."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remix IDE")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try settiing gas limit manually: In the ",(0,o.kt)("strong",{parentName:"p"},"Deploy & Run Transactions")," panel, expand the ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," section.\nSet a higher value in the ",(0,o.kt)("strong",{parentName:"p"},"Gas Limit")," field. Try starting with ",(0,o.kt)("strong",{parentName:"p"},"300000")," and adjust as needed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try adjusting gas price: In the same ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," section, you can also adjust the ",(0,o.kt)("strong",{parentName:"p"},"Gas Price")," if needed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try switching to the ",(0,o.kt)("strong",{parentName:"p"},"Injected Web3")," environment in the ",(0,o.kt)("strong",{parentName:"p"},"Deploy & Run Transactions")," panel. This will use your browser's Web3 provider (like MetaMask) which might handle gas estimation better for the network.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the above steps don't work, you can create a custom deployment function that includes gas parameters:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"function deployWithCustomGas(uint256 gasLimit, uint256 gasPrice) public returns (address) {\n   return address(new YourContract{gas: gasLimit, gasPrice: gasPrice}());\n}\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other possible solution")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify your deployment script and override the default gas settings:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"vm.txGasPrice(uint256 gasPrice);\nvm.txGasLimit(uint256 gasLimit);\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement a try/catch block in your script to handle gas estimation failures:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'try yourContract.deploy{gas: 300000}(constructorArgs) returns (YourContract deployed) {\n   // Deployment successful\n} catch Error(string memory reason) {\n   console.log("Deployment failed:", reason);\n}\n')))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord"},"Have any questions? Feel free to post them on ",(0,o.kt)("a",{parentName:"h3",href:"https://forum.autonomys.xyz/"},"our forum")," or in our ",(0,o.kt)("a",{parentName:"h3",href:"https://discord.gg/EAw6B48r"},"Developer-chat on Discord"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In order to get access to the role-gated developer chat:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/vhv5cEZN"},"Discord"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on Autonomys Network at the top left corner and choose ",(0,o.kt)("strong",{parentName:"p"},"Linked Roles"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Discord-1",src:a(2635).Z,width:"231",height:"539"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Link your GitHub account to get a developer role and gain access to ",(0,o.kt)("strong",{parentName:"p"},"developer-chat"),".\n",(0,o.kt)("img",{alt:"Discord-2",src:a(9744).Z,width:"737",height:"206"})))))}m.isMDXComponent=!0},2635:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},9744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"}}]);