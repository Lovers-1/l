(this["webpackJsonpmy-firebase-project"]=this["webpackJsonpmy-firebase-project"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(31),r=n.n(s),i=(n(41),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))}),o=n(32),l=n(33),j=n(36),b=n(35),u=n(16),d=n(11),h=(n(42),n(25),n(21));h.a.initializeApp({apiKey:"AIzaSyD2NJcpb7-Wz7JsKRDT5BFaRAzK_f3Aagg",authDomain:"lovers-517db.firebaseapp.com",projectId:"lovers-517db",storageBucket:"lovers-517db.appspot.com",messagingSenderId:"463133428169",appId:"1:463133428169:web:988b4c07581a922ae64018",measurementId:"G-V2C7VL1QXM"});var O=h.a,p=n(2),x=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),r=Object(d.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(),j=Object(d.a)(l,2),b=j[0],h=j[1],x=Object(c.useState)(),m=Object(d.a)(x,2),f=m[0],g=m[1],v=Object(c.useState)([]),N=Object(d.a)(v,2),y=(N[0],N[1]),L=O.firestore();Object(c.useEffect)((function(){var e=[];L.collection("users").get().then((function(t){t.forEach((function(t){e.push(Object(u.a)(Object(u.a)({},t.data()),{},{id:t.id})),console.log(t.data())})),y(e)}))}),[]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"banner-area",children:[Object(p.jsx)("h3",{}),Object(p.jsx)("h3",{children:"FILL THE FORM"}),Object(p.jsx)("h3",{children:"FORM"}),Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),L.collection("users").add({name:n,surname:i,location:b,age:f}).then((function(e){console.log("user add")})).catch((function(e){console.log(e)}))},children:Object(p.jsxs)("div",{className:"input-group mt-3",children:[Object(p.jsx)("span",{className:"input-group-text",children:"Name"}),Object(p.jsx)("input",{name:"name",onChange:function(e){a(e.target.value)},type:"text","aria-label":"First name",className:"form-control"}),Object(p.jsx)("span",{className:"input-group-text",children:"Surname"}),Object(p.jsx)("input",{name:"surname",onChange:function(e){o(e.target.value)},type:"text","aria-label":"Last name",className:"form-control"}),Object(p.jsx)("span",{className:"input-group-text",children:"Location"}),Object(p.jsx)("input",{name:"location",onChange:function(e){h(e.target.value)},type:"text","aria-label":"Last name",className:"form-control"}),Object(p.jsx)("span",{className:"input-group-text",children:"Age"}),Object(p.jsx)("input",{name:"age",onChange:function(e){g(e.target.value)},type:"number","aria-label":"Last name",className:"form-control"}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary ",children:" Add User"})]})})]})})},m=n(17),f=n(9),g=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2);t[0],t[1];return Object(c.useEffect)((function(){fetch("https://api.graphql.jobs/").then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){console.log("DONE")}))})),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"box-area",children:Object(p.jsxs)("div",{className:"banner-area",children:[Object(p.jsx)("h3",{children:" Users List "}),Object(p.jsx)("h3",{children:" Users List "}),Object(p.jsx)("h3",{children:" Users List "})]})})})},v=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=O.firestore();Object(c.useEffect)((function(){var e=[];s.collection("users").get().then((function(t){t.forEach((function(t){e.push(Object(u.a)(Object(u.a)({},t.data()),{},{id:t.id})),console.log(t.data())})),a(e)}))}),[]);var r=function(e){var t=e.target.id;s.collection("users").doc(t).delete().then((function(){console.log("user deleted")})).catch((function(e){console.log(e)}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{children:Object(p.jsxs)("div",{className:"box-area",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("h1",{children:"LOVERS DA LUK"})}),Object(p.jsx)("nav",{className:"navigator",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("div",{class:"btn-group",role:"group","aria-label":"Third group",children:Object(p.jsx)("button",{type:"button",class:"btn btn-info",children:Object(p.jsx)(m.b,{to:"/Landing",children:"ADD USER"})})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{class:"btn-group",role:"group","aria-label":"Third group",children:Object(p.jsx)("button",{type:"button",class:"btn btn-info",children:Object(p.jsx)(m.b,{to:"/Details",children:"DETAILS"})})})})]})})]}),Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{path:"/Details",children:Object(p.jsx)(g,{})}),Object(p.jsx)(f.a,{path:"/Landing",children:Object(p.jsx)(x,{})})]})]})}),n.map((function(e){return Object(p.jsx)("div",{className:"card",children:Object(p.jsx)("div",{className:"card mt-3",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h6",{className:"card-title",children:"User Name"}),Object(p.jsx)("p",{className:"card-text",children:e.name}),Object(p.jsx)("button",{type:"button",class:"btn btn-success",children:"EDIT"}),Object(p.jsx)("button",{id:e.id,onClick:r,type:"button",class:"btn btn-danger",children:"DELETE"}),Object(p.jsx)("button",{type:"button",class:"btn btn-warning",children:"VIEW"})]})},e.id)})}))]})},N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(v,{})})}}]),n}(c.Component);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),i()}},[[53,1,2]]]);
//# sourceMappingURL=main.6e1e9ba7.chunk.js.map