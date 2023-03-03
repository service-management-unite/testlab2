"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[7913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"2. Turbonomic Server Installation",description:"Operator Based Installation of Turbonomic on OpenShift",sidebar_position:2},i=void 0,l={unversionedId:"turbonomic/installation/index",id:"turbonomic/installation/index",title:"2. Turbonomic Server Installation",description:"Operator Based Installation of Turbonomic on OpenShift",source:"@site/labs/turbonomic/2-installation/index.mdx",sourceDirName:"turbonomic/2-installation",slug:"/turbonomic/installation/",permalink:"/testlab2/labs/turbonomic/installation/",draft:!1,editUrl:"https://github.com/IBM/testlab2/tree/main/labs/turbonomic/2-installation/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Turbonomic Server Installation",description:"Operator Based Installation of Turbonomic on OpenShift",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Turbonomic ARM",permalink:"/testlab2/labs/turbonomic/introduction/"},next:{title:"3. App Data Target",permalink:"/testlab2/labs/turbonomic/integrate-instana/"}},p={},s=[{value:"2.1: Introduction",id:"21-introduction",level:2},{value:"2.2: Prerequisites",id:"22-prerequisites",level:2},{value:"2.3: Deploy the Operator",id:"23-deploy-the-operator",level:2},{value:"2.4: Configure the Turbonomic Instance: Custom Resource",id:"24-configure-the-turbonomic-instance-custom-resource",level:2},{value:"2.5: Launch the Turbonomic User interface",id:"25-launch-the-turbonomic-user-interface",level:2},{value:"2.6: License Configuration",id:"26-license-configuration",level:2},{value:"2.7: Summary",id:"27-summary",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"21-introduction"},"2.1: Introduction"),(0,o.kt)("p",null,"Installing Turbonomic platform in your OpenShift cluster:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(93923).Z,width:"1808",height:"1343"})),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/turbonomic/t8c-install/wiki"},"t8c-install")," repository\ncontains information about installation methods, sizing, architecture and more."),(0,o.kt)("p",null,"The instructions in this lab are streamlined and contextual versions of the\ninformation from the above repository, designed to get up and running quickly\nand build out a lab or demo environment in OpenShift running in IBM Cloud."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"22-prerequisites"},"2.2: Prerequisites"),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Perform this installation procedure from your ",(0,o.kt)("strong",{parentName:"p"},"control")," node as the ",(0,o.kt)("strong",{parentName:"p"},"jammer"),"\nuser.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login into the ",(0,o.kt)("strong",{parentName:"p"},"AIops")," OpenShift Console UI and get your login token:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"From the OpenShift console, click your username in the top-right."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("em",{parentName:"li"},"Copy login command")," menu item."),(0,o.kt)("li",{parentName:"ul"},"From the new tab that opens, copy the login command from the ",(0,o.kt)("strong",{parentName:"li"},"Log in with\nthis token")," section."),(0,o.kt)("li",{parentName:"ul"},"Paste the copied command into your SSH terminal on your control node and\npress enter to login.")),(0,o.kt)("p",{parentName:"li"},"Validate you are logged into the correct cluster - you should see ",(0,o.kt)("strong",{parentName:"p"},"6\nnodes"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get nodes\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From your command prompt, issue the following command to create the\nnamespace:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export NS=turbonomic\noc create namespace ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Turbonomic application will create PVs. To have the services access their\nPVs, we will use the UID value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sa.scc.uid-range")," of the project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export FSGROUP=$(\n    oc get ns ${NS} -o yaml | \\\n    grep uid-range | \\\n    awk '{print $2}' | \\\n    awk -F '/' '{print $1}'\n)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Custom Resource Definition (CRD) to allow Turbo operator to deploy\nall the necessary resources"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Kubernetes version 1.22 and higher (To check the Kubernetes version,\nyou can run ",(0,o.kt)("inlineCode",{parentName:"p"},"oc version")," command):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/config/crd/bases/charts.helm.k8s.io_xls.yaml\n")))))),(0,o.kt)("p",null,"You are now ready to deploy the operator"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"23-deploy-the-operator"},"2.3: Deploy the Operator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the operator service account:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/deploy/service_account.yaml -n ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the cluster role:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/deploy/cluster_role.yaml -n ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the role binding:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/deploy/cluster_role_binding.yaml -n ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the operator pod:"),(0,o.kt)("p",{parentName:"li"},"Go to your OpenShift Console UI, and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Operators -> OperatorHub"),". Ensure the ",(0,o.kt)("inlineCode",{parentName:"p"},"turbonomic")," project\nis selected in the dropdown. Search for ",(0,o.kt)("inlineCode",{parentName:"p"},"turbonomic platform")," and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Certified")," operator"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(57810).Z,width:"1340",height:"564"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Install")," button:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(14265).Z,width:"1323",height:"568"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select options as below:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure ",(0,o.kt)("inlineCode",{parentName:"li"},"Installed Namespace")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"turbonomic"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Install")," button.")))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(41622).Z,width:"1462",height:"721"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for the operator to become available (status = running with 1/1 ready).\nCheck the status using:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods -n ${NS} -w\n")),(0,o.kt)("p",{parentName:"li"},"Example output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME                           READY   STATUS    RESTARTS   AGE\nt8c-operator-fdd8b8c94-dhrt4   1/1     Running   0          72s\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C")," to exit the watch loop.")))),(0,o.kt)("p",null,"Next, we are going to configure the Turbonomic instance."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"24-configure-the-turbonomic-instance-custom-resource"},"2.4: Configure the Turbonomic Instance: Custom Resource"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the storage class:"),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The lab instructions assume you using\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/openshift?topic=openshift-getting-started"},"Red Hat OpenShift on IBM Cloud"),".\nFor other OpenShift environments, use ",(0,o.kt)("inlineCode",{parentName:"p"},"oc get storageclass")," to select a\nstorage class that is available in your environment.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export STORAGE_CLASS=ibmc-block-gold\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply a custom resource file to launch Turbonomic:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cat << EOF | oc -n ${NS} apply -f -\napiVersion: charts.helm.k8s.io/v1\nkind: Xl\nmetadata:\n  name: xl-release\n  namespace: ${NS}\nspec:\n  global:\n    customImageNames: false\n    repository: registry.connect.redhat.com/turbonomic\n    securityContext:\n      fsGroup: ${FSGROUP}\n    storageClassName: ${STORAGE_CLASS}\n    storageSelector: false\n    tag: 8.6.2\n  openshiftingress:\n    enabled: true\n  kubeturbo:\n    enabled: true\n  nginx:\n    httpsRedirect: false\n    nginxIsPrimaryIngress: false\n  nginxingress:\n    enabled: false\n  instana:\n    enabled: true\nEOF\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deployment will begin for all the Turbonomic pods. Depending on the\nenvironment, this may take some time to complete, anywhere from 5 to 20\nminutes. Use the command below to check the status of the deployment."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods -n ${NS} -w\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C")," to exit the watch loop.")),(0,o.kt)("p",{parentName:"li"},"Ensure all the pods:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"are in a ",(0,o.kt)("inlineCode",{parentName:"li"},"Running")," state (",(0,o.kt)("inlineCode",{parentName:"li"},"STATUS")," column) and"),(0,o.kt)("li",{parentName:"ul"},"show ",(0,o.kt)("inlineCode",{parentName:"li"},"1/1")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"READY")," column.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example output only (Do not copy and paste into your terminal):")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                   READY   STATUS    RESTARTS      AGE\naction-orchestrator-55bbb96fd8-bxv59   1/1     Running   2 (14m ago)   17m\napi-6d876bd5c8-ntpc9                   1/1     Running   0             17m\nauth-57d95cdc4f-7x7jq                  1/1     Running   0             17m\nclustermgr-5bff4bc746-9fvz4            1/1     Running   2 (14m ago)   17m\nconsul-6b979f7d9d-ncb9f                1/1     Running   0             17m\ncost-679689bcb8-9r8h7                  1/1     Running   2 (14m ago)   17m\ndb-5547b8bb9c-xjlk8                    1/1     Running   0             17m\ngroup-7c66b96cd6-jf69l                 1/1     Running   2 (14m ago)   17m\nhistory-75c89bdcdb-vcsv4               1/1     Running   2 (14m ago)   17m\nkafka-54b458c5ff-25tkp                 1/1     Running   0             17m\nkubeturbo-6b7568cbd-8gdqp              1/1     Running   0             17m\nmarket-784cd4f9fb-26879                1/1     Running   2 (14m ago)   17m\nplan-orchestrator-5fb588cdc6-wsz4l     1/1     Running   2 (14m ago)   17m\nrepository-85bb8b95c4-w85nv            1/1     Running   2 (14m ago)   17m\nrsyslog-64c7fb4467-qcj9v               1/1     Running   0             17m\nt8c-operator-fdd8b8c94-jwwj8           1/1     Running   0             18m\ntopology-processor-77f7f95c8-lmpzr     1/1     Running   0             17m\nui-6d4ff8787d-6zhm4                    1/1     Running   0             17m\nzookeeper-57658f68c6-6qdgb             1/1     Running   0             17m\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"25-launch-the-turbonomic-user-interface"},"2.5: Launch the Turbonomic User interface"),(0,o.kt)("p",null,"You are now ready to open a browser and login to the Turbonomic user interface."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the Turbonomic UI route after the deployment completes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get route -n ${NS} | grep api | awk '{print $2}'\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the Turbonomic UI in your browser using the URL retrieved from the\nprevious step.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The first time you log in to Turbonomic, you will be prompted to create a\npassword for the ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator")," user:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(36462).Z,width:"712",height:"491"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set this to something secure and memorable."),(0,o.kt)("li",{parentName:"ul"},"Save the password for future logins."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Account")," button.")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"26-license-configuration"},"2.6: License Configuration"),(0,o.kt)("p",null,"Once logged in, the setup wizard will prompt you to import the license key:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(66761).Z,width:"1257",height:"583"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If attending a scheduled Tech Jam, your lab proctors will provide you the\nlicense file."),(0,o.kt)("li",{parentName:"ul"},"If following these instructions offline outside a scheduled Tech Jam, the\nlicense file can be found within your downloaded software archive."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"LET'S GO")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"IMPORT LICENSE")," button and drag the license file provided by your\nlab proctors into ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter License")," box.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," button. You will see the page below if it's successful:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(77282).Z,width:"1870",height:"907"})))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"27-summary"},"2.7: Summary"),(0,o.kt)("p",null,"In this portion of the lab, you have learned how to install Turbonomic on\nOpenShift."),(0,o.kt)("p",null,"Navigate to the next section to integrate Instana for application performance\ndata ingestion and start assuring the performance of your critical business\napplications."),(0,o.kt)("hr",null))}c.isMDXComponent=!0},36462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firstTimeLogin-87a063250558224f1210565150a0aee9.png"},66761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/license1-3248d4903ba06b8ab1165915edd5b41f.png"},77282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/license2-682579e91e5348abf5042916e85d42d4.png"},93923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-1-f34ac551f2633da8406b37a2a5d03251.png"},57810:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/turbo-operator-1-472ea5a1af430e3f829fd4e828ef142c.png"},14265:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/turbo-operator-2-7fa58a373c42710253207dd211d4b09f.png"},41622:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/turbo-operator-3-56f7edcb7dfa1b5f3af836602c6726be.png"}}]);