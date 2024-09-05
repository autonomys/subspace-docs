"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},i=void 0,s={unversionedId:"develop/nova/quick_start",id:"develop/nova/quick_start",title:"Quick start",description:"Quick start one-pager",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/nova/quick_start.md",sourceDirName:"develop/nova",slug:"/develop/nova/quick_start",permalink:"/de/docs/develop/nova/quick_start",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/de/docs/develop/nova/intro"},next:{title:"Allgemeine Informationen zu Entwicklerwerkzeugen und Autonomys EVM",permalink:"/de/docs/develop/nova/general-information"}},l={},u=[{value:"The only tools needed to get you started",id:"the-only-tools-needed-to-get-you-started",level:2},{value:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM",id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",level:3},{value:"Get tokens to your wallet using our faucet",id:"get-tokens-to-your-wallet-using-our-faucet",level:3},{value:"Test and deploy your smart contract",id:"test-and-deploy-your-smart-contract",level:3},{value:"Wichtiger Hinweis zum Einreichen einer Transaktion",id:"wichtiger-hinweis-zum-einreichen-einer-transaktion",level:3},{value:"Problem mit der Sch\xe4tzung der Geb\xfchren",id:"problem-mit-der-sch\xe4tzung-der-geb\xfchren",level:3},{value:"L\xf6sungen",id:"l\xf6sungen",level:4},{value:"L\xf6sungsbeispiele",id:"l\xf6sungsbeispiele",level:4},{value:"Have any questions? Feel free to post them on our forum or in our Developer-chat on Discord.",id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-only-tools-needed-to-get-you-started"},"The only tools needed to get you started"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."),(0,a.kt)("p",null,"Autonomys nutzt EVM (Ethereum Virtual Machine), sodass jedes f\xfcr die Ethereum-Entwicklung verf\xfcgbare Tool mit Autonomys kompatibel ist."),(0,a.kt)("h3",{id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm"},"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Network Name: Autonomys EVM\nNew RPC URL: https://nova-0.gemini-3h.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: TSSC\n")),(0,a.kt)("h3",{id:"get-tokens-to-your-wallet-using-our-faucet"},"Get tokens to your wallet using our faucet"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/de/docs/develop/nova/faucet"},"here")," to use our ",(0,a.kt)("strong",{parentName:"p"},"Faucet")," to get some TSSC."),(0,a.kt)("h3",{id:"test-and-deploy-your-smart-contract"},"Test and deploy your smart contract"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You can use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://remix.ethereum.org/"},"Remix")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://book.getfoundry.sh/"},"Foundry"))," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."),(0,a.kt)("p",null,"If anything above sounds unfamiliar, you can always fall back to our full guide."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"wichtiger-hinweis-zum-einreichen-einer-transaktion"},"Wichtiger Hinweis zum Einreichen einer Transaktion"),(0,a.kt)("p",null,"Vermeiden Sie bitte den Versuch, eine Transaktion zu beschleunigen, indem Sie zus\xe4tzlich zu den Geb\xfchren ein Trinkgeld angeben. Die Transaktionswarteschlange funktioniert bei Autonomys anders, was dazu f\xfchren kann, dass zwei Transaktionen dieselbe Nonce teilen. Dies k\xf6nnte dazu f\xfchren, dass die Geb\xfchren doppelt erhoben werden \u2013 einmal f\xfcr die Ausf\xfchrung und Speicherung in der ersten Transaktion und ausschlie\xdflich f\xfcr die Speicherung in der zweiten Transaktion. Um dieses Szenario zu verhindern, stellen Sie sicher, dass Sie kein Trinkgeld hinzuf\xfcgen, um die Transaktion zu beschleunigen."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"problem-mit-der-sch\xe4tzung-der-geb\xfchren"},"Problem mit der Sch\xe4tzung der Geb\xfchren"),(0,a.kt)("p",null,"Bei der Bereitstellung von Smart Contracts auf unserer EVM-kompatiblen Domain ",(0,a.kt)("strong",{parentName:"p"},"Nova")," kann es zu einem Fehler im Zusammenhang mit der Sch\xe4tzung der Geb\xfchren kommen, der sich typischerweise wie folgt darstellt:"),(0,a.kt)("p",null,"\u201eKein manueller Geb\xfchren Grenzwert eingestellt\u201c oder \u201eSch\xe4tzung der Geb\xfchren fehlgeschlagen\u201c."),(0,a.kt)("p",null,"Dieses Problem tritt h\xe4ufig auf, weil Entwicklungstools wie Foundry Transaktionen simulieren und berechnete oder fest codierte  Sch\xe4tzungen der Geb\xfchren verwenden, anstatt den RPC (Remote Procedure Call) danach abzufragen. ",(0,a.kt)("strong",{parentName:"p"},"Nova")," ben\xf6tigt f\xfcr bestimmte Vorg\xe4nge m\xf6glicherweise andere Geb\xfchren als andere EVM-kompatible Ketten wie die Testnetze von Ethereum."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Wir haben eine Upstream-PR eingereicht, um dieses Problem mit ",(0,a.kt)("strong",{parentName:"p"},"Foundry")," zu beheben. Im Folgenden werden die Problemumgehungen beschrieben, bis das Problem vom ",(0,a.kt)("strong",{parentName:"p"},"Foundry-Team")," gel\xf6st wird.")),(0,a.kt)("h4",{id:"l\xf6sungen"},"L\xf6sungen"),(0,a.kt)("p",null,"Wenn dieses Problem auftritt, versuchen Sie die folgenden L\xf6sungsans\xe4tze:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Simulation \xfcberspringen: Verwenden Sie bei der Bereitstellung mit Foundry das Flag \u201e--skip-simulation\u201c, um die integrierte Simulation zu umgehen und sich bei der Geb\xfchrensch\xe4tzung auf RPC zu verlassen.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Manuelles Gaslimit festlegen: Geben Sie manuell in Ihrem Bereitstellungsbefehl oder auf der Benutzeroberfl\xe4che ein h\xf6heres Gaslimit an.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Passen Sie das Bereitstellungsskript an: \xc4ndern Sie Ihr Skript so, dass es benutzerdefinierte Gaseinstellungen enth\xe4lt, oder implementieren Sie \u201eTry/Catch\u201c-Bl\xf6cke zur Behandlung von Bereitstellungsfehlern.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Web3-Anbieter verwenden: Wenn Sie ",(0,a.kt)("strong",{parentName:"p"},"Remix IDE")," verwenden, wechseln Sie zur \u201eInjected Web3\u201c-Umgebung, um externe Web3-Anbieter wie MetaMask zu nutzen.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Benutzerdefinierte Bereitstellungsfunktion: Erstellen Sie eine Bereitstellungsfunktion mit einstellbaren Gasparametern."))),(0,a.kt)("h4",{id:"l\xf6sungsbeispiele"},"L\xf6sungsbeispiele"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Foundry")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try using ",(0,a.kt)("inlineCode",{parentName:"p"},"--skip-simulation")," flag: ",(0,a.kt)("inlineCode",{parentName:"p"},"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --skip-simulation"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try setting the gas limit manually: ",(0,a.kt)("inlineCode",{parentName:"p"},"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --gas-limit 300000"),"."))),(0,a.kt)("p",null,"Adjust the gas limit value as needed. Start with a higher value and gradually lower it to find the optimal limit."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remix IDE")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try settiing gas limit manually: In the ",(0,a.kt)("strong",{parentName:"p"},"Deploy & Run Transactions")," panel, expand the ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," section.\nSet a higher value in the ",(0,a.kt)("strong",{parentName:"p"},"Gas Limit")," field. Try starting with ",(0,a.kt)("strong",{parentName:"p"},"300000")," and adjust as needed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try adjusting gas price: In the same ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," section, you can also adjust the ",(0,a.kt)("strong",{parentName:"p"},"Gas Price")," if needed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try switching to the ",(0,a.kt)("strong",{parentName:"p"},"Injected Web3")," environment in the ",(0,a.kt)("strong",{parentName:"p"},"Deploy & Run Transactions")," panel. This will use your browser's Web3 provider (like MetaMask) which might handle gas estimation better for the network.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the above steps don't work, you can create a custom deployment function that includes gas parameters:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"function deployWithCustomGas(uint256 gasLimit, uint256 gasPrice) public returns (address) {\n   return address(new YourContract{gas: gasLimit, gasPrice: gasPrice}());\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Other possible solution")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify your deployment script and override the default gas settings:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"vm.txGasPrice(uint256 gasPrice);\nvm.txGasLimit(uint256 gasLimit);\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement a try/catch block in your script to handle gas estimation failures:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'try yourContract.deploy{gas: 300000}(constructorArgs) returns (YourContract deployed) {\n   // Deployment successful\n} catch Error(string memory reason) {\n   console.log("Deployment failed:", reason);\n}\n')))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord"},"Have any questions? Feel free to post them on ",(0,a.kt)("a",{parentName:"h3",href:"https://forum.autonomys.xyz/"},"our forum")," or in our ",(0,a.kt)("a",{parentName:"h3",href:"https://discord.gg/EAw6B48r"},"Developer-chat on Discord"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In order to get access to the role-gated developer chat:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/vhv5cEZN"},"Discord"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Autonomys Network at the top left corner and choose ",(0,a.kt)("strong",{parentName:"p"},"Linked Roles"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Discord-1",src:n(2635).Z,width:"231",height:"539"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Link your GitHub account to get a developer role and gain access to ",(0,a.kt)("strong",{parentName:"p"},"developer-chat"),".\n",(0,a.kt)("img",{alt:"Discord-2",src:n(9744).Z,width:"737",height:"206"})))))}c.isMDXComponent=!0},2635:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},9744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"}}]);