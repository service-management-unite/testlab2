"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[3519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"5. Monitoring IBM Middleware",description:"Configure the Quote of the Day Application and Install/Configure Monitoring",sidebar_position:5},r=void 0,s={unversionedId:"instana/ibm-middleware/index",id:"instana/ibm-middleware/index",title:"5. Monitoring IBM Middleware",description:"Configure the Quote of the Day Application and Install/Configure Monitoring",source:"@site/labs/instana/5-ibm-middleware/index.mdx",sourceDirName:"instana/5-ibm-middleware",slug:"/instana/ibm-middleware/",permalink:"/testlab2/labs/instana/ibm-middleware/",draft:!1,editUrl:"https://github.com/IBM/testlab2/tree/main/labs/instana/5-ibm-middleware/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Monitoring IBM Middleware",description:"Configure the Quote of the Day Application and Install/Configure Monitoring",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Install the Robot Shop Application",permalink:"/testlab2/labs/instana/robot-shop-installation/"},next:{title:"6. Explore Instana",permalink:"/testlab2/labs/instana/explore/"}},l={},p=[{value:"5.1: Introduction",id:"51-introduction",level:2},{value:"5.2: Configure Quote of the Day Application to use MQ &amp; ACE",id:"52-configure-quote-of-the-day-application-to-use-mq--ace",level:2},{value:"5.3: Configure ACE and MQ for Resource Monitoring",id:"53-configure-ace-and-mq-for-resource-monitoring",level:2},{value:"Verify the ACE configuration",id:"verify-the-ace-configuration",level:3},{value:"Verify the MQ configuration",id:"verify-the-mq-configuration",level:3},{value:"5.4: Configure ACE and MQ for Tracing",id:"54-configure-ace-and-mq-for-tracing",level:2},{value:"5.5: Configure the ACE and MQ Sensors",id:"55-configure-the-ace-and-mq-sensors",level:2},{value:"5.6: Further Configuration",id:"56-further-configuration",level:2},{value:"5.7: Summary",id:"57-summary",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"51-introduction"},"5.1: Introduction"),(0,o.kt)("p",null,"Positioning Instana at existing IBM customers often requires presenting Instana\nvalue proposition in context of other IBM middleware used by the client. In this\nsection, you will find guidance about configuring and using Instana with the\nfollowing IBM technologies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MQ"),(0,o.kt)("li",{parentName:"ul"},"App Connect Enterprise (ACE)")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"52-configure-quote-of-the-day-application-to-use-mq--ace"},"5.2: Configure Quote of the Day Application to use MQ & ACE"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},'"Quote of the Day"')," application has been installed for you on the\n",(0,o.kt)("strong",{parentName:"p"},"Application")," OpenShift cluster. For more information about the ",(0,o.kt)("strong",{parentName:"p"},"Quote of the\nDay")," application, you can go to this GitLab location:\n",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/quote-of-the-day/quote-of-the-day"},"https://gitlab.com/quote-of-the-day/quote-of-the-day")," (It is not necessary to go\nthere, but you might be interested in learning more about the application.)"),(0,o.kt)("p",null,"For the containerized portion of the application, some technologies are\nautomatically instrumented for monitoring. In addition, the load generation tool\nis continuously running transactions against the application."),(0,o.kt)("p",null,"Let's verify that things are running. Issue the ",(0,o.kt)("strong",{parentName:"p"},"oc get pods")," command against\nthe ",(0,o.kt)("strong",{parentName:"p"},"qotd")," namespace/project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods -n qotd\n")),(0,o.kt)("p",null,"You should see results similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(30171).Z,width:"632",height:"332"})),(0,o.kt)("p",null,"The next step is to modify the configuration of the Quote of the Day application\nso that it uses an external ACE and MQ server. By default, the engraving service\nruns as a cloud native call that doesn't really do anything. We want to modify\nthe configuration so that the engraving service makes a REST API call to ACE and\nACE subsequently calls MQ and puts a message on a queue."),(0,o.kt)("p",null,"You can do this by editing the deployment for the qotd-engraving."),(0,o.kt)("p",null,"Type the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc edit deployment qotd-engraving -n qotd\n")),(0,o.kt)("p",null,'This will open a "vi" session. Scroll down within the file to line 49. You\nshould see 3 lines of text like the following:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'- name: SUPPLY_CHAIN_URL\n- name: SUPPLY_CHAIN_SIMULATE\n  value: "true"\n')),(0,o.kt)("p",null,'You need to modify those lines to look like the following. You need to add a\n"value" parameter that contains the SUPPLY_CHAIN_URL for the ACE flow. The flow\nwithin the ACE server is\n',(0,o.kt)("strong",{parentName:"p"},'"http://',"<","acemq_ipaddress",">",':7081/supplychain/v1/order"'),". This is what you\nneed to use for the SUPPLY_CHAIN_URL value, but replace ",(0,o.kt)("strong",{parentName:"p"},"<acemq_ipaddress>"),"\nwith the IP address of your ACE/MQ server."),(0,o.kt)("p",null,'You\'ll also need to change the value for the SUPPLY_CHAIN_SIMULATE to "false" to\ndisable the simulation.'),(0,o.kt)("p",null,"When you are done, the lines should look like this:"),(0,o.kt)("admonition",{title:"Hint",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Replace ","<","acemq_ipaddress",">"," with the IP address for your ACEMQ server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'- name: SUPPLY_CHAIN_URL\n//highlight-next-line-emphasise\n  value: http://<acemq_ipaddress>:7081/supplychain/v1/order\n- name: SUPPLY_CHAIN_SIMULATE\n//highlight-next-line-emphasise\n  value: "false"\n')),(0,o.kt)("p",null,"Type ",(0,o.kt)("strong",{parentName:"p"},'":wq"')," to save your changes and exit the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},":wq\n")),(0,o.kt)("p",null,"As soon as you save your changes, OpenShift will automatically redeploy the\n",(0,o.kt)("strong",{parentName:"p"},'"qotd-engraving"')," pod with the updated configuration. To verify that the\nchanges were applied successfully, let's check the application UI."),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"oc get route -n qotd")," to get the route for the application. Then, in the\nbrowser, open this URL with http://route and click the \u201cOrder Engraving\u201d button.\nThen, click again the \u201cOrder Engraving\u201d button. If successful, you\u2019ll see \u201cOrder\nsuccessfully placed.\u201d"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22106).Z,width:"895",height:"468"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"53-configure-ace-and-mq-for-resource-monitoring"},"5.3: Configure ACE and MQ for Resource Monitoring"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This section is here for informational purposes. There are no steps to execute.")),(0,o.kt)("p",null,"This section of the lab will help you understand how IBM MQ and IBM App Connect\nEnterprise (ACE) need to be configured for monitoring. There are certain\nconfiguration settings within MQ and ACE that are required in order to get the\nmonitoring KPIs. The key KPI's that need to be enabled are Resource Stats and\nFlow Stats. The requirements are documented in the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/obi/223?topic=technologies-monitoring-app-connect-enterprise#monitoring-ibm-app-connect-enterprise"},"sensor configuration guide"),"\nthat is online. You'll see links to those guides further down in this document."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Typically, these steps are performed by the MQ and ACE admins, so you don't need\nto know the step by step procedure. But, you do need to tell the MQ/ACE admins\nwhat the monitoring requirements are.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"verify-the-ace-configuration"},"Verify the ACE configuration"),(0,o.kt)("p",null,'The "Resource Monitoring" KPIs are already enabled in most customer\nenvironments. But it is worth validating the configuration. For example, you can\nuse the ACE ',(0,o.kt)("inlineCode",{parentName:"p"},"mqsireportresourcestats")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mqsireportflowstats")," commands to view\nthe configuration for ACE."),(0,o.kt)("p",null,"Become root user on mqace node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -i\n")),(0,o.kt)("p",null,"To run the following commands you have to source the ",(0,o.kt)("inlineCode",{parentName:"p"},"mqsiprofile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},". /opt/ace-11.0.0.11/server/bin/mqsiprofile\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the commands listed, BK1 is the Integration Node name and would be different\nif the Integration Node had a different name")),(0,o.kt)("p",null,"Here are example commands that you can issue to see the ACE configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mqsireportresourcestats BK1 -e EG2\n")),(0,o.kt)("p",null,'You will see results similar to those shown below. Notice that the "state" is\nset to "true" indicating that ',(0,o.kt)("strong",{parentName:"p"},'"Resource Stats"')," are enabled."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(88751).Z,width:"549",height:"94"})),(0,o.kt)("p",null,'To see the configuration of the "flow" stats, issue the following command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mqsireportflowstats BK1 -s -e EG2\n")),(0,o.kt)("p",null,'You will see results similar to those shown below. Notice that the "state" is\n"active", and the outputFormat is "json". This indicates that the ',(0,o.kt)("strong",{parentName:"p"},'"Flow\nStats"')," are enabled. The product requires that the output format be set to json\nvs. XML."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(18934).Z,width:"1059",height:"94"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"verify-the-mq-configuration"},"Verify the MQ configuration"),(0,o.kt)("p",null,"There are fewer requirements for MQ. The sensor will work with the default\nsettings. However, you can have the sensor automatically use thresholds/Events\nthat are setup within the MQ server. If you want to use the built in MQ Events,\nthen you need to set ",(0,o.kt)("strong",{parentName:"p"},"CHLEV")," (Channel Events) and ",(0,o.kt)("strong",{parentName:"p"},"PERFMEV")," (Performance\nEvents) to ",(0,o.kt)("strong",{parentName:"p"},"ENABLED"),". To check those settings, you can issue the following\ncommands."),(0,o.kt)("p",null,"Become root user on mqace node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -i\n")),(0,o.kt)("p",null,"HINT: To run the following commands you have to source the ",(0,o.kt)("inlineCode",{parentName:"p"},"setmqenv")," and\nspecify the queue manager name (QM1):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},". /opt/mqm/bin/setmqenv -m QM1\n")),(0,o.kt)("p",null,"You first need to run the ",(0,o.kt)("strong",{parentName:"p"},'"runmqsc"')," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/mqm/bin/runmqsc QM1\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"runmqsc")," command won't prompt you with a cursor. That's okay. Just start\ntyping the commands."),(0,o.kt)("p",null,"Within the runmqsc command prompt you can issue other MQ commands. Type the\nfollowing commands:"),(0,o.kt)("p",null,"Then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"display QMGR PUBSUB CHLEV\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"display QMGR CLUSTER PERFMEV\n")),(0,o.kt)("p",null,"These commands will give outputs similar to what's shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33890).Z,width:"954",height:"390"})),(0,o.kt)("p",null,"In the output, you can see that the CHLEV (Channel Events) and PERFMEV\n(Performance Events) is set to disabled."),(0,o.kt)("p",null,"To enable run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ALTER QMGR CHLEV(ENABLED)\nALTER QMGR PERFMEV(ENABLED)\n")),(0,o.kt)("p",null,"Re-run the display command to verify that configuration was changed"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31012).Z,width:"954",height:"422"})),(0,o.kt)("p",null,"Type ",(0,o.kt)("strong",{parentName:"p"},'"quit"')," to exit the runmqsc command prompt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"quit\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"54-configure-ace-and-mq-for-tracing"},"5.4: Configure ACE and MQ for Tracing"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This section is here for informational purposes. There are no steps to execute.")),(0,o.kt)("p",null,'In addition to the "Resource Monitoring" KPIs, additional settings are required\nto enable Tracing within IBM MQ and ACE. It is important that you understand\nthis process since Tracing is typically not enabled by default in most IBM MQ\nand ACE environments. In this section, we\'ve documented the steps.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Typically, these steps are performed by the MQ and ACE admins, so you don't need\nto know the step by step procedure.")),(0,o.kt)("p",null,"This section is simply going to describe the process. The procedure is well\ndocumented within the Instana online documentation. You will find a ",(0,o.kt)("strong",{parentName:"p"},"Tracing"),"\nsection within the sensor documentation."),(0,o.kt)("p",null,"For ACE, you perform the following steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download a small TAR file from IBM Fix Central. There are links within the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/obi/223?topic=technologies-monitoring-app-connect-enterprise#tracing"},"Instana documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Extract the tar file into the ",(0,o.kt)("strong",{parentName:"li"},"/var/mqsi/shared-classes")," directory"),(0,o.kt)("li",{parentName:"ul"},"Stop the ACE server"),(0,o.kt)("li",{parentName:"ul"},'Run the following command to "Install" the ',(0,o.kt)("strong",{parentName:"li"},"User Exit"),":\n",(0,o.kt)("strong",{parentName:"li"},"mqsichangeflowuserexits BK1 -o -x /var/mqsi/shared-classes")),(0,o.kt)("li",{parentName:"ul"},"Start the ACE server"),(0,o.kt)("li",{parentName:"ul"},"Activate the ",(0,o.kt)("strong",{parentName:"li"},"User Exit")," by typing: ",(0,o.kt)("strong",{parentName:"li"},"mqsichangeflowuserexits BK1 -o -a\nACEOpenTracingUserExit"))),(0,o.kt)("p",null,"The MQ procedure is similar."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download a small TAR file from IBM Fix Central. There are links within the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/obi/223?topic=technologies-monitoring-mq#tracing"},"Instana documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Extract the tar file to ",(0,o.kt)("strong",{parentName:"li"},"/var/mqm/exits64")),(0,o.kt)("li",{parentName:"ul"},"Edit the ",(0,o.kt)("strong",{parentName:"li"},"/var/mqm/mqs.ini")," file"),(0,o.kt)("li",{parentName:"ul"},"Add a small section within the ",(0,o.kt)("strong",{parentName:"li"},"/var/mqm/mqs.ini")," file. The content can be\ncopied and pasted from the Instana documentation."),(0,o.kt)("li",{parentName:"ul"},"Restart the Queue Manager")),(0,o.kt)("p",null,"In the lab environment, these steps have already been performed. If you want,\nyou can examine the files and directories specified above."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Even though the TAR files for ACE and MQ look similar, they are unique for each\nmiddleware component.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"55-configure-the-ace-and-mq-sensors"},"5.5: Configure the ACE and MQ Sensors"),(0,o.kt)("p",null,"In this section, you will perform these commands as root on the ACE/MQ server."),(0,o.kt)("p",null,"From the control node, ssh to the ACE/MQ server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ssh jammer@mqace\n\n")),(0,o.kt)("p",null,"Then, use sudo to switch to the root user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -i\n\n")),(0,o.kt)("p",null,"After installing an Instana Agent, one of the first things you want to do is set\na Zone name. This allows you to organize your Agents to make them easier to\nfind. The Zones can also be used for custom queries, threshold distribution, and\nmore. In your case, set the Zone name to ",(0,o.kt)("strong",{parentName:"p"},"Quote of the Day")," or something\nmeaningful."),(0,o.kt)("p",null,"Change directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/instana/agent/etc/instana")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/instana/agent/etc/instana\n")),(0,o.kt)("p",null,"This is the main configuration directory for the Instana Agent and sensors.\nThere are few configuration files in the parent directory, but most of the\nimportant ones are here."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"com.instana.agent.main.sender.Backend.cfg")," file contains information on\nwhere the Agent is going to send the monitoring data. Back one directory, you'll\nsee a file ",(0,o.kt)("strong",{parentName:"p"},"/opt/instana/agent/etc/mvn-settings.xml")," that is used to configure\nthe use of an internal maven repository."),(0,o.kt)("p",null,"We are going to be editing the configuration.yaml file. This file contains all\nof the configuration settings for the sensors."),(0,o.kt)("p",null,"Take a backup before you actually edit the configuration.yaml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp configuration.yaml configuration.yaml.bak\n")),(0,o.kt)("p",null,'Edit configuration.yaml using either "vi" or use other editor like ',(0,o.kt)("inlineCode",{parentName:"p"},"nano")," if you\nprefer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"vi configuration.yaml\n")),(0,o.kt)("admonition",{title:"Important",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},'YAML files are very strict about indentation. Each line within the file must be\nindented by 0, 2, 4, 6, etc. spaces. Do not use tabs and do not indent by odd\nnumbers of characters. Make sure that all of the characters line up vertically\nwithin the text. If you see a line that is commented out and you need to\nuncomment it, just remove the single "#" character.')),(0,o.kt)("p",null,"Within the editor, scroll down to the section titled ",(0,o.kt)("strong",{parentName:"p"},'"IBM ACE"')),(0,o.kt)("p",null,"You will need to uncomment the required entries and change the parameters to\nmatch the ACE/MQ configuration on this server. If you read the description on\neach line, you'll see that some parameters are optional."),(0,o.kt)("p",null,"For more information about about the ACE configuration, view the online\ndocumentation found here:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/obi/current?topic=technologies-monitoring-app-connect-enterprise"},"link")),(0,o.kt)("p",null,"There are multiple options for configuring the sensor. The information shown\nmatches this particular environment. A few key possibilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If ACE is configured for MQTT, the configuration will be different than if ACE\nis configured to use MQ."),(0,o.kt)("li",{parentName:"ul"},"The configuration will be different if you are doing remote monitoring vs.\nlocal."),(0,o.kt)("li",{parentName:"ul"},"Pay careful attention to the required vs. optional parameters. For example, in\nsome environments the MQ Channel Authentication is disabled and you don't need\nto specify credentials.")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("strong",{parentName:"p"},"IBM ACE")," section of the file so that it looks like this. If you\nwant, you can copy this text and replace the entire section. Or, you can change\nthe individual parameters."),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When you paste this information, you must ",(0,o.kt)("strong",{parentName:"p"},"replace <mqm password",">"," with the\npassword provided by the lab proctor"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# IBM ACE\ncom.instana.plugin.ace:\n  enabled: true\n  poll_rate: 20\n  NodesOrServers: # Multiple Integration node instances or multiple standalone Integration Servers can be specified\n    BK1: # specify the Integration node/server name (required)\n      restApiPort: "4414" # ACE rest api port (required)\n      mqport: "1414" # Sets the port for remote administration IBM MQ channel port or the MQTT server port (required)\n      queuemanagerName: "QM1" # Queue Manager name (required for IBM MQ)\n      channel: "ACE.SVRCONN" # Remote administration channel (required for IBM MQ)\n      mqUsername: "mqm" # MQ channel authentication\'s username if security enabled (optional for IBM MQ)\n      mqPassword: "<mqm password>" # MQ channel authentication\'s password if security enabled (optional for IBM MQ)\n')),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("strong",{parentName:"p"},"QM1")," is the Queue Manager name. ",(0,o.kt)("strong",{parentName:"p"},"BK1")," is the name of\nthe Integration Server. ",(0,o.kt)("strong",{parentName:"p"},"ACE.SVRCONN")," is the channel that the sensor will\nconnect to in order to query the performance KPIs. The username of ",(0,o.kt)("strong",{parentName:"p"},"mqm")," is\nthe admin username for MQ, but the sensor does not require administrative\npermissions. Any valid MQ user can be specified as long as it has permissions to\nconnect to the channel."),(0,o.kt)("p",null,'Next, you will need to edit the MQ sensor settings. Scroll further down in the\nfile until you find the section titled "IBM MQ". You will be editing this\nsection of the configuration to match the settings of the MQ server. There are a\nnumber of mandatory and optional parameters. For more information on the\nconfiguration settings, see the online documentation:\n',(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/obi/current?topic=technologies-monitoring-mq"},"link")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("strong",{parentName:"p"},"IBM MQ")," section of the file so that it looks like this. If you want,\nyou can copy this text and replace the entire section. Or, you can change the\nindividual parameters."),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When you paste this information, you must ",(0,o.kt)("strong",{parentName:"p"},"replace <mqm password",">"," with the\npassword provided by the lab proctor"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# IBM MQ\ncom.instana.plugin.ibmmq:\n  enabled: true\n  poll_rate: 5\n  queueManagers: # Multiple Queue Manager instances can be specified\n    QM1:\n      channel: "ACE.SVRCONN" # Remote administration channel\n      username: "mqm"\n      password: "<mqm password>"\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"56-further-configuration"},"5.6: Further Configuration"),(0,o.kt)("p",null,"First, let's change the ",(0,o.kt)("strong",{parentName:"p"},"Zone"),' name within the file. This is similar to the\nZone that you specified when installing the Docker and OpenShift monitoring\nAgents. Scroll down until you see the section titled "Hardware & Zone".\nUncomment the 3 lines of text starting with\n',(0,o.kt)("inlineCode",{parentName:"p"},"com.instana.plugin.generic.hardware"),'. By default the "availability-zone"\nparameter is set to "Datacenter A /Rack 42". Change the value to ',(0,o.kt)("strong",{parentName:"p"},"ACE and MQ")),(0,o.kt)("p",null,"The section of the configuration.yaml file should look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Hardware & Zone\ncom.instana.plugin.generic.hardware:\n  enabled: true # disabled by default\n  availability-zone: "ACE and MQ"\n')),(0,o.kt)("p",null,"In addition to configuring the ",(0,o.kt)("strong",{parentName:"p"},"Zone")," name, you can specify tags within the\nconfiguration.yaml file. Search for the section within the configuration.yaml\nfile titled ",(0,o.kt)("strong",{parentName:"p"},"Host"),". Within that section, you see a section for tags. By\ndefault this section will be commented out. Uncomment the\n",(0,o.kt)("strong",{parentName:"p"},"com.instana.plugin.host")," section and specify some tags. For example, add a\n",(0,o.kt)("strong",{parentName:"p"},"production")," tag to indicate that this system is a production server. And, add\na ",(0,o.kt)("strong",{parentName:"p"},"QOTD")," tag to indicate that it supports the ",(0,o.kt)("strong",{parentName:"p"},"Quote of the Day"),"\napplication. Add a ",(0,o.kt)("strong",{parentName:"p"},"Dallas")," tag to indicate the the server resides in Dallas,\nTexas."),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"production, QOTD, and Dallas")," as tags. The configuration.yaml section\nshould look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'com.instana.plugin.host:\n  tags:\n    - "production"\n    - "QOTD"\n    - "Dallas"\n')),(0,o.kt)("p",null,"It is possible to specify tags for the Docker and OpenShift versions of the\nInstana Agent, but we are not going to cover that in this lab."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Zones and Tags can be used for a number of purposes within instana:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Search for systems within the UI or via the APIs"),(0,o.kt)("li",{parentName:"ul"},"Assign thresholds to systems with a specific tag or zone name"),(0,o.kt)("li",{parentName:"ul"},"Build custom dashboards using the tags or zone names and more..."))),(0,o.kt)("p",null,"By default, Instana will monitor key processes that are related to the\napplications/middleware that are being monitored. It will also monitor processes\nthat are consuming large amounts of CPU or Memory. Sometimes, customers want to\nensure that specific processes are monitoring. Let's edit the configuration.yaml\nfile to specify some key processes on this ACE/MQ server. Search within the\nconfiguration.yaml file for ",(0,o.kt)("strong",{parentName:"p"},"com.instana.plugin.process")),(0,o.kt)("p",null,"The section will be commented out by default. Uncomment the section and specify\nthe following processes for monitoring ",(0,o.kt)("strong",{parentName:"p"},"(crond, amqzmgr0, runmqlsr)"),". One\nprocess is the cron daemon, which customers frequently want to monitor. The\nother two process are related to IBM MQ. The section should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'com.instana.plugin.process:\n  processes:\n    - "crond"\n    - "amqzmgr0"\n    - "runmqlsr"\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is also a section in the configuration.yaml file where you can specify\nprocesses that you want to ignore. Search for ",(0,o.kt)("strong",{parentName:"p"},"com.instana.ignore"),".")),(0,o.kt)("p",null,'Save and exit the configuration.yaml file. In "vi", type ":wq" to save and exit\nthe file.'),(0,o.kt)("p",null,"As soon as you save your changes to the file, Instana will detect those changes\nand will start to implement what you have configured."),(0,o.kt)("p",null,"At this point, we recommend that you navigate to next section of this tutorial\n",(0,o.kt)("strong",{parentName:"p"},"6 - Explore Instana"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2591).Z,width:"283",height:"308"})),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Explore Instana")," section, we'll begin by confirming that the ACE and\nMQ monitoring are working properly. If they are not, come back to this section\nand double check your configuration.yaml settings and check that there are no\nobvious errors in the log file."),(0,o.kt)("p",null,"The main install log file is /opt/instana/agent/data/log/agent.log"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"57-summary"},"5.7: Summary"),(0,o.kt)("p",null,"You learned how to configure the Instana sensor for IBM App Connect Enterprise\n(ACE) and IBM MQ. This includes customization such as defining tags, defining a\nzone, and identifying specific processes to monitor."),(0,o.kt)("p",null,"Now, proceed to section 6 where you will explore Instana."),(0,o.kt)("hr",null))}c.isMDXComponent=!0},33890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-05-27-14-45-36-27aae9b0bcef0688c4e30d01245c3161.png"},31012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-05-27-14-59-27-c4be3bac2c49e46be6f8fbef806b646b.png"},22106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-05-30-12-04-59-1c78f87007b36c599266a35be6797d8f.png"},2591:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exploreInstana_6-cd53276bd3d14838226cf932d74db075.png"},18934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flowstats-7e19066e02789328bd7475a7907ad30a.png"},30171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/qotdPods-eb113d838476551b1890b1eac85862e8.png"},88751:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/resourcestats-2c0b1391b9d4068da8560053093d6f63.png"}}]);