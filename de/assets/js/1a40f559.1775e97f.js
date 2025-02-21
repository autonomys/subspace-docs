"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3536],{18357:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=r(74848),t=r(28453);const a={title:"Farming Cluster",sidebar_position:2,description:"How to Set Up and Configure a Farming Cluster",slug:"/farming/cli/cluster",keywords:["Farming Cluster","Farmer","Farming","CLI","Cluster","Docker"]},i=void 0,o={id:"farming-&-staking/farming/cli/cli-farming-cluster",title:"Farming Cluster",description:"How to Set Up and Configure a Farming Cluster",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/farming-&-staking/farming/cli/cli-farming-cluster.mdx",sourceDirName:"farming-&-staking/farming/cli",slug:"/farming/cli/cluster",permalink:"/de/farming/cli/cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/cli/cli-farming-cluster.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Farming Cluster",sidebar_position:2,description:"How to Set Up and Configure a Farming Cluster",slug:"/farming/cli/cluster",keywords:["Farming Cluster","Farmer","Farming","CLI","Cluster","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/de/farming/cli/install"},next:{title:"Tips & Tricks",permalink:"/de/farming/cli/tips"}},l={},c=[{value:"Networking Considerations",id:"networking-considerations",level:2},{value:"Key Benefits",id:"key-benefits",level:2},{value:"NATS",id:"nats",level:2},{value:"Component Configuration",id:"component-configuration",level:2},{value:"Grouping Components",id:"grouping-components",level:3},{value:"Advanced Topics",id:"advanced-topics",level:2},{value:"NATS Cluster",id:"nats-cluster",level:3},{value:"Multiple Components",id:"multiple-components",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Farming Cluster is designed for larger farmers, addressing the challenges of scaling effectively. It consists of four main components, all interconnected through a NATS Server."}),"\n",(0,s.jsx)(n.p,{children:"This setup enables powerful remote computing capabilities. For example, if a computer is ideal for farming but not for plotting, you can run the farming component on that machine while utilizing one or more remote machines for plotting. This ensures continuous plotting and replotting across multiple farms, optimizing the use of plotters until all sectors are fully plotted and replotted."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.mermaid,{value:"flowchart\nNATS((NATS Server))\nNATS  <--\x3e  Controller(Controller)\nNATS  <--\x3e  Cache(Cache)\nNATS  <--\x3e  Farmer(Farmer)\nNATS  <--\x3e  Plotter(Plotter)"})}),"\n",(0,s.jsx)(n.h2,{id:"networking-considerations",children:"Networking Considerations"}),"\n",(0,s.jsx)(n.p,{children:"Farming Cluster employs a modular architecture for operating a farm, where each component can function independently and can be scaled by running multiple instances of a component for added scalability and redundancy. As such, it is essential to ensure sufficient LAN bandwidth to facilitate efficient communication of this data transfer across your network between these components."}),"\n",(0,s.jsx)(n.admonition,{title:"Networking Requirements",type:"caution",children:(0,s.jsx)(n.p,{children:"A 1 Gbit network connection is likely insufficient for this traffic, especially when using GPU plotting resources or multiple plotters. In such cases, a 2.5 Gbit connection should be considered the minimum, with an upgrade to 10 Gbit or higher for larger clusters."})}),"\n",(0,s.jsx)(n.admonition,{title:"Bandwidth Optimization Suggestion",type:"info",children:(0,s.jsx)(n.p,{children:"You can reduce LAN bandwidth usage by running the NATS, Controller, Cache, and Plotter components on the same machine. This setup allows most data transfer to occur over the local loopback interface."})}),"\n",(0,s.jsx)(n.h2,{id:"key-benefits",children:"Key Benefits"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Remote Compute Capability"}),(0,s.jsx)(n.br,{}),"\n","Multiple PCs can contribute their CPU and GPU resources for plotting and replotting, without the need to store farm plots locally."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Redundancy"}),(0,s.jsx)(n.br,{}),"\n","Running multiple computers for each process increases redundancy and system resilience."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Bandwidth Efficiency"}),(0,s.jsx)(n.br,{}),"\n","Centralized storage of the piece cache helps conserve WAN bandwidth."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Additional Space"}),(0,s.jsx)(n.br,{}),"\n","Relocating the piece sync cache to a central location frees up an additional 1% of plot capacity for farming, compared to the Standalone Farmer."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nats",children:"NATS"}),"\n",(0,s.jsxs)(n.p,{children:["At the core of Farming Cluster is a third-party software called ",(0,s.jsx)(n.a,{href:"https://nats.io/",children:"NATS"}),", which is used for communication between the farming components."]}),"\n",(0,s.jsx)(n.p,{children:"The simplest way to install and run NATS is via Docker."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Set Up and Configure NATS"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create and save a ",(0,s.jsx)(n.code,{children:"nats.config"})," configuration file with the following:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="nats.conf"',children:"max_payload = 2MB\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Start NATS with Docker:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run \\\n    --name nats \\\n    --restart unless-stopped \\\n    --publish 4222:4222 \\\n    --volume /path/to/nats.config:/nats.config:ro \\\n    nats -c /nats.config\n"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"component-configuration",children:"Component Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Configuring Cluster Farming is similar to setting up the Standalone Farmer, but each component must be configured according to the cluster setup you want to create. Keep in mind that all components communicate with one another through the NATS server you configured earlier. Below are the essential parameters needed to establish a functional cluster."}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Controller (Manages node communication and orchestrates other components.)"}),(0,s.jsx)(n.p,{children:"The first component to start is the Controller. It connects to a single node, and you must specify the node's location on the network."}),(0,s.jsxs)(n.admonition,{title:"Proper Port Forwarding",type:"caution",children:[(0,s.jsxs)(n.p,{children:["For your cluster to be reachable, open and forward the default port ",(0,s.jsx)(n.code,{children:"30533"})," to the Controller. If you've changed the port or are using multiple controllers, set it with ",(0,s.jsx)(n.code,{children:"--listen-on /ip4/0.0.0.0/tcp/<port>"}),"."]}),(0,s.jsxs)(n.p,{children:["If you have an IPv6 address but no public IPv4 address, setting the listen port to with ",(0,s.jsx)(n.code,{children:"--listen-on /ip6/::/tcp/<port>"}),". to accept IPv6 connections is highly recommended."]}),(0,s.jsxs)(n.p,{children:["Refer to our guide on ",(0,s.jsx)(n.a,{href:"/farming/guides/port-config",children:"Port Forwarding"}),"."]})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n"})}),(0,s.jsx)(n.p,{children:"Replace the following placeholders:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": The IP address of your NATS server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/path/to/controller-dir"}),": The path where the controller's peer network details will be saved."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<node_ip>"})," and ",(0,s.jsx)(n.code,{children:"<rpc_port>"}),": Your node's IP address and RPC port."]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Common Parameters"}),(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster controller --help"})," for an explanation of each option and its default values."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--listen-on /ip4/0.0.0.0/tcp/<port>\n--listen-on /ip6/::1/tcp/<port>\n\n--cache-group\n--in-connections\n--out-connections\n--pending-in-connections\n--pending-out-connections\n"})})]})]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Cache (Downloads sector data from DSN peers and serves it to the plotter.)"}),(0,s.jsxs)(n.admonition,{title:"Cache Size",type:"caution",children:[(0,s.jsx)(n.p,{children:"The Cache stores the blockchain's Archive History. For optimal performance, the cache must be large enough to hold this data locally. If the data isn't available in the cache, plotting may slow down as it has to be fetched from peers over the DSN. Currently, we recommend a minimum of 200GiB."}),(0,s.jsxs)(n.p,{children:["The current Archive History Size can be found in the top cards on ",(0,s.jsx)(n.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"}),"."]})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    cache \\\n        path=/path/to/cache,size=<size>\n"})}),(0,s.jsx)(n.p,{children:"Replace the following placeholders:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": The IP address of your NATS server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/path/to/cache"})," and ",(0,s.jsx)(n.code,{children:"<size>"}),": The path and size for cache storage. Multiple caches are supported on a single Cache component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"path=/path/to/cache1,size=<size> \\\npath=/path/to/cache2,size=<size>\n"})}),"\n"]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Common Parameters"}),(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster cache --help"})," for an explanation of additional parameters and their default values."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--cache-group\n"})})]})]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Plotter (Generates and uploads plotted sectors, downloading pieces from cache as needed)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    plotter\n"})}),(0,s.jsx)(n.p,{children:"Replace the following placeholders:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": The IP address of your NATS server."]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Common Parameters"}),(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster plotter --help"})," for an explanation of parameters and their default values."]})]})]}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Farmer (Manages farms, audits, and retrieves plotted pieces. Requests sector plotting from the Plotter.)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})}),(0,s.jsx)(n.p,{children:"Replace the following placeholders:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<nats_ip>"}),": The IP address of your NATS server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<reward_address>"}),": The reward address where your winning rewards will be sent."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/path/to/farm"})," and ",(0,s.jsx)(n.code,{children:"<size>"}),": The path and size for storing your plots. You can add multiple plots to your farm:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"path=/path/to/farm1,size=<size> \\\npath=/path/to/farm2,size=<size>\n"})}),"\n"]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Common Parameters"}),(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.code,{children:"./subspace-farmer cluster farmer --help"})," for an explanation of each option and its default values."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--create\n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"grouping-components",children:"Grouping Components"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"You can run Farming Cluster components individually or combine them to run simultaneously."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n    -- \\\n    cache \\\n        path=/path/to/cache,size=<size>\n    -- \\\n    plotter\n    -- \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"advanced-topics",children:"Advanced Topics"}),"\n",(0,s.jsx)(n.h3,{id:"nats-cluster",children:"NATS Cluster"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"Just like every other component in the Farming Cluster, it is possible to have redundent NATS servers. Doing so requires an extra step of configuring those NATS servers in their own cluster."}),(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/running-a-nats-service/configuration/clustering",children:"NATS.io Cluster Guide"})," for further details."]}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.mermaid,{value:"flowchart\n    A[Farming Cluster Components] <--\x3e B((NATS Server 1))\n    A[Farming Cluster Components] <--\x3e C((NATS Server 2))"})}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./subspace-farmer cluster \\\n    controller \\\n        --nats-server=nats://<nats_ip_1>:4222 \\\n        --nats-server=nats://<nats_ip_2>:4222 \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>        \n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"multiple-components",children:"Multiple Components"}),"\n",(0,s.jsxs)(r,{open:!0,children:[(0,s.jsx)("summary",{children:"This will demonstrate how to run multiple components in one Farming Cluster: (1) NATS Server, (2) Controllers, (2) Caches, (2) Plotters, and (3) Farmers."}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.mermaid,{value:"flowchart\nNATS((NATS Server))\nController1(Controller 1)\nController2(Controller 2)\nCache1(Cache 1)\nCache2(Cache 2)\nPlotter1(Plotter 1)\nPlotter2(Plotter 2)\nFarmer1(Farmer 1)\nFarmer2(Farmer 2)\nFarmer3(Farmer 3)\n\nController1  <--\x3e  NATS\nController2  <--\x3e  NATS\n\nCache1  <--\x3e  NATS\nCache2  <--\x3e  NATS\n\nPlotter1  <--\x3e  NATS\nPlotter2  <--\x3e  NATS\n\nFarmer1 <--\x3e  NATS\nFarmer2 <--\x3e  NATS\nFarmer3 <--\x3e  NATS\n"})}),(0,s.jsx)(n.admonition,{title:"Multiple Cache Groups",type:"caution",children:(0,s.jsxs)(n.p,{children:["Each cache group must have a unique name, and controllers can be assigned one or more. Specify an alphanumeric name for each using ",(0,s.jsx)(n.code,{children:"--cache-group <group_name>"}),"."]})}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Controller #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --cache-group <group_1> \\\n        --cache-group <group_2> \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Controller #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --cache-group <group_2> \\\n        --node-rpc-url ws://<node_ip>:<rpc_port>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Cache #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    cache \\\n        --cache-group <group_1> \\\n        path=/path/to/cache,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Cache #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    cache \\\n        --cache-group <group_2> \\\n        path=/path/to/cache,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Plotter #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    plotter\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Plotter #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    plotter\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Farmer #1"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Farmer #2"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Farmer #3"',children:"./subspace-farmer \\\n    cluster \\\n        --nats-server nats://<nats_ip>:4222 \\\n    farmer \\\n        --reward-address <reward_address> \\\n        path=/path/to/farm,size=<size>\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(96540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);