---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setMilliseconds
---

{{JSRef}}

The **`setMilliseconds()`** method of  instances changes the milliseconds for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Syntax

```js-nolint
setMilliseconds(millisecondsValue)
```

### Parameters

- `millisecondsValue`
  - : An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the  object in place, and returns its new [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If `millisecondsValue` is `NaN` (or other values that get [coerced](/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you specify a number outside the expected range, the date information in the  object is updated accordingly. For example, if you specify 1005, the number of seconds is incremented by 1, and 5 is used for the milliseconds.

## Examples

### Using setMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
