"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[120],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},o=void 0,l={unversionedId:"farming-&-staking/farming/additional-guides/gpu-plotter",id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter",description:"Tips on GPU Plotter",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/gpu-plotter",permalink:"/es/docs/farming-&-staking/farming/additional-guides/gpu-plotter",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/es/docs/category/additional-guides"},next:{title:"Redirecci\xf3n de puertos",permalink:"/es/docs/farming-&-staking/farming/additional-guides/networking"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Supported Video Cards",id:"supported-video-cards",level:2},{value:"NVIDIA",id:"nvidia",level:3},{value:"AMD (Future Support)",id:"amd-future-support",level:3},{value:"Potentially Supported (Requires Testing)",id:"potentially-supported-requires-testing",level:3},{value:"Specifically Unsupported",id:"specifically-unsupported",level:3},{value:"Intel Arc (Future Support)",id:"intel-arc-future-support",level:3},{value:"Common Plotting Parameters",id:"common-plotting-parameters",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Official builds of the ",(0,a.kt)("strong",{parentName:"p"},"GPU Plotter")," are now available!"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Autonomys requires a portion of your drive(s) to be reserved for plots (SSD or NVMe). Once plotted, these plots are farmed using your CPU. This farming process is not CPU intensive, and most modern consumer CPUs can farm a very large amount of drive space. The initial creation of these plots (and replotting) is much more CPU intensive, generally making the CPU the largest bottleneck in creating these plots."),(0,a.kt)("p",null,"With the release of GPU plotting, you can now use your supported GPU(s) to create these plots, either in addition to or instead of using the CPU. While many newer CPUs can plot a sector in less than 2 minutes, a high end GPU can do it in less than 6 seconds."),(0,a.kt)("p",null,"GPU plotting is not required, but it is much more energy efficient and significantly faster than using a CPU alone."),(0,a.kt)("admonition",{title:"Plot Format Compatibility",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"GPU plotting employs the new ",(0,a.kt)("strong",{parentName:"p"},"v1 plot format"),", which is applicable to any plots created with versions released on or after ",(0,a.kt)("strong",{parentName:"p"},"July 5th"),". In contrast, older software versions generated plots in the ",(0,a.kt)("strong",{parentName:"p"},"v0 format"),", which is only compatible with CPU plotting.")),(0,a.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Linux"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subspace"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Space Acres"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,a.kt)("h2",{id:"supported-video-cards"},"Supported Video Cards"),(0,a.kt)("h3",{id:"nvidia"},"NVIDIA"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported Models:"),"\\\nRTX 20 series cards and newer running NVIDIA driver version ",(0,a.kt)("strong",{parentName:"p"},"550")," or later."),(0,a.kt)("h3",{id:"amd-future-support"},"AMD (Future Support)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported Models:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Series"),(0,a.kt)("th",{parentName:"tr",align:null},"Models"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PRO"),(0,a.kt)("td",{parentName:"tr",align:null},"W7800, W6800, V620")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RX 7000 Series"),(0,a.kt)("td",{parentName:"tr",align:null},"7800 XT, 7700 XT, 7600 (but not 7600 XT)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RX 6000 Series"),(0,a.kt)("td",{parentName:"tr",align:null},"6950 XT, 6900 XT, 6800 XT, 6800")))),(0,a.kt)("h3",{id:"potentially-supported-requires-testing"},"Potentially Supported (Requires Testing)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Models Potentially Supported:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Series"),(0,a.kt)("th",{parentName:"tr",align:null},"Models"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RX 6700 Series"),(0,a.kt)("td",{parentName:"tr",align:null},"6750 XT, 6700 XT, 6700")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RX 6000 Series"),(0,a.kt)("td",{parentName:"tr",align:null},"6650 XT, 6600 XT, 6600")))),(0,a.kt)("p",null,"For more details, please consult the ",(0,a.kt)("a",{parentName:"p",href:"https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html"},"AMD ROCm Requirements")," for compatibility."),(0,a.kt)("h3",{id:"specifically-unsupported"},"Specifically Unsupported"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Unsupported Models:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RX 5xxx series")),(0,a.kt)("h3",{id:"intel-arc-future-support"},"Intel Arc (Future Support)"),(0,a.kt)("p",null,"Stay tuned for updates on compatibility for Intel Arc GPUs."),(0,a.kt)("h2",{id:"common-plotting-parameters"},"Common Plotting Parameters"),(0,a.kt)("p",null,"Here are some common parameters to use with the GPU plotter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Defines how many sectors the CPU plotter will encode concurrently (default behavior is off when a compatible GPU is detected):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--cpu-sector-encoding-concurrency <sectors>\n\n# Example:\n--cpu-sector-encoding-concurrency 2\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Specify exact GPUs to be used for plotting instead of using all GPUs (default behavior):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--cuda-gpus <gpu_ids>\n\n# Example:\n--cuda-gpus 0,1\n")))),(0,a.kt)("h2",{id:"farming-cluster"},"Farming Cluster"),(0,a.kt)("p",null,"When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher."))}m.isMDXComponent=!0}}]);