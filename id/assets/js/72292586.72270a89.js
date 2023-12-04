"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,w=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(w,i(i({ref:t},p),{},{components:r})):o.createElement(w,i({ref:t},p))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={title:"How to Forward Ports",sidebar_position:5,description:"How to forward TCP port 30333 for the Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Port Forwarding","Subspace Desktop"]},i=void 0,l={unversionedId:"farming-&-staking/farming/additional-guides/port-forwarding",id:"farming-&-staking/farming/additional-guides/port-forwarding",title:"How to Forward Ports",description:"How to forward TCP port 30333 for the Subspace Farmer",source:"@site/docs/farming-&-staking/farming/additional-guides/port-forwarding.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/port-forwarding",permalink:"/id/docs/pre-release/farming-&-staking/farming/additional-guides/port-forwarding",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/farming/additional-guides/port-forwarding.md",tags:[],version:"current",lastUpdatedBy:"Justin",lastUpdatedAt:1701711058,formattedLastUpdatedAt:"4 Des 2023",sidebarPosition:5,frontMatter:{title:"How to Forward Ports",sidebar_position:5,description:"How to forward TCP port 30333 for the Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Port Forwarding","Subspace Desktop"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/id/docs/pre-release/category/additional-guides"},next:{title:"Common problems",permalink:"/id/docs/pre-release/farming-&-staking/farming/common_problems"}},s={},d=[{value:"Additional Resources",id:"additional-resources",level:2},{value:"Step 1. <em>Finding Default Gateway Address</em>",id:"step-1-finding-default-gateway-address",level:2},{value:"Find router IP Address on Linux",id:"find-router-ip-address-on-linux",level:3},{value:"Find router IP Address on Windows",id:"find-router-ip-address-on-windows",level:3},{value:"Find router IP Address on OSX",id:"find-router-ip-address-on-osx",level:3},{value:"Step 2. <em>Connecting to your router</em>",id:"step-2-connecting-to-your-router",level:2},{value:"Step 3. <em>Forwarding your ports</em>",id:"step-3-forwarding-your-ports",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are using Linux and enabled ",(0,n.kt)("inlineCode",{parentName:"p"},"ufw")," (firewall), make sure you have opened up your firewall for traffic on port 30333 with the following commands ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30333/tcp")," for TCP and ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30333/udp")," for UDP")),(0,n.kt)("p",null,"First before forwarding ports it is important to understand what that actually means. We would highly suggest reading some information on the topic, here is a guide we find helpful ",(0,n.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/port-forwarding-on-router-and-why-do-we-need-it/"},"https://www.geeksforgeeks.org/port-forwarding-on-router-and-why-do-we-need-it/")),(0,n.kt)("p",null,"Forwarding ports on your router will open up one specific lane on your router to allow external traffic to flow in or out. This is usually automatically done for most applications such as port 80 for File Transfer Protocol, in our case we will need to do this manually."),(0,n.kt)("p",null,"It is important to note that forwarding ports is going to be different for most routers, but we have included some general instructions, as well as some links for some major brands."),(0,n.kt)("h1",{id:"how-to-port-forward"},"How to Port Forward"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.lifewire.com/how-to-port-forward-4163829"},"How to Forward Ports on Your Router")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"},"How to Port Forward - General Guide to Multiple Router Brands - Support | No-IP Knowledge Base")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://portforward.com/how-to-port-forward/"},"Port Forwarding in Your Router")),(0,n.kt)("h2",{id:"step-1-finding-default-gateway-address"},"Step 1. ",(0,n.kt)("em",{parentName:"h2"},"Finding Default Gateway Address")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Find your local router IP Address & Computer internal IP address."),(0,n.kt)("p",null,"Router IP address is only necessary to open router settings, if you know how to open router settings - do that instead."),(0,n.kt)("h3",{id:"find-router-ip-address-on-linux"},"Find router IP Address on Linux"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open up a terminal and type ",(0,n.kt)("inlineCode",{parentName:"li"},"ip route")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"ip r")," .",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"1. This will display the IP Address of your home router at the top\n"))),(0,n.kt)("li",{parentName:"ol"},"The top of the terminal will show the IP address typically ",(0,n.kt)("inlineCode",{parentName:"li"},"192.168.0.1")," we will want to record this IP Address"),(0,n.kt)("li",{parentName:"ol"},"We will then type ",(0,n.kt)("inlineCode",{parentName:"li"},"hostname -I | awk '{print $1}'"),"  which will return your computer's internal IP address typically something like ",(0,n.kt)("inlineCode",{parentName:"li"},"192.168.0.25")," ensure to record this IP address as well.")),(0,n.kt)("h3",{id:"find-router-ip-address-on-windows"},"Find router IP Address on Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open up PowerShell and type ",(0,n.kt)("inlineCode",{parentName:"li"},"ipconfig"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"This will display the IP Address of your home router as ",(0,n.kt)("inlineCode",{parentName:"li"},"Default Gateway:")))),(0,n.kt)("li",{parentName:"ol"},"This command will also display your computer's internal IP address named as ",(0,n.kt)("inlineCode",{parentName:"li"},"IPv4 Address")," typically something like ",(0,n.kt)("inlineCode",{parentName:"li"},"192.168.0.25")," ensure to record this IP address as well.")),(0,n.kt)("h3",{id:"find-router-ip-address-on-osx"},"Find router IP Address on OSX"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open up a terminal and type ",(0,n.kt)("inlineCode",{parentName:"li"},"netstat -nr|grep default"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"This will display the IP Address of your home router"))),(0,n.kt)("li",{parentName:"ol"},"The top of the terminal will show the IP address typically ",(0,n.kt)("inlineCode",{parentName:"li"},"192.168.0.1")," we will want to record this IP Address\n3. We will then type ",(0,n.kt)("inlineCode",{parentName:"li"},"ipconfig getifaddr en1")," for wireless, or ",(0,n.kt)("inlineCode",{parentName:"li"},"ipconfig getifaddr en0")," for ethernet.  which will return your computer's internal IP address typically something like ",(0,n.kt)("inlineCode",{parentName:"li"},"192.168.0.25")," ensure to record this IP address as well.")),(0,n.kt)("h2",{id:"step-2-connecting-to-your-router"},"Step 2. ",(0,n.kt)("em",{parentName:"h2"},"Connecting to your router")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Now we will input the router IP Address into an Internet browser (Firefox, Chrome, Edge, etc), this will take you to some kind of login page. At this point we will need to find the default admin login information. There are typically 3 ways to locate this information."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"It will usually be physically located on the router, in the detailed information area where you may find a barcode, or serial number."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It may also be in the user manual of the router as well"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sometimes it may also be given to you on an information card from your Internet technician when you first setup your internet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Some ISP's have it configured to your ISP Portal account login information.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You may also attempt to google the default information, provided you have the serial number and model. Below is a website which may help in looking this information up. (Often times it's set to some generic default like ",(0,n.kt)("inlineCode",{parentName:"p"},"Admin")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"Password")," as the credentials."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://routerslogin.com/all/default-router-list"},"All Default Router IP Address, Username and Passwords List | Find it Here!")))),(0,n.kt)("h2",{id:"step-3-forwarding-your-ports"},"Step 3. ",(0,n.kt)("em",{parentName:"h2"},"Forwarding your ports")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The actual forwarding process will vary based on your router, below is the general process and crucial information you will need along the way."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to your router at the login page we located in the prior steps."),(0,n.kt)("li",{parentName:"ol"},"Advanced Settings > Port Forwarding"),(0,n.kt)("li",{parentName:"ol"},"Within the port forwarding screen we will see the following fields, all fields have been filled accordingly to our defaults, except for the Computer IP Address, you will replace this with the computer IP address you received in the first steps.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Computer IP Address:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"192.168.0.25")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Protocols:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"TCP"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"UDP")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Starting Port:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"30333")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ending Port:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"30333"))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note, that if you change from the default ",(0,n.kt)("inlineCode",{parentName:"li"},"30333")," port on your node configuration you will need to forward the respective port used."))),(0,n.kt)("li",{parentName:"ol"},"Once you have entered the needed information click save/apply. (Note: You may have to reboot your router/router depending on the model.)"),(0,n.kt)("li",{parentName:"ol"},"You can then verify if your port has been forwarded via the following website.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.whatismyip.com/port-scanner/"},"https://www.whatismyip.com/port-scanner/"),"\nThe testing website can give false negatives, try running the farmer/node as well to test.")))))}m.isMDXComponent=!0}}]);