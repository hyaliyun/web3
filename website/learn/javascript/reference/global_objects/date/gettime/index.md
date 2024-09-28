---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getTime
---



The **`getTime()`** method of  instances returns the number of milliseconds for this date since the [epoch](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), which is defined as the midnight at the beginning of January 1, 1970, UTC.

{{EmbedInteractiveExample("pages/js/date-gettime.html", "shorter")}}

## Syntax

```js-nolint
getTime()
```

### Parameters

None.

### Return value

A number representing the [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), in milliseconds, of this date. Returns `NaN` if the date is [invalid](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

`Date` objects are fundamentally represented by a [timestamp](/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), and this method allows you to retrieve the timestamp. You can use this method to help assign a date and time to another  object. This method is functionally equivalent to the {{jsxref("Date/valueof", "valueOf()")}} method.

## Examples

### Using getTime() for copying dates

Constructing a date object with the identical time value.

```js
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Measuring execution time

Subtracting two subsequent `getTime()` calls on newly generated  objects, give the time span between these two calls. This can be used to calculate the executing time of some operations. See also {{jsxref("Date.now()")}} to prevent instantiating unnecessary  objects.

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

> [!NOTE]
> In browsers that support the {{domxref("Performance API", "", "", "nocode")}}'s high-resolution time feature, {{domxref("Performance.now()")}} can provide more reliable and precise measurements of elapsed time than {{jsxref("Date.now()")}}.

## Specifications



## Browser compatibility



## See also

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
