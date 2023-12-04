"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7381],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?r.createElement(k,s(s({ref:t},c),{},{components:o})):r.createElement(k,s({ref:t},c))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2734:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["subspace network","quickstart"]},s=void 0,i={unversionedId:"develop/nova/quick_start",id:"version-latest/develop/nova/quick_start",title:"Quick start",description:"Quick start one-pager",source:"@site/versioned_docs/version-latest/develop/nova/quick_start.md",sourceDirName:"develop/nova",slug:"/develop/nova/quick_start",permalink:"/bn/docs/develop/nova/quick_start",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/develop/nova/quick_start.md",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1701711058,formattedLastUpdatedAt:"\u09ea \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0, \u09e8\u09e6\u09e8\u09e9",sidebarPosition:2,frontMatter:{title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["subspace network","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/bn/docs/develop/nova/intro"},next:{title:"General information on dev tools and Subspace EVM",permalink:"/bn/docs/develop/nova/general-information"}},l={},u=[{value:"The only tools needed to get you started",id:"the-only-tools-needed-to-get-you-started",level:2},{value:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM",id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",level:3},{value:"Get tokens to your wallet using our faucet",id:"get-tokens-to-your-wallet-using-our-faucet",level:3},{value:"Test and deploy your smart contract",id:"test-and-deploy-your-smart-contract",level:3},{value:"Have any questions? Feel free to post them on our forum or in our Developer-chat on Discord.",id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"the-only-tools-needed-to-get-you-started"},"The only tools needed to get you started"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."),(0,n.kt)("p",null,"Subspace utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Subspace."),(0,n.kt)("h3",{id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm"},"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM"),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Network Name: Subspace EVM\nNew RPC URL: https://domain-3.evm.gemini-3g.subspace.network/ws\nChain ID: 1002\nCurrency Symbol: TSSC\n")),(0,n.kt)("h3",{id:"get-tokens-to-your-wallet-using-our-faucet"},"Get tokens to your wallet using our faucet"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Follow the instructions ",(0,n.kt)("a",{parentName:"p",href:"/bn/docs/develop/nova/faucet"},"here")," to use our ",(0,n.kt)("strong",{parentName:"p"},"Faucet")," to get some TSSC."),(0,n.kt)("h3",{id:"test-and-deploy-your-smart-contract"},"Test and deploy your smart contract"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"You can use ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://remix.ethereum.org/"},"Remix")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://book.getfoundry.sh/"},"Foundry"))," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."),(0,n.kt)("p",null,"If anything above sounds unfamiliar, you can always fall back to our full guide. "),(0,n.kt)("h3",{id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord"},"Have any questions? Feel free to post them on ",(0,n.kt)("a",{parentName:"h3",href:"https://forum.subspace.network/"},"our forum")," or in our ",(0,n.kt)("a",{parentName:"h3",href:"https://discord.gg/EAw6B48r"},"Developer-chat on Discord"),"."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In order to get access to the role-gated developer chat:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/vhv5cEZN"},"Discord"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Subspace Network at the top left corner and choose ",(0,n.kt)("strong",{parentName:"p"},"Linked Roles"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Discord-1",src:o(2635).Z,width:"231",height:"539"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Link your GitHub account to get a developer role and gain access to ",(0,n.kt)("strong",{parentName:"p"},"developer-chat"),".\n",(0,n.kt)("img",{alt:"Discord-2",src:o(9744).Z,width:"737",height:"206"})))))}d.isMDXComponent=!0},2635:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},9744:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"}}]);