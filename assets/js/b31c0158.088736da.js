"use strict";(self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[]).push([[398],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),k=a,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:5},o="\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438",l={unversionedId:"rest-api/portfolios",id:"rest-api/portfolios",title:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438",description:"\u041e\u0431\u044a\u0435\u043a\u0442 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:",source:"@site/docs/rest-api/portfolios.md",sourceDirName:"rest-api",slug:"/rest-api/portfolios",permalink:"/trade-api-docs/rest-api/portfolios",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b",permalink:"/trade-api-docs/rest-api/securities"},next:{title:"\u0421\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438",permalink:"/trade-api-docs/rest-api/stops"}},p={},u=[{value:"Portfolio",id:"portfolio",level:2},{value:"PositionRow",id:"positionrow",level:2},{value:"CurrencyRow",id:"currencyrow",level:2},{value:"MoneyRow",id:"moneyrow",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f",level:2}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u043e\u0440\u0442\u0444\u0435\u043b\u0438"},"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,a.kt)("h2",{id:"portfolio"},"Portfolio"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "clientId": "string",\n    "content": {\n      "includeCurrencies": true,\n      "includeMoney": true,\n      "includePositions": true,\n      "includeMaxBuySell": true\n    },\n    "equity": 0,\n    "balance": 0,\n    "positions": [\n      {\n        "securityCode": "string",\n        "market": "Stock",\n        "balance": 0,\n        "currentPrice": 0,\n        "equity": 0,\n        "averagePrice": 0,\n        "currency": "string",\n        "accumulatedProfit": 0,\n        "todayProfit": 0,\n        "unrealizedProfit": 0,\n        "profit": 0,\n        "maxBuy": 0,\n        "maxSell": 0,\n        "priceCurrency": "string",\n        "averagePriceCurrency": "string",\n        "averageRate": 0\n      }\n    ],\n    "currencies": [\n      {\n        "name": "string",\n        "balance": 0,\n        "crossRate": 0,\n        "equity": 0,\n        "unrealizedProfit": 0\n      }\n    ],\n    "money": [\n      {\n        "market": "Stock",\n        "currency": "string",\n        "balance": 0\n      }\n    ]\n  }\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"content")," - \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"equity")," - \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u043e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"balance")," - \u0432\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u043e\u0446\u0435\u043d\u043a\u0430 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"positions")," - \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f. \u041c\u0430\u0441\u0441\u0438\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0442\u0438\u043f\u0430 ",(0,a.kt)("a",{parentName:"p",href:"#positionrow"},"PositionRow"),". \u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0444\u043b\u0430\u0433\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"includePositions")," \u0440\u0430\u0432\u043d\u044b\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"currencies")," - \u0432\u0430\u043b\u044e\u0442\u0430 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f. \u041c\u0430\u0441\u0441\u0438\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0442\u0438\u043f\u0430 ",(0,a.kt)("a",{parentName:"p",href:"#currencyrow"},"CurrencyRow"),". \u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0444\u043b\u0430\u0433\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"includeCurrencies")," \u0440\u0430\u0432\u043d\u044b\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"money")," - \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u0438. \u041c\u0430\u0441\u0441\u0438\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0442\u0438\u043f\u0430 ",(0,a.kt)("a",{parentName:"p",href:"#moneyrow"},"MoneyRow"),". \u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0444\u043b\u0430\u0433\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"includeMoney")," \u0440\u0430\u0432\u043d\u044b\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"positionrow"},"PositionRow"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "securityCode": "string",\n    "market": "Stock",\n    "balance": 0,\n    "currentPrice": 0,\n    "equity": 0,\n    "averagePrice": 0,\n    "currency": "string",\n    "accumulatedProfit": 0,\n    "todayProfit": 0,\n    "unrealizedProfit": 0,\n    "profit": 0,\n    "maxBuy": 0,\n    "maxSell": 0,\n    "priceCurrency": "string",\n    "averagePriceCurrency": "string",\n    "averageRate": 0\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"securityCode")," - \u043a\u043e\u0434 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"market")," - \u0440\u044b\u043d\u043e\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#market"},"Market"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"currentPrice")," - \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0446\u0435\u043d\u0430 \u0432 \u0432\u0430\u043b\u044e\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"equity")," - \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u043e\u0446\u0435\u043d\u043a\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"averagePrice")," - \u0441\u0440\u0435\u0434\u043d\u044f\u044f \u0446\u0435\u043d\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"currency")," - \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b \u0440\u0438\u0441\u043a\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"accumulatedProfit")," - \u043f\u0440\u0438\u0431\u044b\u043b\u044c/\u0443\u0431\u044b\u0442\u043e\u043a \u043f\u043e \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u043c."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"todayProfit")," - \u043f\u0440\u0438\u0431\u044b\u043b\u044c/\u0443\u0431\u044b\u0442\u043e\u043a \u043f\u043e \u0441\u0434\u0435\u043b\u043a\u0430\u043c."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unrealizedProfit")," - \u043d\u0435\u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c/\u0443\u0431\u044b\u0442\u043e\u043a."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"profit")," - \u043f\u0440\u0438\u0431\u044b\u043b\u044c/\u0443\u0431\u044b\u0442\u043e\u043a."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"maxBuy"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"maxSell")," - \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u043e\u0442\u043e\u0432 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443/\u043f\u0440\u043e\u0434\u0430\u0436\u0443 (\u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u043b\u0430\u0433 ",(0,a.kt)("inlineCode",{parentName:"p"},"includeMaxBuySell")," \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", \u0438\u043d\u0430\u0447\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u043e ",(0,a.kt)("strong",{parentName:"p"},"0"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"priceCurrency")," - \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b \u0446\u0435\u043d\u044b."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"averagePriceCurrency")," - \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b \u0431\u0430\u043b\u0430\u043d\u0441\u043e\u0432\u043e\u0439 \u0446\u0435\u043d\u044b."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"averageRate")," - \u043a\u0440\u043e\u0441\u0441-\u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442\u044b \u0431\u0430\u043b\u0430\u043d\u0441\u043e\u0432\u043e\u0439 \u0446\u0435\u043d\u044b \u043a \u0432\u0430\u043b\u044e\u0442\u0435 \u0440\u0438\u0441\u043a\u0430."),(0,a.kt)("h2",{id:"currencyrow"},"CurrencyRow"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u0432\u0430\u043b\u044e\u0442\u0430 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "string",\n    "balance": 0,\n    "crossRate": 0,\n    "equity": 0,\n    "unrealizedProfit": 0\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"name")," - \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"balance")," - \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"crossRate")," - \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442\u044b."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"equity")," - \u043e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unrealizedProfit")," - \u043d\u0435\u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c/\u0443\u0431\u044b\u0442\u043e\u043a."),(0,a.kt)("h2",{id:"moneyrow"},"MoneyRow"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "market": "Stock",\n    "currency": "string",\n    "balance": 0\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"market")," - \u0440\u044b\u043d\u043e\u043a. \u0422\u0438\u043f ",(0,a.kt)("a",{parentName:"p",href:"/trade-api-docs/rest-api/common-types#market"},"Market"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"currency")," - \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"balance")," - \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f."),(0,a.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/portfolio/")," \u0443\u043a\u0430\u0437\u0430\u0432 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0432\u044b\u0431\u0440\u0430\u0432 \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," - \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"includeCurrencies")," - \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0432\u0430\u043b\u044e\u0442\u0430\u043c \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"includeMoney")," - \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u043c \u043f\u043e\u0437\u0438\u0446\u0438\u044f\u043c \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"includePositions")," - \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u044f\u043c \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"includeMaxBuySell")," - \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c \u043e\u0431\u044a\u0435\u043c\u0435 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443/\u043f\u0440\u043e\u0434\u0430\u0436\u0443."),(0,a.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u0435\u0440\u0432\u0438\u0441 \u0432\u0435\u0440\u043d\u0435\u0442 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0430."))}d.isMDXComponent=!0}}]);