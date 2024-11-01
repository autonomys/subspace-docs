"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1299],{4674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(4848),s=n(8453),l=n(1470),i=n(9365);const c={title:"\u663e\u5361\u7ed8\u56fe\u5668",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","\u8015\u4f5c","GPU"]},d=void 0,a={id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"\u663e\u5361\u7ed8\u56fe\u5668",description:"Tips on GPU Plotter",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.mdx",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming/guides/gpu-plotter",permalink:"/zh/farming/guides/gpu-plotter",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u663e\u5361\u7ed8\u56fe\u5668",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","\u8015\u4f5c","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/zh/farming/guides"},next:{title:"\u7aef\u53e3\u8f6c\u53d1\u548c\u9632\u706b\u5899",permalink:"/zh/farming/guides/port-config"}},o={},u=[{value:"\u5e73\u53f0\u517c\u5bb9\u6027",id:"\u5e73\u53f0\u517c\u5bb9\u6027",level:2},{value:"\u652f\u6301\u7684\u663e\u5361",id:"\u652f\u6301\u7684\u663e\u5361",level:2},{value:"\u5e38\u89c1\u7ed8\u56fe\u53c2\u6570",id:"\u5e38\u89c1\u7ed8\u56fe\u53c2\u6570",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Autonomys \u4f7f\u7528\u60a8\u7684\u786c\u76d8\u5b58\u50a8\uff0c\u7279\u522b\u662fSSD\u6216NVMe \u786c\u76d8\u6765\u5b58\u50a8\u6570\u636e\u5757\u3002\u7ed8\u56fe\u8fc7\u7a0b\u7ed3\u675f\u540e\uff0c\u5c06\u4f7f\u7528\u60a8\u7684 CPU \u8015\u79cd\u8fd9\u4e9b\u6570\u636e\u5757\u3002\u8015\u79cd\u5bf9\u5904\u7406\u5668\u7684\u8981\u6c42\u5e76\u4e0d\u7279\u522b\u9ad8\uff0c\u8fd9\u4f7f\u5f97\u5927\u591a\u6570\u73b0\u4ee3\u5904\u7406\u5668\u90fd\u80fd\u591f\u7ba1\u7406\u76f8\u5f53\u5927\u89c4\u6a21\u7684\u519c\u573a\u3002\u7136\u800c\uff0c\u7ed8\u56fe\u5236\u4f5c\u8fc7\u7a0b\u8d44\u6e90\u9ad8\u5ea6\u5bc6\u96c6\uff0c\u8fd9\u4f7f\u5f97\u5904\u7406\u5668\u7ed8\u56fe\u6210\u4e3a\u4e3b\u8981\u7684\u74f6\u9888\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u663e\u5361\u7ed8\u56fe\u4f7f\u60a8\u80fd\u591f\u5229\u7528\u517c\u5bb9\u7684\u663e\u5361\u7b97\u529b\u6765\u751f\u6210\u6570\u636e\u5757\u548c\u91cd\u65b0\u7ed8\u56fe\uff0c \u4e0e\u5904\u7406\u5668\u540c\u65f6\u4f7f\u7528\u6216\u505a\u4e3a\u5904\u7406\u5668\u7684\u66ff\u4ee3\u54c1\u3002\u867d\u7136\u8bb8\u591a\u73b0\u4ee3\u7684\u5904\u7406\u5668\u53ef\u4ee5\u5728\u4e0d\u5230\u4e24\u5206\u949f\u7684\u65f6\u95f4\u5185\u5b8c\u6210\u4e00\u4e2a\u6247\u533a\u7684\u7ed8\u5236\uff0c\u4e00\u4e2a\u9ad8\u6027\u80fd\u663e\u5361\u5728\u4e94\u79d2\u949f\u5185\u53ef\u4ee5\u5b8c\u6210\u540c\u6837\u7684\u4efb\u52a1\uff0c\u5927\u5927\u63d0\u9ad8\u6548\u7387\u548c\u901f\u5ea6\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u867d\u7136\u663e\u5361\u7ed8\u56fe\u4e0d\u662f\u5f3a\u5236\u6027\u7684\uff0c\u4f46\u4e0e\u5355\u7eaf\u4f9d\u9760\u5904\u7406\u5668\u76f8\u6bd4\uff0c\u5b83\u63d0\u4f9b\u4e86\u66f4\u9ad8\u7684\u80fd\u6548\u548c\u901f\u5ea6\u3002"}),"\n",(0,r.jsx)(t.admonition,{title:"\u7ed8\u5236\u683c\u5f0f\u517c\u5bb9\u6027",type:"info",children:(0,r.jsx)(t.p,{children:"GPU \u7ed8\u56fe\u4f7f\u7528\u65b0\u7684 v1 \u6570\u636e\u5757\u683c\u5f0f\uff0c\u6b64\u683c\u5f0f\u5e94\u7528\u4e8e7\u67085\u65e5\u6216\u4e4b\u540e\u53d1\u5e03\u7248\u672c\u7684\u4efb\u4f55\u6570\u636e\u5757\u3002 \u76f8\u6bd4\u4e4b\u4e0b\uff0c\u8f83\u65e7\u7684\u8f6f\u4ef6\u7248\u672c\u751f\u6210\u4e86v0\u683c\u5f0f\u7684\u6570\u636e\u5757\uff0c\u8fd9\u53ea\u4e0e CPU \u6570\u636e\u5757\u517c\u5bb9\u3002"})}),"\n",(0,r.jsx)(t.h2,{id:"\u5e73\u53f0\u517c\u5bb9\u6027",children:"\u5e73\u53f0\u517c\u5bb9\u6027"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5e73\u53f0"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83d\udc27 Linux"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83e\ude9f Windows"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Nvidia"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"AMD"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Intel"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/autonomys/subspace/releases",children:"\u9ad8\u7ea7\u547d\u4ee4\u884c"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udee0\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Space Acres"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]})]})]}),"\n",(0,r.jsxs)("div",{className:"small-print",children:[(0,r.jsxs)(t.p,{children:["\ud83d\udee0\ufe0f \u90e8\u5206 AMD \u652f\u6301**\u4ec5\u9650Linux ** \u5728\u6700\u8fd1\u7684\u6d4b\u8bd5\u7248\u672c\u4e2d\u53ef\u4ee5\u4f7f\u7528\u3002\u6700\u65b0\u7684\u6d4b\u8bd5\u7248\u672c\u94fe\u63a5\u5728",(0,r.jsx)(t.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"\u8bba\u575b"})]}),(0,r.jsxs)(t.p,{children:["\u89c1Discord ",(0,r.jsx)(t.a,{href:"https://discord.com/channels/864285291518361610/1062507270539321485",children:"farmer-chat"})," \u9891\u9053\u83b7\u5f97\u90e8\u5206\u652f\u6301\u3002"]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u652f\u6301\u7684\u663e\u5361",children:"\u652f\u6301\u7684\u663e\u5361"}),"\n",(0,r.jsxs)(l.A,{queryString:"brand",children:[(0,r.jsxs)(i.A,{value:"nvidia",label:"Nvidia",queryString:"nvidia",default:!0,children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7cfb\u5217/\u578b\u53f7"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u652f\u6301"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RTX 20xx \u548c\u66f4\u65b0\u7684"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GTX 16 \u7cfb\u5217"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),(0,r.jsx)("div",{className:"small-print",children:(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Nvidia ",(0,r.jsx)(t.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"drivers"})," version 550 or later are required. Installing the CUDA Toolkit is not required."]})})})]}),(0,r.jsxs)(i.A,{value:"amd",label:"AMD",children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["There are many challenges to overcome regarding AMD ROCm support. There is much more information on this topic on the ",(0,r.jsx)(t.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"forum"}),"."]})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"\u60a8\u5fc5\u987b\u4f7f\u7528\u6700\u65b0\u7684\u6d4b\u8bd5\u7248\u672c\u4ee5\u652f\u6301AMD\u3002"})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7cfb\u5217/\u578b\u53f7"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Ubuntu"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Windows"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7900 XTX"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7600 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6800"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6700 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2754"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6700 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5700 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5700"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AMD BC-250"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),(0,r.jsxs)(l.A,{groupId:"OS",children:[(0,r.jsxs)(i.A,{value:"linux",label:"\ud83d\udc27 Ubuntu",default:!0,children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"subspace-farmer-rocm-*"})," \u4e8c\u8fdb\u5236\u6587\u4ef6\u63d0\u4f9bROCm \u652f\u6301\uff0c\u5e76\u63d0\u4f9b\u4e0e CUDA\u7c7b\u4f3c\u7684\u547d\u4ee4\u884c\u9009\u9879\uff0c\u5e76\u4ee5",(0,r.jsx)(t.code,{children:"--rocm"}),"\u4e3a\u524d\u7f00\u3002"]}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u4e3a\u4e86\u5b89\u88c5\u5fc5\u8981\u7684\u5e93\uff0c\u8bf7\u5230 Ubuntu \u672c\u673a\u5b89\u88c5 \u2014 ",(0,r.jsx)(t.a,{href:"https://rocm.docs.amd.com/projects/install-on-linux/en/docs-6.2.2/install/native-install/ubuntu.html",children:"ROCm install (Linux)"}),"\uff0c\u5e76\u5728\u60a8\u7684 Ubuntu \u7248\u672c\u4e2d\u6309\u7167\u8fd9\u4e9b\u6b65\u9aa4\u8fdb\u884c\uff1a"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u5305\u7b7e\u540d\u5bc6\u94a5"}),"\n",(0,r.jsx)(t.li,{children:"\u6ce8\u518c ROCm \u5305\n\u4f60\u4e0d\u9700\u8981\u81ea\u5b9a\u4e49\u9a71\u52a8\u7a0b\u5e8f\u6216\u5b8c\u6574\u7684 ROCm \u5de5\u5177\u94fe\u6765\u4f7f\u7528\u5df2\u7f16\u8bd1\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u6b64\u8df3\u8fc7\u6240\u6709\u5176\u4ed6\u6b65\u9aa4\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u5b89\u88c5\u4e00\u4e2a\u5e26ROCm \u8fd0\u884c\u65f6\u7684\u8f6f\u4ef6\u5305\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"sudo apt-get install --no-install-recommends hip-runtime-amd\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6ce8\u518c\u5e93\uff0c\u4ee5\u4fbf\u519c\u6c11\u53ef\u6267\u884c\u7a0b\u5e8f\u548c\u5176\u4ed6\u5e94\u7528\u80fd\u591f\u627e\u5230\u5b83\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'echo "/opt/rocm/lib" | sudo tee /etc/ld.so.conf.d/rocm.conf > /dev/null\nsudo ldconfig\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u7136\u540e\uff0c\u4e3a\u4e86\u5145\u8bb8\u7528\u6237\u4f7f\u7528\u663e\u5361\u7528\u4e8e\u8ba1\u7b97\uff0c\u4f60\u9700\u8981\u628a\u4f60\u7684\u7528\u6237\u52a0\u5165 render \u7528\u6237\u7ec4 (\u8bf7\u6c38\u8fdc\u4e0d\u8981\u4f7f\u7528sudo\u4ee5root\u8eab\u4efd\u8fd0\u884c\u519c\u6c11\u4e8c\u8fdb\u5236\u7a0b\u5e8f ","\ud83d\ude4f"," ):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"sudo usermod -a -G render $LOGNAME\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Now you'll need to log out of your user profile and log back in or simply reboot for group changes to take effect and you're ready to go."}),"\n"]}),"\n"]})]}),(0,r.jsx)(i.A,{value:"windows",label:"\ud83e\ude9f Windows",children:(0,r.jsx)(t.p,{children:"AMD GPU \u5728 Windows \u4e0a(\u5305\u62ec\u901a\u8fc7 WSL) \u76ee\u524d\u4e0d\u652f\u6301\u3002\u6211\u4eec\u5e0c\u671b\u5728\u672a\u6765\u6dfb\u52a0\u652f\u6301\u3002"})}),(0,r.jsxs)(i.A,{value:"docker",label:"\ud83d\udc33 Docker",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"\u4ea4\u53c9\u7f16\u8bd1\u4e0d\u518d\u9700\u8981\u5355\u72ec\u7684 Dockerfiles(\u56e0\u6b64\u5b83\u4eec\u88ab\u5220\u9664)\uff0c\u4e00\u4e2a\u6587\u4ef6\u540c\u65f6\u652f\u6301\u672c\u5730\u548c\u4ea4\u53c9\u7f16\u8bd1"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"\u5bb9\u5668\u955c\u50cf\u73b0\u5728\u6784\u5efa\u4e3a\u591a\u5e73\u53f0\uff0c\u610f\u5473\u7740\u6ca1\u6709-aarch64\u540e\u7f00\u548c\u4e0e\u4e4b\u76f8\u5173\u7684\u9ebb\u70e6"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Aarch64 \u519c\u6c11\u5bb9\u5668\u955c\u50cf\u73b0\u5728\u7f16\u8bd1\u65f6\u5373\u652f\u6301 CUDA (\u4f46\u5e38\u89c4\u53ef\u6267\u884c\u6587\u4ef6\u4e0d\u662f)"})}),(0,r.jsxs)(t.p,{children:["\u5bb9\u5668\u56fe\u50cf\u73b0\u5728\u63d0\u4f9b\u7b2c\u4e8c\u4e2a\u53ef\u6267\u884c\u7684",(0,r.jsx)(t.code,{children:"/subspace-farmer-rocm"})," (\u89c1\u4e0a\u6587\u5173\u4e8e\u4e3a\u4f55\u9700\u8981\u7b2c\u4e8c\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u89e3\u91ca)\u3002\n\u4ee5\u540e\u662f\u5982\u4f55\u5728 Docker Compose \u4e0b\u4f7f\u7528\u7684\u6f14\u793a, \u4f60\u53ef\u4ee5\u5c06\u5b83\u4f5c\u4e3a\u5176\u4ed6\u4f7f\u7528\u6848\u4f8b\u7684\u7075\u611f\uff1a"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"services:\n  famer:\n    image: ghcr.io/autonomys/farmer:TAG\n    # Beginning of ROCm-specific options\n    devices:\n      - /dev/kfd:/dev/kfd\n      # This will make all GPUs accessible, you can also limit this\n      # to individual devices like `/dev/dri/renderD128`\n      - /dev/dri:/dev/dri\n    security_opt:\n      - seccomp:unconfined\n    # `root` user can be replaced with ID of the user on the host system\n    # that is in `render` group, needed to access `/dev/kfd` device\n    user: root\n    entrypoint: /subspace-farmer-rocm\n    # End of ROCm-specific options\n    ...the rest of typical options you'd normally use\n"})})]})]})]}),(0,r.jsx)(i.A,{value:"intel",label:"Intel",children:(0,r.jsx)(t.p,{children:"\u672a\u6765\u53ef\u80fd\u4f1a\u652f\u6301Intel Arc \u663e\u5361\uff0c\u4f46\u5177\u4f53\u7684\u517c\u5bb9\u6027\u7ec6\u8282\u5c1a\u672a\u516c\u5e03\u3002"})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u5e38\u89c1\u7ed8\u56fe\u53c2\u6570",children:"\u5e38\u89c1\u7ed8\u56fe\u53c2\u6570"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u542f\u7528\u663e\u5361\u7ed8\u56fe"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5f53\u68c0\u6d4b\u5230\u517c\u5bb9\u7684\u663e\u5361\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u7981\u7528 CPU \u7ed8\u56fe\uff0c\u4f46\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u5e76\u53d1\u7f16\u7801\u6247\u533a\u7684\u6570\u91cf\u6765\u91cd\u65b0\u542f\u7528\uff1a\n",(0,r.jsx)(t.code,{children:"--cpu-sector-encoding-concurrency <sectors>"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--cpu-sector-encoding-concurrency 2\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u7981\u7528\u663e\u5361\u7ed8\u56fe"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Linux"',children:'  --cuda-gpus ""\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",metastring:'title="Windows"',children:"--cuda-gpus 99\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u6307\u5b9a\u5177\u4f53\u663e\u5361"})}),"\n",(0,r.jsxs)(t.p,{children:["\u6307\u5b9a\u7279\u5b9a\u7684\u663e\u5361\u7528\u4e8e\u7ed8\u56fe\u800c\u4e0d\u662f\u4f7f\u7528\u6240\u6709\u53ef\u7528\u7684\u663e\u5361 (\u9ed8\u8ba4\u914d\u7f6e\u4f7f\u7528\u6240\u6709\u517c\u5bb9\u7684\u663e\u5361):\n",(0,r.jsx)(t.code,{children:"--cuda-gpus <gpu_ids>"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--cuda-gpus 0,1,3\n"})}),"\n",(0,r.jsx)(t.h2,{id:"farming-cluster",children:"Farming Cluster"}),"\n",(0,r.jsx)(t.p,{children:"When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher."}),"\n",(0,r.jsx)(t.h2,{id:"\u5df2\u77e5\u95ee\u9898",children:"\u5df2\u77e5\u95ee\u9898"}),"\n",(0,r.jsx)(t.p,{children:"Many times you will not use all of the compute power of your GPU. While this will be addressed in the future, a workaround when running a farming cluster is to run multiple instances of the plotter on the same machine."})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var l=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),s=n(8215),l=n(3104),i=n(6347),c=n(205),d=n(7485),a=n(1682),o=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[a,u]=p({queryString:n,groupId:s}),[j,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),g=(()=>{const e=a??j;return x({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),s=c[n].value;s!==r&&(a(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:o,...l,className:(0,s.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function v(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);