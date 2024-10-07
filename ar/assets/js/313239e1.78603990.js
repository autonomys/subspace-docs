"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4626],{5786:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(4848),t=r(8453);const i={title:"Farming Cluster",sidebar_position:2,description:"How to run an Autonomys Network Farmer using the farming cluster",keywords:["Farmer","Farming","CLI","Cluster","Docker"]},o=void 0,c={id:"farming-&-staking/farming/advanced-cli/cli-farming-cluster",title:"Farming Cluster",description:"How to run an Autonomys Network Farmer using the farming cluster",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-farming-cluster.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-farming-cluster",permalink:"/ar/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Farming Cluster",sidebar_position:2,description:"How to run an Autonomys Network Farmer using the farming cluster",keywords:["Farmer","Farming","CLI","Cluster","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/ar/docs/farming-&-staking/farming/advanced-cli/cli-install"},next:{title:"Tips & Tricks",permalink:"/ar/docs/farming-&-staking/farming/advanced-cli/cli-tips"}},a={},l=[{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Core Messaging Technology: NATS.io",id:"core-messaging-technology-natsio",level:3},{value:"Component Configuration",id:"component-configuration",level:3},{value:"Controller",id:"controller",level:3},{value:"Cache",id:"cache",level:3},{value:"Farmer",id:"farmer",level:3},{value:"Plotter",id:"plotter",level:3},{value:"Running multiple components at the same time",id:"running-multiple-components-at-the-same-time",level:3},{value:"Remote Compute Possibilities",id:"remote-compute-possibilities",level:3},{value:"Advanced Options / Redundancy",id:"advanced-options--redundancy",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"farming-cluster",children:"Farming Cluster"}),"\n",(0,s.jsx)(n.p,{children:"The farming cluster is designed for larger-scale farmers, addressing various challenges associated with scaling up. Essentially, the cluster consists of four distinct components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Controller"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Cache"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Farmer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Plotter"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"benefits",children:"Benefits"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bandwidth Efficiency"}),": Centralized storage of the piece cache conserves bandwidth."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Remote Compute Capability"}),": Multiple PCs can contribute their CPU power for plotting (and eventually GPUs), without needing to store the plots locally."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Redundancy"}),": Running multiple computers for each process enhances redundancy."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Additional Space"}),": By moving the piece sync cache to a central location frees up roughly 1% of the SSD for larger plots."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"core-messaging-technology-natsio",children:"Core Messaging Technology: NATS.io"}),"\n",(0,s.jsxs)(n.p,{children:["At the core of this process is a third-party software called ",(0,s.jsx)(n.a,{href:"https://nats.io/",children:"NATS.io"}),", which is used for communication between farmer processes. The simplest way to install NATS.io is via Docker."]}),"\n",(0,s.jsx)(n.p,{children:"To start NATS, create a configuration file with the following content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"max_payload = 2MB\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Save this as ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"nats.config"})})," and start the NATS server with Docker:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker run \\\n    --name nats \\\n    --restart unless-stopped \\\n    --publish 4222:4222 \\\n    --volume ./nats.config:/nats.config:ro \\\n    nats -c /nats.config\n"})}),"\n",(0,s.jsx)(n.h3,{id:"component-configuration",children:"Component Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Each of the four components requires a few additional parameters. All need the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cluster"})})," specification, a URL to the NATS server, and the specific component being executed."]}),"\n",(0,s.jsx)(n.h3,{id:"controller",children:"Controller"}),"\n",(0,s.jsxs)(n.p,{children:["The controller should be the first component to run.  It connects to the node, so the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"node-rpc-url"})})," must be included."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<NODE_IP>:<NODE_PORT>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<NATS_IP>"})})," with your NATS server IP address, and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<NODE_IP>:<NODE_PORT>"})})," with your node\u2019s IP address and port. Specify the working directory with ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--base-path"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The controller logs farm connections, disconnections, and piece cache sync progress. Optional connection-related options include ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--in-connections"})}),", ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--out-connections"})}),", ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--pending-in-connections"})}),", and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--pending-out-connections"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,s.jsx)(n.p,{children:"Next, run the cache component. Although you can run multiple cache processes to distribute the load, only one is required."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    cache \\\n        path=/path/to/cache,size=SIZE\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<NATS_IP>"})})," with your NATS server IP address. Provide the cache file path with ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"path="})}),", and specify the cache size. While an SSD is recommended, a hard disk can also be used.  200 GB is a good size to use for cache based on the current state of Gemini 3h."]}),"\n",(0,s.jsx)(n.h3,{id:"farmer",children:"Farmer"}),"\n",(0,s.jsx)(n.p,{children:"Run the farmer component on each computer that will farm plots."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    farmer \\\n        --reward-address <REWARD_ADDRESS> \\\n        path=/path/to/farm,size=SIZE\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<NATS_IP>"})})," with your NATS server IP address and provide your reward address, farm paths, and sizes. Optional parameters include ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--sector-encoding-concurrency"})}),", ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--farming-thread-pool-size"})}),", ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--disable-farm-locking"})}),", and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--create"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"plotter",children:"Plotter"}),"\n",(0,s.jsx)(n.p,{children:"Finally, run the plotter component. At least one plotter is needed for plotting and replotting farms. It can be on the same computer as the farmer or on a separate machine."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    plotter\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<NATS_IP>"})})," with your NATS server IP address.  Optional parameters include many farmer options related to concurrency and cores/threads."]}),"\n",(0,s.jsx)(n.h3,{id:"running-multiple-components-at-the-same-time",children:"Running multiple components at the same time"}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to execute multiple components from one command line by separating them with ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    cache \\\n        path=/path/to/cache,size=SIZE\n    --\n    plotter\n"})}),"\n",(0,s.jsx)(n.h3,{id:"remote-compute-possibilities",children:"Remote Compute Possibilities"}),"\n",(0,s.jsx)(n.p,{children:"This setup allows for extensive remote compute capabilities. For instance, if a computer is suitable for farming but not for plotting, you can run the farmer on that computer and the plotter on one or more remote machines. This enables continuous plotting and replotting across multiple farms, ensuring plotters are utilized efficiently until all sectors are plotted and replotted."}),"\n",(0,s.jsx)(n.h3,{id:"advanced-options--redundancy",children:"Advanced Options / Redundancy"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to setup clustering with nats server, but that setup is beyond the scope of this document. If you have more than one nats server, you can specify multiple ones."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP#1>:4222 --nats-server nats://<NATS_IP#2>:4222\\\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can run multiple controller components, but each one needs to have it\u2019s distinct cache group."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    controller \\\n        --cache-group group1 \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<NODE_IP>:<NODE_PORT>\n"})}),"\n",(0,s.jsx)(n.p,{children:"You need to specify a cache group on the cache component that matches the one specified on the controller component."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    cache \\\n        --cache-group group1 \\\n        path=/path/to/cache,size=SIZE\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);