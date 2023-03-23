"use strict";(self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[]).push([[913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,m=d["".concat(o,".").concat(c)]||d[c]||k[c]||i;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},p="\u0421\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438",l={unversionedId:"rest-api/stops",id:"rest-api/stops",title:"\u0421\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438",description:"Stop",source:"@site/docs/rest-api/stops.md",sourceDirName:"rest-api",slug:"/rest-api/stops",permalink:"/trade-api-docs/rest-api/stops",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438",permalink:"/trade-api-docs/rest-api/portfolios"},next:{title:"gRPC",permalink:"/trade-api-docs/category/grpc"}},o={},u=[{value:"Stop",id:"stop",level:2},{value:"StopStatus",id:"stopstatus",level:2},{value:"StopLoss",id:"stoploss",level:2},{value:"TakeProfit",id:"takeprofit",level:2},{value:"StopQuantity",id:"stopquantity",level:2},{value:"StopPrice",id:"stopprice",level:2},{value:"\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438",id:"\u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043e\u043a",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043e\u043a",level:2},{value:"\u041e\u0442\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438",id:"\u043e\u0442\u043c\u0435\u043d\u0430-\u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438",level:2}],s={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438"},"\u0421\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438"),(0,r.kt)("h2",{id:"stop"},"Stop"),(0,r.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stopId": 0,\n  "securityCode": "string",\n  "securityBoard": "string",\n  "market": "Stock",\n  "clientId": "string",\n  "buySell": "Sell",\n  "expirationDate": "2023-03-02T07:25:11.226Z",\n  "linkOrder": 0,\n  "validBefore": {\n    "type": "TillEndSession",\n    "time": "2023-03-02T07:25:11.226Z"\n  },\n  "status": "None",\n  "message": "string",\n  "orderNo": 0,\n  "tradeNo": 0,\n  "acceptedAt": "2023-03-02T07:25:11.226Z",\n  "canceledAt": "2023-03-02T07:25:11.226Z",\n  "currency": "string",\n  "takeProfitExtremum": 0,\n  "takeProfitLevel": 0,\n  "stopLoss": {\n    "activationPrice": 0,\n    "price": 0,\n    "marketPrice": true,\n    "quantity": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "time": 0,\n    "useCredit": true\n  },\n  "takeProfit": {\n    "activationPrice": 0,\n    "correctionPrice": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "spreadPrice": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "marketPrice": true,\n    "quantity": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "time": 0,\n    "useCredit": true\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stopId")," - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"securityCode")," - \u043a\u043e\u0434 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"securityBoard")," - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e\u0440\u0433\u043e\u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"market")," - \u0440\u044b\u043d\u043e\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#market"},"Market"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buySell")," - \u0442\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#buysell"},"BuySell"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expirationDate")," - \u0434\u0430\u0442\u0430 \u044d\u043a\u0441\u043f\u0438\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 FORTS;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"linkOrder")," - \u0431\u0438\u0440\u0436\u0435\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0439 (\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439) \u0437\u0430\u044f\u0432\u043a\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"validBefore")," - \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#ordervalidbefore-type"},"OrderValidBefore"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"status")," - \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stopstatus"},"StopStatus"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"message")," - \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0435\u0439 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u044f\u0432\u043a\u0438. \u0417\u0430\u044f\u0432\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0430 \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c TRANSAQ \u0438\u043b\u0438 \u0431\u0438\u0440\u0436\u0435\u0439 \u0441 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u043e\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"orderNo")," - \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u044f\u0432\u043a\u0438, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tradeNo")," - \u043d\u043e\u043c\u0435\u0440 \u0441\u0434\u0435\u043b\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u0432\u0435\u043b\u0430 \u043a \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"acceptedAt")," - \u0432\u0440\u0435\u043c\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 TRANSAQ (UTC);"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canceledAt")," - \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 TRANSAQ (UTC);"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"currency")," - \u0432\u0430\u043b\u044e\u0442\u0430 \u0446\u0435\u043d\u044b;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"takeProfitExtremum")," - \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c \u0434\u043b\u044f TP;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"takeProfitLevel")," - \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u0438 \u0434\u043b\u044f TP;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stopLoss")," - \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 stop-loss. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stoploss"},"StopLoss"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"takeProfit")," - \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 take-profit. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#takeprofit"},"TakeProfit"),"."),(0,r.kt)("h2",{id:"stopstatus"},"StopStatus"),(0,r.kt)("p",null,"\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438. \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Active")," - \u0437\u0430\u044f\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c TRANSAQ;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Executed")," - \u0437\u0430\u044f\u0432\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u043b\u0430\u0441\u044c (\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b\u0430\u0441\u044c);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cancelled")," - \u0437\u0430\u044f\u0432\u043a\u0430 \u0431\u044b\u043b\u0430 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 (\u0441\u043d\u044f\u0442\u0430) \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0438\u043b\u0438 \u0431\u0438\u0440\u0436\u0435\u0439.")),(0,r.kt)("h2",{id:"stoploss"},"StopLoss"),(0,r.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 stop-loss (SL) \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "activationPrice": 0,\n  "price": 0,\n  "marketPrice": true,\n  "quantity": {\n    "value": 0,\n    "units": "Percent"\n  },\n  "time": 0,\n  "useCredit": true\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"activationPrice")," - \u0446\u0435\u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"price")," - \u0446\u0435\u043d\u0430 \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u044b\u043d\u043e\u0447\u043d\u043e\u0439 \u0446\u0435\u043d\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,r.kt)("strong",{parentName:"p"},"0"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"marketPrice")," - \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u044b\u043d\u043e\u0447\u043d\u0443\u044e \u0437\u0430\u044f\u0432\u043a\u0443, \u0438\u043d\u0430\u0447\u0435 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430 \u0441 \u0446\u0435\u043d\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},"price"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"quantity")," - \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stopquantity"},"StopQuantity"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"time")," - \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f (\u0441\u0435\u043a\u0443\u043d\u0434\u044b);"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCredit")," - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u0430 (\u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0441\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u044b\u043d\u043a\u0430). \u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", \u0435\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442, \u0438\u043d\u0430\u0447\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"takeprofit"},"TakeProfit"),(0,r.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 take-profit (TP) \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "activationPrice": 0,\n  "correctionPrice": {\n    "value": 0,\n    "units": "Percent"\n  },\n  "spreadPrice": {\n    "value": 0,\n    "units": "Percent"\n  },\n  "marketPrice": true,\n  "quantity": {\n    "value": 0,\n    "units": "Percent"\n  },\n  "time": 0,\n  "useCredit": true\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"activationPrice")," - \u0446\u0435\u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"correctionPrice")," - \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stopprice"},"StopPrice"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"spreadPrice")," - \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u0441\u043f\u0440\u0435\u0434. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u044b\u043d\u043e\u0447\u043d\u043e\u0439 \u0446\u0435\u043d\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,r.kt)("strong",{parentName:"p"},"0"),". \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stopprice"},"StopPrice"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"marketPrice")," - \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u044b\u043d\u043e\u0447\u043d\u0443\u044e \u0437\u0430\u044f\u0432\u043a\u0443, \u0438\u043d\u0430\u0447\u0435 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430 \u0441 \u0446\u0435\u043d\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},"price"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"quantity")," - \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stopquantity"},"StopQuantity"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"time")," - \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f (\u0441\u0435\u043a\u0443\u043d\u0434\u044b);"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCredit")," - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u0430 (\u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0441\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u044b\u043d\u043a\u0430). \u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442, \u0438\u043d\u0430\u0447\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"stopquantity"},"StopQuantity"),(0,r.kt)("p",null,"\u041e\u0431\u044a\u0435\u043c \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": 0,\n  "units": "Percent"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"value")," - \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043c\u0430, \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"units"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"units")," - \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043c\u0430. \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Percent")," - \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lots")," - \u043b\u043e\u0442\u044b.")),(0,r.kt)("h2",{id:"stopprice"},"StopPrice"),(0,r.kt)("p",null,"\u0426\u0435\u043d\u0430 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": 0,\n  "units": "Percent"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"value")," - \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0446\u0435\u043d\u044b, \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"units"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"units")," - \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0446\u0435\u043d\u044b. \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Percent")," - \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pips")," - \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u0446\u0435\u043d\u044b.")),(0,r.kt)("h2",{id:"\u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438"},"\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api\u200b/v1\u200b/stops"),", \u043f\u0435\u0440\u0435\u0434\u0430\u0432 \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "string",\n  "securityBoard": "string",\n  "securityCode": "string",\n  "buySell": "Sell",\n  "stopLoss": {\n    "activationPrice": 0,\n    "price": 0,\n    "marketPrice": true,\n    "quantity": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "time": 0,\n    "useCredit": true\n  },\n  "takeProfit": {\n    "activationPrice": 0,\n    "correctionPrice": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "spreadPrice": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "marketPrice": true,\n    "quantity": {\n      "value": 0,\n      "units": "Percent"\n    },\n    "time": 0,\n    "useCredit": true\n  },\n  "expirationDate": "2023-03-02T07:25:11.226Z",\n  "linkOrder": 0,\n  "validBefore": {\n    "type": "TillEndSession",\n    "time": "2023-03-02T07:25:11.226Z"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"securityBoard")," - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e\u0440\u0433\u043e\u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"securityCode")," - \u043a\u043e\u0434 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buySell")," - \u0442\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#buysell"},"BuySell"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stopLoss")," - \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e stop-loss. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stoploss"},"StopLoss"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"takeProfit")," - \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e take-profit. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#takeprofit"},"TakeProfit"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expirationDate")," - \u0434\u0430\u0442\u0430 \u044d\u043a\u0441\u043f\u0438\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 FORTS;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"linkOrder")," - \u0431\u0438\u0440\u0436\u0435\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0439 (\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439) \u0437\u0430\u044f\u0432\u043a\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"validBefore")," - \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#ordervalidbefore-type"},"OrderValidBefore"),";"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"status")," - \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438. \u0422\u0438\u043f ",(0,r.kt)("a",{parentName:"p",href:"#stopstatus"},"StopStatus"),"."),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043e\u043a"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043e\u043a"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/stops"),", \u0443\u043a\u0430\u0437\u0430\u0432 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439);"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"includeExecuted")," - \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u044f\u0432\u043a\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"includeCanceled")," - \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u044f\u0432\u043a\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"includeActive")," - \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0437\u0430\u044f\u0432\u043a\u0438."),(0,r.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u0435\u0440\u0432\u0438\u0441 \u0432\u0435\u0440\u043d\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043e\u043a."),(0,r.kt)("h2",{id:"\u043e\u0442\u043c\u0435\u043d\u0430-\u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438"},"\u041e\u0442\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api\u200b/v1\u200b/stops"),", \u043f\u0435\u0440\u0435\u0434\u0430\u0432 \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "string",\n  "stopId": 0\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stopId")," - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043e\u0442\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0439 \u0441\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438."))}k.isMDXComponent=!0}}]);