(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(e,t,n){e.exports=n(454)},454:function(e,t,n){"use strict";n.r(t);var a=n(129),r=n(0),o=n.n(r),l=n(69),c=n.n(l),i=n(77),s=n(54),u=n(76),m=n(68),d=n(261),g=n(24),p=n(260),h=n(6),E={wsUrl:"wss://lit-forest-54340.herokuapp.com/graphql",httpUrl:"https://lit-forest-54340.herokuapp.com/graphql"},f=n(18),b=n(30),v=n.n(b),y=n(42),w=function(e,t){return e.map(function(e){return e.id}).includes(t.id)},O=function(e){var t=Object.values(e).reduce(function(e,t){return t.concat(e)}).filter(function(e){return""!==e.model});if(0===t.length)throw new Error("Sensors loading");return t},k=function(e,t){var n=JSON.parse(localStorage.getItem("kaste-user-token"));localStorage.removeItem("kaste-user-token");var r=Object(a.a)({},n,{sensorEndpoint:e});window.localStorage.setItem("kaste-user-token",JSON.stringify(r)),t(r)},j=n(22),C=n(23);function S(){var e=Object(j.a)(["\n  query SensorData($sensorEndpoint: String!) {\n  sensorData (sensorEndpoint: $sensorEndpoint){\n    value\n  }\n}\n"]);return S=function(){return e},e}var x=Object(C.a)(S()),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=Object(r.useState)(null),n=Object(f.a)(t,2),a=n[0],o=n[1],l=Object(r.useState)(null),c=Object(f.a)(l,2),s=c[0],u=c[1],m=Object(r.useState)(!1),d=Object(f.a)(m,2),g=d[0],p=d[1],h=Object(r.useState)(null),E=Object(f.a)(h,2),b=E[0],w=E[1],k=Object(r.useState)(null),j=Object(f.a)(k,2),C=j[0],S=j[1],I=Object(i.b)(),A=function(){var e=Object(y.a)(v.a.mark(function e(t){var n,a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.query({query:x,variables:{sensorEndpoint:t},fetchPolicy:"no-cache"});case 3:n=e.sent,a=n.data,r=JSON.parse(a.sensorData.value),o(O(r.sensors)),u(r.actions),p(!0),w(null),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),p(!1),w(e.t0.message),setTimeout(function(){A(t)},2e3);case 17:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}();return[a,s,{startFetching:function(t){A(t);var n=setInterval(function(){A(t)},1e3*e);S(n)},stopFetching:function(){clearInterval(C),o(null),p(!1),u(null)}},g,b]},A=n(483),R=n(479),T=n(474),z=n(71),P=n(470),W=n(475),$=n(456),M=function(){var e=Object(i.b)();return function(t,n){return e.mutate({mutation:n,variables:{sensorEndpoint:t}})}};function U(){var e=Object(j.a)(["\nmutation startWatering(\n  $sensorEndpoint: String!\n  ) {\n    startWatering(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    message\n  }\n}\n"]);return U=function(){return e},e}var D=Object(C.a)(U()),L=function(e){var t=e.actions,n=e.wateringConnected,a=e.setPage,l=Object(r.useState)(!1),c=Object(f.a)(l,2),i=c[0],s=c[1],u=Object(r.useState)(!1),m=Object(f.a)(u,2),d=m[0],g=m[1],p=M(),h=function(e,t){try{s(!1),p(t,D),a("Video")}catch(n){console.error(n.message)}setTimeout(function(){g(!1),console.log("Watering completed")},1e3*e*60)};return o.a.createElement(P.a,{centered:!0,basic:!0,open:i,onClose:function(){return s(!1)},trigger:o.a.createElement(T.a.Item,{"data-cy":"water-button",onClick:function(){return s(!0)},disabled:!n||d},o.a.createElement(z.a,{name:"shower"}),"Water Plants"),style:{textAlign:"center"}},o.a.createElement(z.a,{name:"shower",size:"massive"}),o.a.createElement(W.a,{content:"Choose watering duration:",icon:"clock"}),o.a.createElement(P.a.Actions,{style:{textAlign:"center",marginTop:15}},o.a.createElement($.a.Group,null,o.a.createElement($.a,{"data-cy":"modal-button-1min",color:"green",onClick:function(){return h(1,t.water.oneMin)}},"1 min"),o.a.createElement($.a.Or,null),o.a.createElement($.a,{"data-cy":"modal-button-5min",color:"green",onClick:function(){return h(5,t.water.fiveMin)}},"5 min"),o.a.createElement($.a.Or,null),o.a.createElement($.a,{"data-cy":"modal-button-10min",color:"green",onClick:function(){return h(10,t.water.tenMin)}},"10 min")),o.a.createElement($.a,{"data-cy":"modal-button-cancel",color:"red",onClick:function(){return s(!1)},style:{marginTop:20}},"cancel")))};function N(){var e=Object(j.a)(["\nmutation stopWatering(\n  $sensorEndpoint: String!\n  ) {\n    stopWatering(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    message\n  }\n}\n"]);return N=function(){return e},e}var F=Object(C.a)(N()),q=function(e){var t=e.children,n=e.setPage,a=e.logOut,l=e.page,c=e.actions,i=e.token,s=(e.sensorService,Object(r.useState)(!1)),u=Object(f.a)(s,2),m=u[0],d=u[1],g=Object(r.useState)(!1),p=Object(f.a)(g,2),h=p[0],E=p[1],b=Object(r.useState)(!1),v=Object(f.a)(b,2),y=v[0],w=v[1],O=M(),k=function(e){return function(){d(!1),n(e)}};return Object(r.useEffect)(function(){c?(E(void 0!==c.camera),w(void 0!==c.water)):(E(!1),w(!1))},[c]),o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{maxWidth:A.a.onlyMobile.maxWidth,as:R.a.Pushable,style:{height:"100vh"}},o.a.createElement(R.a,{as:T.a,animation:"push",inverted:!0,onHide:function(){return d(!1)},vertical:!0,visible:m,icon:"labeled",width:"thin"},i&&o.a.createElement(T.a.Header,{as:"small",style:{color:"white"}},o.a.createElement(z.a,{name:"user",color:"green"}),i.username),o.a.createElement(T.a.Item,{"data-cy":"sensors-button",onClick:k("Sensors")},o.a.createElement(z.a,{name:"info"}),"Sensors"),o.a.createElement(T.a.Item,{"data-cy":"chat-button",onClick:k("Chat")},o.a.createElement(z.a,{name:"comments outline"}),"Chat"),o.a.createElement(T.a.Item,{"data-cy":"settings-button",onClick:k("Settings")},o.a.createElement(z.a,{name:"settings"}),"Settings"),o.a.createElement(T.a.Item,{"data-cy":"about-button",onClick:k("About")},o.a.createElement(z.a,{name:"question"}),"About"),o.a.createElement(T.a.Item,{"data-cy":"livefeed-button",disabled:!h,onClick:k("Video")},o.a.createElement(z.a,{name:"eye"}),"Live Feed"),o.a.createElement(L,{actions:c,wateringConnected:y,setPage:n}),o.a.createElement(T.a.Item,{"data-cy":"stop-button",disabled:!y,onClick:function(){d(!1),O(c.water.waterstop,F)}},o.a.createElement(z.a,{name:"stop circle"}),"Stop Watering")),o.a.createElement(R.a.Pusher,{style:{height:"100%"},dimmed:m},o.a.createElement(T.a,{widths:3,inverted:!0,pointing:!0,color:"green",size:"large",style:{height:"50px",marginBottom:0,borderRadius:0}},o.a.createElement(T.a.Item,{onClick:function(){return d(!0)},style:{alignSelf:"center"}},o.a.createElement(z.a,{"data-cy":"sidebar-button",name:"sidebar"})),o.a.createElement(T.a.Item,{header:!0},l),o.a.createElement(T.a.Item,{position:"right",onClick:function(){return a()},style:{alignSelf:"center"}},o.a.createElement(z.a,{name:"log out"}))),o.a.createElement("div",{style:{height:"calc(100vh - 50px)"}},t))))},B=function(e){var t=e.children,n=e.setPage,a=e.logOut,l=e.actions,c=e.token,i=(e.sensorService,Object(r.useState)(!1)),s=Object(f.a)(i,2),u=s[0],m=s[1],d=Object(r.useState)(!1),g=Object(f.a)(d,2),p=g[0],h=g[1],E=M(),b=function(e){return function(){n(e)}};return Object(r.useEffect)(function(){l?(m(void 0!==l.camera),h(void 0!==l.water)):(m(!1),h(!1))},[l]),o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{style:{height:"100vh"},minWidth:A.a.onlyTablet.minWidth},o.a.createElement(T.a,{style:{height:71},inverted:!0,icon:"labeled",color:"green",fixed:"top"},o.a.createElement(T.a.Item,{"data-cy":"sensors-button",onClick:b("Sensors")},o.a.createElement(z.a,{name:"info"}),"Sensors"),o.a.createElement(T.a.Item,{"data-cy":"chat-button",onClick:b("Chat")},o.a.createElement(z.a,{name:"comments outline"}),"Chat"),o.a.createElement(L,{actions:l,wateringConnected:p,setPage:n}),o.a.createElement(T.a.Item,{"data-cy":"stop-button",disabled:!p,onClick:function(){E(l.water.waterstop,F)}},o.a.createElement(z.a,{name:"stop circle"}),"Stop Watering"),o.a.createElement(T.a.Item,{"data-cy":"livefeed-button",disabled:!u,onClick:b("Video")},o.a.createElement(z.a,{name:"eye"}),"Live Feed"),o.a.createElement(T.a.Menu,{position:"right"},c&&o.a.createElement(T.a.Header,{as:"p",style:{color:"white",alignSelf:"center",margin:"0 10px 0"}},o.a.createElement(z.a,{name:"user"}),c.username," ",o.a.createElement("br",null),"logged in"),o.a.createElement(T.a.Item,{"data-cy":"settings-button",onClick:b("Settings")},o.a.createElement(z.a,{name:"settings"}),"Settings"),o.a.createElement(T.a.Item,{"data-cy":"about-button",onClick:b("About")},o.a.createElement(z.a,{name:"question"}),"About"),o.a.createElement(T.a.Item,{"data-cy":"logout-button",onClick:function(){return a(!1)}},o.a.createElement(z.a,{name:"log out"}),"Log out"))),o.a.createElement("div",{style:{height:71}}),o.a.createElement("div",{style:{height:"calc(100vh - 71px)"}},t)))},H=function(e){var t=e.children,n=e.setPage,a=e.logOut,r=e.page,l=e.actions,c=e.token,i=e.sensorService;return o.a.createElement(o.a.Fragment,null,o.a.createElement(q,{logOut:a,page:r,actions:l,setPage:n,token:c,sensorService:i},t),o.a.createElement(B,{logOut:a,page:r,actions:l,setPage:n,token:c,sensorService:i},t))},Y=n(477),K=n(473),J=n(469),_=n(481),V=n(463);function G(){var e=Object(j.a)(["\nmutation loginUser(\n  $password: String!\n  $username: String!\n  ) {\n  login(\n    password: $password\n    username: $username\n  ) {\n    value\n    username\n    sensorEndpoint\n  }\n}\n"]);return G=function(){return e},e}var Q=Object(C.a)(G());function X(){var e=Object(j.a)(["\n{\n  me {\n    name\n    username\n    id\n    sensorEndpoint\n  }\n}\n"]);return X=function(){return e},e}var Z=Object(C.a)(X()),ee=function(e){var t=e.setNotification,n=e.setToken,a=Object(V.a)(Q),l=Object(r.useState)(""),c=Object(f.a)(l,2),i=c[0],s=c[1],u=Object(r.useState)(""),m=Object(f.a)(u,2),d=m[0],g=m[1],p=function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({update:function(e,t){var a=t.data.login;n(a),localStorage.setItem("kaste-user-token",JSON.stringify(a))},variables:{username:i,password:d},refetchQueries:[{query:Z}]});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t(e.t0.graphQLErrors[0].message);case 8:case"end":return e.stop()}},e,null,[[0,5]])}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(J.a,{size:"large",onSubmit:p},o.a.createElement(_.a,{stacked:!0,raised:!0},o.a.createElement(J.a.Input,{"data-cy":"username",type:"text",value:i,onChange:function(e){var t=e.target;return s(t.value)},fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username"}),o.a.createElement(J.a.Input,{"data-cy":"password",type:"password",value:d,onChange:function(e){var t=e.target;return g(t.value)},fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password"}),o.a.createElement($.a,{color:"brown",size:"large",type:"submit"},"Log in")))};function te(){var e=Object(j.a)(["\nmutation createUser(\n  $name: String!\n  $password: String!\n  $username: String!\n  ) {\n  createUser(\n    password: $password\n    username: $username\n    name: $name\n  ) {\n    username\n    sensorEndpoint\n  }\n}\n"]);return te=function(){return e},e}var ne=Object(C.a)(te()),ae=function(e){var t=e.setNotification,n=e.setLoginVisible,a=Object(V.a)(ne),l=Object(r.useState)(""),c=Object(f.a)(l,2),i=c[0],s=c[1],u=Object(r.useState)(""),m=Object(f.a)(u,2),d=m[0],g=m[1],p=Object(r.useState)(""),h=Object(f.a)(p,2),E=h[0],b=h[1],w=function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({variables:{username:i,password:E,name:d}});case 3:t("Register succesful"),n(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),t(e.t0.graphQLErrors[0].message);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(J.a,{size:"large",onSubmit:w,autoComplete:"new-password"},o.a.createElement(_.a,{stacked:!0,raised:!0},o.a.createElement(J.a.Input,{"data-cy":"username",type:"text",value:i,onChange:function(e){var t=e.target;return s(t.value)},fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username",autoComplete:"new-password"}),o.a.createElement(J.a.Input,{"data-cy":"name",type:"text",value:d,onChange:function(e){var t=e.target;return g(t.value)},fluid:!0,icon:"user outline",iconPosition:"left",placeholder:"Name",autoComplete:"new-password"}),o.a.createElement(J.a.Input,{"data-cy":"password",type:"password",value:E,onChange:function(e){var t=e.target;return b(t.value)},fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",autoComplete:"new-password"}),o.a.createElement($.a,{color:"brown",size:"large",type:"submit"},"Register")))},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(r.useState)(null),n=Object(f.a)(t,2),a=n[0],o=n[1];return[a,function(t){o(t),setTimeout(function(){o(null)},1e3*e)}]},oe=function(e){var t=e.setToken,n=re(),a=Object(f.a)(n,2),l=a[0],c=a[1],i=Object(r.useState)(!0),s=Object(f.a)(i,2),u=s[0],m=s[1];return o.a.createElement("div",{className:"login-form"},o.a.createElement("style",null," ","\n  body > div,\n  body > div > div,\n  body > div > div > div.login-form {\n    height: 100%;\n  }\n\n  html {\n    background: red;\n    height: 100vh;\n  }\n          "),o.a.createElement(Y.a,{textAlign:"center",style:{height:"100vh",background:"lightgreen",margin:0},verticalAlign:"middle"},o.a.createElement(Y.a.Column,{style:{maxWidth:250}},o.a.createElement(W.a,{as:"h1",color:"grey",dividing:!0,textAlign:"center"},"Log in to Kaste 2.0"),o.a.createElement(T.a,{widths:2,color:"brown"},o.a.createElement(T.a.Item,{onClick:function(){return m(!0)},active:u},"Login"),o.a.createElement(T.a.Item,{onClick:function(){return m(!1)},active:!u},"Register")),u?o.a.createElement(ee,{setNotification:c,setToken:t}):o.a.createElement(ae,{setLoginVisible:m,setNotification:c}),l&&o.a.createElement(K.a,{positive:"Register succesful"===l,negative:"Register succesful"!==l},l))))},le=n(37),ce=n.n(le),ie=function(e){var t=e.value,n=e.icon,a=e.iconColor,r=e.size;return o.a.createElement("div",null,o.a.createElement(z.a,{name:n,size:r,color:a||null}),o.a.createElement("span",{style:{fontSize:"".concat("large"===r?"15px":"11px"),verticalAlign:"middle"}},t))},se=n(478),ue=n(254);function me(){var e=Object(j.a)(["\n  query ChartData($id: Int!, $type: HousePlant!, $range: DayWeekMonthYear!) {\n  chartData(id: $id, type: $type, range: $range) {\n    time\n    light\n    nutrient\n    soilMoisture\n    temperatureC\n    humidity\n  }\n}\n"]);return me=function(){return e},e}var de=Object(C.a)(me()),ge=n(480),pe=n(465),he=function(e){var t=e.inverted;return o.a.createElement(ge.a,{inverted:t,active:!0},o.a.createElement(pe.a,{size:"massive"},"Loading"))},Ee={layout:{padding:{bottom:-20}},scales:{xAxes:[{ticks:{autoSkip:!0,maxTicksLimit:5}}],yAxes:[{ticks:{suggestedMin:0,max:100}}]}},fe=function(e){var t=e.sensor,n=e.chartTimeRange,a=Object(se.a)(de,{variables:{id:t.id,type:t.type.toUpperCase(),range:n},fetchPolicy:"no-cache"});if(a.loading)return o.a.createElement("div",{style:{minHeight:"calc(89vw / 2)"}},o.a.createElement(he,{inverted:!0}));if(0===Object.keys(a.data).length)return o.a.createElement(_.a,{color:"red",inverted:!0,secondary:!0},"Chart failed to load");var r=function(e){var t=e.chartData;return Object.keys(t).reduce(function(e,n){if("__typename"===n||null===t[n])return e;if("time"===n)return e.labels=t[n].map(function(e){return ce()()-e>864e5?ce.a.utc(e).local().format("ddd hA"):ce()(e).subtract(3,"hours").fromNow(!0)}),e;var a=function(e){switch(e){case"temperatureC":return"rgba(250, 64, 61, 0.7)";case"nutrient":return"rgba(250, 158, 61, 0.7)";case"light":return"rgba(246, 250, 61, 0.7)";case"humidity":case"soilMoisture":return"rgba(61, 152, 250, 0.7)"}};return e.datasets.push({label:n,fill:!1,lineTension:.1,backgroundColor:a(n),borderColor:a(n),borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:a(n),pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:a(n),pointHoverBorderColor:a(n),pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t[n]}),e},{labels:[],datasets:[]})}(a.data);return o.a.createElement(ue.a,{data:r,options:Ee,legend:{display:!1}})},be={padding:0},ve=function(e){var t=e.sensor,n=Object(r.useState)(!1),a=Object(f.a)(n,2),l=a[0],c=a[1],i=Object(r.useState)("DAY"),s=Object(f.a)(i,2),u=s[0],m=s[1];return o.a.createElement(_.a,{color:"green",inverted:!0,secondary:!0,style:{margin:"2px 1px"}},o.a.createElement(W.a,{textAlign:"center",as:"h3"},o.a.createElement(z.a,{name:"leaf",size:"large"}),"Capsicum baccatum"),o.a.createElement(Y.a,{textAlign:"center",columns:4},o.a.createElement(Y.a.Row,null,o.a.createElement(Y.a.Column,{style:be,color:t.soil_moisture<10?"yellow":null},o.a.createElement(ie,{size:"large",value:t.soil_moisture+" %",label:"Soil moisture",icon:"theme",iconColor:"blue"})),o.a.createElement(Y.a.Column,{style:be},o.a.createElement(ie,{size:"large",value:Math.floor(t.light)+" %",label:"Light",icon:"sun",iconColor:"yellow"})),o.a.createElement(Y.a.Column,{style:be},o.a.createElement(ie,{size:"large",value:t.temperature_C+" \xbaC",label:"Temperature",icon:"thermometer",iconColor:"red"})),o.a.createElement(Y.a.Column,{style:be},o.a.createElement(ie,{size:"large",value:Math.floor(t.nutrient)+" %",label:"Nutrient",icon:"pills",iconColor:"orange"}))),o.a.createElement(Y.a.Row,{columns:"1",style:{padding:0}},o.a.createElement(Y.a.Column,{textAlign:"center"},o.a.createElement($.a,{"data-cy":"chart-toggle-button",circular:!0,icon:l?"close":"chart area",onClick:function(){return c(!l)}}),l&&o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{circular:!0,onClick:function(){return m("DAY")}},"D"),o.a.createElement($.a,{circular:!0,onClick:function(){return m("WEEK")}},"W"),o.a.createElement($.a,{circular:!0,onClick:function(){return m("MONTH")}},"M"),o.a.createElement($.a,{circular:!0,onClick:function(){return m("YEAR")}},"Y")))),o.a.createElement(Y.a.Row,{columns:1,style:{padding:"".concat(l?"5px":"0px")}},o.a.createElement(Y.a.Column,{style:{padding:0}},o.a.createElement(_.a,{style:{display:"".concat(l?"block":"none"),padding:5}},o.a.createElement(fe,{sensor:t,chartTimeRange:u})))),o.a.createElement(Y.a.Row,{columns:2,style:{padding:5}},o.a.createElement(Y.a.Column,{textAlign:"left"},o.a.createElement(ie,{value:ce()(t.time).fromNow(),label:"Updated",size:"small",icon:"time",iconColor:ce()()-ce()(t.time)>36e5?"red":null})),o.a.createElement(Y.a.Column,{textAlign:"right"},o.a.createElement(ie,{value:t.battery_low+" %",label:"Battery",size:"small",icon:"battery full",iconColor:t.battery_low<30?"red":null})))))},ye=function(e){var t=e.sensor,n=Object(r.useState)(!1),a=Object(f.a)(n,2),l=a[0],c=a[1],i=Object(r.useState)("DAY"),s=Object(f.a)(i,2),u=s[0],m=s[1];return o.a.createElement(_.a,{inverted:!0,secondary:!0,style:{margin:"2px 1px",background:"beige",color:"black"}},o.a.createElement(W.a,{style:{color:"black"},textAlign:"center",as:"h3"},o.a.createElement(z.a,{name:"home",color:"black",size:"large"}),t.location),o.a.createElement(Y.a,{textAlign:"center",columns:2},o.a.createElement(Y.a.Row,null,o.a.createElement(Y.a.Column,{color:t.soil_moisture<30?"yellow":null},o.a.createElement(ie,{size:"large",value:t.humidity+" %",label:"Soil moisture",icon:"theme",iconColor:"blue"})),o.a.createElement(Y.a.Column,null,o.a.createElement(ie,{size:"large",value:t.temperature_C+" \xbaC",label:"Temperature",icon:"thermometer",iconColor:"red"}))),o.a.createElement(Y.a.Row,{columns:"1",style:{padding:0}},o.a.createElement(Y.a.Column,{textAlign:"center"},o.a.createElement($.a,{circular:!0,icon:l?"close":"chart area",onClick:function(){return c(!l)}}),l&&o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{circular:!0,onClick:function(){return m("DAY")}},"D"),o.a.createElement($.a,{circular:!0,onClick:function(){return m("WEEK")}},"W"),o.a.createElement($.a,{circular:!0,onClick:function(){return m("MONTH")}},"M"),o.a.createElement($.a,{circular:!0,onClick:function(){return m("YEAR")}},"Y")))),o.a.createElement(Y.a.Row,{columns:1,style:{padding:"".concat(l?"5px":"0px")}},o.a.createElement(Y.a.Column,{style:{padding:0}},o.a.createElement(_.a,{style:{display:"".concat(l?"block":"none"),padding:5}},o.a.createElement(fe,{sensor:t,chartTimeRange:u})))),o.a.createElement(Y.a.Row,{columns:2,style:{padding:5}},o.a.createElement(Y.a.Column,{textAlign:"left"},o.a.createElement(ie,{value:ce()(t.time).fromNow(),label:"Updated",size:"small",icon:"time",iconColor:ce()()-ce()(t.time)>36e5?"red":null})),o.a.createElement(Y.a.Column,{textAlign:"right"},o.a.createElement(ie,{label:"Battery",size:"small",icon:"battery full",iconColor:1===t.battery_low?"red":null})))))},we=function(e){var t=e.show,n=e.sensorData,a=e.sensorError,r=e.token;if(!t)return null;return o.a.createElement("div",{style:{height:"100%",overflowY:"scroll"}},a||!r.sensorEndpoint?"Sensors loading"===a?o.a.createElement(_.a,{secondary:!0,inverted:!0,color:"green",textAlign:"center"},"Sensors loading"):r.sensorEndpoint&&"GraphQL error: Request failed with status code 404"!==a?null:o.a.createElement(_.a,{secondary:!0,inverted:!0,color:"red",textAlign:"center"},r.sensorEndpoint?"Rasp offline or starting from reboot":"Not connected to any sensor endpoint"):n?n.map(function(e){return"plant"===e.type?o.a.createElement(ve,{key:e.id,sensor:e}):o.a.createElement(ye,{key:e.id,sensor:e})}):null)},Oe=n(467),ke=n(468),je=n(472),Ce=n(464);function Se(){var e=Object(j.a)(["\n{\n  messages {\n    content\n    created\n    id\n    user {\n      name\n    }\n  }\n}\n"]);return Se=function(){return e},e}var xe=Object(C.a)(Se());function Ie(){var e=Object(j.a)(["\nmutation createMessage(\n  $content: String!\n  ) {\n  createMessage(\n    content: $content\n  ) {\n    content\n    user {\n      name\n    }\n    created\n    id\n  }\n}\n"]);return Ie=function(){return e},e}var Ae=Object(C.a)(Ie());function Re(){var e=Object(j.a)(["\nsubscription {\n  messageAdded {\n    content\n    created\n    id\n    user {\n      name\n    }\n  }\n}\n"]);return Re=function(){return e},e}var Te=Object(C.a)(Re()),ze=n(466),Pe=function(e){var t=e.message,n=e.currentUser;if(!n.me)return null;var a=n.me.name===t.user.name?"blue":"green",r=n.me.name===t.user.name?"left":"right",l={margin:"0 0 5px 0",padding:7,float:"".concat(r),clear:"both"};return o.a.createElement(je.a,{"data-cy":"message",style:{marginTop:7,paddingTop:7,overflow:"auto"}},o.a.createElement(_.a,{style:l,compact:!0,inverted:!0,color:a,secondary:!0},o.a.createElement(je.a.Content,null,o.a.createElement(je.a.Author,{as:"a"},t.user.name),o.a.createElement(je.a.Metadata,null,o.a.createElement("div",null,new Date(parseInt(t.created)).toLocaleString())),o.a.createElement(ze.a,{style:{margin:"4px 0px 4px 0px"}}),t.content)))},We=function(e){var t=e.show,n=Object(se.a)(xe),a=n.data,l=n.loading,c=Object(se.a)(Z),i=Object(r.useState)(""),s=Object(f.a)(i,2),u=s[0],m=s[1],d=Object(V.a)(Ae),g=Object(r.useRef)(null);Object(r.useEffect)(function(){p()},[t]);Object(Oe.a)(Te,{onSubscriptionData:function(e){var t=e.client,n=e.subscriptionData,a=t.readQuery({query:xe}),r=n.data.messageAdded;w(a.messages,r.id)||(a.messages.push(r),t.writeQuery({query:xe,data:a,id:1}),g.current.scrollIntoView({block:"end",behavior:"smooth"}))}});var p=function(){g.current&&g.current.scrollIntoView({block:"end"})},h=function(){u.length<1||(d({variables:{content:u}}),m(""))};return t?o.a.createElement("div",{style:{height:"100%"}},o.a.createElement("div",{style:{height:"90%",overflowY:"scroll"}},o.a.createElement(ke.a,null,l||c.loading?o.a.createElement(he,{inverted:!0}):o.a.createElement(je.a.Group,null,a.messages.map(function(e){return o.a.createElement(Pe,{key:e.id,message:e,currentUser:c.data})})),o.a.createElement("div",{id:"el",ref:g}))),o.a.createElement(T.a,{fluid:!0,color:"grey",style:{marginBottom:0,marginTop:0,height:"10%"}},o.a.createElement(T.a.Item,{style:{width:"80vw"}},o.a.createElement(Ce.a,{"data-cy":"chat-input",fluid:!0,value:u,onChange:function(e){var t=e.target;return m(t.value)},onKeyPress:function(e){"Enter"===e.key&&h()},onFocus:p})),o.a.createElement(T.a.Item,{style:{width:"20vw",justifyContent:"center"},onClick:h},o.a.createElement(z.a,{name:"send",inverted:!0,circular:!0,color:"green"})))):null},$e=function(e){var t=e.header,n=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement("strong",null,t)),o.a.createElement("p",null,n))},Me=n(471),Ue=function(e){var t=e.name,n=e.githubUrl,a=e.linkedInUrl,r=e.email;return o.a.createElement(Me.a,{trigger:o.a.createElement("span",{style:{color:"blue"}},t),flowing:!0,hoverable:!0,hideOnScroll:!0},o.a.createElement(Y.a,{centered:!0,divided:!0,columns:3},o.a.createElement(Y.a.Column,{textAlign:"center"},o.a.createElement("a",{href:n},o.a.createElement(z.a,{color:"black",size:"large",name:"github"}))),o.a.createElement(Y.a.Column,{textAlign:"center"},o.a.createElement("a",{href:a},o.a.createElement(z.a,{color:"blue",size:"large",name:"linkedin"}))),o.a.createElement(Y.a.Column,{textAlign:"center"},o.a.createElement(Me.a,{trigger:o.a.createElement("a",{href:"mailto:".concat(r,"?Subject=About%20Kaste 2.0")},o.a.createElement(z.a,{color:"green",size:"large",name:"at"}))},"tommi.teetee@hotmail.com"))))},De={fontSize:18},Le=function(e){return e.show?o.a.createElement("div",{style:{height:"100%",overflowY:"scroll",paddingBottom:25}},o.a.createElement(ke.a,{textAlign:"left",style:{fontSize:16}},o.a.createElement(W.a,{textAlign:"center",as:"h1",style:{paddingTop:25,margin:0}},"About Kaste 2.0 ",o.a.createElement("span",{role:"img","aria-label":"seedling"},"\ud83c\udf31")),o.a.createElement("h3",{style:De},"Aim:"),o.a.createElement("p",null,"Design and implement a responsive web app to monitor and water plants."),o.a.createElement("h3",{style:De},"Features:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Plantwatering functionality for two or more users"),o.a.createElement("li",null,"Possibility to read plant info through charts"),o.a.createElement("li",null,"Simple chat"),o.a.createElement("li",null,"Rebooting Raspberry (that controls sensor data)")),o.a.createElement(_.a,{style:{background:"lightgreen"}},o.a.createElement("p",null,"Any questions, tips, feedback or bug reports are much appreciated! Just post them to chat or tommi.teetee@hotmail.com ",o.a.createElement("span",{role:"img","aria-label":"happy smiley"},"\ud83d\ude42"))),o.a.createElement("h4",{style:De},"Made by:"),o.a.createElement(Ue,{name:"Tommi Tampio",linkedInUrl:"https://www.linkedin.com/in/tommi-tampio-41b2b7113/",githubUrl:"https://github.com/stutommi",email:"tommi.teetee@hotmail.com"}),o.a.createElement("span",null," - Web app")," ",o.a.createElement("br",null),o.a.createElement("span",null,"Matti Tampio - Raspberry / sensor configuration"),o.a.createElement(ze.a,{section:!0}),o.a.createElement("h3",{style:De},"Client:"),o.a.createElement("p",null,"Working with token based authetication, client side is done with React. It's state is managed with hooks for the most part and little with Apollos client. Layout is handled with inline styles and semantic-ui-react. Communication between client and server is done with Graphql."),o.a.createElement($e,{header:"Layout and Menus"},"Kaste's layout is designed mobile first, but should work in every screen size. Mobile menu has a fixed menu on top with logout and togglable sidebar, which contains view navigation and functionality. When screen size goes over mobile, the view changes to a fixed top menu, which displays navigation and functionality."),o.a.createElement($e,{header:"Sensors"},"Sensors data is shown in sensors view. It shows the current value of sensor measurements and chart information on measurement history that can be shown by different time ranges."),o.a.createElement($e,{header:"Chat"},"Kaste has a supersimple chat. Users can write and receive messages on realtime thanks to subscription based communication with server. Messages are stored in MongoDB."),o.a.createElement($e,{header:"Settings"},"In order to see any sensor information, user needs to be connected to an endpoint that serves that information. This connection can be made in settings page. If client is able to connect to an endpoint provided by the user, it will start displaying and storing that information on database. Settings page also shows the status of the endpoint"),o.a.createElement($e,{header:"Live Feed"},'If the endpoint a user is connected to has a camera connection, users are able to monitor this connection through the "Live Feed" view. This is useful when you want to make sure that your plants are being watered after using watering functionality.'),o.a.createElement($e,{header:"Water Plants"},'Perhaps the most important feature of Kaste is its watering functionality. Provided that the watering mechanics are hooked correctly at users home, user is able to water their plants by pressing the "Water Plants" found on the menu. They are able to choose watering between durations of 1, 5 and 10 minutes. If there\'s a need to stop the watering process for whatever reasons, user can simply press "Stop Watering" found next to watering functionality.'),o.a.createElement(ze.a,{section:!0}),o.a.createElement("h3",{style:De},"Server:"),o.a.createElement("p",null,"Servers main two tasks are handling Graphql requests coming from client and storing collecting and storing messages, user information and sensor data to mongoDB. It is important to note that all requests that client sends to other URLs go through the server. this is done to avoid mixed content warning that comes from making direct requests from Kaste (https) to sensor endpoints (possibly http)."),o.a.createElement($e,{header:"User information"},"User information contains name, username, password hash and an endpoint for sensordata. When ever a new endpoint is introduced, server logic will start fetching information from the endpoint."),o.a.createElement($e,{header:"Messages"},"Messages are stored in MongoDB and used in the chat view of the client. it uses a subscription so any new message is delivered to chat in realtime without refreshing the page. Currently the message live forever in the DB without manual deletion, this could be changed in the future to last only a certain time."),o.a.createElement($e,{header:"Sensor data"},"Servers two jobs for sensor data is to relay realtime sensor values and functionality to client and store values from all connected endpoints to database. These jobs are not connected to each other in any way. Server is always on update with all sensor endpoints of every user and fetches data from them at certain interval. If nobody is using an endpoint anymore, server stops fetching and storing data from it."),o.a.createElement(_.a,{color:"yellow"},"Known issues:",o.a.createElement("ul",null,o.a.createElement("li",null,"Endpoint computer might not recover from reboot"),o.a.createElement("li",null,"Tests insufficient (need to dig into graphql tests more)"),o.a.createElement("li",null))),o.a.createElement(_.a,{color:"green"},"Things to improve:",o.a.createElement("ul",null,o.a.createElement("li",null,"Clean codebase"),o.a.createElement("li",null,"More tests"),o.a.createElement("li",null,"More comments"),o.a.createElement("li",null,"Improve Chat (amount of initial messages)"))))):null};function Ne(){var e=Object(j.a)(["\nmutation editUserSensorEndpoint(\n  $sensorEndpoint: String!\n  ) {\n    editUserSensorEndpoint(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    sensorEndpoint\n    name\n    username\n  }\n}\n"]);return Ne=function(){return e},e}var Fe=Object(C.a)(Ne());function qe(){var e=Object(j.a)(["\nmutation reboot(\n  $sensorEndpoint: String!\n  ) {\n    reboot(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    message\n  }\n}\n"]);return qe=function(){return e},e}var Be=Object(C.a)(qe());function He(){var e=Object(j.a)(["\nmutation validateSensorEndpoint(\n  $sensorEndpoint: String!\n  ) {\n    validateSensorEndpoint(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    message\n  }\n}\n"]);return He=function(){return e},e}var Ye=Object(C.a)(He()),Ke=function(e){var t=e.sensorsConnected,n=e.token,a=e.setToken,l=e.actions,c=e.sensorService,i=Object(r.useState)(""),s=Object(f.a)(i,2),u=s[0],m=s[1],d=re(),g=Object(f.a)(d,2),p=g[0],h=g[1],E=Object(V.a)(Fe),b=M(),w=function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(u,Ye);case 3:"Valid endpoint"===e.sent.data.validateSensorEndpoint.message&&window.confirm("Would you like to receive information about these sensors?")&&(E({variables:{sensorEndpoint:u}}),k(u,a),m("")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h("Sensor endpoint offline or invalid URL");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("WARNING: Endpoint computer might not recover correctly from reboot!")&&(b(l.reboot,Be),c.stopFetching(),setTimeout(function(){c.startFetching(n.sensorEndpoint)},5e3));case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(_.a,null,o.a.createElement(W.a,null,"Sensor resource URL"),o.a.createElement("small",{style:{color:"gray"}},"Provide an endpoint URL where sensor output comes from"),o.a.createElement(Ce.a,{"data-cy":"sensor-url-input",value:u,onChange:function(e){var t=e.target;return m(t.value)},fluid:!0,placeholder:"Enter URL...",action:o.a.createElement($.a,{"data-cy":"sensor-url-button",loading:!1,onClick:w},"Connect")}),n.sensorEndpoint?o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{color:"green"},o.a.createElement(W.a,{as:"h3"},"connected at:"),n.sensorEndpoint,o.a.createElement($.a,{fluid:!0,style:{marginTop:10},onClick:function(){window.confirm("Are you sure? Clearing sensor resource url cuts access to all information and functionality.")&&(E({variables:{sensorEndpoint:""}}),k("",a))}},"clear")),o.a.createElement(_.a,{inverted:!0,secondary:!0,color:t?"green":"red"},o.a.createElement(Y.a,{divided:!0,columns:2,textAlign:"center"},o.a.createElement(Y.a.Row,{verticalAlign:"middle"},o.a.createElement(Y.a.Column,null,"Endpoint status: ",t?"Online":"Offline"),o.a.createElement(Y.a.Column,null,o.a.createElement($.a,{disabled:!t,onClick:O,icon:"redo",content:"Reboot"})))))):o.a.createElement(_.a,{color:"red"},"Not connected"),o.a.createElement(ze.a,null),p&&o.a.createElement(K.a,{color:"red"},p))},Je=function(e){var t=e.show,n=e.sensorsConnected,a=e.token,r=e.setToken,l=e.actions,c=e.sensorService;return t?o.a.createElement(Y.a,{divided:"vertically"},o.a.createElement(Y.a.Row,null,o.a.createElement(Y.a.Column,null,o.a.createElement(Ke,{sensorsConnected:n,token:a,actions:l,sensorService:c,setToken:r})))):null},_e=n(262),Ve=function(e){var t=e.setReloadImage;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(z.a,{name:"frown",inverted:!0,color:"grey",size:"massive"}),o.a.createElement(_.a,{color:"red",inverted:!0,secondary:!0,compact:!0},o.a.createElement("p",{style:{color:"white"}},"Image failed to load...")),o.a.createElement($.a,{"data-cy":"error-button",circular:!0,icon:"redo",onClick:Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(!0);case 2:t(!1);case 3:case"end":return e.stop()}},e)}))}))},Ge={height:"100%",background:"black",display:"flex",alignItems:"center",justifyContent:"center"},Qe=function(e){var t=e.show,n=e.actions,a=Object(r.useState)(o.a.createElement(he,{inverted:!1})),l=Object(f.a)(a,2),c=l[0],i=l[1],s=Object(r.useState)("block"),u=Object(f.a)(s,2),m=u[0],d=u[1],g=Object(r.useState)(!1),p=Object(f.a)(g,2),h=p[0],E=p[1];return Object(r.useEffect)(function(){i(o.a.createElement(he,{inverted:!1})),d("block")},[t,h]),!t||h?null:o.a.createElement("div",{style:Ge},c,n?o.a.createElement(_e.a,{style:{maxWidth:800,display:"".concat(m)},centered:!0,src:n.camera,fluid:!0,onLoad:function(){return i(null)},onError:function(){i(o.a.createElement(Ve,{setReloadImage:E})),d("none")}}):null)},Xe=function(){var e=Object(r.useState)("About"),t=Object(f.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(JSON.parse(localStorage.getItem("kaste-user-token"))),c=Object(f.a)(l,2),s=c[0],u=c[1],m=I(30),d=Object(f.a)(m,5),g=d[0],p=d[1],h=d[2],E=d[3],b=d[4],v=Object(i.b)();Object(r.useEffect)(function(){s&&s.sensorEndpoint?h.startFetching(s.sensorEndpoint):h.stopFetching()},[s]);return o.a.createElement(o.a.Fragment,null,s?o.a.createElement(H,{page:n,setPage:a,logOut:function(){a("Settings"),h.stopFetching(),u(null),localStorage.clear(),v.resetStore()},actions:p,token:s,sensorService:h},o.a.createElement(we,{token:s,sensorData:g,sensorError:b,show:"Sensors"===n}),o.a.createElement(We,{show:"Chat"===n}),o.a.createElement(Le,{show:"About"===n}),o.a.createElement(Je,{show:"Settings"===n,sensorsConnected:E,token:s,setToken:u,actions:p,sensorService:h}),o.a.createElement(Qe,{show:"Video"===n,token:s,actions:p})):o.a.createElement(oe,{setToken:u}))},Ze=new p.a({uri:E.wsUrl,options:{reconnect:!0}}),et=Object(u.b)({uri:E.httpUrl}),tt=Object(d.a)(function(e,t){var n=t.headers,r=JSON.parse(localStorage.getItem("kaste-user-token"));return{headers:Object(a.a)({},n,{authorization:r?"bearer ".concat(r.value):null})}}),nt=Object(g.d)(function(e){var t=e.query,n=Object(h.l)(t),a=n.kind,r=n.operation;return"OperationDefinition"===a&&"subscription"===r},Ze,tt.concat(et)),at=new s.a({link:nt,cache:new m.a});c.a.render(o.a.createElement(i.a,{client:at},o.a.createElement(Xe,null)),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.ec449536.chunk.js.map