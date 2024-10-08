"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3372],{373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(4848),r=t(8453);const s={title:"Hardhat",sidebar_position:2,description:"Testing and Deploying Smart Contracts using HardHat",slug:"/develop/nova/guides/hardhat",keywords:["autonomys network","hardhat"]},a=void 0,i={id:"develop/nova/additional-guides/hardhat_guide",title:"Hardhat",description:"Testing and Deploying Smart Contracts using HardHat",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/develop/nova/additional-guides/hardhat_guide.md",sourceDirName:"develop/nova/additional-guides",slug:"/develop/nova/guides/hardhat",permalink:"/develop/nova/guides/hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/additional-guides/hardhat_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hardhat",sidebar_position:2,description:"Testing and Deploying Smart Contracts using HardHat",slug:"/develop/nova/guides/hardhat",keywords:["autonomys network","hardhat"]},sidebar:"tutorialSidebar",previous:{title:"Foundry",permalink:"/develop/nova/guides/foundry"},next:{title:"Local Development",permalink:"/develop/nova/guides/local-development"}},c={},d=[{value:"Hardhat testing and deployment",id:"hardhat-testing-and-deployment",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"hardhat-testing-and-deployment",children:"Hardhat testing and deployment"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Hardhat is an excellent tool that facilitates building on the Ethereum Virtual Machine. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, and it allows them to easily introduce more functionality around this workflow. This includes compiling and testing at the very core. Flexible deployment options also allow you to point to the Autonomys EVM domain RPC to deploy your contracts and dApps."}),"\n",(0,o.jsxs)(n.p,{children:["Official documentation for Hardhat is available ",(0,o.jsx)(n.a,{href:"https://hardhat.org/docs",children:"on their website"}),", but this guide will cover everything required to get you started."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Prerequisites"}),"\nMake sure you have ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en",children:"NodeJS"})," version >=16.0 installed."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open a new terminal and run these commands to create a new folder for the project."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mkdir subspace-hardhat\ncd subspace-hardhat\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Then initialize an npm project as shown below. You'll be prompted to answer some questions."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npm install --save-dev hardhat\nnpm install --save-dev @openzeppelin/contracts\nnpx hardhat\n"})}),"\n",(0,o.jsx)(n.p,{children:'Select "Create a JavaScript Project" from the list of the available options. Select project root folder and select to create a .gitignore file (optional).'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Hardhat-1",src:t(2745).A+"",width:"492",height:"196"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Right after you create your workspace, you will notice several folders. All of your contracts will reside inside the ",(0,o.jsx)(n.code,{children:"contracts"})," folder, deployment scripts are available inside the ",(0,o.jsx)(n.code,{children:"scripts"})," folder, and tests can be found inside the ",(0,o.jsx)(n.code,{children:"test"})," folder. Click on the contracts folder and open ",(0,o.jsx)(n.code,{children:"Lock.sol"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Hardhat-3",src:t(5691).A+"",width:"423",height:"246"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["When in ",(0,o.jsx)(n.code,{children:"Lock.sol"}),", you can change the name of your contract (in the example, to ",(0,o.jsx)(n.code,{children:"Counter"}),"), the name of the token (in this example, we're calling it ",(0,o.jsx)(n.code,{children:"AutonomysTestToken"}),") and the token symbol (we're using ",(0,o.jsx)(n.code,{children:"TSSCtest"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Let\u2019s add a simple smart contract that has three functions - ",(0,o.jsx)(n.code,{children:"setNumber()"}),", ",(0,o.jsx)(n.code,{children:"increment()"})," and ",(0,o.jsx)(n.code,{children:"decrement()"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.9;\n\nimport \'@openzeppelin/contracts/token/ERC20/ERC20.sol\';\n\ncontract Counter is ERC20 {\n    constructor() ERC20("AutonomysTestToken", "TSSCtest") {}\n\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Let's also rename the filename to ",(0,o.jsx)(n.code,{children:"Counter.sol"})," for consistency."]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Deploying a smart contract can be an expensive procedure due to the gas costs associated with the transaction. Hence, it\u2019s advisable to thoroughly test the smart contracts for correctness before proceeding with deployment. To test the contract, open the tests folder and examine the Lock.js file created for us. Replace the internals of the file with the following code:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'const { expect } = require("chai");\n\ndescribe("Counter", function() {\nlet Counter;\nlet counter;\nlet owner;\nlet addr1;\n\nbeforeEach(async function() {\n    Counter = await ethers.getContractFactory("Counter");\n    [owner, addr1] = await ethers.getSigners();\n\n    counter = await Counter.deploy();\n});\n\ndescribe("Counter operations", function() {\n    it("Should return initial value of zero", async function() {\n    expect(await counter.number()).to.equal(0);\n    });\n\n    it("Should set number to a new value", async function() {\n    await counter.setNumber(5);\n    expect(await counter.number()).to.equal(5);\n    });\n\n    it("Should increment the number", async function() {\n    await counter.setNumber(5);\n    await counter.increment();\n    expect(await counter.number()).to.equal(6);\n    });\n\n    it("Should decrement the number", async function() {\n    await counter.setNumber(5);\n    await counter.decrement();\n    expect(await counter.number()).to.equal(4);\n    });\n});\n});\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For consistency, let's also rename ",(0,o.jsx)(n.code,{children:"Lock.js"})," to ",(0,o.jsx)(n.code,{children:"CounterTest.js"})]}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsxs)(n.li,{children:["To run the test, simply type ",(0,o.jsx)(n.code,{children:"npx hardhat test"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Hardhat-4",src:t(9780).A+"",width:"553",height:"214"})}),"\n",(0,o.jsx)(n.p,{children:"Great, looks like everything is working as expected. We\u2019re all set for the deployment!"}),"\n",(0,o.jsxs)(n.ol,{start:"8",children:["\n",(0,o.jsxs)(n.li,{children:["In order to deploy the contract, we need to set a deployment network for hardhat.\nOpen ",(0,o.jsx)(n.code,{children:"hardhat.config.js"})," file and add the subspace to the list of networks."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'require("@nomicfoundation/hardhat-toolbox");\nmodule.exports = {\nsolidity: "0.8.19",\nnetworks: {\n    subspace: {\n    url: "https://nova-0.gemini-3h.subspace.network/ws",\n    accounts: ["private_key_to_your_account"]\n    }\n}\n};\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Be careful to not commit hardhat.config.js file as it contain your private key. You can use NPM tools like ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:"dotenv"})," to securely store your private keys in the ",(0,o.jsx)(n.code,{children:".env"})," file."]})}),"\n",(0,o.jsxs)(n.ol,{start:"9",children:["\n",(0,o.jsxs)(n.li,{children:["Open to ",(0,o.jsx)(n.code,{children:"deploy.js"})," file and replace the content with the code."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Hardhat-5",src:t(909).A+"",width:"619",height:"258"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'const hre = require("hardhat");\n\nasync function main() {\nconst Contract = await hre.ethers.getContractFactory("Counter");\nconst contract = await Contract.deploy();\n\nconsole.log("Contract deployed to:", contract.target);\n}\n\nmain().catch((error) => {\nconsole.error(error);\nprocess.exitCode = 1;\n});\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"10",children:["\n",(0,o.jsxs)(n.li,{children:["You're all set to deploy your smart contract on Autonomys Network!\nIn order to deploy, run ",(0,o.jsx)(n.code,{children:"npx hardhat run scripts/deploy.js --network subspace"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This command will deploy your smart contract on the network we've just specified in ",(0,o.jsx)(n.code,{children:"hardhat.config.js"})," file."]}),"\n",(0,o.jsxs)(n.p,{children:["In case of success deployment, you should see ",(0,o.jsx)(n.code,{children:"Contract deployed to: transaction hash"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Hardhat-6",src:t(9670).A+"",width:"633",height:"89"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["In some cases when deploying the script, you may experience ",(0,o.jsx)(n.strong,{children:'"No manual gas limit set"'})," or ",(0,o.jsx)(n.strong,{children:'"Gas estimation failed"'})," issues. Please refer to ",(0,o.jsx)(n.a,{href:"/develop/nova/introduction#gas-estimation-issue",children:"this section"})," for the solution."]})}),"\n",(0,o.jsxs)(n.ol,{start:"11",children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Congratulations"}),", you've successfully deployed your smart contract on the Autonomys EVM domain!"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2745:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Hardhat-1-6fc80cd45ba2e4f90daf14813ef7baca.png"},5691:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Hardhat-3-9bb9556ee93a5528ba838b8ed6058e6f.png"},9780:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Hardhat-4-bfe919118bee2b9e54ecd14bfe330dca.png"},909:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Hardhat-5-09c4c004cebb80e36ea4b501f34d003f.png"},9670:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Hardhat-6-886cbad16b9325ae4006646535606c05.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);