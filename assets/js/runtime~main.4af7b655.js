(()=>{"use strict";var e,a,t,r,o,d={},f={};function n(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}n.m=d,n.c=f,e=[],n.O=(a,t,r,o)=>{if(!t){var d=1/0;for(b=0;b<e.length;b++){t=e[b][0],r=e[b][1],o=e[b][2];for(var f=!0,c=0;c<t.length;c++)(!1&o||d>=o)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(f=!1,o<d&&(d=o));if(f){e.splice(b--,1);var i=r();void 0!==i&&(a=i)}}return a}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,r,o]},n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var d={};a=a||[null,t({}),t([]),t(t)];for(var f=2&r&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,n.d(o,d),o},n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((a,t)=>(n.f[t](e,a),a)),[])),n.u=e=>"assets/js/"+({37:"e42aaafb",53:"935f2afb",76:"ab646c09",162:"d589d3a7",173:"05ef5b31",190:"4c29c102",203:"6fca0e94",211:"6b775a71",292:"23b8410f",341:"9f866c55",369:"61e75adc",398:"b31c0158",514:"1be78505",590:"d36f8b9b",600:"3e832dc9",697:"af5cfa16",703:"de47e161",718:"76d63ae1",731:"0e800433",766:"6d580683",817:"14eb3368",827:"6476eba6",836:"0480b142",847:"d3ca1aa3",853:"272d7aaf",895:"a74be0d8",913:"084d3e27",918:"17896441",995:"291eddad"}[e]||e)+"."+{37:"b5f79dd3",53:"d6670d51",76:"5204d095",162:"118748f0",173:"1b946fa7",190:"9e007780",203:"c267587f",211:"61caed10",292:"ac8bccf0",341:"0b553d67",369:"d3039e55",398:"55580e59",514:"91932964",590:"71122a3b",600:"3b2f366a",697:"ffcfc588",703:"5adedfee",718:"1b51683f",731:"14053a37",766:"6d4d5438",817:"5cc214ec",827:"c2ddbcfb",836:"a5f343c4",847:"11e31fdc",853:"564a8699",895:"c22dc2a7",913:"0becef45",918:"f3b8b09b",972:"72616a88",995:"73e2a0cb"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},o="trade-api-docs:",n.l=(e,a,t,d)=>{if(r[e])r[e].push(a);else{var f,c;if(void 0!==t)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){f=u;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+t),f.src=e),r[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/trade-api-docs/",n.gca=function(e){return e={17896441:"918",e42aaafb:"37","935f2afb":"53",ab646c09:"76",d589d3a7:"162","05ef5b31":"173","4c29c102":"190","6fca0e94":"203","6b775a71":"211","23b8410f":"292","9f866c55":"341","61e75adc":"369",b31c0158:"398","1be78505":"514",d36f8b9b:"590","3e832dc9":"600",af5cfa16:"697",de47e161:"703","76d63ae1":"718","0e800433":"731","6d580683":"766","14eb3368":"817","6476eba6":"827","0480b142":"836",d3ca1aa3:"847","272d7aaf":"853",a74be0d8:"895","084d3e27":"913","291eddad":"995"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(a,t)=>{var r=n.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(303|532)$/.test(a))e[a]=0;else{var o=new Promise(((t,o)=>r=e[a]=[t,o]));t.push(r[2]=o);var d=n.p+n.u(a),f=new Error;n.l(d,(t=>{if(n.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+o+": "+d+")",f.name="ChunkLoadError",f.type=o,f.request=d,r[1](f)}}),"chunk-"+a,a)}},n.O.j=a=>0===e[a];var a=(a,t)=>{var r,o,d=t[0],f=t[1],c=t[2],i=0;if(d.some((a=>0!==e[a]))){for(r in f)n.o(f,r)&&(n.m[r]=f[r]);if(c)var b=c(n)}for(a&&a(t);i<d.length;i++)o=d[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(b)},t=self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();