"use strict";(self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[]).push([[895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,c=s["".concat(o,".").concat(m)]||s[m]||k[m]||i;return n?r.createElement(c,l(l({ref:t},u),{},{components:n})):r.createElement(c,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},l="\u0417\u0430\u044f\u0432\u043a\u0438",p={unversionedId:"rest-api/orders",id:"rest-api/orders",title:"\u0417\u0430\u044f\u0432\u043a\u0438",description:"Order",source:"@site/docs/rest-api/orders.md",sourceDirName:"rest-api",slug:"/rest-api/orders",permalink:"/trade-api-docs/rest-api/orders",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0431\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432",permalink:"/trade-api-docs/rest-api/common-types"},next:{title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b",permalink:"/trade-api-docs/rest-api/securities"}},o={},d=[{value:"Order",id:"order",level:2},{value:"OrderStatus",id:"orderstatus",level:2},{value:"OrderCondition",id:"ordercondition",level:2},{value:"\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438",id:"\u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0439-\u0437\u0430\u044f\u0432\u043a\u0438",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043e\u043a",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0437\u0430\u044f\u0432\u043e\u043a",level:2},{value:"\u041e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u044f\u0432\u043a\u0438",id:"\u043e\u0442\u043c\u0435\u043d\u0430-\u0437\u0430\u044f\u0432\u043a\u0438",level:2}],u={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0437\u0430\u044f\u0432\u043a\u0438"},"\u0417\u0430\u044f\u0432\u043a\u0438"),(0,a.kt)("h2",{id:"order"},"Order"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "orderNo": 0,\n  "transactionId": 0,\n  "securityCode": "string",\n  "clientId": "string",\n  "status": "None",\n  "buySell": "Sell",\n  "createdAt": "2023-03-02T07:25:11.226Z",\n  "price": 0,\n  "quantity": 0,\n  "balance": 0,\n  "message": "string",\n  "currency": "string",\n  "condition": {\n    "type": "Bid",\n    "price": 0,\n    "time": "2023-03-02T07:25:11.226Z"\n  },\n  "validBefore": {\n    "type": "TillEndSession",\n    "time": "2023-03-02T07:25:11.226Z"\n  },\n  "acceptedAt": "2023-03-02T07:25:11.226Z",\n  "securityBoard": "string",\n  "market": "Stock"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"orderNo")," - \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0431\u0438\u0440\u0436\u0435. \u0417\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0437\u0430\u044f\u0432\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u044f\u0442\u0430 \u0431\u0438\u0440\u0436\u0435\u0439 (\u0441\u043c. \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),");"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transactionId")," - \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u044f\u0432\u043a\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 TRANSAQ (\u0434\u043b\u044f \u0447\u0443\u0436\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0432\u043d\u043e ",(0,a.kt)("strong",{parentName:"p"},"0"),");"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"securityCode")," - \u043a\u043e\u0434 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"status")," - \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"#orderstatus"},"OrderStatus"),";"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"buySell")," - \u0442\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#buysell"},"BuySell")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createdAt")," - \u0432\u0440\u0435\u043c\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0431\u0438\u0440\u0436\u0435 (UTC);"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"price")," - \u0446\u0435\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438. \u0414\u043b\u044f \u0440\u044b\u043d\u043e\u0447\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0432\u043d\u043e ",(0,a.kt)("strong",{parentName:"p"},"0"),";"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"quantity")," - \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u044f\u0432\u043a\u0438 \u0432 \u043b\u043e\u0442\u0430\u0445;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"balance")," - \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a, \u0432 \u043b\u043e\u0442\u0430\u0445. \u0418\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0432\u0435\u043d ",(0,a.kt)("inlineCode",{parentName:"p"},"quantity"),", \u043d\u043e \u043f\u043e \u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438 (\u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0441\u0434\u0435\u043b\u043e\u043a) \u0431\u0443\u0434\u0435\u0442 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0431\u044a\u0435\u043c \u0441\u0434\u0435\u043b\u043a\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("strong",{parentName:"p"},"0")," \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0435 (\u0441\u043c. \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),");"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"message")," - \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0435\u0439 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u044f\u0432\u043a\u0438. \u0417\u0430\u044f\u0432\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0430 \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c TRANSAQ \u0438\u043b\u0438 \u0431\u0438\u0440\u0436\u0435\u0439 \u0441 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u043e\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),";"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"currency")," - \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b \u0446\u0435\u043d\u044b;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"condition")," - \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043e\u043a. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"#ordercondition"},"OrderCondition"),";"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"validBefore")," - \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#ordervalidbefore-type"},"OrderValidBefore"),";"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"acceptedAt")," - \u0432\u0440\u0435\u043c\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 TRANSAQ (UTC);"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"securityBoard")," - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e\u0440\u0433\u043e\u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"market")," - \u0440\u044b\u043d\u043e\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#market"},"Market"),"."),(0,a.kt)("h2",{id:"orderstatus"},"OrderStatus"),(0,a.kt)("p",null,"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044f\u0432\u043a\u0438. \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"None")," - \u0437\u0430\u044f\u0432\u043a\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c TRANSAQ, \u0438 \u0437\u0430\u044f\u0432\u043a\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d ",(0,a.kt)("inlineCode",{parentName:"li"},"transactionId"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Active")," - \u0437\u0430\u044f\u0432\u043a\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0430 \u0431\u0438\u0440\u0436\u0435\u0439, \u0438 \u0437\u0430\u044f\u0432\u043a\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d ",(0,a.kt)("inlineCode",{parentName:"li"},"orderNo"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Matched")," - \u0437\u0430\u044f\u0432\u043a\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u043b\u0430\u0441\u044c (\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b\u0430\u0441\u044c);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Cancelled")," - \u0437\u0430\u044f\u0432\u043a\u0430 \u0431\u044b\u043b\u0430 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 (\u0441\u043d\u044f\u0442\u0430) \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0438\u043b\u0438 \u0431\u0438\u0440\u0436\u0435\u0439.")),(0,a.kt)("h2",{id:"ordercondition"},"OrderCondition"),(0,a.kt)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043e\u043a. \u0422\u0438\u043f \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Bid")," - \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BidOrLast"),"- \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0438\u043b\u0438 \u0441\u0434\u0435\u043b\u043a\u0430 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438 \u0432\u044b\u0448\u0435;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ask")," - \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AskOrLast")," - \u043b\u0443\u0447\u0448\u0430\u044f \u0446\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0438\u043b\u0438 \u0441\u0434\u0435\u043b\u043a\u0430 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438 \u043d\u0438\u0436\u0435;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Time")," - \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0411\u0438\u0440\u0436\u0443 (\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"li"},"time")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CovDown")," - \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043d\u0438\u0436\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CovUp")," - \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0448\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LastUp")," - \u0441\u0434\u0435\u043b\u043a\u0430 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438\u043b\u0438 \u0432\u044b\u0448\u0435;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LastDown"),"- \u0441\u0434\u0435\u043b\u043a\u0430 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u0435 \u0438\u043b\u0438 \u043d\u0438\u0436\u0435.")),(0,a.kt)("h2",{id:"\u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0439-\u0437\u0430\u044f\u0432\u043a\u0438"},"\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api\u200b/v1\u200b/orders"),", \u043f\u0435\u0440\u0435\u0434\u0430\u0432 \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "string",\n  "securityBoard": "string",\n  "securityCode": "string",\n  "buySell": "Sell",\n  "quantity": 0,\n  "useCredit": true,\n  "price": 0,\n  "property": "PutInQueue",\n  "condition": {\n    "type": "Bid",\n    "price": 0,\n    "time": "2023-03-02T07:25:11.226Z"\n  },\n  "validBefore": {\n    "type": "TillEndSession",\n    "time": "2023-03-02T07:25:11.226Z"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"securityBoard")," - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e\u0440\u0433\u043e\u0432 \u0434\u043b\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"securityCode")," - \u043a\u043e\u0434 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"buySell")," - \u0442\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#buysell"},"BuySell"),";"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"quantity")," - \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u044f\u0432\u043a\u0438 \u0432 \u043b\u043e\u0442\u0430\u0445;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useCredit")," - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u0430 (\u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0441\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u044b\u043d\u043a\u0430). \u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", \u0435\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442, \u0438\u043d\u0430\u0447\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"price")," - \u0446\u0435\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438. \u0414\u043b\u044f \u0440\u044b\u043d\u043e\u0447\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("strong",{parentName:"p"},"0"),". \u0414\u043b\u044f \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0446\u0435\u043d\u0443 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"property")," - \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043e\u043a. \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PutInQueue")," - \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0438 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0437\u0430\u044f\u0432\u043e\u043a \u0431\u0438\u0440\u0436\u0438;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CancelBalance")," - \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0438 \u0441\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0441 \u0442\u043e\u0440\u0433\u043e\u0432;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ImmOrCancel")," - \u0441\u0434\u0435\u043b\u043a\u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0437\u0430\u044f\u0432\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438 \u0441\u0440\u0430\u0437\u0443 \u043f\u0440\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"condition")," - \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043e\u043a. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"#ordercondition"},"OrderCondition"),";"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"validBefore")," - \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#ordervalidbefore-type"},"OrderValidBefore"),"."),(0,a.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u0435\u0440\u0432\u0438\u0441 \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"transactionId")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438."),(0,a.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0437\u0430\u044f\u0432\u043e\u043a"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043e\u043a"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u044f\u0432\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/orders/"),", \u0443\u043a\u0430\u0437\u0430\u0432 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439);"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"includeMatched")," - \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u044f\u0432\u043a\u0438;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"includeCanceled")," - \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u044f\u0432\u043a\u0438;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"includeActive")," - \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0437\u0430\u044f\u0432\u043a\u0438."),(0,a.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u0435\u0440\u0432\u0438\u0441 \u0432\u0435\u0440\u043d\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u044f\u0432\u043e\u043a."),(0,a.kt)("h2",{id:"\u043e\u0442\u043c\u0435\u043d\u0430-\u0437\u0430\u044f\u0432\u043a\u0438"},"\u041e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u044f\u0432\u043a\u0438"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api\u200b/v1\u200b/orders/"),", \u043f\u0435\u0440\u0435\u0434\u0430\u0432 \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "string",\n  "transactionId": 0\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transactionId")," - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043e\u0442\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438."))}k.isMDXComponent=!0}}]);