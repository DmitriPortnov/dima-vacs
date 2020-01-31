(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{188:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),o=n.n(i),c=n(35),s=n(8),u=n(20),l=n(18),m=(n(89),n(3)),p=n(4),h=n(6),d=n(5),v=n(7),f=(n(26),r.a.createContext()),g=f.Provider,E=f.Consumer,b=function(){return function(e){return function(t){return r.a.createElement(E,null,(function(n){return r.a.createElement(e,Object.assign({},t,{service:n}))}))}}},k=(n(90),function(e){return{type:"USER_DATA",payload:e}}),y=function(e){return{type:"GET_LIKES",payload:e}},O=function(e){return{type:"USER_ERROR",payload:e}},j=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={username:"",password:""},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.error,n=e.expiredError;!0===t.hasError&&setTimeout((function(){return n()}),5e3)}},{key:"render",value:function(){var e=this,t=this.state,n=t.username,a=t.password,i=this.props.error;return r.a.createElement("div",{className:"log-template"},r.a.createElement("h2",null,"Login"),r.a.createElement("div",{className:"form"},r.a.createElement("input",{type:"text",id:"username",placeholder:"username",value:n,onChange:function(t){var n=t.target;return e.setState({username:n.value})}}),r.a.createElement("input",{type:"password",id:"password",placeholder:"password",value:a,onChange:function(t){var n=t.target;return e.setState({password:n.value})},onKeyDown:function(t){return"Enter"===t.key?e.props.login({username:n,password:a}):null}}),i.hasError?r.a.createElement("p",{className:"error-text"},i.message):null,r.a.createElement("button",{onClick:function(){return e.props.login({username:n,password:a})}},"Submit"),r.a.createElement("p",null,"not regestered yet? --\x3e ",r.a.createElement(u.b,{to:"/sign-up"},r.a.createElement("strong",null,"sign up")))))}},{key:"componentDidMount",value:function(){var e=this;this.props.service.loggedIn().then((function(t){var n=t.data;return e.props.loggedIn(n)})).catch((function(){return null}))}}]),t}(a.Component),N=Object(s.b)((function(e){return e}),(function(e,t){var n=t.service.login;return{loggedIn:function(t){return e(k(t))},login:function(t){return n(t).then((function(t){var n=t.data;e(k(n))})).catch((function(t){var n=t.response.data;return e(O({hasError:!0,message:n.message}))}))},expiredError:function(){return e(O({hasError:!1,message:""}))}}}))(j),D=(n(92),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={username:"",password:"",firstname:"",lastname:""},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.error,n=e.expiredError;!0===t.hasError&&setTimeout((function(){return n()}),4e3)}},{key:"render",value:function(){var e=this,t=this.props.error,n=this.state,a=n.username,i=n.firstname,o=n.lastname,c=n.password;return r.a.createElement("div",{className:"log-template"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("div",{className:"form"},r.a.createElement("input",{type:"text",value:i,onChange:function(t){var n=t.target;return e.setState({firstname:n.value})},placeholder:"firstname",required:!0}),r.a.createElement("input",{type:"text",value:o,onChange:function(t){var n=t.target;return e.setState({lastname:n.value})},placeholder:"lastname",required:!0}),r.a.createElement("input",{type:"text",value:a,onChange:function(t){var n=t.target;return e.setState({username:n.value})},placeholder:"username",required:!0}),r.a.createElement("input",{type:"password",value:c,onChange:function(t){var n=t.target;return e.setState({password:n.value})},onKeyDown:function(t){return"Enter"===t.key?e.props.registration(e.state):null},placeholder:"password",required:!0}),t.hasError?r.a.createElement("p",{className:"error-text"},t.message):null,r.a.createElement("button",{onClick:function(){return e.props.registration(e.state)}},"Submit"),r.a.createElement("p",null,"back to ",r.a.createElement(u.b,{to:"/login"},"Login"))))}}]),t}(a.Component)),C=Object(s.b)((function(e){return e}),(function(e,t){var n=t.service.signUp;return{registration:function(t){return n(t).then((function(t){var n=t.data;return e(k(n))})).catch((function(t){var n=t.response.data;return e(O({hasError:!0,message:n.message}))}))},expiredError:function(){return e(O({hasError:!1,message:""}))}}}))(D),V=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={isLoggedIn:!1,isAdmin:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.history.push;if(e.user._id!==this.props.user._id)return 1===this.props.user.permition?t("/editor"):t("/vacations")}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"see your next vacation!!!"),"/sign-up"===this.props.match.path?r.a.createElement(C,this.props):r.a.createElement(N,this.props))}}]),t}(a.Component),_=b()(Object(s.b)((function(e){return{user:e.user}}),null)(V)),w=function(e){return{type:"GET_ALL_VACATIONS",payload:e}},I=(n(93),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={isAdmin:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"logoutBtn",value:function(){var e=this;this.props.service.logout().then((function(){e.props.nullUser(),e.props.history.push("/")}))}},{key:"chartBtn",value:function(){this.props.history.push("/charts")}},{key:"render",value:function(){var e=this,t=this.props.user,n=t.firstname,a=t.lastname;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-text"},r.a.createElement("h1",null,"Vacations"),r.a.createElement("span",null,"hello ",n," ",a)),r.a.createElement("div",{className:"nav-buttons"},this.state.isAdmin?this.adminButtons():null,r.a.createElement("button",{className:"logout-btn",onClick:function(){return e.logoutBtn()}},r.a.createElement("i",{className:"material-icons"},"power_settings_new"))))}},{key:"adminButtons",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement("button",{className:"add-btn",onClick:function(){return e.props.chooseVacationID()}},r.a.createElement("i",{className:"material-icons"},"add")),r.a.createElement("button",{className:"charts-btn",onClick:function(){return e.chartBtn()}},r.a.createElement("i",{className:"material-icons"},"bar_chart")))}},{key:"componentDidMount",value:function(){var e=this.props,t=e.user,n=e.history;"guest"===t.firstname&&0===t._id&&n.push("/"),this.props.user.permition>0&&this.setState({isAdmin:!0})}}]),t}(a.Component)),A=Object(s.b)((function(e){return{user:e.user}}),(function(e){return{nullUser:function(){return e({type:"RESET_STATE"})},gotError:function(t){return e(O({hasError:!0,message:t.message}))}}}))(I),S=(n(94),function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.chooseVacationID()}},r.a.createElement("i",{className:"material-icons"},"edit")),r.a.createElement("button",{className:"like-btn",onClick:function(){return e.secondFunction()}},r.a.createElement("i",{className:"material-icons"},"delete")))}),L=function(e){var t=e.likes.find((function(t){return t.vacId===e.vacation._id}));return r.a.createElement(a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.chooseVacationID()}},r.a.createElement("i",{className:"material-icons"},"info")),r.a.createElement("button",{className:t?"like-btn liked":"like-btn",onClick:function(){return e.secondFunction()}},r.a.createElement("i",{className:"material-icons"},"favorite_border")))},U=function(e){var t=e.vacation,n=e.permition,a=e.imgUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a,alt:"vacation_pic"}),r.a.createElement("div",{className:"card-title"},r.a.createElement("span",null,t.title)),r.a.createElement("div",{className:"card-btn"},1===n?S(e):L(e)))},T=(n(95),function(e){var t=e.vacation,n=e.closeDetailPage,a=e.imgUrl;return r.a.createElement("div",{className:"vacation-full-page",onClick:function(){return n()}},r.a.createElement("div",{className:"vacation-description"},r.a.createElement("div",{className:"title-fullPage"},r.a.createElement("p",null,t.title),r.a.createElement("button",{onClick:function(){return n()}},r.a.createElement("i",{className:"material-icons"},"close"))),r.a.createElement("img",{src:a(t.image),alt:"vacation_pic"}),r.a.createElement("div",{className:"full-description"},r.a.createElement("p",null,t.description))))}),x=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={showVacationDetails:!1,vacationID:""},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"getAllVacations",value:function(){var e=this,t=this.props,n=t.service.getAllVacations,a=t.getVacations;n().then((function(e){var t=e.data;a(t)})).catch((function(t){var n=t.response.data;console.log(e.props),e.props.gotError(n)})),this.getUserLikes(this.props.user._id)}},{key:"getUserLikes",value:function(e){var t=this;this.props.service.usersWatch(e).then((function(e){var n=e.data;t.props.userLikes(n)}))}},{key:"getVacationDetails",value:function(e){this.setState({showVacationDetails:!0,vacationID:e})}},{key:"closeDetailPage",value:function(){this.setState({showVacationDetails:!1})}},{key:"usersLikeFunc",value:function(e){var t=this,n=this.props,a=n.user,r=n.likes,i=n.service.userWatchFunc,o=r.find((function(t){var n=t.vacId;return e===n}));i(a._id,e,o).then((function(){return t.getUserLikes(a._id)})).catch((function(e){return console.log("likes error",e)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.vacations,a=t.user.permition,i=t.likes,o=t.service.getImage,c=this.state,s=c.showVacationDetails,u=c.vacationID;return null===n|void 0?null:r.a.createElement("div",{className:"vacations-page"},s?r.a.createElement(T,{vacation:n[u],imgUrl:function(e){return o(e)},closeDetailPage:function(){return e.closeDetailPage()}}):null,r.a.createElement(A,this.props),r.a.createElement("div",{className:"vacations"},n.map((function(t,n){return r.a.createElement(U,{vacation:t,key:n,permition:a,likes:i,imgUrl:o(t.image),chooseVacationID:function(){return e.getVacationDetails(n)},secondFunction:function(){return e.usersLikeFunc(t._id)}})}))))}},{key:"componentDidMount",value:function(){this.getAllVacations()}}]),t}(a.Component),F=b()(Object(s.b)((function(e){return e}),(function(e){return{getVacations:function(t){return e(w(t))},userLikes:function(t){return e(y(t))},gotError:function(t){return e(O({hasError:!0,message:t.message}))}}}))(x)),R=n(77),P=(n(96),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={_id:0,title:"",description:"",image:""},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"onChange",value:function(e,t){this.setState(Object(R.a)({},e,t))}},{key:"sendVac",value:function(){var e=this;this.props.service.sendVacation(this.state).then((function(){e.props.closePage()})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.description;return r.a.createElement("div",{className:"editor-page"},r.a.createElement("h2",null,"vacation editor"),r.a.createElement("div",{className:"vacation-editor"},r.a.createElement("input",{type:"text",placeholder:"Title",value:n,onChange:function(t){var n=t.target;return e.onChange("title",n.value)}}),r.a.createElement("textarea",{placeholder:"Description",value:a,onChange:function(t){var n=t.target;return e.onChange("description",n.value)}}),r.a.createElement("label",{className:"editor-file",htmlFor:"file-upload"},"Choose your file"),r.a.createElement("input",{id:"file-upload",type:"file",onChange:function(t){var n=t.target;return e.onChange("image",n.files[0])}}),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"submit-btn",onClick:function(){return e.sendVac()}},"submit"),r.a.createElement("button",{className:"close-btn",onClick:function(){return e.props.closePage()}},"close"))))}},{key:"componentDidMount",value:function(){if(null===this.props.vacationDetails)return null;var e=this.props.vacationDetails,t=e._id,n=e.title,a=e.description,r=e.image;this.setState({_id:t,title:n,description:a,image:r})}}]),t}(a.Component)),B=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={vacationID:0,editor:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"errorHandler",value:function(e){this.props.gotError(e),this.props.history.push("/")}},{key:"getAllVacations",value:function(){var e=this,t=this.props,n=t.service.getAllVacations,a=t.getVacations;n().then((function(e){var t=e.data;return a(t)})).catch((function(t){var n=t.response.data;return e.errorHandler(n)}))}},{key:"getVacationDetailsForChange",value:function(){var e=this.props.vacations,t=this.state.vacationID;return t?e[t]:null}},{key:"getVacationDetails",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.setState({editor:!0,vacationID:e})}},{key:"closePage",value:function(){this.getAllVacations(),this.setState({editor:!1})}},{key:"deleteVac",value:function(e){var t=this,n=this.props.vacations[e]._id;this.props.service.deleteVacation(n).then((function(){t.getAllVacations()})).catch((function(e){var n=e.response.data;return t.errorHandler(n)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.user.permition,a=t.likes,i=t.vacations,o=t.service,c=this.state.editor;return r.a.createElement("div",{className:"admin-page"},c?r.a.createElement(P,{service:o,closePage:function(){return e.closePage()},vacationDetails:this.getVacationDetailsForChange()}):null,r.a.createElement(A,Object.assign({},this.props,{chooseVacationID:function(){return e.getVacationDetails()}})),r.a.createElement("div",{className:"vacations"},i.map((function(t,i){return r.a.createElement(U,{vacation:t,key:i,permition:n,likes:a,imgUrl:o.getImage(t.image),chooseVacationID:function(){return e.getVacationDetails(i)},secondFunction:function(){return e.deleteVac(i)}})}))))}},{key:"componentDidMount",value:function(){this.getAllVacations()}}]),t}(a.Component),M=b()(Object(s.b)((function(e){return e}),(function(e){return{getVacations:function(t){return e(w(t))},gotError:function(t){return e(O({hasError:!0,message:t.message}))}}}))(B)),q=n(78),G=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={options:{legend:{display:!1},maintainAspectRatio:!1}},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){console.log("charts",this.props);var e=this.props.likes;return r.a.createElement("div",{className:"chart-page"},r.a.createElement("h2",null,"watch Chart"),r.a.createElement("div",{className:"for-mobile"},r.a.createElement("p",null,"please turn your phone"),r.a.createElement("i",{class:"aside material-icons"},"aspect_ratio")),r.a.createElement("div",{className:"chart"},0!==e.length?r.a.createElement(q.a,{data:e,color:"#AEB6BF",options:this.state.options}):"there is no data to show"))}},{key:"componentDidMount",value:function(){var e=this;this.props.service.getAllLikes().then((function(t){var n=t.data;return e.props.getLikes(n)})).catch((function(e){var t=e.response.data;return console.error(t)}))}}]),t}(a.Component),K=b()(Object(s.b)((function(e){return e}),(function(e){return{getLikes:function(t){return e(y(t))}}}))(G)),W=function(){return r.a.createElement("div",{className:"main"},r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0},r.a.createElement(l.a,{to:"/login"})),r.a.createElement(l.b,{path:"/login",component:_}),r.a.createElement(l.b,{path:"/sign-up",component:_}),r.a.createElement(l.b,{path:"/vacations",component:F}),r.a.createElement(l.b,{path:"/editor",component:M}),r.a.createElement(l.b,{path:"/charts",component:K})))},H=function(e,t){switch(t.type){case"TEST":case"USER_DATA":return t.payload;default:return e.user}},J=function(e,t){switch(t.type){case"GET_ALL_VACATIONS":return t.payload;default:return e.vacations}},z=function(e,t){switch(t.type){case"USER_ERROR":return t.payload;default:return e.error}},Q=function(e,t){switch(t.type){case"GET_LIKES":return t.payload;default:return e.likes}},X={user:{_id:0,username:"",firstname:"guest",lastname:"",permition:0},vacations:[{_id:0,title:"",description:"",image:""}],error:{hasError:!1,message:""},likes:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_STATE":return X;default:return{user:H(e,t),vacations:J(e,t),error:z(e,t),likes:Q(e,t)}}},Z=(n(188),function(e){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("span",null,"this is an Error line"))}),$=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={isError:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.state.isError?r.a.createElement(Z,null):this.props.children}}]),t}(a.Component),ee=n(12),te=n.n(ee),ne="http://dima-vacs.herokuapp.com",ae=new(function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,[{key:"loggedIn",value:function(){return te.a.post("".concat(ne,"/user/loggedIn"))}},{key:"login",value:function(e){return e.username=e.username.toLowerCase(),te.a.post("".concat(ne,"/user/login"),e)}},{key:"signUp",value:function(e){return te.a.put("".concat(ne,"/user/sign-up"),e)}},{key:"logout",value:function(){return te.a.get("".concat(ne,"/user/logout"))}},{key:"getAllVacations",value:function(){return te.a.get("".concat(ne,"/vacation"))}},{key:"getImage",value:function(e){return"".concat(ne,"/vacation/vacImg/").concat(e)}},{key:"sendVacation",value:function(e){console.log("sendVacation",e),console.log(typeof e.image);var t=new FormData,n={"content-type":"multipart/form-data"};return""===e.title&&""===e.description||("object"===typeof e.image&&(console.log("file added"),t.append("image",e.image)),t.append("title",e.title),t.append("description",e.description)),0===e._id?te.a.put("".concat(ne,"/vacation"),t,{headers:n}):te.a.patch("".concat(ne,"/vacation/").concat(e._id),t,{headers:n})}},{key:"deleteVacation",value:function(e){return te.a.delete("".concat(ne,"/vacation/").concat(e))}},{key:"usersWatch",value:function(e){return te.a.get("".concat(ne,"/likes/").concat(e))}},{key:"userWatchFunc",value:function(e,t,n){return n?te.a.delete("".concat(ne,"/likes/").concat(n.userId,"/").concat(n.vacId)):te.a.put("".concat(ne,"/likes/").concat(e,"/").concat(t))}},{key:"getAllLikes",value:function(){return te.a.get("".concat(ne,"/likes/chart-likes"))}}]),e}()),re=Object(c.b)(Y);o.a.render(r.a.createElement(s.a,{store:re},r.a.createElement($,null,r.a.createElement(g,{value:ae},r.a.createElement(u.a,null,r.a.createElement(W,null))))),document.getElementById("root"))},26:function(e,t,n){},80:function(e,t,n){e.exports=n(205)},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[80,1,2]]]);
//# sourceMappingURL=main.5dc9e97e.chunk.js.map