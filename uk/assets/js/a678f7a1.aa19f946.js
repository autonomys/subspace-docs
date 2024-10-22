"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2172],{2759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(4848),a=t(8453),i=t(1470),o=t(9365),s=t(1432);t(8774),t(5648);const l={title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",slug:"/staking/operator/tips",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f"]},d=void 0,c={id:"farming-&-staking/staking/operators/tips-operator",title:"Operator Tips & Tricks",description:"Operators Tips & Tricks",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/tips-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/staking/operator/tips",permalink:"/uk/staking/operator/tips",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/staking/operators/tips-operator.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Operator Tips & Tricks",sidebar_position:3,description:"Operators Tips & Tricks",slug:"/staking/operator/tips",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f"]},sidebar:"tutorialSidebar",previous:{title:"Deregister an Operator",permalink:"/uk/staking/operator/deregister"},next:{title:"Staking guide",permalink:"/uk/staking/stake"}},h={},u=[{value:"Claiming tSSC",id:"claiming-tssc",level:3},{value:"Insert key to Keystore:",id:"insert-key-to-keystore",level:3},{value:"Switch domains",id:"switch-domains",level:3},{value:"Useful commands",id:"useful-commands",level:2},{value:"Running both validator (farmer) and operator nodes at the same time",id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time",level:3},{value:"Switching to another server",id:"switching-to-another-server",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"claiming-tssc",children:"Claiming tSSC"}),"\n",(0,r.jsx)(n.p,{children:"The minimum amount of tokens required to register an operator is 100 tSSC.  If you don't have that much, there is a way to claim it as long as you are a verified farmer."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Proceed to the staking tab on ",(0,r.jsx)(n.a,{href:"https://astral.autonomys.xyz",children:"Astral"})," and connect your wallet."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-1",src:t(6390).A+"",width:"1697",height:"1070"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Select the wallet you would like to connect. Both ",(0,r.jsx)(n.strong,{children:"Subwallet"})," and ",(0,r.jsx)(n.strong,{children:"PolkadotJS"})," wallets are supported."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-2",src:t(3949).A+"",width:"372",height:"220"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Enter your password to give an access to your wallet."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-3",src:t(6468).A+"",width:"390",height:"633"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Select the account you'd like to use form the dropdown menu. You can click the button in the upper left corner to see available and locked (staked) token balances for the selected account."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-4",src:t(2731).A+"",width:"280",height:"108"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-14",src:t(8192).A+"",width:"498",height:"572"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"As long as you are a verified farmer, you should have the Claim button available."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-15",src:t(3945).A+"",width:"483",height:"271"})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Click the Claim button and it should change to Pending."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-16",src:t(9938).A+"",width:"483",height:"250"})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"After about 5 minutes you should see an additional 100 tSSC in your account."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-17",src:t(3595).A+"",width:"501",height:"572"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"If the claim button is not available you may need to disconnect and reconnect your wallet. If you still don't see the claim button you may need to click refresh."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NStaking-18",src:t(3292).A+"",width:"501",height:"50"})})]}),"\n",(0,r.jsx)(n.h3,{id:"insert-key-to-keystore",children:"Insert key to Keystore:"}),"\n",(0,r.jsxs)(n.p,{children:["This might be useful if you decided to switch domains or already have ",(0,r.jsx)(n.strong,{children:"the secret phrase"}),". Read more about switching domain in the next section."]}),"\n",(0,r.jsx)(n.p,{children:"To insert the key, use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'target/production/subspace-node domain key insert \\\n--base-path NODE_DATA_PATH --domain-id DOMAIN_ID --keystore-suri "<Secret phrase>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The command above will insert the keypair in the subfolder of ",(0,r.jsx)(n.code,{children:"NODE_DATA_PATH/domains/DOMAIN_ID/keystore"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"suri"})," is the secret phrase of the operator key."]}),"\n",(0,r.jsx)(n.h3,{id:"switch-domains",children:"Switch domains"}),"\n",(0,r.jsxs)(n.p,{children:["Any ",(0,r.jsx)(n.strong,{children:"Operator"})," can switch domain they operate on anytime.\nIn order to switch domain:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Proceed to ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/explorer",children:"PolkadotJS"})]}),"\n",(0,r.jsx)(n.li,{children:"Make sure to select the correct network at the top-left corner."}),"\n",(0,r.jsxs)(n.li,{children:["Select the account you want to use in ",(0,r.jsx)(n.code,{children:"using the selected account"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"domains"})," under ",(0,r.jsx)(n.code,{children:"submit the following extrinsic"})," and choose ",(0,r.jsx)(n.code,{children:"switchDomain(operatorId, newDomainId)"})," in the dropdown."]}),"\n",(0,r.jsxs)(n.li,{children:["Add your ",(0,r.jsx)(n.code,{children:"operatorId"})," and ",(0,r.jsx)(n.code,{children:"newDomainId"})," to the corresponding fields."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Staking-24",src:t(6335).A+"",width:"1754",height:"566"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Only the account who registered ",(0,r.jsx)(n.strong,{children:"Operator"})," can swith the domain."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You need to move your keypair to a new location, if you switch domains. Follow the ",(0,r.jsx)(n.a,{href:"#insert-key-to-keystore",children:"insert key to keystore section"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Stake of your ",(0,r.jsx)(n.strong,{children:"Nominators"})," won't be released, but will be moved to the new domain as well."]})}),"\n",(0,r.jsx)(n.h2,{id:"useful-commands",children:"Useful commands"}),"\n",(0,r.jsx)(n.h3,{id:"running-both-validator-farmer-and-operator-nodes-at-the-same-time",children:"Running both validator (farmer) and operator nodes at the same time"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"To run both operator and validator at the same time, provide requrired flags for both roles when starting your node."})}),"\n",(0,r.jsxs)(i.A,{groupId:"OS",children:[(0,r.jsx)(o.A,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,children:(0,r.jsx)(s.A,{children:"target/production/subspace-node run `\n      --chain gemini-3h `\n      --farmer `\n      --name your_node_name `\n      -- `\n      --domain-id your_domain_id `\n      --operator-id your_operator_id `\n      --listen-on /ip4/0.0.0.0/tcp/40333"})}),(0,r.jsx)(o.A,{value:"macos",label:"\ud83c\udf4e macOS",children:(0,r.jsx)(s.A,{children:"target/production/subspace-node run \\\n      --chain gemini-3h \\\n      --farmer \\\n      --name your_node_name \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --listen-on /ip4/0.0.0.0/tcp/40333"})}),(0,r.jsx)(o.A,{value:"linux",label:"\ud83d\udc27 Ubuntu",children:(0,r.jsx)(s.A,{children:"target/production/subspace-node run \\\n      --chain gemini-3h \\\n      --farmer \\\n      --name your_node_name \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --listen-on /ip4/0.0.0.0/tcp/40333"})}),(0,r.jsx)(o.A,{value:"docker",label:"\ud83d\udc0b Docker",children:(0,r.jsx)(s.A,{children:'services:\n        node:\n          # Replace snapshot-DATE with the latest release (like snapshot-2024-jun-18)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/autonomys/node:snapshot-DATE\n          volumes:\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - node-data:/var/subspace:rw\n      #      - /path/to/subspace-node:/var/subspace:rw\n          ports:\n      # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all\n      # occurrences of 30333 or 30433 in this file with another value\n            - "0.0.0.0:30333:30333/tcp"\n            - "0.0.0.0:30433:30433/tcp"\n            - "0.0.0.0:40333:40333/tcp"\n          restart: unless-stopped\n          command: [\n            "run",\n            "--chain", "gemini-3h",\n            "--base-path", "/var/subspace",\n            "--listen-on", "30333",\n            "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",\n            "--rpc-cors", "all",\n            "--rpc-methods", "unsafe",\n            "--rpc-listen-on", "0.0.0.0:9944",\n            "--farmer",\n            "--name", "INSERT_YOUR_ID",\n            "--",\n            # Replace INSERT_YOUR_DOMAIN_ID with domain ID you want to be operator on\n            "--domain-id", "INSERT_YOUR_DOMAIN_ID",\n            # Replace INSERT_YOUR_OPERATOR_ID with your operator ID\n            "--operator-id", "INSERT_YOUR_OPERATOR_ID",\n            "--listen-on", "/ip4/0.0.0.0/tcp/40333",\n      # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n          ]\n          healthcheck:\n            timeout: 5s\n      # If node setup takes longer than expected, you want to increase interval and retries number.\n            interval: 30s\n            retries: 60\n        farmer:\n          depends_on:\n            node:\n              condition: service_healthy\n          # Replace snapshot-DATE with latest release (like snapshot-2024-jun-18)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/autonomys/farmer:snapshot-DATE\n          volumes:\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - farmer-data:/var/subspace:rw\n      #      - /path/to/subspace-farmer:/var/subspace:rw\n          ports:\n      # If port 30533 is already occupied by something else, replace all\n      # occurrences of 30533 in this file with another value\n            - "0.0.0.0:30533:30533/tcp"\n          restart: unless-stopped\n          command: [\n            "farm",\n            "--node-rpc-url", "ws://node:9944",\n            "--listen-on", "/ip4/0.0.0.0/tcp/30533",\n      # Replace WALLET_ADDRESS with your Polkadot.js wallet address\n            "--reward-address", "WALLET_ADDRESS",\n            # Replace PLOT_SIZE with plot size in gigabytes or terabytes, for example 100G or 2T (but leave at least 60G of disk space for node and some for OS)\n            "path=/var/subspace,size=PLOT_SIZE",\n          ]\n      volumes:\n        node-data:\n        farmer-data:\n        '})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["If you're running an operator node for ",(0,r.jsx)(n.strong,{children:"AutoID domain"}),", add the following bootstrap node to the list of domain arguments:"]}),(0,r.jsx)(n.p,{children:"--bootstrap-node /dns/bootstrap-0.autoid.gemini-3h.subspace.network/tcp/30334/p2p/12D3KooWFoiz2iTkmnnSqiL2oQRhGzaqgtUjYNz2jyWKQqgPXgx9"})]}),"\n",(0,r.jsx)(n.p,{children:"You should see the node start successfully and begin syncing."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Staking-28",src:t(7139).A+"",width:"1306",height:"689"})}),"\n",(0,r.jsx)(n.h3,{id:"switching-to-another-server",children:"Switching to another server"}),"\n",(0,r.jsx)(n.p,{children:"To ensure the minimum downtime during your switch, we propose the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Sync a new operator node using a throwaway key. You can generate a new key, just not insert it into your keystore."}),"\n",(0,r.jsx)(n.li,{children:"Stop the original node and rename the keystore (or whatever you feel comfortable doing to prevent you accidentally starting the original node up with the original signing key)."}),"\n",(0,r.jsx)(n.li,{children:"Update the keystore on the new node with the original signing key."}),"\n",(0,r.jsx)(n.li,{children:"Restart the new operator node."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),a=t(8215),i=t(3104),o=t(6347),s=t(205),l=t(7485),d=t(1682),c=t(679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,h]=g({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(d(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...n,...e}),(0,j.jsx)(w,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},5648:(e,n,t)=>{t.d(n,{A:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},6390:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/NStaking-1-3ada281f73b3d558999e05d08e652e20.png"},8192:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/NStaking-14-f9c14007a8199957f60bd64c6fd40ec3.png"},3945:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/NStaking-15-8e8431385740409312ceb547e818c7c0.png"},9938:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/NStaking-16-c796d2a00b6debd577e9c12ab90b04a6.png"},3595:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/NStaking-17-da1bb9eef192826454f70cbc0e701adc.png"},3292:(e,n,t)=>{t.d(n,{A:()=>r});const r="data:image/png;base64,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"},3949:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/NStaking-2-8f4b3ae2d7a7cd160765c5356f7348fc.png"},6468:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},2731:(e,n,t)=>{t.d(n,{A:()=>r});const r="data:image/png;base64,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"},6335:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Staking-24-b822133034d0db2dfee16f639920c99b.png"},7139:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Staking-28-21a5dd73ef671f679b80c053023f6fe8.png"}}]);