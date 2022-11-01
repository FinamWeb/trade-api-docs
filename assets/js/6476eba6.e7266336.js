"use strict";(self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||i;return n?r.createElement(c,l(l({ref:t},s),{},{components:n})):r.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},l="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",p={unversionedId:"usage",id:"usage",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 API \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438\u0445 \u0432\u044b\u0437\u043e\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 https://trade-api.comon.ru/swagger/index.html. \u0417\u0434\u0435\u0441\u044c \u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0442\u043e\u043a\u0435\u043d\u0443 \u043f\u0440\u044f\u043c\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/trade-api-docs/usage",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u0422\u043e\u043a\u0435\u043d\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430",permalink:"/trade-api-docs/tokens"},next:{title:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/trade-api-docs/category/\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"}},o={},u=[{value:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",level:2},{value:"\u0420\u044b\u043d\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",id:"\u0440\u044b\u043d\u043e\u0447\u043d\u0430\u044f-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",level:2},{value:"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0447\u0435\u0442",id:"\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439-\u0441\u0447\u0435\u0442",level:2},{value:"\u0422\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",id:"\u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 API \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438\u0445 \u0432\u044b\u0437\u043e\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,a.kt)("a",{parentName:"p",href:"https://trade-api.comon.ru/swagger/index.html"},"https://trade-api.comon.ru/swagger/index.html"),". \u0417\u0434\u0435\u0441\u044c \u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0442\u043e\u043a\u0435\u043d\u0443 \u043f\u0440\u044f\u043c\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435."),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u044b. \u0414\u0430\u043b\u0435\u0435 \u0438\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u043f\u043f \u0438 \u0438\u0445 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432"),(0,a.kt)("h2",{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u0432 api \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,a.kt)("p",null,"\u0424\u043e\u0440\u043c\u0430\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430: ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <\u0442\u043e\u043a\u0435\u043d_\u0434\u043e\u0441\u0442\u0443\u043f>")),(0,a.kt)("h2",{id:"\u0440\u044b\u043d\u043e\u0447\u043d\u0430\u044f-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},"\u0420\u044b\u043d\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"\u0421\u044e\u0434\u0430 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0440\u044b\u043d\u043e\u0447\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u0445 \u0438 \u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 ",(0,a.kt)("inlineCode",{parentName:"li"},"GET \u200b/api\u200b/v1\u200b/securities")),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0442\u043e\u0440\u0433\u043e\u0432 \u043f\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0443 (\u0433\u0440\u0430\u0444\u0438\u043a)"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u043e\u0432\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 maret data. \u0420\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u0432 \u0432\u0438\u0434\u0435 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u0421\u0442\u0430\u043a\u0430\u043d"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0434\u0435\u043b\u043a\u0438")))),(0,a.kt)("h2",{id:"\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439-\u0441\u0447\u0435\u0442"},"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0447\u0435\u0442"),(0,a.kt)("p",null,'Trade-api \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u0415\u0434\u0438\u043d\u044b\u043c \u0441\u0447\u0435\u0442\u0430\u043c, \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0432 \u0410\u041e "\u0424\u0438\u043d\u0430\u043c". \u041e\u043f\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0434\u0435\u0442 \u043f\u043e \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u043c\u0443 \u043a\u043e\u0434\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u0432 \u0418\u0422\u0421 Transaq. \u0422\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u043b\u0435 ',(0,a.kt)("inlineCode",{parentName:"p"},"ClientID"),"."),(0,a.kt)("p",null,"\u0421\u044e\u0434\u0430 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0441\u0447\u0435\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"GET \u200b/api\u200b/v1\u200b/portfolio")),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0437\u0430\u044f\u0432\u043a\u0430\u0445 ",(0,a.kt)("inlineCode",{parentName:"li"},"GET \u200b/api\u200b/v1\u200b/orders")," \u0438\u043b\u0438 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0430\u0445 ",(0,a.kt)("inlineCode",{parentName:"li"},"GET \u200b/api\u200b/v1\u200b/stop-orders")," \u043f\u043e \u0441\u0447\u0435\u0442\u0430\u043c"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0441\u0434\u0435\u043b\u043a\u0430\u0445 \u043f\u043e \u0441\u0447\u0435\u0442\u0430\u043c")),(0,a.kt)("h2",{id:"\u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"},"\u0422\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u0421\u044e\u0434\u0430 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0412\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u044f\u0432\u043a\u0443 (\u0440\u044b\u043d\u043e\u0447\u043d\u0443\u044e / \u043b\u0438\u043c\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0443\u0441\u043b\u043e\u0432\u043d\u0443\u044e) \u043f\u043e \u0441\u0447\u0435\u0442\u0443 ",(0,a.kt)("inlineCode",{parentName:"li"},"POST \u200b/api\u200b/v1\u200b/orders")),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 ",(0,a.kt)("inlineCode",{parentName:"li"},"DELETE \u200b/api\u200b/v1\u200b/orders")," \u0438\u043b\u0438 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0443 ",(0,a.kt)("inlineCode",{parentName:"li"},"DELETE \u200b/api\u200b/v1\u200b/stop-orders"))),(0,a.kt)("p",null,"\u041d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0440\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044e \u0437\u0430\u044f\u0432\u043a\u0438 \u0432 \u0431\u0438\u0440\u0436\u0435\u0432\u043e\u0439 \u0441\u0442\u0430\u043a\u0430\u043d \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction_id"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetOrdersRequest")," \u0438\u043b\u0438 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderEvent")," \u043e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 (",(0,a.kt)("inlineCode",{parentName:"p"},"EventResponse.event.order"),")"),(0,a.kt)("admonition",{title:"\u0421\u043f\u0440\u0430\u0432\u043a\u0430",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"transaction_id")," - \u044d\u0442\u043e \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u0435\u0430\u043d\u0441\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.")),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u0411\u0438\u0440\u0436\u0435 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 (\u0437\u0430\u044f\u0432\u043a\u0430), \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u044d\u0442\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0411\u0438\u0440\u0436\u0438. Transactionid \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438, \u044f\u0432\u043b\u044f\u044e\u0449\u0435\u0439\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u0411\u0438\u0440\u0436\u0443 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0451\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0411\u0438\u0440\u0436\u0438."),(0,a.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f property:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PutInQueue"),": \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0438 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0437\u0430\u044f\u0432\u043e\u043a \u0411\u0438\u0440\u0436\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FOK"),": \u0441\u0434\u0435\u043b\u043a\u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0437\u0430\u044f\u0432\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IOC"),": \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0438 \u0441\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0441 \u0442\u043e\u0440\u0433\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u044b\u043d\u043e\u0447\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"price")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("strong",{parentName:"li"},"0"),".")),(0,a.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0442\u0438\u043f\u044b \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0443\u0441\u043b\u043e\u0432\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043e\u043a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bid"),": \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BidOrLast"),": \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0438\u043b\u0438 \u0441\u0434\u0435\u043b\u043a\u0430 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438 \u0432\u044b\u0448\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ask"),": \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AskOrLast"),": \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0438\u043b\u0438 \u0441\u0434\u0435\u043b\u043a\u0430 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438 \u043d\u0438\u0436\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CovDown"),": \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043d\u0438\u0436\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CovUp"),": \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0448\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LastUp"),": \u0441\u0434\u0435\u043b\u043a\u0430 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438\u043b\u0438 \u0432\u044b\u0448\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LastDown"),": \u0441\u0434\u0435\u043b\u043a\u0430 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438\u043b\u0438 \u043d\u0438\u0436\u0435")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0438\u0435 \u043f\u043e\u043b\u044f \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"condition")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"validbefore")," \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438. \u0418\u0445 \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0443\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction_id"),"."))}m.isMDXComponent=!0}}]);