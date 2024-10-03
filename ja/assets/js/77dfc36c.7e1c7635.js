"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2064],{5903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(4848),s=n(8453);const r={title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},l=void 0,o={id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter",description:"Tips on GPU Plotter",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/gpu-plotter",permalink:"/ja/docs/farming-&-staking/farming/additional-guides/gpu-plotter",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/ja/docs/category/additional-guides"},next:{title:"Port Forwarding & Firewall",permalink:"/ja/docs/farming-&-staking/farming/additional-guides/port-config"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Platform Compatibility",id:"platform-compatibility",level:3},{value:"Supported GPUs",id:"supported-gpus",level:2},{value:"<strong>Nvidia</strong>",id:"nvidia",level:3},{value:"<strong>AMD</strong>",id:"amd",level:3},{value:"<strong>Intel</strong>",id:"intel",level:3},{value:"Common Plotting Parameters",id:"common-plotting-parameters",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Known Issues",id:"known-issues",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Most NVIDIA GPU users do not need to change any parameters. The default options will automatically find and use any supported GPU, and CPU plotting will be automatically disabled."})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Autonomys utilizes your drive storage, specifically SSD or NVMe drives, to store plots. After the plotting process is finished, these plots are then farmed using your CPU. Farming is not particularly demanding on the CPU, enabling most modern processors to manage a substantial farm size. However, the plot creation process is highly resource intensive, which makes CPU plotting the main bottleneck."}),"\n",(0,i.jsx)(t.p,{children:"Utilizing GPU plotting allows you to harness the power of compatible GPUs for plot generation and replotting, either in conjunction with or as a substitute for CPU processing. While many modern CPUs can complete the plotting of a sector in less than two minutes, a single high performance GPU can accomplish the same task in under five seconds, greatly improving efficiency and speed."}),"\n",(0,i.jsx)(t.p,{children:"Although GPU plotting is not mandatory, it provides enhanced energy efficiency and speed compared to relying solely on a CPU."}),"\n",(0,i.jsx)(t.admonition,{title:"Plot Format Compatibility",type:"note",children:(0,i.jsx)(t.p,{children:"GPU plotting employs the new v1 plot format, which is applicable to any plots created with versions released on or after July 5th. In contrast, older software versions generated plots in the v0 format, which is only compatible with CPU plotting."})}),"\n",(0,i.jsx)(t.h3,{id:"platform-compatibility",children:"Platform Compatibility"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Platform"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83d\udc27 Linux"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83e\ude9f Windows"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#nvidia",children:"Nvidia"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#amd",children:"AMD"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#intel",children:"Intel"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/autonomys/subspace/releases",children:"Advanced CLI"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udee0\ufe0f"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Space Acres"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udee0\ufe0f ",(0,i.jsxs)(t.em,{children:["Limited AMD Support for just Linux is available in recent test builds. See Discord ",(0,i.jsx)(t.a,{href:"https://discord.com/channels/864285291518361610/1062507270539321485",children:"#farmer-chat"})," channel for details."]})]}),"\n",(0,i.jsx)(t.h2,{id:"supported-gpus",children:"Supported GPUs"}),"\n",(0,i.jsx)(t.h3,{id:"nvidia",children:(0,i.jsx)(t.strong,{children:"Nvidia"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Series"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Supported"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RTX 20xx and Newer"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Nvidia ",(0,i.jsx)(t.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"drivers"})," version 550 or later are required. Installing the CUDA Toolkit is not required."]})}),"\n",(0,i.jsx)(t.h3,{id:"amd",children:(0,i.jsx)(t.strong,{children:"AMD"})}),"\n",(0,i.jsx)(t.admonition,{title:"AMD ROCm Support",type:"caution",children:(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["There are many challenges to overcome regarding AMD ROCm support. There is much more information on this topic on the ",(0,i.jsx)(t.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"forum"})]})})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Series"}),(0,i.jsx)(t.th,{children:"Models"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Supported"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 7900 Series"}),(0,i.jsx)(t.td,{children:"7900 XT, 7900 XTX, 7900 GRE"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 6000 Series"}),(0,i.jsx)(t.td,{children:"6600, 6800"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RX 5000 Series"}),(0,i.jsx)(t.td,{children:"5600, 5700"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Supported on Test Builds for Linux Only"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["For more details, please consult the ",(0,i.jsx)(t.a,{href:"https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html",children:"AMD ROCm Requirements"})," for compatibility."]})}),"\n",(0,i.jsx)(t.h3,{id:"intel",children:(0,i.jsx)(t.strong,{children:"Intel"})}),"\n",(0,i.jsx)(t.p,{children:"Intel Arc GPUs may be supported in the future, but specific compatibility details have not been announced yet."}),"\n",(0,i.jsx)(t.h2,{id:"common-plotting-parameters",children:"Common Plotting Parameters"}),"\n",(0,i.jsx)(t.p,{children:"Below are some essential parameter examples for configuring the GPU plotter:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["When a compatible GPU is detected, CPU plotting is automatically disabled by default, but can be re-enabled if needed by specifying number of concurrently encoded sectors:\n",(0,i.jsx)(t.code,{children:"--cpu-sector-encoding-concurrency <sectors>"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--cpu-sector-encoding-concurrency 2\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Specify particular GPUs for plotting rather than using all available GPUs (the default configuration employs all compatible GPUs):\n",(0,i.jsx)(t.code,{children:"--cuda-gpus <gpu_ids>"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--cuda-gpus 0,1,3\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Disable GPU Plotting:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'--cuda-gpus ""\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"farming-cluster",children:"Farming Cluster"}),"\n",(0,i.jsx)(t.p,{children:"When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher."}),"\n",(0,i.jsx)(t.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Occasionally, plotting may stop unexpectedly, requiring a restart of the farmer. We are aware of this issue and a fix is in progress."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);