---
sidebar_position: 6
---

# Стоп-заявки

## Stop

Объект стоп-заявка описывается следующими полями:

```json
{
  "stopId": 0,
  "securityCode": "string",
  "securityBoard": "string",
  "market": "Stock",
  "clientId": "string",
  "buySell": "Sell",
  "expirationDate": "2023-03-02T07:25:11.226Z",
  "linkOrder": 0,
  "validBefore": {
    "type": "TillEndSession",
    "time": "2023-03-02T07:25:11.226Z"
  },
  "status": "None",
  "message": "string",
  "orderNo": 0,
  "tradeNo": 0,
  "acceptedAt": "2023-03-02T07:25:11.226Z",
  "canceledAt": "2023-03-02T07:25:11.226Z",
  "currency": "string",
  "takeProfitExtremum": 0,
  "takeProfitLevel": 0,
  "stopLoss": {
    "activationPrice": 0,
    "price": 0,
    "marketPrice": true,
    "quantity": {
      "value": 0,
      "units": "Percent"
    },
    "time": 0,
    "useCredit": true
  },
  "takeProfit": {
    "activationPrice": 0,
    "correctionPrice": {
      "value": 0,
      "units": "Percent"
    },
    "spreadPrice": {
      "value": 0,
      "units": "Percent"
    },
    "marketPrice": true,
    "quantity": {
      "value": 0,
      "units": "Percent"
    },
    "time": 0,
    "useCredit": true
  }
}
```

`stopId` - идентификатор стоп-заявки;

`securityCode` - код инструмента;

`securityBoard` - основной режим торгов инструмента;

