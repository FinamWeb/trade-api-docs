"use strict";(self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[]).push([[718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},p="REST API",o={unversionedId:"rest-api/api",id:"rest-api/api",title:"REST API",description:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",source:"@site/docs/rest-api/api.md",sourceDirName:"rest-api",slug:"/rest-api/api",permalink:"/trade-api-docs/rest-api/api",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/trade-api-docs/category/rest-api"},next:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0431\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432",permalink:"/trade-api-docs/rest-api/common-types"}},l={},c=[{value:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",level:2},{value:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u0430",id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u043e\u0442\u0432\u0435\u0442\u0430",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rest-api"},"REST API"),(0,a.kt)("h2",{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/tokens"},"\u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"),"."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435, \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432 HTTP \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Api-Key"),"."),(0,a.kt)("h2",{id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u043e\u0442\u0432\u0435\u0442\u0430"},"\u0424\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u0430"),(0,a.kt)("p",null,"\u041e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0438\u043c\u0435\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": {\n    "code": "string",\n    "message": "string",\n    "data": "string"\n  },\n  "data": ...\n}\n')),(0,a.kt)("p",null,"\u041f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0433\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u0438. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("p",null,"\u041f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443, \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0443\u044e \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0433\u0434\u0435: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"code")," - \u043a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"message")," - \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"data")," - \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439."),(0,a.kt)("p",{parentName:"li"},"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."))))}u.isMDXComponent=!0}}]);