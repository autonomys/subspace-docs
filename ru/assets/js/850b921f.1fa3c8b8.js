"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7800],{29227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(74848),i=t(28453);const a={title:"Utils",sidebar_position:5,description:"Utility functions for the Auto SDK",slug:"/develop/auto-sdk/utils",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Utils"]},r=void 0,o={id:"develop/auto_sdk/auto-utils",title:"Utils",description:"Utility functions for the Auto SDK",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-utils.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/utils",permalink:"/ru/develop/auto-sdk/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-utils.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Utils",sidebar_position:5,description:"Utility functions for the Auto SDK",slug:"/develop/auto-sdk/utils",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Utils"]},sidebar:"tutorialSidebar",previous:{title:"XDM",permalink:"/ru/develop/auto-sdk/xdm"},next:{title:"Drive",permalink:"/ru/develop/auto-sdk/drive"}},l={},c=[{value:"Auto-Utils Package Documentation",id:"auto-utils-package-documentation",level:2},{value:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",level:3},{value:"Installation",id:"installation",level:3},{value:"Importing the Package",id:"importing-the-package",level:3},{value:"Available Functions",id:"available-functions",level:2},{value:"Account and Address Utilities",id:"account-and-address-utilities",level:3},{value:"API and Connection Management",id:"api-and-connection-management",level:3},{value:"Cryptographic Functions",id:"cryptographic-functions",level:3},{value:"Data Storage",id:"data-storage",level:3},{value:"Event Management",id:"event-management",level:3},{value:"Network Management",id:"network-management",level:3},{value:"Signing Utilities",id:"signing-utilities",level:3},{value:"String Utilities",id:"string-utilities",level:3},{value:"Token and Value Formatting",id:"token-and-value-formatting",level:3},{value:"Transaction Utilities",id:"transaction-utilities",level:3},{value:"Wallet Management",id:"wallet-management",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"1. Wallet Management",id:"1-wallet-management",level:3},{value:"<strong>Activate a Wallet</strong>",id:"activate-a-wallet",level:4},{value:"<strong>Activate a Wallet Using URI</strong>",id:"activate-a-wallet-using-uri",level:4},{value:"<strong>Create Mock Wallets for Testing</strong>",id:"create-mock-wallets-for-testing",level:4},{value:"2. Network Management",id:"2-network-management",level:3},{value:"<strong>Get Available Networks</strong>",id:"get-available-networks",level:4},{value:"<strong>Get Network Details</strong>",id:"get-network-details",level:4},{value:"<strong>Get Domain Details</strong>",id:"get-domain-details",level:4},{value:"3. Cryptographic Functions",id:"3-cryptographic-functions",level:3},{value:"<strong>Hash Data Using BLAKE2b-256</strong>",id:"hash-data-using-blake2b-256",level:4},{value:"<strong>Convert String to Uint8Array</strong>",id:"convert-string-to-uint8array",level:4},{value:"<strong>Concatenate Uint8Arrays</strong>",id:"concatenate-uint8arrays",level:4},{value:"4. API Activation",id:"4-api-activation",level:3},{value:"<strong>Activate the Network API</strong>",id:"activate-the-network-api",level:4},{value:"<strong>Activate a Domain API</strong>",id:"activate-a-domain-api",level:4},{value:"5. Data Storage",id:"5-data-storage",level:3},{value:"<strong>Save and Read Data</strong>",id:"save-and-read-data",level:4},{value:"6. Address Utilities",id:"6-address-utilities",level:3},{value:"<strong>Convert Address Formats</strong>",id:"convert-address-formats",level:4},{value:"Notes",id:"notes",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"auto-utils-package-documentation",children:"Auto-Utils Package Documentation"}),"\n",(0,s.jsx)(n.h3,{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@autonomys/auto-utils"})," package provides core utility functions for interacting with the Autonomys Network. It offers functionalities for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Wallet Management"}),": Initialize and manage wallets using mnemonics or URIs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Network Configuration"}),": Access and manage network and domain settings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Storage"}),": Save and read data to and from local storage or the file system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cryptographic Operations"}),": Perform hashing and data manipulation using cryptographic functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Activation"}),": Activate and manage connections to the Autonomys Network APIs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Address Utilities"}),": Convert and decode addresses to and from standardized formats."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This package serves as the foundational layer for building applications within the Autonomys ecosystem."}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Install the package via npm or yarn:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Using npm\nnpm install @autonomys/auto-utils\n\n# Using yarn\nyarn add @autonomys/auto-utils\n"})}),"\n",(0,s.jsx)(n.h3,{id:"importing-the-package",children:"Importing the Package"}),"\n",(0,s.jsxs)(n.p,{children:["Before using the functions provided by the ",(0,s.jsx)(n.code,{children:"auto-utils"})," package, you need to import them into your project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Import specific functions\nimport { activateWallet, activate, blake2b_256 } from '@autonomys/auto-utils';\n\n// Or import everything\nimport * as utils from '@autonomys/auto-utils';\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,s.jsx)(n.h3,{id:"account-and-address-utilities",children:"Account and Address Utilities"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"address(input): string"})}),": Standardizes an address format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"createAccountIdType(api, address): Uint8Array"})}),": Creates an ",(0,s.jsx)(n.code,{children:"AccountId"})," object from an address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"decode(input): Uint8Array"})}),": Decodes an address to bytes."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"api-and-connection-management",children:"API and Connection Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"activate(options?): Promise<ApiPromise>"})}),": Connects to the Autonomys Network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"activateDomain(params): Promise<ApiPromise>"})}),": Connects to a specific domain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"createConnection(endpoint, options?): Promise<ApiPromise>"})}),": Creates a new API connection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"disconnect(api): Promise<void>"})}),": Disconnects an API instance."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cryptographic-functions",children:"Cryptographic Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"blake2b_256(data): string"})}),": Hashes data with BLAKE2b-256."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"concatenateUint8Arrays(...arrays): Uint8Array"})}),": Concatenates multiple ",(0,s.jsx)(n.code,{children:"Uint8Array"}),"s."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"stringToUint8Array(string): Uint8Array"})}),": Converts a string to ",(0,s.jsx)(n.code,{children:"Uint8Array"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"data-storage",children:"Data Storage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"read(key): Promise<any>"})}),": Reads data from storage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"readFromFileSystem(key): Promise<any>"})}),": Reads from file system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"readFromLocalStorage(key): Promise<any>"})}),": Reads from localStorage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"save(key, value): Promise<void>"})}),": Saves data to storage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"saveOnFileSystem(key, value): Promise<void>"})}),": Saves to file system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"saveOnLocalStorage(key, value): Promise<void>"})}),": Saves to localStorage."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"event-management",children:"Event Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"eventName(type, event): string"})}),": Combines type and event to a full event name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"eventsGroup"})}),": Groups system events by name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"expectSuccessfulTxEvent"})}),": Default success event names array."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Type"})}),": Enum for event types (e.g., ",(0,s.jsx)(n.code,{children:"system"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"validateEvents(events, eventsExpected?, tx, block, log?): EventsValidated"})}),": Checks if expected events are in transaction events."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"network-management",children:"Network Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"getNetworkDetails(options): NetworkDetails"})}),": Gets details of a network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"getNetworkDomainDetails(options): DomainDetails"})}),": Gets details of a domain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"getNetworkDomainRpcUrls(options): string[]"})}),": Gets RPC URLs for a domain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"getNetworkRpcUrls(options): string[]"})}),": Gets RPC URLs for a network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"networks"})}),": Array of available networks."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signing-utilities",children:"Signing Utilities"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"signMessage(signer, address, data): Promise<{ signature: string }>"})}),": Signs a message with a signer and address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"signatureVerify"})}),": Verifies signatures (re-exported from ",(0,s.jsx)(n.code,{children:"@polkadot/util-crypto"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"signingKey(publicKey): string"})}),": Converts a public key to a hex string."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"string-utilities",children:"String Utilities"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"capitalizeFirstLetter(string): string"})}),": Capitalizes first letter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fixLengthEntryId(blockHeight, indexInBlock?): string"})}),": Creates fixed-length IDs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"isAddress(address): boolean"})}),": Validates a Substrate address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"isHex(value): boolean"})}),": Validates a hexadecimal string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"shortString(value, initialLength?, endLength?): string"})}),": Truncates strings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"stringify(value): string"})}),": Stringifies values, handling BigInt."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"token-and-value-formatting",children:"Token and Value Formatting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"formatSpacePledged(value, decimals?): string"})}),": Formats space amount with units."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"formatTokenAmount(amount, decimals?): bigint"})}),": Formats token amount with decimals."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"parseTokenAmount(amount, decimals?): number"})}),": Parses token amount with decimals."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"transaction-utilities",children:"Transaction Utilities"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"signAndSendTx(sender, tx, options?, eventsExpected?, log?, mapErrorCodeToEnum?): Promise<TransactionSignedAndSend>"})}),": Signs, sends, and validates a transaction."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wallet-management",children:"Wallet Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"activateWallet(options): Promise<{ api, accounts }>"})}),": Activates a wallet using mnemonic or URI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"generateWallet(): GeneratedWallet"})}),": Generates a new wallet with mnemonic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"getMockWallet(name, wallets): Wallet"})}),": Retrieves a mock wallet by name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"mockWallets(options, api?): Promise<Wallet[]>"})}),": Creates mock wallets for testing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"setupWallet(params): Wallet"})}),": Sets up a wallet from mnemonic or URI."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note:"})," All asynchronous functions return a ",(0,s.jsx)(n.code,{children:"Promise"})," and should be used with ",(0,s.jsx)(n.code,{children:"await"})," for proper execution flow."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Below are examples demonstrating how to use the functions provided by ",(0,s.jsx)(n.code,{children:"@autonomys/auto-utils"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"1-wallet-management",children:"1. Wallet Management"}),"\n",(0,s.jsx)(n.h4,{id:"activate-a-wallet",children:(0,s.jsx)(n.strong,{children:"Activate a Wallet"})}),"\n",(0,s.jsx)(n.p,{children:"Activate a wallet using a mnemonic phrase:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { activateWallet } from '@autonomys/auto-utils';\n\n(async () => {\n  const mnemonic = 'your mnemonic phrase here';\n\n  const { api, accounts } = await activateWallet({\n    mnemonic,\n    networkId: 'gemini-3h', // Optional: specify the network ID\n  });\n\n  const account = accounts[0];\n  console.log(`Connected with account address: ${account.address}`);\n\n  // Perform actions with the account...\n\n  // Disconnect when done\n  await api.disconnect();\n})();\n"})}),"\n",(0,s.jsx)(n.h4,{id:"activate-a-wallet-using-uri",children:(0,s.jsx)(n.strong,{children:"Activate a Wallet Using URI"})}),"\n",(0,s.jsx)(n.p,{children:"Activate a wallet using a URI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { activateWallet } from '@autonomys/auto-utils';\n\n(async () => {\n  const { api, accounts } = await activateWallet({\n    uri: '//Alice',\n    networkId: 'localhost', // Connect to a local network\n  });\n\n  const account = accounts[0];\n  console.log(`Connected with account address: ${account.address}`);\n\n  // Disconnect when done\n  await api.disconnect();\n})();\n"})}),"\n",(0,s.jsx)(n.h4,{id:"create-mock-wallets-for-testing",children:(0,s.jsx)(n.strong,{children:"Create Mock Wallets for Testing"})}),"\n",(0,s.jsx)(n.p,{children:"Create mock wallets for testing purposes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { activate, mockWallets, getMockWallet } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n\n  const wallets = await mockWallets({}, api);\n  const aliceWallet = getMockWallet('Alice', wallets);\n  const bobWallet = getMockWallet('Bob', wallets);\n\n  console.log(`Alice's address: ${aliceWallet.accounts[0].address}`);\n  console.log(`Bob's address: ${bobWallet.accounts[0].address}`);\n\n  // Disconnect when done\n  await api.disconnect();\n})();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-network-management",children:"2. Network Management"}),"\n",(0,s.jsx)(n.h4,{id:"get-available-networks",children:(0,s.jsx)(n.strong,{children:"Get Available Networks"})}),"\n",(0,s.jsx)(n.p,{children:"List all available networks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { networks } from '@autonomys/auto-utils';\n\nnetworks.forEach((network) => {\n  console.log(`Network ID: ${network.id}, Name: ${network.name}`);\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"get-network-details",children:(0,s.jsx)(n.strong,{children:"Get Network Details"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve details of a specific network:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { getNetworkDetails } from '@autonomys/auto-utils';\n\nconst network = getNetworkDetails({ networkId: 'gemini-3h' });\nconsole.log(`Network Name: ${network.name}`);\nconsole.log(`RPC URLs: ${network.rpcUrls.join(', ')}`);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"get-domain-details",children:(0,s.jsx)(n.strong,{children:"Get Domain Details"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve details of a specific domain within a network:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { getNetworkDomainDetails } from '@autonomys/auto-utils';\n\nconst domain = getNetworkDomainDetails({ domainId: '1', networkId: 'gemini-3h' });\nconsole.log(`Domain Name: ${domain.name}`);\nconsole.log(`RPC URLs: ${domain.rpcUrls.join(', ')}`);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-cryptographic-functions",children:"3. Cryptographic Functions"}),"\n",(0,s.jsx)(n.h4,{id:"hash-data-using-blake2b-256",children:(0,s.jsx)(n.strong,{children:"Hash Data Using BLAKE2b-256"})}),"\n",(0,s.jsx)(n.p,{children:"Hash a string using BLAKE2b-256:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { blake2b_256, stringToUint8Array } from '@autonomys/auto-utils';\n\nconst data = 'Hello, Autonomys!';\nconst dataBytes = stringToUint8Array(data);\nconst hash = blake2b_256(dataBytes);\n\nconsole.log(`Hash: ${hash}`); // Outputs the hash of the input string\n"})}),"\n",(0,s.jsx)(n.h4,{id:"convert-string-to-uint8array",children:(0,s.jsx)(n.strong,{children:"Convert String to Uint8Array"})}),"\n",(0,s.jsxs)(n.p,{children:["Convert a string to a ",(0,s.jsx)(n.code,{children:"Uint8Array"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { stringToUint8Array } from '@autonomys/auto-utils';\n\nconst text = 'Sample text';\nconst byteArray = stringToUint8Array(text);\n\nconsole.log(byteArray); // Outputs Uint8Array representation of the string\n"})}),"\n",(0,s.jsx)(n.h4,{id:"concatenate-uint8arrays",children:(0,s.jsx)(n.strong,{children:"Concatenate Uint8Arrays"})}),"\n",(0,s.jsxs)(n.p,{children:["Concatenate two ",(0,s.jsx)(n.code,{children:"Uint8Array"})," instances:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { stringToUint8Array, concatenateUint8Arrays } from '@autonomys/auto-utils';\n\nconst array1 = stringToUint8Array('First part ');\nconst array2 = stringToUint8Array('Second part');\n\nconst concatenated = concatenateUint8Arrays(array1, array2);\nconsole.log(`Concatenated Result: ${new TextDecoder().decode(concatenated)}`);\n// Outputs: \"First part Second part\"\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-api-activation",children:"4. API Activation"}),"\n",(0,s.jsx)(n.h4,{id:"activate-the-network-api",children:(0,s.jsx)(n.strong,{children:"Activate the Network API"})}),"\n",(0,s.jsx)(n.p,{children:"Connect to the Autonomys Network:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n\n  console.log('API connected');\n\n  // Perform API calls...\n\n  // Disconnect when done\n  await api.disconnect();\n})();\n"})}),"\n",(0,s.jsx)(n.h4,{id:"activate-a-domain-api",children:(0,s.jsx)(n.strong,{children:"Activate a Domain API"})}),"\n",(0,s.jsx)(n.p,{children:"Connect to a specific domain within the network:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { activateDomain } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activateDomain({ domainId: '1', networkId: 'gemini-3h' });\n\n  console.log('Domain API connected');\n\n  // Perform domain-specific API calls...\n\n  // Disconnect when done\n  await api.disconnect();\n})();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"5-data-storage",children:"5. Data Storage"}),"\n",(0,s.jsx)(n.h4,{id:"save-and-read-data",children:(0,s.jsx)(n.strong,{children:"Save and Read Data"})}),"\n",(0,s.jsx)(n.p,{children:"Save data to local storage or the file system and read it back:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { save, read } from '@autonomys/auto-utils';\n\nconst key = 'myData';\nconst value = { message: 'Hello, Autonomys!' };\n\n// Save data\nsave(key, value);\n\n// Read data\nconst retrievedValue = read(key);\nconsole.log(retrievedValue); // Outputs: { message: 'Hello, Autonomys!' }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"6-address-utilities",children:"6. Address Utilities"}),"\n",(0,s.jsx)(n.h4,{id:"convert-address-formats",children:(0,s.jsx)(n.strong,{children:"Convert Address Formats"})}),"\n",(0,s.jsx)(n.p,{children:"Convert an address to a standardized format and decode it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { address, decode } from '@autonomys/auto-utils';\n\nconst originalAddress = '5GmS1wtCfR4tK5SSgnZbVT4kYw5W8NmxmijcsxCQE6oLW6A8';\nconst standardizedAddress = address(originalAddress);\nconst decodedAddress = decode(originalAddress);\n\nconsole.log(`Standardized Address: ${standardizedAddress}`);\nconsole.log('Decoded Address:', decodedAddress);\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note:"})," All asynchronous functions return a ",(0,s.jsx)(n.code,{children:"Promise"})," and should be used with ",(0,s.jsx)(n.code,{children:"await"})," for proper execution flow."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Asynchronous Functions"}),": Use ",(0,s.jsx)(n.code,{children:"await"})," with all promises for proper execution flow."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Disconnection"}),": Always disconnect the API instance after operations to free up resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling"}),": Wrap asynchronous calls in ",(0,s.jsx)(n.code,{children:"try...catch"})," blocks to handle potential errors gracefully."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security Considerations"}),":"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Private Keys"}),": Handle private keys securely. Do not expose them in code or logs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Persistence"}),": Be cautious when saving sensitive data using ",(0,s.jsx)(n.code,{children:"save"})," and ",(0,s.jsx)(n.code,{children:"read"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);