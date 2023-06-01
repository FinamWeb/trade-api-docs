---
sidebar_position: 7
---

# Свечи

Сервис предоставляет API для запроса двух типов свечей: [внутридневные](#intradaycandle) и [дневные](#daycandle).

Доступные таймфреймы для [внутридневных](#intradaycandle) свечей:
- `M1` - 1 минута
- `M5` - 5 минут
- `M15` - 15 минут
- `H1` - 1 час

Доступные таймфреймы для [дневных](#daycandle) свечей:
- `D1` - 1 день
- `W1` - 1 неделя

## DayCandle
Объект дневная свеча описывается следующим объектом:

```json
{
  "date": "string",
  "open": {
    "num": 0,
    "scale": 0
  },
  "close": {
    "num": 0,
    "scale": 0
  },
  "high": {
    "num": 0,
    "scale": 0
  },
  "low": {
    "num": 0,
    "scale": 0
  },
  "volume": 0
}
```
`date` - дата свечи в формате `yyyy-MM-dd` (в локальном времени биржи);

`open` - цена открытия (тип [Decimal](common-types.md#decimal));

`close` - цена закрытия (тип [Decimal](common-types.md#decimal));

`high` - максимальная цена (тип [Decimal](common-types.md#decimal));

`low` - минимальная цена (тип [Decimal](common-types.md#decimal));

`volume` - объем торгов.

## IntradayCandle

Объект внутридневная свеча описывается следующим объектом:

```json
{
  "timestamp": "string",
  "open": {
    "num": 0,
    "scale": 0
  },
  "close": {
    "num": 0,
    "scale": 0
  },
  "high": {
    "num": 0,
    "scale": 0
  },
  "low": {
    "num": 0,
    "scale": 0
  },
  "volume": 0
}
```
`timestamp` - дата и время свечи в формате `yyyy-MM-ddTHH:mm:ssZ` в поясе UTC;

`open` - цена открытия (тип [Decimal](common-types.md#decimal));

`close` - цена закрытия (тип [Decimal](common-types.md#decimal));

`high` - максимальная цена (тип [Decimal](common-types.md#decimal));

`low` - минимальная цена (тип [Decimal](common-types.md#decimal));

`volume` - объем торгов.

## Запрос свечей

Для получения списка свечей необходимо выполнить `GET` запрос на `/api/v1/day-candles/` или `/api/v1/intraday-candles`.

Необходимо указать `securityCode`, `securityBoard` и `timeFrame`.

Запросить можно как определенное количество свечей так и за интервал.

Для запроса количества свечей в запросе необходимо указать `count` и либо `from` (начиная с указанной даты) либо `to` (до указанной даты).

Для запроса за интервал необходимо указать`from` и `to`.

Для дневных свечей в `from` и `to` указывается дата в формате `yyyy-MM-dd`, а для внутридневных свечей в формате `yyyy-MM-ddTHH:mm:ssZ` в часовом поясе UTC.

Ограничения на запрос:
- Максимальное значение `count` 500 штук
- Для дневных свечей максимальный интервал 365 дней
- Для внутридневных свечей максимальный интервал 30 дней
