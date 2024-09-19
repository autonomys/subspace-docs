"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8756],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||s;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={title:"Space Acres UI Translation Guide",sidebar_position:2,description:"Translation Guide for the Space Acres UI",keywords:["Space Acres UI translation","Community","Autonomys","Translate","Localization"]},i=void 0,o={unversionedId:"farming-&-staking/farming/space-acres/translate_space_acres",id:"farming-&-staking/farming/space-acres/translate_space_acres",title:"Space Acres UI Translation Guide",description:"Translation Guide for the Space Acres UI",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/farming/space-acres/translate_space_acres.md",sourceDirName:"farming-&-staking/farming/space-acres",slug:"/farming-&-staking/farming/space-acres/translate_space_acres",permalink:"/ja/docs/farming-&-staking/farming/space-acres/translate_space_acres",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/space-acres/translate_space_acres.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Space Acres UI Translation Guide",sidebar_position:2,description:"Translation Guide for the Space Acres UI",keywords:["Space Acres UI translation","Community","Autonomys","Translate","Localization"]},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/ja/docs/farming-&-staking/farming/space-acres/space-acres-install"},next:{title:"Advanced CLI",permalink:"/ja/docs/category/advanced-cli"}},l={},p=[{value:"Supported Languages",id:"supported-languages",level:2},{value:"Translation Guide",id:"translation-guide",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Step by Step Tutorial",id:"step-by-step-tutorial",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,r.kt)("p",null,"Space Acres UI is already localized in several languages, making it easier for users across the globe to participate in farming on the Autonomys Network. Our goal is to ensure that as many people as possible can access and use the platform in their native language."),(0,r.kt)("p",null,"Currently, the Space Acres UI supports the following languages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"English"),(0,r.kt)("li",{parentName:"ul"},"German"),(0,r.kt)("li",{parentName:"ul"},"Spanish"),(0,r.kt)("li",{parentName:"ul"},"French"),(0,r.kt)("li",{parentName:"ul"},"Serbian"),(0,r.kt)("li",{parentName:"ul"},"Russian"),(0,r.kt)("li",{parentName:"ul"},"Chinese (Simplified)")),(0,r.kt)("p",null,"We are continuously working to expand this list. For the most up-to-date list of supported languages, please refer to the translations section of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/autonomys/space-acres/tree/main/res/translations"},"Space Acres repository"),". If you would like to contribute a translation to a language that is not yet supported, please follow the guidelines below."),(0,r.kt)("h2",{id:"translation-guide"},"Translation Guide"),(0,r.kt)("p",null,"Thank you for considering contributing to the Space Acres UI locallization! This guide is here to help you contribute to our goal of making farming on the Autonomys Network more accessible and inclusive by localizing or translating the user interface. The Autonomys Network is driven by a vision of a decentralized and equitable future, and we believe that overcoming language barriers is crucial to achieving this vision."),(0,r.kt)("h2",{id:"before-you-start"},"Before you start"),(0,r.kt)("p",null,"Space Acres has a lot of technical and Autonomys-related slang that ",(0,r.kt)("strong",{parentName:"p"},"will not be translated correctly")," via LLMs such as ",(0,r.kt)("strong",{parentName:"p"},"Chat GPT")," or translation services such as ",(0,r.kt)("strong",{parentName:"p"},"Google Translate"),". We kindly ask you to work to do all translations manually, since we can't really verify their correctness. We thank you for your understanding!"),(0,r.kt)("h2",{id:"step-by-step-tutorial"},"Step by Step Tutorial"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to your ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," account, or create a new account if you don't have one yet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Proceed to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/autonomys/space-acres/tree/main/res/translations"},"Space Acres translations folder")," in the Space Acres repository."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-1",src:a(3118).Z,width:"3020",height:"1558"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the language you're planning to translate the UI to ",(0,r.kt)("strong",{parentName:"p"},"has not been translated yet"),"!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add file")," and select ",(0,r.kt)("strong",{parentName:"p"},"Create new file"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-2",src:a(550).Z,width:"2386",height:"1152"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide the name of the file: it should start with the 2-character language code, plus the 2-character code of the region (optional) followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"/messages.ftl"),". You can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IETF_language_tag"},"IETF languages tag page")," to find out the language code."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-3",src:a(2612).Z,width:"2382",height:"1308"})),(0,r.kt)("p",{parentName:"li"},"For example, if you're planning to translate the Space Acres UI into the ",(0,r.kt)("strong",{parentName:"p"},"Russian language"),", you would put ",(0,r.kt)("inlineCode",{parentName:"p"},"ru/messages.ftl")," (or alternatively if you want to specify the region: ",(0,r.kt)("inlineCode",{parentName:"p"},"ru-RU/messages.ftl"),"). You will notice that as soon as you put the forward slash ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," after the 2-character language code, it will turn ",(0,r.kt)("strong",{parentName:"p"},"blue")," in the interface, indicating that your translation file will be correctly created in the appropriate folder."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-4",src:a(8092).Z,width:"2368",height:"1304"})),(0,r.kt)("p",{parentName:"li"},"Some other language-region pair examples:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uk-UA"),(0,r.kt)("li",{parentName:"ul"},"en-GB"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the content of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/autonomys/space-acres/blob/main/res/translations/en/messages.ftl"},"English Space Acres UI")," into the ",(0,r.kt)("strong",{parentName:"p"},"Edit window"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-5",src:a(430).Z,width:"2372",height:"1352"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start translating messages from the UI into the language of your choice! Please make sure to only translate the text that comes after the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," sign. Also, please ",(0,r.kt)("strong",{parentName:"p"},"don't translate")," any variables, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"{$chain_name}"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-6",src:a(6749).Z,width:"2368",height:"1342"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you finish translating the ",(0,r.kt)("strong",{parentName:"p"},"whole file"),", click on ",(0,r.kt)("strong",{parentName:"p"},"Commit changes..."),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-7",src:a(5815).Z,width:"2368",height:"1342"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see a new window appear!"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-8",src:a(5191).Z,width:"962",height:"1082"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adjust the commit message and the change description."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-9",src:a(8826).Z,width:"964",height:"1078"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Additionally, you could adjust the branch-name from the generic one to one that makes the most sense e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"add-your-language-support")," and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Propose changes"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-10",src:a(6181).Z,width:"972",height:"1084"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review your changes by scrolling down the page one last time and ensure that everything is translated correctly before submitting the changes."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-11",src:a(5882).Z,width:"3022",height:"1554"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-12",src:a(5468).Z,width:"3010",height:"1556"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit your changed by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Create pull request"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sa-translate-13",src:a(4887).Z,width:"2558",height:"1186"})),(0,r.kt)("p",{parentName:"li"},"Your translation submission is now complete and next steps are for the team to review before providing feedback and/or merging the pull request. Thanks for your help in bringing Space Acres to an even wider audience!"))))}m.isMDXComponent=!0},3118:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-1-742d99e385b90eb66286a2d0cc95180e.png"},6181:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-10-ad78061ca5a69aa1d89bffa1e147dbcf.png"},5882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-11-dd458be6fb4ca6653f7c37309e9a556e.png"},5468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-12-b5e637e03264339e4ea418a35680907d.png"},4887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-13-23ca92e4bb5460f9911964fc1b84dcc6.png"},550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-2-9b734468454b14341169225b9a6fe6fb.png"},2612:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-3-db67b9b757f9bbdbf1f89bf899fe4ff7.png"},8092:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-4-03ee23a8e1cf8ec014c928feaf48c46f.png"},430:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-5-821ca41416ff80eca4c2e26f4eab9596.png"},6749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-6-659765ffd8e3d6b32a49d6d54dd53410.png"},5815:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-7-98e650557e11c45e93f565393dbece13.png"},5191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-8-f549c1fe1a2d979da0de49311b990902.png"},8826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sa-translate-9-7ae5fa690fbb88f5c2b396e4554b96cb.png"}}]);