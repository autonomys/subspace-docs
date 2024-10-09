"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9699],{1756:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(4848),o=t(8453);const s={title:"Consensus",sidebar_position:2,description:"Functions to interact with the consensus chain",slug:"/develop/auto-sdk/consensus",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Consensus"]},i=void 0,r={id:"develop/auto_sdk/auto-consensus",title:"Consensus",description:"Functions to interact with the consensus chain",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-consensus.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/consensus",permalink:"/tr/develop/auto-sdk/consensus",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-consensus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Consensus",sidebar_position:2,description:"Functions to interact with the consensus chain",slug:"/develop/auto-sdk/consensus",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Consensus"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tr/develop/auto-sdk/intro"},next:{title:"Auto ID",permalink:"/tr/develop/auto-sdk/auto-id"}},c={},l=[{value:"Auto-Consensus Package Documentation",id:"auto-consensus-package-documentation",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Installation",id:"installation",level:3},{value:"Importing the Package",id:"importing-the-package",level:3},{value:"Overview of the <code>api</code> Object",id:"overview-of-the-api-object",level:3},{value:"Available Functions",id:"available-functions",level:2},{value:"Account Management",id:"account-management",level:3},{value:"Balances",id:"balances",level:3},{value:"Blockchain Information",id:"blockchain-information",level:3},{value:"Consensus Information",id:"consensus-information",level:3},{value:"Domains",id:"domains",level:3},{value:"Operators and Staking",id:"operators-and-staking",level:3},{value:"Transfers",id:"transfers",level:3},{value:"Utility Functions",id:"utility-functions",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"1. Account Management",id:"1-account-management",level:3},{value:"Retrieve Account Information",id:"retrieve-account-information",level:4},{value:"Activate a Wallet and Check Balance",id:"activate-a-wallet-and-check-balance",level:4},{value:"2. Balance Operations",id:"2-balance-operations",level:3},{value:"Retrieve Account Balance",id:"retrieve-account-balance",level:4},{value:"Get Total Issuance",id:"get-total-issuance",level:4},{value:"3. Transfers",id:"3-transfers",level:3},{value:"Transfer Funds Between Accounts",id:"transfer-funds-between-accounts",level:4},{value:"Transfer Tokens",id:"transfer-tokens",level:4},{value:"4. Staking Operations",id:"4-staking-operations",level:3},{value:"Register an Operator",id:"register-an-operator",level:4},{value:"Nominate an Operator",id:"nominate-an-operator",level:4},{value:"5. Blockchain Information",id:"5-blockchain-information",level:3},{value:"Get Block and Network Information",id:"get-block-and-network-information",level:4},{value:"6. Domain Interactions",id:"6-domain-interactions",level:3},{value:"Retrieve Domains Information",id:"retrieve-domains-information",level:4},{value:"Get Domain Staking Summary",id:"get-domain-staking-summary",level:4},{value:"Get Latest Confirmed Domain Blocks",id:"get-latest-confirmed-domain-blocks",level:4},{value:"Notes",id:"notes",level:2}];function d(n){const e={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"auto-consensus-package-documentation",children:"Auto-Consensus Package Documentation"}),"\n",(0,a.jsx)(e.h3,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"@autonomys/auto-consensus"})," package provides functions for interacting with the Consensus Layer of the Autonomys Network. It allows developers to perform actions such as account management, balance inquiries, transfers, staking operations, and more. This package works hand-in-hand with ",(0,a.jsx)(e.code,{children:"@autonomys/auto-utils"})," to simplify blockchain interactions."]}),"\n",(0,a.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(e.p,{children:"Install the package via npm or yarn:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"# Using npm\nnpm install @autonomys/auto-consensus\n\n# Using yarn\nyarn add @autonomys/auto-consensus\n"})}),"\n",(0,a.jsx)(e.h3,{id:"importing-the-package",children:"Importing the Package"}),"\n",(0,a.jsxs)(e.p,{children:["Before using the functions provided by the ",(0,a.jsx)(e.code,{children:"auto-consensus"})," package, you need to import them into your project:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"// Import specific functions\nimport { balance, transfer, account } from '@autonomys/auto-consensus';\n\n// Or import everything\nimport * as consensus from '@autonomys/auto-consensus';\n"})}),"\n",(0,a.jsxs)(e.h3,{id:"overview-of-the-api-object",children:["Overview of the ",(0,a.jsx)(e.code,{children:"api"})," Object"]}),"\n",(0,a.jsxs)(e.p,{children:["Many functions in the ",(0,a.jsx)(e.code,{children:"auto-consensus"})," package require an ",(0,a.jsx)(e.code,{children:"api"})," object as a parameter. This ",(0,a.jsx)(e.code,{children:"api"})," object is an instance of ",(0,a.jsx)(e.code,{children:"ApiPromise"})," from the Polkadot.js API library, which serves as the gateway to interact with the blockchain node."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsxs)(e.strong,{children:["Core Components of ",(0,a.jsx)(e.code,{children:"api"})]}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"api.rpc"}),": Methods to perform remote procedure calls to the node."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"api.query"}),": Access to the blockchain's runtime storage."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"api.tx"}),": Create and submit extrinsics (transactions) to the blockchain."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"api.consts"}),": Runtime constants defined in the blockchain's metadata."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"api.events"}),": Access to events emitted by the blockchain."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"api.types"}),": Type definitions used by the chain."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { createConnection } from '@autonomys/auto-utils';\n\nasync function getApiInstance() {\n  const endpoint = 'wss://rpc-0.gemini-3h.subspace.network/ws';\n  const api = await createConnection(endpoint);\n  return api;\n}\n"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,a.jsx)(e.h3,{id:"account-management",children:"Account Management"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"account(api, address): Promise<AccountData>"})}),": Retrieves account's nonce and balance data."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"balance(api, address): Promise<BalanceData>"})}),": Retrieves an account's balance details."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"balances",children:"Balances"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"totalIssuance(networkId?): Promise<BigInt>"})}),": Gets total token issuance in the network."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"blockchain-information",children:"Blockchain Information"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"block(api): Promise<RawBlock>"})}),": Retrieves the latest block data."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"blockHash(api): Promise<string>"})}),": Retrieves the latest block hash."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"blockNumber(api): Promise<number>"})}),": Retrieves the current block number."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"networkTimestamp(api): Promise<bigint>"})}),": Retrieves the network timestamp."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"consensus-information",children:"Consensus Information"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"blockchainSize(api): Promise<bigint>"})}),": Calculates the blockchain's total size."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"spacePledge(api): Promise<bigint>"})}),": Calculates total space pledged by farmers."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"domains",children:"Domains"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"domainStakingSummary(api): Promise<DomainStakingSummary[]>"})}),": Retrieves domain staking summaries."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"domains(api): Promise<DomainRegistry[]>"})}),": Retrieves domain registries."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"latestConfirmedDomainBlock(api): Promise<ConfirmedDomainBlock[]>"})}),": Retrieves latest confirmed blocks per domain."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"operators-and-staking",children:"Operators and Staking"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"nominateOperator(params): SubmittableExtrinsic"})}),": Creates a transaction to nominate an operator."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"operator(api, operatorId): Promise<OperatorDetails>"})}),": Retrieves details of a specific operator."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"registerOperator(params): SubmittableExtrinsic"})}),": Creates a transaction to register a new operator."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"transfers",children:"Transfers"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"transfer(api, receiver, amount, allowDeath?): SubmittableExtrinsic"})}),": Creates a transaction to transfer funds."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"transferAll(api, receiver, keepAlive?): SubmittableExtrinsic"})}),": Creates a transaction to transfer all tokens."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"query<T>(api, methodPath, params?): Promise<T>"})}),": Queries blockchain state for a method."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"remark(api, remark, withEvent?): SubmittableExtrinsic"})}),": Creates a remark transaction."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"rpc<T>(api, methodPath, params?): Promise<T>"})}),": Performs an RPC call."]}),"\n"]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"Note:"})," All asynchronous functions return a ",(0,a.jsx)(e.code,{children:"Promise"})," and should be used with ",(0,a.jsx)(e.code,{children:"await"})," for proper execution flow."]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,a.jsxs)(e.p,{children:["Below are examples demonstrating how to use the functions provided by ",(0,a.jsx)(e.code,{children:"@autonomys/auto-consensus"}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"1-account-management",children:"1. Account Management"}),"\n",(0,a.jsx)(e.h4,{id:"retrieve-account-information",children:"Retrieve Account Information"}),"\n",(0,a.jsx)(e.p,{children:"Get detailed account information, including the nonce and balance data."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { account } from '@autonomys/auto-consensus';\nimport { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n  const accountData = await account(api, 'your_address');\n\n  console.log(`Nonce: ${accountData.nonce}`);\n  console.log(`Free Balance: ${accountData.data.free}`);\n  console.log(`Reserved Balance: ${accountData.data.reserved}`);\n\n  await api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.h4,{id:"activate-a-wallet-and-check-balance",children:"Activate a Wallet and Check Balance"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { activateWallet } from '@autonomys/auto-utils';\nimport { balance } from '@autonomys/auto-consensus';\n\n(async () => {\n  // Activate a wallet using a mnemonic phrase\n  const { api, accounts } = await activateWallet({\n    mnemonic: 'your mnemonic phrase here', // Replace with your mnemonic\n    networkId: 'gemini-3h', // Optional: specify the network ID\n  });\n\n  const account = accounts[0];\n  console.log(`Connected with account address: ${account.address}`);\n\n  // Check the account balance\n  const accountBalance = await balance(api, account.address);\n  console.log(`Account balance: ${accountBalance.free}`);\n\n  // Disconnect when done\n  await api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"2-balance-operations",children:"2. Balance Operations"}),"\n",(0,a.jsx)(e.h4,{id:"retrieve-account-balance",children:"Retrieve Account Balance"}),"\n",(0,a.jsx)(e.p,{children:"Get the free balance of an account."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { balance } from '@autonomys/auto-consensus';\nimport { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n  const accountBalance = await balance(api, 'your_address');\n\n  console.log(`Free Balance: ${accountBalance.free}`);\n\n  await api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.h4,{id:"get-total-issuance",children:"Get Total Issuance"}),"\n",(0,a.jsx)(e.p,{children:"Retrieve the total token issuance in the network."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { totalIssuance } from '@autonomys/auto-consensus';\n\n(async () => {\n  const total = await totalIssuance('gemini-3h');\n\n  console.log(`Total Issuance: ${total.toString()}`);\n})();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"3-transfers",children:"3. Transfers"}),"\n",(0,a.jsx)(e.h4,{id:"transfer-funds-between-accounts",children:"Transfer Funds Between Accounts"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { activateWallet } from '@autonomys/auto-utils';\nimport { transfer } from '@autonomys/auto-consensus';\n\n(async () => {\n  // Activate sender's wallet\n  const senderWallet = await activateWallet({\n    mnemonic: 'sender mnemonic phrase', // Replace with sender's mnemonic\n  });\n  const sender = senderWallet.accounts[0];\n\n  // Activate receiver's wallet\n  const receiverWallet = await activateWallet({\n    mnemonic: 'receiver mnemonic phrase', // Replace with receiver's mnemonic\n  });\n  const receiver = receiverWallet.accounts[0];\n\n  // Transfer 1 ATC from sender to receiver\n  const amount = 1; // Amount in ATC\n  const transferTx = await transfer(senderWallet.api, receiver.address, amount);\n\n  // Sign and send the transaction\n  await transferTx.signAndSend(sender, ({ status, txHash, events }) => {\n    if (status.isInBlock) {\n      console.log(`Transaction included at blockHash ${status.asInBlock}`);\n      console.log(`Transaction hash: ${txHash}`);\n    } else if (status.isFinalized) {\n      console.log(`Transaction finalized at blockHash ${status.asFinalized}`);\n    }\n  });\n\n  // Disconnect when done\n  await senderWallet.api.disconnect();\n  await receiverWallet.api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.h4,{id:"transfer-tokens",children:"Transfer Tokens"}),"\n",(0,a.jsx)(e.p,{children:"Transfer tokens from one account to another."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { transfer } from '@autonomys/auto-consensus';\nimport { activateWallet, signAndSendTx, disconnect } from '@autonomys/auto-utils';\n\n(async () => {\n  const { api, accounts } = await activateWallet({\n    networkId: 'gemini-3h',\n    mnemonic: 'your_mnemonic',\n  });\n\n  const sender = accounts[0];\n  const recipientAddress = 'recipient_address';\n  const amount = '1000000000000'; // Amount in smallest units (e.g., wei)\n\n  const tx = await transfer(api, recipientAddress, amount);\n\n  // Sign and send the transaction\n  await signAndSendTx(sender, tx);\n\n  console.log(`Transferred ${amount} tokens to ${recipientAddress}`);\n\n  await disconnect(api);\n})();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"4-staking-operations",children:"4. Staking Operations"}),"\n",(0,a.jsx)(e.h4,{id:"register-an-operator",children:"Register an Operator"}),"\n",(0,a.jsx)(e.p,{children:"Register a new operator for staking."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { registerOperator } from '@autonomys/auto-consensus';\nimport { activateWallet, signAndSendTx } from '@autonomys\n\n/auto-utils';\n\n(async () => {\n  const { api } = await activateWallet({\n    networkId: 'gemini-3h',\n    mnemonic: 'sender_mnemonic',\n  });\n\n  // Sender's account (who will register the operator)\n  const { accounts: senderAccounts } = await activateWallet({\n    networkId: 'gemini-3h',\n    mnemonic: 'sender_mnemonic',\n  });\n  const sender = senderAccounts[0];\n\n  // Operator's account\n  const { accounts: operatorAccounts } = await activateWallet({\n    networkId: 'gemini-3h',\n    mnemonic: 'operator_mnemonic',\n  });\n  const operatorAccount = operatorAccounts[0];\n\n  const tx = await registerOperator({\n    api,\n    senderAddress: sender.address,\n    Operator: operatorAccount,\n    domainId: '0', // Domain ID where the operator will be registered\n    amountToStake: '1000000000000000000', // Amount in smallest units\n    minimumNominatorStake: '10000000000000000',\n    nominationTax: '5', // Percentage as a string (e.g., '5' for 5%)\n  });\n\n  // Sign and send the transaction\n  await signAndSendTx(sender, tx);\n\n  console.log('Operator registered successfully');\n})();\n"})}),"\n",(0,a.jsx)(e.h4,{id:"nominate-an-operator",children:"Nominate an Operator"}),"\n",(0,a.jsx)(e.p,{children:"Nominate an existing operator by staking tokens."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { nominateOperator } from '@autonomys/auto-consensus';\nimport { activateWallet, signAndSendTx } from '@autonomys/auto-utils';\n\n(async () => {\n  const { api, accounts } = await activateWallet({\n    networkId: 'gemini-3h',\n    mnemonic: 'nominator_mnemonic',\n  });\n  const nominator = accounts[0];\n\n  const operatorId = '1'; // The ID of the operator to nominate\n  const amountToStake = '5000000000000000000'; // Amount in smallest units\n\n  const tx = await nominateOperator({\n    api,\n    operatorId,\n    amountToStake,\n  });\n\n  // Sign and send the transaction\n  await signAndSendTx(nominator, tx);\n\n  console.log(`Nominated operator ${operatorId} with ${amountToStake} stake`);\n})();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"5-blockchain-information",children:"5. Blockchain Information"}),"\n",(0,a.jsx)(e.h4,{id:"get-block-and-network-information",children:"Get Block and Network Information"}),"\n",(0,a.jsx)(e.p,{children:"Retrieve the current block number, block hash, and network timestamp."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { blockNumber, blockHash, networkTimestamp } from '@autonomys/auto-consensus';\nimport { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n\n  const currentBlockNumber = await blockNumber(api);\n  const currentBlockHash = await blockHash(api);\n  const currentTimestamp = await networkTimestamp(api);\n\n  console.log(`Current Block Number: ${currentBlockNumber}`);\n  console.log(`Current Block Hash: ${currentBlockHash}`);\n  console.log(`Network Timestamp: ${currentTimestamp}`);\n\n  await api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"6-domain-interactions",children:"6. Domain Interactions"}),"\n",(0,a.jsx)(e.h4,{id:"retrieve-domains-information",children:"Retrieve Domains Information"}),"\n",(0,a.jsx)(e.p,{children:"Get the list of domains registered on the network."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { domains } from '@autonomys/auto-consensus';\nimport { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n  const domainList = await domains(api);\n\n  domainList.forEach((domain) => {\n    console.log(`Domain ID: ${domain.id}`);\n    console.log(`Owner Address: ${domain.owner}`);\n    console.log(`Creation Block: ${domain.creationBlock}`);\n    // ...other domain properties\n  });\n\n  await api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.h4,{id:"get-domain-staking-summary",children:"Get Domain Staking Summary"}),"\n",(0,a.jsx)(e.p,{children:"Retrieve staking summaries for all domains."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { domainStakingSummary } from '@autonomys/auto-consensus';\nimport { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n  const stakingSummaries = await domainStakingSummary(api);\n\n  stakingSummaries.forEach((summary) => {\n    console.log(`Domain ID: ${summary.domainId}`);\n    console.log(`Total Stake: ${summary.totalStake}`);\n    // ...other summary properties\n  });\n\n  await api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.h4,{id:"get-latest-confirmed-domain-blocks",children:"Get Latest Confirmed Domain Blocks"}),"\n",(0,a.jsx)(e.p,{children:"Fetch the latest confirmed blocks for each domain."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { latestConfirmedDomainBlock } from '@autonomys/auto-consensus';\nimport { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  const api = await activate({ networkId: 'gemini-3h' });\n  const confirmedBlocks = await latestConfirmedDomainBlock(api);\n\n  confirmedBlocks.forEach((blockInfo) => {\n    console.log(`Domain ID: ${blockInfo.id}`);\n    console.log(`Block Number: ${blockInfo.number}`);\n    console.log(`Block Hash: ${blockInfo.hash}`);\n    // ...other block properties\n  });\n\n  await api.disconnect();\n})();\n"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Asynchronous Functions"}),": Many functions return promises and should be used with ",(0,a.jsx)(e.code,{children:"await"})," to ensure proper execution flow."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"API Disconnection"}),": Always disconnect the API instance after your operations are complete to free up resources."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Error Handling"}),": Wrap your asynchronous calls in ",(0,a.jsx)(e.code,{children:"try...catch"})," blocks to handle potential errors gracefully."]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>r});var a=t(6540);const o={},s=a.createContext(o);function i(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);