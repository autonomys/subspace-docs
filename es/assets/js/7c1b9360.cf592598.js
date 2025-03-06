"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4962],{58030:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(74848),l=s(28453);const a={title:"\u2728 SubWallet",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Autonomys Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},i=void 0,r={id:"farming-&-staking/wallets/subwallet",title:"\u2728 SubWallet",description:"How to configure the SubWallet Substrate wallet for the Autonomys Network",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/farming-&-staking/wallets/subwallet.md",sourceDirName:"farming-&-staking/wallets",slug:"/wallets/subwallet",permalink:"/es/wallets/subwallet",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/wallets/subwallet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u2728 SubWallet",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Autonomys Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/es/wallets"},next:{title:"Talisman",permalink:"/es/wallets/talisman"}},o={},c=[{value:"Crear o importar una nueva cartera",id:"crear-o-importar-una-nueva-cartera",level:2},{value:"Connect wallet to Autonomys Mainnet and find wallet public address",id:"connect-wallet-to-autonomys-mainnet-and-find-wallet-public-address",level:2},{value:"Connect to Autonomys Network via RPC",id:"connect-to-autonomys-network-via-rpc",level:2},{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:2},{value:"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?",id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,t.jsx)(n.a,{href:"https://subwallet.app",children:"Subwallet Team"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,t.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile",children:"Android"})," and ",(0,t.jsx)(n.a,{href:"https://testflight.apple.com/join/ZW3pUbWj",children:"IOS"}),"."]})})]}),"\n",(0,t.jsx)(n.p,{children:"SubWallet es una pasarela multiversa Web3 para el ecosistema de Substrate. Nuestra visi\xf3n es brindarle la forma m\xe1s sencilla y segura de conectarse a las aplicaciones basadas en blockchain."}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about SubWallet visit their ",(0,t.jsx)(n.a,{href:"https://subwallet.app",children:"Website"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"crear-o-importar-una-nueva-cartera",children:"Crear o importar una nueva cartera"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Visit the ",(0,t.jsx)(n.a,{href:"https://subwallet.app/download.html",children:"SubWallet website"})," and Download your respective version."]}),"\n",(0,t.jsx)(n.li,{children:"Once extension is installed, open it."}),"\n",(0,t.jsxs)(n.li,{children:["La extensi\xf3n le dar\xe1 hasta cuatro opciones. You will most likely want to select ",(0,t.jsx)(n.code,{children:"Create a new account"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you would like to Import an ",(0,t.jsx)(n.strong,{children:"Existing"})," Wallet, then select ",(0,t.jsx)(n.code,{children:"Import an account"})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-3",src:s(34764).A+"",width:"377",height:"573"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Carefully read and accept the Terms of Use."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-4",src:s(71175).A+"",width:"388",height:"565"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Enter and confirm the password for your account. Make sure to use a strong password."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-5",src:s(52862).A+"",width:"386",height:"584"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Review the information on how to keep your seed phrase secure. Click on each tip to confirm that you have read and understood it."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-6",src:s(93873).A+"",width:"386",height:"580"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Enter a name for your account."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-7",src:s(79656).A+"",width:"382",height:"587"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"Write down your seed phrase in a secure place. You will need it if you ever forget your password, or decide to transfer the account to another PC."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-8",src:s(64931).A+"",width:"397",height:"603"})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsx)(n.li,{children:"Congratulations you have successfully created your wallet with SubWallet."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"step-9",src:s(63706).A+"",width:"380",height:"593"})}),"\n",(0,t.jsx)(n.h2,{id:"connect-wallet-to-autonomys-mainnet-and-find-wallet-public-address",children:"Connect wallet to Autonomys Mainnet and find wallet public address"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open SubWallet, scroll all the way down and click on ",(0,t.jsx)(n.em,{children:"Manage tokens"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-1",src:s(47213).A+"",width:"400",height:"606"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"You can deselect all automatically enabled tokens for your convenience."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-2",src:s(7268).A+"",width:"396",height:"608"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["In the search bar, start typing the name of the network, e.g. Autonomys.\nYou will see two networks - ",(0,t.jsx)(n.strong,{children:"Mainnet"})," and ",(0,t.jsx)(n.strong,{children:"Taurus"})," test network."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-3",src:s(87926).A+"",width:"384",height:"591"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Return to the first screen, where you will see the AI3 token along with your balance. To view your wallet's public address, click on its name."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-4",src:s(84863).A+"",width:"381",height:"595"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["And then click on the ",(0,t.jsx)(n.em,{children:"Copy"})," icon to copy the public address."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"wallet-5",src:s(48004).A+"",width:"386",height:"588"})}),"\n",(0,t.jsx)(n.h2,{id:"connect-to-autonomys-network-via-rpc",children:"Connect to Autonomys Network via RPC"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you won't see the network you would like to connect to in a list of available networks. In this case you can connect to Autonomys Network manually via RPC."}),"\n",(0,t.jsx)(n.p,{children:"This also can be helpful for in-development networks such as the Autonomys Network Testnet. Below you will find a simple guide on how to add these new networks. Additionally we will try and keep an updated list of active RPC endpoints below for development."}),"\n",(0,t.jsx)(n.admonition,{title:"RPC Endpoints",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Gemini 3h Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc-1.gemini-3h.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Taurus Testnet Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc.taurus.subspace.foundation/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Mainnet Endpoint:"})," ",(0,t.jsx)(n.code,{children:"wss://rpc.mainnet.subspace.foundation/ws"})]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open SubWallet, select the 3 line menu in the top left of the wallet."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"rpc-step-1",src:s(68116).A+"",width:"383",height:"593"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Inside the settings menu you will see the option to Manage Networks."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"rpc-step-2",src:s(90575).A+"",width:"386",height:"596"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Within the Manage Networks menu you will see a + in the top right corner."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"rpc-step-3",src:s(5478).A+"",width:"380",height:"592"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This will open the Import Network menu, where you will see a few options"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provider URL"}),"\n",(0,t.jsx)(n.li,{children:"Network Name"}),"\n",(0,t.jsx)(n.li,{children:"Symbol"}),"\n",(0,t.jsx)(n.li,{children:"Block explorer"}),"\n",(0,t.jsx)(n.li,{children:"Crowdloan URL"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The only required option is the Provider URL. Adding an explorer is optional. The default block explorer for the Autonomys Network is ",(0,t.jsx)(n.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can refer to the ",(0,t.jsx)(n.em,{children:"RPC Endpoints"})," above for available provider URLs for the Autonomys Network."]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Rellena la URL del proveedor, una vez que haga clic en esta casilla, marcar\xe1 la URL y agregar\xe1 el resto de la informaci\xf3n, luego haga clic en Guardar."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["In this example we will be using the Taurus Testnet RPC ",(0,t.jsx)(n.code,{children:"wss://rpc.taurus.subspace.foundation/ws"})]})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"rpc-step-4",src:s(10457).A+"",width:"384",height:"595"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You will then be taken back to the network screen where you can then select your new network that was added."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"rpc-step-5",src:s(78352).A+"",width:"384",height:"591"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"soluci\xf3n-de-problemas",children:"Soluci\xf3n de problemas"}),"\n",(0,t.jsxs)(n.p,{children:["If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,t.jsx)(n.a,{href:"https://docs.subwallet.app/",children:"Official SubWallet Documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera",children:"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can backup/export your wallet. Click on your ",(0,t.jsx)(n.em,{children:"Account"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-1",src:s(87792).A+"",width:"393",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the account you would like to backup and click on the ",(0,t.jsx)(n.em,{children:"edit"})," sign."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-2",src:s(57643).A+"",width:"396",height:"604"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.em,{children:"Export"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-3",src:s(36514).A+"",width:"395",height:"600"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,t.jsx)(n.code,{children:"Seed phrase"}),", ",(0,t.jsx)(n.code,{children:"JSON"})," or ",(0,t.jsx)(n.code,{children:"QR code"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trouble-4",src:s(32861).A+"",width:"393",height:"602"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},34764:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-1-9315ecc335b341e8b800dcb0f21422a1.png"},87926:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-10-7ff68fba472c42974b71c43b0888cf14.png"},84863:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-11-7bacd8c4bae2eb9ae279bfb0c4708012.png"},48004:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-12-f9fb6be66f21630d865ada1ec588411d.png"},71175:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-2-4d736276f76461e2872abb579c472c12.png"},52862:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-3-13ae8a943ec0a85d78966671814bd2f0.png"},93873:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-4-014f54f78d8133722b69080865b00606.png"},79656:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-5-b3b46e5e8ee1898221364128a39e5783.png"},64931:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-6-8295adbd69f55756b70b1fc6346ae31b.png"},63706:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-7-0ac5795ad4fa0ed516b36e02a9e06957.png"},47213:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-8-899632549b645e5bcaba19f0008aa70e.png"},7268:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Subwallet-9-f23c5b29a553984cc044f24d669c6e07.png"},87792:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-1-0398518319f47fde28fd74d48b94143c.png"},57643:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-2-e52ad45173a855839ef193c1525446ce.png"},36514:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-3-725a70d609be58dbb8278aba56d1b430.png"},32861:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Trouble-4-ad7528e865d96808a936791762d1ef79.png"},68116:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-1-4ce5f98b4e8c403387f65916e9faf5ee.png"},90575:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-2-c3822fcec356932d9d6bd90a8f297597.png"},5478:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-3-dacb4e4877b687ab57252d978d96bc3c.png"},10457:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-4-3086be4f7cbcc4f2936794aa83d902b1.png"},78352:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rpc-5-77e8718c3ceb770018c3464e7457cbab.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(96540);const l={},a=t.createContext(l);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);