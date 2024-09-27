---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setUTCMilliseconds
---

{{JSRef}}

The **`setUTCMilliseconds()`** method of  instances changes the milliseconds for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## Syntax

```js-nolint
setUTCMilliseconds(millisecondsValue)
```

### Parameters

- `millisecondsValue`
  - : An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the  object in place, and returns its new [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If `millisecondsValue` is `NaN` (or other values that get [coerced](/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If a parameter you specify is outside of the expected range,
`setUTCMilliseconds()` attempts to update the date information in the
 object accordingly. For example, if you use 1100 for
`millisecondsValue`, the seconds stored in the 
object will be incremented by 1, and 100 will be used for milliseconds.

## Examples

### Using setUTCMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
