"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3981],{21554:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var t=n(74848),i=n(28453),s=n(11470),o=n(19365);const a={title:"Port Forwarding & Firewall",sidebar_position:2,description:"A comprehensive guide on port forwarding and firewall rules for Autonomys Network",slug:"/farming/guides/port-config",keywords:["Domain","\u0424\u0430\u0440\u043c\u0435\u0440","\u0424\u0430\u0440\u043c\u0438\u043d\u0433","Firewall Rules","Networking","Node","Network","\u041f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u043e\u0432","Ports","Router Settings","RPC"]},l=void 0,d={id:"farming-&-staking/farming/additional-guides/port-config",title:"Port Forwarding & Firewall",description:"A comprehensive guide on port forwarding and firewall rules for Autonomys Network",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/port-config.mdx",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming/guides/port-config",permalink:"/ru/farming/guides/port-config",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/port-config.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Port Forwarding & Firewall",sidebar_position:2,description:"A comprehensive guide on port forwarding and firewall rules for Autonomys Network",slug:"/farming/guides/port-config",keywords:["Domain","\u0424\u0430\u0440\u043c\u0435\u0440","\u0424\u0430\u0440\u043c\u0438\u043d\u0433","Firewall Rules","Networking","Node","Network","\u041f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u043e\u0432","Ports","Router Settings","RPC"]},sidebar:"tutorialSidebar",previous:{title:"GPU-\u043f\u043b\u043e\u0442\u0442\u0435\u0440",permalink:"/ru/farming/guides/gpu-plotter"},next:{title:"Grafana Dashboard",permalink:"/ru/farming/guides/grafana-dashboard"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Ports to Forward &amp; Firewall Access",id:"ports-to-forward--firewall-access",level:2},{value:"Steps to Forward Ports",id:"steps-to-forward-ports",level:2},{value:"Manufacturer instructions",id:"manufacturer-instructions",level:2},{value:"Firewall Configuration",id:"firewall-configuration",level:2},{value:"Network Configuration Scenarios",id:"network-configuration-scenarios",level:3},{value:"Additional Resources and Verification",id:"additional-resources-and-verification",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0435\u0442\u0441\u044f, \u043a\u0430\u043a \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u043e\u0432 \u0434\u043b\u044f \u0441\u0435\u0442\u0438 Autonomys. \u041a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u043e\u0432 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u0432\u0430\u0448\u0435\u0439 \u043d\u043e\u0434\u043e\u0439, \u0444\u0430\u0440\u043c\u0435\u0440\u043e\u043c \u0438 \u0441\u0435\u0442\u044c\u044e Autonomys."}),"\n",(0,t.jsx)(r.p,{children:"By opening specific ports on your router, you allow external traffic to reach your node, which is necessary for blockchain synchronization, data exchange, and remote procedure calls (RPC)."}),"\n",(0,t.jsx)(r.p,{children:"Additionally, you may need to adjust your system's firewall settings to allow traffic through the specified ports. Firewalls typically block unsolicited incoming connections, so it's important to ensure that the required ports are open. These adjustments will enable effective communication with the Autonomy Network."}),"\n",(0,t.jsx)(r.h2,{id:"ports-to-forward--firewall-access",children:"Ports to Forward & Firewall Access"}),"\n",(0,t.jsx)(r.admonition,{title:"Multiple Node Configuration",type:"info",children:(0,t.jsx)(r.p,{children:"Ensure each node on the same network runs on unique ports. Adjust the ports mentioned in this guide if using multiple nodes or if default ports have been changed."})}),"\n",(0,t.jsx)(r.admonition,{title:"Exposing RPC Ports",type:"caution",children:(0,t.jsx)(r.p,{children:"\u041f\u043e \u0441\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0440\u0442\u044b RPC 9944 \u0438 9945 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044e \u043f\u043e\u0440\u0442\u043e\u0432, \u0435\u0441\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 RPC. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0443\u0437\u0435\u043b \u0438 \u0444\u0430\u0440\u043c\u0435\u0440 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430\u0445 \u0432 \u043e\u0434\u043d\u043e\u0439 \u0441\u0435\u0442\u0438, \u044d\u0442\u0438 \u043f\u043e\u0440\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0447\u0435\u0440\u0435\u0437 \u0431\u0440\u0430\u043d\u0434\u043c\u0430\u0443\u044d\u0440 \u043d\u0430 \u0443\u0437\u043b\u0435."})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"space-acres",label:"Space Acres",default:!0,children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Port"}),(0,t.jsx)(r.th,{children:"Protocol"}),(0,t.jsx)(r.th,{children:"\u21aa\ufe0f"}),(0,t.jsx)(r.th,{children:"\ud83d\udee1\ufe0f"}),(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Purpose"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30333"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (Consensus)"}),(0,t.jsx)(r.td,{children:"Facilitate block, transaction, and PoT gossip exchange."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30433"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (DSN)"}),(0,t.jsx)(r.td,{children:"Retrieve and serve pieces of data and metadata related to archival history from the P2P network."})]})]})]})}),(0,t.jsx)(o.A,{value:"cli-farmer",label:"CLI (Farmer)",children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Port"}),(0,t.jsx)(r.th,{children:"Protocol"}),(0,t.jsx)(r.th,{children:"\u21aa\ufe0f"}),(0,t.jsx)(r.th,{children:"\ud83d\udee1\ufe0f"}),(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Purpose"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30333"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (Consensus)"}),(0,t.jsx)(r.td,{children:"Facilitate block, transaction, and PoT gossip exchange."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30433"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (DSN)"}),(0,t.jsx)(r.td,{children:"Retrieve and serve pieces of data and metadata related to archival history from the P2P network."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30533"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u0424\u0430\u0440\u043c\u0435\u0440"}),(0,t.jsx)(r.td,{children:"Retrieve blockchain archival history."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"9944"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u274c"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (Consensus RPC)"}),(0,t.jsx)(r.td,{children:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0444\u0430\u0440\u043c\u0435\u0440\u0430."})]})]})]})}),(0,t.jsx)(o.A,{value:"cli-domain",label:"CLI (Domain Operator)",children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Port"}),(0,t.jsx)(r.th,{children:"Protocol"}),(0,t.jsx)(r.th,{children:"\u21aa\ufe0f"}),(0,t.jsx)(r.th,{children:"\ud83d\udee1\ufe0f"}),(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Purpose"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30333"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (Consensus)"}),(0,t.jsx)(r.td,{children:"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u043c\u0435\u043d\u0430 \u0431\u043b\u043e\u043a\u0430\u043c\u0438, \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u043c\u0438 \u0438 \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430\u043c\u0438 PoT."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30334"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (Domain)"}),(0,t.jsx)(r.td,{children:"Essential for a domain node to maintain strong connectivity with the P2P network."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"30433"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (DSN)"}),(0,t.jsx)(r.td,{children:"Retrieve and serve pieces of data and metadata related to archival history from the P2P network."})]})]})]})}),(0,t.jsx)(o.A,{value:"rpc-server",label:"RPC Server (Public)",children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Port"}),(0,t.jsx)(r.th,{children:"Protocol"}),(0,t.jsx)(r.th,{children:"\u21aa\ufe0f"}),(0,t.jsx)(r.th,{children:"\ud83d\udee1\ufe0f"}),(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Purpose"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"9944"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (Consensus RPC)"}),(0,t.jsx)(r.td,{children:"Enables transaction submissions via HTTP and WebSocket, supports slot challenges, and provides access to real-time and historical blockchain data for querying events, transactions, block contents, and chain state."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"9945"}),(0,t.jsx)(r.td,{children:"TCP"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"\u2611\ufe0f"}),(0,t.jsx)(r.td,{children:"Node (Domain RPC)"}),(0,t.jsx)(r.td,{children:"Enables sending transactions, including deploying and calling smart contracts."})]})]})]})})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Legend:"})," The \u21aa\ufe0f column indicates whether the port should be forwarded on the router, while the \ud83d\udee1\ufe0f column specifies if inbound firewall access should be allowed through the operating system."]}),"\n",(0,t.jsx)(r.h2,{id:"steps-to-forward-ports",children:"Steps to Forward Ports"}),"\n",(0,t.jsx)(r.p,{children:"Since the port forwarding process varies by router, follow these general steps:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Find Your Router\u2019s IP Address:"}),"\nCheck your network settings to locate your router\u2019s IP address. You will also need the internal IP address of the computer running the Autonomys components."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Access Router Settings:"}),"\nOpen your router\u2019s settings by entering the router's IP address into a web browser. You may need the default login credentials, often printed on the router or provided by your ISP."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Set Up Port Forwarding:"}),"\nIn the router's configuration interface, navigate to ",(0,t.jsx)(r.strong,{children:"Advanced Settings"})," or ",(0,t.jsx)(r.strong,{children:"Port Forwarding"})," and enter the following details:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The internal IP address of your computer"}),"\n",(0,t.jsx)(r.li,{children:"Consult the tables above for the ports and protocols that need to be forwarded (30333, 30433, 30533, etc.)."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Once entered, apply the changes and reboot your router if necessary."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"manufacturer-instructions",children:"Manufacturer instructions"}),"\n",(0,t.jsx)(r.p,{children:"Here are the links to port forwarding guides from five major consumer router manufacturers:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"TP-Link"})}),"\n",(0,t.jsxs)(r.p,{children:['You can configure port forwarding through the "Forwarding" section on the router\'s web interface. You\'ll add a new rule under "Virtual Servers" and specify the device and ports you want to open.\n',(0,t.jsx)(r.a,{href:"https://www.tp-link.com/us/support/faq/1379/",children:"TP-Link Port Forwarding guide"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Netgear"})}),"\n",(0,t.jsxs)(r.p,{children:['On Netgear routers, port forwarding is set up by navigating to the "Advanced Setup" section and selecting "Port Forwarding/Port Triggering."\n',(0,t.jsx)(r.a,{href:"https://kb.netgear.com/24290/How-do-I-add-a-custom-port-forwarding-service-on-my-NETGEAR-router",children:"Netgear Port Forwarding guide"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Linksys"})}),"\n",(0,t.jsxs)(r.p,{children:['Log in to your router\u2019s web interface and configure port forwarding under the "Apps and Gaming" section of the "Security" tab.\n',(0,t.jsx)(r.a,{href:"https://support.linksys.com/kb/article/318-en/",children:"Linksys Port Forwarding Guide"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"ASUS"})}),"\n",(0,t.jsxs)(r.p,{children:['On ASUS routers, port forwarding is set up via the "WAN" tab, where you\u2019ll find the "Virtual Server/Port Forwarding" option.\n',(0,t.jsx)(r.a,{href:"https://www.asus.com/support/faq/1037906/",children:"ASUS Port Forwarding Guide"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"D-Link"})}),"\n",(0,t.jsxs)(r.p,{children:['For D-Link routers, port forwarding is done in the "Advanced" tab under "Port Forwarding." You\u2019ll add a rule and enter the necessary details.\n',(0,t.jsx)(r.a,{href:"https://www.dlink.com/uk/en/support/faq/routers/mydlink-routers/dir-810l/how-do-i-configure-port-forwarding-on-my-router",children:"D-Link Port Forwarding Guide"})]}),"\n",(0,t.jsx)(r.h2,{id:"firewall-configuration",children:"Firewall Configuration"}),"\n",(0,t.jsxs)(n,{open:!0,children:[(0,t.jsx)("summary",{children:"\ud83d\udc27 Linux CLI (Farmer)"}),(0,t.jsx)(r.p,{children:"\u0415\u0441\u043b\u0438 \u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Linux \u0441\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c UFW (Uncomplicated Firewall), \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0442\u0440\u0430\u0444\u0438\u043a \u043d\u0430 \u043d\u0443\u0436\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0412\u0430\u0448\u0430 \u043d\u043e\u0434\u0430 \u0438 \u0444\u0430\u0440\u043c\u0435\u0440 \u043c\u043e\u0433\u043b\u0438 \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0431\u0440\u0430\u043d\u0434\u043c\u0430\u0443\u044d\u0440\u0430:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Allow node traffic on ports 30333 and 30433:"',children:"sudo ufw allow 30333,30433 comment 'Autonomys Node'\n"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Allow farmer traffic on port 30533:"',children:"sudo ufw allow 30533 comment 'Autonomys Farmer'\n"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="If you are connecting remote farmers within your local network (LAN), allow RPC connections by running this command (assuming your LAN IP range is 192.168.1.0/24):"',children:"sudo ufw allow from 192.168.1.0/24 to any port 9944 proto tcp comment 'Autonomys Node RPC'\n"})})]}),"\n",(0,t.jsx)(r.h3,{id:"network-configuration-scenarios",children:"Network Configuration Scenarios"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Scenario"}),(0,t.jsx)(r.th,{children:"Required Action"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Using a Router"}),(0,t.jsx)(r.td,{children:"Ensure that the necessary ports are properly forwarded to the machine running your services."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Firewall"}),(0,t.jsx)(r.td,{children:"Configure your firewall settings to ensure the required ports are open for incoming and outgoing traffic."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"No Firewall"}),(0,t.jsx)(r.td,{children:"No additional configuration is necessary if a firewall is not in use."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Direct Internet Connection"}),(0,t.jsx)(r.td,{children:"If you are connected directly to the internet without a router, no port forwarding is required."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"additional-resources-and-verification",children:"Additional Resources and Verification"}),"\n",(0,t.jsx)(r.admonition,{title:"External Links",type:"caution",children:(0,t.jsx)(r.p,{children:"Autonomys provides these links for reference only and does not guarantee the accuracy, completeness, or reliability of the information contained within them. Users are advised to verify the details independently and use these resources at their own discretion."})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.lifewire.com/how-to-port-forward-4163829",children:"How to Forward Ports on Your Router"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/",children:"General Port Forwarding Guide"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://routerslogin.com/all/default-router-list",children:"Default Router Username & Passwords List"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.whatismyip.com/port-scanner/",children:"Verify Port Forwarding"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(18215);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>y});var t=n(96540),i=n(18215),s=n(23104),o=n(56347),a=n(205),l=n(57485),d=n(31682),c=n(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:i}}=e;return{value:r,label:n,attributes:t,default:i}}))}(n);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(i.location.search);r.set(s,e),i.replace({...i.location,search:r.toString()})}),[s,i])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:i}=e,s=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[d,u]=x({queryString:n,groupId:i}),[f,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,s]=(0,c.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),g=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function w(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const r=e.currentTarget,n=l.indexOf(r),i=a[n].value;i!==t&&(d(r),o(i))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=f(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,m.jsx)(w,{...r,...e}),(0,m.jsx)(b,{...r,...e})]})}function y(e){const r=(0,j.A)();return(0,m.jsx)(v,{...e,children:u(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(96540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);