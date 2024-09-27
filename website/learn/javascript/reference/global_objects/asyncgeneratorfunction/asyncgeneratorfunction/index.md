---
title: AsyncGeneratorFunction() constructor
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
page-type: javascript-constructor
browser-compat: javascript.builtins.AsyncGeneratorFunction.AsyncGeneratorFunction
---

{{JSRef}}

The **`AsyncGeneratorFunction()`** constructor creates {{jsxref("AsyncGeneratorFunction")}} objects.

Note that `AsyncGeneratorFunction` is not a global object. It could be obtained by evaluating the following code.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

The `AsyncGeneratorFunction()` constructor is not intended to be used directly, and all caveats mentioned in the {{jsxref("Function/Function", "Function()")}} description apply to `AsyncGeneratorFunction()`.

## Syntax

```js-nolint
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg1, functionBody)
new AsyncGeneratorFunction(arg1, arg2, functionBody)
new AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg1, functionBody)
AsyncGeneratorFunction(arg1, arg2, functionBody)
AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> **Note:** `AsyncGeneratorFunction()` can be called with or without [`new`](/Web/JavaScript/Reference/Operators/new). Both create a new `AsyncGeneratorFunction` instance.

### Parameters

See {{jsxref("Function/Function", "Function()")}}.

## Examples

### Using the constructor

The following example uses the `AsyncGeneratorFunction` constructor to create an async generator function.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
const createAsyncGenerator = new AsyncGeneratorFunction("a", "yield a * 2");
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
```

## Specifications



## Browser compatibility



## See also

- [`async function*`](/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` expression](/Web/JavaScript/Reference/Operators/async_function*)
- [`Function()` constructor](/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [Iterators and generators](/Web/JavaScript/Guide/Iterators_and_generators) guide
- {{jsxref("Functions", "Functions", "", 1)}}
