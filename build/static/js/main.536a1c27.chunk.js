(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){e.exports=n(374)},374:function(e,t,n){"use strict";n.r(t);var a=n(103),r=n(0),l=n.n(r),o=n(54),c=n.n(o),i=n(66),s=n(44),u=n(63),m=n(53),d=n(197),g=n(21),E=n(196),p=n(6),b={wsUrl:"wss://lit-forest-54340.herokuapp.com/graphql",httpUrl:"https://lit-forest-54340.herokuapp.com/graphql"},v=n(20),f=n(41),h=n.n(f),O=n(64),y=n(93),k=n.n(y),j=function(e,t){return e.map(function(e){return e.id}).includes(t.id)},w=function(e){return Object.values(e).reduce(function(e,t){return t.concat(e)})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(r.useState)(null),n=Object(v.a)(t,2),a=n[0],l=n[1];return[a,function(t){l(t),setTimeout(function(){l(null)},1e3*e)}]},C=n(401),I=n(397),x=n(394),P=n(55),A=function(e){var t=e.children,n=e.setPage,a=e.logOut,o=e.page,c=Object(r.useState)(!1),i=Object(v.a)(c,2),s=i[0],u=i[1],m=Object(r.useState)(!1),d=Object(v.a)(m,2),g=d[0],E=d[1],p=function(e){return function(){E(!1),n(e)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{maxWidth:C.a.onlyMobile.maxWidth,as:I.a.Pushable,style:{height:"100vh"}},l.a.createElement(I.a,{as:x.a,animation:"push",inverted:!0,onHide:function(){return E(!1)},vertical:!0,visible:g,icon:"labeled",width:"thin"},l.a.createElement(x.a.Item,{onClick:p("Sensors")},l.a.createElement(P.a,{name:"info"}),"Sensors"),l.a.createElement(x.a.Item,{onClick:p("Chat")},l.a.createElement(P.a,{name:"comments outline"}),"Chat"),l.a.createElement(x.a.Item,{disabled:s,onClick:function(){u(!0),console.log("Watering plants plants"),setTimeout(function(){u(!1),console.log("Watering completed")},5e3)}},l.a.createElement(P.a,{name:"exclamation"}),"Water plants"),l.a.createElement(x.a.Item,{onClick:function(){return console.log("Reboot rasp")}},l.a.createElement(P.a,{name:"redo"}),"Reboot rasp"),l.a.createElement(x.a.Item,{onClick:p("Settings")},l.a.createElement(P.a,{name:"settings"}),"Settings"),l.a.createElement(x.a.Item,{onClick:p("About")},l.a.createElement(P.a,{name:"question"}),"About")),l.a.createElement(I.a.Pusher,{style:{height:"100%"},dimmed:g},l.a.createElement(x.a,{widths:3,inverted:!0,pointing:!0,color:"green",size:"large",style:{height:"10%",marginBottom:0,borderRadius:0}},l.a.createElement(x.a.Item,{onClick:function(){return E(!0)},style:{alignSelf:"center"}},l.a.createElement(P.a,{name:"sidebar"})),l.a.createElement(x.a.Item,{header:!0},o),l.a.createElement(x.a.Item,{position:"right",onClick:function(){return a(!1)},style:{alignSelf:"center"}},l.a.createElement(P.a,{name:"log out"}))),t)))},T=function(e){var t=e.children,n=e.setPage,a=e.logOut,o=Object(r.useState)(!1),c=Object(v.a)(o,2),i=c[0],s=c[1],u=function(e){return function(){n(e)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{minWidth:C.a.onlyTablet.minWidth},l.a.createElement(x.a,{inverted:!0,icon:"labeled",color:"green",fixed:"top"},l.a.createElement(x.a.Item,{onClick:u("Sensors")},l.a.createElement(P.a,{name:"info"}),"Sensors"),l.a.createElement(x.a.Item,{onClick:u("Chat")},l.a.createElement(P.a,{name:"comments outline"}),"Chat"),l.a.createElement(x.a.Item,{disabled:i,onClick:function(){s(!0),console.log("Watering plants plants"),setTimeout(function(){s(!1),console.log("Watering completed")},5e3)}},l.a.createElement(P.a,{name:"exclamation"}),"Water plants"),l.a.createElement(x.a.Item,{onClick:function(){return console.log("Reboot rasp")}},l.a.createElement(P.a,{name:"redo"}),"Reboot rasp"),l.a.createElement(x.a.Menu,{position:"right"},l.a.createElement(x.a.Item,{onClick:u("Settings")},l.a.createElement(P.a,{name:"settings"}),"Settings"),l.a.createElement(x.a.Item,{onClick:u("About")},l.a.createElement(P.a,{name:"question"}),"About"),l.a.createElement(x.a.Item,{onClick:function(){return a(!1)}},l.a.createElement(P.a,{name:"log out"}),"Log out"))),l.a.createElement("div",{style:{height:71}}),t))},L=function(e){var t=e.children,n=e.setPage,a=e.logOut,r=e.page;return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{logOut:a,page:r,setPage:n},t),l.a.createElement(T,{logOut:a,setPage:n},t))},R=n(400),U=n(399),W=n(389),$=n(395),q=n(376),D=n(392),F=n(383),J=n(35),M=n(36);function N(){var e=Object(J.a)(["\nmutation loginUser(\n  $password: String!\n  $username: String!\n  ) {\n  login(\n    password: $password\n    username: $username\n  ) {\n    value\n    username\n    sensorEndpoint\n  }\n}\n"]);return N=function(){return e},e}var z=Object(M.a)(N()),B=function(e){var t=e.setToken,n=Object(F.a)(z),a=S(),o=Object(v.a)(a,2),c=o[0],i=o[1],s=Object(r.useState)(""),u=Object(v.a)(s,2),m=u[0],d=u[1],g=Object(r.useState)(""),E=Object(v.a)(g,2),p=E[0],b=E[1],f=function(){var e=Object(O.a)(h.a.mark(function e(){var a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n({variables:{username:m,password:p}});case 3:a=e.sent,r=a.data.login,console.log("token",r),t(r),localStorage.setItem("kaste-user-token",JSON.stringify(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),i(e.t0.graphQLErrors[0].message);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"login-form"},l.a.createElement("style",null," ","\n  body > div,\n  body > div > div,\n  body > div > div > div.login-form {\n    height: 100%;\n  }\n          "),l.a.createElement(R.a,{textAlign:"center",style:{height:"100%",background:"lightgreen"},verticalAlign:"middle"},l.a.createElement(R.a.Column,{style:{maxWidth:250}},l.a.createElement(U.a,{as:"h1",color:"grey",dividing:!0,textAlign:"center"},"Log in to Kaste 2.0"),l.a.createElement(W.a,{size:"large",onSubmit:f},l.a.createElement($.a,{stacked:!0,raised:!0},l.a.createElement(W.a.Input,{type:"text",value:m,onChange:function(e){var t=e.target;return d(t.value)},fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username"}),l.a.createElement(W.a.Input,{type:"password",value:p,onChange:function(e){var t=e.target;return b(t.value)},fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password"}),l.a.createElement(q.a,{color:"brown",size:"large",type:"submit"},"Log in")),c&&l.a.createElement(D.a,{negative:!0},c)))))},_=function(e){var t=e.value,n=e.label;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,n,": ",t))},K=function(e){var t=e.sensor;return l.a.createElement($.a,{color:"green",inverted:!0,secondary:!0,style:{margin:"2px 1px"}},l.a.createElement(_,{value:t.type,label:"Type"}),l.a.createElement(_,{value:t.model,label:"Model"}),l.a.createElement(_,{value:t.location,label:"Location"}),l.a.createElement(_,{value:t.nutrient,label:"Nutrient"}),l.a.createElement(_,{value:t.light,label:"Light"}),l.a.createElement(_,{value:t.temperature_C,label:"Temperature"}),l.a.createElement(_,{value:t.soil_moisture,label:"Soil moisture"}),l.a.createElement(_,{value:t.time,label:"Updated"}),l.a.createElement(_,{value:t.battery_low,label:"Battery"}))},Q=function(e){var t=e.sensor;return l.a.createElement($.a,{color:"brown",inverted:!0,secondary:!0,style:{margin:"2px 1px"}},l.a.createElement(_,{value:t.type,label:"Type"}),l.a.createElement(_,{value:t.model,label:"Model"}),l.a.createElement(_,{value:t.location,label:"Location"}),l.a.createElement(_,{value:t.humidity,label:"Humidity"}),l.a.createElement(_,{value:t.temperature_C,label:"Temperature"}))},H=function(e){var t=e.show,n=e.sensorData;if(Object(r.useEffect)(function(){n&&console.log(n)},[n]),!t)return null;return l.a.createElement("div",{style:{height:"90%",overflow:"scroll",marginTop:5}},n?n.map(function(e){return"plant"===e.type?l.a.createElement(K,{key:e.id,sensor:e}):l.a.createElement(Q,{key:e.id,sensor:e})}):null)},V=n(398),G=n(387),Y=n(388),X=n(390),Z=n(384);function ee(){var e=Object(J.a)(["\n{\n  messages {\n    content\n    created\n    id\n    user {\n      name\n    }\n  }\n}\n"]);return ee=function(){return e},e}var te=Object(M.a)(ee());function ne(){var e=Object(J.a)(["\nmutation createMessage(\n  $content: String!\n  ) {\n  createMessage(\n    content: $content\n  ) {\n    content\n    user {\n      name\n    }\n    created\n    id\n  }\n}\n"]);return ne=function(){return e},e}var ae=Object(M.a)(ne());function re(){var e=Object(J.a)(["\nsubscription {\n  messageAdded {\n    content\n    created\n    id\n    user {\n      name\n    }\n  }\n}\n"]);return re=function(){return e},e}var le=Object(M.a)(re()),oe=n(385),ce=function(e){var t=e.message;return l.a.createElement(X.a,{style:{marginTop:7,paddingTop:7}},l.a.createElement($.a,{style:{margin:"0 0 5px 0",padding:7},compact:!0,inverted:!0,color:"green",secondary:!0},l.a.createElement(X.a.Content,null,l.a.createElement(X.a.Author,{style:{color:"darkgreen"},as:"a"},t.user.name),l.a.createElement(X.a.Metadata,null,l.a.createElement("div",null,new Date(parseInt(t.created)).toLocaleString())),l.a.createElement(oe.a,{style:{margin:"4px 0px 4px 0px"}}),t.content)))},ie=n(393),se=n(386),ue=function(){return l.a.createElement(ie.a,{active:!0,inverted:!0},l.a.createElement(se.a,{size:"massive",inverted:!0},"Loading"))},me=function(e){var t=e.show,n=Object(V.a)(te),a=n.data,o=n.loading,c=Object(r.useState)(""),i=Object(v.a)(c,2),s=i[0],u=i[1],m=Object(r.useRef)(null);Object(r.useEffect)(function(){g()},[t]);var d=Object(F.a)(ae),g=(Object(G.a)(le,{onSubscriptionData:function(e){var t=e.client,n=e.subscriptionData,a=t.readQuery({query:te}),r=n.data.messageAdded;j(a.messages,r.id)||(a.messages.push(r),t.writeQuery({query:te,data:a,id:1}),m.current.scrollIntoView({block:"end",behavior:"smooth"}))}}),function(){m.current&&m.current.scrollIntoView({block:"end",behavior:"smooth"})}),E=function(){s.length<1||(d({variables:{content:s}}),u(""))};return t?l.a.createElement("div",{style:{height:"90%"}},l.a.createElement(Y.a,{style:{height:"90%",overflowY:"scroll"}},o?l.a.createElement(ue,null):l.a.createElement(X.a.Group,null,a.messages.map(function(e){return l.a.createElement(ce,{key:e.id,message:e})})),l.a.createElement("div",{id:"el",ref:m})),l.a.createElement(x.a,{fluid:!0,color:"grey",style:{marginBottom:0,marginTop:0,height:"10%"}},l.a.createElement(x.a.Item,{style:{width:"80vw"}},l.a.createElement(Z.a,{fluid:!0,value:s,onChange:function(e){var t=e.target;return u(t.value)},onKeyPress:function(e){"Enter"===e.key&&E()},onFocus:g})),l.a.createElement(x.a.Item,{style:{width:"20vw",justifyContent:"center"},onClick:E},l.a.createElement(P.a,{name:"send",inverted:!0,circular:!0,color:"green"})))):null},de=n(391),ge=function(e){return e.show?l.a.createElement(Y.a,{textAlign:"center"},l.a.createElement(U.a,{as:"h1",style:{padding:25}},"About Kaste 2.0"),l.a.createElement(de.a,{style:{background:"lightgreen"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Aim:"),l.a.createElement("td",null,"Design and implement a responsive web app to monitor and water plants.")),l.a.createElement("tr",null,l.a.createElement("td",null,"Features:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Plantwatering functionality for two or more users"),l.a.createElement("li",null,"Possibility to read plant info through charts"),l.a.createElement("li",null,"Simple chat"),l.a.createElement("li",null,"Rebooting Raspberry (that controls sensor data)"))))))):null};function Ee(){var e=Object(J.a)(["\nmutation editUserSensorEndpoint(\n  $sensorEndpoint: String!\n  ) {\n    editUserSensorEndpoint(\n    sensorEndpoint: $sensorEndpoint\n  ) {\n    sensorEndpoint\n    name\n    username\n  }\n}\n"]);return Ee=function(){return e},e}var pe=Object(M.a)(Ee()),be=function(e){var t=e.sensorsConnected,n=e.token,o=Object(r.useState)(null),c=Object(v.a)(o,2),i=(c[0],c[1]),s=Object(r.useState)(""),u=Object(v.a)(s,2),m=u[0],d=u[1],g=S(),E=Object(v.a)(g,2),p=E[0],b=E[1],f=Object(F.a)(pe),y=function(){var e=Object(O.a)(h.a.mark(function e(){var t,n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(m);case 3:t=e.sent,Object.keys(t.data).includes("sensors")&&window.confirm("Would you like to receive information about these sensors?")&&(f({variables:{sensorEndpoint:m}}),i(m),n=JSON.parse(localStorage.getItem("kaste-user-token")),localStorage.removeItem("kaste-user-token"),r=Object(a.a)({},n,{sensorEndpoint:m}),window.localStorage.setItem("kaste-user-token",JSON.stringify(r)),d("")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();return l.a.createElement($.a,null,l.a.createElement(U.a,null,"Sensor resource URL"),l.a.createElement("small",{style:{color:"gray"}},"Provide an endpoint URL where sensor output comes from"),l.a.createElement(Z.a,{value:m,onChange:function(e){var t=e.target;return d(t.value)},fluid:!0,placeholder:"Enter URL...",action:l.a.createElement(q.a,{loading:!1,onClick:y},"connect")}),t?l.a.createElement($.a,{color:"green"},"connected at: ",l.a.createElement("br",null),n.sensorEndpoint):l.a.createElement($.a,{color:"red"},"not connected"),l.a.createElement(oe.a,null),p&&l.a.createElement(D.a,{color:"red"},p))},ve=function(e){var t=e.show,n=e.sensorsConnected,a=e.token;return t?l.a.createElement(R.a,{divided:"vertically"},l.a.createElement(R.a.Row,null,l.a.createElement(R.a.Column,null,l.a.createElement(be,{sensorsConnected:n,token:a})))):null},fe=function(){var e=Object(r.useState)("Sensors"),t=Object(v.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(JSON.parse(localStorage.getItem("kaste-user-token"))),c=Object(v.a)(o,2),i=c[0],s=c[1],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=Object(r.useState)(null),n=Object(v.a)(t,2),a=n[0],l=n[1],o=Object(r.useState)(null),c=Object(v.a)(o,2),i=c[0],s=c[1],u=Object(r.useState)(!1),m=Object(v.a)(u,2),d=m[0],g=m[1],E=S(null),p=Object(v.a)(E,2),b=p[0],f=p[1],y=function(){var e=Object(O.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(t);case 3:n=e.sent,l(w(n.data.sensors)),s(n.data.actions),g(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),g(!1),f(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}();return[a,i,function(t){console.log("fetching..."),y(t),setInterval(function(){console.log("fetching..."),y(t)},1e3*e)},d,b]}(60),m=Object(v.a)(u,5),d=m[0],g=(m[1],m[2]),E=m[3];m[4];Object(r.useEffect)(function(){i&&i.sensorEndpoint&&g(i.sensorEndpoint)},[i]);return l.a.createElement(l.a.Fragment,null,i?l.a.createElement(L,{page:n,setPage:a,logOut:function(){s(null),localStorage.removeItem("kaste-user-token")}},l.a.createElement(H,{sensorData:d,show:"Sensors"===n}),l.a.createElement(me,{show:"Chat"===n}),l.a.createElement(ge,{show:"About"===n}),l.a.createElement(ve,{show:"Settings"===n,sensorsConnected:E,token:i})):l.a.createElement(B,{setToken:s}))},he=new E.a({uri:b.wsUrl,options:{reconnect:!0}}),Oe=Object(u.b)({uri:b.httpUrl}),ye=Object(d.a)(function(e,t){var n=t.headers,r=JSON.parse(localStorage.getItem("kaste-user-token"));return console.log("token",r),{headers:Object(a.a)({},n,{authorization:r?"bearer ".concat(r.value):null})}}),ke=Object(g.d)(function(e){var t=e.query,n=Object(p.l)(t),a=n.kind,r=n.operation;return"OperationDefinition"===a&&"subscription"===r},he,ye.concat(Oe)),je=new s.a({link:ke,cache:new m.a});c.a.render(l.a.createElement(i.a,{client:je},l.a.createElement(fe,null)),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.536a1c27.chunk.js.map