"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[1080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"3. App Data Target",description:"Get application performance data for business critical applications",sidebar_position:3},r=void 0,s={unversionedId:"turbonomic/integrate-instana/index",id:"turbonomic/integrate-instana/index",title:"3. App Data Target",description:"Get application performance data for business critical applications",source:"@site/labs/turbonomic/3-integrate-instana/index.mdx",sourceDirName:"turbonomic/3-integrate-instana",slug:"/turbonomic/integrate-instana/",permalink:"/testlab2/labs/turbonomic/integrate-instana/",draft:!1,editUrl:"https://github.com/IBM/testlab2/tree/main/labs/turbonomic/3-integrate-instana/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. App Data Target",description:"Get application performance data for business critical applications",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Turbonomic Server Installation",permalink:"/testlab2/labs/turbonomic/installation/"},next:{title:"4. Understanding the UI",permalink:"/testlab2/labs/turbonomic/ui/"}},p={},l=[{value:"3.1: Introduction",id:"31-introduction",level:2},{value:"3.2: Ingest application performance data from Instana",id:"32-ingest-application-performance-data-from-instana",level:2}],c={toc:l};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Prerequisite",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you have not already done so, please complete the\n",(0,i.kt)("a",{parentName:"p",href:"https://ibm.github.io/testlab2/labs/instana/introduction/"},"Instana")," labs\nfirst.")),(0,i.kt)("h2",{id:"31-introduction"},"3.1: Introduction"),(0,i.kt)("p",null,"Turbonomic Application Resource Management (ARM) is all about ensuring your\ncritical business applications are getting the resources they need, when they\nneed them, to proactively mitigate against SLO breaches and SLA violations."),(0,i.kt)("p",null,"To do this, Turbonomic ARM ingests data from your existing tools to begin the\nprocess of making recommendations and taking actions across your full stack,\nusing it's ",(0,i.kt)("strong",{parentName:"p"},"patented analytics engine"),"."),(0,i.kt)("admonition",{title:"Keyword Alert",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("strong",{parentName:"p"},"target")," is the term used for your existing solutions and accounts from\nwhich Turbonomic ARM will either pull data from, or integrate with to perform\nactions.")),(0,i.kt)("p",null,"Data ingestion is typically agentless and conducted via REST APIs (with the\nexception of Kubernetes - more on this in a later lab)."),(0,i.kt)("p",null,"For business critical applications, application performance monitoring (APM)\ndata is pulled from your existing APM solution(s)."),(0,i.kt)("p",null,"In this section, we are going to integrate Instana to get application\nperformance data for the Robot Shop application."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85362).Z,width:"1844",height:"1358"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"32-ingest-application-performance-data-from-instana"},"3.2: Ingest application performance data from Instana"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Instana console:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings -> Team Settings page -> API Tokens"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Add API Token")," to create an API key from Instana.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(24).Z,width:"1321",height:"588"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the create API token page, enter a name for your token, e.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Turbonomic API Token"),":")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the generated API token to be used in later steps:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("em",{parentName:"li"},"eye")," icon as in screen shot below. This will show the token."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("em",{parentName:"li"},"copy")," icon next to the token to actually copy the token:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Clicking the ",(0,i.kt)("em",{parentName:"li"},"eye")," icon alone does not copy the generated token, it just\nmakes it visible.")))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(25636).Z,width:"1325",height:"632"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then scroll down to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Permissions")," section to enable the following\npermissions:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Access to audit log"),(0,i.kt)("li",{parentName:"ul"},"Access to token and session timeout settings"),(0,i.kt)("li",{parentName:"ul"},"Access to license usage"),(0,i.kt)("li",{parentName:"ul"},"Access to on prem license usage"),(0,i.kt)("li",{parentName:"ul"},"Access to account and billing information"),(0,i.kt)("li",{parentName:"ul"},"Service & endpoint mapping")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(2775).Z,width:"1887",height:"862"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button. The API token is created."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(39465).Z,width:"1883",height:"795"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Turbonomic console, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings -> Target Configuration"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(67717).Z,width:"1363",height:"710"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"NEW TARGET")," button (top-right) and then select\n",(0,i.kt)("inlineCode",{parentName:"p"},"Applications and Databases"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(27439).Z,width:"1303",height:"647"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Instana"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(7438).Z,width:"1305",height:"632"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Instana hostname, API key (which you have created in Step 2 earlier),\nand proxy username set as ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator"),":"),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For ",(0,i.kt)("em",{parentName:"p"},"Instana hostname")," use the Instana server's IP address if using a\nprovisioned lab environment during a scheduled Tech Jam event."),(0,i.kt)("p",{parentName:"admonition"},"Normally, if your Instana server has a DNS resolvable name, you can use that.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(95198).Z,width:"1361",height:"681"})),(0,i.kt)("p",{parentName:"li"},"It can take some time for Turbonomic to discover and validate the target.\nOnce it is validated, you should see:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"target added",src:n(43649).Z,width:"1898",height:"1113"})),(0,i.kt)("p",{parentName:"li"},"After it is validated successfully, it will be displayed as a validated\ntarget in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Target Configurations"))," list in the Turbonomic console\nsettings."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(64597).Z,width:"1290",height:"615"})))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"33-summary"},"3.3: Summary"),(0,i.kt)("p",null,"In this portion of the lab, you have learned how to integrate your existing APM\ntools to give Turbonomic ARM a view of your critical business applications."),(0,i.kt)("p",null,"Navigate to the next section to start understanding the Turbonomic ARM user\ninterface."),(0,i.kt)("hr",null))}m.isMDXComponent=!0},24:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/addApiToken-7673649e709feaf7544e6fa458818ddd.png"},95198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/addInstanaTarget-d1bcae2b6a2c7f34e7eb24701ba45824.png"},25636:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apiToken1-b9416c8bd0fc883c7ded42155f1e2b95.png"},2775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apiToken2-e1bb11dee2c1bdc44c5e0be78ea7e520.png"},39465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apiToken3-16bad06e548903e1f707932459e7345e.png"},27439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/applicationAndDatabases-8816916e41775a6d184de79f530df092.png"},85362:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arch-1-99b8bb1eb94ef95445491ff61f7f3bb9.png"},43649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/instana-target-added-b23d70758dcc6d7a74337ed2d1bb97be.png"},7438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/instanaTarget-caee8d7b5652aeae2aaf0ef8b58ebe4e.png"},64597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/instanaValidatedTarget-8c4aecc5296e911499a8f059f714d244.png"},67717:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/targetConfiguration-16e876c35f1747d58313159b8af82836.png"}}]);