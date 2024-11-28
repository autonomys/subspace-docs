"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6528],{52013:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=s(74848),l=s(28453);s(11470),s(19365),s(28774),s(65648);const i={title:"\u5b89\u5168\u548c\u4fdd\u969c",sidebar_position:2,description:"\u4e00\u822c\u5b89\u5168\u63aa\u65bd\u3002 \u7f51\u7edc\u653b\u51fb\u548c\u6b3a\u8bc8\u4fdd\u62a4\u3002 \u670d\u52a1\u5668\u4fdd\u62a4\u3002",keywords:["\u5b89\u5168","\u94b1\u5305","\u5bc6\u7801","SSH","\u670d\u52a1\u5668","\u4fdd\u62a4","\u6b3a\u8bc8\u884c\u4e3a"]},c=void 0,t={id:"learn/security",title:"\u5b89\u5168\u548c\u4fdd\u969c",description:"\u4e00\u822c\u5b89\u5168\u63aa\u65bd\u3002 \u7f51\u7edc\u653b\u51fb\u548c\u6b3a\u8bc8\u4fdd\u62a4\u3002 \u670d\u52a1\u5668\u4fdd\u62a4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/security.md",sourceDirName:"learn",slug:"/learn/security",permalink:"/zh/learn/security",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/learn/security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u5168\u548c\u4fdd\u969c",sidebar_position:2,description:"\u4e00\u822c\u5b89\u5168\u63aa\u65bd\u3002 \u7f51\u7edc\u653b\u51fb\u548c\u6b3a\u8bc8\u4fdd\u62a4\u3002 \u670d\u52a1\u5668\u4fdd\u62a4\u3002",keywords:["\u5b89\u5168","\u94b1\u5305","\u5bc6\u7801","SSH","\u670d\u52a1\u5668","\u4fdd\u62a4","\u6b3a\u8bc8\u884c\u4e3a"]},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/zh/learn/intro"},next:{title:"Autonomys \u7814\u7a76\u9662",permalink:"/zh/learn/academy"}},a={},d=[{value:"\u94b1\u5305\u5b89\u5168",id:"\u94b1\u5305\u5b89\u5168",level:2},{value:"\u793e\u533a\u5b89\u5168",id:"\u793e\u533a\u5b89\u5168",level:2},{value:"\u670d\u52a1\u5668\u5b89\u5168",id:"\u670d\u52a1\u5668\u5b89\u5168",level:2},{value:"SSH RSA\u5bc6\u94a5\u5b89\u5168\u8eab\u4efd\u9a8c\u8bc1",id:"ssh-rsa\u5bc6\u94a5\u5b89\u5168\u8eab\u4efd\u9a8c\u8bc1",level:3},{value:"\u521b\u5efa RSA \u5bc6\u94a5\u5bf9",id:"\u521b\u5efa-rsa-\u5bc6\u94a5\u5bf9",level:3},{value:"\u8981\u5141\u8bb8\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u8fdb\u884cPublicKey \u8eab\u4efd\u9a8c\u8bc1, \u4ee5\u8d85\u7ea7\u7528\u6237\u7684\u8eab\u4efd\u6267\u884c:",id:"\u8981\u5141\u8bb8\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u8fdb\u884cpublickey-\u8eab\u4efd\u9a8c\u8bc1-\u4ee5\u8d85\u7ea7\u7528\u6237\u7684\u8eab\u4efd\u6267\u884c",level:4},{value:"\u5728\u5bb6\u7528\u7535\u8111\u4e0a\u521b\u5efa RSA \u5bc6\u94a5\uff1a",id:"\u5728\u5bb6\u7528\u7535\u8111\u4e0a\u521b\u5efa-rsa-\u5bc6\u94a5",level:4},{value:"\u5c06 RSA \u5bc6\u94a5\u4f20\u8f93\u5230\u670d\u52a1\u5668\uff1a",id:"\u5c06-rsa-\u5bc6\u94a5\u4f20\u8f93\u5230\u670d\u52a1\u5668",level:4},{value:"\u5c06RSA\u516c\u94a5\u4f20\u8f93\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u5176\u5b83\u65b9\u5f0f\uff1a",id:"\u5c06rsa\u516c\u94a5\u4f20\u8f93\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u5176\u5b83\u65b9\u5f0f",level:4},{value:"\u6d4b\u8bd5\u5b89\u5168\u8fde\u63a5",id:"\u6d4b\u8bd5\u5b89\u5168\u8fde\u63a5",level:3},{value:"\u4f7f\u7528\u522b\u540d\u7b80\u5316SSH\u8fde\u63a5\u7ba1\u7406",id:"\u4f7f\u7528\u522b\u540d\u7b80\u5316ssh\u8fde\u63a5\u7ba1\u7406",level:3},{value:"\u66ff\u6362 SSH \u7aef\u53e3",id:"\u66ff\u6362-ssh-\u7aef\u53e3",level:3},{value:"\u914d\u7f6e SSHD \u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u5efa\u8bae",id:"\u914d\u7f6e-sshd-\u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u5efa\u8bae",level:3},{value:"\u4f5c\u4e3a\u5b89\u5168\u63aa\u65bd, \u8c08\u8c08\u5206\u533a\u3002",id:"\u4f5c\u4e3a\u5b89\u5168\u63aa\u65bd-\u8c08\u8c08\u5206\u533a",level:2},{value:"\u5347\u7ea7\u4e2d...",id:"\u5347\u7ea7\u4e2d",level:2},{value:"\u8bbf\u95ee\u7248\u672c\u8bf4\u660e\uff1a",id:"\u8bbf\u95ee\u7248\u672c\u8bf4\u660e",level:3},{value:"UFW",id:"ufw",level:2}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8fdb\u5165\u6570\u5b57\u4e16\u754c\u5e76\u53c2\u4e0e\u52a0\u5bc6\u9879\u76ee\u7684\u5192\u9669\u53ef\u80fd\u662f\u4ee4\u4eba\u5174\u594b\u7684\uff0c\u4f46\u9075\u5faa\u6700\u4f73\u5b89\u5168\u5b9e\u8df5\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002 \u4ee5\u4e0b\u662f\u5173\u4e8e\u5b89\u5168\u4fdd\u969c\u7684\u4e00\u822c\u6307\u5357\uff0c\u5305\u62ec\u786e\u4fdd\u670d\u52a1\u5668\u548c\u5bb6\u5ead\u4e2a\u4eba\u7535\u8111\u5b89\u5168\u7684\u57fa\u672c\u63aa\u65bd\u3002 \u4f60\u9075\u5b88\u8fd9\u4e9b\u505a\u6cd5\u6709\u52a9\u4e8eAutonomys\u7f51\u7edc\u7684\u7a33\u5b9a\uff0c\u5f53\u7136\u8fd8\u6709\u52a9\u4e8e\u793e\u533a\u52a0\u5bc6\u8d44\u4ea7\u7684\u5b89\u5168\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5b89\u5fc3\u4eab\u53d7 Autonomys \u4e4b\u65c5\uff01"}),"\n",(0,r.jsx)(n.h2,{id:"\u94b1\u5305\u5b89\u5168",children:"\u94b1\u5305\u5b89\u5168"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u786e\u4fdd\u60a8\u7684\u5bc6\u7801\u8db3\u591f\u957f\uff0c\u4f7f\u7528\u5927\u5199\u548c\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u7279\u6b8a\u5b57\u7b26\u7684\u7ec4\u5408\u3002 11\u4e2a\u5b57\u7b26\u7684\u5bc6\u7801\u901a\u5e38\u4f7f\u5f97\u66b4\u529b\u653b\u51fb\u51e0\u4e4e\u4e0d\u53ef\u80fd \u3002 \u4f5c\u4e3a\u53c2\u8003\uff0c\u8bf7\u67e5\u770b\u8fd9\u4e2a ",(0,r.jsx)(n.a,{href:"https://www.techrepublic.com/wp-content/uploads/2022/03/tr8423-Figure-A-How-an-8-character-password-could-be-cracked-in-just-a-few-minutes-770x404.jpg",children:"\u5bc6\u7801\u66b4\u529b\u7834\u89e3\u6b21\u6570\u8bf4\u660e\u8868"}),"\u3002 \u7136\u800c\uff0c\u5355\u9760\u5f3a\u5bc6\u7801\u4e0d\u8db3\u4ee5\u63d0\u4f9b\u5b8c\u6574\u7684\u4fdd\u62a4\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u907f\u514d\u4f7f\u7528\u901a\u7528\u6216\u6613\u4e8e\u731c\u6d4b\u7684\u5355\u8bcd\u6216\u5b57\u6bcd\u7ec4\u5408\u3002 \u4ee5\u53ca\u60a8\u5728\u7ebf\u6570\u636e\u7684\u4e00\u90e8\u5206\uff0c\u6216\u91cd\u65b0\u4f7f\u7528\u60a8\u73b0\u6709\u7684\u4efb\u4f55\u5bc6\u7801\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f31\u5bc6\u7801\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"S0methin9C00l\uff01\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f3a\u5bc6\u7801\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"^p$O_~a!4h{G'9C*\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bf7\u8003\u8651\u4f7f\u7528\u5bc6\u7801\u7ba1\u7406\u5668\u6765\u751f\u6210\u590d\u6742\u7684\u5bc6\u7801\u5e76\u5b89\u5168\u5730\u5b58\u50a8\u5b83\u4eec\u3002 \u6709\u5f88\u591a\u53ef\u7528\u7684\u5bc6\u7801\u7ba1\u7406\u5668\u3002 \u786e\u4fdd\u60a8\u9009\u62e9\u7684\u5bc6\u7801\u7ba1\u7406\u5668\u4ee5\u52a0\u5bc6\u5f62\u5f0f\u5b58\u50a8\u6570\u636e\uff0c\u62e5\u6709\u5f3a\u5927\u7684\u5bc6\u7801\u751f\u6210\u5668\uff0c\u597d\u8bc4\u5982\u6f6e\uff0c\u5e76\u6709\u6301\u7eed\u66f4\u65b0\u7684\u5386\u53f2\u3002 \u4f8b\u5982\uff0c\u4e00\u4e9b\u88ab\u5e7f\u6cdb\u8ba4\u53ef\u7684\u9009\u62e9\u5305\u62ecKeePass\u3001Bitwarden\u30011Password\u3001LastPass\u3001Dashlane\u548cKeeper\u3002\n\u7136\u800c\uff0c\u5728\u505a\u51fa\u51b3\u5b9a\u4e4b\u524d\uff0c\u8fdb\u884c\u81ea\u5df1\u7684\u7814\u7a76\u548c\u53c2\u8003\u8bc4\u7ea7\u81f3\u5173\u91cd\u8981\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c3d\u53ef\u80fd\u542f\u7528 2FA(\u53cc\u56e0\u7d20\u8eab\u4efd\u9a8c\u8bc1)\u6765\u63d0\u9ad8\u5e10\u6237\u7684\u5b89\u5168\u6027\u3002 \u8fd9\u79cd\u989d\u5916\u7684\u4fdd\u62a4\u5c42\u9700\u8981\u7b2c\u4e8c\u4e2a\u9a8c\u8bc1\u6b65\u9aa4\uff0c\u4f8b\u5982\u9664\u4e86\u5bc6\u7801\u5916\uff0c\u8fd8\u9700\u8981\u624b\u673a\u5e94\u7528\u7a0b\u5e8f\u6216\u786c\u4ef6\u4ee4\u724c\u7684\u4e00\u6b21\u6027\u5bc6\u7801\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0d\u8981\u5206\u4eab\u60a8\u7684 12 \u5b57\u52a9\u8bb0\u8bcd\u6216\u79c1\u94a5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u786c\u4ef6\u94b1\u5305\u662f\u5b58\u50a8\u79c1\u94a5\u6700\u5b89\u5168\u7684\u65b9\u5f0f\u3002 \u4e0e\u7ebf\u4e0a\u4ea4\u6613\u6240\u548c\u94b1\u5305\u4e0d\u540c\u7684\u662f\uff0c\u786c\u4ef6\u94b1\u5305\u4f1a\u5c06\u5bc6\u94a5\u79bb\u7ebf\u5b58\u50a8\uff0c\u5e76\u9632\u6b62\u6f5c\u5728\u7684\u6076\u610f\u8f6f\u4ef6\u6216\u653b\u51fb\u4f01\u56fe\u3002\n\u6700\u6d41\u884c\u7684\u7684\u786c\u4ef6\u94b1\u5305\u662f ",(0,r.jsx)(n.a,{href:"https://www.ledger.com/",children:"Ledger"})," \u548c ",(0,r.jsx)(n.a,{href:"https://trezor.io/",children:"Trezor"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u79bb\u7ebf\u5b89\u5168\u5b58\u50a8\u6216\u52a0\u5bc6\u4e91\u5b58\u50a8\u5907\u4efd\u60a8\u7684\u94b1\u5305\u3002 \u8fd9\u53ef\u4ee5\u4fdd\u8bc1\u60a8\u5728\u8bbe\u5907\u4e22\u5931\u3001\u635f\u574f\u6216\u88ab\u76d7\u65f6\u627e\u56de\u8d44\u91d1\u3002 \u6709\u8bb8\u591a\u52a0\u5bc6\u4e91\u5b58\u50a8\u670d\u52a1\u53ef\u4f9b\u4f7f\u7528\uff0c\u4f8b\u5982 Tresorit\u3001pCloud\u3001Sync.com\u3001SpiderOak \u548c Mega(\u6392\u5e8f\u4e0d\u5206\u5148\u540e)\u3002 \u4e0d\u8fc7\uff0c\u8bf7\u52a1\u5fc5\u8fdb\u884c\u81ea\u5df1\u7684\u7814\u7a76\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4fdd\u6301\u6240\u6709\u8f6f\u4ef6\u6700\u65b0\u7248\u672c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bf7\u8c28\u614e\u4f7f\u7528\u516c\u5171 Wi-Fi\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793e\u533a\u5b89\u5168",children:"\u793e\u533a\u5b89\u5168"}),"\n",(0,r.jsx)(n.admonition,{title:"\u8bf7\u8bb0\u4f4f",type:"note",children:(0,r.jsx)(n.p,{children:"Autonomys \u56e2\u961f\u6210\u5458\u6c38\u8fdc\u4e0d\u4f1a\u5411\u60a8\u53d1\u8d77\u76f4\u63a5\u6d88\u606f\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u6536\u5230\u672a\u7ecf\u8bf7\u6c42\u7684\u6d88\u606f\uff0c\u6700\u597d\u5ffd\u7565\u5b83\uff0c\u963b\u6b62\u53d1\u4ef6\u4eba\uff0c\u5e76\u7acb\u5373\u5411\u6211\u4eec\u7684",(0,r.jsx)(n.a,{href:"https://discord.com/channels/864285291518361610/982023010405990400",children:"\u201cscam report \u8bc8\u9a97\u62a5\u544a\u201d\u9891\u9053"}),"\u62a5\u544a\u8be5\u4e8b\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8c28\u9632\u7f51\u7edc\u9493\u9c7c\u653b\u51fb\u3002 \u4e0d\u8981\u70b9\u51fb\u6211\u4eec\u8bba\u575b\u3001Discord\u6216Telegram\u4e2d\u7684\u94fe\u63a5\uff0c\u9664\u975e\u8fd9\u4e9b\u94fe\u63a5\u662f\u7531\u6211\u4eec\u56e2\u961f\u4e2d\u503c\u5f97\u4fe1\u8d56\u7684\u6210\u5458\u5206\u4eab\u7684\uff0c\u6bd4\u5982\u5927\u4f7f\u6216\u5de5\u4f5c\u4eba\u5458\u3002 \u9a97\u5b50\u4f1a\u5236\u4f5c\u6a21\u4eff\u6b63\u89c4\u7f51\u7ad9\u7684\u6b3a\u9a97\u6027\u94fe\u63a5\uff0c\u56e0\u6b64\u5728\u70b9\u51fb\u4efb\u4f55\u94fe\u63a5\u4e4b\u524d\uff0c\u5efa\u8bae\u4ed4\u7ec6\u68c0\u67e5\u6d88\u606f\u7684\u53d1\u9001\u8005\uff08\u5728\u6240\u6709\u63d0\u5230\u7684\u5e73\u53f0\u4e0a\uff09\u3002 \u4e00\u822c\u60c5\u51b5\u4e0b\u5e94\u8be5\u4fe1\u4efb\u9879\u76ee\u56e2\u961f\u6210\u5458\u3001\u5927\u4f7f\u6216\u58f0\u8a89\u597d\u7684\u519c\u6c11\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u670d\u52a1\u5668\u5b89\u5168",children:"\u670d\u52a1\u5668\u5b89\u5168"}),"\n",(0,r.jsx)(n.h3,{id:"ssh-rsa\u5bc6\u94a5\u5b89\u5168\u8eab\u4efd\u9a8c\u8bc1",children:"SSH RSA\u5bc6\u94a5\u5b89\u5168\u8eab\u4efd\u9a8c\u8bc1"}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u6765\u4e86\u89e3\u4e00\u4e9b\u57fa\u672c\u77e5\u8bc6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"SSH \u662f\u4e00\u4e2a\u7f51\u7edc\u534f\u8bae\uff0c\u7528\u4e8e\u5b89\u5168\u8fdc\u7a0b\u8bbf\u95ee\u8ba1\u7b97\u673a\u7cfb\u7edf\u3001\u4e91\u7aef\u57fa\u7840\u8bbe\u65bd\u3001\u5b89\u5168\u6587\u4ef6\u4f20\u8f93(SFTP)\u548c\u96a7\u9053\u3002 \u8fd9\u662f\u7cfb\u7edf\u7ba1\u7406\u5458\u548c\u5f00\u53d1\u4eba\u5458\u7684\u57fa\u672c\u5de5\u5177\u3002 SSH \u4f7f\u7528 Diffie-Hellman \u7b97\u6cd5\u5b9e\u73b0\u5b89\u5168\u8fde\u63a5\uff0c\u5e76\u4f7f\u7528\u5bc6\u7801\u6216 SSH \u5bc6\u94a5\u5bf9\u7b49\u9a8c\u8bc1\u65b9\u6cd5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SSH \u8fde\u63a5\u5efa\u7acb"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u5ba2\u6237\u7aef\u53d1\u8d77 TCP \u8fde\u63a5\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u4ee5\u652f\u6301\u7684\u534f\u8bae\u7248\u672c\u548c\u516c\u5f00\u4e3b\u673a\u5bc6\u94a5\u505a\u51fa\u54cd\u5e94\u3002\n\u53cc\u65b9\u4f7f\u7528 Diffie-Hellman \u7b97\u6cd5\u534f\u5546\u4f1a\u8bdd\u5bc6\u94a5\uff0c\u4ee5\u786e\u4fdd\u901a\u4fe1\u5b89\u5168\u3002 \u6b64\u4f1a\u8bdd\u5bc6\u94a5\u4f1a\u52a0\u5bc6\u6574\u4e2a\u4f1a\u8bdd\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8bbe\u7f6e\u4f1a\u8bdd\u52a0\u5bc6\u540e\uff0c\u7528\u6237\u8ba4\u8bc1\u5c31\u5f00\u59cb\u4e86\u3002\n\u5bc6\u7801\u9a8c\u8bc1\u9700\u8981\u5b89\u5168\u5730\u4f20\u8f93\u7528\u6237\u7684\u8d26\u6237\u5bc6\u7801\u3002\nSSH \u5bc6\u94a5\u5bf9\u7531\u516c\u94a5\u548c\u79c1\u94a5\u7ec4\u6210\uff0c\u662f\u4e00\u79cd\u63a8\u8350\u7684\u8eab\u4efd\u9a8c\u8bc1\u66ff\u4ee3\u65b9\u6cd5\u3002 \u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u53d1\u9001\u5bc6\u94a5\u5bf9 ID\uff0c\u670d\u52a1\u5668\u4f1a\u68c0\u67e5\u662f\u5426\u6709\u5339\u914d\u7684\u516c\u94a5\u3002\n\u670d\u52a1\u5668\u7528\u516c\u94a5\u52a0\u5bc6\u4e00\u4e2a\u968f\u673a\u6570\uff0c\u7136\u540e\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u7528\u79c1\u94a5\u89e3\u5bc6\u3002\n\u5ba2\u6237\u7aef\u4f7f\u7528\u89e3\u5bc6\u540e\u7684\u6570\u5b57\u548c\u5171\u4eab\u4f1a\u8bdd\u5bc6\u94a5\u8ba1\u7b97 MD5 \u54c8\u5e0c\u503c\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u56de\u670d\u52a1\u5668\u8fdb\u884c\u9a8c\u8bc1\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RSA \u52a0\u5bc6"})," \u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 RSA \u4e2d\uff0c\u52a0\u5bc6\u548c\u89e3\u5bc6\u4f7f\u7528\u4e0d\u540c\u7684\u5bc6\u94a5\uff1a\u52a0\u5bc6\u5bc6\u94a5\u662f\u516c\u5f00\u7684\uff0c\u89e3\u5bc6\u5bc6\u94a5\u662f\u79c1\u6709\u7684\u3002 \u7528\u6237\u6839\u636e\u4e24\u4e2a\u5927\u8d28\u6570\u548c\u4e00\u4e2a\u8f85\u52a9\u503c\u521b\u5efa\u516c\u94a5\uff0c\u540c\u65f6\u5bf9\u8d28\u6570\u4fdd\u5bc6\u3002 \u4fe1\u606f\u53ef\u4ee5\u7528\u516c\u94a5\u52a0\u5bc6\uff0c\u4f46\u53ea\u6709\u77e5\u9053\u8d28\u6570\u7684\u4eba\u624d\u80fd\u89e3\u5bc6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"SSH \u548c RSA \u5171\u540c\u63d0\u4f9b\u5b89\u5168\u3001\u7ecf\u8ba4\u8bc1\u548c\u52a0\u5bc6\u7684\u8fde\u63a5\uff0c\u4ee5\u4fdd\u62a4\u654f\u611f\u4fe1\u606f\u3002 \u4e3a\u4e86\u589e\u5f3a\u5b89\u5168\u6027\uff0c\u867d\u7136\u53ef\u4ee5\u7528\u5bc6\u7801\u521b\u5efa\u4e00\u4e2a SSH \u5bc6\u94a5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa-rsa-\u5bc6\u94a5\u5bf9",children:"\u521b\u5efa RSA \u5bc6\u94a5\u5bf9"}),"\n",(0,r.jsx)(n.h4,{id:"\u8981\u5141\u8bb8\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u8fdb\u884cpublickey-\u8eab\u4efd\u9a8c\u8bc1-\u4ee5\u8d85\u7ea7\u7528\u6237\u7684\u8eab\u4efd\u6267\u884c",children:"\u8981\u5141\u8bb8\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u8fdb\u884cPublicKey \u8eab\u4efd\u9a8c\u8bc1, \u4ee5\u8d85\u7ea7\u7528\u6237\u7684\u8eab\u4efd\u6267\u884c:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-consol",children:"vi /etc/ssh/sshd_config\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"PubkeyAuthentication no --\x3e PubkeyAuthentication yes"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-consol",children:"systemctl restart ssh\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u5728\u5bb6\u7528\u7535\u8111\u4e0a\u521b\u5efa-rsa-\u5bc6\u94a5",children:"\u5728\u5bb6\u7528\u7535\u8111\u4e0a\u521b\u5efa RSA \u5bc6\u94a5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"ssh-keygen\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u4f60\u5c06\u5f97\u5230\u4e24\u4e2a\u5bc6\u94a5\uff1a"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$HOME/.ssh/id_rsa"}),"    \u4f60\u7684RSA\u79c1\u94a5\uff0c\u4fdd\u5b58\u5728\u672c\u5730\u7535\u8111\u4e0a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$HOME/.ssh/id_rsa.pub"})," \u60a8\u8981\u53d1\u9001\u5230\u670d\u52a1\u5668\u7684 RSA \u516c\u94a5\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u5c06-rsa-\u5bc6\u94a5\u4f20\u8f93\u5230\u670d\u52a1\u5668",children:"\u5c06 RSA \u5bc6\u94a5\u4f20\u8f93\u5230\u670d\u52a1\u5668\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-consol",children:"sudo ssh-copy-id -p 12345 user_name@server-ip-addres\n"})}),"\n",(0,r.jsx)(n.p,{children:'\u6b64\u5de5\u5177\u4e13\u95e8\u8bbe\u8ba1\u7528\u4e8e\u5c06 SSH \u5bc6\u94a5\u590d\u5236\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\n\u5b83\u80fd\u81ea\u52a8\u5904\u7406\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u5bc6\u94a5\u4f4d\u7f6e\u548c\u6743\u9650\uff0c\u4f7f\u64cd\u4f5c\u66f4\u52a0\u65b9\u4fbf\u3002\n\u5982\u679c\u60a8\u66f4\u6539\u4e86\u7aef\u53e3\uff0c\u8bf7\u4f7f\u7528 "-p" \u9009\u9879\u6765\u6307\u5b9a\u975e\u6807\u51c6\u7aef\u53e3\u3002'}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u4ee5\u524d\u521b\u5efa\u8fc7\u5bc6\u94a5\uff0c\u8bf7\u4e0d\u8981\u8986\u76d6\u5b83\uff01 \u56e0\u4e3a\u60a8\u5c06\u65e0\u6cd5\u4f7f\u7528\u4ee5\u524d\u7684\u5bc6\u94a5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002 \u4f46\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u653e\u5728\u5176\u4ed6\u5730\u65b9\uff0c\u7136\u540e\u518d\u751f\u6210\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u5c06rsa\u516c\u94a5\u4f20\u8f93\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u5176\u5b83\u65b9\u5f0f",children:"\u5c06RSA\u516c\u94a5\u4f20\u8f93\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u5176\u5b83\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5728\u4e4b\u524d\u521b\u5efa\u4e86\u5bc6\u94a5\u5e76\u5c06\u5176\u5b58\u653e\u5728\u5176\u4ed6\u5730\u65b9\uff0c \u60a8\u53ef\u4ee5\u4f7f\u7528rsync\u6307\u5b9a\u5bc6\u94a5\u8def\u5f84\u4ece\u4efb\u4f55\u5176\u4ed6\u5730\u65b9\u590d\u5236\u516c\u94a5\u5185\u5bb9\u5230",(0,r.jsx)(n.code,{children:"authorized_keys"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:'sudo rsync -e "ssh -p 12345" ~/.ssh/user2/id_rsa.pub USER@SERVER_IP:~/.ssh/authorized_keys\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-p"})," \u9009\u9879\u6307\u5b9a\u975e\u6807\u51c6\u7aef\u53e3"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u5c06\u5728\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a.ssh\u76ee\u5f55\uff08\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u5219\u8df3\u8fc7\uff09\uff0c\u5e76\u5c06\u5bc6\u94a5\u6dfb\u52a0\u5230",(0,r.jsx)(n.code,{children:"authorized_keys"}),"\u6587\u4ef6\u7684\u672b\u5c3e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:'cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u76ee\u5f55\u5df2\u5b58\u5728\uff0c",(0,r.jsx)(n.code,{children:"-p"})," \u9009\u9879\u4f1a\u8ba9\u5de5\u5177\u8df3\u8fc7\u9519\u8bef"]}),"\n",(0,r.jsxs)(n.p,{children:["\u624b\u52a8\u4f20\u8f93\u516c\u94a5\u6587\u4ef6\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684",(0,r.jsx)(n.code,{children:"authorized_keys"}),"\u6587\u4ef6\u4e2d\u3002\n\u60a8\u53ef\u4ee5\u6253\u5f00 ",(0,r.jsx)(n.code,{children:"id_rsa.pub key"})," \u5e76\u590d\u5236\u7c98\u8d34\u5b83\u7684\u5185\u5bb9\u5230 ",(0,r.jsx)(n.code,{children:"authorized_keys"})," \u6587\u4ef6\u7684\u672b\u5c3e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"echo public_key_string >> ~/.ssh/authorized_key\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u4f60\u6709 '~/.ssh' \u76ee\u5f55\u7684 700\u6743\u9650\u548c 'authorized_keys' \u7684600\u6743\u9650"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6d4b\u8bd5\u5b89\u5168\u8fde\u63a5",children:"\u6d4b\u8bd5\u5b89\u5168\u8fde\u63a5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"ssh username@your-server-ip-addr\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528\u522b\u540d\u7b80\u5316ssh\u8fde\u63a5\u7ba1\u7406",children:"\u4f7f\u7528\u522b\u540d\u7b80\u5316SSH\u8fde\u63a5\u7ba1\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u521b\u5efa\u522b\u540d\uff0c\u7ba1\u7406\u8fde\u63a5\u53ef\u4ee5\u66f4\u7b80\u5355\u548c\u6109\u5feb\uff01\n\u5728",(0,r.jsx)(n.code,{children:"~/.ssh"}),"\u76ee\u5f55\uff08\u5bc6\u94a5\u6240\u5728\u76ee\u5f55\uff09\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a \u201cconfig \u201d\u7684\u6587\u4ef6\uff0c\u53ea\u9700\u5728\u5176\u4e2d\u6dfb\u52a0\u4f60\u7684\u670d\u52a1\u5668\u6216\u540c\u4e00\u670d\u52a1\u5668\u7684\u5176\u4ed6\u7528\u6237\uff0c\u5982\u4e0b\u9762\u7684\u793a\u4f8b\u3002 \u60a8\u53ef\u4ee5\u968f\u610f\u6dfb\u52a0\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:'Host Farm                    # Any word can be used here as an alias (for ex. "autonomys" or "Farm")\nHostName 123.123.123.123     # Use you server\'s IP\nPort 12345                                 # your custom port\nUser username\t\t\t            # User for login (for a rescue system this must be root, change it later)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u7f29\u8fdb\u4e0d\u91cd\u8981\u3002\u4f7f\u75284\u4e2a\u7a7a\u683c\u7f29\u8fdb\u662f\u7528\u6765\u63d0\u9ad8\u53ef\u8bfb\u6027\u7684"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c1d\u8bd5\u4f7f\u7528\u7ec8\u7aef\u4e2d\u6700\u7b80\u5355\u7684\u8bed\u6cd5\u8fde\u63a5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"ssh subspace\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u7cfb\u7edf\u5c06\u8be2\u95ee\u4f60\u662f\u5426\u5141\u8bb8\u8fde\u63a5\u3002 \u56de\u590d\u4e3a'yes'."})}),"\n",(0,r.jsx)(n.h3,{id:"\u66ff\u6362-ssh-\u7aef\u53e3",children:"\u66ff\u6362 SSH \u7aef\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSSH (Secure Shell) \u76d1\u542c 22 \u7aef\u53e3 \u3002 \u8fd9\u5e7f\u4e3a\u4eba\u77e5\uff0c\u5e76\u4e14\u53ef\u4ee5\u6210\u4e3a\u81ea\u52a8\u5316\u653b\u51fb\u7684\u76ee\u6807\u3002 \u901a\u8fc7\u66f4\u6539 SSH \u7aef\u53e3\uff0c\u4f60\u4f1a\u4f7f\u653b\u51fb\u8005\u66f4\u96be\u731c\u6d4b SSH \u6b63\u5728\u76d1\u542c\u54ea\u4e2a\u7aef\u53e3\uff0c\u4ece\u800c\u964d\u4f4e\u81ea\u52a8\u653b\u51fb\u7684\u98ce\u9669\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u9996\u5148\uff0c\u8bf7\u786e\u4fdd\u60a8\u6ca1\u6709\u542f\u7528 UFW\u3002 \u5982\u679c\u4f60\u542f\u7528\u4e86\uff0c\u8bf7\u4e3a\u76ee\u6807\u7aef\u53e3\u6dfb\u52a0\u4e00\u6761\u89c4\u5219\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"sudo ufw allow 12345/tcp        #\u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u6307\u5b9a\u60a8\u7684\u7aef\u53e3\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u66f4\u6539\u7aef\u53e3"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"sudo vi /etc/ssh/sshd_config\n#Port 22 -> Port 12345 # \u6307\u5b9a\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 SSH \u7aef\u53e3\uff0c\u8303\u56f4\u4e3a 1025 \u81f3 65534\nsudo systemctl reload sshd # \u4f7f\u66f4\u6539\u751f\u6548\u3002\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u5bb6\u7528\u7535\u8111\u4e0a\u68c0\u67e5\u65b0\u7aef\u53e3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"ssh -p 12345 user@localhost # \u6307\u5b9a\u60a8\u7684\u7aef\u53e3\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u60a8\u53ef\u4ee5\u4f7f\u7528\u52a0\u5bc6\u8fde\u63a5\u5728\u975e\u6807\u51c6\u7aef\u53e3\u767b\u5f55\u5230\u60a8\u7684\u670d\u52a1\u5668\uff0c\u800c\u65e0\u9700\u8f93\u5165\u4efb\u4f55\u51ed\u636e\uff01"}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e-sshd-\u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u5efa\u8bae",children:"\u914d\u7f6e SSHD \u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u5efa\u8bae"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5root\u8eab\u4efd\uff0c\u7f16\u8f91 sshd_config\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-consol",children:"vi /etc/ssh/sshd_config\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5141\u8bb8\u516c\u94a5\u8eab\u4efd\u9a8c\u8bc1\uff1a",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"PubkeyAuthentication no --\x3e PubkeyAuthentication yes"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9650\u5236\u5bc6\u7801\u8bbf\u95ee\uff1a",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"PasswordAuthentication yes --\x3e PasswordAuthentication no"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7f29\u77ed\u8f93\u5165\u51ed\u8bc1\u7684\u65f6\u95f4\u7a97\u53e3\uff1a",(0,r.jsx)(n.br,{}),"\n","(\u5982\u679c\u9a8c\u8bc1\u8fc7\u7a0b\u672a\u5728\u6b64\u65f6\u95f4\u5185\u5b8c\u6210\uff0c\u670d\u52a1\u5668\u5c06\u7ec8\u6b62\u8fde\u63a5\uff09",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"LoginGraceTime 120"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9650\u5236 root \u767b\u5f55",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"PermitRootLogin yes --\x3e PermitRootLogin no"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6307\u5b9a\u5141\u8bb8\u901a\u8fc7SSH\u8fde\u63a5\u7684\u7528\u6237",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"AllowUsers user1 user2"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u65b0\u52a0\u8f7d\u5b88\u62a4\u8fdb\u7a0b\u4ee5\u4f7f\u66f4\u6539\u751f\u6548\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-consol",children:"systemctl reload sshd\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u91cd\u542f\u60a8\u7684\u7cfb\u7edf\u4ee5\u786e\u4fdd\u4e00\u5207\u90fd\u80fd\u6309\u9884\u671f\u8fd0\u884c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5b8c\u6574\u7684 SSH \u624b\u518c\uff1a",(0,r.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/sshd_config",children:"SSH Academy"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f5c\u4e3a\u5b89\u5168\u63aa\u65bd-\u8c08\u8c08\u5206\u533a",children:"\u4f5c\u4e3a\u5b89\u5168\u63aa\u65bd, \u8c08\u8c08\u5206\u533a\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f5c\u4e3a\u4e00\u9879\u5b89\u5168\u63aa\u65bd\uff0c\u503c\u5f97\u4e00\u63d0\u7684\u662f\u4e3a\u5173\u952e\u76ee\u5f55\u5206\u914d\u5355\u72ec\u5206\u533a\u7684\u505a\u6cd5\uff0c\u5982 /boot\u3001/var\u3001/tmp \u548c /home\uff08\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff09\u3002 \u8fd9\u6709\u52a9\u4e8e\u5206\u79bb\u7cfb\u7edf\u6587\u4ef6\u3001\u65e5\u5fd7\u3001\u4e34\u65f6\u6587\u4ef6\u548c\u7528\u6237\u6570\u636e\uff0c\u4ece\u800c\u63d0\u9ad8\u7cfb\u7edf\u7a33\u5b9a\u6027\u548c\u5b89\u5168\u3002 \u4f46\u8fd9\u91cc\u4e5f\u6709\u4e00\u4e9b\u4e0d\u5229\u56e0\u7d20\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u4e00\u4e2a\u5206\u533a\u7a7a\u95f4\u4e0d\u8db3\uff0c\u800c\u53e6\u4e00\u4e2a\u5206\u533a\u6709\u672a\u4f7f\u7528\u7684\u7a7a\u95f4\uff0c\u53ef\u80fd\u65e0\u6cd5\u8f7b\u677e\u91cd\u65b0\u5206\u914d\u78c1\u76d8\u7a7a\u95f4\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u522b\u76d1\u63a7\u548c\u7ef4\u62a4\u6bcf\u4e2a\u5206\u533a\uff0c\u5305\u62ec\u5907\u4efd\u3001\u6743\u9650"}),"\n",(0,r.jsx)(n.li,{children:"\u6709\u4e00\u4e2a\u72ec\u7acb\u7684 /tmp \u5206\u533a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u521b\u5efa\u548c\u5220\u9664\u4e34\u65f6\u6587\u4ef6\u65f6\u589e\u52a0\u78c1\u76d8 I/O"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c/home \u5206\u533a\u662f\u5355\u72ec\u7684\uff0c \u8fc1\u79fb\u5230\u65b0\u670d\u52a1\u5668\u6216\u5347\u7ea7\u64cd\u4f5c\u7cfb\u7edf\u53ef\u80fd\u9700\u8981\u91c7\u53d6\u989d\u5916\u6b65\u9aa4\uff0c\u4ee5\u786e\u4fdd\u7528\u6237\u6570\u636e\u548c\u914d\u7f6e\u7684\u6b63\u786e\u8fc1\u79fb"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u4e00\u4e2a\u5206\u533a\u53d1\u751f\u6545\u969c\u6216\u635f\u574f\uff0c\u4f7f\u7528\u72ec\u7acb\u5206\u533a\u4f1a\u589e\u52a0\u6570\u636e\u4e22\u5931\u7684\u98ce\u9669"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Autonomys \u4e2d\u7684\u5206\u533a\u5efa\u8bae\u5c06\u5728\u5de6\u4fa7\u6807\u7b7e\u83dc\u5355\u7684 \u201c\u5206\u533a\u548c\u6302\u8f7d\u6587\u4ef6\u7cfb\u7edf \u201d\u90e8\u5206\u4ecb\u7ecd\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5347\u7ea7\u4e2d",children:"\u5347\u7ea7\u4e2d..."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5347\u7ea7\u8f6f\u4ef6\u5305"})}),"\n",(0,r.jsx)(n.p,{children:"\u867d\u7136 Linux \u53d1\u884c\u7248\u4f1a\u5b9a\u671f\u53d1\u5e03\u5b89\u5168\u8865\u4e01\uff0c\u4ee5\u89e3\u51b3\u8f6f\u4ef6\u5305\u4e2d\u7684\u5df2\u77e5\u6f0f\u6d1e\uff0c\u4f46\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u6bcf\u4e00\u4e2a\u53ef\u7528\u7684\u66f4\u65b0\u5e76\u4e0d\u603b\u662f\u6709\u610f\u4e49\u7684\u3002 \u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\u53ef\u80fd\u4f1a\u5f15\u5165\u4e0d\u9700\u8981\u7684\u529f\u80fd\u6216\u66f4\u6539\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u751a\u81f3\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u4e0d\u7a33\u5b9a\u3002 \u5982\u679c\u60a8\u5df2\u7ecf\u81ea\u5b9a\u4e49\u6216\u4fee\u6539\u4e86\u60a8\u7684\u670d\u52a1\u5668\u7684\u914d\u7f6e\u6216\u8f6f\u4ef6\uff0c\u5347\u7ea7\u53ef\u80fd\u4f1a\u8986\u76d6\u8fd9\u4e9b\u66f4\u6539\u6216\u51b2\u7a81\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5fc5\u987b\u5728\u5168\u9762\u4e86\u89e3\u6bcf\u4e2a\u8f6f\u4ef6\u5305\u7684\u529f\u80fd\u548c\u67e5\u770b\u5176\u66f4\u65b0\u65e5\u5fd7\u7684\u57fa\u7840\u4e0a\u505a\u51fa\u5347\u7ea7\u51b3\u5b9a\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b\u7279\u5b9a\u5305\u7684\u66f4\u65b0\u65e5\u5fd7\uff1a",(0,r.jsx)(n.code,{children:"apt changelog <package_name>"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5347\u7ea7 Kernel"})}),"\n",(0,r.jsx)(n.p,{children:"\u867d\u7136\u5185\u6838\u66f4\u65b0\u65f6\u5e38\u51fa\u73b0\u9519\u8bef\u4fee\u590d\u548c\u5b89\u5168\u8865\u4e01\uff0c \u65b0\u7684\u5185\u6838\u7248\u672c\u53ef\u80fd\u4f1a\u5f15\u8d77\u65b0\u7684 bug \u6216\u517c\u5bb9\u6027\u95ee\u9898\u3002 \u4e0d\u662f\u6bcf\u4e2a\u5185\u6838\u66f4\u65b0\u90fd\u662f\u5fc5\u8981\u6216\u7d27\u8feb\u7684\u3002 \u67d0\u4e9b\u66f4\u65b0\u53ef\u80fd\u4f1a\u63d0\u4f9b\u6e10\u8fdb\u7684\u6539\u8fdb\u6216\u9644\u52a0\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u5bf9\u60a8\u7684\u7279\u5b9a\u4f7f\u7528\u60c5\u51b5\u6765\u8bf4\u53ef\u80fd\u5e76\u4e0d\u91cd\u8981\u3002 \u91cd\u8981\u7684\u662f\u5728\u51b3\u5b9a\u66f4\u65b0\u5185\u6838\u4e4b\u524d\u8bc4\u4f30\u6536\u76ca\u548c\u6f5c\u5728\u98ce\u9669\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5347\u7ea7\u53d1\u884c\u7248"})}),"\n",(0,r.jsx)(n.p,{children:"Pros:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bbf\u95ee\u65b0\u529f\u80fd"}),"\n",(0,r.jsx)(n.li,{children:"\u8f6f\u4ef6\u517c\u5bb9\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u5b89\u5168\u66f4\u65b0"}),"\n",(0,r.jsx)(n.li,{children:"\u957f\u671f\u652f\u6301 (LTS)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53ef\u80fd\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898"}),"\n",(0,r.jsx)(n.li,{children:"\u914d\u7f6e\u66f4\u6539"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u80fd\u6709\u65b0\u7684 bug (\u53ef\u4ee5\u901a\u8fc7\u964d\u7ea7\u9519\u8bef\u5305\u89e3\u51b3)\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5728\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u65e0\u8bba\u5728\u54ea\u91cc\u90fd\u6709\u5fc5\u8981\u9605\u8bfb\u66f4\u65b0\u65e5\u5fd7\uff0c\u4e86\u89e3\u9700\u8981\u4ec0\u4e48\u548c\u4e3a\u4ec0\u4e48\u9700\u8981\uff0c\u5e76\u5168\u9762\u8bc4\u4f30\u5347\u7ea7\u7684\u5fc5\u8981\u6027\u3002 \u5f53\u7136\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5728\u666e\u901a\uff08\u529e\u516c\u5ba4\uff09\u6761\u4ef6\u4e0b\uff0c\u4e00\u5207\u90fd\u5e94\u8be5\u662f\u6b63\u5e38\u7684\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8bbf\u95ee\u7248\u672c\u8bf4\u660e",children:"\u8bbf\u95ee\u7248\u672c\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ea\u9700\u5728",(0,r.jsx)(n.a,{href:"https://ubuntu.com/search?q=Ubuntu+22.04+Changelogs",children:"Ubuntu \u4e3b\u9875"}),"\u4e0a\u4f7f\u7528\u641c\u7d22\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"ufw",children:"UFW"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e UFW \u89c4\u5219\u7684\u6392\u5e8f\uff08\u201c\u62d2\u7edd \u201d\u89c4\u5219\u5e94\u5728\u524d\uff0c\u201c\u5141\u8bb8 \u201d\u89c4\u5219\u5728\u540e\uff09\uff0c\u65b0\u7684 \u201c\u5141\u8bb8 \u201d\u89c4\u5219\u53ef\u4ee5\u7b80\u5355\u5730\u6dfb\u52a0\u5230\u73b0\u6709\u89c4\u5219\u7684\u672b\u5c3e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"\u60a8\u73b0\u6709\u7684\u89c4\u5219\n...\n\nsudo ufw allow 30333 comment 'Node port'\nsudo ufw allow 30433 comment 'Node DSN port'\nsudo ufw allow 30533 comment 'Farmer port'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u653e\u5fc3\u5730\u7ee7\u7eed\u5b89\u88c5 Node \u548c Farmer\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>c});s(96540);var r=s(18215);const l={tabItem:"tabItem_Ymn6"};var i=s(74848);function c(e){let{children:n,hidden:s,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,c),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var r=s(96540),l=s(18215),i=s(23104),c=s(56347),t=s(205),a=s(57485),d=s(31682),o=s(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:l}}=e;return{value:n,label:s,attributes:r,default:l}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const l=(0,c.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,i=u(e),[c,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,h]=j({queryString:s,groupId:l}),[p,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,o.Dv)(s);return[l,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:l}),b=(()=>{const e=d??p;return x({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{b&&a(b)}),[b]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function f(e){let{className:n,block:s,selectedValue:r,selectValue:c,tabValues:t}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=a.indexOf(n),l=t[s].value;l!==r&&(d(n),c(l))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:o,...i,className:(0,l.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const c=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function S(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,g.jsx)(S,{...e,children:h(e.children)},String(n))}},65648:(e,n,s)=>{s.d(n,{A:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var r=s(96540);const l={},i=r.createContext(l);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);