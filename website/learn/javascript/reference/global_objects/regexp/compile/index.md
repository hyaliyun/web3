---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.compile
---

{{JSRef}} 

> [!NOTE]
> The `compile()` method is only specified for compatibility reasons. Using `compile()` causes the otherwise immutable regex source and flags to become mutable, which may break user expectations. You can use the [`RegExp()`](/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) constructor to construct a new regular expression object instead.

The **`compile()`** method of {{jsxref("RegExp")}} instances is used to recompile a regular expression with new source and flags after the `RegExp` object has already been created.

## Syntax

```js-nolint
compile(pattern, flags)
```

### Parameters

- `pattern`
  - : The text of the regular expression.
- `flags`
  - : Any combination of [flag values](/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags).

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using compile()

The following example shows how to recompile a regular expression with a new pattern and a new flag.

```js
const regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("RegExp")}}
