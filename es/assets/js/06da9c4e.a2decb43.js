"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4789],{4249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(4848),r=t(8453);const i={title:"Foundry",sidebar_position:1,description:"Testing and Deploying Smart Contracts using Foundry",slug:"/develop/nova/guides/foundry",keywords:["autonomys network","book getfoundry","foundry"]},o=void 0,a={id:"develop/nova/additional-guides/foundry_guide",title:"Foundry",description:"Testing and Deploying Smart Contracts using Foundry",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/develop/nova/additional-guides/foundry_guide.md",sourceDirName:"develop/nova/additional-guides",slug:"/develop/nova/guides/foundry",permalink:"/es/develop/nova/guides/foundry",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/additional-guides/foundry_guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Foundry",sidebar_position:1,description:"Testing and Deploying Smart Contracts using Foundry",slug:"/develop/nova/guides/foundry",keywords:["autonomys network","book getfoundry","foundry"]},sidebar:"tutorialSidebar",previous:{title:"Setting up MetaMask",permalink:"/es/develop/nova/metamask"},next:{title:"Hardhat",permalink:"/es/develop/nova/guides/hardhat"}},c={},d=[{value:"Testing and deploying smart contracts using Foundry",id:"testing-and-deploying-smart-contracts-using-foundry",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h3,{id:"testing-and-deploying-smart-contracts-using-foundry",children:["Testing and deploying smart contracts using ",(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Foundry"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"foundryup"})," toolchain installer"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -L https://foundry.paradigm.xyz | bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will install ",(0,s.jsx)(n.code,{children:"foundryup"}),", then simply follow the instructions on-screen, which will make the foundryup command available in your CLI.\nRunning ",(0,s.jsx)(n.code,{children:"foundryup"})," by itself will install the latest precompiled binaries: ",(0,s.jsx)(n.code,{children:"forge"}),", ",(0,s.jsx)(n.code,{children:"cast"}),", ",(0,s.jsx)(n.code,{children:"anvil"}),", and ",(0,s.jsx)(n.code,{children:"chisel"}),". See ",(0,s.jsx)(n.code,{children:"foundryup --help"})," for more options."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you're on Windows, you will need to install and use ",(0,s.jsx)(n.a,{href:"https://gitforwindows.org/",children:"Git BASH"})," or ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"WSL"}),", as your terminal, since Foundryup does not currently support ",(0,s.jsx)(n.code,{children:"PowerShell"})," or ",(0,s.jsx)(n.code,{children:"Cmd"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once installed, create a project. Let\u2019s name it ",(0,s.jsx)(n.code,{children:"hello_subspace"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To initialize the project, run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge init hello_subspace\n"})}),"\n",(0,s.jsxs)(n.p,{children:["cd into ",(0,s.jsx)(n.code,{children:"hello_subspace"})," directory and let\u2019s have a look at the project\u2019s structure."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Foundry-1",src:t(8772).A+"",width:"350",height:"250"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["All the necessary repo structure was created automatically, so we can start writing and testing our smart contracts right away. As you can see, there are separate directories for storing smart contracts (src) and testing smart contracts (test).\nLet\u2019s have a look at the ",(0,s.jsx)(n.code,{children:"Counter.sol"})," smart contract and add a few more functions to the standard behavior. Our smart contract will have three functions: ",(0,s.jsx)(n.code,{children:"setNumber()"})," that sets the uint256 number to the provided value, ",(0,s.jsx)(n.code,{children:"increment()"})," which increases the value by 1 and ",(0,s.jsx)(n.code,{children:"decrement()"})," which decreases the value by 1."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.13;\n\ncontract Counter {\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Let\u2019s make sure that all functions are working properly by adding a couple of tests to the ",(0,s.jsx)(n.code,{children:"Counter.t.sol"})," test file and check if they pass."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.13;\n\nimport "forge-std/Test.sol";\nimport "../src/Counter.sol";\n\ncontract CounterTest is Test {\n    Counter public counter;\n\n    function setUp() public {\n        counter = new Counter();\n        counter.setNumber(2);\n    }\n\n    function testIncrement() public {\n        counter.increment();\n        assertEq(counter.number(), 3);\n    }\n\n    function testSetNumber(uint256 x) public {\n        counter.setNumber(x);\n        assertEq(counter.number(), x);\n    }\n\n    function testDecrement() public {\n        counter.decrement();\n        assertEq(counter.number(), 1);\n    }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In our tests, we first set the initial value of number to two, then check if function ",(0,s.jsx)(n.code,{children:"increment()"})," increases the value by 1 and if ",(0,s.jsx)(n.code,{children:"decrement()"})," decreases the value by 1.\nLet\u2019s build a project by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge build\n"})}),"\n",(0,s.jsx)(n.p,{children:"and ensure that tests are working as expected by running"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge test\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Foundry-2",src:t(7071).A+"",width:"1131",height:"350"})}),"\n",(0,s.jsx)(n.p,{children:"Nice, all tests are passing, meaning the smart contract is working as expected."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Next, there are ",(0,s.jsx)(n.strong,{children:"two things"})," we need to set, in order to ",(0,s.jsx)(n.strong,{children:"deploy our smart contract"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We need to connect a wallet that has sufficient balance of TSSC to cover the gas fees."}),"\n",(0,s.jsx)(n.li,{children:"We need to set an environment variable we will use later."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In order to make our lives easier, let\u2019s create a new ",(0,s.jsx)(n.code,{children:"Makefile"})," as well as ",(0,s.jsx)(n.code,{children:".env"})," file at the root of our project.\n",(0,s.jsx)(n.code,{children:".env"})," files are typically used to store environment variables for your application. They are particularly useful for managing settings that change between deployment environments (e.g., development, testing, staging, and production), and for storing sensitive information."]}),"\n",(0,s.jsx)(n.p,{children:"Environment variables can include database connection details, API keys, external resource URIs, or other configuration variables that might change depending on the environment in which the application is running. In our case, we would use it to point to our Core-EVM RPC url by setting"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"RPC_URL=https://nova-0.gemini-3h.subspace.network/ws\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then set a private key for the EVM-compatible wallet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"PRIVATE_KEY=\u201dyour_private_key_value\u201d\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It's important to note that .env files should not be committed to your source control (like Git), especially when they contain sensitive data, like your private key. To prevent this, add .env to your .gitignore file. This helps to keep sensitive keys secure and avoids the risk of exposing them in the application's code or version control history."})}),"\n",(0,s.jsx)(n.p,{children:"In the Makefile, let\u2019s create shortcuts to the main features of the application"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# include .env file and export its env vars\n-include .env\n\n# Builds\nbuild:\n    @forge clean && forge build --optimize --optimizer-runs 1000000\n\n# Deployment\ndeploy:\n    @forge create Counter --private-key ${PRIVATE_KEY} --rpc-url ${RPC_URL}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We're importing the values for a ",(0,s.jsx)(n.code,{children:"PRIVATE_KEY"})," and ",(0,s.jsx)(n.code,{children:"RPC_URL"})," from the ",(0,s.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["This allows us to run ",(0,s.jsx)(n.code,{children:"make build"})," for building the project and ",(0,s.jsx)(n.code,{children:"make deploy"})," for deploying the project pointing to the provided RPC and using the provided private_key."]}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make build\n"})}),"\n",(0,s.jsx)(n.p,{children:"to make sure it\u2019s working properly."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Foundry-3",src:t(7094).A+"",width:"1422",height:"350"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In order to deploy your contract using the specified ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"RPC"})})," and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"PRIVATE_KEY"})})," just run"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make deploy\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Do not attempt to speed up a transaction (do not include a tip on top of the gas fees). To read more about this, please refer to ",(0,s.jsx)(n.a,{href:"/develop/nova/introduction#important-note-about-submitting-a-transaction",children:"this section"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["In some cases when deploying the script, you may experience ",(0,s.jsx)(n.strong,{children:'"No manual gas limit set"'})," or ",(0,s.jsx)(n.strong,{children:'"Gas estimation failed"'})," issues. Please refer to ",(0,s.jsx)(n.a,{href:"/develop/nova/introduction#gas-estimation-issue",children:"this section"})," for the solution."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Congratulations"}),", you've successfully deployed your smart contract on Autonomys EVM!"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8772:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Foundry-1-8a5c8b8884057c2e65c262979101e51e.png"},7071:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Foundry-2-0905b0bb14b8f7886ef052b7a0722432.png"},7094:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Foundry-3-38f4e98f2679f9e6f8f94bdc7c392e4e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);