"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9401],{6741:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(4848),a=s(8453);const o={title:"Setting up MetaMask",sidebar_position:4,description:"Guide on setting up MetaMask for development purposes",keywords:["metamask","autonomys network"]},i=void 0,r={id:"develop/nova/setting-up-metamask",title:"Setting up MetaMask",description:"Guide on setting up MetaMask for development purposes",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/develop/nova/setting-up-metamask.md",sourceDirName:"develop/nova",slug:"/develop/nova/setting-up-metamask",permalink:"/pl/docs/develop/nova/setting-up-metamask",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/setting-up-metamask.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Setting up MetaMask",sidebar_position:4,description:"Guide on setting up MetaMask for development purposes",keywords:["metamask","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"General information on dev tools and Autonomys EVM",permalink:"/pl/docs/develop/nova/general-information"},next:{title:"Autonomys faucet",permalink:"/pl/docs/develop/nova/faucet"}},d={},l=[{value:"Adding Autonomys RPC using MetaMask",id:"adding-autonomys-rpc-using-metamask",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"adding-autonomys-rpc-using-metamask",children:"Adding Autonomys RPC using MetaMask"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["You can use any EVM-compatible wallet, this guide will be using ",(0,n.jsx)(t.a,{href:"https://metamask.io/",children:(0,n.jsx)(t.strong,{children:"MetaMask"})})," wallet."]}),"\n",(0,n.jsx)(t.p,{children:"First, let\u2019s set up a MetaMask wallet and then go over connecting it to the Autonomys Development Network."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to the ",(0,n.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask Website"})," and download an extension for your browser.\nSelect your preferred language in the top-right corner.\nRead and agree to MetaMask's terms of use."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-1",src:s(8544).A+"",width:"350",height:"392"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Click on \u201cCreate a new wallet\u201d.\nRead a note on gathering usage data and either agree to collect your anonymized data, or skip this step. It does not affect the creation of a wallet."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-2",src:s(9256).A+"",width:"350",height:"468"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"On the next screen you will be asked to create a password. Remember to always set a secure password that\u2019s difficult to guess. Type your password twice before proceeding to the next step."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-3",src:s(2658).A+"",width:"350",height:"346"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["MetaMask automatically assesses the strength of your password.","\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"As a rule of thumb, you should set a strong password, meaning that it includes uppercase letters, lowercase letters, numbers and special characters."})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-4",src:s(5165).A+"",width:"350",height:"343"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Watch a video to learn more about your Secret Recovery Phrase before proceeding to the next step."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-5",src:s(5220).A+"",width:"350",height:"507"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["Have a look and write down your 12-word recovery phrase.","\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The wallet with the recovery phrase for this guide will be deleted right after the guide is complete."})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-6",src:s(9871).A+"",width:"350",height:"464"})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsx)(t.li,{children:"Confirm that you\u2019ve written down the recovery phrase by filling in the missing words of your recovery phrase."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-7",src:s(3542).A+"",width:"350",height:"332"})}),"\n",(0,n.jsxs)(t.ol,{start:"8",children:["\n",(0,n.jsx)(t.li,{children:"Now that your wallet is created, let\u2019s connect to the Autonomys Core EVM. Click on the Ethereum Mainnet logo and select Add Network."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-8",src:s(1825).A+"",width:"350",height:"357"})}),"\n",(0,n.jsxs)(t.ol,{start:"9",children:["\n",(0,n.jsx)(t.li,{children:"At the settings, click on \u201cAdd a network manually\u201d"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MetaMask-9",src:s(7608).A+"",width:"1020",height:"650"})}),"\n",(0,n.jsxs)(t.ol,{start:"10",children:["\n",(0,n.jsx)(t.li,{children:"To connect to Autonomys RPC specify the values below"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Network Name: Autonomys EVM\nNew RPC URL: https://nova-0.gemini-3h.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: TSSC\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You're all set, ",(0,n.jsx)(t.strong,{children:"you have successfully configured your MetaMask wallet"})," and connected it to ",(0,n.jsx)(t.strong,{children:"Autonomys Core EVM"}),". To deploy your smart contract, you first need to get a small amount of ",(0,n.jsx)(t.strong,{children:"TSSC"}),"  tokens into your wallet. Please make sure to refer to the ",(0,n.jsx)(t.a,{href:"/pl/docs/develop/nova/faucet",children:"faucet section"})," of the guide to learn more about getting test tokens."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8544:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-1-1bded85eeaf89c0daae434256fd88045.png"},9256:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-2-5f7e7f060708ba123fddb26362fdfb50.png"},2658:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-3-75874afd8bf6c5d17ee3574ba8dad9aa.png"},5165:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-4-e5f5ecae7bf1f748b681d8dfc5721af0.png"},5220:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-5-79ee39d84c4ddb91e413dcac10f5fe04.png"},9871:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-6-565644d1cd952a85c58125e61d4d8cb0.png"},3542:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-7-132a39939fc2424e79b95b82a3b7d82e.png"},1825:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-8-8739cf366556bb8646500e0974e1d665.png"},7608:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/MetaMask-9-b2ffa9d0e03a49767d7db5b53b9c7710.png"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(6540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);