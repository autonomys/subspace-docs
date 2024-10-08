"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9481],{3430:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=i(4848),t=i(8453);const o={title:"Consensus",sidebar_position:2,description:"Functions to interact with consensus chain",slug:"/develop/auto-sdk/consensus",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Consensus"]},a=void 0,r={id:"develop/auto_sdk/auto-consensus",title:"Consensus",description:"Functions to interact with consensus chain",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-consensus.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/consensus",permalink:"/uk/develop/auto-sdk/consensus",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-consensus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Consensus",sidebar_position:2,description:"Functions to interact with consensus chain",slug:"/develop/auto-sdk/consensus",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Consensus"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/uk/develop/auto-sdk/intro"},next:{title:"Auto ID",permalink:"/uk/develop/auto-sdk/auto-id"}},c={},l=[{value:"Available Functions",id:"available-functions",level:2},{value:"Account Management",id:"account-management",level:3},{value:"Balances",id:"balances",level:3},{value:"Blockchain Information",id:"blockchain-information",level:3},{value:"Consensus Information",id:"consensus-information",level:3},{value:"Domains",id:"domains",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Operators and Staking",id:"operators-and-staking",level:3},{value:"Transfers",id:"transfers",level:3},{value:"Utility Functions",id:"utility-functions",level:3},{value:"Import Example",id:"import-example",level:3},{value:"Overview of Api Object",id:"overview-of-api-object",level:3},{value:"Usage Example",id:"usage-example",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,s.jsx)(n.h3,{id:"account-management",children:"Account Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"account(api: Api, address: string): Promise<AccountData>"}),": Retrieves account information including nonce and balance data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"balance(api: Api, address: string): Promise<BalanceData>"}),": Retrieves the balance data of a given address."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"balances",children:"Balances"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"totalIssuance(networkId?: string): Promise<BigInt>"}),": Retrieves the total token issuance in the network."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"blockchain-information",children:"Blockchain Information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"block(api: Api): Promise<RawBlock>"}),": Retrieves the latest block data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockHash(api: Api): Promise<string>"}),": Retrieves the hash of the latest block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockNumber(api: Api): Promise<number>"}),": Retrieves the current block number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getInfo(): Promise<Info>"}),": Retrieves general blockchain information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"networkTimestamp(api: Api): Promise<Codec>"}),": Retrieves the current network timestamp."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"consensus-information",children:"Consensus Information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockchainSize(api: Api): Promise<bigint>"}),": Calculates the total size of the blockchain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxPiecesInSector(api: Api): bigint"}),": Retrieves the maximum number of pieces allowed in a sector."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"segmentCommitment(api: Api): Promise<[StorageKey, Codec][]>"}),": Retrieves the segment commitments."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shouldAdjustSolutionRange(api: Api): Promise<boolean>"}),": Determines whether the solution range should be adjusted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"slotProbability(api: Api): [number, number]"}),": Retrieves the slot probability constants."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"solutionRangeToSectors(solutionRange: bigint, slotProbability: [bigint, bigint], piecesInSector: bigint): bigint"}),": Calculates the number of sectors based on the solution range, slot probability, and pieces in a sector."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"solutionRanges(api: Api): Promise<{ current: bigint | null; next: bigint | null; votingCurrent: bigint | null; votingNext: bigint | null }>"}),": Retrieves the current and next solution ranges."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spacePledge(api: Api): Promise<bigint>"}),": Calculates the total space pledged by farmers."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"domains",children:"Domains"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"domainStakingSummary(api: Api): Promise<DomainStakingSummary[]>"}),": Retrieves staking summaries for domains."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"domains(api: Api): Promise<DomainRegistry[]>"}),": Retrieves a list of domain registries."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"latestConfirmedDomainBlock(api: Api): Promise<ConfirmedDomainBlock[]>"}),": Retrieves the latest confirmed blocks for each domain."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockchainSize(api: Api): Promise<bigint>"}),": Calculates the total size of the blockchain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spacePledge(api: Api): Promise<bigint>"}),": Calculates the total space pledged in the network."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"operators-and-staking",children:"Operators and Staking"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deposits(api: Api, operatorId: StringNumberOrBigInt, account?: string): Promise<Deposit[]>"}),": Retrieves deposit information for an operator and optional account."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deregisterOperator(params: StakingParams): SubmittableExtrinsic"}),": Creates a transaction to deregister an operator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nominateOperator(params: NominateOperatorParams): SubmittableExtrinsic"}),": Creates a transaction to nominate an operator and stake an amount."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"operator(api: Api, operatorId: StringNumberOrBigInt): Promise<OperatorDetails>"}),": Retrieves detailed information about a specific operator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"operators(api: Api): Promise<Operator[]>"}),": Retrieves a list of all operators."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"registerOperator(params: RegisterOperatorParams): SubmittableExtrinsic"}),": Creates a transaction to register a new operator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unlockFunds(params: StakingParams): SubmittableExtrinsic"}),": Creates a transaction to unlock funds after operator deregistration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unlockNominator(params: StakingParams): SubmittableExtrinsic"}),": Creates a transaction to unlock a nominator's funds."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withdrawStake(params: WithdrawStakeParams): SubmittableExtrinsic"}),": Creates a transaction to withdraw staked shares from an operator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withdrawals(api: Api, operatorId: StringNumberOrBigInt, account?: string): Promise<Withdrawal[]>"}),": Retrieves withdrawal information for an operator and optional account."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"transfers",children:"Transfers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transfer(api: ApiPromise, receiver: string, amount: Amount, allowDeath?: boolean): SubmittableExtrinsic"}),": Creates a transaction to transfer an amount to a receiver. Uses ",(0,s.jsx)(n.code,{children:"transferKeepAlive"})," if ",(0,s.jsx)(n.code,{children:"allowDeath"})," is false, otherwise uses ",(0,s.jsx)(n.code,{children:"transferAllowDeath"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transferAll(api: ApiPromise, receiver: string, keepAlive?: boolean): SubmittableExtrinsic"}),": Creates a transaction to transfer all tokens to a receiver. If ",(0,s.jsx)(n.code,{children:"keepAlive"})," is true, keeps the sender's account alive."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query<T>(api: Api, methodPath: string, params?: any[]): Promise<T>"}),": Queries the blockchain state for a specified method with optional parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"remark(api: ApiPromise, remark: string, withEvent?: boolean): SubmittableExtrinsic"}),": Creates a remark transaction with or without an event."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rpc<T>(api: Api, methodPath: string, params?: any[]): Promise<T>"}),": Performs an RPC call to a specified method with optional parameters."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"import-example",children:"Import Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { generateAddress, getBalance, stake, transfer, getInfo } from '@autonomys/auto-consensus'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"overview-of-api-object",children:"Overview of Api Object"}),"\n",(0,s.jsxs)(n.p,{children:["When working with the SDK functions like those in ",(0,s.jsx)(n.code,{children:"auto-consensus"}),", the ",(0,s.jsx)(n.code,{children:"api: Api"})," parameter is a crucial component. It's an instance of the Polkadot.js API, specifically ",(0,s.jsx)(n.code,{children:"ApiPromise"}),", which serves as the gateway to interact with the blockchain node."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Core Components"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"api.rpc"}),": Contains methods to perform remote procedure calls to the node. These include calls for querying system information, submitting extrinsics, and accessing chain data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"api.query"}),": Provides access to the blockchain's runtime storage. You can query on-chain storage items, such as balances, staking information, and module-specific data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"api.tx"}),": Allows you to create and submit extrinsics (transactions) to the blockchain. It includes methods for constructing and signing transactions for various pallets/modules."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"api.consts"}),": Exposes the runtime constants defined in the blockchain's metadata. This includes information like existential deposit, block time, or any constants set by runtime modules."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"api.types"}),": Contains the type definitions used by the chain, which are crucial for encoding and decoding data correctly."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"api.events"}),": Provides access to the events emitted by the blockchain, which can be subscribed to for real-time updates."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This code examples might be helpful to understrand ",(0,s.jsx)(n.code,{children:"api: API object"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Getting the current chain header (block height)\nconst endpoint = 'wss://rpc-0.gemini-3h.subspace.network/ws'\nconst api = await createConnection(endpoint)\nconst blockNumber = await api.rpc.chain.getHeader()\nconsole.log('Block Number:', blockNumber.number.toNumber())\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["All functions that return a ",(0,s.jsx)(n.code,{children:"SubmittableExtrinsic"})," can be signed and submitted to the blockchain. Functions returning ",(0,s.jsx)(n.code,{children:"Promise<T>"})," should be awaited to retrieve the desired data."]})}),"\n",(0,s.jsx)(n.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Task"}),": To get the wallet balance on a consensus chain"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Get the RPC endpoint information for the consensus chain, which is available ",(0,s.jsx)(n.a,{href:"/develop/intro#rpc-endpoints",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For this example, we'll use 'wss://rpc-0.gemini-3h.subspace.network/ws' as the endpoint."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Determine which methods are needed to accomplish the task."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"createConnection"})," from ",(0,s.jsx)(n.code,{children:"@autonomys/auto-utils"})," to establish a connection to the node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"balance"})," from ",(0,s.jsx)(n.code,{children:"@autonomys/auto-consensus"})," to retrieve the wallet balance."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:".js"})," or ",(0,s.jsx)(n.code,{children:".ts"})," file and include the following code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Required to get the API for the balance function\nconst { createConnection } = require('@autonomys/auto-utils');\n// Required to query the RPC in order to get the balance\nconst { balance } = require('@autonomys/auto-consensus');\n\nasync function getApiInstance() {\n    // Use the correct, up-to-date endpoint\n    const endpoint = 'wss://rpc-0.gemini-3h.subspace.network/ws';\n    const api = await createConnection(endpoint);\n    return api;\n}\n\nasync function getWalletBalance() {\n    try {\n        // Initialize the API instance\n        const api = await getApiInstance();\n\n        // Replace with your wallet address\n        const walletAddress = 'st7woZs4wA6F9ssvdg3DzZi6v3s9MB7DXE3LS1fzTQA16nJSP';\n\n        // Call the balance function with the API and wallet address\n        const walletBalance = await balance(api, walletAddress);\n\n        console.log('Wallet Balance:', walletBalance);\n\n        // Disconnect when done\n        await api.disconnect();\n    } catch (error) {\n        console.error('Error fetching wallet balance:', error);\n    }\n}\n\ngetWalletBalance();\n\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Replace 'st7woZs4wA6F9ssvdg3DzZi6v3s9MB7DXE3LS1fzTQA16nJSP' with your actual wallet address."}),(0,s.jsx)(n.p,{children:"The createConnection function initializes the API instance connected to the specified endpoint."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save the file and run it using the following command ",(0,s.jsx)(n.code,{children:"node ./test-function.js"}),". You should see the wallet balance printed in the console."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Additional Tips"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- **Async/Await**: Both createConnection and balance are **asynchronous functions** returning **promises**. Using `await` ensures that the code waits for these operations to complete before proceeding.\n\n- **API Disconnection**: It's good practice to disconnect from the API when you're done to free up resources.\n\n- **Logging**: The script logs the wallet balance to the console. You can modify this to format the output or handle it as needed for your application.\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);