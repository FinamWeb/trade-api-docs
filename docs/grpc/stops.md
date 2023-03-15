---
sidebar_position: 2
---
# NewStop

### Тейк-профит (Следящий)

```json
{
  "buy_sell": "BUY_SELL_SELL",
  "client_id": "YOUR_TRADE_CODE",
  "security_board": "TQBR",
  "security_code": "SBER",
  "take_profit": {
    "activation_price": 160,
    "correction_price": {
      "units": "STOP_PRICE_UNITS_PIPS",
      "value": 2
    },
    "market_price": false,
    "quantity": {
      "units": "STOP_QUANTITY_UNITS_LOTS",
      "value": 7
    },
    "spread_price": {
      "units": "STOP_PRICE_UNITS_PIPS",
      "value": 1
    },
    "use_credit": false
  }
}
```

### Тейк-профит (Простой)

```json
{
  "buy_sell": "BUY_SELL_BUY",
  "client_id": "YOUR_TRADE_CODE",
  "security_board": "TQBR",
  "security_code": "SBER",
  "take_profit": {
    "activation_price": 162,
    "market_price": true,
    "quantity": {
      "units": "STOP_QUANTITY_UNITS_LOTS",
      "value": 1
    }
  }
}
```

### Стоп-лосс

```json
{
  "buy_sell": 1,
  "client_id": "YOUR_TRADE_CODE",
  "security_board": "TQBR",
  "security_code": "AFLT",
  "stop_loss": {
    "activation_price": 25,
    "market_price": false,
    "price": 25,
    "quantity": {
      "units": "STOP_QUANTITY_UNITS_LOTS",
      "value": 2
    },
    "use_credit": false
  },
  "valid_before": {
    "type": 2
  }
}
```

# GetStops
Получение списка всех стоп-заявок

```json
{
  "client_id": "YOUR_TRADE_CODE",
  "include_active": true,
  "include_canceled": true,
  "include_executed": true
}
```

# CancelStop
Отмена активной стоп-заявки

```json
{
  "client_id": "YOUR_TRADE_CODE",
  "stop_id": 1730
}
```