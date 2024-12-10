"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8945],{30285:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(74848),a=s(28453);const o={title:"Setting up MetaMask",sidebar_position:3,description:"Guide on setting up MetaMask for development purposes",slug:"/develop/auto-evm/metamask",keywords:["metamask","autonomys network"]},r=void 0,i={id:"develop/nova/setting-up-metamask",title:"Setting up MetaMask",description:"Guide on setting up MetaMask for development purposes",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/develop/nova/setting-up-metamask.md",sourceDirName:"develop/nova",slug:"/develop/auto-evm/metamask",permalink:"/pt/develop/auto-evm/metamask",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/setting-up-metamask.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Setting up MetaMask",sidebar_position:3,description:"Guide on setting up MetaMask for development purposes",slug:"/develop/auto-evm/metamask",keywords:["metamask","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"General Information",permalink:"/pt/develop/auto-evm/general"},next:{title:"Foundry",permalink:"/pt/develop/auto-evm/guides/foundry"}},d={},l=[{value:"Adding Autonomys RPC using MetaMask",id:"adding-autonomys-rpc-using-metamask",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"adding-autonomys-rpc-using-metamask",children:"Adding Autonomys RPC using MetaMask"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["You can use any EVM-compatible wallet, this guide will be using ",(0,n.jsx)(t.a,{href:"https://metamask.io/",children:(0,n.jsx)(t.strong,{children:"MetaMask"})})," wallet."]}),"\n",(0,n.jsx)(t.p,{children:"First, let\u2019s set up a MetaMask wallet and then go over connecting it to the Autonomys Development Network."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to the ",(0,n.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask Website"})," and download an extension for your browser.\nSelect your preferred language in the top-right corner.\nRead and agree to MetaMask's terms of use."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-1",src:s(48544).A+"",width:"350",height:"392"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Click on \u201cCreate a new wallet\u201d.\nRead a note on gathering usage data and either agree to collect your anonymized data, or skip this step. It does not affect the creation of a wallet."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-2",src:s(26875).A+"",width:"350",height:"468"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"On the next screen you will be asked to create a password. Remember to always set a secure password that\u2019s difficult to guess. Type your password twice before proceeding to the next step."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-3",src:s(12658).A+"",width:"350",height:"346"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["MetaMask automatically assesses the strength of your password.","\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"As a rule of thumb, you should set a strong password, meaning that it includes uppercase letters, lowercase letters, numbers and special characters."})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-4",src:s(85165).A+"",width:"350",height:"343"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Watch a video to learn more about your Secret Recovery Phrase before proceeding to the next step."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-5",src:s(45220).A+"",width:"350",height:"507"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["Have a look and write down your 12-word recovery phrase.","\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The wallet with the recovery phrase for this guide will be deleted right after the guide is complete."})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-6",src:s(99871).A+"",width:"350",height:"464"})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsx)(t.li,{children:"Confirm that you\u2019ve written down the recovery phrase by filling in the missing words of your recovery phrase."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-7",src:s(3542).A+"",width:"350",height:"332"})}),"\n",(0,n.jsxs)(t.ol,{start:"8",children:["\n",(0,n.jsx)(t.li,{children:"Now that your wallet is created, let\u2019s connect to the Autonomys Core EVM. Click on the Ethereum Mainnet logo and select Add Network."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-8",src:s(31825).A+"",width:"350",height:"357"})}),"\n",(0,n.jsxs)(t.ol,{start:"9",children:["\n",(0,n.jsx)(t.li,{children:"At the settings, click on \u201cAdd a network manually\u201d"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-9",src:s(17608).A+"",width:"1020",height:"650"})}),"\n",(0,n.jsxs)(t.ol,{start:"10",children:["\n",(0,n.jsx)(t.li,{children:"To connect to Autonomys RPC specify the values below"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Network Name: Autonomys EVM\nNew RPC URL: https://auto-evm-0.taurus.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: tAI3\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You're all set, ",(0,n.jsx)(t.strong,{children:"you have successfully configured your MetaMask wallet"})," and connected it to ",(0,n.jsx)(t.strong,{children:"Autonomys Core EVM"}),". To deploy your smart contract, you first need to get a small amount of ",(0,n.jsx)(t.strong,{children:"tAI3"}),"  tokens into your wallet. Please make sure to refer to the ",(0,n.jsx)(t.a,{href:"/develop/auto-evm/faucet",children:"faucet section"})," of the guide to learn more about getting test tokens."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},48544:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-1-1bded85eeaf89c0daae434256fd88045.png"},26875:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-2-5f7e7f060708ba123fddb26362fdfb50.png"},12658:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-3-75874afd8bf6c5d17ee3574ba8dad9aa.png"},85165:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-4-e5f5ecae7bf1f748b681d8dfc5721af0.png"},45220:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-5-79ee39d84c4ddb91e413dcac10f5fe04.png"},99871:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-6-565644d1cd952a85c58125e61d4d8cb0.png"},3542:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-7-132a39939fc2424e79b95b82a3b7d82e.png"},31825:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-8-8739cf366556bb8646500e0974e1d665.png"},17608:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-9-b2ffa9d0e03a49767d7db5b53b9c7710.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var n=s(96540);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);