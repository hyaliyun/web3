---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setUTCMonth
---

{{JSRef}}

The **`setUTCMonth()`** method of  instances changes the month and/or day of the month for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}

## Syntax

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dateValue)
```

### Parameters

- `monthValue`
  - : An integer representing the month: 0 for January, 1 for February, and so on.
- `dateValue` {{optional_inline}}
  - : An integer from 1 to 31 representing the day of the month.

### Return value

Changes the  object in place, and returns its new [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `dateValue` parameter, the value returned from the
{{jsxref("Date/getUTCDate", "getUTCDate()")}} method is used.

If a parameter you specify is outside of the expected range, `setUTCMonth()`
attempts to update the date information in the  object accordingly.
For example, if you use 15 for `monthValue`, the year will be incremented by
1, and 3 will be used for month.

## Examples

### Using setUTCMonth()

```js
const theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
