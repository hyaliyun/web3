---
title: Subtraction (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
page-type: javascript-operator
browser-compat: javascript.operators.subtraction
---

{{jsSidebar("Operators")}}

The **subtraction (`-`)** operator subtracts the two operands, producing their difference.

{{EmbedInteractiveExample("pages/js/expressions-subtraction.html")}}

## Syntax

```js-nolint
x - y
```

## Description

The `-` operator is overloaded for two types of operands: number and [BigInt](/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt subtraction if both operands become BigInts; otherwise, it performs number subtraction. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

## Examples

### Subtraction using numbers

```js
5 - 3; // 2
3 - 5; // -2
```

Other non-BigInt values are coerced to numbers:

```js
"foo" - 3; // NaN; "foo" is converted to the number NaN
5 - "3"; // 2; "3" is converted to the number 3
```

### Subtraction using BigInts

```js
2n - 1n; // 1n
```

You cannot mix BigInt and number operands in subtraction.

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

To do subtraction with a BigInt and a non-BigInt, convert either operand:

```js
2n - BigInt(1); // 1n
Number(2n) - 1; // 1
```

## Specifications



## Browser compatibility



## See also

- [Addition (`+`)](/Web/JavaScript/Reference/Operators/Addition)
- [Division (`/`)](/Web/JavaScript/Reference/Operators/Division)
- [Multiplication (`*`)](/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/Web/JavaScript/Reference/Operators/Unary_plus)
