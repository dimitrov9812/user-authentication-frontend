(this["webpackJsonpauthentication-form"]=this["webpackJsonpauthentication-form"]||[]).push([[0],{208:function(e,t,a){e.exports=a(421)},421:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=function(e){e.history;return r.a.createElement("div",null,"Welcome user")},i=a(30),u=a(27),s=a(73),m=a(50),h=a(74),E=a.n(h),p=function(e){var t=e.history,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1],h=Object(n.useState)(""),p=Object(i.a)(h,2),g=p[0],d=p[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),y=f[0],v=f[1];return r.a.createElement("div",null,r.a.createElement(s.MuiThemeProvider,null,r.a.createElement(u.a,null,r.a.createElement("div",{style:{padding:20}},r.a.createElement(u.c,{hintText:"Enter your Email",floatingLabelText:"Email",onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(u.c,{type:"password",hintText:"Enter your Password",floatingLabelText:"Password",onChange:function(e){return d(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("h6",{style:{color:"red"}},y),r.a.createElement(u.b,{label:"Submit",primary:!0,onClick:function(e){return function(e){e.preventDefault();E.a.post("http://localhost:5000/api/user/login",{email:o,password:g}).then((function(e){console.log(e),200===e.status&&t.push("/home")})).catch((function(e){console.log(e),console.log(e.response.data.error.details[0].message),v(e.response.data.error.details[0].message)}))}(e)}}),r.a.createElement("h6",null,"Don't have an account? ",r.a.createElement(m.b,{to:"/register"},"Register here"))))))},g=function(e){var t=e.history,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1],h=Object(n.useState)(""),p=Object(i.a)(h,2),g=p[0],d=p[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),y=f[0],v=f[1],x=Object(n.useState)(""),j=Object(i.a)(x,2),O=j[0],T=j[1];return r.a.createElement("div",{style:{width:300,height:300,alignSelf:"center",marginTop:"15%"}},r.a.createElement(s.MuiThemeProvider,null,r.a.createElement(u.a,{style:{padding:20}},r.a.createElement("div",null,r.a.createElement(u.c,{hintText:"Enter your Username",floatingLabelText:"Username",onChange:function(e){return v(e.target.value)}}),r.a.createElement(u.c,{hintText:"Enter your Email",floatingLabelText:"Email",onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(u.c,{type:"password",hintText:"Enter your Password",floatingLabelText:"Password",onChange:function(e){return d(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("h6",{style:{color:"red"}},O),r.a.createElement(u.b,{label:"Submit",primary:!0,onClick:function(e){return function(e){e.preventDefault();E.a.post("http://localhost:5000/api/user/register",{name:y,email:o,password:g}).then((function(e){console.log(e),200===e.status&&t.push("/login")})).catch((function(e){console.log(e.response.data),T(e.response.data)}))}(e)}}),r.a.createElement("h6",null,"Already have an account? ",r.a.createElement(m.b,{to:"/login"},"Login here"))))))},d=a(12);var b=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:p}),r.a.createElement(d.a,{path:"/login",exact:!0,component:p}),r.a.createElement(d.a,{path:"/register",exact:!0,component:g}),r.a.createElement(d.a,{path:"/home",exact:!0,component:c}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.76cbd02e.chunk.js.map