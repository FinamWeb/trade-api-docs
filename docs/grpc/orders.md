---
sidebar_position: 1
---
# NewOrder

### Рыночная заявка

```json
{
  "client_id": "YOUR_TRADE_CODE",
  "security_board": "TQBR",
  "security_code": "SBER",
  "buy_sell": "BUY_SELL_BUY",
  "quantity": 1,
  "property": "ORDER_PROPERTY_PUT_IN_QUEUE"
}
```

### Лимитная заявка

```json
{
  "client_id": "YOUR_TRADE_CODE",
  "security_board": "TQBR",
  "security_code": "SBER",
  "buy_sell": "BUY_SELL_SELL",
  "quantity": 1,
  "property": "ORDER_PROPERTY_PUT_IN_QUEUE",
  "price": {"value": 150}
}
```

### Условная заявка

```json
{
  "client_id": "YOUR_TRADE_CODE",
  "security_board": "TQBR",
  "security_code": "SBER",
  "buy_sell": "BUY_SELL_BUY",
  "quantity": 5,
  "property": "ORDER_PROPERTY_PUT_IN_QUEUE",
  "condition": {
    "type": "ORDER_CONDITION_TYPE_LAST_UP",
    "price": 150
  }
}
```

# GetOrders

Получение списка заявок (активных, отмененных, исполненных). 
Отмененные и исполненные заявки хранятся в разрезе одной торговой сессии.

```json
{
  "client_id": "YOUR_TRADE_CODE",
  "include_active": true,
  "include_canceled": true,
  "include_matched": true
}
```

# CancelOrder

Отмена активной заявки

```json
{
  "client_id": "YOUR_TRADE_CODE",
  "transaction_id": 216517182
}
```