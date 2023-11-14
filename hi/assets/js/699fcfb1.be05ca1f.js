"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(y,s(s({ref:t},c),{},{components:r})):a.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(7462),n=r(7294),o=r(6010),s=r(2466),l=r(6550),i=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=y({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==l&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(w,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));r(4866),r(5162),r(9960),r(1207);const o={title:"Safety and Security",sidebar_position:2,description:"Security and Scam Prevention",keywords:["Security","Wallet","Password"]},s=void 0,l={unversionedId:"security",id:"security",title:"Safety and Security",description:"Security and Scam Prevention",source:"@site/i18n/hi/docusaurus-plugin-content-docs/current/security.md",sourceDirName:".",slug:"/security",permalink:"/hi/docs/pre-release/security",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/hi/docusaurus-plugin-content-docs/current/security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Safety and Security",sidebar_position:2,description:"Security and Scam Prevention",keywords:["Security","Wallet","Password"]},sidebar:"tutorialSidebar",previous:{title:"Timekeeping",permalink:"/hi/docs/pre-release/Farming & Staking/timekeeping"},next:{title:"Develop",permalink:"/hi/docs/pre-release/category/develop"}},i={},u=[{value:"Wallet security",id:"wallet-security",level:2},{value:"Use strong passwords",id:"use-strong-passwords",level:3},{value:"Use unique passwords",id:"use-unique-passwords",level:3},{value:"Use a password manager",id:"use-a-password-manager",level:3},{value:"Use a hardware wallet",id:"use-a-hardware-wallet",level:3},{value:"Community security",id:"community-security",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Navigating the internet and being part of a crypto project can be exciting! But it's crucial to use good security practices. This way, we can protect our digital community from cyber attacks, and enjoy our Subspace journey with peace of mind."),(0,n.kt)("h2",{id:"wallet-security"},"Wallet security"),(0,n.kt)("hr",null),(0,n.kt)("admonition",{title:"NEVER SHARE YOUR KEYS",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Under any circumstances, do not share your 12-word seed phrase or private keys.")),(0,n.kt)("h3",{id:"use-strong-passwords"},"Use strong passwords"),(0,n.kt)("admonition",{title:"MOST ACCOUNT HACKS HAPPEN BECAUSE OF WEAK OR STOLEN PASSWORDS",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to make your password long and mix letters, numbers, and special symbols.")),(0,n.kt)("p",null,'One of common hacking methods is called "dictionary attack". It happens when a password consists of common and related words.'),(0,n.kt)("p",null,"Weak password example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PickleRick!\n")),(0,n.kt)("p",null,"Strong password example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"hvDn@Hy#Gp5@jC*WH7\n")),(0,n.kt)("p",null,"Another way your password can get stolen is if you use information that can be found online or through social engineering (for example: your name, date of birth, or the city you live in)."),(0,n.kt)("p",null,"Here's how to make a strong password:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make it as long as the system allows."),(0,n.kt)("li",{parentName:"ul"},"Use both upper and lower case letters, numbers, and symbols."),(0,n.kt)("li",{parentName:"ul"},"Don't use personal information."),(0,n.kt)("li",{parentName:"ul"},"Avoid everyday words.")),(0,n.kt)("h3",{id:"use-unique-passwords"},"Use unique passwords"),(0,n.kt)("p",null,"Password leaks happen on various websites. Don't reuse any of your existing passwords for your wallet to increase the security of your assets."),(0,n.kt)("h3",{id:"use-a-password-manager"},"Use a password manager"),(0,n.kt)("p",null,"Using a password manager is a preferable way to keep your passwords."),(0,n.kt)("p",null,"Popular password managers offer the following services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Encrypted password storage"),(0,n.kt)("li",{parentName:"ul"},"Strong password generator for new sign-ups"),(0,n.kt)("li",{parentName:"ul"},"Alerts of data breaches"),(0,n.kt)("li",{parentName:"ul"},"Free tiers")),(0,n.kt)("p",null,"Example of a recommended password manager: ",(0,n.kt)("a",{parentName:"p",href:"https://bitwarden.com/"},"Bitwarden"),"."),(0,n.kt)("h3",{id:"use-a-hardware-wallet"},"Use a hardware wallet"),(0,n.kt)("p",null,"A hardware wallet is by far the most secure way to store your private keys. Unlike online exchanges and wallets, hardware wallets store keys offline and locally and drastically reduce the chance of being hacked."),(0,n.kt)("p",null,"The most popular hardware wallets are ",(0,n.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," and ",(0,n.kt)("a",{parentName:"p",href:"https://trezor.io/"},"Tresor"),"."),(0,n.kt)("h2",{id:"community-security"},"Community security"),(0,n.kt)("hr",null),(0,n.kt)("admonition",{title:"WE NEVER DM FIRST",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Remember: Subspace team members will never send you direct messages first. If that happens to you, ignore the message and block the sender.")),(0,n.kt)("p",null,"Do not click on any links on our forum, Discord, or Telegram if these links are not posted by one of team members. Scammers may easily change their malicious links to make them look like legit websites, so the easiest way to stay safe is to avoid such messages at all."))}d.isMDXComponent=!0},1207:(e,t,r)=>{r.d(t,{Z:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);