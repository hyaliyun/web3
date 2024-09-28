---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getDate
---



The **`getDate()`** method of  instances returns the day of the month for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-getdate.html", "shorter")}}

## Syntax

```js-nolint
getDate()
```

### Parameters

None.

### Return value

An integer, between 1 and 31, representing the day of the month for the given date according to local time. Returns `NaN` if the date is [invalid](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getDate()

The `day` variable has value `25`, based on the value of the  object `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const day = xmas95.getDate();

console.log(day); // 25
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
