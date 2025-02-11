"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9833],{9122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=t(4848),a=t(8453),o=t(1470),s=t(9365),i=t(1432);t(8774),t(5648);const l={title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",slug:"/staking/operator/tips",keywords:["Operator","Guide"]},c=void 0,d={id:"farming-&-staking/staking/operators/tips-operator",title:"Operator Tips & Tricks",description:"Operators Tips & Tricks",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/tips-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/staking/operator/tips",permalink:"/ja/staking/operator/tips",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/operators/tips-operator.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",slug:"/staking/operator/tips",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Deregister an Operator",permalink:"/ja/staking/operator/deregister"},next:{title:"Staking guide",permalink:"/ja/staking/stake"}},u={},h=[{value:"Insert key to Keystore:",id:"insert-key-to-keystore",level:3},{value:"Switch domains",id:"switch-domains",level:3},{value:"Useful commands",id:"useful-commands",level:2},{value:"Running both validator (farmer) and operator nodes at the same time",id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time",level:3},{value:"Switching to another server",id:"switching-to-another-server",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"insert-key-to-keystore",children:"Insert key to Keystore:"}),"\n",(0,r.jsxs)(n.p,{children:["This might be useful if you decided to switch domains or already have ",(0,r.jsx)(n.strong,{children:"the secret phrase"}),". Read more about switching domain in the next section."]}),"\n",(0,r.jsx)(n.p,{children:"To insert the key, use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'subspace-node domain key insert \\\n--base-path NODE_DATA_PATH --domain-id DOMAIN_ID --keystore-suri "<Secret phrase>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The command above will insert the keypair in the subfolder of ",(0,r.jsx)(n.code,{children:"NODE_DATA_PATH/domains/DOMAIN_ID/keystore"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"suri"})," is the secret phrase of the operator key."]}),"\n",(0,r.jsx)(n.h3,{id:"switch-domains",children:"Switch domains"}),"\n",(0,r.jsxs)(n.p,{children:["Any ",(0,r.jsx)(n.strong,{children:"Operator"})," can switch domain they operate on anytime.\nIn order to switch domain:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Proceed to ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/explorer",children:"PolkadotJS"})]}),"\n",(0,r.jsx)(n.li,{children:"Make sure to select the correct network at the top-left corner."}),"\n",(0,r.jsxs)(n.li,{children:["Select the account you want to use in ",(0,r.jsx)(n.code,{children:"using the selected account"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"domains"})," under ",(0,r.jsx)(n.code,{children:"submit the following extrinsic"})," and choose ",(0,r.jsx)(n.code,{children:"switchDomain(operatorId, newDomainId)"})," in the dropdown."]}),"\n",(0,r.jsxs)(n.li,{children:["Add your ",(0,r.jsx)(n.code,{children:"operatorId"})," and ",(0,r.jsx)(n.code,{children:"newDomainId"})," to the corresponding fields."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Staking-24",src:t(6335).A+"",width:"1754",height:"566"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Only the account who registered ",(0,r.jsx)(n.strong,{children:"Operator"})," can swith the domain."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You need to move your keypair to a new location, if you switch domains. Follow the ",(0,r.jsx)(n.a,{href:"#insert-key-to-keystore",children:"insert key to keystore section"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Stake of your ",(0,r.jsx)(n.strong,{children:"Nominators"})," won't be released, but will be moved to the new domain as well."]})}),"\n",(0,r.jsx)(n.h2,{id:"useful-commands",children:"Useful commands"}),"\n",(0,r.jsx)(n.h3,{id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time",children:"Running both validator (farmer) and operator nodes at the same time"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"To run both operator and validator at the same time, provide required flags for both roles when starting your node."})}),"\n",(0,r.jsxs)(o.A,{groupId:"OS",children:[(0,r.jsx)(s.A,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,children:(0,r.jsx)(i.A,{children:"subspace-node run `\n    --chain taurus `\n    --farmer `\n    --name your_node_name `\n    --base-path NODE_DATA_PATH `\n    --blocks-pruning archive-canonical `\n    --state-pruning archive-canonical `\n    --sync full `\n    -- `\n    --domain-id your_domain_id `\n    --operator-id your_operator_id `\n    --blocks-pruning archive-canonical `\n    --state-pruning 16000"})}),(0,r.jsx)(s.A,{value:"macos",label:"\ud83c\udf4e macOS",children:(0,r.jsx)(i.A,{children:"subspace-node run \\\n    --chain taurus \\\n    --farmer \\\n    --name your_node_name \\\n    --base-path NODE_DATA_PATH \\\n    --blocks-pruning archive-canonical \\\n    --state-pruning archive-canonical \\\n    --sync full \\\n    -- \\\n    --domain-id your_domain_id \\\n    --operator-id your_operator_id \\\n    --blocks-pruning archive-canonical \\\n    --state-pruning 16000"})}),(0,r.jsx)(s.A,{value:"linux",label:"\ud83d\udc27 Ubuntu",children:(0,r.jsx)(i.A,{children:"subspace-node run \\\n    --chain taurus \\\n    --farmer \\\n    --name your_node_name \\\n    --base-path NODE_DATA_PATH \\\n    --blocks-pruning archive-canonical \\\n    --state-pruning archive-canonical \\\n    --sync full \\\n    -- \\\n    --domain-id your_domain_id \\\n    --operator-id your_operator_id \\\n    --blocks-pruning archive-canonical \\\n    --state-pruning 16000"})}),(0,r.jsx)(s.A,{value:"docker",label:"\ud83d\udc0b Docker",children:(0,r.jsx)(i.A,{children:'services:\n      node:\n        # Replace snapshot-DATE with the latest release (like snapshot-2025-jan-07)\n        image: ghcr.io/autonomys/node:snapshot-DATE\n        volumes:\n    # Instead of specifying volume (which will store data in /var/lib/docker), you can\n    # alternatively specify path to the directory where files will be stored, just make\n    # sure everyone is allowed to write there\n          - node-data:/var/subspace:rw\n    #      - /path/to/subspace-node:/var/subspace:rw\n        ports:\n    # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all\n    # occurrences of 30333 or 30433 in this file with another value\n          - "0.0.0.0:30333:30333/tcp"\n          - "0.0.0.0:30433:30433/tcp"\n          - "0.0.0.0:40333:40333/tcp"\n        restart: unless-stopped\n        command: [\n          "run",\n          "--chain", "taurus",\n          "--base-path", "/var/subspace",\n          "--rpc-cors", "all",\n          "--rpc-methods", "unsafe",\n          "--rpc-listen-on", "0.0.0.0:9944",\n          "--farmer",\n         # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n          "--name", "INSERT_YOUR_ID",\n          "--blocks-pruning", "archive-canonical",\n          "--state-pruning", "archive-canonical", \n          "--sync", "full", \n          "--",\n          # Replace INSERT_YOUR_DOMAIN_ID with domain ID you want to be operator on\n          "--domain-id", "INSERT_YOUR_DOMAIN_ID",\n          # Replace INSERT_YOUR_OPERATOR_ID with your operator ID\n          "--operator-id", "INSERT_YOUR_OPERATOR_ID",\n          "--blocks-pruning", "archive-canonical",\n          "--state-pruning", "16000",\n          "--listen-on", "/ip4/0.0.0.0/tcp/40333"\n    # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n        ]\n        healthcheck:\n          timeout: 5s\n    # If node setup takes longer than expected, you want to increase interval and retries number.\n          interval: 30s\n          retries: 60\n      farmer:\n        depends_on:\n          node:\n            condition: service_healthy\n        # Replace snapshot-DATE with latest release (like snapshot-2025-jan-07)\n        image: ghcr.io/autonomys/farmer:snapshot-DATE\n        volumes:\n    # Instead of specifying volume (which will store data in /var/lib/docker), you can\n    # alternatively specify path to the directory where files will be stored, just make\n    # sure everyone is allowed to write there\n          - farmer-data:/var/subspace:rw\n    #      - /path/to/subspace-farmer:/var/subspace:rw\n        ports:\n    # If port 30533 is already occupied by something else, replace all\n    # occurrences of 30533 in this file with another value\n          - "0.0.0.0:30533:30533/tcp"\n        restart: unless-stopped\n        command: [\n          "farm",\n          "--node-rpc-url", "ws://node:9944",\n          "--listen-on", "/ip4/0.0.0.0/tcp/30533",\n    # Replace WALLET_ADDRESS with your Polkadot.js wallet address\n          "--reward-address", "WALLET_ADDRESS",\n          # Replace PLOT_SIZE with plot size in gigabytes or terabytes, for example 100G or 2T (but leave at least 60G of disk space for node and some for OS)\n          "path=/var/subspace,size=PLOT_SIZE",\n        ]\n    volumes:\n      node-data:\n      farmer-data:\n      '})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["If you're running an operator node for ",(0,r.jsx)(n.strong,{children:"AutoID domain"}),", add the following bootstrap node to the list of domain arguments:"]}),(0,r.jsx)(n.p,{children:"--bootstrap-node /dns/bootstrap-0.autoid.gemini-3h.subspace.network/tcp/30334/p2p/12D3KooWFoiz2iTkmnnSqiL2oQRhGzaqgtUjYNz2jyWKQqgPXgx9"})]}),"\n",(0,r.jsx)(n.p,{children:"You should see the node start successfully and begin syncing."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Staking-28",src:t(7139).A+"",width:"1306",height:"689"})}),"\n",(0,r.jsx)(n.h3,{id:"switching-to-another-server",children:"Switching to another server"}),"\n",(0,r.jsx)(n.p,{children:"To ensure the minimum downtime during your switch, we propose the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Sync a new operator node using a throwaway key. You can generate a new key, just not insert it into your keystore."}),"\n",(0,r.jsx)(n.li,{children:"Stop the original node and rename the keystore (or whatever you feel comfortable doing to prevent you accidentally starting the original node up with the original signing key)."}),"\n",(0,r.jsx)(n.li,{children:"Update the keystore on the new node with the original signing key."}),"\n",(0,r.jsx)(n.li,{children:"Restart the new operator node."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(6540),a=t(8215),o=t(3104),s=t(6347),i=t(205),l=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,y.jsx)(v,{...n,...e}),(0,y.jsx)(w,{...n,...e})]})}function x(e){const n=(0,b.A)();return(0,y.jsx)(k,{...e,children:u(e.children)},String(n))}},5648:(e,n,t)=>{t.d(n,{A:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},6335:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Staking-24-b822133034d0db2dfee16f639920c99b.png"},7139:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Staking-28-21a5dd73ef671f679b80c053023f6fe8.png"}}]);