---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getHours
---



The **`getHours()`** method of  instances returns the hours for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-gethours.html", "shorter")}}

## Syntax

```js-nolint
getHours()
```

### Parameters

None.

### Return value

An integer, between 0 and 23, representing the hours for the given date according to local time. Returns `NaN` if the date is [invalid](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getHours()

The `hours` variable has value `23`, based on the value of the  object `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const hours = xmas95.getHours();

console.log(hours); // 23
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
