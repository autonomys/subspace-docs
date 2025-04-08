"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7572],{26894:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=r(74848),a=r(28453),o=r(11470),s=r(19365),i=r(21432);r(28774),r(65648);const l={title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",slug:"/staking/operator/tips",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"]},d=void 0,c={id:"farming-&-staking/staking/operators/tips-operator",title:"Operator Tips & Tricks",description:"Operators Tips & Tricks",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/tips-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/staking/operator/tips",permalink:"/ru/staking/operator/tips",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/operators/tips-operator.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",slug:"/staking/operator/tips",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"]},sidebar:"tutorialSidebar",previous:{title:"Deregister an Operator",permalink:"/ru/staking/operator/deregister"},next:{title:"Staking guide",permalink:"/ru/staking/stake"}},u={},p=[{value:"\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043a\u043b\u044e\u0447\u0435\u0439:",id:"\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435-\u043a\u043b\u044e\u0447\u0430-\u0432-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435-\u043a\u043b\u044e\u0447\u0435\u0439",level:3},{value:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043c\u0435\u043d\u043e\u0432",id:"\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0434\u043e\u043c\u0435\u043d\u043e\u0432",level:3},{value:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:2},{value:"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u043d\u043e\u0434\u044b \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430 (\u0444\u0430\u0440\u043c\u0435\u0440\u0430) \u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430",id:"\u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439-\u0437\u0430\u043f\u0443\u0441\u043a-\u043d\u043e\u0434\u044b-\u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430-\u0444\u0430\u0440\u043c\u0435\u0440\u0430-\u0438-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430",level:3},{value:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440",id:"\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043d\u0430-\u0434\u0440\u0443\u0433\u043e\u0439-\u0441\u0435\u0440\u0432\u0435\u0440",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435-\u043a\u043b\u044e\u0447\u0430-\u0432-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435-\u043a\u043b\u044e\u0447\u0435\u0439",children:"\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043a\u043b\u044e\u0447\u0435\u0439:"}),"\n",(0,t.jsxs)(n.p,{children:["This might be useful if you decided to switch domains or already have ",(0,t.jsx)(n.strong,{children:"the secret phrase"}),". Read more about switching domain in the next section."]}),"\n",(0,t.jsx)(n.p,{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u043b\u044e\u0447, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'subspace-node domain key insert \\\n--base-path NODE_DATA_PATH --domain-id DOMAIN_ID --keystore-suri "<Secret phrase>"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The command above will insert the keypair in the subfolder of ",(0,t.jsx)(n.code,{children:"NODE_DATA_PATH/domains/DOMAIN_ID/keystore"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"suri"})," - \u044d\u0442\u043e \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u0430\u044f \u0444\u0440\u0430\u0437\u0430 \u043a\u043b\u044e\u0447\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430."]}),"\n",(0,t.jsx)(n.h3,{id:"\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0434\u043e\u043c\u0435\u043d\u043e\u0432",children:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043c\u0435\u043d\u043e\u0432"}),"\n",(0,t.jsxs)(n.p,{children:["Any ",(0,t.jsx)(n.strong,{children:"Operator"})," can switch domain they operate on anytime.\nIn order to switch domain:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 ",(0,t.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/explorer",children:"PolkadotJS"})]}),"\n",(0,t.jsx)(n.li,{children:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0441\u0435\u0442\u044c \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043b\u0435\u0432\u043e\u043c \u0443\u0433\u043b\u0443."}),"\n",(0,t.jsxs)(n.li,{children:["\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 ",(0,t.jsx)(n.code,{children:"using the selected account"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",(0,t.jsx)(n.code,{children:"domains"})," \u0432 \u043f\u043e\u043b\u0435 ",(0,t.jsx)(n.code,{children:"submit the following extrinsic"}),", \u0434\u0430\u043b\u0435\u0435 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",(0,t.jsx)(n.code,{children:"switchDomain(operatorId, newDomainId)"})," \u0432 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u043c \u0441\u043f\u0438\u0441\u043a\u0435."]}),"\n",(0,t.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 ",(0,t.jsx)(n.code,{children:"operatorId"})," \u0438 ",(0,t.jsx)(n.code,{children:"newDomainId"})," \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u043b\u044f."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Staking-24",src:r(96335).A+"",width:"1754",height:"566"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Only the account who registered ",(0,t.jsx)(n.strong,{children:"Operator"})," can switch the domain."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You need to move your keypair to a new location, if you switch domains. Follow the ",(0,t.jsx)(n.a,{href:"#insert-key-to-keystore",children:"insert key to keystore section"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Stake of your ",(0,t.jsx)(n.strong,{children:"Nominators"})," won't be released, but will be moved to the new domain as well."]})}),"\n",(0,t.jsx)(n.h2,{id:"\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),"\n",(0,t.jsx)(n.h3,{id:"\u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439-\u0437\u0430\u043f\u0443\u0441\u043a-\u043d\u043e\u0434\u044b-\u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430-\u0444\u0430\u0440\u043c\u0435\u0440\u0430-\u0438-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430",children:"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u043d\u043e\u0434\u044b \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430 (\u0444\u0430\u0440\u043c\u0435\u0440\u0430) \u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"To run both operator and validator at the same time, provide required flags for both roles when starting your node."})}),"\n",(0,t.jsxs)(o.A,{groupId:"OS",children:[(0,t.jsx)(s.A,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,children:(0,t.jsx)(i.A,{children:"subspace-node run `\n    --chain taurus `\n    --farmer `\n    --name your_node_name `\n    --base-path NODE_DATA_PATH `\n    --sync full `\n    -- `\n    --domain-id your_domain_id `\n    --operator-id your_operator_id"})}),(0,t.jsx)(s.A,{value:"macos",label:"\ud83c\udf4e macOS",children:(0,t.jsx)(i.A,{children:"subspace-node run \\\n    --chain taurus \\\n    --farmer \\\n    --name your_node_name \\\n    --base-path NODE_DATA_PATH \\\n    --sync full \\\n    -- \\\n    --domain-id your_domain_id \\\n    --operator-id your_operator_id"})}),(0,t.jsx)(s.A,{value:"linux",label:"\ud83d\udc27 Ubuntu",children:(0,t.jsx)(i.A,{children:"subspace-node run \\\n    --chain taurus \\\n    --farmer \\\n    --name your_node_name \\\n    --base-path NODE_DATA_PATH \\\n    --sync full \\\n    -- \\\n    --domain-id your_domain_id \\\n    --operator-id your_operator_id"})}),(0,t.jsx)(s.A,{value:"docker",label:"\ud83d\udc0b Docker",children:(0,t.jsx)(i.A,{children:'services:\n      node:\n        # Replace snapshot-DATE with the latest release (like snapshot-2025-jan-07)\n        image: ghcr.io/autonomys/node:snapshot-DATE\n        volumes:\n    # Instead of specifying volume (which will store data in /var/lib/docker), you can\n    # alternatively specify path to the directory where files will be stored, just make\n    # sure everyone is allowed to write there\n          - node-data:/var/subspace:rw\n    #      - /path/to/subspace-node:/var/subspace:rw\n        ports:\n    # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all\n    # occurrences of 30333 or 30433 in this file with another value\n          - "0.0.0.0:30333:30333/tcp"\n          - "0.0.0.0:30433:30433/tcp"\n          - "0.0.0.0:40333:40333/tcp"\n        restart: unless-stopped\n        command: [\n          "run",\n          "--chain", "taurus",\n          "--base-path", "/var/subspace",\n          "--rpc-cors", "all",\n          "--rpc-methods", "unsafe",\n          "--rpc-listen-on", "0.0.0.0:9944",\n          "--farmer",\n         # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n          "--name", "INSERT_YOUR_ID",\n          "--sync", "full", \n          "--",\n          # Replace INSERT_YOUR_DOMAIN_ID with domain ID you want to be operator on\n          "--domain-id", "INSERT_YOUR_DOMAIN_ID",\n          # Replace INSERT_YOUR_OPERATOR_ID with your operator ID\n          "--operator-id", "INSERT_YOUR_OPERATOR_ID",\n          "--listen-on", "/ip4/0.0.0.0/tcp/40333"\n    # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n        ]\n        healthcheck:\n          timeout: 5s\n    # If node setup takes longer than expected, you want to increase interval and retries number.\n          interval: 30s\n          retries: 60\n      farmer:\n        depends_on:\n          node:\n            condition: service_healthy\n        # Replace snapshot-DATE with latest release (like snapshot-2025-jan-07)\n        image: ghcr.io/autonomys/farmer:snapshot-DATE\n        volumes:\n    # Instead of specifying volume (which will store data in /var/lib/docker), you can\n    # alternatively specify path to the directory where files will be stored, just make\n    # sure everyone is allowed to write there\n          - farmer-data:/var/subspace:rw\n    #      - /path/to/subspace-farmer:/var/subspace:rw\n        ports:\n    # If port 30533 is already occupied by something else, replace all\n    # occurrences of 30533 in this file with another value\n          - "0.0.0.0:30533:30533/tcp"\n        restart: unless-stopped\n        command: [\n          "farm",\n          "--node-rpc-url", "ws://node:9944",\n          "--listen-on", "/ip4/0.0.0.0/tcp/30533",\n    # Replace WALLET_ADDRESS with your Polkadot.js wallet address\n          "--reward-address", "WALLET_ADDRESS",\n          # Replace PLOT_SIZE with plot size in gigabytes or terabytes, for example 100G or 2T (but leave at least 60G of disk space for node and some for OS)\n          "path=/var/subspace,size=PLOT_SIZE",\n        ]\n    volumes:\n      node-data:\n      farmer-data:\n      '})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["If you're running an operator node for ",(0,t.jsx)(n.strong,{children:"AutoID domain"}),", add the following bootstrap node to the list of domain arguments:"]}),(0,t.jsx)(n.p,{children:"--bootstrap-node /dns/bootstrap-0.autoid.gemini-3h.subspace.network/tcp/30334/p2p/12D3KooWFoiz2iTkmnnSqiL2oQRhGzaqgtUjYNz2jyWKQqgPXgx9"})]}),"\n",(0,t.jsx)(n.p,{children:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c, \u0447\u0442\u043e \u043d\u043e\u0434\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430 \u0438 \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Staking-28",src:r(17139).A+"",width:"1306",height:"689"})}),"\n",(0,t.jsx)(n.h3,{id:"\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043d\u0430-\u0434\u0440\u0443\u0433\u043e\u0439-\u0441\u0435\u0440\u0432\u0435\u0440",children:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440"}),"\n",(0,t.jsx)(n.p,{children:"To ensure the minimum downtime during your switch, we propose the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Sync a new operator node using a throwaway key. You can generate a new key, just not insert it into your keystore."}),"\n",(0,t.jsx)(n.li,{children:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u0443\u044e \u043d\u043e\u0434\u0443 \u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u0443\u0439\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 (\u0438\u043b\u0438 \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0412\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u043d\u043e\u0434\u044b \u0441 \u043e\u0440\u0438\u0433\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u043f\u043e\u0434\u043f\u0438\u0441\u0438)."}),"\n",(0,t.jsx)(n.li,{children:"Update the keystore on the new node with the original signing key."}),"\n",(0,t.jsx)(n.li,{children:"Restart the new operator node."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(96540),a=r(18215),o=r(23104),s=r(56347),i=r(205),l=r(57485),d=r(31682),c=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,o=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[d,u]=m({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=d??b;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function w(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),a=i[r].value;a!==t&&(d(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=b(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(w,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},65648:(e,n,r)=>{r.d(n,{A:()=>t});const t={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},96335:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Staking-24-b822133034d0db2dfee16f639920c99b.png"},17139:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Staking-28-21a5dd73ef671f679b80c053023f6fe8.png"}}]);