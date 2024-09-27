---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setTime
---

{{JSRef}}

The **`setTime()`** method of  instances changes the [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) for this date, which is the number of milliseconds since the [epoch](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), defined as the midnight at the beginning of January 1, 1970, UTC.

{{EmbedInteractiveExample("pages/js/date-settime.html", "taller")}}

## Syntax

```js-nolint
setTime(timeValue)
```

### Parameters

- `timeValue`
  - : An integer representing the new timestamp — the number of milliseconds since the midnight at the beginning of January 1, 1970, UTC.

### Return value

Changes the  object in place, and returns its new [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If `timeValue` is `NaN` (or other values that get [coerced](/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Examples

### Using setTime()

```js
const theBigDay = new Date("1999-07-01");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
