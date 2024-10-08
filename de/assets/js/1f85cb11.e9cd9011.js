"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[738],{8482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(4848),s=t(8453);const o={title:"Remix IDE",sidebar_position:4,description:"Testing and Deploying Smart Contracts using Remix IDE",slug:"/develop/nova/guides/remix",keywords:["autonomys network","remix ide"]},r=void 0,a={id:"develop/nova/additional-guides/remix_guide",title:"Remix IDE",description:"Testing and Deploying Smart Contracts using Remix IDE",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/nova/additional-guides/remix_guide.md",sourceDirName:"develop/nova/additional-guides",slug:"/develop/nova/guides/remix",permalink:"/de/develop/nova/guides/remix",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/additional-guides/remix_guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Remix IDE",sidebar_position:4,description:"Testing and Deploying Smart Contracts using Remix IDE",slug:"/develop/nova/guides/remix",keywords:["autonomys network","remix ide"]},sidebar:"tutorialSidebar",previous:{title:"Local Development",permalink:"/de/develop/nova/guides/local-development"},next:{title:"Autonomys Faucet",permalink:"/de/develop/nova/faucet"}},c={},d=[{value:"Remix IDE guide",id:"remix-ide-guide",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"remix-ide-guide",children:"Remix IDE guide"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Remix is a great tool that allows you to easily write, test and deploy smart contracts on any EVM-compatible  blockchain. Dar\xfcber hinaus erm\xf6glicht die Integration mit MetaMask die Nutzung jedes RPCs, deshalb haben wir gerade einen Verweis auf Autonomys Core EVM in unserem MetaMask-Wallet eingerichtet!"}),"\n",(0,i.jsxs)(n.p,{children:["Remix has ",(0,i.jsx)(n.a,{href:"https://remix-ide.readthedocs.io/en/latest/",children:"amazing documentation"}),", but this guide will cover everything required to get you started."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigieren Sie mit dem Browser Ihrer Wahl zur ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://remix.ethereum.org",children:"Remix-Website"})}),".\nSie sehen einen Datei-Explorer und eine Schnittstelle zum Erstellen neuer Arbeitsbereiche, Integrationen mit GitHub, Gist, IPFS, HTTPS, vorinstallierten Vorlagen und Plugins.\nLet\u2019s create a new workspace by clicking on the + sign beside WORKSPACES."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-1",src:t(1172).A+"",width:"685",height:"350"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"You can enter any name and use the ERC20 template."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-2",src:t(2639).A+"",width:"340",height:"377"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Right after you create your workspace, you will see a few folders created for you.\nLet\u2019s click on contracts and have a look at ",(0,i.jsx)(n.code,{children:"MyToken.sol"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-3",src:t(8713).A+"",width:"342",height:"379"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Here, you can change the name of your contract (in the example, to ",(0,i.jsx)(n.code,{children:"Counter"}),"), the name of the token (in this example, we're calling it ",(0,i.jsx)(n.code,{children:"SubspaceTestToken"}),") and the token symbol (we're using ",(0,i.jsx)(n.code,{children:"TSSCtest"}),").\nLet\u2019s add a simple smart contract that has three functions - ",(0,i.jsx)(n.code,{children:"setNumber()"}),", ",(0,i.jsx)(n.code,{children:"increment()"})," and ",(0,i.jsx)(n.code,{children:"decrement()"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:' // SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\nimport \'@openzeppelin/contracts/token/ERC20/ERC20.sol\';\n\ncontract Counter is ERC20 {\n    constructor() ERC20("AutonomysTestToken", "TSSCtest") {}\n\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n }\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-4",src:t(3513).A+"",width:"684",height:"350"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Next, let\u2019s compile a ",(0,i.jsx)(n.code,{children:"Counter"})," contract. To compile, click on SOLIDITY COMPILER on the left and choose the compiler version that corresponds to the Solidity version of your contract. In our case, it\u2019s version 0.8.9.\nClick on ",(0,i.jsx)(n.code,{children:"Compile MyToken.sol"})," and check if it compiles correctly. If it does, you will see a green checkmark by the compiler."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-5",src:t(7264).A+"",width:"350",height:"569"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Deploying a smart contract could be an expensive procedure, based on the gas costs associated with the transaction. That is why it\u2019s recommended that you thoroughly test the smart contracts for correctness before proceeding with deployment.\nTo test the contract, let\u2019s open the tests folder and have a look at ",(0,i.jsx)(n.code,{children:"MyToken.sol"})," created for us.",(0,i.jsx)(n.br,{}),"\n","Let\u2019s first try to run a test as is without making any changes."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-6",src:t(1083).A+"",width:"779",height:"400"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"To run the tests, select SOLIDITY UNIT TESTING in the bar on the left and click Run."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-7",src:t(6930).A+"",width:"350",height:"417"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["As expected, the test failed because we manually changed the token name and symbol.\nThis is Test Driven Development (TDD) in action! In order to make the test pass, replace the internals of ",(0,i.jsx)(n.code,{children:"MyToken.sol"})," with the provided below code. In the test, we're adding a few assertions for the ",(0,i.jsx)(n.code,{children:"increment()"})," and ",(0,i.jsx)(n.code,{children:"decrement()"})," functions. In this example, we will set up an initial value of ",(0,i.jsx)(n.code,{children:"number"})," to 2 and ",(0,i.jsx)(n.code,{children:"increment"})," and then ",(0,i.jsx)(n.code,{children:"decrement"})," it by 1. We would expect the number to increase to 3 and then decrease back to 2."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:' pragma solidity >=0.7.0 <0.9.0;\n import "remix_tests.sol";\n import "../contracts/MyToken.sol";\n\n contract CounterTest is Counter {\n\n    function testTokenInitialValues() public {\n        Assert.equal(name(), "AutonomysTestToken", "token name did not match");\n        Assert.equal(symbol(), "TSSCtest", "token symbol did not match");\n        Assert.equal(decimals(), 18, "token decimals did not match");\n        Assert.equal(totalSupply(), 0, "token supply should be zero");\n    }\n\n    Counter public counter;\n\n    function setUp() public {\n        counter = new Counter();\n        counter.setNumber(2);\n    }\n\n    function testIncrement() public {\n        counter.increment();\n        Assert.equal(counter.number(), 3, "test increment did not match");\n    }\n\n    function testDecrement() public {\n        counter.decrement();\n        Assert.equal(counter.number(), 2, "test decrement did not match");\n    }\n }\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-8",src:t(1957).A+"",width:"778",height:"400"})}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["Great, all tests are now passing which means our smart contract ",(0,i.jsx)(n.code,{children:"Counter"})," is indeed working as we expect.\nWe\u2019re all set to deploy it now!"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-9",src:t(6044).A+"",width:"350",height:"447"})}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsx)(n.li,{children:"To deploy click on the DEPLOY AND RUN TRANSACTIONS tab on the left.\nRemix allows you to use one of the existing EVMs or inject your own provider through its integration with MetaMask.\nSince we already have a MetaMask Account set up, let\u2019s use this option."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-10",src:t(3710).A+"",width:"350",height:"595"})}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsx)(n.li,{children:"Sie werden aufgefordert, das Passwort mit MetaMask zu best\xe4tigen. Stellen Sie lediglich sicher, dass das Netzwerk, mit dem Sie verbunden sind, Autonomys EVM ist."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-11",src:t(3207).A+"",width:"350",height:"605"})}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsxs)(n.li,{children:["Passen Sie das Gaslimit an und stellen Sie Ihren Smart Contract auf Autonomys Core EVM bereit.\nNow your transaction is recorded and you can interact with your smart contract at the bottom of the page - it's possible to call the functions ",(0,i.jsx)(n.code,{children:"increment()"})," and ",(0,i.jsx)(n.code,{children:"decrement()"})," as well as ",(0,i.jsx)(n.code,{children:"setNumber()"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Versuchen Sie nicht, eine Transaktion zu beschleunigen (geben Sie zus\xe4tzlich zu den Geb\xfchren kein Trinkgeld ein). To read more about this, please refer to ",(0,i.jsx)(n.a,{href:"/develop/nova/introduction#important-note-about-submitting-a-transaction",children:"this section"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["In einigen F\xe4llen kann es bei der Bereitstellung des Skripts zu den Problemen ",(0,i.jsx)(n.strong,{children:"\u201eKein manueller Geb\xfchrengrenzwert festgelegt\u201c"})," oder ",(0,i.jsx)(n.strong,{children:"\u201eSch\xe4tzung der Geb\xfchren fehlgeschlagen\u201c"})," kommen. Please refer to ",(0,i.jsx)(n.a,{href:"/develop/nova/introduction#gas-estimation-issue",children:"this section"})," for the solution."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remix-12",src:t(9276).A+"",width:"350",height:"550"})}),"\n",(0,i.jsx)(n.p,{children:"Herzlichen Gl\xfcckwunsch, Sie haben gerade Ihren Smart Contract auf Autonomys Core EVM bereitgestellt!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1172:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-1-d0206fa95d420451ecdd17e94ef74788.png"},3710:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-10-1f9898d164cdb54a3eb26ddc2137d3e1.png"},3207:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-11-8fcd199526796d55c6cace291168a57f.png"},9276:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-12-c77f1688bb362b204a4095bca6fe75fc.png"},2639:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-2-00870623668f141197ba57f205a38ac5.png"},8713:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-3-6ecfd57605e0a80582c45edd1da2bef1.png"},3513:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-4-ebafc2bcd0f80ac8b135020f21b5c4ef.png"},7264:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-5-b0fd840e43bebb342b1c4b458f2e13ca.png"},1083:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-6-325d40445ae4448152be2fb307d30c1f.png"},6930:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-7-7596e211dcc6b1ec76a949572cc6d118.png"},1957:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-8-74aaeec76c2236665e0db5465bd5377a.png"},6044:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Remix-9-a04bacfa6217fc47e94f82673dfc3f33.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);