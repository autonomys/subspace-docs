"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3464],{3309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),s=t(8453);const r={title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","Farming","GPU"]},l=void 0,o={id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter",description:"Tips on GPU Plotter",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming/guides/gpu-plotter",permalink:"/farming/guides/gpu-plotter",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","Farming","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/farming/guides"},next:{title:"Port Forwarding & Firewall",permalink:"/farming/guides/port-config"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Platform Compatibility",id:"platform-compatibility",level:3},{value:"Supported GPUs",id:"supported-gpus",level:2},{value:"<strong>Nvidia</strong>",id:"nvidia",level:3},{value:"<strong>AMD</strong>",id:"amd",level:3},{value:"Advanced CLI",id:"advanced-cli",level:3},{value:"Ubuntu",id:"ubuntu",level:4},{value:"Windows",id:"windows",level:4},{value:"Docker",id:"docker",level:4},{value:"<strong>Intel</strong>",id:"intel",level:3},{value:"Note:",id:"note",level:3},{value:"Common Plotting Parameters",id:"common-plotting-parameters",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Known Issues",id:"known-issues",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Most NVIDIA GPU users do not need to change any parameters. The default options will automatically find and use any supported GPU, and CPU plotting will be automatically disabled."})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Autonomys utilizes your drive storage, specifically SSD or NVMe drives, to store plots. After the plotting process is finished, these plots are then farmed using your CPU. Farming is not particularly demanding on the CPU, enabling most modern processors to manage a substantial farm size. However, the plot creation process is highly resource intensive, which makes CPU plotting the main bottleneck."}),"\n",(0,i.jsx)(n.p,{children:"Utilizing GPU plotting allows you to harness the power of compatible GPUs for plot generation and replotting, either in conjunction with or as a substitute for CPU processing. While many modern CPUs can complete the plotting of a sector in less than two minutes, a single high performance GPU can accomplish the same task in under five seconds, greatly improving efficiency and speed."}),"\n",(0,i.jsx)(n.p,{children:"Although GPU plotting is not mandatory, it provides enhanced energy efficiency and speed compared to relying solely on a CPU."}),"\n",(0,i.jsx)(n.admonition,{title:"Plot Format Compatibility",type:"note",children:(0,i.jsx)(n.p,{children:"GPU plotting employs the new v1 plot format, which is applicable to any plots created with versions released on or after July 5th. In contrast, older software versions generated plots in the v0 format, which is only compatible with CPU plotting."})}),"\n",(0,i.jsx)(n.h3,{id:"platform-compatibility",children:"Platform Compatibility"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Platform"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"\ud83d\udc27 Linux"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"\ud83e\ude9f Windows"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:(0,i.jsx)(n.a,{href:"#nvidia",children:"Nvidia"})}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:(0,i.jsx)(n.a,{href:"#amd",children:"AMD"})}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:(0,i.jsx)(n.a,{href:"#intel",children:"Intel"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/autonomys/subspace/releases",children:"Advanced CLI"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Space Acres"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udee0\ufe0f ",(0,i.jsxs)(n.em,{children:["Limited AMD Support is available in recent test builds. The most recent test builds are linked on the ",(0,i.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"forum"}),"\nSee Discord ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/864285291518361610/1062507270539321485",children:"#farmer-chat"})," channel for limited support."]})]}),"\n",(0,i.jsx)(n.h2,{id:"supported-gpus",children:"Supported GPUs"}),"\n",(0,i.jsx)(n.h3,{id:"nvidia",children:(0,i.jsx)(n.strong,{children:"Nvidia"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Series/Model"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Supported"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GTX 16 Series"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RTX 20xx and Newer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Nvidia ",(0,i.jsx)(n.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"drivers"})," version 550 or later are required. Installing the CUDA Toolkit is not required."]})}),"\n",(0,i.jsx)(n.h3,{id:"amd",children:(0,i.jsx)(n.strong,{children:"AMD"})}),"\n",(0,i.jsx)(n.admonition,{title:"AMD ROCm Support",type:"caution",children:(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["There are many challenges to overcome regarding AMD ROCm support. There is much more information on this topic on the ",(0,i.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"forum"})]})})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Series/Model"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Ubuntu"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Windows"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 7900 XTX"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 7600 XT"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 7600"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 6800"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 6600"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 5700 XT"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 5700"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RX 5600"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AMD BC-250"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2754"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You must be using the latest test build for AMD support."})}),"\n",(0,i.jsx)(n.h3,{id:"advanced-cli",children:"Advanced CLI"}),"\n",(0,i.jsx)(n.p,{children:"For AMD GPU users, follow these steps to enable ROCm support:"}),"\n",(0,i.jsx)(n.h4,{id:"ubuntu",children:"Ubuntu"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In order to install necessary libraries go to Ubuntu native installation \u2014 ",(0,i.jsx)(n.a,{href:"https://rocm.docs.amd.com/projects/install-on-linux/en/docs-6.2.2/install/native-install/ubuntu.html",children:"ROCm installation (Linux)"})," and follow these steps for your Ubuntu version:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Package signing key"}),"\n",(0,i.jsx)(n.li,{children:"Register ROCm packages"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You don\u2019t need a custom driver or full ROCm toolchain to use already compiled application, so skip all other steps."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Next install a single package with ROCm runtime:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sudo apt-get install --no-install-recommends hip-runtime-amd\n"})}),"\n",(0,i.jsx)(n.p,{children:"And register the library so that farmer and other apps can find it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'echo "/opt/rocm/lib" | sudo tee /etc/ld.so.conf.d/rocm.conf > /dev/null\nsudo ldconfig\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Then, to allow the user to access GPU for compute purposes, you need to add your user to render group (please never run farmer as root with sudo ","\ud83d\ude4f"," ):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sudo usermod -a -G render $LOGNAME\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now you\u2019ll need to log out of your user profile and log back in or simply reboot for group changes to take effect and you\u2019re ready to go."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,i.jsxs)(n.p,{children:["In order to install necessary libraries go to ",(0,i.jsx)(n.a,{href:"https://www.amd.com/en/developer/resources/rocm-hub/hip-sdk.html",children:"https://www.amd.com/en/developer/resources/rocm-hub/hip-sdk.html"})," and download ROCm version 6.1.2 for your Windows version."]}),"\n",(0,i.jsx)(n.p,{children:"In the installer just the HIP RTC Runtime should be enough under \u201cHIP Runtime Compiler \u2192 HIP RTC Runtime 6.1.0\u201d, everything else can be unchecked."}),"\n",(0,i.jsx)(n.h4,{id:"docker",children:"Docker"}),"\n",(0,i.jsxs)(n.p,{children:["Container image now ships with a second executable ",(0,i.jsx)(n.code,{children:"/subspace-farmer-rocm"})," (see explanation above as to why second binary is needed)."]}),"\n",(0,i.jsx)(n.p,{children:"Here is how it can be used with Docker Compose, you can use this as an inspiration for other use cases:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"services:\n  famer:\n    image: ghcr.io/autonomys/farmer:TAG\n    # Beginning of ROCm-specific options\n    devices:\n      - /dev/kfd:/dev/kfd\n      # This will make all GPUs accessible, you can also limit this\n      # to individual devices like `/dev/dri/renderD128`\n      - /dev/dri:/dev/dri\n    security_opt:\n      - seccomp:unconfined\n    # `root` user can be replaced with ID of the user on the host system\n    # that is in `render` group, needed to access `/dev/kfd` device\n    user: root\n    entrypoint: /subspace-farmer-rocm\n    # End of ROCm-specific options\n    ...the rest of typical options you'd normally use\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cross-compilation no longer requires separate Dockerfiles (which is why they are removed), both native and cross-compilation is supported with a single file"}),"\n",(0,i.jsx)(n.li,{children:"Container image is now built as multi-platform, meaning no -aarch64 suffix and no awkwardness related to that"}),"\n",(0,i.jsx)(n.li,{children:"Aarch64 farmer container image is now compiled with CUDA support (while regular executable isn't)"}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"intel",children:(0,i.jsx)(n.strong,{children:"Intel"})}),"\n",(0,i.jsxs)(n.p,{children:["Intel Arc GPUs ",(0,i.jsx)(n.em,{children:"may"})," be supported in the future, but specific compatibility details have not been announced yet."]}),"\n",(0,i.jsx)(n.h3,{id:"note",children:"Note:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Never run the farmer as root"})," using ",(0,i.jsx)(n.code,{children:"sudo"})," for security reasons."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"All detected GPUs will be used by default"}),", but you can re-enable CPU plotting if needed with:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--cpu-sector-encoding-concurrency <sectors>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["On Ubuntu and Windows ",(0,i.jsx)(n.code,{children:"subspace-farmer-rocm-*"})," executable can be used for ROCm support with corresponding CLI options being similar to CUDA and prefixed with ",(0,i.jsx)(n.code,{children:"--rocm"}),".\nAs you might expect all detected GPUs will be used by default and CPU plotting is automatically disabled in such case."]}),"\n",(0,i.jsx)(n.h2,{id:"common-plotting-parameters",children:"Common Plotting Parameters"}),"\n",(0,i.jsx)(n.p,{children:"Below are some essential parameter examples for configuring the GPU plotter:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When a compatible GPU is detected, CPU plotting is automatically disabled by default, but can be re-enabled if needed by specifying number of concurrently encoded sectors:\n",(0,i.jsx)(n.code,{children:"--cpu-sector-encoding-concurrency <sectors>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--cpu-sector-encoding-concurrency 2\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Specify particular GPUs for plotting rather than using all available GPUs (the default configuration employs all compatible GPUs):\n",(0,i.jsx)(n.code,{children:"--cuda-gpus <gpu_ids>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--cuda-gpus 0,1,3\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Disable GPU Plotting:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Linux"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--cuda-gpus ""\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Windows"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--cuda-gpus 99\n"})}),"\n",(0,i.jsx)(n.h2,{id:"farming-cluster",children:"Farming Cluster"}),"\n",(0,i.jsx)(n.p,{children:"When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher."}),"\n",(0,i.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Many times you will not use all of the compute power of your GPU. While this will be addressed in the future, a workaround when running a farming cluster is to run multiple instances of the plotter on the same machine."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);