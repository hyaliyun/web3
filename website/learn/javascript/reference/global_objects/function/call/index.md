---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
page-type: javascript-instance-method
browser-compat: javascript.builtins.Function.call
---

{{JSRef}}

The **`call()`** method of {{jsxref("Function")}} instances calls this function with a given `this` value and arguments provided individually.

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## Syntax

```js-nolint
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```

### Parameters

- `thisArg`
  - : The value to use as `this` when calling `func`. If the function is not in [strict mode](/Web/JavaScript/Reference/Strict_mode), [`null`](/Web/JavaScript/Reference/Operators/null) and [`undefined`](/Web/JavaScript/Reference/Global_Objects/undefined) will be replaced with the global object, and primitive values will be converted to objects.
- `arg1`, …, `argN` {{optional_inline}}
  - : Arguments for the function.

### Return value

The result of calling the function with the specified `this` value and arguments.

## Description

> [!NOTE]
> This function is almost identical to {{jsxref("Function/apply", "apply()")}}, except that the function arguments are passed to `call()` individually as a list, while for `apply()` they are combined in one object, typically an array — for example, `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normally, when calling a function, the value of [`this`](/Web/JavaScript/Reference/Operators/this) inside the function is the object that the function was accessed on. With `call()`, you can assign an arbitrary value as `this` when calling an existing function, without first attaching the function to the object as a property. This allows you to use methods of one object as generic utility functions.

> [!WARNING]
> Do not use `call()` to chain constructors (for example, to implement inheritance). This invokes the constructor function as a plain function, which means [`new.target`](/Web/JavaScript/Reference/Operators/new.target) is `undefined`, and classes throw an error because they can't be called without [`new`](/Web/JavaScript/Reference/Operators/new). Use {{jsxref("Reflect.construct()")}} or [`extends`](/Web/JavaScript/Reference/Classes/extends) instead.

## Examples

### Using call() to invoke a function and specifying the this value

In the example below, when we call `greet`, the value of `this` will be bound to object `obj`, even when `greet` is not a method of `obj`.

```js
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### Using call() to invoke a function without specifying the first argument

If the first `thisArg` parameter is omitted, it defaults to `undefined`. In non-strict mode, the `this` value is then substituted with {{jsxref("globalThis")}} (which is akin to the global object).

```js
globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"
```

In strict mode, the value of `this` is not substituted, so it stays as `undefined`.

```js
"use strict";

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Transforming methods to utility functions

`call()` is almost equivalent to a normal function call, except that `this` is passed as a normal parameter instead of as the value that the function was accessed on. This is similar to how general-purpose utility functions work: instead of calling `array.map(callback)`, you use `map(array, callback)`, which allows you to use `map` with array-like objects that are not arrays (for example, [`arguments`](/Web/JavaScript/Reference/Functions/arguments)) without mutating `Object.prototype`.

Take {{jsxref("Array.prototype.slice()")}}, for example, which you want to use for converting an array-like object to a real array. You could create a shortcut like this:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Note that you can't save `slice.call` and call it as a plain function, because the `call()` method also reads its `this` value, which is the function it should call. In this case, you can use {{jsxref("Function/bind", "bind()")}} to bind the value of `this` for `call()`. In the following piece of code, `slice()` is a bound version of `Function.prototype.call()`, with the `this` value bound to {{jsxref("Array.prototype.slice()")}}. This means that additional `call()` calls can be eliminated:

```js
// Same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);
```

## Specifications



## Browser compatibility



## See also

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Reflect.apply()")}}
- [Spread syntax (`...`)](/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Introduction to Object-Oriented JavaScript](/Learn/JavaScript/Objects)
