(()=>{"use strict";var e,a,t,r,o,f={},d={};function n(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}n.m=f,n.c=d,e=[],n.O=(a,t,r,o)=>{if(!t){var f=1/0;for(b=0;b<e.length;b++){t=e[b][0],r=e[b][1],o=e[b][2];for(var d=!0,c=0;c<t.length;c++)(!1&o||f>=o)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(d=!1,o<f&&(f=o));if(d){e.splice(b--,1);var i=r();void 0!==i&&(a=i)}}return a}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,r,o]},n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var f={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,n.d(o,f),o},n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((a,t)=>(n.f[t](e,a),a)),[])),n.u=e=>"assets/js/"+({37:"e42aaafb",53:"935f2afb",76:"ab646c09",162:"d589d3a7",173:"05ef5b31",203:"6fca0e94",211:"6b775a71",341:"9f866c55",398:"b31c0158",514:"1be78505",590:"d36f8b9b",650:"c6694585",697:"af5cfa16",703:"de47e161",718:"76d63ae1",731:"0e800433",766:"6d580683",817:"14eb3368",827:"6476eba6",836:"0480b142",847:"d3ca1aa3",853:"272d7aaf",895:"a74be0d8",913:"084d3e27",918:"17896441"}[e]||e)+"."+{37:"b5f79dd3",53:"a7b704ad",76:"5204d095",162:"928ffc3c",173:"1b946fa7",203:"83238da5",211:"61caed10",341:"4fbc7c9e",398:"55580e59",514:"91932964",590:"3dec1797",650:"e8a3a715",697:"58bb6acf",703:"8a7dc8ae",718:"1b51683f",731:"14053a37",766:"640a6ac3",817:"5cc214ec",827:"0a5dba3e",836:"d412e0aa",847:"434d9180",853:"564a8699",895:"d60f62d2",913:"552e97c7",918:"f3b8b09b",972:"72616a88"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},o="trade-api-docs:",n.l=(e,a,t,f)=>{if(r[e])r[e].push(a);else{var d,c;if(void 0!==t)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){d=u;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.setAttribute("data-webpack",o+t),d.src=e),r[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),c&&document.head.appendChild(d)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/trade-api-docs/",n.gca=function(e){return e={17896441:"918",e42aaafb:"37","935f2afb":"53",ab646c09:"76",d589d3a7:"162","05ef5b31":"173","6fca0e94":"203","6b775a71":"211","9f866c55":"341",b31c0158:"398","1be78505":"514",d36f8b9b:"590",c6694585:"650",af5cfa16:"697",de47e161:"703","76d63ae1":"718","0e800433":"731","6d580683":"766","14eb3368":"817","6476eba6":"827","0480b142":"836",d3ca1aa3:"847","272d7aaf":"853",a74be0d8:"895","084d3e27":"913"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(a,t)=>{var r=n.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(303|532)$/.test(a))e[a]=0;else{var o=new Promise(((t,o)=>r=e[a]=[t,o]));t.push(r[2]=o);var f=n.p+n.u(a),d=new Error;n.l(f,(t=>{if(n.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+o+": "+f+")",d.name="ChunkLoadError",d.type=o,d.request=f,r[1](d)}}),"chunk-"+a,a)}},n.O.j=a=>0===e[a];var a=(a,t)=>{var r,o,f=t[0],d=t[1],c=t[2],i=0;if(f.some((a=>0!==e[a]))){for(r in d)n.o(d,r)&&(n.m[r]=d[r]);if(c)var b=c(n)}for(a&&a(t);i<f.length;i++)o=f[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(b)},t=self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();