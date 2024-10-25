"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4860],{1816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const o={title:"Introduction",sidebar_position:1,description:"Start Building using Auto SDK",slug:"/develop/auto-sdk/intro",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK"]},r=void 0,l={id:"develop/auto_sdk/intro",title:"Introduction",description:"Start Building using Auto SDK",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/develop/auto_sdk/intro.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/intro",permalink:"/id/develop/auto-sdk/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"Start Building using Auto SDK",slug:"/develop/auto-sdk/intro",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK"]},sidebar:"tutorialSidebar",previous:{title:"Auto SDK",permalink:"/id/develop/auto-sdk"},next:{title:"Consensus",permalink:"/id/develop/auto-sdk/consensus"}},a={},c=[{value:"Introduction to the Auto SDK",id:"introduction-to-the-auto-sdk",level:2},{value:"What is the Auto SDK?",id:"what-is-the-auto-sdk",level:3},{value:"Key Features:",id:"key-features",level:3},{value:"Why Use the Auto SDK?",id:"why-use-the-auto-sdk",level:3},{value:"Packages",id:"packages",level:2},{value:"Video Guide: Installing Auto SDK and Retrieving Account Balance",id:"video-guide-installing-auto-sdk-and-retrieving-account-balance",level:2},{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installing the Packages",id:"installing-the-packages",level:3},{value:"Using npm",id:"using-npm",level:4},{value:"Using yarn",id:"using-yarn",level:4},{value:"Cloning the Repository and Building Locally (Optional)",id:"cloning-the-repository-and-building-locally-optional",level:2},{value:"Setup Instructions",id:"setup-instructions",level:3},{value:"Localhost Testing",id:"localhost-testing",level:2},{value:"Steps",id:"steps",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction-to-the-auto-sdk",children:"Introduction to the Auto SDK"}),"\n",(0,s.jsx)(n.p,{children:"Welcome to the Auto SDK documentation! The Autonomys Auto SDK is a powerful toolkit designed to empower developers to seamlessly integrate with the Autonomys Network. It enables interaction through familiar programming languages like TypeScript, without needing to delve into the complexities of blockchain or smart contracts. The SDK provides simple APIs for issuing and verifying Auto IDs, interacting with the consensus layer, handling data uploads, and managing payments using Auto Coin."}),"\n",(0,s.jsx)(n.h3,{id:"what-is-the-auto-sdk",children:"What is the Auto SDK?"}),"\n",(0,s.jsx)(n.p,{children:"The Auto SDK is a collection of JavaScript/TypeScript packages that abstract away the complexity of blockchain interactions. It includes utilities for consensus interactions, identity management, data storage, and general-purpose functions that are essential for building decentralized applications (dApps) and services on the Autonomys Network."}),"\n",(0,s.jsx)(n.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Modular Architecture"}),": Use only the packages you need."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ease of Use"}),": Simplifies blockchain operations with high-level functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexibility"}),": Suitable for both beginners and experienced blockchain developers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Community-Driven and Open-source"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"why-use-the-auto-sdk",children:"Why Use the Auto SDK?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simplify Development"}),": Focus on your application's logic rather than blockchain intricacies."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accelerate Time-to-Market"}),": Reduce development time with ready-to-use functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ensure Compatibility"}),": Stay up-to-date with the latest Autonomys blockchain protocols."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhance Security"}),": Utilize well-tested code for critical operations like identity management."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"packages",children:"Packages"}),"\n",(0,s.jsxs)(n.p,{children:["This monorepo contains multiple packages, each serving a specific purpose. All packages are published to npm under the ",(0,s.jsx)(n.code,{children:"@autonomys"})," scope:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@autonomys/auto-utils"}),": Core utility functions for interacting with the Autonomys Network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@autonomys/auto-consensus"}),": Functions for interacting with the Consensus Layer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@autonomys/auto-drive"}),": Tools for preparing and managing data for on-chain storage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@autonomys/auto-id"}),": Functions for generating, renewing, and revoking Decentralized Identities (Auto IDs)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"video-guide-installing-auto-sdk-and-retrieving-account-balance",children:"Video Guide: Installing Auto SDK and Retrieving Account Balance"}),"\n",(0,s.jsxs)(n.p,{children:["For those who prefer a visual guide, we have created a short video demonstrating how to install the Auto SDK, along with a simple coding example that shows how to retrieve an account balance using the SDK. For step-by-step instructions, please refer to the ",(0,s.jsx)(n.a,{href:"#requirements",children:"Requirements and Installation Guide below"}),"."]}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/B5J9fwE5-vI?si=Mt133r3I2QnCae0A",title:"Installing and using Auto SDK",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node.js"})," (version 14 or higher)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Yarn"})," or ",(0,s.jsx)(n.strong,{children:"npm"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"installing-the-packages",children:"Installing the Packages"}),"\n",(0,s.jsxs)(n.p,{children:["Install the packages you need via npm or yarn. For example, to install ",(0,s.jsx)(n.code,{children:"@autonomys/auto-utils"})," and ",(0,s.jsx)(n.code,{children:"@autonomys/auto-consensus"}),":"]}),"\n",(0,s.jsx)(n.h4,{id:"using-npm",children:"Using npm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @autonomys/auto-utils @autonomys/auto-consensus\n"})}),"\n",(0,s.jsx)(n.h4,{id:"using-yarn",children:"Using yarn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @autonomys/auto-utils @autonomys/auto-consensus\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cloning-the-repository-and-building-locally-optional",children:"Cloning the Repository and Building Locally (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"If you wish to contribute to the SDK or run the SDK packages locally, you can clone the repository and build the packages from source."}),"\n",(0,s.jsx)(n.h3,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Clone the Repository"})}),"\n",(0,s.jsx)(n.p,{children:"Open your terminal and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/autonomys/auto-sdk.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Navigate to the Project Directory"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd auto-sdk\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Install Dependencies"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Build All Packages"})}),"\n",(0,s.jsx)(n.p,{children:"To compile all packages, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn run build\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Run Tests"})}),"\n",(0,s.jsx)(n.p,{children:"To execute tests for all packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn run test\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"localhost-testing",children:"Localhost Testing"}),"\n",(0,s.jsxs)(n.p,{children:["You can test the SDK packages against a local Autonomys node using the provided scripts instead of a public testnet (",(0,s.jsx)(n.strong,{children:"Gemini 3h"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Verify OS and Architecture Settings"})}),"\n",(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"scripts/download.sh"})," file and ensure that lines 3-7 match your current operating system and architecture:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Change the following variables as needed\n# OS to download\nOS="macos" # Options: macos | ubuntu | windows\n# Architecture to download\nARCHITECTURE="aarch64" # Options: aarch64 | x86_64-skylake | x86_64-v2\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Run the Development Script"})}),"\n",(0,s.jsx)(n.p,{children:"Execute the following command to start the local node and farmer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node scripts/run-dev.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"This script will:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download the latest version of the node and farmer compatible with your OS and architecture (",(0,s.jsx)(n.code,{children:"scripts/download.sh"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Start the Node and create/insert the keystore (",(0,s.jsx)(n.code,{children:"scripts/run-node.sh"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Start the Farmer (",(0,s.jsx)(n.code,{children:"scripts/run-farmer.sh"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Register the Node as an operator, wait for synchronization, and then terminate the node and farmer (handled within ",(0,s.jsx)(n.code,{children:"scripts/run-dev.js"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Restart the Node as an operator (",(0,s.jsx)(n.code,{children:"scripts/run-operator.sh"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Restart the Farmer (",(0,s.jsx)(n.code,{children:"scripts/run-farmer.sh"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Run Tests Against the Local Node"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash scripts/localhost-run-test.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"The tests will automatically detect the local node and farmer, executing against them instead of the public testnet."}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"With the Auto SDK set up locally, you're ready to start building and testing your blockchain applications. Explore the additional pages for code examples and a functions overview."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);