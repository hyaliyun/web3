---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setFullYear
---



The **`setFullYear()`** method of  instances changes the year, month, and/or day of month for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}

## Syntax

```js-nolint
setFullYear(yearValue)
setFullYear(yearValue, monthValue)
setFullYear(yearValue, monthValue, dateValue)
```

### Parameters

- `yearValue`
  - : An integer representing the year. For example, 1995.
- `monthValue` {{optional_inline}}
  - : An integer representing the month: 0 for January, 1 for February, and so on.
- `dateValue` {{optional_inline}}
  - : An integer between 1 and 31 representing the day of the month. If you specify `dateValue`, you must also specify `monthValue`.

### Return value

Changes the  object in place, and returns its new [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `monthValue` and `dateValue` parameters, the same values as what are returned by {{jsxref("Date/getMonth", "getMonth()")}} and {{jsxref("Date/getDate", "getDate()")}} are used.

If a parameter you specify is outside of the expected range, other parameters and the date information in the  object are updated accordingly. For example, if you specify 15 for `monthValue`, the year is incremented by 1 (`yearValue + 1`), and 3 is used for the month.

## Examples

### Using setFullYear()

```js
const theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
