(this.webpackJsonptareareact=this.webpackJsonptareareact||[]).push([[0],{51:function(t,e,n){},83:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(24),o=n.n(r),s=(n(51),n(2)),a=n(46),j=n.n(a)()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/",{path:"/flights"}),u=n(4),b=n(88),l=n(92),O=n(89),f=n(90),h=n(93),d=n(91),p=(n(83),n(1));function x(t){var e=t.flights.map((function(t){return Object(p.jsx)(g,{flight:t},t.code)})),n=Object(c.useState)([]),i=Object(s.a)(n,2),r=i[0],o=i[1];Object(c.useEffect)((function(){j.on("POSITION",(function(t){!function(t){o((function(e){return[].concat(Object(u.a)(e),[t])}))}(t)}))}),[]);var a=r.map((function(t){return Object(p.jsx)(v,{flight:t},t.code)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:'MAPA "En vivo"'}),Object(p.jsxs)(b.a,{center:[51.505,-.09],zoom:2,scrollWheelZoom:!1,children:[Object(p.jsx)(l.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(O.a,{position:[51.505,-.09],children:Object(p.jsxs)(f.a,{children:["A pretty CSS3 popup. ",Object(p.jsx)("br",{})," Easily customizable."]})}),e,a]})]})}function g(t){var e=t.flight,n=[e.origin,e.destination];return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{center:e.origin,radius:200}),Object(p.jsx)(d.a,{positions:n}),Object(p.jsx)(h.a,{center:e.destination,radius:1e3})]})}function v(t){var e=t.flight;return console.log(e.position),Object(p.jsx)(h.a,{center:e.position,pathOptions:{fillColor:"black"},radius:200})}function S(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)({}),o=Object(s.a)(r,2);o[0],o[1];Object(c.useEffect)((function(){j.emit("FLIGHTS"),j.on("FLIGHTS",(function(t){i(t)}))}),[]);var a=n.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)(m,{flight:t})})}));return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{flights:n}),Object(p.jsx)("p",{children:" INFORMACION DE LOS VUELOS "}),Object(p.jsx)("button",{onClick:function(){j.emit("FLIGHTS")},children:"Refresh Flights"}),Object(p.jsx)("ul",{children:a})]})}function m(t){return t.flight.code}n(5),n(29);var F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(p.jsxs)(i.a.StrictMode,{children:[Object(p.jsx)(S,{}),Object(p.jsx)("br",{})]}),document.getElementById("root")),F()}},[[86,1,2]]]);
//# sourceMappingURL=main.0bedecc8.chunk.js.map