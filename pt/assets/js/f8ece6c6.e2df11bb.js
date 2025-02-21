"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2499],{14630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(74848),l=n(28453);const i={title:"\u2728 SubWallet",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Autonomys Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},o=void 0,a={id:"farming-&-staking/wallets/subwallet",title:"\u2728 SubWallet",description:"How to configure the SubWallet Substrate wallet for the Autonomys Network",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/farming-&-staking/wallets/subwallet.md",sourceDirName:"farming-&-staking/wallets",slug:"/wallets/subwallet",permalink:"/pt/wallets/subwallet",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/wallets/subwallet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u2728 SubWallet",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Autonomys Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/pt/wallets"},next:{title:"polkadot{.js} extension",permalink:"/pt/wallets/polkadot"}},r={},c=[{value:"Create or Import A New Wallet",id:"create-or-import-a-new-wallet",level:2},{value:"Connect wallet to Autonomys Mainnet and find wallet public address",id:"connect-wallet-to-autonomys-mainnet-and-find-wallet-public-address",level:2},{value:"Connect to Autonomys Network via RPC",id:"connect-to-autonomys-network-via-rpc",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How do I backup my wallet?",id:"how-do-i-backup-my-wallet",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,s.jsx)(t.a,{href:"https://subwallet.app",children:"Subwallet Team"}),"."]}),(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,s.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile",children:"Android"})," and ",(0,s.jsx)(t.a,{href:"https://testflight.apple.com/join/ZW3pUbWj",children:"IOS"}),"."]})})]}),"\n",(0,s.jsx)(t.p,{children:"SubWallet is a user-friendly Web3 Multiverse Gateway for the Substrate ecosystem. Our vision is to provide you with the simplest and most secure way to connect to blockchain-based applications."}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about SubWallet visit their ",(0,s.jsx)(t.a,{href:"https://subwallet.app",children:"Website"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"create-or-import-a-new-wallet",children:"Create or Import A New Wallet"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Visit the ",(0,s.jsx)(t.a,{href:"https://subwallet.app/download.html",children:"SubWallet website"})," and Download your respective version."]}),"\n",(0,s.jsx)(t.li,{children:"Once extension is installed, open it."}),"\n",(0,s.jsxs)(t.li,{children:["The extension will give you up to four options. You will most likely want to select ",(0,s.jsx)(t.code,{children:"Create a new account"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you would like to Import an ",(0,s.jsx)(t.strong,{children:"Existing"})," Wallet, then select ",(0,s.jsx)(t.code,{children:"Import an account"})]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"step-3",src:n(34764).A+"",width:"377",height:"573"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Carefully read and accept the Terms of Use."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"step-4",src:n(71175).A+"",width:"388",height:"565"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Enter and confirm the password for your account. Make sure to use a strong password."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"step-5",src:n(52862).A+"",width:"386",height:"584"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Review the information on how to keep your seed phrase secure. Click on each tip to confirm that you have read and understood it."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"step-6",src:n(93873).A+"",width:"386",height:"580"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsx)(t.li,{children:"Enter a name for your account."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"step-7",src:n(79656).A+"",width:"382",height:"587"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsx)(t.li,{children:"Write down your seed phrase in a secure place. You will need it if you ever forget your password, or decide to transfer the account to another PC."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"step-8",src:n(64931).A+"",width:"397",height:"603"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsx)(t.li,{children:"Congratulations you have successfully created your wallet with SubWallet."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"step-9",src:n(63706).A+"",width:"380",height:"593"})}),"\n",(0,s.jsx)(t.h2,{id:"connect-wallet-to-autonomys-mainnet-and-find-wallet-public-address",children:"Connect wallet to Autonomys Mainnet and find wallet public address"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open SubWallet, scroll all the way down and click on ",(0,s.jsx)(t.em,{children:"Manage tokens"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"wallet-1",src:n(47213).A+"",width:"400",height:"606"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"You can deselect all automatically enabled tokens for your convenience."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"wallet-2",src:n(7268).A+"",width:"396",height:"608"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["In the search bar, start typing the name of the network, e.g. Autonomys.\nYou will see two networks - ",(0,s.jsx)(t.strong,{children:"Mainnet"})," and ",(0,s.jsx)(t.strong,{children:"Taurus"})," test network."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"wallet-3",src:n(87926).A+"",width:"384",height:"591"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Return to the first screen, where you will see the AI3 token along with your balance. To view your wallet's public address, click on its name."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"wallet-4",src:n(84863).A+"",width:"381",height:"595"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["And then click on the ",(0,s.jsx)(t.em,{children:"Copy"})," icon to copy the public address."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"wallet-5",src:n(48004).A+"",width:"386",height:"588"})}),"\n",(0,s.jsx)(t.h2,{id:"connect-to-autonomys-network-via-rpc",children:"Connect to Autonomys Network via RPC"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes you won't see the network you would like to connect to in a list of available networks. In this case you can connect to Autonomys Network manually via RPC."}),"\n",(0,s.jsx)(t.p,{children:"This also can be helpful for in-development networks such as the Autonomys Network Testnet. Below you will find a simple guide on how to add these new networks. Additionally we will try and keep an updated list of active RPC endpoints below for development."}),"\n",(0,s.jsx)(t.admonition,{title:"RPC Endpoints",type:"info",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Gemini 3h Endpoint:"})," ",(0,s.jsx)(t.code,{children:"wss://rpc-1.gemini-3h.subspace.network/ws"}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.strong,{children:"Taurus Testnet Endpoint:"})," ",(0,s.jsx)(t.code,{children:"wss://rpc.taurus.subspace.foundation/ws"}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.strong,{children:"Mainnet Endpoint:"})," ",(0,s.jsx)(t.code,{children:"wss://rpc.mainnet.subspace.foundation/ws"})]})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Open SubWallet, select the 3 line menu in the top left of the wallet."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rpc-step-1",src:n(68116).A+"",width:"383",height:"593"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Inside the settings menu you will see the option to Manage Networks."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rpc-step-2",src:n(90575).A+"",width:"386",height:"596"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Within the Manage Networks menu you will see a + in the top right corner."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rpc-step-3",src:n(5478).A+"",width:"380",height:"592"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"This will open the Import Network menu, where you will see a few options"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Provider URL"}),"\n",(0,s.jsx)(t.li,{children:"Network Name"}),"\n",(0,s.jsx)(t.li,{children:"Symbol"}),"\n",(0,s.jsx)(t.li,{children:"Block explorer"}),"\n",(0,s.jsx)(t.li,{children:"Crowdloan URL"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The only required option is the Provider URL. Adding an explorer is optional. The default block explorer for the Autonomys Network is ",(0,s.jsx)(t.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can refer to the ",(0,s.jsx)(t.em,{children:"RPC Endpoints"})," above for available provider URLs for the Autonomys Network."]}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Fill in the provider URL, once you click out of this box it will check the URL and add the rest of the information, then click Save."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:["In this example we will be using the Taurus Testnet RPC ",(0,s.jsx)(t.code,{children:"wss://rpc.taurus.subspace.foundation/ws"})]})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rpc-step-4",src:n(10457).A+"",width:"384",height:"595"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"You will then be taken back to the network screen where you can then select your new network that was added."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rpc-step-5",src:n(78352).A+"",width:"384",height:"591"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(t.p,{children:["If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,s.jsx)(t.a,{href:"https://docs.subwallet.app/",children:"Official SubWallet Documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"how-do-i-backup-my-wallet",children:"How do I backup my wallet?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["You can backup/export your wallet. Click on your ",(0,s.jsx)(t.em,{children:"Account"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"trouble-1",src:n(87792).A+"",width:"393",height:"603"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the account you would like to backup and click on the ",(0,s.jsx)(t.em,{children:"edit"})," sign."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"trouble-2",src:n(57643).A+"",width:"396",height:"604"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.em,{children:"Export"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"trouble-3",src:n(36514).A+"",width:"395",height:"600"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,s.jsx)(t.code,{children:"Seed phrase"}),", ",(0,s.jsx)(t.code,{children:"JSON"})," or ",(0,s.jsx)(t.code,{children:"QR code"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"trouble-4",src:n(32861).A+"",width:"393",height:"602"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},34764:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-1-9315ecc335b341e8b800dcb0f21422a1.png"},87926:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-10-7ff68fba472c42974b71c43b0888cf14.png"},84863:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-11-7bacd8c4bae2eb9ae279bfb0c4708012.png"},48004:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-12-f9fb6be66f21630d865ada1ec588411d.png"},71175:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-2-4d736276f76461e2872abb579c472c12.png"},52862:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-3-13ae8a943ec0a85d78966671814bd2f0.png"},93873:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-4-014f54f78d8133722b69080865b00606.png"},79656:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-5-b3b46e5e8ee1898221364128a39e5783.png"},64931:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-6-8295adbd69f55756b70b1fc6346ae31b.png"},63706:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-7-0ac5795ad4fa0ed516b36e02a9e06957.png"},47213:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-8-899632549b645e5bcaba19f0008aa70e.png"},7268:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Subwallet-9-f23c5b29a553984cc044f24d669c6e07.png"},87792:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Trouble-1-0398518319f47fde28fd74d48b94143c.png"},57643:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Trouble-2-e52ad45173a855839ef193c1525446ce.png"},36514:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Trouble-3-725a70d609be58dbb8278aba56d1b430.png"},32861:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Trouble-4-ad7528e865d96808a936791762d1ef79.png"},68116:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rpc-1-4ce5f98b4e8c403387f65916e9faf5ee.png"},90575:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rpc-2-c3822fcec356932d9d6bd90a8f297597.png"},5478:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rpc-3-dacb4e4877b687ab57252d978d96bc3c.png"},10457:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rpc-4-3086be4f7cbcc4f2936794aa83d902b1.png"},78352:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rpc-5-77e8718c3ceb770018c3464e7457cbab.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const l={},i=s.createContext(l);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);