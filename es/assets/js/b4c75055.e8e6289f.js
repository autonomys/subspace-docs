"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={title:"C\xf3mo reenviar puertos",sidebar_position:5,description:"C\xf3mo reenviar el puerto TCP 30333 para el Subspace Farmer",keywords:["Farmer","Farming","CLI","Binarios","Redirecci\xf3n de puertos","Subspace Desktop"]},i=void 0,l={unversionedId:"farming-&-staking/farming/additional-guides/port-forwarding",id:"version-latest/farming-&-staking/farming/additional-guides/port-forwarding",title:"C\xf3mo reenviar puertos",description:"C\xf3mo reenviar el puerto TCP 30333 para el Subspace Farmer",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/additional-guides/port-forwarding.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/port-forwarding",permalink:"/es/docs/farming-&-staking/farming/additional-guides/port-forwarding",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/es/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/port-forwarding.md",tags:[],version:"latest",sidebarPosition:5,frontMatter:{title:"C\xf3mo reenviar puertos",sidebar_position:5,description:"C\xf3mo reenviar el puerto TCP 30333 para el Subspace Farmer",keywords:["Farmer","Farming","CLI","Binarios","Redirecci\xf3n de puertos","Subspace Desktop"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/es/docs/category/additional-guides"},next:{title:"Problemas habituales",permalink:"/es/docs/farming-&-staking/farming/common_problems"}},s={},d=[{value:"Recursos adicionales",id:"recursos-adicionales",level:2},{value:"Step 1. <em>Finding Default Gateway Address</em>",id:"step-1-finding-default-gateway-address",level:2},{value:"Encontrar la direcci\xf3n IP del router en Linux",id:"encontrar-la-direcci\xf3n-ip-del-router-en-linux",level:3},{value:"Encontrar la direcci\xf3n IP del router en Windows",id:"encontrar-la-direcci\xf3n-ip-del-router-en-windows",level:3},{value:"Encontrar la direcci\xf3n IP del router en OSX",id:"encontrar-la-direcci\xf3n-ip-del-router-en-osx",level:3},{value:"Step 2. <em>Connecting to your router</em>",id:"step-2-connecting-to-your-router",level:2},{value:"Step 3. <em>Forwarding your ports</em>",id:"step-3-forwarding-your-ports",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are using Linux and enabled ",(0,a.kt)("inlineCode",{parentName:"p"},"ufw")," (firewall), make sure you have opened up your firewall for traffic on port 30333 with the following commands ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30333/tcp")," for TCP and ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30333/udp")," for UDP")),(0,a.kt)("p",null,"En primer lugar, antes de redirigir puertos es importante entender lo que eso significa realmente. Le recomendamos encarecidamente que lea alguna informaci\xf3n sobre el tema, aqu\xed tiene una gu\xeda que consideramos \xfatil https\\://www",".","geeksforgeeks.org/port-forwarding-on-router-and-why-do-we-need-it/"),(0,a.kt)("p",null,"El reenv\xedo de puertos en tu router abrir\xe1 una v\xeda espec\xedfica en tu router para permitir que el tr\xe1fico externo fluya hacia dentro o hacia fuera. Esto se suele hacer autom\xe1ticamente para la mayor\xeda de las aplicaciones, como el puerto 80 para el Protocolo de Transferencia de Archivos, en nuestro caso tendremos que hacerlo manualmente."),(0,a.kt)("p",null,"Es importante tener en cuenta que el reenv\xedo de puertos va a ser diferente para la mayor\xeda de los routers, pero hemos incluido algunas instrucciones generales, as\xed como algunos enlaces para algunas de las principales marcas."),(0,a.kt)("h1",{id:"how-to-port-forward"},"How to Port Forward"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"recursos-adicionales"},"Recursos adicionales"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.lifewire.com/how-to-port-forward-4163829"},"How to Forward Ports on Your Router")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"},"How to Port Forward - General Guide to Multiple Router Brands - Support | No-IP Knowledge Base")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://portforward.com/how-to-port-forward/"},"Port Forwarding in Your Router")),(0,a.kt)("h2",{id:"step-1-finding-default-gateway-address"},"Step 1. ",(0,a.kt)("em",{parentName:"h2"},"Finding Default Gateway Address")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Find your local router IP Address & Computer internal IP address."),(0,a.kt)("p",null,"La direcci\xf3n IP del router s\xf3lo es necesaria para abrir la configuraci\xf3n del router, si usted sabe c\xf3mo abrir la configuraci\xf3n del router - haga eso en su lugar."),(0,a.kt)("h3",{id:"encontrar-la-direcci\xf3n-ip-del-router-en-linux"},"Encontrar la direcci\xf3n IP del router en Linux"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up a terminal and type ",(0,a.kt)("inlineCode",{parentName:"li"},"ip route")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ip r"),"."),(0,a.kt)("li",{parentName:"ol"},"The top of the terminal will show the IP address of your home router typically ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.1"),", we will want to record this IP Address."),(0,a.kt)("li",{parentName:"ol"},"We will then type ",(0,a.kt)("inlineCode",{parentName:"li"},"hostname -I | awk '{print $1}'")," which will return your computer's internal IP address typically something like ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.25"),", ensure to record this IP address as well.")),(0,a.kt)("h3",{id:"encontrar-la-direcci\xf3n-ip-del-router-en-windows"},"Encontrar la direcci\xf3n IP del router en Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up PowerShell and type ",(0,a.kt)("inlineCode",{parentName:"li"},"ipconfig"),"."),(0,a.kt)("li",{parentName:"ol"},"This will display the IP Address of your home router as ",(0,a.kt)("inlineCode",{parentName:"li"},"Default Gateway:"),"."),(0,a.kt)("li",{parentName:"ol"},"This command will also display your computer's internal IP address named as ",(0,a.kt)("inlineCode",{parentName:"li"},"IPv4 Address")," typically something like ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.25"),", ensure to record this IP address as well.")),(0,a.kt)("h3",{id:"encontrar-la-direcci\xf3n-ip-del-router-en-osx"},"Encontrar la direcci\xf3n IP del router en OSX"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up a terminal and type ",(0,a.kt)("inlineCode",{parentName:"li"},"netstat -nr|grep default"),"."),(0,a.kt)("li",{parentName:"ol"},"The top of the terminal will show the IP address of your home router typically ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.1"),", we will want to record this IP Address."),(0,a.kt)("li",{parentName:"ol"},"We will then type ",(0,a.kt)("inlineCode",{parentName:"li"},"ipconfig getifaddr en1")," for wireless or ",(0,a.kt)("inlineCode",{parentName:"li"},"ipconfig getifaddr en0")," for ethernet which will return your computer's internal IP address typically something like ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.25"),", ensure to record this IP address as well.")),(0,a.kt)("h2",{id:"step-2-connecting-to-your-router"},"Step 2. ",(0,a.kt)("em",{parentName:"h2"},"Connecting to your router")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now we will input the router IP Address into an Internet browser (Firefox, Chrome, Edge, etc), this will take you to some kind of login page. At this point we will need to find the default admin login information. There are typically 3 ways to locate this information."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It will usually be physically located on the router, in the detailed information area where you may find a barcode, or serial number."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It may also be in the user manual of the router as well"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sometimes it may also be given to you on an information card from your Internet technician when you first setup your internet.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Some ISP's have it configured to your ISP Portal account login information.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You may also attempt to google the default information, provided you have the serial number and model. Below is a website which may help in looking this information up. Often times it's set to some generic default like ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Password")," as the credentials."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://routerslogin.com/all/default-router-list"},"All Default Router IP Address, Username and Passwords List | Find it Here!")))),(0,a.kt)("h2",{id:"step-3-forwarding-your-ports"},"Step 3. ",(0,a.kt)("em",{parentName:"h2"},"Forwarding your ports")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The actual forwarding process will vary based on your router, below is the general process and crucial information you will need along the way."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login to your router at the login page we located in the prior steps."),(0,a.kt)("li",{parentName:"ol"},"Advanced Settings > Port Forwarding"),(0,a.kt)("li",{parentName:"ol"},"Within the port forwarding screen we will see the following fields, all fields have been filled accordingly to our defaults, except for the Computer IP Address, you will replace this with the computer IP address you received in the first steps.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Computer IP Address:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.25")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Protocols:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"UDP")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Starting Port:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"30333")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Ending Port:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"30333"))),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note, that if you change from the default ",(0,a.kt)("inlineCode",{parentName:"li"},"30333")," port on your node configuration you will need to forward the respective port used."))),(0,a.kt)("li",{parentName:"ol"},"Once you have entered the needed information click save/apply. (Note: You may have to reboot your router depending on the model.)"),(0,a.kt)("li",{parentName:"ol"},"You can then verify if your port has been forwarded via the following website.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.whatismyip.com/port-scanner/"},"https://www.whatismyip.com/port-scanner/"),"\nThe testing website can give false negatives, try running the farmer/node as well to test.")))))}c.isMDXComponent=!0}}]);