---
title: Division assignment (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
page-type: javascript-operator
browser-compat: javascript.operators.division_assignment
---

{{jsSidebar("Operators")}}

The **division assignment (`/=`)** operator performs [division](/Web/JavaScript/Reference/Operators/Division) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

## Syntax

```js-nolint
x /= y
```

## Description

`x /= y` is equivalent to `x = x / y`, except that the expression `x` is only evaluated once.

## Examples

### Division assignment using numbers

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

Other non-BigInt values are coerced to numbers:

```js
let bar = 5;
bar /= "2"; // 2.5
bar /= "foo"; // NaN
```

### Division assignment using BigInts

```js
let foo = 3n;
foo /= 2n; // 1n
foo /= 2n; // 0n

foo /= 0n; // RangeError: BigInt division by zero
foo /= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications



## Browser compatibility



## See also

- [Assignment operators in the JS guide](/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Division (`/`)](/Web/JavaScript/Reference/Operators/Division)
