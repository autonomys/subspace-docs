"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6362],{90842:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=n(74848),i=n(28453);const d={title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 polkadot{.js}",sidebar_position:4,description:"\u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Substrate \u043a\u043e\u0448\u0435\u043b\u0435\u043a Polkadot \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0441\u0435\u0442\u0438 Autonomys",slug:"/wallets/polkadot",keywords:["\u0424\u0430\u0440\u043c\u0435\u0440","\u0424\u0430\u0440\u043c\u0438\u043d\u0433","CLI","polkadot.js","\u041a\u043e\u0448\u0435\u043b\u0435\u043a"]},l=void 0,a={id:"farming-&-staking/wallets/polkadot",title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 polkadot{.js}",description:"\u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Substrate \u043a\u043e\u0448\u0435\u043b\u0435\u043a Polkadot \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0441\u0435\u0442\u0438 Autonomys",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/wallets/polkadot.md",sourceDirName:"farming-&-staking/wallets",slug:"/wallets/polkadot",permalink:"/ru/wallets/polkadot",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/wallets/polkadot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 polkadot{.js}",sidebar_position:4,description:"\u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Substrate \u043a\u043e\u0448\u0435\u043b\u0435\u043a Polkadot \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0441\u0435\u0442\u0438 Autonomys",slug:"/wallets/polkadot",keywords:["\u0424\u0430\u0440\u043c\u0435\u0440","\u0424\u0430\u0440\u043c\u0438\u043d\u0433","CLI","polkadot.js","\u041a\u043e\u0448\u0435\u043b\u0435\u043a"]},sidebar:"tutorialSidebar",previous:{title:"FoxWallet",permalink:"/ru/wallets/foxwallet"},next:{title:"Farming",permalink:"/ru/category/farming"}},o={},c=[{value:"Polkadot.js - \u044d\u0442\u043e Substrate/EVM-\u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439 Substrate \u0438 Polkadota/Kusama, \u0430 \u0438\u043c\u0435\u043d\u043d\u043e, \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b Parity.",id:"polkadotjs---\u044d\u0442\u043e-substrateevm-\u043a\u043e\u0448\u0435\u043b\u0435\u043a-\u043e\u0442-\u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439-substrate-\u0438-polkadotakusama-\u0430-\u0438\u043c\u0435\u043d\u043d\u043e-\u043e\u0442-\u043a\u043e\u043c\u0430\u043d\u0434\u044b-parity",level:2},{value:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u043a\u0438",id:"\u0438\u043c\u043f\u043e\u0440\u0442-\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439-\u043c\u043d\u0435\u043c\u043e\u043d\u0438\u043a\u0438",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",level:2},{value:"\u041a\u0430\u043a \u044f \u043c\u043e\u0433\u0443 \u043d\u0430\u0439\u0442\u0438 \u0441\u0432\u043e\u0439 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441?",id:"\u043a\u0430\u043a-\u044f-\u043c\u043e\u0433\u0443-\u043d\u0430\u0439\u0442\u0438-\u0441\u0432\u043e\u0439-\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439-\u0430\u0434\u0440\u0435\u0441",level:3},{value:"\u042f \u043d\u0435 \u0432\u0438\u0436\u0443 <code>Autonomys mainnet</code> \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0442\u0438 Autonomys \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043e\u043f\u0446\u0438\u0438 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0441\u0435\u0442\u0438",id:"\u044f-\u043d\u0435-\u0432\u0438\u0436\u0443-autonomys-mainnet-\u0438\u043b\u0438-\u0434\u0440\u0443\u0433\u0438\u0435-\u0441\u0435\u0442\u0438-autonomys-\u0432-\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435-\u043e\u043f\u0446\u0438\u0438-\u0432-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445-\u0441\u0435\u0442\u0438",level:3},{value:"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043c\u043e\u0435\u0433\u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430?",id:"\u043a\u0430\u043a-\u0441\u0434\u0435\u043b\u0430\u0442\u044c-\u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e-\u043a\u043e\u043f\u0438\u044e-\u043c\u043e\u0435\u0433\u043e-\u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430",level:3}];function r(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 polkadot.js - \u044d\u0442\u043e Substrate/EVM \u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c\u0438 Substrate \u0438 Polkadot/Kusama - ",(0,t.jsx)(s.a,{href:"https://www.parity.io/",children:"Parity Team"}),"."]})}),"\n",(0,t.jsx)(s.p,{children:"\u042d\u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a. \u042d\u0442\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043e \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e \u043e\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u043c \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u043c Substrate, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u043c \u0432\u0441\u0435 \u0441\u0435\u0442\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Substrate. \u042d\u0442\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e Metamask \u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0443 \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0445 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0412\u044b, \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u0440\u0430\u043d\u0435\u0435."}),"\n",(0,t.jsx)(s.h2,{id:"polkadotjs---\u044d\u0442\u043e-substrateevm-\u043a\u043e\u0448\u0435\u043b\u0435\u043a-\u043e\u0442-\u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439-substrate-\u0438-polkadotakusama-\u0430-\u0438\u043c\u0435\u043d\u043d\u043e-\u043e\u0442-\u043a\u043e\u043c\u0430\u043d\u0434\u044b-parity",children:"Polkadot.js - \u044d\u0442\u043e Substrate/EVM-\u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439 Substrate \u0438 Polkadota/Kusama, \u0430 \u0438\u043c\u0435\u043d\u043d\u043e, \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b Parity."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442 ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/extension/",children:"Polkadot.js"})," \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0434\u043b\u044f Chrome \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u0432\u0441\u0435\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 Chromium, \u0442\u0430\u043a\u0438\u0445, \u043a\u0430\u043a Brave, Vivaldi, & Edge"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0435\u0433\u043e. \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-2",src:n(78058).A+"",width:"560",height:"600"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 +, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-3",src:n(8641).A+"",width:"560",height:"600"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0432\u0430\u043c \u0432\u0430\u0448\u0443 \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e \u0438\u0437 12 \u0441\u043b\u043e\u0432."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"danger",children:(0,t.jsx)(s.p,{children:"\u0423\u0411\u0415\u0414\u0418\u0422\u0415\u0421\u042c, \u0427\u0422\u041e \u0412\u042b \u041d\u0410\u0414\u0415\u0416\u041d\u041e \u0425\u0420\u0410\u041d\u0418\u0422\u0415 \u042d\u0422\u0423 \u0418\u041d\u0424\u041e\u0420\u041c\u0410\u0426\u0418\u042e \u0418 \u041d\u0418\u041a\u041e\u0413\u0414\u0410 \u041d\u0415 \u0414\u0415\u041b\u0418\u0422\u0415\u0421\u042c \u0415\u042e"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-4",src:n(87512).A+"",width:"560",height:"600"})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0412\u044b \u043d\u0430\u0434\u0435\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u0441\u0438\u0434-\u0444\u0440\u0430\u0437\u0443, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0444\u043b\u0430\u0436\u043e\u043a \u201cI have saved my mnemonic seed safely\u201d \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "Next Step"'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0448\u0430\u0433\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u201cAdd the account with the generated seed\u201d"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-6",src:n(20151).A+"",width:"560",height:"600"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0412\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043a\u043e\u0448\u0435\u043b\u0435\u043a polkadot.js!"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-7",src:n(90926).A+"",width:"560",height:"600"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u0438\u043c\u043f\u043e\u0440\u0442-\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439-\u043c\u043d\u0435\u043c\u043e\u043d\u0438\u043a\u0438",children:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u043a\u0438"}),"\n",(0,t.jsx)(s.p,{children:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0437\u0430\u0434\u0430\u0442\u044c \u200b\u200b\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u043e\u0433 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c Subspace-Desktop. \u0412 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0412\u0430\u043c \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u044d\u0442\u0430 \u0447\u0430\u0441\u0442\u044c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 (\u0441\u043c. ",(0,t.jsx)(s.a,{href:"#create-a-new-wallet",children:"\u0448\u0430\u0433 1"})," \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430)"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0435\u0433\u043e \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"+"}),", \u0437\u0430\u0442\u0435\u043c ",(0,t.jsx)(s.code,{children:"Import account from pre-existing seed"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-2a",src:n(92776).A+"",width:"563",height:"603"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443 \u0438\u0437 12 \u0441\u043b\u043e\u0432 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"Next"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-3a",src:n(28479).A+"",width:"560",height:"600"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u041d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0448\u0430\u0433\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"Add the account with the supplied seed"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"step-4a",src:n(21890).A+"",width:"560",height:"600"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"}),"\n",(0,t.jsxs)(s.p,{children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0438\u0441\u044c \u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c\u0438 \u0438\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u043e \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u0445 Polkadot.js, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/",children:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 Polkadot.js"}),". \u041d\u0438\u0436\u0435 \u043c\u044b \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b."]}),"\n",(0,t.jsx)(s.h3,{id:"\u043a\u0430\u043a-\u044f-\u043c\u043e\u0433\u0443-\u043d\u0430\u0439\u0442\u0438-\u0441\u0432\u043e\u0439-\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439-\u0430\u0434\u0440\u0435\u0441",children:"\u041a\u0430\u043a \u044f \u043c\u043e\u0433\u0443 \u043d\u0430\u0439\u0442\u0438 \u0441\u0432\u043e\u0439 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441?"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0441\u0432\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 substrate-\u0430\u0434\u0440\u0435\u0441 \u043f\u0440\u044f\u043c\u043e \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u0412\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \u0432 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0438"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-1",src:n(40339).A+"",width:"562",height:"193"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 Autonomys Mainnet \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u043d\u044e ",(0,t.jsx)(s.code,{children:"..."}),", \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0432 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u043c \u0441\u043f\u0438\u0441\u043a\u0435 ",(0,t.jsx)(s.code,{children:"Allow Use on Any Chain"})," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,t.jsx)(s.code,{children:"Autonomys Mainnet"}),", \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u0445\u043e\u0434\u0430 \u0412\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 ",(0,t.jsx)(s.code,{children:"su"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-2",src:n(78232).A+"",width:"561",height:"603"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-10",src:n(6875).A+"",width:"560",height:"187"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"\u044f-\u043d\u0435-\u0432\u0438\u0436\u0443-autonomys-mainnet-\u0438\u043b\u0438-\u0434\u0440\u0443\u0433\u0438\u0435-\u0441\u0435\u0442\u0438-autonomys-\u0432-\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435-\u043e\u043f\u0446\u0438\u0438-\u0432-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445-\u0441\u0435\u0442\u0438",children:["\u042f \u043d\u0435 \u0432\u0438\u0436\u0443 ",(0,t.jsx)(s.code,{children:"Autonomys mainnet"})," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0442\u0438 Autonomys \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043e\u043f\u0446\u0438\u0438 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0441\u0435\u0442\u0438"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435, \u0438\u043d\u043e\u0433\u0434\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0438\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 Substrate \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-3",src:n(15713).A+"",width:"563",height:"922"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043e\u0431\u043e\u0437\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044f Subspace/Polkadot \u0437\u0434\u0435\u0441\u044c: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.mainnet.subspace.foundation%2Fws#/explorer",children:"\u041f\u043e\u0440\u0442\u0430\u043b Polkadot/Substrate"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0412\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"Connect 1 account(s)"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-4",src:n(97998).A+"",width:"799",height:"801"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u041d\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"settings"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-5",src:n(27223).A+"",width:"1787",height:"669"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"Metadata"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-6",src:n(69116).A+"",width:"1200",height:"621"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"Update Metadata"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-7",src:n(52005).A+"",width:"1803",height:"664"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e \u043e\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0441 \u043f\u0440\u043e\u0441\u044c\u0431\u043e\u0439 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"\u0414\u0430, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u044d\u0442\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-8",src:n(57474).A+"",width:"544",height:"582"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"Autonomys Mainnet"})," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043e\u043f\u0446\u0438\u0438 \u0432 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u043c \u0441\u043f\u0438\u0441\u043a\u0435 ",(0,t.jsx)(s.code,{children:"Allow use on any chain"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-9",src:n(94955).A+"",width:"565",height:"857"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\u043a\u0430\u043a-\u0441\u0434\u0435\u043b\u0430\u0442\u044c-\u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e-\u043a\u043e\u043f\u0438\u044e-\u043c\u043e\u0435\u0433\u043e-\u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430",children:"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043c\u043e\u0435\u0433\u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430?"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e/\u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u043c\u0435\u043d\u044e ",(0,t.jsx)(s.code,{children:"..."}),", \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-11",src:n(92050).A+"",width:"562",height:"606"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u0417\u0430\u0442\u0435\u043c \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"\u044f \u0445\u043e\u0447\u0443 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"trouble-12",src:n(23017).A+"",width:"560",height:"600"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},78058:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Polkadot-1-37d0995d01458641bfbe869cddc11160.png"},8641:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Polkadot-2-eec5384839a5374cdaedda5620a14a9a.png"},87512:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Polkadot-3-1591dcc4e1de819bde50025d6abefc1d.png"},20151:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Polkadot-4-1ddb4a48ffa5eb8d812044999f7ee20d.png"},90926:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Polkadot-5-15789c15eb3236c65a44033c4b5b6882.png"},92776:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/step-2a-d124b36210edcf5979c7723d6eaf854c.png"},28479:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/step-3a-2ed68d40f330301c9a455c55d686e416.png"},21890:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/step-4a-0fad9bae17f463a2551040604e762c35.png"},40339:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-1-263155ed19c056e40150348c75e21f93.png"},6875:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-10-bfee258f862827782f497578c72152a6.png"},92050:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-11-dc020f373d864450daecc3c59c62db72.png"},23017:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-12-139790c8e54aedd028d09bad24a14526.png"},78232:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-2-54494844b8e0933bb9fd27df6d2a87c3.png"},15713:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-3-c30be18ab002b158e7a477e48618fae2.png"},97998:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-4-2cbe152eee47ac9d59c5ae12a36643cb.png"},27223:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-5-008b297ff47fbd2f7fc5109349922e28.png"},69116:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-6-ba5bef038e0e9114fb9d0c60ce940d8a.png"},52005:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-7-2b3a9dd3fbe8fffbbc29f8820e7b9f1f.png"},57474:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-8-0b0923c208862a4d2cda7e64c1319817.png"},94955:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/trouble-9-b966afcb820284472a95e7f6fd3d8ecb.png"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var t=n(96540);const i={},d=t.createContext(i);function l(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);