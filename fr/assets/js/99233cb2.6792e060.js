"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9010],{3384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=n(4848),r=n(8453);const s={title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},l=void 0,d={id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter",description:"Tips on GPU Plotter",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/gpu-plotter",permalink:"/fr/docs/farming-&-staking/farming/additional-guides/gpu-plotter",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/fr/docs/category/additional-guides"},next:{title:"Port Forwarding & Firewall",permalink:"/fr/docs/farming-&-staking/farming/additional-guides/port-config"}},o={},a=[{value:"Overview",id:"overview",level:2},{value:"Supported Platforms and Graphics Card Compatibility",id:"supported-platforms-and-graphics-card-compatibility",level:3},{value:"Supported Video Cards",id:"supported-video-cards",level:2},{value:"<strong>Nvidia</strong>",id:"nvidia",level:3},{value:"<strong>AMD</strong>",id:"amd",level:3},{value:"<strong>Intel</strong>",id:"intel",level:3},{value:"Common Plotting Parameters",id:"common-plotting-parameters",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Known Issues",id:"known-issues",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Autonomys utilizes your drive storage, specifically SSD or NVMe drives, to store plots. After the plotting process is finished, these plots are then farmed using your CPU. Farming is not particularly demanding on the CPU, enabling most modern processors to manage a substantial farm size. However, the plot creation process is highly resource intensive, which makes CPU plotting the main bottleneck."}),"\n",(0,i.jsx)(t.p,{children:"Utilizing GPU plotting allows you to harness the power of compatible GPUs for plot generation and replotting, either in conjunction with or as a substitute for CPU processing. While many modern CPUs can complete the plotting of a sector in less than two minutes, a single high performance GPU can accomplish the same task in under five seconds, greatly improving efficiency and speed."}),"\n",(0,i.jsx)(t.p,{children:"Although GPU plotting is not mandatory, it provides enhanced energy efficiency and speed compared to relying solely on a CPU."}),"\n",(0,i.jsx)(t.admonition,{title:"Plot Format Compatibility",type:"note",children:(0,i.jsx)(t.p,{children:"GPU plotting employs the new v1 plot format, which is applicable to any plots created with versions released on or after July 5th. In contrast, older software versions generated plots in the v0 format, which is only compatible with CPU plotting."})}),"\n",(0,i.jsx)(t.h3,{id:"supported-platforms-and-graphics-card-compatibility",children:"Supported Platforms and Graphics Card Compatibility"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Platform"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83d\udc27 Linux"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83e\ude9f Windows"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#nvidia",children:"Nvidia"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#amd",children:"AMD"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#intel",children:"Intel"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/autonomys/subspace/releases",children:"Advanced CLI"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Space Acres"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"supported-video-cards",children:"Supported Video Cards"}),"\n",(0,i.jsx)(t.h3,{id:"nvidia",children:(0,i.jsx)(t.strong,{children:"Nvidia"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Supported:"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Architecture"}),(0,i.jsx)(t.th,{children:"Models"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Hopper"}),(0,i.jsx)(t.td,{children:"H Series (H100, H200, H300)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Ada Lovelace"}),(0,i.jsx)(t.td,{children:"RTX 40 Series"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Ampere"}),(0,i.jsx)(t.td,{children:"RTX 30 Series\nA Series (A100, A40, A30, A10, A6000, A5000, A4000)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Turing"}),(0,i.jsx)(t.td,{children:"RTX 20 Series\nQuadro RTX Series (RTX 8000, RTX 6000)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Volta"}),(0,i.jsx)(t.td,{children:"PRO Series (Tesla V100, Quadro GV100, Titan V)"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Nvidia ",(0,i.jsx)(t.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"drivers"})," version 550 or later are required. Installing the CUDA Toolkit is not required."]})}),"\n",(0,i.jsx)(t.h3,{id:"amd",children:(0,i.jsx)(t.strong,{children:"AMD"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Supported:"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Series"}),(0,i.jsx)(t.th,{children:"Models"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PRO"}),(0,i.jsx)(t.td,{children:"W7800, W6800, V620"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 7000 Series"}),(0,i.jsx)(t.td,{children:"7800 XT, 7700 XT, 7600 (but not 7600 XT)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 6000 Series"}),(0,i.jsx)(t.td,{children:"6950 XT, 6900 XT, 6800 XT, 6800"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Potential Support:"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Series"}),(0,i.jsx)(t.th,{children:"Models"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 6700 Series"}),(0,i.jsx)(t.td,{children:"6750 XT, 6700 XT, 6700"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 6000 Series"}),(0,i.jsx)(t.td,{children:"6650 XT, 6600 XT, 6600"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Unsupported:"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Series"}),(0,i.jsx)(t.th,{children:"Models"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 5000 series"}),(0,i.jsx)(t.td,{children:"RX 5500, RX 5600"})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["For more details, please consult the ",(0,i.jsx)(t.a,{href:"https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html",children:"AMD ROCm Requirements"})," for compatibility."]})}),"\n",(0,i.jsx)(t.h3,{id:"intel",children:(0,i.jsx)(t.strong,{children:"Intel"})}),"\n",(0,i.jsx)(t.p,{children:"Intel Arc GPUs are expected to be supported in the future, but specific compatibility details have not been announced yet."}),"\n",(0,i.jsx)(t.h2,{id:"common-plotting-parameters",children:"Common Plotting Parameters"}),"\n",(0,i.jsx)(t.p,{children:"Below are some essential parameters for configuring the GPU plotter:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Set the number of sectors that the CPU plotter will encode simultaneously (the default setting is to use all supported GPUs when a compatible GPU is detected):","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--cpu-sector-encoding-concurrency <sectors>\n\n# Example:\n--cpu-sector-encoding-concurrency 2\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Specify particular GPUs for plotting rather than using all available GPUs (the default configuration employs all compatible GPUs):","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--cuda-gpus <gpu_ids>\n\n# Example:\n--cuda-gpus 0,1,3\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"farming-cluster",children:"Farming Cluster"}),"\n",(0,i.jsx)(t.p,{children:"When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher."}),"\n",(0,i.jsx)(t.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Occasionally, plotting may stop unexpectedly, requiring a restart of the farmer. We are aware of this issue and a fix is in progress."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);