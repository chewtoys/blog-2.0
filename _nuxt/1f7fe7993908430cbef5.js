(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{245:function(t,n,e){var r=e(6);r(r.P,"Array",{fill:e(246)}),e(98)("fill")},246:function(t,n,e){"use strict";var r=e(46),o=e(140),c=e(25);t.exports=function(t){for(var n=r(this),e=c(n.length),l=arguments.length,f=o(l>1?arguments[1]:void 0,e),d=l>2?arguments[2]:void 0,m=void 0===d?e:o(d,e);m>f;)n[f++]=t;return n}},247:function(t,n,e){var map={"./blog-2-0-in-nuxtjs/index.md":[252,6],"./eslint-formatter-html-extended/index.md":[253,7]};function r(t){if(!e.o(map,t))return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n});var n=map[t],r=n[0];return e.e(n[1]).then(function(){return e.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=247,t.exports=r},248:function(t,n,e){var content=e(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("48bd2406",content,!0,{sourceMap:!1})},251:function(t,n,e){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,n=new Array(t.length);i<t.length;i++)n[i]=t[i];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e(245);function o(t){var n=Math.round(t/5);return"".concat(new Array(n||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var e=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=t).toLocaleDateString.apply(n,r(e))}e.d(n,"b",function(){return o}),e.d(n,"a",function(){return c})},254:function(t,n,e){"use strict";var r=e(248);e.n(r).a},255:function(t,n,e){(t.exports=e(18)(!1)).push([t.i,".pages__title[data-v-ad40c64e] {\n  margin-bottom: .25em;\n}\n.pages__date[data-v-ad40c64e] {\n  color: var(--textSubtitle);\n}\n",""])},264:function(t,n,e){"use strict";e.r(n);e(34),e(99),e(65);var r=e(5),o=["eslint-formatter-html-extended","blog-2-0-in-nuxtjs"],c=e(251),l={name:"Homepage",data:function(){return{formatReadingTime:c.b,formatPostDate:c.a}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(n){var c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return(l=Object(r.a)(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(247)("./".concat(n,"/index.md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}},t,this)}))).apply(this,arguments)},c=function(t){return l.apply(this,arguments)},n.store,t.abrupt("return",Promise.all(o.map(function(t){return c(t)})).then(function(t){return{blogs:t}}));case 4:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()},f=(e(254),e(11)),component=Object(f.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"pages"},t._l(t.blogs,function(n){return e("div",{key:n.title,staticClass:"pages__item"},[e("nuxt-link",{staticClass:"pages__link",attrs:{to:"/"+n.slug}},[e("h2",{staticClass:"pages__title"},[t._v("\n        "+t._s(n.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"meta"},[e("small",{staticClass:"meta__date"},[t._v(t._s(t.formatPostDate(n.date)))]),t._v(" "),e("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),e("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(n.minute2read)))])]),t._v(" "),e("div",[e("p",[t._v("\n        "+t._s(n.description)+"\n      ")])])],1)}),0)},[],!1,null,"ad40c64e",null);n.default=component.exports}}]);