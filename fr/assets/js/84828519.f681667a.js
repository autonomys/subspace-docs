"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7262],{5318:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(4848),l=s(8453);const i={title:"\u2728 SubWallet",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},a=void 0,o={id:"farming-&-staking/wallets/subwallet",title:"\u2728 SubWallet",description:"How to configure the SubWallet Substrate wallet for the Subspace Network",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/wallets/subwallet.md",sourceDirName:"farming-&-staking/wallets",slug:"/wallets/subwallet",permalink:"/fr/wallets/subwallet",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/wallets/subwallet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u2728 SubWallet",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Autonomys Academy",permalink:"/fr/learn/academy"},next:{title:"Polkadot.js",permalink:"/fr/wallets/polkadot"}},r={},c=[{value:"Create or Import A New Wallet",id:"create-or-import-a-new-wallet",level:2},{value:"Connect wallet to Subspace Gemini 3h and find wallet public address",id:"connect-wallet-to-subspace-gemini-3h-and-find-wallet-public-address",level:2},{value:"Connect to Subspace via RPC",id:"connect-to-subspace-via-rpc",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How do I backup my wallet?",id:"how-do-i-backup-my-wallet",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,t.jsx)(n.a,{href:"https://subwallet.app",children:"Subwallet Team"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,t.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile",children:"Android"})," and ",(0,t.jsx)(n.a,{href:"https://testflight.apple.com/join/ZW3pUbWj",children:"IOS"}),"."]})})]}),"\n",(0,t.jsx)(n.p,{children:"SubWallet is a user-friendly Web3 Multiverse Gateway for the Substrate ecosystem. Our vision is to provide you with the simplest and most secure way to connect to blockchain-based applications."}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about SubWallet visit their ",(0,t.jsx)(n.a,{href:"https://subwallet.app",children:"Website"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"create-or-import-a-new-wallet",children:"Create or Import A New Wallet"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Visit the ",(0,t.jsx)(n.a,{href:"https://subwallet.app/download.html",children:"SubWallet website"})," and Download your respective version."]}),"\n",(0,t.jsx)(n.li,{children:"Once extension is installed, open it."}),"\n",(0,t.jsxs)(n.li,{children:["The extension will give you up to four options. You will most likely want to select ",(0,t.jsx)(n.code,{children:"Create a new account"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you would like to Import an ",(0,t.jsx)(n.strong,{children:"Existing"})," Wallet, then select ",(0,t.jsx)(n.code,{children:"Import an account"})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-3",src:s(4764).A+"",width:"401",height:"614"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enter and confirm the password for your account. Make sure to use a strong password."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-4",src:s(1175).A+"",width:"392",height:"606"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Write down your seed phrase in a secure place. You will need it if you ever forget a password, or decide to transfer the account to another PC."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-5",src:s(2862).A+"",width:"397",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Congratulations you have fully created your Substrate wallet with SubWallet."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-6",src:s(3873).A+"",width:"394",height:"605"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"connect-wallet-to-subspace-gemini-3h-and-find-wallet-public-address",children:"Connect wallet to Subspace Gemini 3h and find wallet public address"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open SubWallet, click on ",(0,t.jsx)(n.em,{children:"Manage tokens"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-1",src:s(9656).A+"",width:"394",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In a search bar, start typing the name of the network, e.g. Subspace Gemini 3h."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-2",src:s(4931).A+"",width:"392",height:"602"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Go back to the first screen and you will see tSSC token with your balance.\nTo get your wallet public address, click on the tSSC token."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-3",src:s(3706).A+"",width:"398",height:"606"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["And then click on ",(0,t.jsx)(n.em,{children:"Copy"})," sign to copy the public address."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-4",src:s(7213).A+"",width:"392",height:"606"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"connect-to-subspace-via-rpc",children:"Connect to Subspace via RPC"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you won't see the network you would like to connect to in a list of available networks. In this case you can connect to Subspace Network manually via RPC.\nThis also can be helpful for in-development networks such as the Subspace Network as we have regularly changing RPC endpoints and versions of testnets, and soon various domains. Below you will find a simple guide on how to add these new networks. Additionally we will try and keep an updated list of active RPC endpoints below for development."}),"\n",(0,t.jsx)(n.admonition,{title:"RPC Endpoints",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Gemini 3d Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc.gemini-3d.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Gemini 3e Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc.gemini-3e.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Gemini 3f Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc-1.gemini-3f.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Gemini 3g Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc-1.gemini-3g.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Gemini 3h Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc-1.gemini-3h.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Taurus Testnet Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc.taurus.subspace.foundation/ws"})]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open SubWallet, Select the 3 Line menu in the top left of the wallet.\n",(0,t.jsx)(n.img,{alt:"rpc-step-1",src:s(8116).A+"",width:"390",height:"597"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Inside the settings menu you will see the option to Manage Networks, click this.\n",(0,t.jsx)(n.img,{alt:"rpc-step-2",src:s(575).A+"",width:"390",height:"601"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Within the Manage Networks menu you will see a + in the top right corner, click this.\n",(0,t.jsx)(n.img,{alt:"rpc-step-3",src:s(5478).A+"",width:"389",height:"601"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This will open the Import Network menu, where you will see a few options"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provider URL"}),"\n",(0,t.jsx)(n.li,{children:"Network Name"}),"\n",(0,t.jsx)(n.li,{children:"Symbol"}),"\n",(0,t.jsx)(n.li,{children:"Block explorer"}),"\n",(0,t.jsxs)(n.li,{children:["Crowdloan URL\nThe only required option is the Provider URL. Adding an explorer is optional. You can access the current ",(0,t.jsx)(n.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"}),".\nYou can refer to the ",(0,t.jsx)(n.em,{children:"RPC Endpoints"})," above for available provider URLs for the Subspace Network."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Fill in the provider URL, once you click out of this box it will check the URL and add the rest of the information, then click Save."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["In this example we will be using ",(0,t.jsx)(n.code,{children:"https://nova-0.gemini-3h.subspace.network/ws"})]})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"rpc-step-4",src:s(457).A+"",width:"390",height:"598"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"You will then be taken back to the network screen where you can then select your new network that was added."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"rpc-step-5",src:s(8352).A+"",width:"388",height:"599"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,t.jsx)(n.a,{href:"https://docs.subwallet.app/",children:"Official SubWallet Documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-backup-my-wallet",children:"How do I backup my wallet?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can backup/export your wallet. Click on your ",(0,t.jsx)(n.em,{children:"Account"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-1",src:s(7792).A+"",width:"393",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the account you would like to backup and click on the ",(0,t.jsx)(n.em,{children:"edit"})," sign."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-2",src:s(7643).A+"",width:"396",height:"604"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.em,{children:"Export"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-3",src:s(6514).A+"",width:"395",height:"600"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,t.jsx)(n.code,{children:"Seed phrase"}),", ",(0,t.jsx)(n.code,{children:"JSON"})," or ",(0,t.jsx)(n.code,{children:"QR code"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-4",src:s(2861).A+"",width:"393",height:"602"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4764:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-1-012b3581588a1b094e94586ec9d799af.png"},1175:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-2-e0be89f3f2f69013c1a597aba56f2e29.png"},2862:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-3-8295adbd69f55756b70b1fc6346ae31b.png"},3873:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-4-2c073c003cf6793cabf3ecc56f90436c.png"},9656:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-5-89a7ffb133280e9c37ccfa6cea5d32ee.png"},4931:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-6-e059bfa08d409f83caf225cab27baa26.png"},3706:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-7-f0e5efa229b6399b1d21b4d8d4e5b68a.png"},7213:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-8-f9246c0a8faed16d2c4724dca1e6115c.png"},7792:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-1-0398518319f47fde28fd74d48b94143c.png"},7643:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-2-e52ad45173a855839ef193c1525446ce.png"},6514:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-3-725a70d609be58dbb8278aba56d1b430.png"},2861:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-4-ad7528e865d96808a936791762d1ef79.png"},8116:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-1-f19db823ba95f87b5b9e5de2530f3e0d.png"},575:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-2-2b66e51a0c8a5459c88d9ef4ddf3da8b.png"},5478:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-3-0837d16cbb87db79b0bdc3407e51ac11.png"},457:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-4-58f1f9a2d66a087ce7836b5c11d29cab.png"},8352:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-5-aa05c9a4aec125c7f84375aec0ca5f84.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const l={},i=t.createContext(l);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);