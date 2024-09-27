---
title: function* expression
slug: Web/JavaScript/Reference/Operators/function*
page-type: javascript-operator
browser-compat: javascript.operators.generator_function
---

{{jsSidebar("Operators")}}

The **`function*`** keyword can be used to define a generator function inside an expression.

You can also define generator functions using the [`function*` declaration](/Web/JavaScript/Reference/Statements/function*).

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html", "taller")}}

## Syntax

```js-nolint
function* (param0) {
  statements
}
function* (param0, param1) {
  statements
}
function* (param0, param1, /* …, */ paramN) {
  statements
}

function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> An [expression statement](/Web/JavaScript/Reference/Statements/Expression_statement) cannot begin with the keyword `function` to avoid ambiguity with a [`function*` declaration](/Web/JavaScript/Reference/Statements/function*). The `function` keyword only begins an expression when it appears in a context that cannot accept statements.

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of a formal parameter for the function. For the parameters' syntax, see the [Functions reference](/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

A `function*` expression is very similar to, and has almost the same syntax as, a [`function*` declaration](/Web/JavaScript/Reference/Statements/function*). The main difference between a `function*` expression and a `function*` declaration is the _function name_, which can be omitted in `function*` expressions to create _anonymous_ functions. A `function*` expression can be used as an [IIFE](/Glossary/IIFE) (Immediately Invoked Function Expression) which runs as soon as it is defined, allowing you to create an ad-hoc [iterable iterator object](/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). See also the chapter about [functions](/Web/JavaScript/Reference/Functions) for more information.

## Examples

### Using function\* expression

The following example defines an unnamed generator function and assigns it to `x`. The function yields the square of its argument:

```js
const x = function* (y) {
  yield y * y;
};
```

## Specifications



## Browser compatibility



## See also

- [Functions](/Web/JavaScript/Guide/Functions) guide
- [Functions](/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("GeneratorFunction")}}
- [Iteration protocols](/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
