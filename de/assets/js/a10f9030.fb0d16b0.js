"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6708],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),d=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(r),m=o,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3876:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={title:"Port Forwarding",sidebar_position:2,description:"Comprehensive guide on port forwarding and network information for Autonomys Network products.",slug:"networking",keywords:["Farmer","Farming","CLI","Binaries","Port Forwarding","Autonomys Desktop","Ports","Networking","Network"]},i=void 0,l={unversionedId:"farming-&-staking/farming/additional-guides/network-info",id:"farming-&-staking/farming/additional-guides/network-info",title:"Port Forwarding",description:"Comprehensive guide on port forwarding and network information for Autonomys Network products.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/network-info.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/networking",permalink:"/de/docs/farming-&-staking/farming/additional-guides/networking",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/network-info.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Port Forwarding",sidebar_position:2,description:"Comprehensive guide on port forwarding and network information for Autonomys Network products.",slug:"networking",keywords:["Farmer","Farming","CLI","Binaries","Port Forwarding","Autonomys Desktop","Ports","Networking","Network"]},sidebar:"tutorialSidebar",previous:{title:"GPU Plotter",permalink:"/de/docs/farming-&-staking/farming/additional-guides/gpu-plotter"},next:{title:"Grafana Dashboard",permalink:"/de/docs/farming-&-staking/farming/additional-guides/grafana-dashboard"}},s={},d=[{value:"Understanding Port Forwarding",id:"understanding-port-forwarding",level:2},{value:"Required Ports for Autonomys Network",id:"required-ports-for-autonomys-network",level:2},{value:"Special Note on Port 9944",id:"special-note-on-port-9944",level:3},{value:"How to Port Forward",id:"how-to-port-forward",level:2},{value:"Step 1. <em>Finding Default Gateway Address</em>",id:"step-1-finding-default-gateway-address",level:3},{value:"Step 2. <em>Connecting to your router</em>",id:"step-2-connecting-to-your-router",level:3},{value:"Step 3. <em>Forwarding your ports</em>",id:"step-3-forwarding-your-ports",level:3},{value:"Additional Resources and Verification",id:"additional-resources-and-verification",level:2},{value:"Network Configuration Scenarios",id:"network-configuration-scenarios",level:2}],u={toc:d},p="wrapper";function c(t){let{components:e,...r}=t;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using Linux and enabled ",(0,o.kt)("inlineCode",{parentName:"p"},"ufw")," (firewall) ensure that your firewall allows traffic on the necessary ports: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30333,30433 comment 'Autonomys Node'")," for the node and ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30533 comment 'Autonomys Farmer'")," for the farmer. Adjust the port numbers if you have changed them from the defaults in your startup parameters. Also, if you are connecting remote farmers to a node and your firewall rules do not permit devices in your LAN to communicate freely, you will need to add a rule to your node server's firewall (assuming your LAN IP range is 192.168.1.0/24 in this example):  ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ufw allow from 192.168.1.0/24 to any port 9944 proto tcp comment 'Remote Farmers RPC'"),".")),(0,o.kt)("p",null,"Configuring the right network settings is crucial for the effective operation of blockchain nodes. This guide provides detailed information about the necessary ports, network configurations, and steps for port forwarding for Autonomys Network products, ensuring smooth communication and optimal performance."),(0,o.kt)("h2",{id:"understanding-port-forwarding"},"Understanding Port Forwarding"),(0,o.kt)("p",null,"Forwarding ports on your router will open up a specific lane on your router to allow external traffic to flow in or out. This process is usually automatic for common applications, but for specific needs like ours, it must be done manually. For a foundational understanding of port forwarding, you can read this guide: ",(0,o.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/port-forwarding-on-router-and-why-do-we-need-it/"},"Port Forwarding Overview"),"."),(0,o.kt)("h2",{id:"required-ports-for-autonomys-network"},"Required Ports for Autonomys Network"),(0,o.kt)("p",null,"For optimal performance of our blockchain node, specific ports need to be configured to handle incoming connections. These ports facilitate various critical functions within our blockchain network"),(0,o.kt)("p",null,"Below is a table summarizing the necessary port configurations for uninterrupted network performance:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,o.kt)("th",{parentName:"tr",align:null},"Exposure"),(0,o.kt)("th",{parentName:"tr",align:null},"Short Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Used By"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"30333"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP"),(0,o.kt)("td",{parentName:"tr",align:null},"Always public"),(0,o.kt)("td",{parentName:"tr",align:null},"Substrate networking P2P"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/space-acres-recommended/"},"Space Acres")),(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,o.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the network for exchanging blocks, transactions, PoT gossip, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"30433"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP"),(0,o.kt)("td",{parentName:"tr",align:null},"Always public"),(0,o.kt)("td",{parentName:"tr",align:null},"Autonomys networking P2P"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/space-acres-recommended/"},"Space Acres")),(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,o.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the network and retrieving archival history.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"30533"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP"),(0,o.kt)("td",{parentName:"tr",align:null},"Always public"),(0,o.kt)("td",{parentName:"tr",align:null},"Autonomys networking P2P"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,o.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the network and retrieving archival history, not required for Space Acres because the node and the farmer share the Autonomys networking stack there.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"40333"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP"),(0,o.kt)("td",{parentName:"tr",align:null},"Always public"),(0,o.kt)("td",{parentName:"tr",align:null},"Autonomys networking P2P"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/operators-and-nominators"},"Advanced CLI Node (Domain)")))),(0,o.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the domain network for transaction gossipping.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9944"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP (HTTP/WebSocket)"),(0,o.kt)("td",{parentName:"tr",align:null},"Public: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"RPC server"))," Private: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Internal node-to-farmer connections"))),(0,o.kt)("td",{parentName:"tr",align:null},"Consensus RPC port"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,o.kt)("td",{parentName:"tr",align:null},"RPC server: Exposes various details about the blockchain (real-time and historical events, storage, transactions, etc) as well as submitting transactions to the network (balance transfers, staking, etc). ",(0,o.kt)("br",null),(0,o.kt)("br",null)," Farmer connections: The farmer connects in unsafe mode and receives notifications about slot challenges for block/vote production, archival history extension events, querying of various chain details. Nodes that process farmer connections should never be exposed publicly as public exposure of unsafe APIs can be used to not only prevent farmer from working, but even block node sync completely.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9945"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP (HTTP/WebSocket)"),(0,o.kt)("td",{parentName:"tr",align:null},"Public: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"RPC server"))),(0,o.kt)("td",{parentName:"tr",align:null},"Domain RPC port"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"../../../category/operators-and-nominators"},"Advanced CLI Node (Domain)")))),(0,o.kt)("td",{parentName:"tr",align:null},"RPC server: Expose various details about blockchain (real-time and historical events, storage, transactions, etc.) as well as submitting transactions to the network (balance transfers, interacting with smart contracts, etc).")))),(0,o.kt)("h3",{id:"special-note-on-port-9944"},"Special Note on Port 9944"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Port 9944 is used for Remote Procedure Calls (RPC) between the node and the farmer. It does not require forwarding if the node and farmer are on the same local network, as they communicate internally.")),(0,o.kt)("h2",{id:"how-to-port-forward"},"How to Port Forward"),(0,o.kt)("p",null,"It is important to note that forwarding ports is going to be different for most routers, but we have included some general instructions, as well as some links for some major brands."),(0,o.kt)("h3",{id:"step-1-finding-default-gateway-address"},"Step 1. ",(0,o.kt)("em",{parentName:"h3"},"Finding Default Gateway Address")),(0,o.kt)("p",null,"First, find your local router IP Address & Computer internal IP address. Instructions for finding the router IP address are provided for Linux, Windows, and OSX."),(0,o.kt)("h3",{id:"step-2-connecting-to-your-router"},"Step 2. ",(0,o.kt)("em",{parentName:"h3"},"Connecting to your router")),(0,o.kt)("p",null,"Input the router IP Address into a web browser to access router settings. Locate the default admin login information, which might be on the router itself, in the user manual, or provided by your ISP."),(0,o.kt)("h3",{id:"step-3-forwarding-your-ports"},"Step 3. ",(0,o.kt)("em",{parentName:"h3"},"Forwarding your ports")),(0,o.kt)("p",null,"The process varies based on your router. Generally, navigate to Advanced Settings > Port Forwarding, and enter the necessary information, such as Computer IP Address, Protocols, Starting, and Ending Port. Ensure to apply changes and possibly reboot your router."),(0,o.kt)("h2",{id:"additional-resources-and-verification"},"Additional Resources and Verification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.lifewire.com/how-to-port-forward-4163829"},"How to Forward Ports on Your Router")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"},"General Port Forwarding Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://routerslogin.com/all/default-router-list"},"Router IP Address and Passwords List")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.whatismyip.com/port-scanner/"},"Verify Port Forwarding"))),(0,o.kt)("h2",{id:"network-configuration-scenarios"},"Network Configuration Scenarios"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Router Configuration (Desktop):")," Forward the specified TCP ports to the machine running your node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No Firewall Scenario:")," No additional configuration needed if operating without a firewall."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"With Firewall:")," Ensure TCP ports are open in your firewall settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Direct Connection:")," No further action if directly connected to the internet.")),(0,o.kt)("p",null,"Proper configuration of these ports ensures reliable and secure communication within the Autonomys Network."))}c.isMDXComponent=!0}}]);