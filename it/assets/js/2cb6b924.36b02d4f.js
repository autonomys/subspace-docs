"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1431],{6168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const r={title:"Introduction",sidebar_position:1,description:"Start Building using Auto SDK",slug:"/develop/auto-sdk/intro",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK"]},o=void 0,l={id:"develop/auto_sdk/intro",title:"Introduction",description:"Start Building using Auto SDK",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/develop/auto_sdk/intro.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/intro",permalink:"/it/develop/auto-sdk/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"Start Building using Auto SDK",slug:"/develop/auto-sdk/intro",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK"]},sidebar:"tutorialSidebar",previous:{title:"Auto SDK",permalink:"/it/develop/auto-sdk"},next:{title:"Consensus",permalink:"/it/develop/auto-sdk/consensus"}},a={},c=[{value:"Introduction to the Auto SDK",id:"introduction-to-the-auto-sdk",level:2},{value:"What is the Auto SDK?",id:"what-is-the-auto-sdk",level:3},{value:"Key Features:",id:"key-features",level:3},{value:"Why Use the Auto SDK?",id:"why-use-the-auto-sdk",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Repository Structure",id:"repository-structure",level:3},{value:"Setup Instructions",id:"setup-instructions",level:3},{value:"Build and Test",id:"build-and-test",level:3},{value:"Localhost Testing",id:"localhost-testing",level:2},{value:"Steps",id:"steps",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction-to-the-auto-sdk",children:"Introduction to the Auto SDK"}),"\n",(0,s.jsx)(n.p,{children:"Welcome to the Auto SDK documentation! The Auto SDK is a comprehensive toolkit designed to simplify the development of applications and integrations with the Autonomys Network. It provides a set of modular packages that enable developers to interact seamlessly with the consensus chain and active domains (Auto ID, Nova)"}),"\n",(0,s.jsx)(n.h3,{id:"what-is-the-auto-sdk",children:"What is the Auto SDK?"}),"\n",(0,s.jsx)(n.p,{children:"The Auto SDK is a collection of JavaScript/TypeScript packages that abstract away the complexity of blockchain interactions. It includes utilities for consensus interactions, identity management, and general-purpose functions that are essential for building decentralized applications (dApps) and services on the Autonomys Network."}),"\n",(0,s.jsx)(n.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Modular Architecture"}),": Use only the packages you need."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ease of Use"}),": Simplifies blockchain operations with high-level functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexibility"}),": Suitable for both beginners and experienced blockchain developers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Community-Driven and Open-source"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"why-use-the-auto-sdk",children:"Why Use the Auto SDK?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simplify Development"}),": Focus on your application's logic rather than blockchain intricacies."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accelerate Time-to-Market"}),": Reduce development time with ready-to-use functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ensure Compatibility"}),": Stay up-to-date with the latest Autonomys blockchain protocols."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhance Security"}),": Utilize well-tested code for critical operations like identity management."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"This guide will help you set up the Auto SDK locally and run it against a current public testnet (Gemini 3h), or a local instance of Autonomys node for testing purposes."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node.js"}),": Make sure you have Node.js installed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Yarn 4"}),": The project uses Yarn Berry (Yarn 4) as the package manager."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"repository-structure",children:"Repository Structure"}),"\n",(0,s.jsx)(n.p,{children:"The repository is organized as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"packages/auto-utils"}),": Utility functions for the SDK."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"packages/auto-consensus"}),": Consensus-related functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"packages/auto-id"}),": Identity management functions."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clone the Repository"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Open your terminal and run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/autonomys/auto-sdk.git\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Navigate to the Project Directory"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd auto-sdk\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Set Yarn to Use the Berry Version"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn set version berry\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Install Dependencies"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,s.jsx)(n.h3,{id:"build-and-test",children:"Build and Test"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Build All Packages"}),": to compile all packages, run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn run build\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Run Tests"}),"\nTo execute tests for all packages:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn run test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"localhost-testing",children:"Localhost Testing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"You can test the SDK packages against a local Autonomys node using the provided scripts instead of a public testnet (**Gemini 3h**).\n"})}),"\n",(0,s.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Verify OS and Architecture Settings"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.strong,{children:"scripts/download.sh"})," file and ensure that lines 3-7 match your current operating system and architecture:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Change the following variables as needed\n# OS to download\nOS="macos" # Options: macos | ubuntu | windows\n# Architecture to download\nARCHITECTURE="aarch64" # Options: aarch64 | x86_64-skylake | x86_64-v2\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Run the Development Script"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Execute the following command to start the local node and farmer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node scripts/run-dev.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"This script will:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Download the latest version of the node and farmer compatible with your OS and architecture (scripts/download.sh)."}),"\n",(0,s.jsx)(n.li,{children:"Start the Node and create/insert the keystore (scripts/run-node.sh)."}),"\n",(0,s.jsx)(n.li,{children:"Start the Farmer (scripts/run-farmer.sh)."}),"\n",(0,s.jsx)(n.li,{children:"Register the Node as an operator, wait for synchronization, and then terminate the node and farmer (handled within scripts/run-dev.js)."}),"\n",(0,s.jsx)(n.li,{children:"Restart the Node as an operator (scripts/run-operator.sh)."}),"\n",(0,s.jsx)(n.li,{children:"Restart the Farmer (scripts/run-farmer.sh)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Run Tests Against the Local Node"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash scripts/localhost-run-test.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"The tests will automatically detect the local node and farmer, executing against them instead of the public testnet."}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"With the Auto SDK set up locally, you're ready to start building and testing your blockchain applications. Explore the additional pages for the code examples and functions overview."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);