(function(t){function e(e){for(var i,s,n=e[0],l=e[1],o=e[2],u=0,v=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(v.length)v.shift()();return a.push.apply(a,o||[]),c()}function c(){for(var t,e=0;e<a.length;e++){for(var c=a[e],i=!0,s=1;s<c.length;s++){var n=c[s];0!==r[n]&&(i=!1)}i&&(a.splice(e--,1),t=l(l.s=c[0]))}return t}var i={},s={app:0},r={app:0},a=[];function n(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-07c4d6eb":"3d2b35f8","chunk-2fc94bc2":"ac224c7a","chunk-adae2968":"7110a479","chunk-2c172c22":"f2278a24","chunk-31dcbff4":"1ee527ea","chunk-3d5d8b16":"195becee"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var c=i[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.e=function(t){var e=[],c={"chunk-2fc94bc2":1,"chunk-adae2968":1,"chunk-2c172c22":1,"chunk-31dcbff4":1,"chunk-3d5d8b16":1};s[t]?e.push(s[t]):0!==s[t]&&c[t]&&e.push(s[t]=new Promise((function(e,c){for(var i="css/"+({}[t]||t)+"."+{"chunk-07c4d6eb":"31d6cfe0","chunk-2fc94bc2":"27020c23","chunk-adae2968":"e36ef290","chunk-2c172c22":"0556d5eb","chunk-31dcbff4":"1bd35ff1","chunk-3d5d8b16":"c0a15dfb"}[t]+".css",r=l.p+i,a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===i||u===r))return e()}var v=document.getElementsByTagName("style");for(n=0;n<v.length;n++){o=v[n],u=o.getAttribute("data-href");if(u===i||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete s[t],d.parentNode.removeChild(d),c(a)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){s[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,c){i=r[t]=[e,c]}));e.push(i[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=n(t);var v=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(d);var c=r[t];if(0!==c){if(c){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",v.name="ChunkLoadError",v.type=i,v.request=s,c[1](v)}r[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,c){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(c,i,function(e){return t[e]}.bind(null,i));return c},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var v=0;v<o.length;v++)e(o[v]);var d=u;a.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"03f3":function(t,e,c){},"074b":function(t,e,c){"use strict";var i=c("03f3"),s=c.n(i);s.a},"2d6f":function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var i=c("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{staticClass:"appbar",attrs:{app:"",color:"primary",height:"70"}},[i("div",{staticClass:"logo d-flex"},[i("v-img",{attrs:{alt:"Ticketeer logo",contain:"","min-width":"150",src:c("9b19"),width:"150",height:"65"}})],1),i("v-spacer"),i("v-btn",{attrs:{href:"https://github.com/5eraph/ts",target:"_blank",text:""}},[i("span",{staticClass:"mr-2 latest-release"},[t._v("Latest Release")]),i("v-icon",[t._v("mdi-open-in-new")])],1)],1),i("v-content",{staticStyle:{padding:"0"}},[i("Home")],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"home"},[c("Landing"),c("Video"),c("Concepts"),c("Caroucel"),c("Points",{attrs:{title:"Ticketeer smart contract",bgIconStyle:{color:"rgba(113,140,209, 0.45)",width:"500px",transform:"translateX(45px)"},bgIcon:["fad","file-signature"],listIcon:["fad","hand-holding-magic"],listIconColor:"#718CD1",subTitle:"The future heart of ticket sales.",points:t.smartContractPoints}}),c("div",{staticClass:"features-wrap"},[c("Points",{staticClass:"features",attrs:{title:"Features",bgIconStyle:{color:"rgba(255,255,255, 0.40)",width:"250px"},bgIcon:["fad","box-heart"],listIcon:["fad","gem"],listIconColor:"#FFFFFF",points:t.features,note:"Always remember to protect and educate your customers."}})],1),c("Points",{attrs:{title:"Integration with wallet applications",bgIconStyle:{color:"rgba(113,140,209, 0.45)",width:"225px"},bgIcon:["fad","mobile-android"],listIcon:["fad","wallet"],listIconColor:"#718CD1",subTitle:"Ticketeer is expected to work in close relation with wallet applications.",points:t.wallets}}),c("Footer")],1)},n=[],l=(c("d3b7"),function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"landing-background-wrap"},[c("div",{staticClass:"landing-background"},[c("progressive-img",{attrs:{src:t.landingImg,placeholder:t.landingImgMini,alt:"Music festival audience"}}),c("p",{staticClass:"sparkle"}),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),t._m(52),t._m(53),t._m(54),t._m(55),t._m(56),t._m(57),t._m(58),t._m(59),t._m(60),t._m(61),t._m(62),t._m(63),t._m(64),t._m(65),t._m(66),t._m(67),t._m(68),t._m(69),t._m(70),t._m(71),t._m(72),t._m(73),t._m(74),t._m(75),t._m(76),t._m(77),t._m(78),t._m(79),t._m(80),t._m(81),t._m(82),t._m(83),t._m(84),t._m(85),t._m(86),t._m(87),t._m(88),t._m(89),t._m(90),t._m(91),t._m(92),t._m(93),t._m(94),t._m(95),t._m(96),t._m(97),t._m(98),t._m(99)],1),c("v-container",{staticClass:"landing"},[c("div",{staticClass:"landing-text-wrap"},[c("div",{staticClass:"landing-text"},[t._v("Sell. Protect. Verify.")]),c("div",{staticClass:"landing-sub-text"},[t._v("Cryptographically proven ticket sales for everyone.")])])])],1)}),o=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"circle-container"},[c("div",{staticClass:"circle"})])}],u={name:"Landing",data:function(){return{landingImg:c("6265"),landingImgMini:c("a3ba")}},components:{}},v=u,d=(c("e4ea"),c("2877")),f=c("6544"),_=c.n(f),m=c("a523"),C=Object(d["a"])(v,l,o,!1,null,"72cf5bb2",null),h=C.exports;_()(C,{VContainer:m["a"]});var p=function(){return c.e("chunk-3d5d8b16").then(c.bind(null,"85e1"))},E=function(){return c.e("chunk-2c172c22").then(c.bind(null,"a0f2"))},$=function(){return Promise.all([c.e("chunk-07c4d6eb"),c.e("chunk-2fc94bc2")]).then(c.bind(null,"161b"))},b=function(){return c.e("chunk-31dcbff4").then(c.bind(null,"5c60"))},g=function(){return Promise.all([c.e("chunk-07c4d6eb"),c.e("chunk-adae2968")]).then(c.bind(null,"fd2d"))},y={name:"Home",components:{Landing:h,Video:p,Concepts:E,Caroucel:$,Points:b,Footer:g},data:function(){return{smartContractPoints:[{title:"Designed for event of any kind",subTitle:"One contract to cover entire event industry."},{title:"All-in-one contract",subTitle:"All features you may ever need."},{title:"AGPL licensed",subTitle:"Transparent and consistent development of the contract for everyone."}],features:[{title:"Resellers",subTitle:"You can choose to provide ticket sales trough resellers, while maintaining security for your customers."},{title:"Ticket verification",subTitle:"To verify your customers during the event you can use built-in verification system.*"},{title:"Refunds",subTitle:"Simple way to configure refund parameters according to your needs."}],wallets:[{title:"All necesarry customer operations",subTitle:"Buy, buy as gift, transfer or refund - all are supported."},{title:"Distributed PoS",subTitle:"Expose sales of your tickets to all people over the world integrated into cryptocurrency wallets."},{title:"Easy and consistent",subTitle:"User friendly access to all of your event sales."}]}}},k=y,w=(c("c219"),Object(d["a"])(k,a,n,!1,null,null,null)),x=w.exports,T={name:"App",components:{Home:x},data:function(){return{}}},P=T,I=(c("074b"),c("7496")),S=c("40dc"),j=c("8336"),F=c("a75b"),O=c("132d"),A=c("adda"),V=c("2fa4"),D=Object(d["a"])(P,s,r,!1,null,"809c6eb0",null),L=D.exports;_()(D,{VApp:I["a"],VAppBar:S["a"],VBtn:j["a"],VContent:F["a"],VIcon:O["a"],VImg:A["a"],VSpacer:V["a"]});var M=c("f309");c("5a6a");i["a"].use(M["a"]);var B=new M["a"]({customVariables:["~/styles/default.styl"],theme:{themes:{light:{primary:"#FFFFFF",secondary:"#718CD1",accent:"#718CD1"},dark:{primary:"#000000",secondary:"#718CD1",accent:"#718CD1"}}}}),N=c("ecee"),H=c("208c"),R=c("ad3d"),q=c("9076"),J=c.n(q);N["c"].add(H["d"],H["h"],H["e"],H["f"],H["c"],H["b"],H["a"],H["g"]),i["a"].component("font-awesome-icon",R["a"]),i["a"].use(J.a),i["a"].config.productionTip=!1,new i["a"]({vuetify:B,render:function(t){return t(L)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"5a6a":function(t,e,c){},"5c85":function(t,e,c){},6265:function(t,e,c){t.exports=c.p+"img/landing.3efa0497.jpg"},"9b19":function(t,e,c){t.exports=c.p+"img/logo.48488c22.svg"},a3ba:function(t,e,c){t.exports=c.p+"img/landing-mini.533d6701.jpg"},c219:function(t,e,c){"use strict";var i=c("5c85"),s=c.n(i);s.a},e4ea:function(t,e,c){"use strict";var i=c("2d6f"),s=c.n(i);s.a}});
//# sourceMappingURL=app.6f169f4b.js.map