---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
page-type: javascript-static-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.lastParen
---

{{JSRef}} 

> [!NOTE]
> All `RegExp` static properties that expose the last match state globally are deprecated. See [deprecated RegExp features](/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) for more information.

The **`RegExp.lastParen`** static accessor property returns the last parenthesized substring match, if any. `RegExp["$+"]` is an alias for this property.

## Description

Because `lastParen` is a static property of {{jsxref("RegExp")}}, you always use it as `RegExp.lastParen` or `RegExp["$+"]`, rather than as a property of a `RegExp` object you created.

The value of `lastParen` updates whenever a `RegExp` (but not a `RegExp` subclass) instance makes a successful match. If no matches have been made, or if the most recent regex execution contains no capturing groups, `lastParen` is an empty string. The set accessor of `lastParen` is `undefined`, so you cannot change this property directly.

You cannot use the shorthand alias with the dot property accessor (`RegExp.$+`), because `+` is not a valid identifier part, so this causes a {{jsxref("SyntaxError")}}. Use the [bracket notation](/Web/JavaScript/Reference/Operators/Property_accessors) instead.

## Examples

### Using lastParen and $+

```js
const re = /(hi)/g;
re.test("hi there!");
RegExp.lastParen; // "hi"
RegExp["$+"]; // "hi"
```

## Specifications



## Browser compatibility



## See also

- [`RegExp.input` (`$_`)](/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.leftContext` (`` $` ``)](/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/Web/JavaScript/Reference/Global_Objects/RegExp/n)
