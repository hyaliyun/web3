---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
page-type: javascript-static-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.rightContext
---

{{JSRef}} 

> [!NOTE]
> All `RegExp` static properties that expose the last match state globally are deprecated. See [deprecated RegExp features](/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) for more information.

The **`RegExp.rightContext`** static accessor property returns the substring following the most recent match. `RegExp["$'"]` is an alias for this property.

## Description

Because `rightContext` is a static property of {{jsxref("RegExp")}}, you always use it as `RegExp.rightContext` or `RegExp["$'"]`, rather than as a property of a `RegExp` object you created.

The value of `rightContext` updates whenever a `RegExp` (but not a `RegExp` subclass) instance makes a successful match. If no matches have been made, `rightContext` is an empty string. The set accessor of `rightContext` is `undefined`, so you cannot change this property directly.

You cannot use the shorthand alias with the dot property accessor (`RegExp.$'`), because `'` is not a valid identifier part, so this causes a {{jsxref("SyntaxError")}}. Use the [bracket notation](/Web/JavaScript/Reference/Operators/Property_accessors) instead.

`$'` can also be used in the replacement string of {{jsxref("String.prototype.replace()")}}, but that's unrelated to the `RegExp["$'"]` legacy property.

## Examples

### Using rightContext and $'

```js
const re = /hello/g;
re.test("hello world!");
RegExp.rightContext; // " world!"
RegExp["$'"]; // " world!"
```

## Specifications



## Browser compatibility



## See also

- [`RegExp.input` (`$_`)](/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.$1`, …, `RegExp.$9`](/Web/JavaScript/Reference/Global_Objects/RegExp/n)
