"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[406],{830:function(n,e,t){t.d(e,{L:function(){return s},v:function(){return u}});var i,o,r=t(168),a=t(444),c=t(87),s=(0,a.ZP)(c.OL)(i||(i=(0,r.Z)(["\n  text-decoration: none;\n  display: block;\n  font-size: 20px;\n  padding-top: 10px;\n  color: #1631cd;\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: red;\n    text-decoration: underline;\n  }\n"]))),u=a.ZP.h1(o||(o=(0,r.Z)(["\n  margin-bottom: 10px;\n  margin-top: 10px;\n"])))},406:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,o,r,a,c=t(439),s=t(562),u=t.n(s),l=t(791),d=t(243),p=t(689),h=t(168),f=t(444),m=f.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  position: absolute;\n  top: 28px;\n  left: 500px;\n  z-index: 999999;\n"]))),x=f.ZP.button(o||(o=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 41px;\n  border: 0;\n  background-image: url('https://linhpham.me/miu/icons/svg/common-search-lookup-glyph.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),g=f.ZP.span(r||(r=(0,h.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),b=f.ZP.input(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=t(184),y=function(n){var e=n.onSubmit,t=(0,l.useState)(""),i=(0,c.Z)(t,2),o=i[0],r=i[1];return(0,v.jsxs)(m,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(o),r("")):u().Notify.failure("Enter data in the search field")},children:[(0,v.jsx)(x,{type:"submit",children:(0,v.jsx)(g,{children:"Search"})}),(0,v.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(n){r(n.currentTarget.value.toLowerCase())}})]})},w=t(388);var Z=t(830),k=function(n){var e=n.movies,t=(0,p.TH)();return(0,v.jsx)(v.Fragment,{children:e.length>0&&(0,v.jsx)("ul",{children:e.map((function(n){var e=n.id,i=n.title;return(0,v.jsx)("li",{children:(0,v.jsx)(Z.L,{to:"".concat(e),state:{from:t},children:(0,v.jsx)("p",{children:i})})},e)}))})})},j=function(){var n=(0,l.useState)(""),e=(0,c.Z)(n,2),t=e[0],i=e[1],o=(0,l.useState)([]),r=(0,c.Z)(o,2),a=r[0],s=r[1],h=(0,l.useState)(!1),f=(0,c.Z)(h,2),m=f[0],x=f[1],g=(0,p.s0)();return(0,l.useEffect)((function(){var n;t&&(x(!0),(n=t,w.Z.get("https://api.themoviedb.org/3/search/movie?api_key=cbd8d541379b4f719065dc7272b2c5fd&query=".concat(n)).then((function(n){return n.data.results.map((function(n){return{id:n.id,title:n.title}}))}))).then((function(n){n&&g("/movies?query=".concat(t),{replace:!0}),x(!1),n.length?s(n):u().Notify.failure("Sorry, there are no images matching your search query.Please try again.")})).catch((function(){u().Notify.failure("Something went wrong...")})))}),[g,t]),(0,v.jsxs)("main",{children:[(0,v.jsx)(y,{onSubmit:function(n){i(n),s([])}}),m?(0,v.jsx)(d.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}):(0,v.jsx)(k,{movies:a})]})}}}]);
//# sourceMappingURL=406.c91d2c98.chunk.js.map