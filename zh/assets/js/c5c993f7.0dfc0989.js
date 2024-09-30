"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7462),a=r(7294),o=r(6010),i=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=r(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",w.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",w.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}},3855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),i=r(5162);const l={title:"Port Forwarding & Firewall",sidebar_position:2,description:"A comprehensive guide on port forwarding and firewall rules for Autonomys Network",keywords:["Domain","Farmer","Farming","Firewall Rules","Networking","Node","Network","Port Forwarding","Ports","Router Settings","RPC"]},s=void 0,u={unversionedId:"farming-&-staking/farming/additional-guides/port-config",id:"farming-&-staking/farming/additional-guides/port-config",title:"Port Forwarding & Firewall",description:"A comprehensive guide on port forwarding and firewall rules for Autonomys Network",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/port-config.mdx",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/port-config",permalink:"/zh/docs/farming-&-staking/farming/additional-guides/port-config",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/port-config.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Port Forwarding & Firewall",sidebar_position:2,description:"A comprehensive guide on port forwarding and firewall rules for Autonomys Network",keywords:["Domain","Farmer","Farming","Firewall Rules","Networking","Node","Network","Port Forwarding","Ports","Router Settings","RPC"]},sidebar:"tutorialSidebar",previous:{title:"GPU Plotter",permalink:"/zh/docs/farming-&-staking/farming/additional-guides/gpu-plotter"},next:{title:"Grafana Dashboard",permalink:"/zh/docs/farming-&-staking/farming/additional-guides/grafana-dashboard"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Ports to Forward &amp; Firewall Access",id:"ports-to-forward--firewall-access",level:2},{value:"Steps to Forward Ports",id:"steps-to-forward-ports",level:2},{value:"Firewall Configuration",id:"firewall-configuration",level:2},{value:"Network Configuration Scenarios",id:"network-configuration-scenarios",level:3},{value:"Additional Resources and Verification",id:"additional-resources-and-verification",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This guide explains how to configure network settings and set up port forwarding for Autonomys Network. Correct port forwarding is essential to ensure proper communication between your node, farmer, and the Autonomys Network."),(0,a.kt)("p",null,"By opening specific ports on your router, you allow external traffic to reach your node, which is necessary for blockchain synchronization, data exchange, and remote procedure calls (RPC)."),(0,a.kt)("p",null,"Additionally, you may need to adjust your system's firewall settings to allow traffic through the specified ports. Firewalls typically block unsolicited incoming connections, so it's important to ensure that the required ports are open. These adjustments will enable effective communication with the Autonomy Network."),(0,a.kt)("h2",{id:"ports-to-forward--firewall-access"},"Ports to Forward & Firewall Access"),(0,a.kt)("admonition",{title:"Multiple Node Configuration",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ensure each node on the same network runs on unique ports. Adjust the ports mentioned in this guide if using multiple nodes or if default ports have been changed.")),(0,a.kt)("admonition",{title:"Exposing RPC Ports",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For security reasons, RPC ports 9944 and 9945 should never be exposed unless you intend to operate a public RPC server, and they should never be exposed on a system that is running a farmer or an operator.")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"space-acres",label:"Space Acres",default:!0,mdxType:"TabItem"},"### Space Acres",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"| Port  | Protocol | \u21aa\ufe0f | \ud83d\udee1\ufe0f | Component        | Purpose                                                                                          |\n| ----- | -------- | -- | --- | ---------------- | ------------------------------------------------------------------------------------------------ |\n| 30333 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (Consensus) | Facilitate block, transaction, and PoT gossip exchange.                                          |\n| 30433 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (DSN)       | Retrieve and serve pieces of data and metadata related to archival history from the P2P network. |\n"))),(0,a.kt)(i.Z,{value:"advanced-cli-farmer",label:"Advanced CLI (Farmer)",mdxType:"TabItem"},"### Advanced CLI (Farmer)",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"| Port  | Protocol | \u21aa\ufe0f | \ud83d\udee1\ufe0f | Component            | Purpose                                                                                          |\n| ----- | -------- | -- | --- | -------------------- | ------------------------------------------------------------------------------------------------ |\n| 30333 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (Consensus)     | Facilitate block, transaction, and PoT gossip exchange.                                          |\n| 30433 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (DSN)           | Retrieve and serve pieces of data and metadata related to archival history from the P2P network. |\n| 30533 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Farmer               | Retrieve blockchain archival history.                                                            |\n| 9944  | TCP      | \u274c  | \u2611\ufe0f  | Node (Consensus RPC) | Required for farmer operation.                                                                   |\n"))),(0,a.kt)(i.Z,{value:"advanced-cli-domain",label:"Advanced CLI (Domain Operator)",mdxType:"TabItem"},"### Advanced CLI (Domain Operator)",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"| Port  | Protocol | \u21aa\ufe0f | \ud83d\udee1\ufe0f | Component        | Purpose                                                                                          |\n| ----- | -------- | -- | --- | ---------------- | ------------------------------------------------------------------------------------------------ |\n| 30333 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (Consensus) | Facilitate block, transaction, and PoT gossip exchange.                                          |\n| 30334 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (Domain)    | Essential for a domain node to maintain strong connectivity with the P2P network.                |\n| 30433 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (DSN)       | Retrieve and serve pieces of data and metadata related to archival history from the P2P network. |\n"))),(0,a.kt)(i.Z,{value:"rpc-server",label:"RPC Server (Public)",mdxType:"TabItem"},"### RPC Server (Public)",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"| Port | Protocol | \u21aa\ufe0f | \ud83d\udee1\ufe0f | Component            | Purpose                                                                                                                                                                                                               |\n| ---- | -------- | -- | --- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| 9944 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (Consensus RPC) | Enables transaction submissions via HTTP and WebSocket, supports slot challenges, and provides access to real-time and historical blockchain data for querying events, transactions, block contents, and chain state. |\n| 9945 | TCP      | \u2611\ufe0f | \u2611\ufe0f  | Node (Domain RPC)    | Enables sending transactions, including deploying and calling smart contracts.                                                                                                                                        |\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Legend:")," The \u21aa\ufe0f column indicates whether the port should be forwarded on the router, while the \ud83d\udee1\ufe0f column specifies if inbound firewall access should be allowed through the operating system."),(0,a.kt)("h2",{id:"steps-to-forward-ports"},"Steps to Forward Ports"),(0,a.kt)("p",null,"Since the port forwarding process varies by router, follow these general steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Find Your Router\u2019s IP Address:"),"\nCheck your network settings to locate your router\u2019s IP address. You will also need the internal IP address of the computer running the Autonomys components.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Access Router Settings:"),"\nOpen your router\u2019s settings by entering the router's IP address into a web browser. You may need the default login credentials, often printed on the router or provided by your ISP.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Set Up Port Forwarding:"),"\nIn the router's configuration interface, navigate to ",(0,a.kt)("strong",{parentName:"p"},"Advanced Settings")," or ",(0,a.kt)("strong",{parentName:"p"},"Port Forwarding")," and enter the following details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The internal IP address of your computer"),(0,a.kt)("li",{parentName:"ul"},"Consult the tables above for the ports and protocols that need to be forwarded (30333, 30433, 30533, etc.).")),(0,a.kt)("p",{parentName:"li"},"Once entered, apply the changes and reboot your router if necessary."))),(0,a.kt)("h2",{id:"firewall-configuration"},"Firewall Configuration"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"\ud83d\udc27 Linux Advanced CLI (Farmer)"),(0,a.kt)("p",null,"  If you are using Linux with UFW (Uncomplicated Firewall) enabled, you will need to allow traffic on the necessary ports to ensure your node and farmer can communicate properly. Use the following commands to update your firewall settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",30333:!0,className:"language-bash",metastring:'title="Allow node traffic on ports 30333 and 30433:"',title:'"Allow',node:!0,traffic:!0,on:!0,ports:!0,and:!0,'30433:"':!0},"sudo ufw allow 30333,30433 comment 'Autonomys Node'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Allow farmer traffic on port 30533:"',title:'"Allow',farmer:!0,traffic:!0,on:!0,port:!0,'30533:"':!0},"sudo ufw allow 30533 comment 'Autonomys Farmer'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="If you are connecting remote farmers within your local network (LAN), allow RPC connections by running this command (assuming your LAN IP range is 192.168.1.0/24):"',title:'"If',you:!0,are:!0,connecting:!0,remote:!0,farmers:!0,within:!0,your:!0,local:!0,network:!0,"(LAN),":!0,allow:!0,RPC:!0,connections:!0,by:!0,running:!0,this:!0,command:!0,"(assuming":!0,LAN:!0,IP:!0,range:!0,is:!0,'192.168.1.0/24):"':!0},"sudo ufw allow from 192.168.1.0/24 to any port 9944 proto tcp comment 'Autonomys Node RPC'\n"))),(0,a.kt)("h3",{id:"network-configuration-scenarios"},"Network Configuration Scenarios"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,a.kt)("th",{parentName:"tr",align:null},"Required Action"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Using a Router"),(0,a.kt)("td",{parentName:"tr",align:null},"Ensure that the necessary ports are properly forwarded to the machine running your services.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Firewall"),(0,a.kt)("td",{parentName:"tr",align:null},"Configure your firewall settings to ensure the required ports are open for incoming and outgoing traffic.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"No Firewall"),(0,a.kt)("td",{parentName:"tr",align:null},"No additional configuration is necessary if a firewall is not in use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Direct Internet Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"If you are connected directly to the internet without a router, no port forwarding is required.")))),(0,a.kt)("h2",{id:"additional-resources-and-verification"},"Additional Resources and Verification"),(0,a.kt)("admonition",{title:"External Links",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Autonomys provides these links for reference only and does not guarantee the accuracy, completeness, or reliability of the information contained within them. Users are advised to verify the details independently and use these resources at their own discretion.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.lifewire.com/how-to-port-forward-4163829"},"How to Forward Ports on Your Router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"},"General Port Forwarding Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://routerslogin.com/all/default-router-list"},"Default Router Username & Passwords List")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.whatismyip.com/port-scanner/"},"Verify Port Forwarding"))))}f.isMDXComponent=!0}}]);