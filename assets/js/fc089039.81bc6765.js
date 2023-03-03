"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[2833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(l,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"5. Kubernetes Data Target",description:"Deployment of Kubeturbo",sidebar_position:5},i=void 0,p={unversionedId:"turbonomic/kubeturbo/index",id:"turbonomic/kubeturbo/index",title:"5. Kubernetes Data Target",description:"Deployment of Kubeturbo",source:"@site/labs/turbonomic/5-kubeturbo/index.mdx",sourceDirName:"turbonomic/5-kubeturbo",slug:"/turbonomic/kubeturbo/",permalink:"/testlab2/labs/turbonomic/kubeturbo/",draft:!1,editUrl:"https://github.com/service-management-unite/testlab2/tree/main/labs/turbonomic/5-kubeturbo/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Kubernetes Data Target",description:"Deployment of Kubeturbo",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Understanding the UI",permalink:"/testlab2/labs/turbonomic/ui/"},next:{title:"6. Configure Policies",permalink:"/testlab2/labs/turbonomic/policy/"}},l={},s=[{value:"5.1: Introduction",id:"51-introduction",level:2},{value:"5.2: Prerequisites",id:"52-prerequisites",level:2},{value:"5.3: Deploy the Operator",id:"53-deploy-the-operator",level:2},{value:"5.4: Configure Kubeturbo Instance",id:"54-configure-kubeturbo-instance",level:2},{value:"5.5: Validate Deployment",id:"55-validate-deployment",level:2},{value:"5.6: Summary",id:"56-summary",level:2}],m={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"51-introduction"},"5.1: Introduction"),(0,r.kt)("p",null,"Turbonomic ARM is generally agentless and pulls data from configured targets\nusing APIs."),(0,r.kt)("p",null,"The exception to this is the Kubernetes platform. Since Kubernetes is highly\ncomplex and dynamic environment, an agent component is deployed onto target\nKubernetes and OpenShift cluster which then send data to the Turbonomic ARM\nserver."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/turbonomic/kubeturbo/wiki"},"kubeturbo GitHub wiki"),"\ncontains a wealth of information about installation, configuration,\ntroubleshooting, and more."),(0,r.kt)("p",null,"The content of this section follows the recommended\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/turbonomic/kubeturbo/wiki/OpenShift-Operator-Hub-Details"},"OpenShift deployment"),"\nprocedure and provides contextual instruction in relation to the lab environment\nbeing built out within this site."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"52-prerequisites"},"5.2: Prerequisites"),(0,r.kt)("p",null,"The steps in this lab should be performed on the ",(0,r.kt)("strong",{parentName:"p"},"Application")," OpenShift\ncluster:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27799).Z,width:"1791",height:"1349"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your browser, navigate to your ",(0,r.kt)("strong",{parentName:"p"},"Application")," OpenShift console:"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find and open your OpenShift console from the\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/kubernetes/clusters?platformType=openshift"},"IBM Cloud clusters"),"\npage."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As a cluster administrator, create a project in the OCP cluster where\nKubeTurbo will be deployed:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"Home -> Projects")," and click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Create Project")," button."),(0,r.kt)("li",{parentName:"ol"},"Fill in details as below:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"kubeturbo-operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display Name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Operator Hub based deployment of kubeturbo")))),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," button.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/evat-pm/images/master/KOH-createProject.png?raw=true",alt:null})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"53-deploy-the-operator"},"5.3: Deploy the Operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Operators -> OperatorHub"),". Ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeturbo-operator")," project\nis selected in the dropdown.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeturbo")," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certified")," KubeTurbo operator:"),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not use Community edition.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9247).Z,width:"1246",height:"525"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Install")," button:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(62697).Z,width:"1268",height:"555"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select options as below:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"Update approval")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Manual"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic update is not recommended if you are not also automatically\nupdating the Turbonomic Server.")),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Install")," button.")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(84634).Z,width:"1217",height:"708"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Approve")," button when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manual approval required")," prompt\nappears:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(29957).Z,width:"1320",height:"570"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The operator will install and when it's ready you can view the operator\n(Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"View Operator"),") to create an instance, which will be your\nKubeTurbo agent (or probe) that will monitor and manage this cluster:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(28794).Z,width:"1322",height:"555"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"54-configure-kubeturbo-instance"},"5.4: Configure Kubeturbo Instance"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When viewing the deployed operator, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Create instance"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(85425).Z,width:"1328",height:"572"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To configure this instance click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML view")," option:"),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Refer to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/turbonomic/kubeturbo/wiki/OpenShift-Operator-Hub-Details#configure-a-kubeturbo-instance"},"Configure KubeTurbo Instance"),"\nfor more information on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form view")," option."),(0,r.kt)("p",{parentName:"admonition"},"For this lab, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML view")," option.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(15244).Z,width:"1313",height:"555"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace all the content in the YAML editor view with the YAML config below"),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"DO NOT CLICK CREATE YET!!"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kind: Kubeturbo\napiVersion: charts.helm.k8s.io/v1\nmetadata:\n  name: kubeturbo-release\n  namespace: kubeturbo-operator\nspec:\n  args:\n    sccsupport: '*'\n  image:\n    repository: registry.connect.redhat.com/turbonomic/kubeturbo\n    tag: <turbonomic server version>\n  restAPIConfig:\n    opsManagerPassword: <your turbonomic server password>\n    opsManagerUserName: <your turbonomic server username>\n  serverMeta:\n    turboServer: <your turbonomic server URL, please use the topology-processor URL>\n    version: <your turbonomic server version>\n  targetConfig:\n    targetName: <your cluster name>\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(65144).Z,width:"1282",height:"583"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, replace the text\n",(0,r.kt)("inlineCode",{parentName:"p"},"<your turbonomic server URL, please use the topology-processor URL>")," with\nthe actual turbonomic server URL:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How to get the Turbonomic Server URL:")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"AIops")," OpenShift cluster console, where turbonomic is\ninstalled ",(0,r.kt)("strong",{parentName:"p"},"in another browser tab"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(16819).Z,width:"1799",height:"1320"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Networking -> Routes"),", select the ",(0,r.kt)("inlineCode",{parentName:"p"},"turbonomic")," project and\ncopy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Location")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"topology-processor"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(93125).Z,width:"1211",height:"507"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to your YAML editor view in Step 3 earlier. Assign it as the\n",(0,r.kt)("inlineCode",{parentName:"p"},"turboServer")," value:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(21797).Z,width:"1217",height:"531"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, replace the text ",(0,r.kt)("inlineCode",{parentName:"p"},"<your turbonomic server version>")," with the actual\nturbonomic server version:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How to get the Turbonomic Server Version?")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to the ",(0,r.kt)("strong",{parentName:"p"},"AIops")," OpenShift cluster where turbonomic is installed:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(16819).Z,width:"1799",height:"1320"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Networking -> Routes"),", select the ",(0,r.kt)("inlineCode",{parentName:"p"},"turbonomic")," project and\ncopy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Location")," value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," route:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(65502).Z,width:"1213",height:"508"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It will bring up the Turbonomic UI page as below. Check the version listed\nat the bottom of the page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(24869).Z,width:"937",height:"642"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to your YAML editor view in Step 3 earlier. Assign the value to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"tag")," value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serverMeta")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," value")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(72591).Z,width:"1347",height:"582"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, replace the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"<your turbonomic server password>")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"<your turbonomic server username>")," with the credentials that you have used\nto log into the Turbonomic UI:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(82134).Z,width:"1358",height:"755"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then set a cluster name for the ",(0,r.kt)("inlineCode",{parentName:"p"},"targetName"),", e.g."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application-kubeturbo-cluster"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," button."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(45185).Z,width:"1347",height:"605"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you have applied your configuration you will see that you have created\nan instance, or custom resource, called ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeturbo-release"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(41124).Z,width:"1253",height:"550"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"55-validate-deployment"},"5.5: Validate Deployment"),(0,r.kt)("p",null,"You should now see two deployments and two running pods in the namespace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One is the operator"),(0,r.kt)("li",{parentName:"ul"},"The other is the Kubeturbo probe (release)")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On your ",(0,r.kt)("strong",{parentName:"p"},"Application")," OpenShift cluster, navigate to\n",(0,r.kt)("inlineCode",{parentName:"p"},"Workloads -> Deployment")," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeturbo-operator")," project:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/evat-pm/images/master/KOH-deployments.png?raw=true",alt:"Kubeturbo validate deployments"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Workloads -> Pods")," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeturbo-operator")," project:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/evat-pm/images/master/KOH-runningPods.png?raw=true",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeturbo-release")," pod."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(15219).Z,width:"1317",height:"571"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Logs")," to validate that the probe has successfully connected,\nregistered with the Turbo Server, and a full discovery has occurred:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(80098).Z,width:"1292",height:"562"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate the target in the Turbonomic Server UI"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to your Turbonomic Server UI -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Target Configuration")," and\nyou will see a new target listed with the name\n",(0,r.kt)("inlineCode",{parentName:"p"},"Kubernetes-<your cluster name>")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(65887).Z,width:"1201",height:"597"})))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"56-summary"},"5.6: Summary"),(0,r.kt)("p",null,"In this portion of the lab, you have learned how to install the KubeTurbo agent\nor probe in a target cluster, which communicates with the remote Turbonomic\nserver."),(0,r.kt)("p",null,"Navigate to the next section to configure a policy for your business\napplication."),(0,r.kt)("hr",null))}u.isMDXComponent=!0},27799:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arch-1-2592ca67901389efb3df6e464c32de4d.png"},16819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arch-2-2551701092908e72a51288307dd41892.png"},24869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/checkTurboVersion-77d369dc8a628af4ce3a3dfa21e1e9e2.png"},85425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-1-dd459ebbf823dbc597cdf44448be429d.png"},15244:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-2-e7e5346662f94fb3e6f4e49051de114a.png"},65144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-3-8e8a023a64ab9ff7fddc87ba21839bd4.png"},21797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-4-d7f82d74d867e44f507172672e22e4f2.png"},72591:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-5-d4f6cdfa80c29073ff88fc3a8ab84cc3.png"},82134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-6-96fbcab4bf3ac514de31c3c7697eca41.png"},45185:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-7-9dbc2a70b8c7b776fa8cb4603a7f556d.png"},41124:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboCreateInstance-8-1b731eb16e52666d52496da22bdc02f2.png"},62697:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboInstall-1-eda5e537ab86541f9042ae3f8840ea4e.png"},84634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboInstall-2-ed3740527746a3d452a217ebdbabbaf8.png"},29957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboInstall-3-b6ae686b0d74a2ef7dfb5ac0dc3dd039.png"},28794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeturboInstall-4-6433cf09b0c132bfdf92e3dcb0f7e645.png"},9247:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/searchKubeturboCertified-45a633de7e7e88d49810ae9889bca028.png"},65502:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/turboApiRoute-85360bb9c30cc24d24c774e59ce41705.png"},93125:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/turboTopologyProcessorRoute-510f45841d0aa1b5e20b435a15ef112b.png"},15219:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/validateDeployment-1-6cabf85744ed04316ffcaaf20961cf19.png"},80098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/validateDeployment-2-3bd079d92c710a27c0e2a599a86ff973.png"},65887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/validateDeployment-3-b5db46495f74fc03704692bab7810870.png"}}]);