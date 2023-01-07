"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[508],{4508:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var i=t(9439),o=t(2791),r=t(7689),a=t(5243),s=t(5562),c=t.n(s),l=t(2388);var d,p,x,v,u,h,f,m,g=t(168),b=t(6444),j=t(1087),Z=b.ZP.div(d||(d=(0,g.Z)(["\n  display: flex;\n  padding-bottom: 10px;\n  border-bottom: 1px solid grey;\n"]))),w=b.ZP.h1(p||(p=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 35px;\n"]))),k=b.ZP.div(x||(x=(0,g.Z)(["\n  padding-left: 15px;\n"]))),y=b.ZP.p(v||(v=(0,g.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),_=b.ZP.p(u||(u=(0,g.Z)(["\n  font-size: 16px;\n  padding: 0;\n  margin-bottom: 15px;\n"]))),P=b.ZP.div(h||(h=(0,g.Z)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid grey;\n"]))),S=(0,b.ZP)(j.OL)(f||(f=(0,g.Z)(["\n  font-size: 20px;\n  margin-bottom: 5px;\n  margin-top: 3px;\n  display: block;\n  text-decoration: none;\n  color: black;\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    text-decoration: underline;\n    color: #3f51b5;\n  }\n"]))),M=(0,b.ZP)(j.OL)(m||(m=(0,g.Z)(["\n  margin-bottom: 10px; \n  display: block;\n  text-decoration: none;\n  color: black;\n\n  :hover:not(.active),\n  :focus-visible:not(.active) \n    text-decoration: underline;\n  font-size: 18px;\n  text-decoration: none;\n  color: #3f51b5;\n\n  &.active {\n    text-decoration: underline;\n    color: red;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    text-decoration: underline;\n  }\n"]))),z=t(184),C=function(n){var e=n.infoMovie,t=e.newGenres,i=e.title,o=e.overview,r=e.imageMovie,a=e.userScore;return(0,z.jsxs)(Z,{children:[(0,z.jsx)("img",{src:r,alt:r}),(0,z.jsxs)(k,{children:[(0,z.jsx)(w,{children:i}),(0,z.jsxs)(y,{children:["User Score ",a,"%"]}),(0,z.jsx)("h2",{children:"Overview"}),(0,z.jsx)(y,{children:o}),(0,z.jsx)("h2",{children:"Genres"}),(0,z.jsx)(y,{children:t})]})]})},G=function(){var n,e,t=(0,r.UO)().movieId,s=(0,o.useState)(null),d=(0,i.Z)(s,2),p=d[0],x=d[1],v=(0,o.useState)(!1),u=(0,i.Z)(v,2),h=u[0],f=u[1],m=null!==(n=null===(e=(0,r.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,o.useEffect)((function(){var n;f(!0),(n=t,l.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=cbd8d541379b4f719065dc7272b2c5fd")).then((function(n){var e=n.data,t=e.genres,i=e.id,o=e.title,r=e.overview,a=e.popularity,s=e.poster_path,c=e.vote_average;return{newGenres:t.map((function(n){return n.name})).join(" "),id:i,title:o,overview:r,popularity:a,imageMovie:"http://image.tmdb.org/t/p/w342"+s,userScore:Math.round(10*c)}}))).then((function(n){x(n)})).catch((function(){c().Notify.failure("Something went wrong...")})).finally((function(){return f(!1)}))}),[t]),(0,z.jsx)(z.Fragment,{children:h?(0,z.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#4a3b98",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):(0,z.jsxs)("main",{children:[(0,z.jsxs)(S,{to:m,children:["\u261a"," Go Back"]}),p&&(0,z.jsx)(C,{infoMovie:p}),(0,z.jsxs)(P,{children:[(0,z.jsx)(_,{children:"Additional information"}),(0,z.jsxs)("ul",{children:[(0,z.jsx)("li",{children:(0,z.jsx)(M,{state:{from:m},to:"cast",children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(M,{state:{from:m},to:"reviews",children:"Reviews"})})]})]}),(0,z.jsx)(o.Suspense,{fallback:null,children:(0,z.jsx)(r.j3,{})})]})})}}}]);
//# sourceMappingURL=508.01564f28.chunk.js.map