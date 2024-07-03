"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5772],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},5046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162),s=n(614);n(9960),n(1207);const l={title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",keywords:["Operator","Guide"]},u=void 0,d={unversionedId:"farming-&-staking/staking/operators/tips-operator",id:"version-latest/farming-&-staking/staking/operators/tips-operator",title:"Operator Tips & Tricks",description:"Operators Tips & Tricks",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-latest/farming-&-staking/staking/operators/tips-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/farming-&-staking/staking/operators/tips-operator",permalink:"/tr/docs/farming-&-staking/staking/operators/tips-operator",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/tr/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/tips-operator.mdx",tags:[],version:"latest",sidebarPosition:3,frontMatter:{title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Deregister an Operator",permalink:"/tr/docs/farming-&-staking/staking/operators/deregister-operator"},next:{title:"Staking guide",permalink:"/tr/docs/farming-&-staking/staking/"}},c={},p=[{value:"Insert key to Keystore:",id:"insert-key-to-keystore",level:4},{value:"Switch domains",id:"switch-domains",level:3},{value:"Useful commands",id:"useful-commands",level:2},{value:"Running both validator (farmer) and operator nodes at the same time",id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time",level:3},{value:"Switching to another server",id:"switching-to-another-server",level:3}],m={toc:p},h="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(h,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"insert-key-to-keystore"},"Insert key to Keystore:"),(0,r.kt)("p",null,"This might be useful if you decided to switch domains or already have ",(0,r.kt)("strong",{parentName:"p"},"the secret phrase"),". Read more about switching domain in the next section."),(0,r.kt)("p",null,"To insert the key, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'target/production/subspace-node domain key insert \\\n--base-path NODE_DATA_PATH --domain-id DOMAIN_ID --keystore-suri "<Secret phrase>"\n')),(0,r.kt)("p",null,"The command above will insert the keypair in the subfolder of ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_DATA_PATH/domains/DOMAIN_ID/keystore"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"suri")," is the secret phrase of the operator key."),(0,r.kt)("h3",{id:"switch-domains"},"Switch domains"),(0,r.kt)("p",null,"Any ",(0,r.kt)("strong",{parentName:"p"},"Operator")," can switch domain they operate on anytime.\nIn order to switch domain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Proceed to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"PolkadotJS")),(0,r.kt)("li",{parentName:"ol"},"Make sure to select the correct network at the top-left corner."),(0,r.kt)("li",{parentName:"ol"},"Select the account you want to use in ",(0,r.kt)("inlineCode",{parentName:"li"},"using the selected account"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," and choose ",(0,r.kt)("inlineCode",{parentName:"li"},"switchDomain(operatorId, newDomainId)")," in the dropdown."),(0,r.kt)("li",{parentName:"ol"},"Add your ",(0,r.kt)("inlineCode",{parentName:"li"},"operatorId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"newDomainId")," to the corresponding fields.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking-24",src:n(7700).Z,width:"1754",height:"566"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only the account who registered ",(0,r.kt)("strong",{parentName:"p"},"Operator")," can swith the domain.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You need to move your keypair to a new location, if you switch domains. Follow the ",(0,r.kt)("a",{parentName:"p",href:"#insert-key-to-keystore"},"insert key to keystore section"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Stake of your ",(0,r.kt)("strong",{parentName:"p"},"Nominators")," won't be released, but will be moved to the new domain as well.")),(0,r.kt)("h2",{id:"useful-commands"},"Useful commands"),(0,r.kt)("h3",{id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time"},"Running both validator (farmer) and operator nodes at the same time"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To run both operator and validator at the same time, provide requrired flags for both roles when starting your node.")),(0,r.kt)(o.Z,{groupId:"OS",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run `\n      --chain gemini-3h `\n      --farmer `\n      --name your_node_name `\n      -- `\n      --domain-id your_domain_id `\n      --operator-id your_operator_id `\n      --listen-on /ip4/0.0.0.0/tcp/40333")),(0,r.kt)(i.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run \\\n      --chain gemini-3h \\\n      --farmer \\\n      --name your_node_name \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --listen-on /ip4/0.0.0.0/tcp/40333")),(0,r.kt)(i.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run \\\n      --chain gemini-3h \\\n      --farmer \\\n      --name your_node_name \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --listen-on /ip4/0.0.0.0/tcp/40333")),(0,r.kt)(i.Z,{value:"docker",label:"\ud83d\udc0b Docker",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeBlock"},'services:\n        node:\n          # Replace snapshot-DATE with the latest release (like snapshot-2024-jun-18)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/subspace/node:snapshot-DATE\n          volumes:\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - node-data:/var/subspace:rw\n      #      - /path/to/subspace-node:/var/subspace:rw\n          ports:\n      # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all\n      # occurrences of 30333 or 30433 in this file with another value\n            - "0.0.0.0:30333:30333/tcp"\n            - "0.0.0.0:30433:30433/tcp"\n            - "0.0.0.0:40333:40333/tcp"\n          restart: unless-stopped\n          command: [\n            "run",\n            "--chain", "gemini-3h",\n            "--base-path", "/var/subspace",\n            "--listen-on", "30333",\n            "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",\n            "--rpc-cors", "all",\n            "--rpc-methods", "unsafe",\n            "--rpc-listen-on", "0.0.0.0:9944",\n            "--farmer",\n            "--name", "INSERT_YOUR_ID",\n            "--",\n            # Replace INSERT_YOUR_DOMAIN_ID with domain ID you want to be operator on\n            "--domain-id", "INSERT_YOUR_DOMAIN_ID",\n            # Replace INSERT_YOUR_OPERATOR_ID with your operator ID\n            "--operator-id", "INSERT_YOUR_OPERATOR_ID",\n            "--listen-on", "/ip4/0.0.0.0/tcp/40333",\n      # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n          ]\n          healthcheck:\n            timeout: 5s\n      # If node setup takes longer than expected, you want to increase interval and retries number.\n            interval: 30s\n            retries: 60\n        farmer:\n          depends_on:\n            node:\n              condition: service_healthy\n          # Replace snapshot-DATE with latest release (like snapshot-2024-jun-18)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/subspace/farmer:snapshot-DATE\n          volumes:\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - farmer-data:/var/subspace:rw\n      #      - /path/to/subspace-farmer:/var/subspace:rw\n          ports:\n      # If port 30533 is already occupied by something else, replace all\n      # occurrences of 30533 in this file with another value\n            - "0.0.0.0:30533:30533/tcp"\n          restart: unless-stopped\n          command: [\n            "farm",\n            "--node-rpc-url", "ws://node:9944",\n            "--listen-on", "/ip4/0.0.0.0/tcp/30533",\n      # Replace WALLET_ADDRESS with your Polkadot.js wallet address\n            "--reward-address", "WALLET_ADDRESS",\n            # Replace PLOT_SIZE with plot size in gigabytes or terabytes, for example 100G or 2T (but leave at least 60G of disk space for node and some for OS)\n            "path=/var/subspace,size=PLOT_SIZE",\n          ]\n      volumes:\n        node-data:\n        farmer-data:\n        '))),(0,r.kt)("p",null,"You should see the node start successfully and begin syncing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Staking-28",src:n(2567).Z,width:"1306",height:"689"})),(0,r.kt)("h3",{id:"switching-to-another-server"},"Switching to another server"),(0,r.kt)("p",null,"To ensure the minimum downtime during your switch, we propose the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sync a new operator node using a throwaway key. You can generate a new key, just not insert it into your keystore."),(0,r.kt)("li",{parentName:"ol"},"Stop the original node and rename the keystore (or whatever you feel comfortable doing to prevent you accidentally starting the original node up with the original signing key)."),(0,r.kt)("li",{parentName:"ol"},"Update the keystore on the new node with the original signing key."),(0,r.kt)("li",{parentName:"ol"},"Restart the new operator node.")))}k.isMDXComponent=!0},1207:(e,t,n)=>{n.d(t,{Z:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},7700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-24-b822133034d0db2dfee16f639920c99b.png"},2567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-28-21a5dd73ef671f679b80c053023f6fe8.png"}}]);