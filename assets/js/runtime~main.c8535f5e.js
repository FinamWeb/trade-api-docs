(()=>{"use strict";var e,t,a,r,o,d={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var a=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=d,n.c=f,e=[],n.O=(t,a,r,o)=>{if(!a){var d=1/0;for(b=0;b<e.length;b++){a=e[b][0],r=e[b][1],o=e[b][2];for(var f=!0,c=0;c<a.length;c++)(!1&o||d>=o)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(f=!1,o<d&&(d=o));if(f){e.splice(b--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[a,r,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var d={};t=t||[null,a({}),a([]),a(a)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=a(f))Object.getOwnPropertyNames(f).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,n.d(o,d),o},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[])),n.u=e=>"assets/js/"+({37:"e42aaafb",53:"935f2afb",76:"ab646c09",162:"d589d3a7",173:"05ef5b31",203:"6fca0e94",211:"6b775a71",292:"23b8410f",341:"9f866c55",369:"61e75adc",398:"b31c0158",514:"1be78505",590:"d36f8b9b",697:"af5cfa16",703:"de47e161",718:"76d63ae1",731:"0e800433",766:"6d580683",817:"14eb3368",827:"6476eba6",836:"0480b142",847:"d3ca1aa3",853:"272d7aaf",895:"a74be0d8",913:"084d3e27",918:"17896441",995:"291eddad"}[e]||e)+"."+{37:"b5f79dd3",53:"451d2195",76:"5204d095",162:"118748f0",173:"1b946fa7",203:"83238da5",211:"61caed10",292:"ac8bccf0",341:"0b553d67",369:"d3039e55",398:"55580e59",514:"91932964",590:"3dec1797",697:"58bb6acf",703:"5adedfee",718:"1b51683f",731:"14053a37",766:"640a6ac3",817:"5cc214ec",827:"27bffdba",836:"b1ca725d",847:"11e31fdc",853:"564a8699",895:"c22dc2a7",913:"552e97c7",918:"f3b8b09b",972:"72616a88",995:"33f12082"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="trade-api-docs:",n.l=(e,t,a,d)=>{if(r[e])r[e].push(t);else{var f,c;if(void 0!==a)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){f=u;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+a),f.src=e),r[e]=[t];var l=(t,a)=>{f.onerror=f.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/trade-api-docs/",n.gca=function(e){return e={17896441:"918",e42aaafb:"37","935f2afb":"53",ab646c09:"76",d589d3a7:"162","05ef5b31":"173","6fca0e94":"203","6b775a71":"211","23b8410f":"292","9f866c55":"341","61e75adc":"369",b31c0158:"398","1be78505":"514",d36f8b9b:"590",af5cfa16:"697",de47e161:"703","76d63ae1":"718","0e800433":"731","6d580683":"766","14eb3368":"817","6476eba6":"827","0480b142":"836",d3ca1aa3:"847","272d7aaf":"853",a74be0d8:"895","084d3e27":"913","291eddad":"995"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,a)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var d=n.p+n.u(t),f=new Error;n.l(d,(a=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",f.name="ChunkLoadError",f.type=o,f.request=d,r[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,d=a[0],f=a[1],c=a[2],i=0;if(d.some((t=>0!==e[t]))){for(r in f)n.o(f,r)&&(n.m[r]=f[r]);if(c)var b=c(n)}for(t&&t(a);i<d.length;i++)o=d[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(b)},a=self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();