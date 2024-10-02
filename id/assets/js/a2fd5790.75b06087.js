"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7931],{4932:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=o(4848),n=o(8453);const a={title:"General information on dev tools and Autonomys EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","autonomys network"]},r=void 0,s={id:"develop/nova/general-information",title:"General information on dev tools and Autonomys EVM",description:"Guide on setting up",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/develop/nova/general-information.md",sourceDirName:"develop/nova",slug:"/develop/nova/general-information",permalink:"/id/docs/develop/nova/general-information",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/general-information.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"General information on dev tools and Autonomys EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/id/docs/develop/nova/quick_start"},next:{title:"Setting up MetaMask",permalink:"/id/docs/develop/nova/setting-up-metamask"}},l={},c=[{value:"What tools are available for developers?",id:"what-tools-are-available-for-developers",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Differences with Ethereum",id:"differences-with-ethereum",level:3},{value:"What is Solidity?",id:"what-is-solidity",level:3}];function d(e){const t={a:"a",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"what-tools-are-available-for-developers",children:"What tools are available for developers?"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Developing smart contracts involves a suite of tools that aid in writing, testing and deploying code on the blockchain. ",(0,i.jsx)(t.strong,{children:"Autonomys utilizes an instance of the Ethereum Virtual Machine. Therefore, every tool used to build, test, and deploy smart contracts on Ethereum is also available for Autonomys!"})]}),"\n",(0,i.jsx)(t.p,{children:"First, Solidity is the primary programming language for writing smart contracts. It is statically typed, supports inheritance, libraries, and complex user-defined types, making it familiar for developers with a background in other statically typed languages such as C++, Java, or JavaScript."}),"\n",(0,i.jsxs)(t.p,{children:["Integrated Development Environments (IDEs) such as the ",(0,i.jsx)(t.a,{href:"https://remix.ethereum.org/",children:"Remix IDE"})," are often used to aid in writing smart contracts. Remix IDE is a browser-based IDE that enables you to write, deploy, and interact with Solidity smart contracts. It features a built-in static analysis tool that checks your code for common errors."]}),"\n",(0,i.jsxs)(t.p,{children:["For local development and testing, you have multiple options. You can spin up your own version of an Autonomys Developer Node and farmer to deploy contracts, develop applications, and run tests. Alternatively, you can use Ethereum development tools like ",(0,i.jsx)(t.a,{href:"https://hardhat.org/hardhat-network/docs/overview",children:"Hardhat"})," or ",(0,i.jsx)(t.a,{href:"https://book.getfoundry.sh/anvil/",children:"Anvil"}),", which are fully compatible with Autonomys due to their EVM compatibility."]}),"\n",(0,i.jsxs)(t.p,{children:["For deploying and interacting with smart contracts, a JavaScript provider like the one injected by the ",(0,i.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"})," browser extension is used. This provider enables JavaScript applications to communicate with the Autonomys network or any Ethereum-compatible network. It's compatible with both ",(0,i.jsx)(t.a,{href:"https://docs.ethers.org/v5/",children:"ethers.js"}),", ",(0,i.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.10.0/",children:"web3.js"})," and ",(0,i.jsx)(t.a,{href:"https://web3py.readthedocs.io/en/stable/",children:"Web3.py"}),", allowing developers to use either library for their blockchain operations."]}),"\n",(0,i.jsx)(t.p,{children:"All these tools together provide an ecosystem for EVM-compatible smart contract development, making the process more manageable and efficient."}),"\n",(0,i.jsx)(t.h3,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"A smart contract is a digital agreement coded into a blockchain network, designed to automatically execute or enforce the terms of a contract. These self-executing contracts, primarily developed on decentralized computer systems, eliminate the need for an intermediary by conducting transactions directly between parties. Smart contracts are transparent, traceable, and irreversible, providing immediate certainty about outcomes once preset conditions are met. They streamline various applications, from finance to supply chain management, by automating workflows and facilitating trustless interactions."}),"\n",(0,i.jsx)(t.h3,{id:"differences-with-ethereum",children:"Differences with Ethereum"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Autonomys Token (ATC) (TSSC for Subspace Credit during the testnet) is the sole method of payment for gas within the Autonomys EVM runtime.\nThere will be a bridge to convert farmed tokens into EVM-compatible tokens to cover the gas fees, however, at the moment the only viable option to get some TSSC on your wallet is through the Autonomys ",(0,i.jsx)(t.a,{href:"/id/docs/develop/nova/faucet",children:"faucet"})]}),"\n",(0,i.jsx)(t.h3,{id:"what-is-solidity",children:"What is Solidity?"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Solidity is a statically typed, contract-oriented, high-level language primarily used for implementing smart contracts on blockchain platforms like Ethereum. Its syntax is similar to that of JavaScript and C++, which makes it relatively easy for developers from those language backgrounds to pick it up. Its features such as contract classes, inheritance, complex user-defined types, and libraries bring object-oriented programming capabilities to blockchain development."}),"\n",(0,i.jsx)(t.p,{children:'One of the key features of Solidity is its first-class support for "contracts." These are akin to classes in object-oriented languages but are deployed on the Ethereum blockchain, allowing them to maintain a persistent state over time and interact with other contracts, the same way as objects interact in traditional programming.'}),"\n",(0,i.jsx)(t.p,{children:"Moreover, Solidity comes with safety features, such as a robust type system and control structures, which help prevent bugs. It also provides a variety of built-in functions for performing operations like cryptographic hashing, signature verification, and address checking, making it easier to write secure code."}),"\n",(0,i.jsx)(t.p,{children:"The popularity of Solidity is primarily due to its design for Ethereum, the leading smart contract platform. As Ethereum gained traction for decentralized applications (dApps), Solidity became the go-to language for writing smart contracts for these applications. Furthermore, its resemblance to widely-used languages like JavaScript and C++ helped its adoption amongst developers."}),"\n",(0,i.jsx)(t.p,{children:"Lastly, Solidity is continually evolving with frequent updates, new features, and improvements that address the unique needs of blockchain development. This responsive development and the thriving community around it further solidify its position as the leading language for smart contract development."}),"\n",(0,i.jsxs)(t.p,{children:["Solidity has a great community of developers and extensive documentation is available on the official ",(0,i.jsx)(t.a,{href:"https://soliditylang.org/",children:"website"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var i=o(6540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);