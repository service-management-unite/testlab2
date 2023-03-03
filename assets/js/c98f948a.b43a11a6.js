"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[5420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"1. Introduction",description:"Instana Lab",sidebar_position:1},a=void 0,l={unversionedId:"instana/introduction/index",id:"instana/introduction/index",title:"1. Introduction",description:"Instana Lab",source:"@site/labs/instana/1-introduction/index.mdx",sourceDirName:"instana/1-introduction",slug:"/instana/introduction/",permalink:"/testlab2/labs/instana/introduction/",draft:!1,editUrl:"https://github.com/service-management-unite/testlab2/tree/main/labs/instana/1-introduction/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Instana Lab",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"7. Metric Anomaly Detection",permalink:"/testlab2/labs/metric-management/mm-mad/"},next:{title:"2. Instana Server Installation",permalink:"/testlab2/labs/instana/server-installation/"}},s={},c=[{value:"Introduction",id:"introduction",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In the Instana portion of the Tech Jam lab, you will be going through several\nkey exercises in order to learn more about Instana. The lab should be executed\nin the numbered order that you see on the left side of the screen. Some of the\nsections have dependencies on the previous section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, you will be learning how to install a ",(0,i.kt)("strong",{parentName:"li"},"single server self-hosted"),"\ninstallation of the Instana Server"),(0,i.kt)("li",{parentName:"ul"},"Then, you will learn how to Install the Instana Agent into a variety of\nenvironments (OpenShift, Docker, and Linux server)"),(0,i.kt)("li",{parentName:"ul"},"You will next learn to install the ",(0,i.kt)("strong",{parentName:"li"},"Robot Shop")," application into an\nOpenShift cluster. This includes configuring Website Monitoring"),(0,i.kt)("li",{parentName:"ul"},"Next, you will learn how to setup the Monitoring sensors for ",(0,i.kt)("strong",{parentName:"li"},"IBM MQ")," and\n",(0,i.kt)("strong",{parentName:"li"},"IBM App Connect Enterprise ","(","ACE",")")),(0,i.kt)("li",{parentName:"ul"},"Once you have the applications instrumented with Instana sensors, you will go\nthrough a series of exercises to explore Instana's capabilities"),(0,i.kt)("li",{parentName:"ul"},"Finally, you will learn how to use some of Instana's Administrative\ncapabilities.")),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);