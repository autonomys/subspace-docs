"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4941],{4214:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=n(4848),o=n(8453);const t={title:"Grafana Dashboard",sidebar_position:3,description:"How to configure the Grafana dashboard for an Autonomys Network node",keywords:["node","farmer","monitoring","grafana","prometheus"]},i="Grafana Dashboard",s={id:"farming-&-staking/farming/additional-guides/grafana-dashboard",title:"Grafana Dashboard",description:"How to configure the Grafana dashboard for an Autonomys Network node",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/grafana-dashboard.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/grafana-dashboard",permalink:"/tr/docs/farming-&-staking/farming/additional-guides/grafana-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/grafana-dashboard.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Grafana Dashboard",sidebar_position:3,description:"How to configure the Grafana dashboard for an Autonomys Network node",keywords:["node","farmer","monitoring","grafana","prometheus"]},sidebar:"tutorialSidebar",previous:{title:"Port Forwarding & Firewall",permalink:"/tr/docs/farming-&-staking/farming/additional-guides/port-config"},next:{title:"Verified Farmer Discord Role",permalink:"/tr/docs/farming-&-staking/farming/additional-guides/verify-farmer"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable metrics",id:"enable-metrics",level:2},{value:"Configure Prometheus targets",id:"configure-prometheus-targets",level:2},{value:"Configure Grafana",id:"configure-grafana",level:2},{value:"Import Grafana dashboard",id:"import-grafana-dashboard",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"grafana-dashboard",children:"Grafana Dashboard"})}),"\n",(0,r.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(a.p,{children:["First install ",(0,r.jsx)(a.a,{href:"https://grafana.com/",children:"Grafana"})," and ",(0,r.jsx)(a.a,{href:"https://prometheus.io/",children:"Prometheus"})," on your machine."]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["You can also use ",(0,r.jsx)(a.a,{href:"https://grafana.com/products/cloud/",children:"Grafana Cloud"})," instead of installing it locally."]})}),"\n",(0,r.jsx)(a.h2,{id:"enable-metrics",children:"Enable metrics"}),"\n",(0,r.jsx)(a.p,{children:"To enable metrics, you'll have to modify the CLI arguments of your node and farmer by adding the Prometheus option:"}),"\n",(0,r.jsxs)(a.p,{children:["for a node:\n",(0,r.jsx)(a.code,{children:"--prometheus-listen-on 127.0.0.1:9080"})]}),"\n",(0,r.jsxs)(a.p,{children:["for a farmer:\n",(0,r.jsx)(a.code,{children:"--prometheus-listen-on 127.0.0.1:9081"})]}),"\n",(0,r.jsxs)(a.p,{children:["To apply the changes, it's necessary to restart your node and farmer. You should then have the capability to reach the metrics at ",(0,r.jsx)(a.code,{children:"http://localhost:9080"})," and ",(0,r.jsx)(a.code,{children:"http://localhost:9081"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"configure-prometheus-targets",children:"Configure Prometheus targets"}),"\n",(0,r.jsxs)(a.p,{children:["Locate the ",(0,r.jsx)(a.code,{children:"prometheus.yml"})," file and add the following job entry under the ",(0,r.jsx)(a.code,{children:"scrape_configs"})," section:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'- job_name: "subspace"\n  static_configs:\n    - targets: ["localhost:9080"]\n      labels:\n        group: \'node\'\n    - targets: ["localhost:9081"]\n      labels:\n        group: \'farmer\'\n'})}),"\n",(0,r.jsxs)(a.p,{children:["On Linux machines, you can typically find the ",(0,r.jsx)(a.code,{children:"prometheus.yml"})," file at the following path: ",(0,r.jsx)(a.code,{children:"/etc/prometheus/prometheus.yml"})]}),"\n",(0,r.jsx)(a.p,{children:"Restart Prometheus with the new configuration."}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Prometheus can reload its configuration without restarting by using the SIGHUP signal. If you're running on Linux this can be performed by using ",(0,r.jsx)(a.code,{children:"kill -s SIGHUP <PID>"}),", replacing ",(0,r.jsx)(a.code,{children:"<PID>"})," with your Prometheus process ID."]})}),"\n",(0,r.jsx)(a.h2,{id:"configure-grafana",children:"Configure Grafana"}),"\n",(0,r.jsxs)(a.p,{children:["By default, Grafana usually runs on port 3000. You can access Grafana by navigating to the following URL: ",(0,r.jsx)(a.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["The default username and password is ",(0,r.jsx)(a.code,{children:"admin"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Add your Prometheus Data Source:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"grafana-config.png",src:n(3626).A+"",width:"1588",height:"796"})}),"\n",(0,r.jsxs)(a.p,{children:["Click ",(0,r.jsx)(a.code,{children:"Save & test"}),' to test the configuration, if everything is alright you\'ll see the green message "Data source is working".']}),"\n",(0,r.jsx)(a.h2,{id:"import-grafana-dashboard",children:"Import Grafana dashboard"}),"\n",(0,r.jsxs)(a.p,{children:["Copy and paste the ",(0,r.jsx)(a.a,{href:"https://grafana.com/grafana/dashboards/20433",children:"Grafana Dashboard ID"})," ",(0,r.jsx)(a.code,{children:"20433"})," and click ",(0,r.jsx)(a.code,{children:"Load"})," to complete importing:"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"grafana-import.png",src:n(483).A+"",width:"653",height:"378"})}),"\n",(0,r.jsxs)(a.p,{children:["Select your ",(0,r.jsx)(a.code,{children:"Prometheus"})," as Data Source and click ",(0,r.jsx)(a.code,{children:"Import"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"At this point, you should be able to monitor your node."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"grafana-dashboard.png",src:n(3118).A+"",width:"1280",height:"946"})})]})}function l(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3626:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/grafana-config-64e83b81131616df80bf6b8a7a173653.png"},3118:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/grafana-dashboard-8d8c739cb2891551b27a3385f2097543.png"},483:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/grafana-import-a9250f2641112edbaad52e57032dbd46.png"},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var r=n(6540);const o={},t=r.createContext(o);function i(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);