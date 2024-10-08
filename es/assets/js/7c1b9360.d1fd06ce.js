"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4962],{8030:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var t=n(4848),a=n(8453);const l={title:"\u2728 SubWallet",sidebar_position:1,description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},i=void 0,r={id:"farming-&-staking/wallets/subwallet",title:"\u2728 SubWallet",description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/farming-&-staking/wallets/subwallet.md",sourceDirName:"farming-&-staking/wallets",slug:"/wallets/subwallet",permalink:"/es/wallets/subwallet",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/wallets/subwallet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u2728 SubWallet",sidebar_position:1,description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",slug:"/wallets/subwallet",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Autonomys Academy",permalink:"/es/learn/academy"},next:{title:"Polkadot.js",permalink:"/es/wallets/polkadot"}},c={},o=[{value:"Crear o importar una nueva cartera",id:"crear-o-importar-una-nueva-cartera",level:2},{value:"Connect wallet to Subspace Gemini 3h and find wallet public address",id:"connect-wallet-to-subspace-gemini-3h-and-find-wallet-public-address",level:2},{value:"Connect to Subspace via RPC",id:"connect-to-subspace-via-rpc",level:2},{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:2},{value:"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?",id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:["SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,t.jsx)(s.a,{href:"https://subwallet.app",children:"Subwallet Team"}),"."]}),(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,t.jsx)(s.a,{href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile",children:"Android"})," and ",(0,t.jsx)(s.a,{href:"https://testflight.apple.com/join/ZW3pUbWj",children:"IOS"}),"."]})})]}),"\n",(0,t.jsx)(s.p,{children:"SubWallet es una pasarela multiversa Web3 para el ecosistema de Substrate. Nuestra visi\xf3n es brindarle la forma m\xe1s sencilla y segura de conectarse a las aplicaciones basadas en blockchain."}),"\n",(0,t.jsxs)(s.p,{children:["To learn more about SubWallet visit their ",(0,t.jsx)(s.a,{href:"https://subwallet.app",children:"Website"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"crear-o-importar-una-nueva-cartera",children:"Crear o importar una nueva cartera"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Visit the ",(0,t.jsx)(s.a,{href:"https://subwallet.app/download.html",children:"SubWallet website"})," and Download your respective version."]}),"\n",(0,t.jsx)(s.li,{children:"Once extension is installed, open it."}),"\n",(0,t.jsxs)(s.li,{children:["La extensi\xf3n le dar\xe1 hasta cuatro opciones. You will most likely want to select ",(0,t.jsx)(s.code,{children:"Create a new account"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["If you would like to Import an ",(0,t.jsx)(s.strong,{children:"Existing"})," Wallet, then select ",(0,t.jsx)(s.code,{children:"Import an account"})]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-3",src:n(4764).A+"",width:"401",height:"614"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Enter and confirm the password for your account. Make sure to use a strong password."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-4",src:n(1175).A+"",width:"392",height:"606"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Write down your seed phrase in a secure place. You will need it if you ever forget a password, or decide to transfer the account to another PC."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-5",src:n(2862).A+"",width:"397",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Congratulations you have fully created your Substrate wallet with SubWallet."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-6",src:n(3873).A+"",width:"394",height:"605"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"connect-wallet-to-subspace-gemini-3h-and-find-wallet-public-address",children:"Connect wallet to Subspace Gemini 3h and find wallet public address"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Open SubWallet, click on ",(0,t.jsx)(s.em,{children:"Manage tokens"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"wallet-1",src:n(9656).A+"",width:"394",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"In a search bar, start typing the name of the network, e.g. Subspace Gemini 3h."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"wallet-2",src:n(4931).A+"",width:"392",height:"602"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go back to the first screen and you will see tSSC token with your balance.\nTo get your wallet public address, click on the tSSC token."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"wallet-3",src:n(3706).A+"",width:"398",height:"606"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["And then click on ",(0,t.jsx)(s.em,{children:"Copy"})," sign to copy the public address."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"wallet-4",src:n(7213).A+"",width:"392",height:"606"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"connect-to-subspace-via-rpc",children:"Connect to Subspace via RPC"}),"\n",(0,t.jsx)(s.p,{children:"Sometimes you won't see the network you would like to connect to in a list of available networks. In this case you can connect to Subspace Network manually via RPC.\nThis also can be helpful for in-development networks such as the Subspace Network as we have regularly changing RPC endpoints and versions of testnets, and soon various domains. A continuaci\xf3n encontrar\xe1s una sencilla gu\xeda sobre c\xf3mo a\xf1adir estas nuevas redes. Adem\xe1s, intentaremos mantener una lista actualizada de los puntos finales RPC activos a continuaci\xf3n para su desarrollo."}),"\n",(0,t.jsx)(s.admonition,{title:"RPC Endpoints",type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Gemini 3d Endpoint:"})," ",(0,t.jsx)(s.code,{children:"wss://rpc.gemini-3d.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:"Gemini 3e Endpoint:"})," ",(0,t.jsx)(s.code,{children:"wss://rpc.gemini-3e.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:"Gemini 3f Endpoint:"})," ",(0,t.jsx)(s.code,{children:"wss://rpc-1.gemini-3f.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:"Gemini 3g Endpoint:"})," ",(0,t.jsx)(s.code,{children:"wss://rpc-1.gemini-3g.subspace.network/ws"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:"Gemini 3h Endpoint:"})," ",(0,t.jsx)(s.code,{children:"wss://rpc-1.gemini-3h.subspace.network/ws"})]})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Open SubWallet, Select the 3 Line menu in the top left of the wallet.\n",(0,t.jsx)(s.img,{alt:"rpc-step-1",src:n(8116).A+"",width:"390",height:"597"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Inside the settings menu you will see the option to Manage Networks, click this.\n",(0,t.jsx)(s.img,{alt:"rpc-step-2",src:n(575).A+"",width:"390",height:"601"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Within the Manage Networks menu you will see a + in the top right corner, click this.\n",(0,t.jsx)(s.img,{alt:"rpc-step-3",src:n(5478).A+"",width:"389",height:"601"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"This will open the Import Network menu, where you will see a few options"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"URL de proveedor"}),"\n",(0,t.jsx)(s.li,{children:"Nombre de la red"}),"\n",(0,t.jsx)(s.li,{children:"S\xedmbolo"}),"\n",(0,t.jsx)(s.li,{children:"Explorador de bloques"}),"\n",(0,t.jsxs)(s.li,{children:["Crowdloan URL\nThe only required option is the Provider URL. Adding an explorer is optional. You can access the current ",(0,t.jsx)(s.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"}),".\nYou can refer to the ",(0,t.jsx)(s.em,{children:"RPC Endpoints"})," above for available provider URLs for the Subspace Network."]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Rellena la URL del proveedor, una vez que haga clic en esta casilla, marcar\xe1 la URL y agregar\xe1 el resto de la informaci\xf3n, luego haga clic en Guardar."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.em,{children:["In this example we will be using ",(0,t.jsx)(s.code,{children:"wss://rpc-1.gemini-3g.subspace.network/ws"})]})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"rpc-step-4",src:n(457).A+"",width:"390",height:"598"})}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"You will then be taken back to the network screen where you can then select your new network that was added."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"rpc-step-5",src:n(8352).A+"",width:"388",height:"599"})}),"\n",(0,t.jsx)(s.h2,{id:"soluci\xf3n-de-problemas",children:"Soluci\xf3n de problemas"}),"\n",(0,t.jsxs)(s.p,{children:["If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,t.jsx)(s.a,{href:"https://docs.subwallet.app/",children:"Official SubWallet Documentation"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera",children:"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["You can backup/export your wallet. Click on your ",(0,t.jsx)(s.em,{children:"Account"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-1",src:n(7792).A+"",width:"393",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Select the account you would like to backup and click on the ",(0,t.jsx)(s.em,{children:"edit"})," sign."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-2",src:n(7643).A+"",width:"396",height:"604"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Select ",(0,t.jsx)(s.em,{children:"Export"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-3",src:n(6514).A+"",width:"395",height:"600"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,t.jsx)(s.code,{children:"Seed phrase"}),", ",(0,t.jsx)(s.code,{children:"JSON"})," or ",(0,t.jsx)(s.code,{children:"QR code"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-4",src:n(2861).A+"",width:"393",height:"602"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4764:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-1-012b3581588a1b094e94586ec9d799af.png"},1175:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-2-e0be89f3f2f69013c1a597aba56f2e29.png"},2862:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-3-8295adbd69f55756b70b1fc6346ae31b.png"},3873:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-4-2c073c003cf6793cabf3ecc56f90436c.png"},9656:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-5-89a7ffb133280e9c37ccfa6cea5d32ee.png"},4931:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-6-e059bfa08d409f83caf225cab27baa26.png"},3706:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-7-f0e5efa229b6399b1d21b4d8d4e5b68a.png"},7213:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Subwallet-8-f9246c0a8faed16d2c4724dca1e6115c.png"},7792:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Trouble-1-0398518319f47fde28fd74d48b94143c.png"},7643:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Trouble-2-e52ad45173a855839ef193c1525446ce.png"},6514:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Trouble-3-725a70d609be58dbb8278aba56d1b430.png"},2861:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Trouble-4-ad7528e865d96808a936791762d1ef79.png"},8116:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/rpc-1-f19db823ba95f87b5b9e5de2530f3e0d.png"},575:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/rpc-2-2b66e51a0c8a5459c88d9ef4ddf3da8b.png"},5478:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/rpc-3-0837d16cbb87db79b0bdc3407e51ac11.png"},457:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/rpc-4-58f1f9a2d66a087ce7836b5c11d29cab.png"},8352:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/rpc-5-aa05c9a4aec125c7f84375aec0ca5f84.png"},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(6540);const a={},l=t.createContext(a);function i(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);