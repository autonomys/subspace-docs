"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8666],{4689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(4848),r=n(8453);const a={title:"General Information",sidebar_position:2,description:"Guide on setting up",slug:"/develop/nova/general",keywords:["metamask","autonomys network"]},o=void 0,s={id:"develop/nova/general-information",title:"General Information",description:"Guide on setting up",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/nova/general-information.md",sourceDirName:"develop/nova",slug:"/develop/nova/general",permalink:"/de/develop/nova/general",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/general-information.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"General Information",sidebar_position:2,description:"Guide on setting up",slug:"/develop/nova/general",keywords:["metamask","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/de/develop/nova/introduction"},next:{title:"Setting up MetaMask",permalink:"/de/develop/nova/metamask"}},l={},d=[{value:"What tools are available for developers?",id:"what-tools-are-available-for-developers",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Differences with Ethereum",id:"differences-with-ethereum",level:3},{value:"What is Solidity?",id:"what-is-solidity",level:3}];function c(e){const t={a:"a",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"what-tools-are-available-for-developers",children:"What tools are available for developers?"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Developing smart contracts involves a suite of tools that aid in writing, testing and deploying code on the blockchain. ",(0,i.jsx)(t.strong,{children:"Autonomys nutzt eine Instanz der Ethereum Virtual Machine. Daher ist jedes Werkzeug, das zum Erstellen, Testen und Bereitstellen intelligenter Vertr\xe4ge auf Ethereum verwendet wird, auch f\xfcr Autonomys verf\xfcgbar!"})]}),"\n",(0,i.jsx)(t.p,{children:"First, Solidity is the primary programming language for writing smart contracts. It is statically typed, supports inheritance, libraries, and complex user-defined types, making it familiar for developers with a background in other statically typed languages such as C++, Java, or JavaScript."}),"\n",(0,i.jsxs)(t.p,{children:["Integrated Development Environments (IDEs) such as the ",(0,i.jsx)(t.a,{href:"https://remix.ethereum.org/",children:"Remix IDE"})," are often used to aid in writing smart contracts. Remix IDE is a browser-based IDE that enables you to write, deploy, and interact with Solidity smart contracts. It features a built-in static analysis tool that checks your code for common errors."]}),"\n",(0,i.jsxs)(t.p,{children:["For local development and testing, you have multiple options. Sie k\xf6nnen Ihre eigene Autonomys Entwickler Node und Farmer aufsetzen, um Vertr\xe4ge zu ver\xf6ffentlichen, Anwendungen zu entwickeln und Tests durchzuf\xfchren. Alternativ k\xf6nnen Sie die Ethereum Entwicklerwerkzeuge wie ",(0,i.jsx)(t.a,{href:"https://hardhat.org/hardhat-network/docs/overview",children:"Hardhat"})," oder ",(0,i.jsx)(t.a,{href:"https://book.getfoundry.sh/anvil/",children:"Anvil"})," verwenden, die aufgrund ihrer EVM-Kompatibilit\xe4t vollst\xe4ndig mit Autonomys kompatibel sind."]}),"\n",(0,i.jsxs)(t.p,{children:["For deploying and interacting with smart contracts, a JavaScript provider like the one injected by the ",(0,i.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"})," browser extension is used. Dieser Provider erm\xf6glicht es JavaScript-Anwendungen, mit dem Autonomys Netzwerk oder einem Ethereum-kompatiblen Netzwerk zu kommunizieren. It's compatible with both ",(0,i.jsx)(t.a,{href:"https://docs.ethers.org/v5/",children:"ethers.js"}),", ",(0,i.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.10.0/",children:"web3.js"})," and ",(0,i.jsx)(t.a,{href:"https://web3py.readthedocs.io/en/stable/",children:"Web3.py"}),", allowing developers to use either library for their blockchain operations."]}),"\n",(0,i.jsx)(t.p,{children:"All these tools together provide an ecosystem for EVM-compatible smart contract development, making the process more manageable and efficient."}),"\n",(0,i.jsx)(t.h3,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"A smart contract is a digital agreement coded into a blockchain network, designed to automatically execute or enforce the terms of a contract. These self-executing contracts, primarily developed on decentralized computer systems, eliminate the need for an intermediary by conducting transactions directly between parties. Smart contracts are transparent, traceable, and irreversible, providing immediate certainty about outcomes once preset conditions are met. They streamline various applications, from finance to supply chain management, by automating workflows and facilitating trustless interactions."}),"\n",(0,i.jsx)(t.h3,{id:"differences-with-ethereum",children:"Differences with Ethereum"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Autonomys Token (ATC) (TSSC for Subspace Credit w\xe4hrend des Testnet) ist die einzige Zahlungsmethode f\xfcr Gas innerhalb der Autonys EVM Laufzeit.\nThere will be a bridge to convert farmed tokens into EVM-compatible tokens to cover the gas fees, however, at the moment the only viable option to get some TSSC on your wallet is through the Autonomys ",(0,i.jsx)(t.a,{href:"/develop/nova/faucet",children:"faucet"})]}),"\n",(0,i.jsx)(t.h3,{id:"what-is-solidity",children:"What is Solidity?"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Solidity is a statically typed, contract-oriented, high-level language primarily used for implementing smart contracts on blockchain platforms like Ethereum. Its syntax is similar to that of JavaScript and C++, which makes it relatively easy for developers from those language backgrounds to pick it up. Its features such as contract classes, inheritance, complex user-defined types, and libraries bring object-oriented programming capabilities to blockchain development."}),"\n",(0,i.jsx)(t.p,{children:'One of the key features of Solidity is its first-class support for "contracts." These are akin to classes in object-oriented languages but are deployed on the Ethereum blockchain, allowing them to maintain a persistent state over time and interact with other contracts, the same way as objects interact in traditional programming.'}),"\n",(0,i.jsx)(t.p,{children:"Moreover, Solidity comes with safety features, such as a robust type system and control structures, which help prevent bugs. It also provides a variety of built-in functions for performing operations like cryptographic hashing, signature verification, and address checking, making it easier to write secure code."}),"\n",(0,i.jsx)(t.p,{children:"The popularity of Solidity is primarily due to its design for Ethereum, the leading smart contract platform. As Ethereum gained traction for decentralized applications (dApps), Solidity became the go-to language for writing smart contracts for these applications. Furthermore, its resemblance to widely-used languages like JavaScript and C++ helped its adoption amongst developers."}),"\n",(0,i.jsx)(t.p,{children:"Lastly, Solidity is continually evolving with frequent updates, new features, and improvements that address the unique needs of blockchain development. This responsive development and the thriving community around it further solidify its position as the leading language for smart contract development."}),"\n",(0,i.jsxs)(t.p,{children:["Solidity has a great community of developers and extensive documentation is available on the official ",(0,i.jsx)(t.a,{href:"https://soliditylang.org/",children:"website"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);