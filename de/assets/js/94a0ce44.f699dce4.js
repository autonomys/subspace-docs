"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"GPU Plotter Trial Release",sidebar_position:4,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},i=void 0,s={unversionedId:"farming-&-staking/farming/additional-guides/gpu-plotter",id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter Trial Release",description:"Tips on GPU Plotter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/gpu-plotter",permalink:"/de/docs/farming-&-staking/farming/additional-guides/gpu-plotter",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"GPU Plotter Trial Release",sidebar_position:4,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Grafana Dashboard",permalink:"/de/docs/farming-&-staking/farming/additional-guides/grafana-dashboard"},next:{title:"Common problems",permalink:"/de/docs/farming-&-staking/farming/common_problems"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Supported Video Cards",id:"supported-video-cards",level:2},{value:"NVIDIA",id:"nvidia",level:3},{value:"AMD (Future Support)",id:"amd-future-support",level:3},{value:"Potentially Supported (Requires Testing)",id:"potentially-supported-requires-testing",level:3},{value:"CPU and GPU Usage",id:"cpu-and-gpu-usage",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Support",id:"support",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The first test builds of the ",(0,o.kt)("strong",{parentName:"p"},"GPU Plotter")," are now available!!!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/autonomys/subspace/actions/runs/10850781628"},"Download GPU Plotter for Linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/autonomys/subspace/actions/runs/10849228997"},"Download GPU Plotter for Windows"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Be aware that you must be logged into Github in order to download from these links.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Autonomys requires a portion of your disk(s) to be reserved for plots on your solid-state drive (SSD). Once created, these plots are farmed using your CPU. This farming process is not CPU-intensive, and most\nmodern consumer CPUs can farm a large amount of disk space. However, the initial creation of these plots (and replotting) is much more CPU-intensive, often making the CPU the biggest bottleneck in creating new plots."),(0,o.kt)("p",null,"With the release of the GPU plotter, you can now use your GPU to create plots, either in addition to or instead of using the CPU. While many newer CPUs can plot a sector in less than 2 minutes, a high-end video card\ncan do it in just 6 seconds. Using a GPU is not required, but it is more energy-efficient and significantly faster than using a CPU alone."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"CPU plotting uses a v1 plot format. Any plots created with the application version available on or after July 5th use the v1 format. Earlier versions use the v0 format, which is only supported by CPU plotting.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The GPU Plotter will eventually support most NVIDIA and AMD video cards. Currently, only NVIDIA cards are supported."),(0,o.kt)("p",null,"The download package includes both the node and farmer Advanced CLI executables, but you only need the farmer for plotting. You can continue to use an official release version for your node. It works for both standalone\nfarming/plotting and farming clusters. Support for Space Acres will be added in the future."),(0,o.kt)("p",null,"For Linux users, you will need to install either the NVIDIA 550 or 560 drivers. Any recent driver for Windows should work. If you get a message that contains this warning: ",(0,o.kt)("strong",{parentName:"p"},'"the provided PTX was compiled with an unsupported toolchain."'),",\nthen you need to update your drivers."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"By default, the plotter uses all available GPUs. You can override this behavior using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cuda-gpus")," parameter.")),(0,o.kt)("h2",{id:"supported-video-cards"},"Supported Video Cards"),(0,o.kt)("h3",{id:"nvidia"},"NVIDIA"),(0,o.kt)("p",null,"All NVIDIA RTX 20 series cards and newer are supported."),(0,o.kt)("h3",{id:"amd-future-support"},"AMD (Future Support)"),(0,o.kt)("p",null,"While current support is limited to NVIDIA, the following AMD video cards are expected to be supported in the future:\n",(0,o.kt)("a",{parentName:"p",href:"https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html"},"AMD Cards System Requirements"),"."),(0,o.kt)("p",null,"The following professional and consumer cards may be supported (especially ",(0,o.kt)("a",{parentName:"p",href:"https://rocm.docs.amd.com/projects/install-on-windows/en/docs-6.2.0/reference/system-requirements.html"},"on Windows"),", though not yet on Linux):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PRO W7800, W6800, V620"),(0,o.kt)("li",{parentName:"ul"},"7800 XT, 7700 XT, 7600 (but not 7600 XT)"),(0,o.kt)("li",{parentName:"ul"},"6950 XT, 6900 XT, 6800 XT, 6800")),(0,o.kt)("h3",{id:"potentially-supported-requires-testing"},"Potentially Supported (Requires Testing)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"6750 XT, 6700 XT, 6700"),(0,o.kt)("li",{parentName:"ul"},"6650 XT, 6600 XT, 6600")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"No RX 5xxx series cards are currently listed for support.")),(0,o.kt)("h2",{id:"cpu-and-gpu-usage"},"CPU and GPU Usage"),(0,o.kt)("p",null,"By default, the plotter utilizes both the CPU and GPU. If you wish to disable CPU usage, you can do so with the following parameter: ",(0,o.kt)("inlineCode",{parentName:"p"},"--cpu-sector-encoding-concurrency 0")),(0,o.kt)("h2",{id:"farming-cluster"},"Farming Cluster"),(0,o.kt)("p",null,"When using a farming cluster please be aware that that when using GPU's - and especially multiple GPU's - you may exceed the bandwidth of your network connection. A fast GPU will exceed the bandwidth that a 1G\nconnection would provide. That doesn't mean it will fail to work, it just means that your video card will be idle while it waits for the data to transfer. Mny people with fast or multiple GPU's are using 2.5G\nor 10G connections."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Should you have any questions or need further assistance, please don't hesitate to reach out to the team on Discord!"))}c.isMDXComponent=!0}}]);