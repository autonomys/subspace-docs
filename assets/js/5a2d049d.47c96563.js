"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(b,r(r({ref:t},c),{},{components:a})):n.createElement(b,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const l={title:"SubWallet (Recommended)",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},r=void 0,i={unversionedId:"protocol/wallets/subwallet",id:"protocol/wallets/subwallet",title:"SubWallet (Recommended)",description:"How to configure the SubWallet Substrate wallet for the Subspace Network",source:"@site/docs/protocol/wallets/subwallet.md",sourceDirName:"protocol/wallets",slug:"/protocol/wallets/subwallet",permalink:"/docs/pre-release/protocol/wallets/subwallet",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/protocol/wallets/subwallet.md",tags:[],version:"current",lastUpdatedBy:"Justin",lastUpdatedAt:1690299836,formattedLastUpdatedAt:"Jul 25, 2023",sidebarPosition:1,frontMatter:{title:"SubWallet (Recommended)",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/docs/pre-release/category/wallets"},next:{title:"Polkadot.js",permalink:"/docs/pre-release/protocol/wallets/polkadot"}},p={},s=[{value:"Create or Import A New Wallet",id:"create-or-import-a-new-wallet",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How can I find my Public Address?",id:"how-can-i-find-my-public-address",level:3},{value:"I Dont see <code>Subspace Testnet</code> or any Subspace Networks as an option in chain settings",id:"i-dont-see-subspace-testnet-or-any-subspace-networks-as-an-option-in-chain-settings",level:3},{value:"How do I backup my wallet?",id:"how-do-i-backup-my-wallet",level:3}],c={toc:s};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,o.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Subwallet Team"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,o.kt)("a",{parentName:"em",href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile&pli=1"},"Android")," and ",(0,o.kt)("a",{parentName:"em",href:"https://testflight.apple.com/join/ZW3pUbWj"},"IOS"),"."))),(0,o.kt)("p",null,"SubWallet is a user-friendly Web3 Multiverse Gateway for the Substrate ecosystem. Our vision is to provide you with the simplest and most secure way to connect to blockchain-based applications. "),(0,o.kt)("p",null,"To learn more about SubWallet visit their ",(0,o.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Website"),"."),(0,o.kt)("h2",{id:"create-or-import-a-new-wallet"},"Create or Import A New Wallet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://subwallet.app/download.html"},"SubWallet website")," and Download your respective version. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once extension is installed, Open it and click ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", & ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Started")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"step-2",src:a(340).Z,width:"379",height:"500"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The extension will give you up to four options. You will most likely want to select ",(0,o.kt)("inlineCode",{parentName:"p"},"Create New Account")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you would like to Import an ",(0,o.kt)("strong",{parentName:"p"},"Existing")," Wallet, then select ",(0,o.kt)("inlineCode",{parentName:"p"},"Import from pre-existing seed"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"step-3",src:a(9233).Z,width:"380",height:"500"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you create a new account you will see the following."),(0,o.kt)("admonition",{parentName:"li",title:"Info",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"SubWallet supports Substrate and EVM, so when a wallet is generated you will see the top option which is simply the substrate chain information, then a section labeled EVM which is evm wallet information. ",(0,o.kt)("strong",{parentName:"p"},"For subspace, we currently have no EVM integrations so you can disregard this portion."))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"step-4",src:a(992).Z,width:"384",height:"500"})))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check which accounts you would like to import, and check ",(0,o.kt)("inlineCode",{parentName:"p"},"I have saved my mnemonic seed safely")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")),(0,o.kt)("admonition",{parentName:"li",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"MAKE SURE YOU STORE THIS SECURELY, AND NEVER SHARE IT")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"step-5",src:a(7138).Z,width:"385",height:"500"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next we will create a password for our wallet. (Make sure not to reuse passwords!)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"step-6",src:a(5336).Z,width:"382",height:"500"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next Subwallet will ask you which networks you want to enable, ",(0,o.kt)("strong",{parentName:"p"},"Scroll down and select the Subspace Testnet/s")," including any other substrate based networks you may like to use in the future, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"step-7",src:a(3331).Z,width:"385",height:"500"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Congratulations you have fully created your substrate wallet with subwallet! "))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subwallet.app/"},"Official SubWallet Documentation.")," We have included some basic FAQ's below."),(0,o.kt)("h3",{id:"how-can-i-find-my-public-address"},"How can I find my Public Address?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can see your default substrate public address right next to your Wallet name inside the extension"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{alt:"trouble-1",src:a(2990).Z,width:"461",height:"120"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can see your Subspace Testnet public address via the dropdown menu and setting the chain to ",(0,o.kt)("inlineCode",{parentName:"p"},"Subspace Testnet"),", once you done you will see the public address now starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"st")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{alt:"step-8",src:a(1932).Z,width:"387",height:"500"})))),(0,o.kt)("h3",{id:"i-dont-see-subspace-testnet-or-any-subspace-networks-as-an-option-in-chain-settings"},"I Dont see ",(0,o.kt)("inlineCode",{parentName:"h3"},"Subspace Testnet")," or any Subspace Networks as an option in chain settings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sometimes when you first install or update the Substrate wallet you will need to update the wallet metadata.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Subspace/Polkadot Explorer here: ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer"},"Polkadot/Substrate Portal"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will be prompted to allow the extension to connect, select which account you want to connect and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-4",src:a(3394).Z,width:"440",height:"577"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Webpage, click ",(0,o.kt)("inlineCode",{parentName:"p"},"settings")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-5",src:a(3067).Z,width:"676",height:"500"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-6",src:a(8434).Z,width:"690",height:"325"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Update Metadata")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-3",src:a(3046).Z,width:"1745",height:"304"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will get a popup from the extension telling you that your metadata is out of date, confirming that you want to update. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Approve")," "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-4",src:a(1671).Z,width:"437",height:"562"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will now see ",(0,o.kt)("inlineCode",{parentName:"p"},"Subspace Testnet")," as an option on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Allow use on any chain")," dropdown. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-9",src:a(9279).Z,width:"455",height:"593"})))),(0,o.kt)("h3",{id:"how-do-i-backup-my-wallet"},"How do I backup my wallet?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can backup/export your wallet via the ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," menu, then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Export Account")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-6",src:a(4111).Z,width:"450",height:"595"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,o.kt)("inlineCode",{parentName:"p"},"Private Key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"QR"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"trouble-7",src:a(7011).Z,width:"450",height:"499"})))))}d.isMDXComponent=!0},3067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-5-62b1e8b520c8a979e807ef157c0079f0.png"},8434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-6-223ed4f743831ec30d3d36613d129d10.png"},9233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-85ab2ea01eafaadb5cdf56ec61d24bcd.png"},5336:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-password-a08b47bd54b8d59a2a7af05f3241d79d.png"},1932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/final-page-54dc7c79e35ae06e616b7d9e6e8e077c.png"},7138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/next-step-51be41c737d29e0d089da025cade5f77.png"},992:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-account-7864769ce8ebe864df94443be23f2b95.png"},3331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-network-4776cabb78512f4d02d2ef344ba3c0d3.png"},2990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-1-fe459c3b6e6bafd0e753882baabcbe38.png"},3394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-2-e41cc2c8af6e8e43bd604977b9ff801d.png"},3046:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-3-b668815c18b07794808367ee1be6651c.png"},1671:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-4-1f216abe64bc8cd2a3a5a25c20b76920.png"},9279:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-5-396d8be0fb5f4cb3f61b7a390c251b64.png"},4111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-6-8b0ec2434f9059900d6a179c6dcca273.png"},7011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-7-6d42d3053e88f0934d367dec95c8fbb6.png"},340:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/welcome-back-49395dbb75b0b059794545a42389e9eb.png"}}]);