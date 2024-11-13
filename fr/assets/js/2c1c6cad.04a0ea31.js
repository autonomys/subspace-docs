"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8564],{27065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const o={title:"Remix IDE",sidebar_position:4,description:"Testing and Deploying Smart Contracts using Remix IDE",slug:"/develop/nova/guides/remix",keywords:["autonomys network","remix ide"]},r=void 0,a={id:"develop/nova/additional-guides/remix_guide",title:"Remix IDE",description:"Testing and Deploying Smart Contracts using Remix IDE",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/develop/nova/additional-guides/remix_guide.md",sourceDirName:"develop/nova/additional-guides",slug:"/develop/nova/guides/remix",permalink:"/fr/develop/nova/guides/remix",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/additional-guides/remix_guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Remix IDE",sidebar_position:4,description:"Testing and Deploying Smart Contracts using Remix IDE",slug:"/develop/nova/guides/remix",keywords:["autonomys network","remix ide"]},sidebar:"tutorialSidebar",previous:{title:"Local Development",permalink:"/fr/develop/nova/guides/local-development"},next:{title:"Autonomys Faucet",permalink:"/fr/develop/nova/faucet"}},c={},d=[{value:"Remix IDE guide",id:"remix-ide-guide",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"remix-ide-guide",children:"Remix IDE guide"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Remix is a great tool that allows you to easily write, test and deploy smart contracts on any EVM-compatible  blockchain. Moreover, integration with MetaMask allows the utilization of any RPC, that\u2019s why we\u2019ve just set up a reference to Autonomys core EVM in our MetaMask wallet!"}),"\n",(0,s.jsxs)(n.p,{children:["Remix has ",(0,s.jsx)(n.a,{href:"https://remix-ide.readthedocs.io/en/latest/",children:"amazing documentation"}),", but this guide will cover everything required to get you started."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Using the browser of your choice navigate to ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://remix.ethereum.org",children:"Remix website"})}),".\nYou will see a file explorer and interface for creating new workspaces, integrations with GitHub, Gist, IPFS, HTTPS, preloaded templates, and plugins.\nLet\u2019s create a new workspace by clicking on the + sign beside WORKSPACES."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-1",src:t(1172).A+"",width:"685",height:"350"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"You can enter any name and use the ERC20 template."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-2",src:t(22639).A+"",width:"340",height:"377"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Right after you create your workspace, you will see a few folders created for you.\nLet\u2019s click on contracts and have a look at ",(0,s.jsx)(n.code,{children:"MyToken.sol"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-3",src:t(41094).A+"",width:"342",height:"379"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Here, you can change the name of your contract (in the example, to ",(0,s.jsx)(n.code,{children:"Counter"}),"), the name of the token (in this example, we're calling it ",(0,s.jsx)(n.code,{children:"SubspaceTestToken"}),") and the token symbol (we're using ",(0,s.jsx)(n.code,{children:"TSSCtest"}),").\nLet\u2019s add a simple smart contract that has three functions - ",(0,s.jsx)(n.code,{children:"setNumber()"}),", ",(0,s.jsx)(n.code,{children:"increment()"})," and ",(0,s.jsx)(n.code,{children:"decrement()"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' // SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\nimport \'@openzeppelin/contracts/token/ERC20/ERC20.sol\';\n\ncontract Counter is ERC20 {\n    constructor() ERC20("AutonomysTestToken", "TSSCtest") {}\n\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n }\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-4",src:t(43513).A+"",width:"684",height:"350"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Next, let\u2019s compile a ",(0,s.jsx)(n.code,{children:"Counter"})," contract. To compile, click on SOLIDITY COMPILER on the left and choose the compiler version that corresponds to the Solidity version of your contract. In our case, it\u2019s version 0.8.9.\nClick on ",(0,s.jsx)(n.code,{children:"Compile MyToken.sol"})," and check if it compiles correctly. If it does, you will see a green checkmark by the compiler."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-5",src:t(37264).A+"",width:"350",height:"569"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Deploying a smart contract could be an expensive procedure, based on the gas costs associated with the transaction. That is why it\u2019s recommended that you thoroughly test the smart contracts for correctness before proceeding with deployment.\nTo test the contract, let\u2019s open the tests folder and have a look at ",(0,s.jsx)(n.code,{children:"MyToken.sol"})," created for us.",(0,s.jsx)(n.br,{}),"\n","Let\u2019s first try to run a test as is without making any changes."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-6",src:t(51083).A+"",width:"779",height:"400"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"To run the tests, select SOLIDITY UNIT TESTING in the bar on the left and click Run."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-7",src:t(76930).A+"",width:"350",height:"417"})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["As expected, the test failed because we manually changed the token name and symbol.\nThis is Test Driven Development (TDD) in action! In order to make the test pass, replace the internals of ",(0,s.jsx)(n.code,{children:"MyToken.sol"})," with the provided below code. In the test, we're adding a few assertions for the ",(0,s.jsx)(n.code,{children:"increment()"})," and ",(0,s.jsx)(n.code,{children:"decrement()"})," functions. In this example, we will set up an initial value of ",(0,s.jsx)(n.code,{children:"number"})," to 2 and ",(0,s.jsx)(n.code,{children:"increment"})," and then ",(0,s.jsx)(n.code,{children:"decrement"})," it by 1. We would expect the number to increase to 3 and then decrease back to 2."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:' pragma solidity >=0.7.0 <0.9.0;\n import "remix_tests.sol";\n import "../contracts/MyToken.sol";\n\n contract CounterTest is Counter {\n\n    function testTokenInitialValues() public {\n        Assert.equal(name(), "AutonomysTestToken", "token name did not match");\n        Assert.equal(symbol(), "TSSCtest", "token symbol did not match");\n        Assert.equal(decimals(), 18, "token decimals did not match");\n        Assert.equal(totalSupply(), 0, "token supply should be zero");\n    }\n\n    Counter public counter;\n\n    function setUp() public {\n        counter = new Counter();\n        counter.setNumber(2);\n    }\n\n    function testIncrement() public {\n        counter.increment();\n        Assert.equal(counter.number(), 3, "test increment did not match");\n    }\n\n    function testDecrement() public {\n        counter.decrement();\n        Assert.equal(counter.number(), 2, "test decrement did not match");\n    }\n }\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-8",src:t(81957).A+"",width:"778",height:"400"})}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsxs)(n.li,{children:["Great, all tests are now passing which means our smart contract ",(0,s.jsx)(n.code,{children:"Counter"})," is indeed working as we expect.\nWe\u2019re all set to deploy it now!"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-9",src:t(46044).A+"",width:"350",height:"447"})}),"\n",(0,s.jsxs)(n.ol,{start:"10",children:["\n",(0,s.jsx)(n.li,{children:"To deploy click on the DEPLOY AND RUN TRANSACTIONS tab on the left.\nRemix allows you to use one of the existing EVMs or inject your own provider through its integration with MetaMask.\nSince we already have a MetaMask Account set up, let\u2019s use this option."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-10",src:t(93710).A+"",width:"350",height:"595"})}),"\n",(0,s.jsxs)(n.ol,{start:"11",children:["\n",(0,s.jsx)(n.li,{children:"You will be prompted to confirm the password with MetaMask, just make sure that the network you\u2019re connected to is Autonomys EVM."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-11",src:t(93207).A+"",width:"350",height:"605"})}),"\n",(0,s.jsxs)(n.ol,{start:"12",children:["\n",(0,s.jsxs)(n.li,{children:["Adjust the gas limit and deploy your smart contract on Autonomys Core EVM.\nNow your transaction is recorded and you can interact with your smart contract at the bottom of the page - it's possible to call the functions ",(0,s.jsx)(n.code,{children:"increment()"})," and ",(0,s.jsx)(n.code,{children:"decrement()"})," as well as ",(0,s.jsx)(n.code,{children:"setNumber()"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Do not attempt to speed up a transaction (do not include a tip on top of the gas fees). To read more about this, please refer to ",(0,s.jsx)(n.a,{href:"/develop/nova/introduction#important-note-about-submitting-a-transaction",children:"this section"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["In some cases when deploying the script, you may experience ",(0,s.jsx)(n.strong,{children:'"No manual gas limit set"'})," or ",(0,s.jsx)(n.strong,{children:'"Gas estimation failed"'})," issues. Please refer to ",(0,s.jsx)(n.a,{href:"/develop/nova/introduction#gas-estimation-issue",children:"this section"})," for the solution."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remix-12",src:t(69276).A+"",width:"350",height:"550"})}),"\n",(0,s.jsx)(n.p,{children:"Congratulations, you've just deployed your smart contract on Autonomys Core EVM!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1172:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-1-d0206fa95d420451ecdd17e94ef74788.png"},93710:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-10-1f9898d164cdb54a3eb26ddc2137d3e1.png"},93207:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-11-8fcd199526796d55c6cace291168a57f.png"},69276:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-12-c77f1688bb362b204a4095bca6fe75fc.png"},22639:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-2-00870623668f141197ba57f205a38ac5.png"},41094:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-3-6ecfd57605e0a80582c45edd1da2bef1.png"},43513:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-4-ebafc2bcd0f80ac8b135020f21b5c4ef.png"},37264:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-5-b0fd840e43bebb342b1c4b458f2e13ca.png"},51083:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-6-325d40445ae4448152be2fb307d30c1f.png"},76930:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-7-7596e211dcc6b1ec76a949572cc6d118.png"},81957:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-8-74aaeec76c2236665e0db5465bd5377a.png"},46044:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remix-9-a04bacfa6217fc47e94f82673dfc3f33.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);