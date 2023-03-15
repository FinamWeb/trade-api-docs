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