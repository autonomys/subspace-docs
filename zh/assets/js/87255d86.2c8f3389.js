"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5582],{13074:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(74848),s=n(28453);const i={title:"Grafana \u4eea\u8868\u76d8",sidebar_position:3,description:"\u5982\u4f55\u4e3a Autonomys \u7f51\u7edc\u8282\u70b9\u914d\u7f6e Grafana \u4eea\u8868\u76d8",slug:"/farming/guides/grafana-dashboard",keywords:["node","\u519c\u6c11","\u76d1\u63a7","grafana","prometheus"]},t="Grafana \u4eea\u8868\u76d8",d={id:"farming-&-staking/farming/additional-guides/grafana-dashboard",title:"Grafana \u4eea\u8868\u76d8",description:"\u5982\u4f55\u4e3a Autonomys \u7f51\u7edc\u8282\u70b9\u914d\u7f6e Grafana \u4eea\u8868\u76d8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/grafana-dashboard.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming/guides/grafana-dashboard",permalink:"/zh/farming/guides/grafana-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/grafana-dashboard.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Grafana \u4eea\u8868\u76d8",sidebar_position:3,description:"\u5982\u4f55\u4e3a Autonomys \u7f51\u7edc\u8282\u70b9\u914d\u7f6e Grafana \u4eea\u8868\u76d8",slug:"/farming/guides/grafana-dashboard",keywords:["node","\u519c\u6c11","\u76d1\u63a7","grafana","prometheus"]},sidebar:"tutorialSidebar",previous:{title:"\u7aef\u53e3\u8f6c\u53d1\u548c\u9632\u706b\u5899",permalink:"/zh/farming/guides/port-config"},next:{title:"Discord \u5df2\u9a8c\u8bc1\u519c\u6c11\u89d2\u8272",permalink:"/zh/farming/guides/verified-farmer"}},o={},c=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u542f\u7528\u6307\u6807",id:"\u542f\u7528\u6307\u6807",level:2},{value:"\u914d\u7f6e Prometheus \u76ee\u6807",id:"\u914d\u7f6e-prometheus-\u76ee\u6807",level:2},{value:"\u914d\u7f6e Grafana",id:"\u914d\u7f6e-grafana",level:2},{value:"\u5bfc\u5165 Grafana \u4eea\u8868\u677f",id:"\u5bfc\u5165-grafana-\u4eea\u8868\u677f",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"grafana-\u4eea\u8868\u76d8",children:"Grafana \u4eea\u8868\u76d8"})}),"\n",(0,r.jsx)(a.h2,{id:"\u5148\u51b3\u6761\u4ef6",children:"\u5148\u51b3\u6761\u4ef6"}),"\n",(0,r.jsxs)(a.p,{children:["\u9996\u5148\u5728\u60a8\u7684\u673a\u5668\u4e0a\u5b89\u88c5 ",(0,r.jsx)(a.a,{href:"https://grafana.com/",children:"Grafana"})," \u548c ",(0,r.jsx)(a.a,{href:"https://prometheus.io/",children:"Prometheus"}),"\u3002"]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["\u9664\u4e86\u672c\u5730\u5b89\u88c5\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(a.a,{href:"https://grafana.com/products/cloud/",children:"Grafana Cloud"})]})}),"\n",(0,r.jsx)(a.h2,{id:"\u542f\u7528\u6307\u6807",children:"\u542f\u7528\u6307\u6807"}),"\n",(0,r.jsx)(a.p,{children:"\u8981\u542f\u7528\u6307\u6807\uff0c\u60a8\u5fc5\u987b\u4fee\u6539\u8282\u70b9\u548c\u519c\u6c11\u7684\u547d\u4ee4\u884c\u53c2\u6570\u6dfb\u52a0 Prometheus \u9009\u9879"}),"\n",(0,r.jsxs)(a.p,{children:["\u9488\u5bf9\u8282\u70b9\uff1a\n",(0,r.jsx)(a.code,{children:"--prometheus-listen-on 127.0.0.1:9080"})]}),"\n",(0,r.jsxs)(a.p,{children:["\u9488\u5bf9\u519c\u6c11:\n",(0,r.jsx)(a.code,{children:"--prometheus-listen-on 127.0.0.1:9081"})]}),"\n",(0,r.jsxs)(a.p,{children:["\u8981\u5e94\u7528\u66f4\u6539\uff0c\u9700\u8981\u91cd\u542f\u8282\u70b9\u548c\u519c\u6c11\u3002 You should then have the capability to reach the metrics at ",(0,r.jsx)(a.code,{children:"http://localhost:9080/metrics"})," and ",(0,r.jsx)(a.code,{children:"http://localhost:9081/metrics"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"\u914d\u7f6e-prometheus-\u76ee\u6807",children:"\u914d\u7f6e Prometheus \u76ee\u6807"}),"\n",(0,r.jsxs)(a.p,{children:["\u627e\u5230",(0,r.jsx)(a.code,{children:"prometheus.yml"}),"\u6587\u4ef6\uff0c\u5e76\u5728",(0,r.jsx)(a.code,{children:"scrape_configs"}),"\u533a\u57df\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f5c\u4e1a\u9879\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'- job_name: "subspace"\n  static_configs:\n    - targets: ["localhost:9080"]\n      labels:\n        group: \'node\'\n    - targets: ["localhost:9081"]\n      labels:\n        group: \'farmer\'\n'})}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 Linux \u673a\u5668\u4e0a\uff0c\u4f60\u901a\u5e38\u53ef\u4ee5\u5728 ",(0,r.jsx)(a.code,{children:"/etc/prometheus/prometheus.yml"})," \u8def\u5f84\u4e0b\u627e\u5230",(0,r.jsx)(a.code,{children:"prometheus.yml"})," \u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(a.p,{children:"\u4f7f\u7528\u65b0\u914d\u7f6e\u91cd\u65b0\u542f\u52a8Prometheus\u3002"}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Prometheus \u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 SIGHUP \u4fe1\u53f7\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u800c\u4e0d\u9700\u8981\u91cd\u542f\u3002 \u5982\u679c\u60a8\u5728 Linux \u4e0a\u8fd0\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(a.code,{children:"kill -s SIGHUP <PID>"}),", \u4f7f\u7528\u60a8\u7684 Prometheus \u8fdb\u7a0b ID \u66ff\u6362",(0,r.jsx)(a.code,{children:"<PID>"}),"\u3002"]})}),"\n",(0,r.jsx)(a.h2,{id:"\u914d\u7f6e-grafana",children:"\u914d\u7f6e Grafana"}),"\n",(0,r.jsxs)(a.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cGrafana \u901a\u5e38\u8fd0\u884c\u57283000\u7aef\u53e3\u4e0a\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7f51\u5740\u8bbf\u95eeGrafana\uff1a ",(0,r.jsx)(a.code,{children:"http://localhost:3000"}),"\u3002"]}),"\n",(0,r.jsxs)(a.p,{children:["\u9ed8\u8ba4\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,r.jsx)(a.code,{children:"admin"}),"\u3002"]}),"\n",(0,r.jsx)(a.p,{children:"\u6dfb\u52a0\u60a8\u7684 Prometheus \u6570\u636e\u6e90\uff1a"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"grafana-config.png",src:n(83626).A+"",width:"1588",height:"796"})}),"\n",(0,r.jsx)(a.p,{children:"\u70b9\u51fb\u201c\u4fdd\u5b58\u5e76\u6d4b\u8bd5\u201d\u6765\u6d4b\u8bd5\u914d\u7f6e\uff0c\u5982\u679c\u4e00\u5207\u90fd\u6b63\u786e\uff0c\u60a8\u5c06\u770b\u5230\u7eff\u8272\u6d88\u606f\u201c\u6570\u636e\u6e90\u6b63\u5e38\u5de5\u4f5c\u201d\u3002"}),"\n",(0,r.jsx)(a.h2,{id:"\u5bfc\u5165-grafana-\u4eea\u8868\u677f",children:"\u5bfc\u5165 Grafana \u4eea\u8868\u677f"}),"\n",(0,r.jsxs)(a.p,{children:["\u590d\u5236\u5e76\u7c98\u8d34",(0,r.jsx)(a.a,{href:"https://grafana.com/grafana/dashboards/20433",children:"Grafana \u4eea\u8868\u76d8ID"})," ",(0,r.jsx)(a.code,{children:"20433"})," \u5e76\u70b9\u51fb",(0,r.jsx)(a.code,{children:"Load"})," \u5b8c\u6210\u5bfc\u5165\uff1a"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"grafana-import.png",src:n(70483).A+"",width:"653",height:"378"})}),"\n",(0,r.jsxs)(a.p,{children:["\u9009\u62e9\u60a8\u7684",(0,r.jsx)(a.code,{children:"Prometheus"}),"\u4f5c\u4e3a\u6570\u636e\u6e90\uff0c\u7136\u540e\u70b9\u51fb",(0,r.jsx)(a.code,{children:"\u5bfc\u5165"}),"\u3002"]}),"\n",(0,r.jsx)(a.p,{children:"\u6b64\u65f6\uff0c\u60a8\u5e94\u8be5\u80fd\u591f\u76d1\u63a7\u5230\u60a8\u7684\u8282\u70b9\u4e86\u3002"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"grafana-dashboard.png",src:n(83118).A+"",width:"1280",height:"946"})})]})}function l(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},83626:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/grafana-config-64e83b81131616df80bf6b8a7a173653.png"},83118:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/grafana-dashboard-8d8c739cb2891551b27a3385f2097543.png"},70483:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/grafana-import-a9250f2641112edbaad52e57032dbd46.png"},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function t(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);