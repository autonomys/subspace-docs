"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9140],{3173:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(4848),t=i(8453);const s={title:"Prerequisites",sidebar_position:1,description:"Prerequisites for Autonomys Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},o=void 0,a={id:"farming-&-staking/farming/prerequisites",title:"Prerequisites",description:"Prerequisites for Autonomys Farmer",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/farming/prerequisites.mdx",sourceDirName:"farming-&-staking/farming",slug:"/farming-&-staking/farming/prerequisites",permalink:"/ja/docs/farming-&-staking/farming/prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/prerequisites.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prerequisites",sidebar_position:1,description:"Prerequisites for Autonomys Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},sidebar:"tutorialSidebar",previous:{title:"Farming",permalink:"/ja/docs/category/farming"},next:{title:"Space Acres (Recommended)",permalink:"/ja/docs/category/space-acres-recommended"}},l={},d=[{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",level:3},{value:"Recommended Requirements",id:"recommended-requirements",level:3},{value:"Reference Hardware Details",id:"reference-hardware-details",level:4},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Crypto Wallet",id:"crypto-wallet",level:3},{value:"Networking Information",id:"networking-information",level:3},{value:"Storage",id:"storage",level:3},{value:"Linux File System Recommendations",id:"linux-file-system-recommendations",level:3},{value:"Dependencies",id:"dependencies",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"minimum-hardware-requirements",children:"Minimum Hardware Requirements"}),"\n",(0,r.jsxs)(n.admonition,{title:"Farming can be Network Intensive.",type:"danger",children:[(0,r.jsx)(n.p,{children:"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."}),(0,r.jsx)(n.p,{children:"This may impact your network usage so please check your network connection if you have a hard data limit."})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Hardware"}),(0,r.jsx)(n.th,{children:"Specs"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU"}),(0,r.jsx)(n.td,{children:"4 Core+"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"8GB+"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SWAP"}),(0,r.jsx)(n.td,{children:"4GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage (node)"}),(0,r.jsx)(n.td,{children:"100GB (SSD)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage (farm)"}),(0,r.jsx)(n.td,{children:"*See Note (SSD)"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The Autonomys Network is based on Proof of Archival Storage, as such your storage contribution will directly correlate to your block and vote rewards. In other words, the more space you contribute, the faster and more frequently you will earn rewards. While you can farm with as little as 100 GB, it is strongly recommended that you allocate as much space as possible to maximize reward potential. For insights on how this choice impacts our network's consensus mechanism and your potential rewards, see ",(0,r.jsx)(n.a,{href:"https://academy.autonomys.xyz/subspace-protocol/consensus",children:"this guide"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Nodes meeting these ",(0,r.jsx)(n.strong,{children:"minimum requirements"})," should be able to farm and sync with the network under typical conditions. However, ",(0,r.jsx)(n.strong,{children:"performance may degrade if the network experiences heavy load, such as blocks filled with a high number of transactions"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"recommended-requirements",children:"Recommended Requirements"}),"\n",(0,r.jsx)(n.p,{children:"To handle increased network demands and maintain optimal performance, we recommend the following hardware specifications:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Hardware"}),(0,r.jsx)(n.th,{children:"Specs"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU"}),(0,r.jsx)(n.td,{children:"Intel Core i7-6700 or equivalent"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU"}),(0,r.jsx)(n.td,{children:"4 Core+"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"16GB+"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage (node)"}),(0,r.jsx)(n.td,{children:"256GB (SSD)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Network"}),(0,r.jsx)(n.td,{children:"Reliable broadband internet connection with low latency"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"reference-hardware-details",children:"Reference Hardware Details"}),"\n",(0,r.jsx)(n.p,{children:"Our benchmarking tests were conducted using the Intel Core i7-6700 CPU. We have calibrated the transaction weights so that a full block cannot contain more transactions than this CPU can execute within the 2-second block execution time limit. This ensures that nodes running on hardware equivalent to or better than the Intel Core i7-6700 can process blocks at full capacity without performance issues."}),"\n",(0,r.jsxs)(n.p,{children:["While farmers with hardware below the referenced hardware ",(0,r.jsx)(n.strong,{children:"may operate successfully under most conditions"}),", they ",(0,r.jsx)(n.strong,{children:"might experience difficulties during peak network activity"}),". If blocks become consistently full of transactions, nodes with lower specifications may struggle to keep up, ",(0,r.jsx)(n.strong,{children:"potentially affecting farming performance and rewards"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed CPU information and benchmarking results, please refer to our ",(0,r.jsx)(n.a,{href:"https://gist.github.com/DaMandal0rian/21a01da49ee820c3e59bce7f8c2d0166",children:"GitHub repository"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,r.jsxs)(n.p,{children:["For a secure farming setup, ensure your system is updated, use a secure wallet, configure firewalls properly, and follow network safety protocols. Detailed security practices are available on our ",(0,r.jsx)(n.a,{href:"../../learn/security",children:"Security Best Practices page"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"crypto-wallet",children:"Crypto Wallet"}),"\n",(0,r.jsx)(n.p,{children:"Before running anything you need to have a wallet where you'll receive testnet coins. There are currently two wallets we suggest using, SubWallet being the preferred route."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://subwallet.app/",children:"SubWallet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://polkadot.js.org/extension/",children:"PolkadotJS"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Install one of the two wallets above into your browser and create a new account there.\nThe address of your account will be necessary at the last step."}),"\n",(0,r.jsxs)(n.p,{children:["For help refer to our wallets section for ",(0,r.jsx)(n.a,{href:"../../category/wallets/",children:"Subwallet & Polkadot.js Wallet"})]}),"\n",(0,r.jsx)(n.h3,{id:"networking-information",children:"Networking Information"}),"\n",(0,r.jsxs)(n.p,{children:["For comprehensive details on network configurations, port management, firewall settings, and related networking requirements, please consult our dedicated ",(0,r.jsx)(n.a,{href:"../../farming-&-staking/farming/additional-guides/network-info.md",children:"Networking Guide"}),". This resource provides in-depth information to ensure seamless integration and optimal security of your network connections."]}),"\n",(0,r.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HDDs are not supported and will never be."})," We don't recommended trying to use smart caching, tiered storage or other ways to accelerate it, you'll be 100% disappointed and just waste your time."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"The node will require 100 GiB of good quality SSD"}),". Doesn't have to be anything amazing, but something mid-range from a reputable manufacturer with decent endurance is recommended."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"The farmer side can work with pretty much any SSD whatsoever that is not fake and not outright broken"}),", dedicating high quality high endurance SSD is pointless unless you already have it for reasons unrelated to Autonomys. Software writes to disk in near-perfect for SSD way, effectively doing write leveling if SSD is solely dedicated to farming."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RAID of any kind is pointless and can only harm performance and/or rewards."})," RAID0 will most likely make things slower rather than faster (application benefits from knowing underlying hardware topology). RAID1 or any other redundancy level is 100% pointless too since farms are stateless and can be removed if a disk breaks without losing data on other disks, it'll just make thing slower and reduce the effective capacity that can be used for farming, ",(0,r.jsx)(n.em,{children:"reducing farming rewards for literally no benefit in exchange"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"linux-file-system-recommendations",children:"Linux File System Recommendations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ext4"}),":  The recommended formatting command for drives dedicated solely to subspace is ",(0,r.jsx)(n.code,{children:"sudo mkfs.ext4 -m 0 -T largefile4 /path/to/dev"}),", as it maximizes usable space and the plot resizing functionality operates flawlessly. Previously recommended striping and chunk size parameters have not demonstrated any appreciable benefit or harm."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"XFS"}),":  No longer recommended as attempting to resize the plot (larger or smaller) with the drive nearly full (98%+) will render the plot unfarmable unless sufficient extra space can be freed up by means other than trying to shrink the plot (try deleting piece_cache.bin if this happens to you).  Full XFS disk utilization can only be achieved during the plot's initial creation, and will still yield less usable space than the ext4 recommendation above."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CoW Filesystems"}),": Avoid using Copy-on-Write (CoW) file systems (like ReFS, BTRFS, ZFS, bcachefs, HAMMER) with Subspace. If using BTRFS, disable CoW using ",(0,r.jsx)(n.code,{children:"sudo chattr +C path/to/data/dir"})," before starting Subspace. This applies only to newly created files. Alternatively, use a non-CoW filesystem like ext4 as recommended above."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RAID"}),":  Avoid redundancy setups (RAID1/5/6, RAIDZ) for filesystems with plots. The subspace farmer uses checksums for data integrity and can often recover corrupted blocks. Use ",(0,r.jsx)(n.code,{children:"scrub"})," for maintenance.  RAID0 accomplishes little more than to put more of your plots at risk in case of a drive failure."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SWAP"}),": A swap file is necessary only if your system has a low amount of RAM."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"System Adjustments",type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"File Descriptor Limit"}),": Linux has a hard limit of 100k file descriptors. Exceeding this may cause errors. Substrate has a default limit of 10k. Check and adjust the limit at ",(0,r.jsx)(n.code,{children:"/proc/sys/fs/file-max"}),". Refer to this ",(0,r.jsx)(n.a,{href:"https://www.tutorialspoint.com/increase-number-of-maximum-open-files-in-linux",children:"tutorial"})," for changing the limit."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dependencies"}),": If you encounter an error related to ",(0,r.jsx)(n.code,{children:"libgomp.so.1"}),", install the ",(0,r.jsx)(n.code,{children:"libgomp1"})," library with ",(0,r.jsx)(n.code,{children:"sudo apt-get install libgomp1"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(n.admonition,{title:"Windows No Output Bug",type:"caution",children:(0,r.jsxs)(n.p,{children:["If you face an error where the node outputs nothing and no error code is given it is likely you just need to install the latest Visual C++ Redistributable package ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170",children:"here"})]})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["Linux ",(0,r.jsx)(n.code,{children:"libcomp.so.1"})," error."]}),(0,r.jsxs)(n.p,{children:["If you encounter an error related to ",(0,r.jsx)(n.code,{children:"libgomp.so.1"}),", install the ",(0,r.jsx)(n.code,{children:"libgomp1"})," library with ",(0,r.jsx)(n.code,{children:"sudo apt-get install libgomp1"}),"."]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Linux File Descriptor Limit",type:"caution",children:(0,r.jsxs)(n.p,{children:["Linux has a hard limit of 100k file descriptors. Exceeding this may cause errors. Refer to our guide ",(0,r.jsx)(n.a,{href:"/ja/docs/farming-&-staking/farming/advanced-cli/cli-tips#changing-number-of-open-files-limit-linux",children:"here"})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);