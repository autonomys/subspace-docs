"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},i=void 0,l={unversionedId:"farming-&-staking/farming/advanced-cli/cli-troubleshooting",id:"version-latest/farming-&-staking/farming/advanced-cli/cli-troubleshooting",title:"Troubleshooting",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-troubleshooting",permalink:"/zh/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",tags:[],version:"latest",sidebarPosition:4,frontMatter:{title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/zh/docs/farming-&-staking/farming/advanced-cli/cli-tips"},next:{title:"Additional Guides",permalink:"/zh/docs/category/additional-guides"}},s={},u=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"\u64e6\u9664\u548c\u6e05\u9664",id:"\u64e6\u9664\u548c\u6e05\u9664",level:3},{value:"Docker \u64e6\u9664\u548c\u6e05\u9664",id:"docker-\u64e6\u9664\u548c\u6e05\u9664",level:3},{value:"*   Forums",id:"---forums",level:3},{value:"*   Discord",id:"---discord",level:3},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Common Problems",id:"common-problems",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,o.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list but we welcome contributions")),(0,o.kt)("h3",{id:"\u64e6\u9664\u548c\u6e05\u9664"},"\u64e6\u9664\u548c\u6e05\u9664"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4e4b\u524d\u6b63\u5728\u8fd0\u884c\u8282\u70b9\uff0c\u5e76\u5e0c\u671b\u5207\u6362\u5230\u65b0\u7684\u5feb\u7167\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u7136\u540e\u518d\u6b21\u9075\u5faa\u6307\u5bfc\u539f\u5219\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME wipe PATH_TO_FARM\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME purge-chain --chain gemini-3g\n")),(0,o.kt)("p",null,"\u65e0\u8bba Node/Farmer \u53ef\u6267\u884c\u6587\u4ef6\u662f\u4ee5\u524d\u7684\u8fd8\u662f\u6765\u81ea\u65b0\u7684\u5feb\u7167\uff0c\u4e24\u8005\u90fd\u53ef\u4ee5\u5de5\u4f5c\uff1a) \u6211\u4eec\u9700\u8981\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\uff0c\u6bcf\u6b21\u5feb\u7167\u66f4\u6539\u65f6\uff0c\u7f51\u7edc\u53ef\u80fd\u4f1a\u88ab\u5206\u533a\uff0c\u5e76\u4e14\u4f60\u53ef\u80fd\u5904\u4e8e\u4e0e\u5f53\u524d\u4e0d\u540c\u7684\u8d77\u6e90\u4e0a\u3002\u7b80\u5355\u5730\u8bf4\uff0c\u8fd9\u4e9b\u547d\u4ee4\u5c31\u50cf\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"reset"),' \u5feb\u7167\u66f4\u6539\u7684\u6309\u94ae\u3002\n\u8fd9\u4e9b\u547d\u4ee4\u5c31\u50cf\u4e00\u4e2a"\u91cd\u7f6e"\u6309\u94ae\u6765\u8fdb\u884c\u5feb\u7167\u66f4\u6539\u3002'),(0,o.kt)("p",null,"\u73b0\u5728\u6309\u7167\u5b89\u88c5\u6307\u5357\u3002"),(0,o.kt)("h3",{id:"docker-\u64e6\u9664\u548c\u6e05\u9664"},"Docker \u64e6\u9664\u548c\u6e05\u9664"),(0,o.kt)("p",null,"In case of Docker setup run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose down -v")," (and manually delete custom directories if you have specified them)."),(0,o.kt)("p",null,"\u73b0\u5728\u6309\u7167\u5b89\u88c5\u6307\u5357\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5728\u8fd0\u884c\u5b50\u7a7a\u95f4\u7f51\u7edc\u7684\u8282\u70b9\u6216\u519c\u6c11\u65f6\u9047\u5230\u4e00\u4e9b\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u52a0\u5165\u6211\u4eec\u7684 Discord\uff0c\u6216\u8005\u66f4\u597d\u7684\u662f\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u7684\u8bba\u575b\u5e76\u67e5\u770b\u73b0\u6709\u95ee\u9898\uff0c\u6216\u8005\u5728\u9700\u8981\u65f6\u53d1\u5e03\u65b0\u95ee\u9898\uff01"),(0,o.kt)("h3",{id:"---forums"},"*   ",(0,o.kt)("a",{parentName:"h3",href:"https://forum.subspace.network"},"Forums")),(0,o.kt)("h3",{id:"---discord"},"*   ",(0,o.kt)("a",{parentName:"h3",href:"https://discord.gg/subspace-network"},"Discord")),(0,o.kt)("h3",{id:"enable-rust-backtrace"},"Enable Rust Backtrace"),(0,o.kt)("p",null,"When running the Subspace Network Farmer & Node, you might encounter an error message indicating the need for a Rust backtrace to diagnose issues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n")),(0,o.kt)("p",null,"This message suggests that Rust, the programming language used in Subspace Network Farmer & Node, has encountered a problem. By default, the backtrace is not displayed. To enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable and view detailed error information, use the following commands based on your operating system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows")," (PowerShell): Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"$Env:RUST_BACKTRACE=1")," in PowerShell and rerun the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS"),": Type ",(0,o.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")," in the terminal and rerun the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu"),": Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")," in the terminal and rerun the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u2699 Service (Linux)"),": For services, use ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl edit subspace-node")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl edit subspace-farmer"),", add ",(0,o.kt)("inlineCode",{parentName:"li"},"[Service]")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Environment=RUST_BACKTRACE=1")," between the warning comments, reload with ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl daemon-reload"),", and restart services using ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl restart subspace-{node,farmer}"),".")),(0,o.kt)("p",null,"By enabling ",(0,o.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE"),", you can obtain additional diagnostic information to help resolve any errors encountered during operation."),(0,o.kt)("h3",{id:"common-problems"},"Common Problems"),(0,o.kt)("p",null,"Looking for solutions to other common issues?"),(0,o.kt)("p",null,"Check out our Common Problems page. This resource covers a range of frequently encountered challenges, offering practical solutions to help you overcome them. Please note that while this page addresses many common issues, it is not an all-inclusive list. For issues not covered, you can visit our forums or Discord for additional support."))}p.isMDXComponent=!0}}]);