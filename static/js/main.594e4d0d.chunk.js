(this.webpackJsonptareareact=this.webpackJsonptareareact||[]).push([[0],{38:function(t,e,n){},70:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(33),o=n.n(s),r=(n(38),n(7)),a=n(9),u=n.n(a),O=(n(70),n(0)),j=u()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/",{path:"/flights"});function l(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(0),o=Object(r.a)(s,2);o[0],o[1];return Object(c.useEffect)((function(){j.on("FLIGHTS",(function(t){i(JSON.stringify(t))}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:" INFORMACION DE LOS VUELOS "}),Object(O.jsx)("button",{onClick:function(){return console.log("voy a solicitar los vuelos"),void j.emit("FLIGHTS")},children:"Get Flights"}),n]})}function b(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=(e[0],e[1]),i=Object(c.useState)(0),s=Object(r.a)(i,2),o=s[0],a=s[1];return Object(c.useEffect)((function(){var t=u()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/",{path:"/flights"});t.emit("FLIGHTS"),t.on("FLIGHTS",(function(t){n(JSON.stringify(t))})),t.on("POSITION",(function(t){n(JSON.stringify(t))}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:" CENTRO DE CONTROL "}),Object(O.jsx)("button",{onClick:function(){return a(o+1)},children:"Click me"})]})}function f(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=(e[0],e[1]),i=Object(c.useState)(0),s=Object(r.a)(i,2),o=s[0],a=s[1];return Object(c.useEffect)((function(){var t=u()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/",{path:"/flights"});t.emit("FLIGHTS"),t.on("FLIGHTS",(function(t){n(JSON.stringify(t))})),t.on("POSITION",(function(t){n(JSON.stringify(t))})),document.title="You clicked ".concat(o," times")}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:'MAPA "En vivo"'}),Object(O.jsx)("button",{onClick:function(){return a(o+1)},children:"Click me"})]})}var d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),s(t),o(t)}))};o.a.render(Object(O.jsxs)(i.a.StrictMode,{children:[Object(O.jsx)(l,{}),Object(O.jsx)(b,{}),Object(O.jsx)(f,{})]}),document.getElementById("root")),d()}},[[72,1,2]]]);
//# sourceMappingURL=main.594e4d0d.chunk.js.map