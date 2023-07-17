"use strict";(self.webpackChunktrade_api_docs=self.webpackChunktrade_api_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","href":"/trade-api-docs/","docId":"common-info"},{"type":"link","label":"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f","href":"/trade-api-docs/getting-started","docId":"getting-started"},{"type":"link","label":"\u0422\u043e\u043a\u0435\u043d\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430","href":"/trade-api-docs/tokens","docId":"tokens"},{"type":"link","label":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435","href":"/trade-api-docs/usage","docId":"usage"},{"type":"category","label":"REST API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"REST API","href":"/trade-api-docs/rest-api/api","docId":"rest-api/api"},{"type":"link","label":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0431\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432","href":"/trade-api-docs/rest-api/common-types","docId":"rest-api/common-types"},{"type":"link","label":"\u0417\u0430\u044f\u0432\u043a\u0438","href":"/trade-api-docs/rest-api/orders","docId":"rest-api/orders"},{"type":"link","label":"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b","href":"/trade-api-docs/rest-api/securities","docId":"rest-api/securities"},{"type":"link","label":"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438","href":"/trade-api-docs/rest-api/portfolios","docId":"rest-api/portfolios"},{"type":"link","label":"\u0421\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438","href":"/trade-api-docs/rest-api/stops","docId":"rest-api/stops"},{"type":"link","label":"\u0421\u0432\u0435\u0447\u0438","href":"/trade-api-docs/rest-api/candles","docId":"rest-api/candles"}],"href":"/trade-api-docs/category/rest-api"},{"type":"category","label":"gRPC","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"NewOrder","href":"/trade-api-docs/grpc/orders","docId":"grpc/orders"},{"type":"link","label":"NewStop","href":"/trade-api-docs/grpc/stops","docId":"grpc/stops"},{"type":"link","label":"GetPortfolios","href":"/trade-api-docs/grpc/portfolios","docId":"grpc/portfolios"},{"type":"link","label":"GetEvents","href":"/trade-api-docs/grpc/events","docId":"grpc/events"},{"type":"link","label":"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u043f\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 Trade API","href":"/trade-api-docs/grpc/recommendations","docId":"grpc/recommendations"}],"href":"/trade-api-docs/category/grpc"},{"type":"category","label":"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u0425\u0430\u043a\u0430\u0442\u043e\u043d \u0424\u0438\u043d\u0430\u043c Trade API. \u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0438","href":"/trade-api-docs/examples/hackathon","docId":"examples/hackathon"},{"type":"link","label":"Python","href":"/trade-api-docs/examples/python","docId":"examples/python"},{"type":"link","label":"Golang","href":"/trade-api-docs/examples/golang","docId":"examples/golang"}],"href":"/trade-api-docs/category/\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},{"type":"link","label":"FAQ","href":"/trade-api-docs/faq","docId":"faq"}]},"docs":{"common-info":{"id":"common-info","title":"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","description":"Trade API \u2014 \u044d\u0442\u043e gRPC \u0438 REST API, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c TRANSAQ. \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043c TXmlConnector.dll, \u0432\u044b\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u0432\u0438\u0434\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0439.","sidebar":"tutorialSidebar"},"examples/golang":{"id":"examples/golang","title":"Golang","description":"- https://github.com/DBoyara/FinamTradeApiGo","sidebar":"tutorialSidebar"},"examples/hackathon":{"id":"examples/hackathon","title":"\u0425\u0430\u043a\u0430\u0442\u043e\u043d \u0424\u0438\u043d\u0430\u043c Trade API. \u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0438","description":"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u2014 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u0440\u043e\u0431\u043e\u0442\u044b","sidebar":"tutorialSidebar"},"examples/python":{"id":"examples/python","title":"Python","description":"- https://github.com/cia76/FinamPy","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"\u0413\u0434\u0435 \u0432\u0437\u044f\u0442\u044c proto \u0444\u0430\u0439\u043b\u044b?","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f","description":"1. \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442 \u0432 \xab\u0424\u0438\u043d\u0430\u043c\u0435\xbb.","sidebar":"tutorialSidebar"},"grpc/events":{"id":"grpc/events","title":"GetEvents","description":"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u0437\u0430\u044f\u0432\u043a\u0438 \u0438 \u0441\u0434\u0435\u043b\u043a\u0438","sidebar":"tutorialSidebar"},"grpc/orders":{"id":"grpc/orders","title":"NewOrder","description":"\u0420\u044b\u043d\u043e\u0447\u043d\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430","sidebar":"tutorialSidebar"},"grpc/portfolios":{"id":"grpc/portfolios","title":"GetPortfolios","description":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f","sidebar":"tutorialSidebar"},"grpc/recommendations":{"id":"grpc/recommendations","title":"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u043f\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 Trade API","description":"Postman \u0421\u043a\u0430\u0447\u0430\u0442\u044c","sidebar":"tutorialSidebar"},"grpc/stops":{"id":"grpc/stops","title":"NewStop","description":"\u0422\u0435\u0439\u043a-\u043f\u0440\u043e\u0444\u0438\u0442 (\u0421\u043b\u0435\u0434\u044f\u0449\u0438\u0439)","sidebar":"tutorialSidebar"},"rest-api/api":{"id":"rest-api/api","title":"REST API","description":"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f","sidebar":"tutorialSidebar"},"rest-api/candles":{"id":"rest-api/candles","title":"\u0421\u0432\u0435\u0447\u0438","description":"\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 API \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0434\u0432\u0443\u0445 \u0442\u0438\u043f\u043e\u0432 \u0441\u0432\u0435\u0447\u0435\u0439: \u0432\u043d\u0443\u0442\u0440\u0438\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0438 \u0434\u043d\u0435\u0432\u043d\u044b\u0435.","sidebar":"tutorialSidebar"},"rest-api/common-types":{"id":"rest-api/common-types","title":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0431\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432","description":"Market","sidebar":"tutorialSidebar"},"rest-api/orders":{"id":"rest-api/orders","title":"\u0417\u0430\u044f\u0432\u043a\u0438","description":"Order","sidebar":"tutorialSidebar"},"rest-api/portfolios":{"id":"rest-api/portfolios","title":"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438","description":"\u041e\u0431\u044a\u0435\u043a\u0442 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438:","sidebar":"tutorialSidebar"},"rest-api/securities":{"id":"rest-api/securities","title":"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b","description":"Security","sidebar":"tutorialSidebar"},"rest-api/stops":{"id":"rest-api/stops","title":"\u0421\u0442\u043e\u043f-\u0437\u0430\u044f\u0432\u043a\u0438","description":"Stop","sidebar":"tutorialSidebar"},"tokens":{"id":"tokens","title":"\u0422\u043e\u043a\u0435\u043d\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430","description":"Trade API \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0438\u043f\u044b \u0442\u043e\u043a\u0435\u043d\u043e\u0432:","sidebar":"tutorialSidebar"},"usage":{"id":"usage","title":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435","description":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 API \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438\u0445 \u0432\u044b\u0437\u043e\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 https://trade-api.finam.ru/swagger/index.html. \u0422\u0430\u043c \u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0442\u043e\u043a\u0435\u043d\u0443 \u043f\u0440\u044f\u043c\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.","sidebar":"tutorialSidebar"}}}')}}]);