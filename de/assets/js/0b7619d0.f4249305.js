"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8668],{1638:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=r(4848),s=r(8453);const t={title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},o=void 0,l={id:"develop/nova/quick_start",title:"Quick start",description:"Quick start one-pager",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/nova/quick_start.md",sourceDirName:"develop/nova",slug:"/develop/nova/quick_start",permalink:"/de/docs/develop/nova/quick_start",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Develop on Nova EVM",permalink:"/de/docs/category/develop-on-nova-evm"},next:{title:"Allgemeine Informationen zu Entwicklerwerkzeugen und Autonomys EVM",permalink:"/de/docs/develop/nova/general-information"}},a={},d=[{value:"The only tools needed to get you started",id:"the-only-tools-needed-to-get-you-started",level:2},{value:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM",id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",level:3},{value:"Get tokens to your wallet using our faucet",id:"get-tokens-to-your-wallet-using-our-faucet",level:3},{value:"Test and deploy your smart contract",id:"test-and-deploy-your-smart-contract",level:3},{value:"Wichtiger Hinweis zum Einreichen einer Transaktion",id:"wichtiger-hinweis-zum-einreichen-einer-transaktion",level:3},{value:"Problem mit der Sch\xe4tzung der Geb\xfchren",id:"problem-mit-der-sch\xe4tzung-der-geb\xfchren",level:3},{value:"L\xf6sungen",id:"l\xf6sungen",level:4},{value:"L\xf6sungsbeispiele",id:"l\xf6sungsbeispiele",level:4},{value:"Have any questions? Sie k\xf6nnen gerne in unserem Forum oder in unserem Entwickler-Chat auf Discord schreiben.",id:"have-any-questions-sie-k\xf6nnen-gerne-in-unserem-forum-oder-in-unserem-entwickler-chat-auf-discord-schreiben",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"the-only-tools-needed-to-get-you-started",children:"The only tools needed to get you started"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."}),"\n",(0,i.jsx)(n.p,{children:"Autonomys nutzt EVM (Ethereum Virtual Machine), sodass jedes f\xfcr die Ethereum-Entwicklung verf\xfcgbare Tool mit Autonomys kompatibel ist."}),"\n",(0,i.jsx)(n.h3,{id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",children:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Netzwerkname: Autonomys EVM\nNeue RPC-URL: https://nova-0.gemini-3h.subspace.network/ws\nKetten-ID: 490000\nW\xe4hrungssymbol: TSSC\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-tokens-to-your-wallet-using-our-faucet",children:"Get tokens to your wallet using our faucet"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["Follow the instructions ",(0,i.jsx)(n.a,{href:"/de/docs/develop/nova/faucet",children:"here"})," to use our ",(0,i.jsx)(n.strong,{children:"Faucet"})," to get some TSSC."]}),"\n",(0,i.jsx)(n.h3,{id:"test-and-deploy-your-smart-contract",children:"Test and deploy your smart contract"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://remix.ethereum.org/",children:"Remix"})}),", ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Foundry"})})," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."]}),"\n",(0,i.jsx)(n.p,{children:"If anything above sounds unfamiliar, you can always fall back to our full guide."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"wichtiger-hinweis-zum-einreichen-einer-transaktion",children:"Wichtiger Hinweis zum Einreichen einer Transaktion"}),"\n",(0,i.jsx)(n.p,{children:"Vermeiden Sie bitte den Versuch, eine Transaktion zu beschleunigen, indem Sie zus\xe4tzlich zu den Geb\xfchren ein Trinkgeld angeben. Die Transaktionswarteschlange funktioniert bei Autonomys anders, was dazu f\xfchren kann, dass zwei Transaktionen dieselbe Nonce teilen. Dies k\xf6nnte dazu f\xfchren, dass die Geb\xfchren doppelt erhoben werden \u2013 einmal f\xfcr die Ausf\xfchrung und Speicherung in der ersten Transaktion und ausschlie\xdflich f\xfcr die Speicherung in der zweiten Transaktion. Um dieses Szenario zu verhindern, stellen Sie sicher, dass Sie kein Trinkgeld hinzuf\xfcgen, um die Transaktion zu beschleunigen."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"problem-mit-der-sch\xe4tzung-der-geb\xfchren",children:"Problem mit der Sch\xe4tzung der Geb\xfchren"}),"\n",(0,i.jsxs)(n.p,{children:["Bei der Bereitstellung von Smart Contracts auf unserer EVM-kompatiblen Domain ",(0,i.jsx)(n.strong,{children:"Nova"})," kann es zu einem Fehler im Zusammenhang mit der Sch\xe4tzung der Geb\xfchren kommen, der sich typischerweise wie folgt darstellt:"]}),"\n",(0,i.jsx)(n.p,{children:"\u201eKein manueller Geb\xfchren Grenzwert eingestellt\u201c oder \u201eSch\xe4tzung der Geb\xfchren fehlgeschlagen\u201c."}),"\n",(0,i.jsxs)(n.p,{children:["Dieses Problem tritt h\xe4ufig auf, weil Entwicklungstools wie Foundry Transaktionen simulieren und berechnete oder fest codierte  Sch\xe4tzungen der Geb\xfchren verwenden, anstatt den RPC (Remote Procedure Call) danach abzufragen. ",(0,i.jsx)(n.strong,{children:"Nova"})," ben\xf6tigt f\xfcr bestimmte Vorg\xe4nge m\xf6glicherweise andere Geb\xfchren als andere EVM-kompatible Ketten wie die Testnetze von Ethereum."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Wir haben eine Upstream-PR eingereicht, um dieses Problem mit ",(0,i.jsx)(n.strong,{children:"Foundry"})," zu beheben. Im Folgenden werden die Problemumgehungen beschrieben, bis das Problem vom ",(0,i.jsx)(n.strong,{children:"Foundry-Team"})," gel\xf6st wird."]})}),"\n",(0,i.jsx)(n.h4,{id:"l\xf6sungen",children:"L\xf6sungen"}),"\n",(0,i.jsx)(n.p,{children:"Wenn dieses Problem auftritt, versuchen Sie die folgenden L\xf6sungsans\xe4tze:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Simulation \xfcberspringen: Verwenden Sie bei der Bereitstellung mit Foundry das Flag \u201e--skip-simulation\u201c, um die integrierte Simulation zu umgehen und sich bei der Geb\xfchrensch\xe4tzung auf RPC zu verlassen."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Manuelles Gaslimit festlegen: Geben Sie manuell in Ihrem Bereitstellungsbefehl oder auf der Benutzeroberfl\xe4che ein h\xf6heres Gaslimit an."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Passen Sie das Bereitstellungsskript an: \xc4ndern Sie Ihr Skript so, dass es benutzerdefinierte Gaseinstellungen enth\xe4lt, oder implementieren Sie \u201eTry/Catch\u201c-Bl\xf6cke zur Behandlung von Bereitstellungsfehlern."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Web3-Anbieter verwenden: Wenn Sie ",(0,i.jsx)(n.strong,{children:"Remix IDE"})," verwenden, wechseln Sie zur \u201eInjected Web3\u201c-Umgebung, um externe Web3-Anbieter wie MetaMask zu nutzen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Benutzerdefinierte Bereitstellungsfunktion: Erstellen Sie eine Bereitstellungsfunktion mit einstellbaren Gasparametern."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"l\xf6sungsbeispiele",children:"L\xf6sungsbeispiele"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Foundry"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Versuchen Sie es mit \u201e--skip-simulation\u201c: \u201eforge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --skip-simulation\u201c."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Versuchen Sie, das Gaslimit manuell festzulegen: \u201eforge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --gas-limit 300000\u201c."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Passen Sie den Gasgrenzwert nach Bedarf an. Beginnen Sie mit einem h\xf6heren Wert und verringern Sie ihn schrittweise, um den optimalen Grenzwert zu finden."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Remix IDE"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Versuchen Sie, den Gasgrenzwert manuell festzulegen: Erweitern Sie im Bereich ",(0,i.jsx)(n.strong,{children:"Transaktionen bereitstellen und ausf\xfchren"})," den Abschnitt ",(0,i.jsx)(n.strong,{children:"Erweitert"}),".\nStellen Sie im Feld ",(0,i.jsx)(n.strong,{children:"Gaslimit"})," einen h\xf6heren Wert ein. Versuchen Sie, mit ",(0,i.jsx)(n.strong,{children:"300000"})," zu beginnen und passen Sie es nach Bedarf an."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Versuchen Sie, den Gaspreis anzupassen: Im gleichen Abschnitt ",(0,i.jsx)(n.strong,{children:"Erweitert"})," k\xf6nnen Sie bei Bedarf auch den ",(0,i.jsx)(n.strong,{children:"Gaspreis"})," anpassen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Versuchen Sie, im Bereich ",(0,i.jsx)(n.strong,{children:"Transaktionen bereitstellen und ausf\xfchren"})," zur ",(0,i.jsx)(n.strong,{children:"Injected Web3"}),"-Umgebung zu wechseln. Dabei wird der Web3-Anbieter Ihres Browsers (wie MetaMask) verwendet, der die Gassch\xe4tzung f\xfcr das Netzwerk m\xf6glicherweise besser handhaben kann."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wenn die oben genannten Schritte nicht funktionieren, k\xf6nnen Sie eine benutzerdefinierte Bereitstellungsfunktion erstellen, die Gasparameter enth\xe4lt:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"function deployWithCustomGas(uint256 gasLimit, uint256 gasPrice) public returns (address) {\n   return address(new YourContract{gas: gasLimit, gasPrice: gasPrice}());\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Andere m\xf6gliche L\xf6sung"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\xc4ndern Sie Ihr Bereitstellungsskript und \xfcberschreiben Sie die Standardgaseinstellungen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"vm.txGasPrice(uint256 gasPrice);\nvm.txGasLimit(uint256 gasLimit);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Implementieren Sie einen Try/Catch-Block in Ihrem Skript, um Fehler bei der Gassch\xe4tzung zu behandeln:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Probieren Sie yourContract.deploy{gas: 300000}(constructorArgs) aus (YourContract bereitgestellt) {\n   // Bereitstellung erfolgreich\n} Fehler abfangen(String-Speichergrund) {\n   console.log("Bereitstellung fehlgeschlagen:", Grund);\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"have-any-questions-sie-k\xf6nnen-gerne-in-unserem-forum-oder-in-unserem-entwickler-chat-auf-discord-schreiben",children:["Have any questions? Sie k\xf6nnen gerne in ",(0,i.jsx)(n.a,{href:"https://forum.autonomys.xyz/",children:"unserem Forum"})," oder in unserem ",(0,i.jsx)(n.a,{href:"https://discord.gg/EAw6B48r",children:"Entwickler-Chat auf Discord"})," schreiben."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"In order to get access to the role-gated developer chat:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Join our ",(0,i.jsx)(n.a,{href:"https://discord.gg/vhv5cEZN",children:"Discord"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Klicken Sie oben links auf Autonomys Network und w\xe4hlen Sie ",(0,i.jsx)(n.strong,{children:"Verkn\xfcpfte Rollen"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Discord-1",src:r(603).A+"",width:"231",height:"539"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Link your GitHub account to get a developer role and gain access to ",(0,i.jsx)(n.strong,{children:"developer-chat"}),".\n",(0,i.jsx)(n.img,{alt:"Discord-2",src:r(752).A+"",width:"737",height:"206"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},603:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},752:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var i=r(6540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);