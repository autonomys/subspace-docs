"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3577],{20693:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=r(74848),a=r(28453);const c={title:"\u8015\u79cd\u96c6\u7fa4",sidebar_position:2,description:"\u5982\u4f55\u8bbe\u7f6e\u548c\u914d\u7f6e\u4e00\u4e2a\u519c\u6c11\u96c6\u7fa4",slug:"/farming/advanced-cli/cluster",keywords:["\u8015\u79cd\u96c6\u7fa4","\u519c\u592b","\u8015\u4f5c","CLI","\u96c6\u7fa4","Docker."]},i=void 0,l={id:"farming-&-staking/farming/advanced-cli/cli-farming-cluster",title:"\u8015\u79cd\u96c6\u7fa4",description:"\u5982\u4f55\u8bbe\u7f6e\u548c\u914d\u7f6e\u4e00\u4e2a\u519c\u6c11\u96c6\u7fa4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-farming-cluster.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming/advanced-cli/cluster",permalink:"/zh/farming/advanced-cli/cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u8015\u79cd\u96c6\u7fa4",sidebar_position:2,description:"\u5982\u4f55\u8bbe\u7f6e\u548c\u914d\u7f6e\u4e00\u4e2a\u519c\u6c11\u96c6\u7fa4",slug:"/farming/advanced-cli/cluster",keywords:["\u8015\u79cd\u96c6\u7fa4","\u519c\u592b","\u8015\u4f5c","CLI","\u96c6\u7fa4","Docker."]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh/farming/advanced-cli/install"},next:{title:"\u5c0f\u8d34\u58eb\u548c\u6280\u5de7",permalink:"/zh/farming/advanced-cli/tips"}},t={},d=[{value:"\u5173\u4e8e\u7f51\u7edc\u7684\u8003\u91cf",id:"\u5173\u4e8e\u7f51\u7edc\u7684\u8003\u91cf",level:2},{value:"\u4e3b\u8981\u4f18\u52bf",id:"\u4e3b\u8981\u4f18\u52bf",level:2},{value:"NATS",id:"nats",level:2},{value:"\u7ec4\u4ef6\u914d\u7f6e",id:"\u7ec4\u4ef6\u914d\u7f6e",level:2},{value:"\u5206\u7ec4\u7ec4\u4ef6",id:"\u5206\u7ec4\u7ec4\u4ef6",level:3},{value:"\u8fdb\u9636",id:"\u8fdb\u9636",level:2},{value:"NATS \u96c6\u7fa4",id:"nats-\u96c6\u7fa4",level:3},{value:"\u591a\u7ec4\u4ef6",id:"\u591a\u7ec4\u4ef6",level:3}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u519c\u6c11\u96c6\u7fa4\u662f\u4e3a\u8f83\u5927\u89c4\u6a21\u7684\u5bb6\u6c11\u8bbe\u8ba1\u7684\uff0c\u4ee5\u6709\u6548\u5730\u5e94\u5bf9\u6269\u5c55\u65b9\u9762\u7684\u6311\u6218\u3002 \u5b83\u7531\u56db\u4e2a\u4e3b\u8981\u90e8\u5206\u7ec4\u6210\uff0c\u901a\u8fc7\u4e00\u4e2aNATS\u670d\u52a1\u5668\u76f8\u4e92\u8054\u7cfb\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u96c6\u7fa4\u63d0\u4f9b\u5f3a\u5927\u7684\u8fdc\u7a0b\u8ba1\u7b97\u529f\u80fd\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u67d0\u53f0\u8ba1\u7b97\u673a\u9002\u5408\u8015\u79cd\uff0c\u800c\u4e0d\u662f\u7ed8\u56fe\uff0c \u60a8\u53ef\u4ee5\u5728\u8be5\u673a\u5668\u4e0a\u8fd0\u884c\u8015\u79cd\u7ec4\u4ef6\u540c\u65f6\u4f7f\u7528\u4e00\u4e2a\u6216\u591a\u4e2a\u8fdc\u7a0b\u673a\u5668\u7ed8\u56fe\u3002 \u8fd9\u786e\u4fdd\u4e86\u591a\u4e2a\u519c\u573a\u7684\u8fde\u7eed\u7ed8\u56fe\u548c\u91cd\u65b0\u7ed8\u56fe\uff0c\u5728\u6240\u6709\u6247\u533a\u5b8c\u5168\u7ed8\u5236\u548c\u91cd\u65b0\u7ed8\u56fe\u4e4b\u524d\u4f7f\u7ed8\u56fe\u673a\u7684\u4f7f\u7528\u8fbe\u5230\u6700\u4f18\u3002"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.mermaid,{value:"flowchart\nNATS((NATS Server))\nNATS  <--\x3e  Controller(Controller)\nNATS  <--\x3e  Cache(Cache)\nNATS  <--\x3e  Farmer(Farmer)\nNATS  <--\x3e  Plotter(Plotter)"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u4e8e\u7f51\u7edc\u7684\u8003\u91cf",children:"\u5173\u4e8e\u7f51\u7edc\u7684\u8003\u91cf"}),"\n",(0,s.jsx)(n.p,{children:"\u96c6\u7fa4\u4f7f\u7528\u6a21\u5757\u5316\u67b6\u6784\u6765\u8fd0\u8425\u4e00\u4e2a\u519c\u573a\uff0c \u6bcf\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u591a\u4e2a\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u6765\u6269\u5c55\uff0c\u4ee5\u589e\u52a0\u53ef\u6269\u5c55\u6027\u548c\u5197\u4f59\u6027\u3002 \u56e0\u6b64\uff0c\u5fc5\u987b\u786e\u4fdd\u6709\u8db3\u591f\u7684\u5c40\u57df\u7f51\u5e26\u5bbd\uff0c\u4ee5\u4fbf\u4e8e\u5728\u4f60\u7f51\u7edc\u4e2d\u8fd9\u4e9b\u7ec4\u4ef6\u95f4\u6570\u636e\u7684\u9ad8\u6548\u4f20\u8f93\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u7f51\u7edc\u8981\u6c42",type:"caution",children:(0,s.jsx)(n.p,{children:"\u5bf9\u8fd9\u6837\u7684\u6d41\u91cf\u6765\u8bf4\uff0c1 Gbit \u7f51\u7edc\u5f88\u53ef\u80fd\u4e0d\u591f\uff0c\u7279\u522b\u662f\u5f53\u4f7f\u7528 GPU \u7ed8\u56fe\u6216\u591a\u4e2a\u7ed8\u56fe\u670d\u52a1\u5668\u65f6\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c2.5 Gbit\u7f51\u7edc\u662f\u6ee1\u8db3\u9700\u6c42\u7684\u6700\u4f4e\u6807\u51c6\uff0c\u5bf9\u4e8e\u66f4\u5927\u7684\u96c6\u7fa4\uff0c\u5e94\u5347\u7ea7\u5230 10 Gbit\u6216\u66f4\u9ad8\u3002"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u5e26\u5bbd\u4f18\u5316\u5efa\u8bae",type:"info",children:(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u540c\u4e00\u673a\u5668\u4e0a\u8fd0\u884cNATS\u3001Controller\u3001Cache\u548cPlotter\u7ec4\u4ef6\u6765\u51cf\u5c11\u5c40\u57df\u7f51\u5e26\u5bbd\u4f7f\u7528\u91cf\u3002 \u6b64\u8bbe\u7f6e\u5141\u8bb8\u5927\u591a\u6570\u6570\u636e\u4f20\u8f93\u5728\u672c\u5730\u73af\u56de\u63a5\u53e3\u4e0a\u8fdb\u884c\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3b\u8981\u4f18\u52bf",children:"\u4e3b\u8981\u4f18\u52bf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8fdc\u7a0b\u8ba1\u7b97\u80fd\u529b"}),(0,s.jsx)(n.br,{}),"\n","\u591a\u4e2aPC\u53ef\u4ee5\u8d21\u732e\u4ed6\u4eec\u7684 CPU \u548c GPU \u8d44\u6e90\u7528\u4e8e\u7ed8\u56fe\u548c\u91cd\u65b0\u7ed8\u56fe\uff0c\u800c\u65e0\u9700\u672c\u5730\u5b58\u50a8\u6570\u636e\u5757\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5197\u4f59"}),(0,s.jsx)(n.br,{}),"\n","\u6bcf\u4e2a\u8fdb\u7a0b\u5728\u591a\u53f0\u8ba1\u7b97\u673a\u8fd0\u884c\u589e\u52a0\u5197\u4f59\u548c\u7cfb\u7edf\u7a33\u5b9a\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5e26\u5bbd\u6548\u7387"}),(0,s.jsx)(n.br,{}),"\n","Piece cache \u7684\u96c6\u4e2d\u5b58\u50a8\u6709\u52a9\u4e8e\u8282\u7ea6\u5c40\u57df\u7f51\u5e26\u5bbd\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u989d\u5916\u7a7a\u95f4"}),(0,s.jsx)(n.br,{}),"\n","\u4e0e\u72ec\u7acb\u8fd0\u884c\u519c\u6c11\u76f8\u6bd4\u8f83, \u5c06piece cache \u540c\u6b65\u7f13\u5b58\u91cd\u65b0\u5b89\u7f6e\u5230\u4e00\u4e2a\u4e2d\u5fc3\u4f4d\u7f6e\uff0c\u53ef\u4f7f\u8015\u4f5c\u5bb9\u91cf\u589e\u52a0 1% \u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nats",children:"NATS"}),"\n",(0,s.jsxs)(n.p,{children:["\u96c6\u7fa4\u7684\u6838\u5fc3\u662f\u4e00\u4e2a\u7b2c\u4e09\u65b9\u8f6f\u4ef6\uff0c\u53eb\u505a ",(0,s.jsx)(n.a,{href:"https://nats.io/",children:"NATS"}),"\uff0c\u7528\u4e8e\u519c\u573a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5\u548c\u8fd0\u884c NATS \u7684\u6700\u7b80\u5355\u65b9\u5f0f\u662f\u901a\u8fc7 Docker\u3002"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"\u8bbe\u7f6e\u5e76\u914d\u7f6e NATS"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u521b\u5efa\u5e76\u4fdd\u5b58 ",(0,s.jsx)(n.code,{children:"nats.config"})," \u914d\u7f6e\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="nats.conf"',children:"max_payload = 2MB\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528Docker\u542f\u52a8NATS\uff1a"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run \\\n    --name nats \\\n    --restart unless-stopped \\\n    --publish 4222:4222 \\\n    --volume /path/to/nats.config:/nats.config:ro \\\n    nats -c /nats.config\n"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u7ec4\u4ef6\u914d\u7f6e",children:"\u7ec4\u4ef6\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u914d\u7f6e\u96c6\u7fa4\u7c7b\u4f3c\u4e8e\u914d\u7f6e\u72ec\u7acb\u8fd0\u884c\u7684\u519c\u6c11\u8282\u70b9\uff0c \u4f46\u6bcf\u4e2a\u7ec4\u4ef6\u5fc5\u987b\u6839\u636e\u60a8\u60f3\u8981\u521b\u5efa\u7684\u96c6\u7fa4\u8bbe\u7f6e\u8fdb\u884c\u914d\u7f6e\u3002 \u8bf7\u8bb0\u4f4f\uff0c\u6240\u6709\u7ec4\u4ef6\u901a\u8fc7\u60a8\u5148\u524d\u914d\u7f6e\u7684NATS\u670d\u52a1\u5668\u76f8\u4e92\u901a\u4fe1\u3002 \u4e0b\u9762\u662f\u5efa\u7acb\u6b63\u5e38\u8fd0\u884c\u7684\u96c6\u7fa4\u6240\u9700\u7684\u57fa\u672c\u53c2\u6570\u3002"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Controller (\u7ba1\u7406\u8282\u70b9\u901a\u4fe1\u5e76\u534f\u8c03\u6307\u6325\u5176\u4ed6\u7ec4\u4ef6\u3002)"}),(0,s.jsx)(n.p,{children:"\u542f\u52a8\u7684\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u662f\u63a7\u5236\u5668\u3002\u5b83\u8fde\u63a5\u5230\u5355\u4e2a\u8282\u70b9\uff0c\u60a8\u5fc5\u987b\u6307\u5b9a\u8282\u70b9\u5728\u7f51\u7edc\u4e0a\u7684\u4f4d\u7f6e\u3002"}),(0,s.jsxs)(n.admonition,{title:"\u5408\u9002\u7684\u7aef\u53e3\u8f6c\u53d1\u65b9\u5f0f",type:"caution",children:[(0,s.jsxs)(n.p,{children:["\u8981\u8ba9\u4f60\u7684\u96c6\u7fa4\u80fd\u591f\u8fde\u63a5\uff0c\u6253\u5f00\u9ed8\u8ba4\u7aef\u53e3",(0,s.jsx)(n.code,{children:"30533"}),"\u5e76\u5c06\u5176\u8f6c\u53d1\u5230\u63a7\u5236\u5668\u3002 \u5982\u679c\u60a8\u66f4\u6539\u4e86\u7aef\u53e3\u6216\u4f7f\u7528\u4e86\u591a\u4e2a\u63a7\u5236\u5668\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(n.code,{children:"--listen-on /ip4/0.0.0.0/tcp/<port>"}),"\u3002"]}),(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u6709IPv6\u5730\u5740\uff0c\u4f46\u6ca1\u6709\u516c\u5171IPv4\u5730\u5740\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(n.code,{children:"--listen-on /ip6/::/tcp/<port>"}),"\u8bbe\u7f6e\u76d1\u542c\u7aef\u53e3\u3002 \u5f3a\u70c8\u5efa\u8bae\u63a5\u53d7IPv6\u8fde\u63a5\u3002"]}),(0,s.jsxs)(n.p,{children:["\u53c2\u89c1\u6211\u4eec",(0,s.jsx)(n.a,{href:"/farming/guides/port-config",children:"\u7aef\u53e3\u8f6c\u53d1"})," \u7684\u6307\u5357\u3002"]})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n"})}),(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": \u4f60\u7684NATS\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/path/to/controller-dir"}),": \u4fdd\u5b58\u63a7\u5236\u5668\u5bf9\u7b49\u7f51\u7edc\u8be6\u7ec6\u4fe1\u606f\u7684\u8def\u5f84\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<node_ip>"})," and ",(0,s.jsx)(n.code,{children:"<rpc_port>"}),": \u4f60\u7684\u8282\u70b9\u7684 IP \u5730\u5740\u548cRPC \u7aef\u53e3\u3002"]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u901a\u7528\u53c2\u6570"}),(0,s.jsxs)(n.p,{children:["\u8bf7\u53c2\u9605",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster controller --help"})," \u4ee5\u4e86\u89e3\u6bcf\u4e2a\u9009\u9879\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u89e3\u91ca\u3002"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--listen-on /ip4/0.0.0.0/tcp/<port>\n--listen-on /ip6/::1/tcp/<port>\n\n--cache-group\n--in-connections\n--out-connections\n--pending-in-connections\n--pending-out-connections\n"})})]})]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"\u7f13\u5b58 (\u4ece DSN \u8282\u70b9\u4e0b\u8f7d\u6247\u533a\u6570\u636e\u5e76\u63d0\u4f9b\u7ed9\u7ed8\u56fe\u5668)"}),(0,s.jsxs)(n.admonition,{title:"\u7f13\u5b58\u5927\u5c0f",type:"caution",children:[(0,s.jsx)(n.p,{children:"\u7f13\u5b58\u5b58\u50a8\u533a\u5757\u94fe\u7684\u6863\u6848\u5386\u53f2\u3002\u4e3a\u4e86\u4f18\u5316\u6027\u80fd\uff0c\u6570\u636e\u7f13\u5b58\u5fc5\u987b\u8db3\u591f\u5927\u4ee5\u4fbf\u672c\u5730\u5b58\u50a8\u8fd9\u4e9b\u6570\u636e\u3002 \u5982\u679c\u6570\u636e\u5728\u7f13\u5b58\u4e2d\u4e0d\u5b58\u5728\uff0c\u7ed8\u56fe\u53ef\u80fd\u4f1a\u56e0\u6b64\u51cf\u6162\uff0c\u56e0\u4e3a\u5b83\u5fc5\u987b\u901a\u8fc7 DSN \u4ece\u5bf9\u7b49\u70b9\u83b7\u53d6\u3002 \u5f53\u524d\uff0c\u6211\u4eec\u5efa\u8bae\u7f13\u5b58\u81f3\u5c11200GiB\u3002"}),(0,s.jsxs)(n.p,{children:["\u5f53\u524d\u5b58\u6863\u5386\u53f2\u8bb0\u5f55\u5927\u5c0f\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"})," \u9876\u90e8\u627e\u5230\u3002"]})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    cache \\\n        path=/path/to/cache,size=<size>\n"})}),(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": \u4f60\u7684NATS\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/path/to/cache"})," \u548c ",(0,s.jsx)(n.code,{children:"<size>"}),": \u7f13\u5b58\u7684\u8def\u5f84\u548c\u5927\u5c0f\u3002\u4e00\u4e2a\u7f13\u5b58\u7ec4\u4ef6\u652f\u6301\u591a\u4e2a\u7f13\u5b58\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"path=/path/to/cache1,size=<size> \\\npath=/path/to/cache2,size=<size>\n"})}),"\n"]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u901a\u7528\u53c2\u6570"}),(0,s.jsxs)(n.p,{children:["\u8bf7\u53c2\u9605",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster cache --help"})," \u4ee5\u83b7\u53d6\u989d\u5916\u53c2\u6570\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u89e3\u91ca\u3002"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--cache-group\n"})})]})]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"\u7ed8\u56fe\u5668 (\u751f\u6210\u548c\u4e0a\u4f20\u7ed8\u5236\u8fc7\u7684\u6570\u636e\u5757\uff0c\u9700\u8981\u65f6\u4ece\u7f13\u5b58\u4e2d\u4e0b\u8f7dpieces)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    plotter\n"})}),(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": \u4f60\u7684NATS\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002"]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u901a\u7528\u53c2\u6570"}),(0,s.jsxs)(n.p,{children:["\u53c2\u8003",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster plotter --help"}),"\u4ee5\u4e86\u89e3\u53c2\u6570\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u89e3\u91ca\u3002"]})]})]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"\u519c\u6c11(\u7ba1\u7406\u519c\u573a\u3001\u5ba1\u8ba1\u548c\u68c0\u7d22\u7ed8\u5236\u8fc7\u7684\u5757\u3002\u5411\u7ed8\u56fe\u5668\u8bf7\u6c42\u7ed8\u5236\u6247\u533a)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})}),(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": \u4f60\u7684NATS\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<reward_address>"}),": \u4f60\u83b7\u53d6\u7684\u5956\u52b1\u5c06\u8981\u53d1\u9001\u5230\u7684\u5956\u52b1\u5730\u5740\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/path/to/farm"})," \u548c ",(0,s.jsx)(n.code,{children:"<size>"}),": \u5b58\u50a8\u4f60\u7684\u6570\u636e\u5757\u7684\u8def\u5f84\u548c\u5927\u5c0f\u3002\u4f60\u53ef\u4ee5\u5411\u4f60\u7684\u519c\u7530\u6dfb\u52a0\u591a\u5757\u5730\u5757\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"path=/path/to/farm1,size=<size> \\\npath=/path/to/farm2,size=<size>\n"})}),"\n"]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u901a\u7528\u53c2\u6570"}),(0,s.jsxs)(n.p,{children:["\u8bf7\u53c2\u9605",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster farmer --help"})," \u4ee5\u4e86\u89e3\u6bcf\u4e2a\u9009\u9879\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u89e3\u91ca\u3002"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--create\n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u7ec4\u7ec4\u4ef6",children:"\u5206\u7ec4\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"\u60a8\u53ef\u4ee5\u5355\u72ec\u8fd0\u884c\u96c6\u7fa4\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5b83\u4eec\u7ec4\u5408\u8d77\u6765\u540c\u65f6\u8fd0\u884c\u3002"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n    --\n    cache \\\n        path=/path/to/cache,size=<size>\n    --\n    plotter\n    --\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u8fdb\u9636",children:"\u8fdb\u9636"}),"\n",(0,s.jsx)(n.h3,{id:"nats-\u96c6\u7fa4",children:"NATS \u96c6\u7fa4"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"\u5c31\u50cf\u8015\u79cd\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u7ec4\u4ef6\u4e00\u6837\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5197\u4f59 NATS \u670d\u52a1\u5668\u3002\u8fd9\u6837\u505a\uff0c\u9700\u8981\u4e00\u4e9b\u989d\u5916\u6b65\u9aa4\uff0c\u5373\u5728nats\u81ea\u5df1\u7684\u96c6\u7fa4\u4e2d\u914d\u7f6e\u8fd9\u4e9b NATS \u670d\u52a1\u5668\u3002"}),(0,s.jsxs)(n.p,{children:["\u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/running-a-nats-service/configuration/clustering",children:"NATS.io\u96c6\u7fa4\u6307\u5357"})," \u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"]}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.mermaid,{value:"flowchart\n    A[Farming Cluster Components] <--\x3e B((NATS Server 1))\n    A[Farming Cluster Components] <--\x3e C((NATS Server 2))"})}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer cluster \\\n    controller \\\n        --nats-server=nats://<nats_ip_1>:4222 \\\n        --nats-server=nats://<nats_ip_2>:4222 \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>        \n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u591a\u7ec4\u4ef6",children:"\u591a\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"\u4ee5\u4e0b\u6f14\u793a\u5982\u4f55\u5728\u4e00\u4e2a Farming \u96c6\u7fa4\u4e2d\u8fd0\u884c\u591a\u4e2a\u7ec4\u4ef6\uff1a(1) NATS \u670d\u52a1\u5668\u3001(2) \u63a7\u5236\u5668\u3001(2) \u7f13\u5b58\u3001(2) \u7ed8\u56fe\u4eea\u548c (3) Farmers\u3002"}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.mermaid,{value:"flowchart\nNATS((NATS Server))\nController1(Controller 1)\nController2(Controller 2)\nCache1(Cache 1)\nCache2(Cache 2)\nPlotter1(Plotter 1)\nPlotter2(Plotter 2)\nFarmer1(Farmer 1)\nFarmer2(Farmer 2)\nFarmer3(Farmer 3)\n\nController1  <--\x3e  NATS\nController2  <--\x3e  NATS\n\nCache1  <--\x3e  NATS\nCache2  <--\x3e  NATS\n\nPlotter1  <--\x3e  NATS\nPlotter2  <--\x3e  NATS\n\nFarmer1 <--\x3e  NATS\nFarmer2 <--\x3e  NATS\nFarmer3 <--\x3e  NATS\n"})}),(0,s.jsx)(n.admonition,{title:"\u591a\u4e2a\u7f13\u5b58\u7ec4",type:"caution",children:(0,s.jsxs)(n.p,{children:["\u5fc5\u987b\u4e3a\u6bcf\u4e2a\u63a7\u5236\u5668\u548c\u7f13\u5b58\u7ec4\u4ef6\u5206\u914d\u4e00\u4e2a\u552f\u4e00\u7684\u7f13\u5b58\u7ec4\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"--cache-group <group_name>"})," \u6307\u5b9a\u4e00\u4e2a\u6570\u5b57\u5b57\u6bcd\u7ec4\u5408\u7684\u7f13\u5b58\u7ec4\u540d\u5b57\u6765\u5b8c\u6210\u3002"]})}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u793a\u4f8b"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Controller #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --cache-group <group_1>\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Controller #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --cache-group <group_2>\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Cache #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    cache \\\n        --cache-group <group_1> \\\n        path=/path/to/cache,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Cache #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    cache \\\n        --cache-group <group_2> \\\n        path=/path/to/cache,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Plotter #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    plotter\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Plotter #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    plotter\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Farmer #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Farmer #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Farmer #3"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const a={},c=s.createContext(a);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);