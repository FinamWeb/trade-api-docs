---
sidebar_position: 5
---

# Портфели

Объект портфель описывается следующими полями:

## Portfolio

```json
{
  "clientId": "string",
  "content": {
    "includeCurrencies": true,
    "includeMoney": true,
    "includePositions": true,
    "includeMaxBuySell": true
  },
  "equity": 0,
  "balance": 0,
  "positions": [
    {
      "securityCode": "string",
      "market": "Stock",
      "balance": 0,
      "currentPrice": 0,
      "equity": 0,
      "averagePrice": 0,
      "currency": "string",
      "accumulatedProfit": 0,
      "todayProfit": 0,
      "unrealizedProfit": 0,
      "profit": 0,
      "maxBuy": 0,
      "maxSell": 0,
      "priceCurrency": "string",
      "averagePriceCurrency": "string",
      "averageRate": 0
    }
  ],
  "currencies": [
    {
      "name": "string",
      "balance": 0,
      "crossRate": 0,
      "equity": 0,
      "unrealizedProfit": 0
    }
  ],
  "money": [
    {
      "market": "Stock",
      "currency": "string",
      "balance": 0
    }
  ]
}
```

`clientId` - торговый код клиента;

`content` - наполнение портфеля;

`equity` - текущая оценка портфеля;

`balance` - входящая оценка стоимости портфеля;

`positions` - позиции портфеля. Массив объектов типа [PositionRow](#positionrow). Запрашиваются выставлением флага `includePositions` равным `true`;

`currencies` - валюта портфеля. Массив объектов типа [CurrencyRow](#currencyrow). Запрашивается выставлением флага `includeCurrencies` равным `true`;

`money` - денежные позиции. Массив объектов типа [MoneyRow](#moneyrow). Запрашивается выставлением флага `includeMoney` равным `true`.

## PositionRow

Объект позиция описывается следующими полями:

```json
{
  "securityCode": "string",
  "market": "Stock",
  "balance": 0,
  "currentPrice": 0,
  "equity": 0,
  "averagePrice": 0,
  "currency": "string",
  "accumulatedProfit": 0,
  "todayProfit": 0,
  "unrealizedProfit": 0,
  "profit": 0,
  "maxBuy": 0,
  "maxSell": 0,
  "priceCurrency": "string",
  "averagePriceCurrency": "string",
  "averageRate": 0
}
```

`securityCode` - код инструмента;

`market` - рынок инструмента. Тип [Market](common-types.md#market);

`currentPrice` - текущая цена в валюте инструмента;

`equity` - текущая оценка инструмента;

`averagePrice` - средняя цена;

`currency` - код валюты риска;

`accumulatedProfit` - прибыль/убыток по входящим;

`todayProfit` - прибыль/убыток по сделкам;

`unrealizedProfit` - нереализованная прибыль/убыток;

`profit` - прибыль/убыток;

`maxBuy`/`maxSell` - максимально возможное количество лотов на покупку/продажу (вычисляется, если указать флаг `includeMaxBuySell` в `true`, иначе значение будет равно **0**);

`priceCurrency` - код валюты цены;

`averagePriceCurrency` - код валюты балансовой цены;

`averageRate` - кросс-курс валюты балансовой цены к валюте риска.

## CurrencyRow

Объект валюта портфеля описывается следующими полями:

```json
{
  "name": "string",
  "balance": 0,
  "crossRate": 0,
  "equity": 0,
  "unrealizedProfit": 0
}
```

`name` - код валюты;

`balance` - текущая позиция;

`crossRate` - курс валюты;

`equity` - оценка позиции;

`unrealizedProfit` - нереализованная прибыль/убыток.

## MoneyRow

Объект денежная позиция описывается следующими полями:

```json
{
  "market": "Stock",
  "currency": "string",
  "balance": 0
}
```

`market` - рынок. Тип [Market](common-types.md#market);

`currency` - код валюты;

`balance` - текущая позиция.

## Получение портфеля

Для получения портфеля необходимо выполнить `GET` запрос на `/api/v1/portfolio/`, указав торговый код клиента и выбрав наполнение портфеля:

`clientId` - торговый код клиента (обязательный);

`includeCurrencies` - запросить информацию по валютам портфеля;

`includeMoney` - запросить информацию по денежным позициям портфеля;

`includePositions` - запросить информацию по позициям портфеля;

`includeMaxBuySell` - запросить информацию о максимальном доступном объеме на покупку/продажу.

В случае успешного выполнения запроса сервис вернет портфель клиента.