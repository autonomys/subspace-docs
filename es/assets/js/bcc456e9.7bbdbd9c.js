"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[204],{204:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=o(4848),t=o(8453);const i={title:"Soluci\xf3n de problemas",sidebar_position:5,description:"How to run an Autonomys Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binarios","Docker"]},s=void 0,a={id:"farming-&-staking/farming/advanced-cli/cli-troubleshooting",title:"Soluci\xf3n de problemas",description:"How to run an Autonomys Network Farmer with the Substrate CLI",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-troubleshooting",permalink:"/es/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Soluci\xf3n de problemas",sidebar_position:5,description:"How to run an Autonomys Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binarios","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Farming Cluster",permalink:"/es/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster"},next:{title:"Additional Guides",permalink:"/es/docs/category/additional-guides"}},c={},l=[{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:2},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Common Problems",id:"common-problems",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"soluci\xf3n-de-problemas",children:"Soluci\xf3n de problemas"}),"\n",(0,r.jsxs)(n.p,{children:["If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,r.jsx)(n.a,{href:"https://forum.autonomys.xyz/c/support/5",children:"Forum"})," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,r.jsx)(n.a,{href:"https://autonomys.xyz/discord",children:"Discord"})," and use one of the dedicated channels #farmer-support and #farmer-chat for additional Peer to Peer help."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list and we welcome contributions"})}),"\n",(0,r.jsx)(n.h3,{id:"enable-rust-backtrace",children:"Enable Rust Backtrace"}),"\n",(0,r.jsx)(n.p,{children:"When running the Autonomys Network Farmer & Node, you might encounter an error message indicating the need for a Rust backtrace to diagnose issues:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This message suggests that Rust, the programming language used in the Autonomys Network Farmer & Node, has encountered a problem. By default, the backtrace is not displayed. To enable the ",(0,r.jsx)(n.code,{children:"RUST_BACKTRACE"})," environment variable and view detailed error information, use the following commands based on your operating system:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\uddbc\ufe0f Windows"})," (PowerShell): Enter ",(0,r.jsx)(n.code,{children:"$Env:RUST_BACKTRACE=1"})," in PowerShell and rerun the application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83c\udf4e macOS"}),": Type ",(0,r.jsx)(n.code,{children:"export RUST_BACKTRACE=1"})," in the terminal and rerun the application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\udc27 Ubuntu"}),": Enter ",(0,r.jsx)(n.code,{children:"export RUST_BACKTRACE=1"})," in the terminal and rerun the application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u2699 Service (Linux)"}),": For services, use ",(0,r.jsx)(n.code,{children:"sudo systemctl edit subspace-node"})," or ",(0,r.jsx)(n.code,{children:"sudo systemctl edit subspace-farmer"}),", add ",(0,r.jsx)(n.code,{children:"[Service]"})," and ",(0,r.jsx)(n.code,{children:"Environment=RUST_BACKTRACE=1"})," between the warning comments, reload with ",(0,r.jsx)(n.code,{children:"sudo systemctl daemon-reload"}),", and restart services using ",(0,r.jsx)(n.code,{children:"sudo systemctl restart subspace-{node,farmer}"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By enabling ",(0,r.jsx)(n.code,{children:"RUST_BACKTRACE"}),", you can obtain additional diagnostic information to help resolve any errors encountered during operation."]}),"\n",(0,r.jsx)(n.h3,{id:"common-problems",children:"Common Problems"}),"\n",(0,r.jsx)(n.p,{children:"Looking for solutions to other common issues?"}),"\n",(0,r.jsx)(n.p,{children:"Check out our Common Problems page. This resource covers a range of frequently encountered challenges, offering practical solutions to help you overcome them. Please note that while this page addresses many common issues, it is not an all-inclusive list. For issues not covered, you can visit our forums or Discord for additional support."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var r=o(6540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);