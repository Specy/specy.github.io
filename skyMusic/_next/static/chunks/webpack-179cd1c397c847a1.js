!function(){"use strict";var e,t,n,r,o,i,u,c={},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}},r=!0;try{c[e].call(n.exports,n,n.exports,d),r=!1}finally{r&&delete a[e]}return n.loaded=!0,n.exports}d.m=c,d.amdD=function(){throw Error("define cannot be used indirect")},d.amdO={},e=[],d.O=function(t,n,r,o){if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var u=1/0,i=0;i<e.length;i++){for(var n=e[i][0],r=e[i][1],o=e[i][2],c=!0,a=0;a<n.length;a++)u>=o&&Object.keys(d.O).every(function(e){return d.O[e](n[a])})?n.splice(a--,1):(c=!1,o<u&&(u=o));if(c){e.splice(i--,1);var f=r();void 0!==f&&(t=f)}}return t},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce(function(t,n){return d.f[n](e,t),t},[]))},d.u=function(e){return"static/chunks/"+(({864:"2dc05096",904:"72acface",2723:"b1bb7d45",3132:"ab5c09eb",5974:"3a2b0ac0"})[e]||e)+"."+({864:"f8da6cb4d864a13c",904:"97bf017258aceade",2723:"89de15d415a75511",3132:"14586be25a778f37",4460:"cc6cac54590be72a",5744:"4965bccea1a83919",5974:"1d85fbecfc3718da"})[e]+".js"},d.miniCssF=function(e){},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="_N_E:",d.l=function(e,r,o,i){if(t[e]){t[e].push(r);return}if(void 0!==o)for(var u,c,a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var l=a[f];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.setAttribute("data-webpack",n+o),u.src=d.tu(e)),t[e]=[r];var s=function(n,r){u.onerror=u.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(r)}),n)return n(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},d.tt=function(){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("nextjs#bundler",r))),r},d.tu=function(e){return d.tt().createScriptURL(e)},d.p="/skyMusic/_next/",o={2272:0},d.f.j=function(e,t){var n=d.o(o,e)?o[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(2272!=e){var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i=d.p+d.u(e),u=Error();d.l(i,function(t){if(d.o(o,e)&&(0!==(n=o[e])&&(o[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}},"chunk-"+e,e)}else o[e]=0}},d.O.j=function(e){return 0===o[e]},i=function(e,t){var n,r,i=t[0],u=t[1],c=t[2],a=0;if(i.some(function(e){return 0!==o[e]})){for(n in u)d.o(u,n)&&(d.m[n]=u[n]);if(c)var f=c(d)}for(e&&e(t);a<i.length;a++)r=i[a],d.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return d.O(f)},(u=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(i.bind(null,0)),u.push=i.bind(null,u.push.bind(u)),d.nc=void 0}();