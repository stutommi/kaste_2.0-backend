(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(e,t,n){e.exports=n(468)},468:function(e,t,n){"use strict";n.r(t);var a=n(129),r=n(0),o=n.n(r),c=n(69),l=n.n(c),i=n(78),s=n(55),u=n(77),m=n(68),d=n(260),g=n(22),E=n(259),b=n(6),p={wsUrl:"wss://lit-forest-54340.herokuapp.com/graphql",httpUrl:"https://lit-forest-54340.herokuapp.com/graphql"},f=n(18),v=n(34),h=n.n(v),y=n(47),O=function(e,t){return e.map(function(e){return e.id}).includes(t.id)},k=function(e){var t=Object.values(e).reduce(function(e,t){return t.concat(e)}).filter(function(e){return""!==e.model});if(0===t.length)throw new Error("Sensors loading");return t},j=function(e,t){var n=JSON.parse(localStorage.getItem("kaste-user-token"));localStorage.removeItem("kaste-user-token");var r=Object(a.a)({},n,{sensorEndpoint:e});window.localStorage.setItem("kaste-user-token",JSON.stringify(r)),t(r)},w=n(23),C=n(24);function S(){var e=Object(w.a)(["\n  query SensorData($sensorEndpoint: String!) {\n  sensorData (sensorEndpoint: $sensorEndpoint){\n    value\n  }\n}\n"]);return S=function(){return e},e}var x=Object(C.a)(S()),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=Object(r.useState)(null),n=Object(f.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(null),l=Object(f.a)(c,2),s=l[0],u=l[1],m=Object(r.useState)(!1),d=Object(f.a)(m,2),g=d[0],E=d[1],b=Object(r.useState)(null),p=Object(f.a)(b,2),v=p[0],O=p[1],j=Object(r.useState)(null),w=Object(f.a)(j,2),C=w[0],S=w[1],A=Object(i.b)(),I=function(){var e=Object(y.a)(h.a.mark(function e(t){var n,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.query({query:x,variables:{sensorEndpoint:t},fetchPolicy:"no-cache"});case 3:n=e.sent,a=n.data,r=JSON.parse(a.sensorData.value),o(k(r.sensors)),u(r.actions),E(!0),O(null),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),E(!1),O(e.t0.message),setTimeout(function(){I(t)},2e3);case 17:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}();return[a,s,{startFetching:function(t){console.log("fetching..."),I(t);var n=setInterval(function(){console.log("fetching..."),I(t)},1e3*e);S(n)},stopFetching:function(){clearInterval(C),o(null),E(!1),u(null)}},g,v]},I=n(496),R=n(490),T=n(488),W=n(71),z=n(89),D=n.n(z),P=n(484),$=n(491),F=n(470),M=function(){var e=Object(i.b)();return function(t,n){e.mutate({mutation:n,variables:{sensorEndpoint:t}})}};function N(){var e=Object(w.a)(["\nmutation startWatering(\n  $sensorEndpoint: String!\n  ) {\n    startWatering(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    message\n  }\n}\n"]);return N=function(){return e},e}var U=Object(C.a)(N()),L=function(e){var t=e.actions,n=e.wateringConnected,a=e.setPage,c=Object(r.useState)(!1),l=Object(f.a)(c,2),i=l[0],s=l[1],u=Object(r.useState)(!1),m=Object(f.a)(u,2),d=m[0],g=m[1],E=M(),b=function(e,t){g(!0),console.log("Watering plants plants: ",e);try{s(!1),E(t,U),a("Video")}catch(n){console.error(n.message)}setTimeout(function(){g(!1),console.log("Watering completed")},1e3*e*60)};return o.a.createElement(P.a,{centered:!0,basic:!0,open:i,onClose:function(){return s(!1)},trigger:o.a.createElement(T.a.Item,{"data-cy":"water-button",onClick:function(){return s(!0)},disabled:!n||d},o.a.createElement(W.a,{name:"shower"}),"Water Plants"),style:{textAlign:"center"}},o.a.createElement(W.a,{name:"shower",size:"massive"}),o.a.createElement($.a,{content:"Choose watering duration:",icon:"clock"}),o.a.createElement(P.a.Actions,{style:{textAlign:"center",marginTop:15}},o.a.createElement(F.a.Group,null,o.a.createElement(F.a,{"data-cy":"modal-button-1min",color:"green",onClick:function(){return b(1,t.water.oneMin)}},"1 min"),o.a.createElement(F.a.Or,null),o.a.createElement(F.a,{"data-cy":"modal-button-5min",color:"green",onClick:function(){return b(5,t.water.fiveMin)}},"5 min"),o.a.createElement(F.a.Or,null),o.a.createElement(F.a,{"data-cy":"modal-button-10min",color:"green",onClick:function(){return b(10,t.water.tenMin)}},"10 min")),o.a.createElement(F.a,{"data-cy":"modal-button-cancel",color:"red",onClick:function(){return s(!1)},style:{marginTop:20}},"cancel")))};function q(){var e=Object(w.a)(["\nmutation stopWatering(\n  $sensorEndpoint: String!\n  ) {\n    stopWatering(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    message\n  }\n}\n"]);return q=function(){return e},e}var H=Object(C.a)(q()),B=function(e){var t=e.children,n=e.setPage,a=e.logOut,c=e.page,l=e.actions,i=e.token,s=(e.sensorService,Object(r.useState)(!1)),u=Object(f.a)(s,2),m=u[0],d=u[1],g=Object(r.useState)(!1),E=Object(f.a)(g,2),b=E[0],p=E[1],v=Object(r.useState)(!1),h=Object(f.a)(v,2),y=(h[0],h[1]),O=Object(r.useState)(!1),k=Object(f.a)(O,2),j=k[0],w=k[1],C=M(),S=function(e){return function(){d(!1),n(e)}};return Object(r.useEffect)(function(){l?(p(void 0!==l.camera),y(void 0!==l.reboot),w(void 0!==l.water)):(p(!1),y(!1),w(!1))},[l]),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{maxWidth:I.a.onlyMobile.maxWidth,as:R.a.Pushable,style:{height:"100vh"}},o.a.createElement(R.a,{as:T.a,animation:"push",inverted:!0,onHide:function(){return d(!1)},vertical:!0,visible:m,icon:"labeled",width:"thin"},i&&o.a.createElement(T.a.Header,{as:"small",style:{color:"white"}},o.a.createElement(W.a,{name:"user",color:"green"}),i.username),o.a.createElement(T.a.Item,{"data-cy":"sensors-button",onClick:S("Sensors")},o.a.createElement(W.a,{name:"info"}),"Sensors"),o.a.createElement(T.a.Item,{"data-cy":"chat-button",onClick:S("Chat")},o.a.createElement(W.a,{name:"comments outline"}),"Chat"),o.a.createElement(T.a.Item,{"data-cy":"settings-button",onClick:S("Settings")},o.a.createElement(W.a,{name:"settings"}),"Settings"),o.a.createElement(T.a.Item,{"data-cy":"about-button",onClick:S("About")},o.a.createElement(W.a,{name:"question"}),"About"),o.a.createElement(T.a.Item,{"data-cy":"livefeed-button",disabled:!b,onClick:S("Video")},o.a.createElement(W.a,{name:"eye"}),"Live Feed"),o.a.createElement(L,{actions:l,wateringConnected:j,setPage:n}),o.a.createElement(T.a.Item,{"data-cy":"stop-button",disabled:!j,onClick:function(){d(!1),C(l.water.waterstop,H)}},o.a.createElement(W.a,{name:"stop circle"}),"Stop Watering")),o.a.createElement(R.a.Pusher,{style:{height:"100%"},dimmed:m},o.a.createElement(T.a,{widths:3,inverted:!0,pointing:!0,color:"green",size:"large",style:{height:"50px",marginBottom:0,borderRadius:0}},o.a.createElement(T.a.Item,{onClick:function(){return d(!0)},style:{alignSelf:"center"}},o.a.createElement(W.a,{"data-cy":"sidebar-button",name:"sidebar"})),o.a.createElement(T.a.Item,{header:!0},c),o.a.createElement(T.a.Item,{position:"right",onClick:function(){return a()},style:{alignSelf:"center"}},o.a.createElement(W.a,{name:"log out"}))),o.a.createElement("div",{style:{height:"calc(100vh - 50px)"}},t))))},Y=function(e){var t=e.children,n=e.setPage,a=e.logOut,c=e.actions,l=e.token,i=(e.sensorService,Object(r.useState)(!1)),s=Object(f.a)(i,2),u=s[0],m=s[1],d=Object(r.useState)(!1),g=Object(f.a)(d,2),E=g[0],b=g[1],p=M(),v=function(e){return function(){n(e)}};return Object(r.useEffect)(function(){c?(m(void 0!==c.camera),b(void 0!==c.water)):(m(!1),b(!1))},[c]),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{style:{height:"100vh"},minWidth:I.a.onlyTablet.minWidth},o.a.createElement(T.a,{style:{height:71},inverted:!0,icon:"labeled",color:"green",fixed:"top"},o.a.createElement(T.a.Item,{"data-cy":"sensors-button",onClick:v("Sensors")},o.a.createElement(W.a,{name:"info"}),"Sensors"),o.a.createElement(T.a.Item,{"data-cy":"chat-button",onClick:v("Chat")},o.a.createElement(W.a,{name:"comments outline"}),"Chat"),o.a.createElement(L,{actions:c,wateringConnected:E,setPage:n}),o.a.createElement(T.a.Item,{"data-cy":"stop-button",disabled:!E,onClick:function(){p(c.water.waterstop,H)}},o.a.createElement(W.a,{name:"stop circle"}),"Stop Watering"),o.a.createElement(T.a.Item,{"data-cy":"livefeed-button",disabled:!u,onClick:v("Video")},o.a.createElement(W.a,{name:"eye"}),"Live Feed"),o.a.createElement(T.a.Menu,{position:"right"},l&&o.a.createElement(T.a.Header,{as:"p",style:{color:"white",alignSelf:"center",margin:"0 10px 0"}},o.a.createElement(W.a,{name:"user"}),l.username," ",o.a.createElement("br",null),"logged in"),o.a.createElement(T.a.Item,{"data-cy":"settings-button",onClick:v("Settings")},o.a.createElement(W.a,{name:"settings"}),"Settings"),o.a.createElement(T.a.Item,{"data-cy":"about-button",onClick:v("About")},o.a.createElement(W.a,{name:"question"}),"About"),o.a.createElement(T.a.Item,{"data-cy":"logout-button",onClick:function(){return a(!1)}},o.a.createElement(W.a,{name:"log out"}),"Log out"))),o.a.createElement("div",{style:{height:71}}),o.a.createElement("div",{style:{height:"calc(100vh - 71px)"}},t)))},_=function(e){var t=e.children,n=e.setPage,a=e.logOut,r=e.page,c=e.actions,l=e.token,i=e.sensorService;return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,{logOut:a,page:r,actions:c,setPage:n,token:l,sensorService:i},t),o.a.createElement(Y,{logOut:a,page:r,actions:c,setPage:n,token:l,sensorService:i},t))},J=n(493),V=n(483),K=n(495),Q=n(487),G=n(477);function X(){var e=Object(w.a)(["\nmutation loginUser(\n  $password: String!\n  $username: String!\n  ) {\n  login(\n    password: $password\n    username: $username\n  ) {\n    value\n    username\n    sensorEndpoint\n  }\n}\n"]);return X=function(){return e},e}var Z=Object(C.a)(X());function ee(){var e=Object(w.a)(["\n{\n  me {\n    name\n    username\n    id\n    sensorEndpoint\n  }\n}\n"]);return ee=function(){return e},e}var te=Object(C.a)(ee()),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(r.useState)(null),n=Object(f.a)(t,2),a=n[0],o=n[1];return[a,function(t){o(t),setTimeout(function(){o(null)},1e3*e)}]},ae=function(e){var t=e.setToken,n=Object(G.a)(Z),a=ne(),c=Object(f.a)(a,2),l=c[0],i=c[1],s=Object(r.useState)(""),u=Object(f.a)(s,2),m=u[0],d=u[1],g=Object(r.useState)(""),E=Object(f.a)(g,2),b=E[0],p=E[1],v=function(){var e=Object(y.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n({update:function(e,n){var a=n.data.login;t(a),localStorage.setItem("kaste-user-token",JSON.stringify(a))},variables:{username:m,password:b},refetchQueries:[{query:te}]});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),i(e.t0.graphQLErrors[0].message);case 8:case"end":return e.stop()}},e,null,[[0,5]])}));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"login-form"},o.a.createElement("style",null," ","\n  body > div,\n  body > div > div,\n  body > div > div > div.login-form {\n    height: 100%;\n  }\n          "),o.a.createElement(J.a,{textAlign:"center",style:{height:"100%",background:"lightgreen"},verticalAlign:"middle"},o.a.createElement(J.a.Column,{style:{maxWidth:250}},o.a.createElement($.a,{as:"h1",color:"grey",dividing:!0,textAlign:"center"},"Log in to Kaste 2.0"),o.a.createElement(V.a,{size:"large",onSubmit:v},o.a.createElement(K.a,{stacked:!0,raised:!0},o.a.createElement(V.a.Input,{"data-cy":"username",type:"text",value:m,onChange:function(e){var t=e.target;return d(t.value)},fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username"}),o.a.createElement(V.a.Input,{"data-cy":"password",type:"password",value:b,onChange:function(e){var t=e.target;return p(t.value)},fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password"}),o.a.createElement(F.a,{color:"brown",size:"large",type:"submit"},"Log in")),l&&o.a.createElement(Q.a,{negative:!0},l)))))},re=n(494),oe=n(479),ce=function(e){var t=e.inverted;return o.a.createElement(re.a,{inverted:t,active:!0},o.a.createElement(oe.a,{size:"massive"},"Loading"))},le=n(36),ie=n.n(le),se=function(e){var t=e.value,n=e.icon,a=e.iconColor,r=e.size;return o.a.createElement("div",null,o.a.createElement(W.a,{name:n,size:r,color:a||null}),o.a.createElement("span",{style:{fontSize:"".concat("big"===r?"28px":"11px"),verticalAlign:"middle"}},t))},ue=n(489),me=n(257);function de(){var e=Object(w.a)(["\n  query ChartData($id: Int!, $type: HousePlant!, $range: DayWeekMonthYear!) {\n  chartData(id: $id, type: $type, range: $range) {\n    time\n    light\n    nutrient\n    soilMoisture\n    temperatureC\n    humidity\n  }\n}\n"]);return de=function(){return e},e}var ge=Object(C.a)(de()),Ee={layout:{padding:{bottom:-20}},scales:{xAxes:[{ticks:{autoSkip:!0,maxTicksLimit:5}}],yAxes:[{ticks:{suggestedMin:0,max:100}}]}},be=function(e){var t=e.sensor,n=e.chartTimeRange,a=Object(ue.a)(ge,{variables:{id:t.id,type:t.type.toUpperCase(),range:n},fetchPolicy:"no-cache"});if(a.loading)return o.a.createElement("div",{style:{minHeight:"calc(89vw / 2)"}},o.a.createElement(ce,{inverted:!0}));if(0===Object.keys(a.data).length)return o.a.createElement(K.a,{color:"red",inverted:!0,secondary:!0},"Chart failed to load");var r=function(e){var t=e.chartData;return Object.keys(t).reduce(function(e,n){if("__typename"===n||null===t[n])return e;if("time"===n)return e.labels=t[n].map(function(e){return ie()()-e>864e5?ie.a.utc(e).local().format("ddd hA"):ie()(e).subtract(3,"hours").fromNow(!0)}),e;var a=function(e){switch(e){case"temperatureC":return"rgba(250, 64, 61, 0.7)";case"nutrient":return"rgba(250, 158, 61, 0.7)";case"light":return"rgba(246, 250, 61, 0.7)";case"humidity":case"soilMoisture":return"rgba(61, 152, 250, 0.7)"}};return e.datasets.push({label:n,fill:!1,lineTension:.1,backgroundColor:a(n),borderColor:a(n),borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:a(n),pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:a(n),pointHoverBorderColor:a(n),pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t[n]}),e},{labels:[],datasets:[]})}(a.data);return o.a.createElement(me.a,{data:r,options:Ee,legend:{display:!1}})},pe=function(e){var t=e.sensor,n=Object(r.useState)(!1),a=Object(f.a)(n,2),c=a[0],l=a[1],i=Object(r.useState)("DAY"),s=Object(f.a)(i,2),u=s[0],m=s[1];return o.a.createElement(K.a,{color:"green",inverted:!0,secondary:!0,style:{margin:"2px 1px"}},o.a.createElement($.a,{textAlign:"center",as:"h3"},o.a.createElement(W.a,{name:"leaf",size:"large"}),"Capsicum baccatum"),o.a.createElement(J.a,{textAlign:"center",columns:2},o.a.createElement(J.a.Row,null,o.a.createElement(J.a.Column,{color:t.soil_moisture<10?"yellow":null},o.a.createElement(se,{size:"big",value:t.soil_moisture+" %",label:"Soil moisture",icon:"theme",iconColor:"blue"})),o.a.createElement(J.a.Column,null,o.a.createElement(se,{size:"big",value:Math.floor(t.light)+" %",label:"Light",icon:"sun",iconColor:"yellow"}))),o.a.createElement(J.a.Row,null,o.a.createElement(J.a.Column,null,o.a.createElement(se,{size:"big",value:t.temperature_C+" \xbaC",label:"Temperature",icon:"thermometer",iconColor:"red"})),o.a.createElement(J.a.Column,null,o.a.createElement(se,{size:"big",value:Math.floor(t.nutrient)+" %",label:"Nutrient",icon:"pills",iconColor:"orange"}))),o.a.createElement(J.a.Row,{columns:"1",style:{padding:0}},o.a.createElement(J.a.Column,{textAlign:"center"},o.a.createElement(F.a,{"data-cy":"chart-toggle-button",circular:!0,icon:c?"close":"chart area",onClick:function(){return l(!c)}}),c&&o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{circular:!0,onClick:function(){return m("DAY")}},"D"),o.a.createElement(F.a,{circular:!0,onClick:function(){return m("WEEK")}},"W"),o.a.createElement(F.a,{circular:!0,onClick:function(){return m("MONTH")}},"M"),o.a.createElement(F.a,{circular:!0,onClick:function(){return m("YEAR")}},"Y")))),o.a.createElement(J.a.Row,{columns:1,style:{padding:"".concat(c?"5px":"0px")}},o.a.createElement(J.a.Column,{style:{padding:0}},o.a.createElement(K.a,{style:{display:"".concat(c?"block":"none"),padding:5}},o.a.createElement(be,{sensor:t,chartTimeRange:u})))),o.a.createElement(J.a.Row,{columns:2,style:{padding:5}},o.a.createElement(J.a.Column,{textAlign:"left"},o.a.createElement(se,{value:ie()(t.time).fromNow(),label:"Updated",size:"small",icon:"time",iconColor:ie()()-ie()(t.time)>36e5?"red":null})),o.a.createElement(J.a.Column,{textAlign:"right"},o.a.createElement(se,{value:t.battery_low+" %",label:"Battery",size:"small",icon:"battery full",iconColor:t.battery_low<30?"red":null})))))},fe=function(e){var t=e.sensor,n=Object(r.useState)(!1),a=Object(f.a)(n,2),c=a[0],l=a[1],i=Object(r.useState)("DAY"),s=Object(f.a)(i,2),u=s[0],m=s[1];return o.a.createElement(K.a,{inverted:!0,secondary:!0,style:{margin:"2px 1px",background:"beige",color:"black"}},o.a.createElement($.a,{style:{color:"black"},textAlign:"center",as:"h3"},o.a.createElement(W.a,{name:"home",color:"black",size:"large"}),t.location),o.a.createElement(J.a,{textAlign:"center",columns:2},o.a.createElement(J.a.Row,null,o.a.createElement(J.a.Column,{color:t.soil_moisture<30?"yellow":null},o.a.createElement(se,{size:"big",value:t.humidity+" %",label:"Soil moisture",icon:"theme",iconColor:"blue"})),o.a.createElement(J.a.Column,null,o.a.createElement(se,{size:"big",value:t.temperature_C+" \xbaC",label:"Temperature",icon:"thermometer",iconColor:"red"}))),o.a.createElement(J.a.Row,{columns:"1",style:{padding:0}},o.a.createElement(J.a.Column,{textAlign:"center"},o.a.createElement(F.a,{circular:!0,icon:c?"close":"chart area",onClick:function(){return l(!c)}}),c&&o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{circular:!0,onClick:function(){return m("DAY")}},"D"),o.a.createElement(F.a,{circular:!0,onClick:function(){return m("WEEK")}},"W"),o.a.createElement(F.a,{circular:!0,onClick:function(){return m("MONTH")}},"M"),o.a.createElement(F.a,{circular:!0,onClick:function(){return m("YEAR")}},"Y")))),o.a.createElement(J.a.Row,{columns:1,style:{padding:"".concat(c?"5px":"0px")}},o.a.createElement(J.a.Column,{style:{padding:0}},o.a.createElement(K.a,{style:{display:"".concat(c?"block":"none"),padding:5}},o.a.createElement(be,{sensor:t,chartTimeRange:u})))),o.a.createElement(J.a.Row,{columns:2,style:{padding:5}},o.a.createElement(J.a.Column,{textAlign:"left"},o.a.createElement(se,{value:ie()(t.time).fromNow(),label:"Updated",size:"small",icon:"time",iconColor:ie()()-ie()(t.time)>36e5?"red":null})),o.a.createElement(J.a.Column,{textAlign:"right"},o.a.createElement(se,{label:"Battery",size:"small",icon:"battery full",iconColor:1===t.battery_low?"red":null})))))},ve=function(e){var t=e.show,n=e.sensorData,a=e.sensorError,r=e.token;if(!t)return null;return o.a.createElement("div",{style:{height:"100%",overflowY:"scroll"}},a||!r.sensorEndpoint?"Sensors loading"===a?o.a.createElement("div",null):(console.log(a),r.sensorEndpoint&&"GraphQL error: Request failed with status code 404"!==a?null:o.a.createElement(K.a,{secondary:!0,inverted:!0,color:"red",textAlign:"center"},r.sensorEndpoint?"Rasp offline or starting from reboot":"Not connected to any sensor endpoint")):n?n.map(function(e){return"plant"===e.type?o.a.createElement(pe,{key:e.id,sensor:e}):o.a.createElement(fe,{key:e.id,sensor:e})}):null)},he=n(481),ye=n(482),Oe=n(485),ke=n(478);function je(){var e=Object(w.a)(["\n{\n  messages {\n    content\n    created\n    id\n    user {\n      name\n    }\n  }\n}\n"]);return je=function(){return e},e}var we=Object(C.a)(je());function Ce(){var e=Object(w.a)(["\nmutation createMessage(\n  $content: String!\n  ) {\n  createMessage(\n    content: $content\n  ) {\n    content\n    user {\n      name\n    }\n    created\n    id\n  }\n}\n"]);return Ce=function(){return e},e}var Se=Object(C.a)(Ce());function xe(){var e=Object(w.a)(["\nsubscription {\n  messageAdded {\n    content\n    created\n    id\n    user {\n      name\n    }\n  }\n}\n"]);return xe=function(){return e},e}var Ae=Object(C.a)(xe()),Ie=n(480),Re=function(e){var t=e.message,n=e.currentUser;if(!n.me)return null;var a=n.me.name===t.user.name?"blue":"green",r=n.me.name===t.user.name?"left":"right",c={margin:"0 0 5px 0",padding:7,float:"".concat(r),clear:"both"};return o.a.createElement(Oe.a,{"data-cy":"message",style:{marginTop:7,paddingTop:7,overflow:"auto"}},o.a.createElement(K.a,{style:c,compact:!0,inverted:!0,color:a,secondary:!0},o.a.createElement(Oe.a.Content,null,o.a.createElement(Oe.a.Author,{as:"a"},t.user.name),o.a.createElement(Oe.a.Metadata,null,o.a.createElement("div",null,new Date(parseInt(t.created)).toLocaleString())),o.a.createElement(Ie.a,{style:{margin:"4px 0px 4px 0px"}}),t.content)))},Te=function(e){var t=e.show,n=Object(ue.a)(we),a=n.data,c=n.loading,l=Object(ue.a)(te),i=Object(r.useState)(""),s=Object(f.a)(i,2),u=s[0],m=s[1],d=Object(G.a)(Se),g=Object(r.useRef)(null);Object(r.useEffect)(function(){E()},[t]);Object(he.a)(Ae,{onSubscriptionData:function(e){var t=e.client,n=e.subscriptionData,a=t.readQuery({query:we}),r=n.data.messageAdded;O(a.messages,r.id)||(a.messages.push(r),t.writeQuery({query:we,data:a,id:1}),g.current.scrollIntoView({block:"end",behavior:"smooth"}))}});var E=function(){g.current&&g.current.scrollIntoView({block:"end"})},b=function(){u.length<1||(d({variables:{content:u}}),m(""))};return t?o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(ye.a,{style:{height:"90%",overflowY:"scroll"}},c||l.loading?o.a.createElement(ce,{inverted:!0}):o.a.createElement(Oe.a.Group,null,a.messages.map(function(e){return o.a.createElement(Re,{key:e.id,message:e,currentUser:l.data})})),o.a.createElement("div",{id:"el",ref:g})),o.a.createElement(T.a,{fluid:!0,color:"grey",style:{marginBottom:0,marginTop:0,height:"10%"}},o.a.createElement(T.a.Item,{style:{width:"80vw"}},o.a.createElement(ke.a,{"data-cy":"chat-input",fluid:!0,value:u,onChange:function(e){var t=e.target;return m(t.value)},onKeyPress:function(e){"Enter"===e.key&&b()},onFocus:E})),o.a.createElement(T.a.Item,{style:{width:"20vw",justifyContent:"center"},onClick:b},o.a.createElement(W.a,{name:"send",inverted:!0,circular:!0,color:"green"})))):null},We=n(486),ze=function(e){return e.show?o.a.createElement(ye.a,{textAlign:"center"},o.a.createElement($.a,{as:"h1",style:{padding:25}},"About Kaste 2.0"),o.a.createElement(We.a,{style:{background:"lightgreen"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Aim:"),o.a.createElement("td",null,"Design and implement a responsive web app to monitor and water plants.")),o.a.createElement("tr",null,o.a.createElement("td",null,"Features:"),o.a.createElement("td",null,o.a.createElement("ul",null,o.a.createElement("li",null,"Plantwatering functionality for two or more users"),o.a.createElement("li",null,"Possibility to read plant info through charts"),o.a.createElement("li",null,"Simple chat"),o.a.createElement("li",null,"Rebooting Raspberry (that control sensor data)"))))))):null};function De(){var e=Object(w.a)(["\nmutation editUserSensorEndpoint(\n  $sensorEndpoint: String!\n  ) {\n    editUserSensorEndpoint(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    sensorEndpoint\n    name\n    username\n  }\n}\n"]);return De=function(){return e},e}var Pe=Object(C.a)(De());function $e(){var e=Object(w.a)(["\nmutation reboot(\n  $sensorEndpoint: String!\n  ) {\n    reboot(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    message\n  }\n}\n"]);return $e=function(){return e},e}var Fe=Object(C.a)($e()),Me=function(e){var t=e.sensorsConnected,n=e.token,a=e.setToken,c=e.actions,l=e.sensorService,i=Object(r.useState)(""),s=Object(f.a)(i,2),u=s[0],m=s[1],d=ne(),g=Object(f.a)(d,2),E=g[0],b=g[1],p=Object(G.a)(Pe),v=M(),O=function(){var e=Object(y.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get(u);case 3:t=e.sent,Object.keys(t.data).includes("sensors")&&window.confirm("Would you like to receive information about these sensors?")&&(p({variables:{sensorEndpoint:u}}),j(u,a),m("")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(y.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("WARNING: Endpoint computer might not recover correctly from reboot!")&&(v(c.reboot,Fe),l.stopFetching(),l.startFetching(n.sensorEndpoint));case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(K.a,null,o.a.createElement($.a,null,"Sensor resource URL"),o.a.createElement("small",{style:{color:"gray"}},"Provide an endpoint URL where sensor output comes from"),o.a.createElement(ke.a,{"data-cy":"sensor-url-input",value:u,onChange:function(e){var t=e.target;return m(t.value)},fluid:!0,placeholder:"Enter URL...",action:o.a.createElement(F.a,{"data-cy":"sensor-url-button",loading:!1,onClick:O},"Connect")}),n.sensorEndpoint?o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a,{color:"green"},o.a.createElement($.a,{as:"h3"},"connected at:"),n.sensorEndpoint,o.a.createElement(F.a,{fluid:!0,style:{marginTop:10},onClick:function(){window.confirm("Are you sure? Clearing sensor resource url cuts access to all information and functionality.")&&(p({variables:{sensorEndpoint:""}}),j("",a))}},"clear")),o.a.createElement(K.a,{inverted:!0,secondary:!0,color:t?"green":"red"},o.a.createElement(J.a,{divided:!0,columns:2,textAlign:"center"},o.a.createElement(J.a.Row,{verticalAlign:"middle"},o.a.createElement(J.a.Column,null,"Endpoint status: ",t?"Online":"Offline"),o.a.createElement(J.a.Column,null,o.a.createElement(F.a,{disabled:!t,onClick:k,icon:"redo",content:"Reboot"})))))):o.a.createElement(K.a,{color:"red"},"Not connected"),o.a.createElement(Ie.a,null),E&&o.a.createElement(Q.a,{color:"red"},E))},Ne=function(e){var t=e.show,n=e.sensorsConnected,a=e.token,r=e.setToken,c=e.actions,l=e.sensorService;return t?o.a.createElement(J.a,{divided:"vertically"},o.a.createElement(J.a.Row,null,o.a.createElement(J.a.Column,null,o.a.createElement(Me,{sensorsConnected:n,token:a,actions:c,sensorService:l,setToken:r})))):null},Ue=n(261),Le=function(e){var t=e.setReloadImage;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(W.a,{name:"frown",inverted:!0,color:"grey",size:"massive"}),o.a.createElement(K.a,{color:"red",inverted:!0,secondary:!0,compact:!0},o.a.createElement("p",{style:{color:"white"}},"Image failed to load...")),o.a.createElement(F.a,{"data-cy":"error-button",circular:!0,icon:"redo",onClick:Object(y.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(!0);case 2:t(!1);case 3:case"end":return e.stop()}},e)}))}))},qe={height:"100%",background:"black",display:"flex",alignItems:"center",justifyContent:"center"},He=function(e){var t=e.show,n=e.actions,a=Object(r.useState)(o.a.createElement(ce,{inverted:!1})),c=Object(f.a)(a,2),l=c[0],i=c[1],s=Object(r.useState)("block"),u=Object(f.a)(s,2),m=u[0],d=u[1],g=Object(r.useState)(!1),E=Object(f.a)(g,2),b=E[0],p=E[1];return Object(r.useEffect)(function(){i(o.a.createElement(ce,{inverted:!1})),d("block")},[t,b]),!t||b?null:o.a.createElement("div",{style:qe},l,n?o.a.createElement(Ue.a,{style:{maxWidth:800,display:"".concat(m)},centered:!0,src:n.camera,fluid:!0,onLoad:function(){return i(null)},onError:function(){i(o.a.createElement(Le,{setReloadImage:p})),d("none")}}):null)},Be=function(){var e=Object(r.useState)("Settings"),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(JSON.parse(localStorage.getItem("kaste-user-token"))),l=Object(f.a)(c,2),s=l[0],u=l[1],m=A(30),d=Object(f.a)(m,5),g=d[0],E=d[1],b=d[2],p=d[3],v=d[4],h=Object(i.b)();Object(r.useEffect)(function(){s&&s.sensorEndpoint?b.startFetching(s.sensorEndpoint):b.stopFetching()},[s]);return o.a.createElement(o.a.Fragment,null,s?o.a.createElement(_,{page:n,setPage:a,logOut:function(){a("Settings"),b.stopFetching(),u(null),localStorage.clear(),h.resetStore()},actions:E,token:s,sensorService:b},o.a.createElement(ve,{token:s,sensorData:g,sensorError:v,show:"Sensors"===n}),o.a.createElement(Te,{show:"Chat"===n}),o.a.createElement(ze,{show:"About"===n}),o.a.createElement(Ne,{show:"Settings"===n,sensorsConnected:p,token:s,setToken:u,actions:E,sensorService:b}),o.a.createElement(He,{show:"Video"===n,token:s,actions:E})):o.a.createElement(ae,{setToken:u}))},Ye=new E.a({uri:p.wsUrl,options:{reconnect:!0}}),_e=Object(u.b)({uri:p.httpUrl}),Je=Object(d.a)(function(e,t){var n=t.headers,r=JSON.parse(localStorage.getItem("kaste-user-token"));return{headers:Object(a.a)({},n,{authorization:r?"bearer ".concat(r.value):null})}}),Ve=Object(g.d)(function(e){var t=e.query,n=Object(b.l)(t),a=n.kind,r=n.operation;return"OperationDefinition"===a&&"subscription"===r},Ye,Je.concat(_e)),Ke=new s.a({link:Ve,cache:new m.a});l.a.render(o.a.createElement(i.a,{client:Ke},o.a.createElement(Be,null)),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.8803afb7.chunk.js.map