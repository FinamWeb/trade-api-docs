---
sidebar_position: 4
---
# GetEvents

### Подписка на заявки и сделки
```json
{
  "order_trade_subscribe_request": {
    "request_id": "ffc38cb7-2072",
    "client_ids": [
      "YOUR_TRADE_CODE"
    ],
    "include_trades": true,
    "include_orders": true
  }
}
```

### Удаление подписки на заявки и сделки
```json
{
  "order_trade_unsubscribe_request": {
    "request_id": "ffc38cb7-2072"
  }
}
```

### Подписка на биржевой стакан
```json
{
  "order_book_subscribe_request": {
    "request_id": "32ef5786-e887",
    "security_board": "TQBR",
    "security_code": "GAZP"
  }
}
```

### Удаление подписки на биржевой стакан
```json
{
  "order_book_unsubscribe_request": {
    "request_id": "32ef5786-e887",
    "security_board": "TQBR",
    "security_code": "GAZP"
  }
}
```

### Лимит количества подписок на биржевой стакан

Для предотвращения повышенной нагрузки на сервис количество подписок на биржевой стакан от пользователя ограничено. 

Допускается не более 50 подписок на сессию.

При попытке превысить заданный лимит пользователю вернется ошибка с кодом `BAD_REQUEST` и сообщением `"OrderBook's subscriptions limit reached 50"`.

### Keep-Alive

При установлении длительного соединения с сервером, между клиентом и сервером могут находиться различные proxy-сервера, которые могут принудительно разрывать соединение при отсутствии активности в нем.

Для поддержания активности необходимо с неким интервалом (например, раз в 3 минуты) отправлять сообщение `proto.tradeapi.v1.KeepAliveRequest`.

На каждое сообщение `proto.tradeapi.v1.KeepAliveRequest` сервер должен отвечать подтверждающим сообщением `proto.tradeapi.v1.ResponseEvent`.
