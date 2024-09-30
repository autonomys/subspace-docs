"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3722],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=n,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(g,l(l({ref:e},d),{},{components:a})):r.createElement(g,l({ref:e},d))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4807:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},l=void 0,o={unversionedId:"farming-&-staking/farming/additional-guides/gpu-plotter",id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter",description:"Tips on GPU Plotter",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/gpu-plotter",permalink:"/ja/docs/farming-&-staking/farming/additional-guides/gpu-plotter",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/ja/docs/category/additional-guides"},next:{title:"Port Forwarding & Firewall",permalink:"/ja/docs/farming-&-staking/farming/additional-guides/port-config"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Supported Platforms and Graphics Card Compatibility",id:"supported-platforms-and-graphics-card-compatibility",level:3},{value:"Supported Video Cards",id:"supported-video-cards",level:2},{value:"<strong>Nvidia</strong>",id:"nvidia",level:3},{value:"<strong>AMD</strong>",id:"amd",level:3},{value:"<strong>Intel</strong>",id:"intel",level:3},{value:"Common Plotting Parameters",id:"common-plotting-parameters",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Known Issues",id:"known-issues",level:2}],d={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Autonomys utilizes your drive storage, specifically SSD or NVMe drives, to store plots. After the plotting process is finished, these plots are then farmed using your CPU. Farming is not particularly demanding on the CPU, enabling most modern processors to manage a substantial farm size. However, the plot creation process is highly resource intensive, which makes CPU plotting the main bottleneck."),(0,n.kt)("p",null,"Utilizing GPU plotting allows you to harness the power of compatible GPUs for plot generation and replotting, either in conjunction with or as a substitute for CPU processing. While many modern CPUs can complete the plotting of a sector in less than two minutes, a single high performance GPU can accomplish the same task in under five seconds, greatly improving efficiency and speed."),(0,n.kt)("p",null,"Although GPU plotting is not mandatory, it provides enhanced energy efficiency and speed compared to relying solely on a CPU."),(0,n.kt)("admonition",{title:"Plot Format Compatibility",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"GPU plotting employs the new v1 plot format, which is applicable to any plots created with versions released on or after July 5th. In contrast, older software versions generated plots in the v0 format, which is only compatible with CPU plotting.")),(0,n.kt)("h3",{id:"supported-platforms-and-graphics-card-compatibility"},"Supported Platforms and Graphics Card Compatibility"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Platform"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udc27 Linux"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\ud83e\ude9f Windows"),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"#nvidia"},"Nvidia")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"#amd"},"AMD")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"#intel"},"Intel")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/autonomys/subspace/releases"},"Advanced CLI")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udd1c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udd1c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/autonomys/space-acres/releases"},"Space Acres")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udd1c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udd1c")))),(0,n.kt)("h2",{id:"supported-video-cards"},"Supported Video Cards"),(0,n.kt)("h3",{id:"nvidia"},(0,n.kt)("strong",{parentName:"h3"},"Nvidia")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Supported:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Architecture"),(0,n.kt)("th",{parentName:"tr",align:null},"Models"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hopper"),(0,n.kt)("td",{parentName:"tr",align:null},"H Series (H100, H200, H300)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ada Lovelace"),(0,n.kt)("td",{parentName:"tr",align:null},"RTX 40 Series")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ampere"),(0,n.kt)("td",{parentName:"tr",align:null},"RTX 30 Series "," A Series (A100, A40, A30, A10, A6000, A5000, A4000)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Turing"),(0,n.kt)("td",{parentName:"tr",align:null},"RTX 20 Series "," Quadro RTX Series (RTX 8000, RTX 6000)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Volta"),(0,n.kt)("td",{parentName:"tr",align:null},"PRO Series (Tesla V100, Quadro GV100, Titan V)")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Nvidia ",(0,n.kt)("a",{parentName:"em",href:"https://developer.nvidia.com/cuda-downloads"},"drivers")," version 550 or later are required. Installing the CUDA Toolkit is not required.")),(0,n.kt)("h3",{id:"amd"},(0,n.kt)("strong",{parentName:"h3"},"AMD")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Supported:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Series"),(0,n.kt)("th",{parentName:"tr",align:null},"Models"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PRO"),(0,n.kt)("td",{parentName:"tr",align:null},"W7800, W6800, V620")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RX 7000 Series"),(0,n.kt)("td",{parentName:"tr",align:null},"7800 XT, 7700 XT, 7600 (but not 7600 XT)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RX 6000 Series"),(0,n.kt)("td",{parentName:"tr",align:null},"6950 XT, 6900 XT, 6800 XT, 6800")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Potential Support:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Series"),(0,n.kt)("th",{parentName:"tr",align:null},"Models"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RX 6700 Series"),(0,n.kt)("td",{parentName:"tr",align:null},"6750 XT, 6700 XT, 6700")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RX 6000 Series"),(0,n.kt)("td",{parentName:"tr",align:null},"6650 XT, 6600 XT, 6600")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Unsupported:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Series"),(0,n.kt)("th",{parentName:"tr",align:null},"Models"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RX 5000 series"),(0,n.kt)("td",{parentName:"tr",align:null},"RX 5500, RX 5600")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"For more details, please consult the ",(0,n.kt)("a",{parentName:"em",href:"https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html"},"AMD ROCm Requirements")," for compatibility.")),(0,n.kt)("h3",{id:"intel"},(0,n.kt)("strong",{parentName:"h3"},"Intel")),(0,n.kt)("p",null,"Intel Arc GPUs are expected to be supported in the future, but specific compatibility details have not been announced yet."),(0,n.kt)("h2",{id:"common-plotting-parameters"},"Common Plotting Parameters"),(0,n.kt)("p",null,"Below are some essential parameters for configuring the GPU plotter:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set the number of sectors that the CPU plotter will encode simultaneously (the default setting is to use all supported GPUs when a compatible GPU is detected):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--cpu-sector-encoding-concurrency <sectors>\n\n# Example:\n--cpu-sector-encoding-concurrency 2\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Specify particular GPUs for plotting rather than using all available GPUs (the default configuration employs all compatible GPUs):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--cuda-gpus <gpu_ids>\n\n# Example:\n--cuda-gpus 0,1,3\n")))),(0,n.kt)("h2",{id:"farming-cluster"},"Farming Cluster"),(0,n.kt)("p",null,"When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher."),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Occasionally, plotting may stop unexpectedly, requiring a restart of the farmer. We are aware of this issue and a fix is in progress.")))}u.isMDXComponent=!0}}]);