`market` - рынок инструмента. Тип [Market](common-types.md#market);

`clientId` - торговый код клиента;

`buySell` - тип [BuySell](common-types.md#buysell);

`expirationDate` - дата экспирации заявки FORTS;

`linkOrder` - биржевой номер связанной (активной) заявки;

`validBefore` - условие по времени действия заявки. Тип [OrderValidBefore](common-types.md#ordervalidbefore-type).

`status` - текущий статус стоп-заявки. Тип [StopStatus](#stopstatus);

`message` - содержит сообщение об ошибке, возникшей при обработке заявки. Заявка может быть отклонена по разным причинам сервером TRANSAQ или биржей с выставлением поля `status`;

`orderNo` - номер заявки, полученной в результате исполнения стоп-заявки;

`tradeNo` - номер сделки, которая привела к исполнению стоп-заявки;

`acceptedAt` - время регистрации заявки на сервере TRANSAQ (UTC);

`canceledAt` - время отмены заявки на сервере TRANSAQ (UTC);

`currency` - валюта цены;

`takeProfitExtremum` - текущий локальный экстремум для TP;

`takeProfitLevel` - текущий уровень коррекции для TP;

`stopLoss` - информация об stop-loss. Тип [StopLoss](#stoploss);

`takeProfit` - информация об take-profit. Тип [TakeProfit](#takeprofit).

## StopStatus

Статус стоп-заявки. Принимает следующие значения:

- `Active` - заявка сервером TRANSAQ;
- `Executed` - заявка исполнилась (выполнилась);
- `Cancelled` - заявка была отменена (снята) пользователем или биржей.

## StopLoss

Объект stop-loss (SL) описывается следующими полями:

```json
{
  "activationPrice": 0,
  "price": 0,
  "marketPrice": true,
  "quantity": {
    "value": 0,
    "units": "Percent"
  },
  "time": 0,
  "useCredit": true
}
```

`activationPrice` - цена активации;

`price` - цена условной заявки. В случае рыночной цены значение должно быть **0**;

`marketPrice` - значение `true` указывает на то, что необходимо выставить рыночную заявку, иначе выставляется условная заявка с ценой `price`;

`quantity` - объем заявки. Тип [StopQuantity](#stopquantity);

`time` - защитное время (секунды);

`useCredit` - использование кредита (недоступно для срочного рынка). Указать значение `true`, если необходимо использовать кредит, иначе `false`.

## TakeProfit

Объект take-profit (TP) описывается следующими полями:

```json
{
  "activationPrice": 0,
  "correctionPrice": {
    "value": 0,
    "units": "Percent"
  },
  "spreadPrice": {
    "value": 0,
    "units": "Percent"
  },
  "marketPrice": true,
  "quantity": {
    "value": 0,
    "units": "Percent"
  },
  "time": 0,
  "useCredit": true
}
```

`activationPrice` - цена активации;

`correctionPrice` - коррекция. Тип [StopPrice](#stopprice);

`spreadPrice` - защитный спред. В случае рыночной цены значение должно быть **0**. Тип [StopPrice](#stopprice);

`marketPrice` - значение `true` указывает на то, что необходимо выставить рыночную заявку, иначе выставляется условная заявка с ценой `price`;

`quantity` - объем заявки. Тип [StopQuantity](#stopquantity);

`time` - защитное время (секунды);

`useCredit` - использование кредита (недоступно для срочного рынка). Указать значение `true`, если использовать кредит, иначе `false`.

## StopQuantity

Объем стоп-заявки описывается следующими полями:

```json
{
  "value": 0,
  "units": "Percent"
}
```

`value` - значение объема, единицы измерения которого зависят от значения поля `units`;

`units` - единицы измерения объема. Принимает следующие значения:

- `Percent` - проценты,
- `Lots` - лоты.

## StopPrice

Цена стоп-заявки описывается следующими полями:

```json
{
  "value": 0,
  "units": "Percent"
}
```

`value` - значение цены, единицы измерения которой зависят от значения поля `units`;

`units` - единицы измерения цены. Принимает следующие значения:

- `Percent` - проценты,
- `Pips` - единицы цены.

## Выставление стоп-заявки

Для выставления новой стоп-заявки необходимо отправить `POST` запрос на `/api​/v1​/stops`, передав тело запроса в формате `json`:

```json
{
  "clientId": "string",
  "securityBoard": "string",
  "securityCode": "string",
  "buySell": "Sell",
  "stopLoss": {
    "activationPrice": 0,
    "price": 0,
    "marketPrice": true,
    "quantity": {
      "value": 0,
      "units": "Percent"
    },
    "time": 0,
    "useCredit": true
  },
  "takeProfit": {
    "activationPrice": 0,
    "correctionPrice": {
      "value": 0,
      "units": "Percent"
    },
    "spreadPrice": {
      "value": 0,
      "units": "Percent"
    },
    "marketPrice": true,
    "quantity": {
      "value": 0,
      "units": "Percent"
    },
    "time": 0,
    "useCredit": true
  },
  "expirationDate": "2023-03-02T07:25:11.226Z",
  "linkOrder": 0,
  "validBefore": {
    "type": "TillEndSession",
    "time": "2023-03-02T07:25:11.226Z"
  }
}
```

`clientId` - торговый код клиента;

`securityBoard` - основной режим торгов инструмента;

`securityCode` - код инструмента;

`buySell` - тип [BuySell](common-types.md#buysell);

`stopLoss` - информация о stop-loss. Тип [StopLoss](#stoploss);

`takeProfit` - информация о take-profit. Тип [TakeProfit](#takeprofit);

`expirationDate` - дата экспирации заявки FORTS;

`linkOrder` - биржевой номер связанной (активной) заявки;

`validBefore` - условие по времени действия заявки. Тип [OrderValidBefore](common-types.md#ordervalidbefore-type);

`status` - текущий статус стоп-заявки. Тип [StopStatus](#stopstatus).

## Получение стоп-заявок

Для получения списка стоп-заявок необходимо выполнить `GET` запрос на `/api/v1/stops`, указав критерии выбора в строке запроса:

`clientId` - торговый код клиента (обязательный);

`includeExecuted` - вернуть исполненные заявки;

`includeCanceled` - вернуть отмененные заявки;

`includeActive` - вернуть активные заявки.

В случае успешного выполнения запроса сервис вернет список стоп-заявок.

## Отмена стоп-заявки

Для отмены выставленной стоп-заявки необходимо выполнить `DELETE` запрос на `/api​/v1​/stops`, передав тело запроса в формате `json`:

```json
{
  "clientId": "string",
  "stopId": 0
}
```

`clientId` - торговый код клиента;

`stopId` - идентификатор отменяемой стоп-заявки.
