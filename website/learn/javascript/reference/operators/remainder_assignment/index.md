---
title: Remainder assignment (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
page-type: javascript-operator
browser-compat: javascript.operators.remainder_assignment
---



The **remainder assignment (`%=`)** operator performs [remainder](/Web/JavaScript/Reference/Operators/Remainder) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-remainder-assignment.html")}}

## Syntax

```js-nolint
x %= y
```

## Description

`x %= y` is equivalent to `x = x % y`, except that the expression `x` is only evaluated once.

## Examples

### Using remainder assignment

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Specifications



## Browser compatibility



## See also

- [Assignment operators in the JS guide](/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Remainder (`%`)](/Web/JavaScript/Reference/Operators/Remainder)
