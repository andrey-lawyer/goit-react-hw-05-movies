"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[784],{4623:function(n,t,e){e.d(t,{L:function(){return u},v:function(){return d}});var i,r,o=e(168),a=e(6444),c=e(1087),u=(0,a.ZP)(c.OL)(i||(i=(0,o.Z)(["\n  text-decoration: none;\n  display: block;\n  font-size: 20px;\n  padding-top: 10px;\n  color: #1631cd;\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: red;\n    text-decoration: underline;\n  }\n"]))),d=a.ZP.h1(r||(r=(0,o.Z)(["\n  margin-bottom: 10px;\n  margin-top: 10px;\n"])))},2610:function(n,t,e){e.d(t,{M:function(){return a}});var i=e(7689),r=e(4623),o=e(184),a=function(n){var t=n.films,e=(0,i.TH)();return(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,i=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(r.L,{to:"/movies/".concat(t),state:{from:e},children:(0,o.jsx)("p",{children:i})})},t)}))})}},2784:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var i=e(9439),r=e(2791),o=e(5243),a=e(5562),c=e.n(a),u=e(2388);var d=e(2610),s=e(4623),l=e(184),f=function(){var n=(0,r.useState)([]),t=(0,i.Z)(n,2),e=t[0],a=t[1],f=(0,r.useState)(!1),h=(0,i.Z)(f,2),p=h[0],v=h[1];return(0,r.useEffect)((function(){v(!0),u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=cbd8d541379b4f719065dc7272b2c5fd").then((function(n){return n.data.results.map((function(n){return{id:n.id,title:n.title}}))})).then((function(n){a(n)})).catch((function(){c().Notify.failure("Something went wrong...")})).finally((function(){return v(!1)}))}),[]),(0,l.jsx)("main",{children:p?(0,l.jsx)(o.RL,{height:"80",width:"80",radius:"48",color:"#4fa94d",ariaLabel:"watch-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.v,{children:"Trending today"}),e.length>0&&(0,l.jsx)(d.M,{films:e})]})})}}}]);
//# sourceMappingURL=784.22dde4d4.chunk.js.map