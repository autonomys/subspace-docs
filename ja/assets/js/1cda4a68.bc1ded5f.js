"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3078],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),o=a(6550),i=a(1980),c=a(7392),p=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=g({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=i??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var k=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==o&&(u(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},8987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>y,default:()=>A,frontMatter:()=>b,metadata:()=>w,toc:()=>v});var n=a(7462),r=(a(7294),a(3905)),l=a(9960),s=a(1207);var o=a(4866),i=a(5162);const c={toc:[{value:"Download the Space Acres Installer",id:"download-the-space-acres-installer",level:3},{value:"Install Space Acres",id:"install-space-acres",level:3}]},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"download-the-space-acres-installer"},"Download the Space Acres Installer"),(0,r.kt)("div",{className:`${s.Z.buttons} ${s.Z.flexContainer}`},(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.35/space-acres-0.1.35-x86_64.msi",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Windows Installer"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(.msi)"))),(0,r.kt)("h3",{id:"install-space-acres"},"Install Space Acres"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the downloaded Space Acres installer to launch the Setup Wizard. This wizard will guide you through the installation process."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"space-acres-install-1",src:a(8331).Z,width:"496",height:"387"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose your installation preferences, such as the destination folder and whether to create shortcuts. You can also select to have Space Acres launch at startup."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"space-acres-install-2",src:a(9219).Z,width:"492",height:"384"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review your settings and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Install")," to commence the installation. The wizard will then install Space Acres on your system."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"space-acres-install-3",src:a(9680).Z,width:"492",height:"384"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The installation progress will be displayed, showing the status of new files being copied."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"space-acres-install-4",src:a(4413).Z,width:"493",height:"383"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the installation is complete, you will see a completion screen where you can choose to run Space Acres immediately by checking the box before clicking Finish."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"space-acres-install-5",src:a(8360).Z,width:"493",height:"384"})))))}u.isMDXComponent=!0;const d={toc:[{value:"Download the Space Acres Installer",id:"download-the-space-acres-installer",level:3},{value:"Install Space Acres",id:"install-space-acres",level:3}]},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"download-the-space-acres-installer"},"Download the Space Acres Installer"),(0,r.kt)("div",{className:`${s.Z.buttons} ${s.Z.flexContainer}`},(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.35/space-acres-0.1.35.dmg",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"macOS Installer"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(.dmg)"))),(0,r.kt)("h3",{id:"install-space-acres"},"Install Space Acres"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the downloaded Space Acres installer by double-clicking it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag Space Acres into your Applications folder."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5953).Z,width:"964",height:"642"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Launch the application upon successfull installation."))))}g.isMDXComponent=!0;a(614);const h={toc:[{value:"Download the Space Acres Installer or the Portable App",id:"download-the-space-acres-installer-or-the-portable-app",level:3},{value:"Install Space Acres",id:"install-space-acres",level:3}]},k="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"download-the-space-acres-installer-or-the-portable-app"},"Download the Space Acres Installer or the Portable App"),(0,r.kt)("p",null,"Currently, there are two ways to get Space Acres on Linux:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by installing ",(0,r.kt)("inlineCode",{parentName:"li"},".deb")," package on Ubuntu (recommended)"),(0,r.kt)("li",{parentName:"ul"},"by running ",(0,r.kt)("inlineCode",{parentName:"li"},".AppImage")," bundle directly on any modern Linux distribution (including Ubuntu if you want to)")),(0,r.kt)("div",{className:`${s.Z.buttons} ${s.Z.flexContainer}`},(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.35/space-acres_0.1.35-1_amd64.deb",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Ubuntu Installer"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(.deb)")),(0,r.kt)(l.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.35/space-acres-0.1.35-x86_64.AppImage",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Linux Portable App"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(AppImage)"))),(0,r.kt)("h3",{id:"install-space-acres"},"Install Space Acres"),(0,r.kt)(o.Z,{groupId:"linux_SA_installation",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"deb",label:"Ubuntu Installer (recommended)",default:!0,mdxType:"TabItem"},"1. To install the app, open terminal and run following commands to switch to downloads directory and install an app.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   <CodeBlock language="shell-session">\n     {`cd Downloads\n     sudo apt install ./space-acres*.deb`}\n   </CodeBlock>\n\n   ![](/img/doc-imgs/space-acres/linux_images/deb-1.png)\n\n   Replace `Downloads` with correct name of downloads directory if you have non-English Ubuntu installation or if you downloaded file into a custom location. In case you have multiple versions of Space Acres downloaded, you might want to replace `space-acres*.deb` with a full name of the file you\'ve downloaded. Or go to `Downloads` directory and double-click the application to start the installation process.\n\n2. Click the "Show Apps" icon in the bottom left of the screen.\n\n   ![](/img/doc-imgs/space-acres/linux_images/deb-2.png)\n\n3. Navigate to Space Acres (you may have to scroll to find the page it is on if you have a lot of apps installed)\n\n   ![](/img/doc-imgs/space-acres/linux_images/deb-3.png)\n\n4. Double-click on Space Acres and the application will start.\n'))),(0,r.kt)(i.Z,{value:"appImage",label:"AppImage",mdxType:"TabItem"},"1. Open the Files application.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'   ![](/img/doc-imgs/space-acres/linux_images/appimage-1.png)\n\n2. Click the Downloads folder to open it.\n\n   ![](/img/doc-imgs/space-acres/linux_images/appimage-2.png)\n\n3. Right-click the .AppImage and select properties.\n\n   ![](/img/doc-imgs/space-acres/linux_images/appimage-3.png)\n\n4. Toggle the "Executable as program" option to on.\n\n   ![](/img/doc-imgs/space-acres/linux_images/appimage-4.png)\n\n5. Close the properties window.\n\n6. Double-click the .AppImage and Space Acres will start.\n\n   ![](/img/doc-imgs/space-acres/linux_images/appimage-5.png)\n')))))}f.isMDXComponent=!0;const b={title:"Install",sidebar_position:2,description:"How to run an Autonomys Network Farmer with Space Acres GUI Application",keywords:["Farmer","Farming","GUI","Executable"]},y=void 0,w={unversionedId:"farming-&-staking/farming/space-acres/space-acres-install",id:"farming-&-staking/farming/space-acres/space-acres-install",title:"Install",description:"How to run an Autonomys Network Farmer with Space Acres GUI Application",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/farming/space-acres/space-acres-install.mdx",sourceDirName:"farming-&-staking/farming/space-acres",slug:"/farming-&-staking/farming/space-acres/space-acres-install",permalink:"/ja/docs/farming-&-staking/farming/space-acres/space-acres-install",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/space-acres/space-acres-install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install",sidebar_position:2,description:"How to run an Autonomys Network Farmer with Space Acres GUI Application",keywords:["Farmer","Farming","GUI","Executable"]},sidebar:"tutorialSidebar",previous:{title:"Space Acres (Recommended)",permalink:"/ja/docs/category/space-acres-recommended"},next:{title:"Advanced CLI",permalink:"/ja/docs/category/advanced-cli"}},N={},v=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Step 1: Download and Install Space Acres",id:"step-1-download-and-install-space-acres",level:2},{value:"Step 2: Set Up Space Acres",id:"step-2-set-up-space-acres",level:2},{value:"Step 3: Start Farming",id:"step-3-start-farming",level:2},{value:"Understanding Your Farm",id:"understanding-your-farm",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],x={toc:v},S="wrapper";function A(e){let{components:t,...l}=e;return(0,r.kt)(S,(0,n.Z)({},x,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,r.kt)("p",null,"Make sure you have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A computer with a reliable internet connection."),(0,r.kt)("li",{parentName:"ol"},"Enough free disk space (we'll help you determine how much later)."),(0,r.kt)("li",{parentName:"ol"},"Administrator access to your computer.")),(0,r.kt)("p",null,"What to expect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sync might take from a few hours to up to a day."),(0,r.kt)("li",{parentName:"ul"},"The initial syncing and plotting process requires substantial computational resources, so you may notice that your computer runs slower for day-to-day tasks until syncing and plotting are complete.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note that a wallet with a Substrate address is required to run the software.",(0,r.kt)("br",null),"\nTo learn how to create a Substrate wallet, please visit our pages on ",(0,r.kt)("a",{parentName:"p",href:"/docs/farming-&-staking/wallets/subwallet.md"},"SubWallet (recommended)")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/farming-&-staking/wallets/polkadot.md"},"{polkadot.js} extension"),".")),(0,r.kt)("h2",{id:"step-1-download-and-install-space-acres"},"Step 1: Download and Install Space Acres"),(0,r.kt)(o.Z,{groupId:"Space_Acres_Installation",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",label:"\ud83d\udc27 Linux",default:!0,mdxType:"TabItem"},(0,r.kt)(f,{mdxType:"LinuxPage"})),(0,r.kt)(i.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",mdxType:"TabItem"},(0,r.kt)(u,{mdxType:"WindowsPage"})),(0,r.kt)(i.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,r.kt)(g,{mdxType:"MacOSPage"}))),(0,r.kt)("h2",{id:"step-2-set-up-space-acres"},"Step 2: Set Up Space Acres"),(0,r.kt)("p",null,"Now comes the exciting part \u2013 setting up your farm! Here's what you'll see on the first screen:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Subspace(Autonomys) Network Rewards Address"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is where your farming rewards will be sent."),(0,r.kt)("li",{parentName:"ul"},"It starts with ",(0,r.kt)("strong",{parentName:"li"},"st")," for ",(0,r.kt)("strong",{parentName:"li"},"Subwallet")," and with ",(0,r.kt)("strong",{parentName:"li"},"5")," for {Polkadot.js} extenstion."),(0,r.kt)("li",{parentName:"ul"},"If you don't have one, click ",(0,r.kt)("strong",{parentName:"li"},"Create wallet")," to create a wallet."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Choose the folder for node"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is where Space Acres will store important data."),(0,r.kt)("li",{parentName:"ul"},"Pick a location with plenty of free space; is might be as simple as ",(0,r.kt)("strong",{parentName:"li"},"/Downloads"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Choose the folder for farming and size of the farm"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is where your ",(0,r.kt)("strong",{parentName:"li"},"plots")," (farming data) will be stored."),(0,r.kt)("li",{parentName:"ul"},"The size determines your probability of getting a reward on the Network. In most cases, larger plots (or larger farm size) will gain you more rewards."),(0,r.kt)("li",{parentName:"ul"},"If you prefer to have a few farms (e.g. you have some space space on different SSD drives), you can click on ",(0,r.kt)("strong",{parentName:"li"},"Add farm")," to pledge some additional storage space."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Advanced configuration (optional)"),":"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't worry about this unless you're an experienced user.")),(0,r.kt)("p",null,"For a comprehensive list of prerequisites and explanations, refer to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/farming-&-staking/farming/prerequisites.mdx"},"prerequisites guide"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"space-acres-setup-1",src:a(1044).Z,width:"802",height:"603"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Your screen may look slightly different depending on your operating system, but the basic information required will be the same.")),(0,r.kt)("h2",{id:"step-3-start-farming"},"Step 3: Start Farming"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'After entering your information, click "Start".'),(0,r.kt)("li",{parentName:"ol"},"Space Acres will now set up your node and connect to the Autonomys Network."),(0,r.kt)("li",{parentName:"ol"},"You'll see progress bars as it syncs data and creates your farm plots.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"space-acres-setup-2",src:a(5449).Z,width:"803",height:"603"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Once everything is ready, you'll see the main Space Acres dashboard where you can monitor your farming activity.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"space-acres-setup-3",src:a(4635).Z,width:"801",height:"604"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Initial syncing and plotting can take from a few hours to days, depending on your hardware, network speed and reliability and specified farm size.\nBelow are examples of the various stages you can expect.")),(0,r.kt)("p",null,"a. Cache Syncing"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"space-acres-setup-5",src:a(5664).Z,width:"802",height:"594"})),(0,r.kt)("p",null,"b. Initial Plotting"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"space-acres-setup-6",src:a(809).Z,width:"800",height:"600"})),(0,r.kt)("p",null,"c. Plotting Complete, now farming."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"space-acres-setup-6",src:a(192).Z,width:"800",height:"600"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Once syncing and plotting are complete, you\u2019ll notice a drop in CPU and RAM usage, and the dashboard will display your earned rewards and the estimated time until the next reward.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"space-acres-setup-7",src:a(192).Z,width:"800",height:"600"})),(0,r.kt)("p",null,"You can toggle the dashboard to view brief statistics or display all plotted sectors along with their status. The colour codes of sectors are explained below. By hovering over the icons on the right, you can check the number of missed challenges, your average auditing and proving performance, and other useful stats."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Happy farming!")),(0,r.kt)("h2",{id:"understanding-your-farm"},"Understanding Your Farm"),(0,r.kt)("p",null,"Your farm is made up of ",(0,r.kt)("strong",{parentName:"p"},"sectors")," that change color based on their status.\nFor your convenience, we've provided a table detailing the color codes associated with different sector statuses. This will enhance your insight into the activities and conditions of your plot."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Color Preview"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/727272/000000?text=+",alt:"#727272"})," #727272"),(0,r.kt)("td",{parentName:"tr",align:null},"Default state of a farm sector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plotted"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/9fc4ff/000000?text=+",alt:"#9fc4ff"})," #9fc4ff"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector is plotted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"About to Expire"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/ffd678/000000?text=+",alt:"#ffd678"})," #ffd678"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector is nearing expiration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expired"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/ff877c/000000?text=+",alt:"#ff877c"})," #ff877c"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector has expired")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Downloading"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/499249/000000?text=+",alt:"#499249"})," #499249"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector is in the process of downloading (animated)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Encoding"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/ff5365/000000?text=+",alt:"#ff5365"})," #ff5365"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector is encoding data (animated)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Writing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/9fc4ff/000000?text=+",alt:"#9fc4ff"})," #9fc4ff"),(0,r.kt)("td",{parentName:"tr",align:null},"Sector is writing data (animated)")))),(0,r.kt)("admonition",{title:"Learn More About Syncing, Plotting & Farming",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you would like to learn more about how the syncing, plotting and farming processes works on the Autonomys Network, please refer to our Autonomys Academy links below."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://academy.autonomys.xyz/subspace-protocol/network-architecture/networking-protocols#synchronization"},"Synchronization")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://academy.autonomys.xyz/subspace-protocol/consensus/proof-of-archival-storage/plotting"},"Plotting")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://academy.autonomys.xyz/subspace-protocol/consensus/proof-of-archival-storage/farming"},"Farming")," ",(0,r.kt)("br",null)))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you are facing any issues with the application, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search the ",(0,r.kt)("a",{parentName:"li",href:"https://forum.autonomys.xyz/c/support/5"},"Support Forum")," to see if your issue may have been solved. If it's a new one, feel free to create a new post!"),(0,r.kt)("li",{parentName:"ul"},"Use dedicated channels ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/864285291518361610/1062498655787028500"},"#farmer-support")," and ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/864285291518361610/1062507270539321485"},"#farmer-chat")," on our ",(0,r.kt)("a",{parentName:"li",href:"https://autonomys.xyz/discord"},"Discord")," for peer-to-peer support."),(0,r.kt)("li",{parentName:"ul"},"Raise an issue on our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/autonomys/space-acres/issues"},"GitHub"),".")))}A.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},5953:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mac-space-acres-setup-1-8e5b35ecb58be27e17347d0bec030ed5.png"},8331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-install-1-a2d0c144953adb2e5c3731817d8fa7bc.png"},9219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-install-2-c5ebf2149d00fb70f3199ef0eb7497cc.png"},9680:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-install-3-db1d0784062f29c76696ae0a2f12d175.png"},4413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-install-4-ae8b2951998c8a2bda3971f9c507395b.png"},8360:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-install-5-1a3a17b894024fdeca6075c0d1f0ac3f.png"},1044:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-setup-1-9d789bd9050ff94aa09eaff7865afc77.png"},5449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-setup-2-ea5f9f0882bbe24687f704a5e32ddc2f.png"},4635:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-setup-3-b610ffb8270afc73e3725b5f6f56924e.png"},5664:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-setup-5-fba8780eeb29eba215d708549f9f7b24.png"},809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-setup-6-40b2b10000f25647cd2ebebf5cf0f8a3.png"},192:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/space-acres-setup-7-3490cba2e75635efdea0006d06da9936.png"}}]);