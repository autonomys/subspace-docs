"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8810],{6372:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(4848),i=r(8453);const s={title:"Getting Started",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,description:"\u0412\u0441\u0442\u0443\u043f \u0434\u043e \u0441\u0442\u0435\u0439\u043a\u0456\u043d\u0433\u0443 \u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432",slug:"/staking/intro",keywords:["\u0421\u0442\u0430\u043a","\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f","\u0412\u0456\u0434\u043e\u043a\u0440\u0435\u043c\u043b\u0435\u043d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f"]},o=void 0,a={id:"farming-&-staking/staking/intro",title:"Getting Started",description:"\u0412\u0441\u0442\u0443\u043f \u0434\u043e \u0441\u0442\u0435\u0439\u043a\u0456\u043d\u0433\u0443 \u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/farming-&-staking/staking/intro.md",sourceDirName:"farming-&-staking/staking",slug:"/staking/intro",permalink:"/uk/staking/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,description:"\u0412\u0441\u0442\u0443\u043f \u0434\u043e \u0441\u0442\u0435\u0439\u043a\u0456\u043d\u0433\u0443 \u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432",slug:"/staking/intro",keywords:["\u0421\u0442\u0430\u043a","\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f","\u0412\u0456\u0434\u043e\u043a\u0440\u0435\u043c\u043b\u0435\u043d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f"]},sidebar:"tutorialSidebar",previous:{title:"Verified Farmer Discord Role",permalink:"/uk/farming/guides/verified-farmer"},next:{title:"Register an Operator",permalink:"/uk/staking/operator/register"}},l={},d=[{value:"Decoupled Execution Framework",id:"decoupled-execution-framework",level:2},{value:"Farming vs. Operators: Key Differences",id:"farming-vs-operators-key-differences",level:2},{value:"\u0424\u0430\u0440\u043c\u0456\u043d\u0433",id:"\u0444\u0430\u0440\u043c\u0456\u043d\u0433",level:3},{value:"Being an Operator",id:"being-an-operator",level:3},{value:"Operators",id:"operators",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"Hardware",id:"hardware",level:4},{value:"Directory Structure",id:"directory-structure",level:3},{value:"\u0421\u0442\u0430\u043a",id:"\u0441\u0442\u0430\u043a",level:2},{value:"\u0415\u043f\u043e\u0445\u0430 \u0441\u0442\u0430\u0432\u043a\u0438",id:"\u0435\u043f\u043e\u0445\u0430-\u0441\u0442\u0430\u0432\u043a\u0438",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Operator and Staking Availability",type:"warning",children:(0,t.jsxs)(n.p,{children:["Running an Operator and staking are only available on the Taurus and Gemini-3h testnets.",(0,t.jsx)(n.br,{}),"\n","Availability on the mainnet is planned for Phase 2. For further details, please refer to our ",(0,t.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/4414",children:"Phased Launch Roadmap"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"decoupled-execution-framework",children:"Decoupled Execution Framework"}),"\n",(0,t.jsx)(n.p,{children:"Autonomys introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. \u0424\u0430\u0440\u043c\u0435\u0440\u0438 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u044e\u0442\u044c \u0442\u0430 \u0432\u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u0443\u044e\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457, \u0430 \u0432\u0443\u0437\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0432\u0438\u043a\u043e\u043d\u0443\u044e\u0442\u044c \u0457\u0445, \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0447\u0438 \u0440\u0456\u0437\u043d\u0456 \u0432\u0438\u043c\u043e\u0433\u0438 \u0434\u043e \u0430\u043f\u0430\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0457 \u0440\u043e\u043b\u0456. \u0426\u0435 \u0440\u043e\u0431\u0438\u0442\u044c \u0444\u0430\u0440\u043c\u0456\u043d\u0433 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0456 \u0437\u0430\u043a\u043b\u0430\u0434\u0430\u0454 \u043e\u0441\u043d\u043e\u0432\u0443 \u0434\u043b\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f. \u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u044e\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c, \u044f\u043a\u0456 \u0433\u0440\u0443\u043f\u0443\u044e\u0442\u044c \u0457\u0445 \u0443 \u043f\u0430\u043a\u0435\u0442\u0438. \u0424\u0435\u0440\u043c\u0435\u0440\u0438 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u044e\u0442\u044c \u0442\u0430 \u0443\u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u0443\u044e\u0442\u044c \u0457\u0445, \u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u044e\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457 \u0432 \u0446\u044c\u043e\u043c\u0443 \u043f\u043e\u0440\u044f\u0434\u043a\u0443. \u041f\u0440\u043e\u0446\u0435\u0441 \u0444\u043e\u0440\u043c\u0443\u0454 \u0434\u0435\u0442\u0435\u0440\u043c\u0456\u043d\u043e\u0432\u0430\u043d\u0438\u0439 \u043b\u0430\u043d\u0446\u044e\u0436\u043e\u043a \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0437 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u043e\u044e \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0454\u044e, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0447\u0438 \u043e\u043f\u0442\u0438\u043c\u0456\u0441\u0442\u0438\u0447\u043d\u0443 \u0441\u0445\u0435\u043c\u0443 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438, \u0437\u0430\u0445\u0438\u0449\u0435\u043d\u0443 \u0432\u0456\u0434 \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u0430."}),"\n",(0,t.jsx)(n.admonition,{title:"\u0412\u0456\u0434\u043e\u043a\u0440\u0435\u043c\u043b\u0435\u043d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f",type:"info",children:(0,t.jsxs)(n.p,{children:["For more information on how Subspace separates consensus and computation, check out ",(0,t.jsx)(n.a,{href:"https://academy.autonomys.xyz/subspace-protocol/decoupled-execution",children:"Autonomys Academy"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"farming-vs-operators-key-differences",children:"Farming vs. Operators: Key Differences"}),"\n",(0,t.jsx)(n.h3,{id:"\u0444\u0430\u0440\u043c\u0456\u043d\u0433",children:"\u0424\u0430\u0440\u043c\u0456\u043d\u0433"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441:"})," \u0426\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u0430 \u0440\u043e\u043b\u044c \u0444\u0430\u0440\u043c\u0435\u0440\u0430, \u044f\u043a\u0430 \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0443\u0454 \u0431\u0435\u0437\u043f\u0435\u043a\u0443 \u0442\u0430 \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441 \u0434\u043b\u044f \u043c\u0435\u0440\u0435\u0436\u0456. \u041d\u0430\u0448\u0456 \u0444\u0430\u0440\u043c\u0435\u0440\u0438 \u2013 \u0446\u0435 \u0442\u0435, \u0449\u043e \u0433\u0430\u0440\u0430\u043d\u0442\u0443\u0454, \u0449\u043e \u043c\u0438 \u043d\u0435 \u0434\u043e\u0432\u0456\u0440\u044f\u0454\u043c\u043e, \u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454\u043c\u043e."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439"}),": \u0424\u0430\u0440\u043c\u0435\u0440\u0438 \u043d\u0435\u0441\u0443\u0442\u044c \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c \u0437\u0430 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439 \u0442\u0430 \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0435\u043d\u043d\u044f \u043f\u043e\u0440\u044f\u0434\u043a\u0443."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u043e\u043b\u0435\u0433\u0448\u0435\u043d\u0456 \u0432\u0438\u043c\u043e\u0433\u0438:"}),": \u0412\u0438\u043c\u043e\u0433\u0438 \u0434\u043e \u0430\u043f\u0430\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0444\u0430\u0440\u043c\u0456\u043d\u0433\u0443 \u0441\u043f\u0440\u043e\u0449\u0435\u043d\u0456, \u0449\u043e \u0440\u043e\u0431\u0438\u0442\u044c \u0439\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0434\u043b\u044f \u0431\u0443\u0434\u044c-\u043a\u043e\u0433\u043e."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430"}),": \u0424\u0430\u0440\u043c\u0435\u0440\u0438 \u043b\u0438\u0448\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u044e\u0442\u044c \u0434\u043e\u043a\u0430\u0437\u0438 \u0432\u0438\u0431\u043e\u0440\u0456\u0432 \u0456 \u0433\u0430\u0440\u0430\u043d\u0442\u0443\u044e\u0442\u044c, \u0449\u043e \u0434\u0430\u043d\u0456 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0456."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457"}),": \u0424\u0430\u0440\u043c\u0435\u0440\u0438 \u043d\u0435 \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u044e\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457; \u0432\u043e\u043d\u0438 \u0437\u043e\u0441\u0435\u0440\u0435\u0434\u0436\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u0457\u0445 \u0443\u043f\u043e\u0440\u044f\u0434\u043a\u0443\u0432\u0430\u043d\u043d\u0456 \u0442\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0456 \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"being-an-operator",children:"Being an Operator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u043e\u0434\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457"}),": \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u044e\u0442\u044c \u0437\u0430 \u0433\u0440\u0443\u043f\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439 \u0443 \u043f\u0430\u043a\u0435\u0442\u0438 \u0442\u0430 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0457\u0445 \u0434\u043e \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441\u043d\u043e\u0433\u043e \u043b\u0430\u043d\u0446\u044e\u0433\u0430, \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439, \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0445 \u0434\u043e \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0443, \u0456 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0443 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u0441\u0442\u0430\u043d\u0443 \u043b\u0430\u043d\u0446\u044e\u0433\u0430."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Higher Hardware Requirements"}),": Operators require more substantial hardware capabilities, as they must execute complex transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Require Initial Investment:"})," Operators are required to stake a certain amount of AI3. \u042f\u043a\u0449\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0434\u0456\u0454 \u0437\u043b\u043e\u0432\u043c\u0438\u0441\u043d\u043e, \u0439\u043e\u0433\u043e \u0447\u0430\u0441\u0442\u043a\u0430 \u0440\u0438\u0437\u0438\u043a\u0443\u0454 \u0431\u0443\u0442\u0438 ",(0,t.jsx)(n.strong,{children:"\u0443\u0440\u0456\u0437\u0430\u043d\u043e\u044e"}),". \u0422\u0430\u043a\u0430 \u0437\u043b\u043e\u0432\u043c\u0438\u0441\u043d\u0430 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u043a\u0430 \u0442\u044f\u0433\u043d\u0435 \u0437\u0430 \u0441\u043e\u0431\u043e\u044e \u0437\u043d\u0430\u0447\u043d\u0456 \u0448\u0442\u0440\u0430\u0444\u0438, \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0443\u044e\u0447\u0438 \u043a\u0440\u0438\u043f\u0442\u043e \u0435\u043a\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0443 \u0431\u0435\u0437\u043f\u0435\u043a\u0443 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430 \u0442\u0430 \u0433\u0440\u0443\u043f\u0443\u0432\u0430\u043d\u043d\u044f"}),": \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u044e\u0442\u044c \u0456 \u0433\u0440\u0443\u043f\u0443\u044e\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457 \u0432 \u043f\u0430\u043a\u0435\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043f\u0440\u043e\u0446\u0435\u0441\u0443 \u0432\u0438\u0431\u043e\u0440\u0443, \u0437\u0432\u0430\u0436\u0435\u043d\u043e\u0433\u043e \u0437\u0430 \u0441\u0442\u0430\u0432\u043a\u0430\u043c\u0438."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0414\u0435\u0442\u0435\u0440\u043c\u0456\u043d\u043e\u0432\u0430\u043d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f"}),": \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u0432\u0438\u043a\u043e\u043d\u0443\u044e\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457 \u0432 \u043f\u0435\u0432\u043d\u043e\u043c\u0443 \u0434\u0435\u0442\u0435\u0440\u043c\u0456\u043d\u043e\u0432\u0430\u043d\u043e\u043c\u0443 \u043f\u043e\u0440\u044f\u0434\u043a\u0443, \u0441\u0442\u0432\u043e\u0440\u044e\u044e\u0447\u0438 \u0437\u043e\u0431\u043e\u0432\u2019\u044f\u0437\u0430\u043d\u043d\u044f \u0441\u0442\u0430\u043d\u0443 \u0444\u043e\u0440\u043c\u0456 \u043a\u0432\u0438\u0442\u0430\u043d\u0446\u0456\u0439 \u043f\u0440\u043e \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0412\u0442\u043e\u0440\u0438\u043d\u043d\u0430 \u0440\u043e\u043b\u044c \u0443 \u043c\u0435\u0440\u0435\u0436\u0456"}),": \u0412\u0456\u0434\u0441\u0442\u0435\u0436\u0443\u044e\u0442\u044c \u043b\u0430\u043d\u0446\u044e\u0436\u043e\u043a \u0434\u043e\u043c\u0435\u043d\u0443 \u043d\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0437\u043b\u043e\u0432\u043c\u0438\u0441\u043d\u043e\u0457 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456 \u0442\u0430 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u044e\u0442\u044c \u0434\u043e\u043a\u0430\u0437\u0438 \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u0430 \u0432 \u043b\u0430\u043d\u0446\u044e\u0436\u043e\u043a \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441\u0443."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0430 \u0440\u0456\u0437\u043d\u0438\u0445 \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449"}),": \u041c\u043e\u0436\u0443\u0442\u044c \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0440\u0456\u0437\u043d\u0456 \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0456\u0432, \u0442\u0430\u043a\u0456 \u044f\u043a \u0432\u0456\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0430 \u043c\u0430\u0448\u0438\u043d\u0430 Ethereum (EVM) \u0430\u0431\u043e Web-Assembly (WASM)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"operators",children:"Operators"}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement Changes",type:"warning",children:(0,t.jsx)(n.p,{children:"Hardware requirements are lowered for testing but will likely increase on the mainnet."})}),"\n",(0,t.jsx)(n.h4,{id:"operating-system",children:"Operating System"}),"\n",(0,t.jsxs)("small",{children:[(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Application"}),(0,t.jsx)("th",{colspan:"3",children:"Minimum Supported Version*"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"CLI"})}),(0,t.jsx)("td",{children:"\ud83d\udc27 Ubuntu 22.04"}),(0,t.jsx)("td",{children:"\ud83e\ude9f Windows 11"}),(0,t.jsx)("td",{children:"\ud83c\udf4e macOS 14 (Sonoma)"})]})]}),(0,t.jsx)(n.p,{children:"* Note that these are the officially supported minimum versions. For example, Windows 10 will not be officially supported but is likely to work. Team will not prioritise supporting issues that are only present on Windows 10."})]}),"\n",(0,t.jsx)(n.h4,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsx)("a",{id:"min-hardware"}),"\n",(0,t.jsx)("a",{id:"min-node-storage"}),"\n",(0,t.jsx)("a",{id:"min-network"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"CPU"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"RAM"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Storage"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Network"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["4 Cores+ @ 3.4GHz ",(0,t.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-hardware",children:"\xb9"})]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["300 GB NVMe ",(0,t.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-node-storage",children:"\xb2"})]}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["50 Mbps ",(0,t.jsx)(n.a,{href:"https://docs.autonomys.xyz/staking/intro#min-network",children:"\xb3"})]})]})})]}),"\n",(0,t.jsx)("small",{children:"\xb9 Intel Ice Lake or newer (Xeon or Core series), and AMD Zen 3 or newer (EPYC or Ryzen), with a preference for single-threaded performance over a higher core count."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("small",{children:"\xb2 Latency is more important than throughput."}),(0,t.jsx)("br",{}),(0,t.jsx)("small",{children:"\xb3 Bandwidth throughput listed refers to the required upload speed."}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h3,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,t.jsx)(n.admonition,{title:"Key Pair Location",type:"info",children:(0,t.jsxs)(n.p,{children:["For operators, the key pair can be found in ",(0,t.jsx)(n.code,{children:"/<base-path>/domains/<domain-id>/keystore"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ud83d\udcc2 subspace-node\n \u2523 \ud83d\udcc2 db\n \u2523 \ud83d\udcc2 domains\n \u2503 \u2517 \ud83d\udcc2 0\n \u2503 \u2503 \u2523 \ud83d\udcc2 db\n \u2503 \u2503 \u2523 \ud83d\udcc2 evm\n \u2503 \u2503 \u2517 \ud83d\udcc2 keystore\n \u2517 \ud83d\udcc2 network\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0441\u0442\u0430\u043a",children:"\u0421\u0442\u0430\u043a"}),"\n",(0,t.jsx)(n.p,{children:"The Autonomys Network relies on staking from both domain operators and farmers to secure the network and provide resources. Autonomys implements a Nominated Proof-of-Stake algorithm where token holders endorse operators who execute transactions and produce blocks."}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0430\u0448\u0430 \u043c\u043e\u0434\u0435\u043b\u044c \u0441\u0442\u0435\u0439\u043a\u0456\u043d\u0433\u0443 \u0441\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u0434\u0432\u043e\u0445 \u0440\u0456\u0432\u043d\u0456\u0432:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u0424\u0430\u0440\u043c\u0435\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0443, \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0456\u0439\u043d\u0443 \u0457\u0445 \u0437\u0430\u0441\u0442\u0430\u0432\u043d\u043e\u043c\u0443 \u0441\u0445\u043e\u0432\u0438\u0449\u0443. \u0424\u0430\u0440\u043c\u0435\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0430\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432 \u0456 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0457\u0445 \u0432\u043b\u0430\u0441\u043d\u043e\u044e \u0447\u0430\u0441\u0442\u043a\u043e\u044e, \u0437\u0431\u0456\u043b\u044c\u0448\u0443\u044e\u0447\u0438 \u0441\u0432\u043e\u0457 \u0448\u0430\u043d\u0441\u0438 \u0431\u0443\u0442\u0438 \u043e\u0431\u0440\u0430\u043d\u0438\u043c\u0438 \u044f\u043a \u043b\u0456\u0434\u0435\u0440 \u0441\u043b\u043e\u0442\u0443. \u0424\u0430\u0440\u043c\u0435\u0440\u0438, \u044f\u043a\u0456 \u0437\u0430\u0440\u043e\u0431\u0438\u043b\u0438 \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0443 \u0437\u0430 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043d\u043d\u044f, \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439. This nomination system balances the power between farmers who nominate and operators with both parties sharing the execution fees and the potential penalties (slashing)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u0432\u043d\u043e\u0441\u044f\u0442\u044c \u0447\u0430\u0441\u0442\u043a\u0443, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043f\u0440\u0430\u0432\u043e \u0432\u0438\u0440\u043e\u0431\u043b\u044f\u0442\u0438 \u043f\u0430\u043a\u0435\u0442\u0438 \u0432 \u043c\u0435\u0436\u0430\u0445 \u0434\u043e\u043c\u0435\u043d\u0443. They are responsible for validating and executing transactions, producing execution receipts, applying state transitions, submitting a storage fee for bundle execution and earning fees for their work. \u0428\u0430\u043d\u0441\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0431\u0443\u0442\u0438 \u043e\u0431\u0440\u0430\u043d\u0438\u043c \u044f\u043a \u043b\u0456\u0434\u0435\u0440 \u0441\u043b\u043e\u0442\u0443 \u0442\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0443\u0432\u0430\u0442\u0438 \u043f\u0430\u043a\u0435\u0442 \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u044c \u0432\u0456\u0434 \u0439\u043e\u0433\u043e \u0441\u0442\u0430\u0432\u043a\u0438. Operators can be nominated by farmers or other AI3 holders."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The nomination pools in Autonomys are "lazy": any fees earned by the operator are assigned to the pool and are not deposited to the nominators wallet unless they ask for a withdrawal. Unless withdrawn, the fees are "auto-staked" - they count towards the total stake of the pool, increasing its chance of being elected to produce bundles.'}),"\n",(0,t.jsx)(n.h3,{id:"\u0435\u043f\u043e\u0445\u0430-\u0441\u0442\u0430\u0432\u043a\u0438",children:"\u0415\u043f\u043e\u0445\u0430 \u0441\u0442\u0430\u0432\u043a\u0438"}),"\n",(0,t.jsxs)(n.p,{children:["\u0415\u043f\u043e\u0445\u0430 \u0441\u0442\u0430\u0432\u043a\u0438 \u2014 \u0446\u0435 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u0435\u0440\u0456\u043e\u0434 \u0443 \u0431\u043b\u043e\u043a\u0430\u0445 \u0434\u043e\u043c\u0435\u043d\u0443 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0456 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d, \u044f\u043a\u0438\u0439 \u043f\u043e\u0437\u043d\u0430\u0447\u0430\u0454 \u043a\u043e\u0436\u0435\u043d \u043f\u0435\u0440\u0456\u043e\u0434 \u043f\u0435\u0440\u0435\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443 \u0441\u0442\u0430\u0432\u043a\u0438. \u0412\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u043a\u043e\u0436\u043d\u0456 \u0431\u043b\u043e\u043a\u0438 ",(0,t.jsx)(n.code,{children:"StakeEpochDuration"})," (\u043d\u0430 \u0434\u0430\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0436\u043d\u0456 100 \u0431\u043b\u043e\u043a\u0456\u0432 \u0430\u0431\u043e ~10 \u0445\u0432\u0438\u043b\u0438\u043d), \u043f\u0435\u0440\u0435\u0445\u0456\u0434 \u0435\u043f\u043e\u0445\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454 \u043f\u0435\u0432\u043d\u0456 \u0434\u0456\u0457, \u0442\u0430\u043a\u0456 \u044f\u043a \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u043c\u0438\u043a\u0430\u043d\u043d\u044f \u0434\u043e\u043c\u0435\u043d\u0443 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430, \u0441\u043a\u0430\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432, \u0440\u043e\u0437\u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432 \u0442\u0430 \u0457\u0445 \u043a\u043e\u0448\u0442\u0456\u0432 \u0456 \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443 \u0441\u0442\u0430\u0432\u043e\u043a \u0434\u043b\u044f \u0432\u0438\u0431\u043e\u0440\u0443 \u0432\u0435\u0440\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u043e\u0457 \u0432\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 (\u0412\u0412\u0424). \u0426\u0456 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0456 \u0434\u043b\u044f \u0434\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443 \u0441\u0442\u0430\u0432\u043e\u043a, \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f \u0440\u0456\u0437\u043d\u043e\u043c\u0430\u043d\u0456\u0442\u043d\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0439, \u043f\u043e\u0432\u2019\u044f\u0437\u0430\u043d\u0438\u0445 \u0437\u0456 \u0441\u0442\u0430\u0432\u043a\u0430\u043c\u0438, \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434 \u0442\u0430 \u043a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u043c\u0438 \u0442\u0430 \u0437\u043d\u044f\u0442\u0442\u044f\u043c \u043a\u043e\u0448\u0442\u0456\u0432. \u0423\u043d\u0456\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u0430 \u0442\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c \u0432\u0441\u0456\u0445 \u0434\u043e\u043c\u0435\u043d\u0456\u0432 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0443\u0437\u0433\u043e\u0434\u0436\u0435\u043d\u0456\u0441\u0442\u044c \u0443 \u043c\u0435\u0440\u0435\u0436\u0456, \u0442\u043e\u0434\u0456 \u044f\u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0430 \u0442\u043e\u0447\u043a\u0430 \u0434\u043b\u044f \u0435\u043f\u043e\u0445\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0443 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u0443 \u043c\u043e\u0436\u0435 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0442\u0438\u0441\u044f \u0437\u0430\u043b\u0435\u0436\u043d\u043e \u0432\u0456\u0434 \u0442\u043e\u0433\u043e, \u043a\u043e\u043b\u0438 \u0432\u0456\u043d \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439, \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u044e\u0447\u0438 \u0430\u043c\u043e\u0440\u0442\u0438\u0437\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043d\u0430 \u0446\u0456 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);