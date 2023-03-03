"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[5169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"7. Metric Anomaly Detection",description:"This lab will walk you through how to send metric data into Watson AIOps Metric Anomaly Detection feature, how to train on the data, and how to identify anomalies",sidebar_position:7},r=void 0,s={unversionedId:"metric-management/mm-mad/index",id:"metric-management/mm-mad/index",title:"7. Metric Anomaly Detection",description:"This lab will walk you through how to send metric data into Watson AIOps Metric Anomaly Detection feature, how to train on the data, and how to identify anomalies",source:"@site/labs/metric-management/7-mm-mad/index.mdx",sourceDirName:"metric-management/7-mm-mad",slug:"/metric-management/mm-mad/",permalink:"/waiops-tech-jam/labs/metric-management/mm-mad/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/metric-management/7-mm-mad/index.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. Metric Anomaly Detection",description:"This lab will walk you through how to send metric data into Watson AIOps Metric Anomaly Detection feature, how to train on the data, and how to identify anomalies",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. REST Data Mediation",permalink:"/waiops-tech-jam/labs/metric-management/mm-mediating-rest/"},next:{title:"1. Introduction",permalink:"/waiops-tech-jam/labs/instana/introduction/"}},l={},c=[{value:"7.1: Introduction",id:"71-introduction",level:2},{value:"7.2: Verify the Watson AIOps AI Manager installation",id:"72-verify-the-watson-aiops-ai-manager-installation",level:2},{value:"7.3: Generating an API key",id:"73-generating-an-api-key",level:2},{value:"7.4: Sending training data to the Watson AIOps API",id:"74-sending-training-data-to-the-watson-aiops-api",level:2},{value:"7.5: Confirm that the training data was received",id:"75-confirm-that-the-training-data-was-received",level:2},{value:"7.6: Running the training job",id:"76-running-the-training-job",level:2},{value:"7.7: Sending anomalous data",id:"77-sending-anomalous-data",level:2},{value:"7.8: Viewing the results",id:"78-viewing-the-results",level:2},{value:"7.9: Lab summary",id:"79-lab-summary",level:2}],h={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"71-introduction"},"7.1: Introduction"),(0,i.kt)("p",null,"The Watson AIOps Metric Anomaly Detection feature is intended to be the\nreplacement for the VM-based Metric Manager. While it doesn't quite have feature\nparity with the VM based solution currently,"),(0,i.kt)("p",null,"Some of the items that the MAD component will improve on over the VM solution\nare:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Current GA release (3.4.1)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"High Availability"),(0,i.kt)("li",{parentName:"ul"},"Support multiple aggregation interval"),(0,i.kt)("li",{parentName:"ul"},"Runs on OpenShift"),(0,i.kt)("li",{parentName:"ul"},"Horizontally scalable"),(0,i.kt)("li",{parentName:"ul"},"Easy install"),(0,i.kt)("li",{parentName:"ul"},"Off-the-shelf Instana connector"),(0,i.kt)("li",{parentName:"ul"},"Seamless, modern user experience"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Future releases")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Multi-tenancy"),(0,i.kt)("li",{parentName:"ul"},"Data quality analysis",(0,i.kt)("br",null))))),(0,i.kt)("p",null,"Features that are currently missing in MAD vs. VM Metric Manager:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metric search (future enhancement)"),(0,i.kt)("li",{parentName:"ul"},"Anomaly search (future enhancement)",(0,i.kt)("br",null)," Current off-the-shelf\nmediators/integrations are incompatible (future enhancement)",(0,i.kt)("br",null))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is possible to install MAD in either Watson AIOps Event Manager deployment,\nor in Watson AIOps AI Manager deployment. We went with AI Manager to give you\nexposure to that installation and to allow you to familiarize yourselves with\nthe UI.")),(0,i.kt)("h2",{id:"72-verify-the-watson-aiops-ai-manager-installation"},"7.2: Verify the Watson AIOps AI Manager installation"),(0,i.kt)("p",null,"At the beginning of the day, you started an install of Watson AIOps AI Manager.\nIn general, a deployment of AI Manager runs around 90 minutes or so. Before we\nproceed with these labs, we will verify that the AI Manager install completed\nsuccessfully."),(0,i.kt)("p",null,"Open a shell on your control node, switch context to your 'AIOps' environment,\nthen verify that your AI Manager installation has completed successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'oc project cp4waiops\noc get installations.orchestrator.aiops.ibm.com -A && echo "" && oc get ircore,AIOpsAnalyticsOrchestrator -A -o custom-columns="KIND:kind,NAMESPACE:metadata.namespace,NAME:metadata.name,STATUS:status.conditions[?(@.type==\\"Ready\\")].reason" && echo "" && oc get lifecycleservice -A -o custom-columns="KIND:kind,NAMESPACE:metadata.namespace,NAME:metadata.name,STATUS:status.conditions[?(@.type==\\"Lifecycle Service Ready\\")].reason" && echo "" && oc get BaseUI -A -o custom-columns="KIND:kind,NAMESPACE:metadata.namespace,NAME:metadata.name,STATUS:status.conditions[?(@.type==\\"Ready\\")].reason" && echo "" && oc get AIManager,aiopsedge,asm -A -o custom-columns="KIND:kind,NAMESPACE:metadata.namespace,NAME:metadata.name,STATUS:status.phase"\n')),(0,i.kt)("p",null,'The status of the components should be "Ready", and Completed, Configured, and\nOK for AIManager, AIOpsEdge, and ASM respectively:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54637).Z,width:"1508",height:"530"})),(0,i.kt)("h2",{id:"73-generating-an-api-key"},"7.3: Generating an API key"),(0,i.kt)("p",null,"For this lab we will be sending in metric data through the Watson AIOps REST\nAPI. Any interaction with the Watson AIOps API must be authenticated by either a\nbearer token or an API key. In this section, we will generate an API key that we\nwill use to send in our data."),(0,i.kt)("p",null,"First, we need to login to the Watson AIOps interface. To do that, we need to\nobtain the UI route (URL) for your Watson AIOps installation UI. Run the\nfollowing command and copy the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc get route -n cp4waiops cpd -o jsonpath='{.spec.host}'; echo\n")),(0,i.kt)("p",null,'Open up your browser on your laptop and paste the URL. You will be presented\nwith the main login screen. Click on "IBM provided credentials (admin only):'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(24577).Z,width:"659",height:"496"})),(0,i.kt)("p",null,"Obtain the password for the admin user by running the following command, and\ncopy the resulting output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin\\_password}' | base64 -d ; echo\n")),(0,i.kt)("p",null,"Login to the Cloud Pak as user 'admin', and paste the password in the Password\nfield:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8291).Z,width:"924",height:"764"})),(0,i.kt)("p",null,'Click "Maybe Later" if the "take a tour" window pops up. You will be presented\nwith the main Cloud Pak window. In the upper-right corner of this window you\nwill see a blue user circle, click on this circle, and select "Profile and\nsettings":'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(67538).Z,width:"1401",height:"796"})),(0,i.kt)("p",null,'In the admin user configuration interface, in the upper-right corner of the\nwindow you will see a link titled "API key". Select that link, and from the\ndrop-down click "Generate new key":'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77099).Z,width:"1503",height:"846"})," ",(0,i.kt)("img",{src:n(71308).Z,width:"1401",height:"654"})),(0,i.kt)("p",null,"Copy the key, and save it some place where you won't lose it. Note that once you\nclose this window, you will never be able to obtain that key again. So if you\nlose it, you will need to generate another key."),(0,i.kt)("p",null,"Return to the console on your control node and create a Basic Authentication\ntoken, which will be used to authenticate with the Metrics REST API. Save the\nBasic Authentication as an environment variable named ZENAPIKEY. Run the\nfollowing command, being sure to replace <YOUR API KEY",">"," with the api key you\ncopied in the previous step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'ZENAPIKEY=$(echo "admin:<YOUR API KEY>" |base64); echo $ZENAPIKEY\n')),(0,i.kt)("h2",{id:"74-sending-training-data-to-the-watson-aiops-api"},"7.4: Sending training data to the Watson AIOps API"),(0,i.kt)("p",null,"First we will obtain the training/display files we will use to demonstrate\ntraining/anomaly detection. SCP the following training and display files. Use\n\\<LAB PASSWORD",">"," as the password:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wget http://150.238.93.118/BookInfoJson-training-20220721-0000__20220804-0000.json\nwget http://150.238.93.118/BookInfoJson-display-20220804-0000__20220806-1200.json\n")),(0,i.kt)("p",null,"The metrics REST API is exposed via an OpenShift route. Obtain the route and\nstore it in an environment variable named 'METRICROUTE':"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export METRICROUTE=$(oc get route | grep ibm-nginx-svc | awk '{print $2}')\n")),(0,i.kt)("p",null,"Next, send in the training data to the Watson AIOps REST API using the following\ncurl POST command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -k -v -X POST \"https://${METRICROUTE}/aiops/api/app/metric-api/v1/metrics\" --header 'Content-Type: application/json' --header \"Authorization: ZenApiKey ${ZENAPIKEY}\" --header 'X-TenantID: cfd95b7e-3bc7-4006-a4a8-a73a79c71255' --data @BookInfoJson-training-20220721-0000\\_\\_20220804-0000.json\n")),(0,i.kt)("p",null,"The key response lines that you will see when the load is successful are:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"< HTTP/1.1 100 Continue")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"*"," We are completely uploaded and fine")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"*"," Mark bundle as not supporting multiuse")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"< HTTP/1.1 200 OK")),(0,i.kt)("p",null,"Followed by several lines summarizing the completed session."),(0,i.kt)("h2",{id:"75-confirm-that-the-training-data-was-received"},"7.5: Confirm that the training data was received"),(0,i.kt)("p",null,"Much like we saw in the on-prem Metric Manager, data that is send in via the\nREST interface is placed on a Kafka topic and inserted into a Cassandra\ndatabase. We can verify that our training data made it into Cassandra by logging\ninto the Cassandra pod, running cqlsh, and querying the tararam.dt_metric_value\ntable. The following steps describe this process."),(0,i.kt)("p",null,"First, obtain the Watson AIOps Cassandra password and place it into an\nenvironment variable called ",(0,i.kt)("strong",{parentName:"p"},"CASSANDRA_PASSWORD"),". This can be achieved with\nthe following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export CASSANDRA_PASSWORD=$(oc get secret aiops-topology-cassandra-auth-secret --template={{.data.password}} |base64 -d)\n")),(0,i.kt)("p",null,"Next, run cqlsh using 'oc exec' command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc exec -it aiops-topology-cassandra-0 -- /opt/ibm/cassandra/bin/cqlsh -u admin -p $CASSANDRA_PASSWORD --ssl\n")),(0,i.kt)("p",null,"If you describe keyspaces, you will see our tararam keyspace. Switch context to\nthat keyspace with the 'use tararam' command, and query the dt_metric_value\ntable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"describe keyspaces;\nuse tararam;\nselect * from dt_metric_value;\n")),(0,i.kt)("p",null,"You will see that, much like we saw with the on-prem REST service, we see our\nmetric data."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97335).Z,width:"1400",height:"306"})),(0,i.kt)("p",null,"You can also view the unique resource/metric combinations that are in the\ndataset by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"select * from md_metric_resource;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(43143).Z,width:"1400",height:"283"})),(0,i.kt)("p",null,"In the above output, you can see the unique metric/resource combinations that\nwere found within the data that we sent to the REST interface. The mr_id is the\nlink between the resource/metric combination, and the metric value in the\ndt_metric_value table."),(0,i.kt)("h2",{id:"76-running-the-training-job"},"7.6: Running the training job"),(0,i.kt)("p",null,"Now that we have data in the system, we can kick off a training job. Return to\nthe Watson AIOps interface in your browser, and from the main screen, click on\nAI model management:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(87665).Z,width:"1399",height:"779"})),(0,i.kt)("p",null,'In the next window, you\'ll see a tile for "Metric anomaly detection". Select\n"Set up training" from this tile:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(19203).Z,width:"932",height:"531"})),(0,i.kt)("p",null,'Click "Next" on the description page:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(21532).Z,width:"1401",height:"670"})),(0,i.kt)("p",null,'The next screen allows you to define a schedule for ongoing\nre-training/re-learning. In general, it is recommended that this be scheduled on\na daily basis, which is how the on-prem Metric Manager works as well. For our\npurposes though, we\'re going to manually train on the data, so you can leave\nthis Off for now. Click "Next"'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75159).Z,width:"1402",height:"698"})),(0,i.kt)("p",null,'The final screen explains where to find anomalies. Click "Done"'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(59493).Z,width:"1402",height:"710"})),(0,i.kt)("p",null,'Once your training configuration is complete, you will be brought back to the\nmodel management screen. Select the 3 icons at the top right of the Metric\nanomaly detection tile and select "Start training". This will kick off a\ntraining job, and Watson will ingest the training data, analyze and model the\ndata based on its behavior, and be ready to look for instances where future\nmetrics act contrary to the behavior learned in this training job:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(29190).Z,width:"928",height:"474"})),(0,i.kt)("p",null,"After a minute or two, training should complete and you should see the model\ndeployed:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52132).Z,width:"773",height:"442"})),(0,i.kt)("h2",{id:"77-sending-anomalous-data"},"7.7: Sending anomalous data"),(0,i.kt)("p",null,'We split the data into two parts to illustrate training and anomaly generation.\nIn this step, we will send our anomalous data in. This will be in the same\nmanner that we did for the training data\u2026 using curl. The following command will\nsend our "display" metric data into the REST API of MAD.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -k -v -X POST \"https://${METRICROUTE}/aiops/api/app/metric-api/v1/metrics\" --header 'Content-Type: application/json' --header \"Authorization: ZenApiKey ${ZENAPIKEY}\" --header 'X-TenantID: cfd95b7e-3bc7-4006-a4a8-a73a79c71255' --data @BookInfoJson-display-20220804-0000\\_\\_20220806-1200.json\n")),(0,i.kt)("h2",{id:"78-viewing-the-results"},"7.8: Viewing the results"),(0,i.kt)("p",null,'To view the results of our analysis, return to the Watson AIOps interface, and\nfrom the main menu click on "Stories and Alerts".'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97262).Z,width:"1403",height:"790"})),(0,i.kt)("p",null,"Click on the Alerts tab to see our anomalies:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(53461).Z,width:"1388",height:"361"})),(0,i.kt)("p",null,'Select the "Type" Field for the "ResponseTime" anomaly for the productpage-v1\nresource. Then, in the Alerts Details window on the right, click on "Metrics\nanomaly details".'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(84548).Z,width:"1641",height:"445"})),(0,i.kt)("p",null,"This will bring up a historical chart that shows the time leading up to the\nanomalous period, with the anomalous period displayed in a red shaded area:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86151).Z,width:"1078",height:"1131"})),(0,i.kt)("p",null,'To get an expanded view of this chart, click on the "View expanded chart" link\nbelow the chart. This will give you an expanded time period leading up to the\nanomaly, and also provide a list of any related alerts in the pane below, were\nthere any at the time. The Metric Anomaly Detection feature currently leverages\nCNEA temporal events to do its event correlation. Future versions of Metric\nAnomaly Detection will also be able to show multiple related metrics on the same\ngraph, whether the resources are related by temporal events, topology, or scope.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79737).Z,width:"1491",height:"779"})),(0,i.kt)("p",null,"Also note that it is clear where the training period has ended, and we have a\npersisted baseline that started on 8/4/2022. If you hover your mouse over the\ngraph, you can see the details of the time period and the actual value of the\nmetric for that specific time period. You can see three instances where the\nresponse time went anomalous for short periods of time, then at the very right\nof the graph, we see where it went anomalous for a long period of time."),(0,i.kt)("p",null,"Much like we saw with Metric Manager, in MAD you can zoom in on any time period\nby holding your left mouse button down and dragging it across the time period\nthat you want to zoom in:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93487).Z,width:"1403",height:"688"})),(0,i.kt)("p",null,"To return to the expanded page, click anywhere in the top mini histogram bar.\nYou will return to the expanded view."),(0,i.kt)("p",null,"Next, zoom in on the latest anomaly section to the right:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(94597).Z,width:"1402",height:"513"})),(0,i.kt)("p",null,'Hover your mouse over the beginning of the red box, and you can see this\nsituation started at 8/6/2022 at around 4:25 am., where the response time\nclearly started behaving contrary to the learned behavior. You can also see, on\nthe right, where the data set ends. In live ingestion, this would likely be\nindicative of the "current time", but in our case this is historical data and\nthat happens to be when the data set ends. Note the forecast of where that\nmetric is headed based on Watson\'s forecasting algorithm. By default, we plot 20\nintervals into the future\u2026 so if the data is 5 minute data, that would be 100\nminutes into the future. You will notice that the forecast gets wider and wider\nfarther into the future. This indicates that the further you go into the future,\nthe less confident Watson is in terms of where it will be.'),(0,i.kt)("p",null,"At the top of the histogram, you will see two black bars that let you move the\nstart/stop time of the graph. Move the left one by clicking on it and dragging\nit to the left to include the time period where we saw the other anomalies:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(89212).Z,width:"1505",height:"496"})),(0,i.kt)("p",null,"At the top of the graph, note the three dots. This will bring up a menu that\nallows you to export the data in the current graph. You can export the data in\nCSV format, or you can export the graph as an image in PNG or JPG format."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(26201).Z,width:"726",height:"828"})),(0,i.kt)("p",null,"You can also display the values in the current graph in a tabular view by\nclicking on the tabular view icon:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38429).Z,width:"1445",height:"1063"})),(0,i.kt)("p",null,'Finally, you can bring up any arbitrary day in the past by clicking on the\n"Date" drop-down. A calendar view will pop up allowing you to select a day to\nview the metric data for the current metric for that date:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41149).Z,width:"1447",height:"1061"})),(0,i.kt)("h2",{id:"79-lab-summary"},"7.9: Lab summary"),(0,i.kt)("p",null,"In this lab, you verified the installation of Watson AIOps, learned how to send\nmetric data into the Watson AIOps metric API, learned how to perform training,\nand viewed the results of the anomalies generated from the training model."),(0,i.kt)("p",null,"That concludes the labs for Metric Anomaly Detection, and Metric Management as a\nwhole for the Watson AIOps solution."))}d.isMDXComponent=!0},54637:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture1-4a5cb820f984d6c40cdaa2a3822ce9a2.png"},19203:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture10-16b2a332cc110d6f8b8114bb6dc96a36.png"},21532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture11-8b43219467aa177084a09fd1ee788ed1.png"},75159:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture12-438e363a6b7a9be3bf740351e3821f12.png"},59493:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture13-cd78818c40ac33ae0c20d481d0338af2.png"},29190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture14-23f090f6f6056f9ed84c43422cd0e0b3.png"},52132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture15-c9771f1cfb08bf8474a0e46ac9fdb001.png"},97262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture16-ce67f4021ae9324fc10ab719bb152e2e.png"},53461:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture17-1c680d45e71b8982ad13fd088be93463.png"},84548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture18-b57240c096627ee5b8c733a9666fffa8.png"},86151:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture19-4e58ee7965f81d040095881ab76b9844.png"},24577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture2-1ea2b00b9f67d903de30447b9598046d.png"},79737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture20-14d416259f945b88a2e94725ad3d6bab.png"},93487:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture21-ea9f0f49fda4e3448d3179aac9ff3b68.png"},94597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture22-7b7ca5cb91aef750aafc410f07aac6e2.png"},89212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture23-1d9f8fc9b645679c1f8dc681b6df9326.png"},26201:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture24-8f575d67455a60c4902f861509420156.png"},38429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture25-b862ed056d8abe6b0a315fea597519c7.png"},41149:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture26-6d0ab910d9696e47630e924cf004aedc.png"},8291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture3-4c5f0b185a0a17449b2e366145564428.png"},67538:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture4-90089382d66a6652762cbd54ccbed784.png"},77099:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture5-58bf12528691ccbf7f58f10eb7890472.png"},71308:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture6-cfb7145d8fd6d9eed6b5e6804beef2d7.png"},97335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture7-2867023078abe8c47aaf190c712ad0a1.png"},43143:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture8-ccb4ca47f87604b53f39134b6245fbe4.png"},87665:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Picture9-0f6b61f8075b550c31d7c4a8344a4793.png"}}]);