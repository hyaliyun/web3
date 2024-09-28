---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
page-type: javascript-operator
browser-compat: javascript.operators.addition
---



The **addition (`+`)** operator produces the sum of numeric operands or string concatenation.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## Syntax

```js-nolint
x + y
```

## Description

The `+` operator is overloaded for two distinct operations: numeric addition and string concatenation. When evaluating, it first [coerces both operands to primitives](/Web/JavaScript/Data_structures#primitive_coercion). Then, the two operands' types are tested:

- If one side is a string, the other operand is also [converted to a string](/Web/JavaScript/Reference/Global_Objects/String#string_coercion) and they are concatenated.
- If they are both [BigInts](/Web/JavaScript/Reference/Global_Objects/BigInt), BigInt addition is performed. If one side is a BigInt but the other is not, a {{jsxref("TypeError")}} is thrown.
- Otherwise, both sides are [converted to numbers](/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), and numeric addition is performed.

String concatenation is often thought to be equivalent with [template literals](/Web/JavaScript/Reference/Template_literals) or [`String.prototype.concat()`](/Web/JavaScript/Reference/Global_Objects/String/concat), but they are not. Addition coerces the expression to a _primitive_, which calls [`valueOf()`](/Web/JavaScript/Reference/Global_Objects/Object/valueOf) in priority; on the other hand, template literals and `concat()` coerce the expression to a _string_, which calls [`toString()`](/Web/JavaScript/Reference/Global_Objects/Object/toString) in priority. If the expression has a [`[Symbol.toPrimitive]()`](/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, string concatenation calls it with `"default"` as hint, while template literals use `"string"`. This is important for objects that have different string and primitive representations — such as [Temporal](https://github.com/tc39/proposal-temporal), whose `valueOf()` method throws.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

You are advised to not use `"" + x` to perform [string coercion](/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

## Examples

### Addition using numbers

```js
1 + 2; // 3
```

Other non-string, non-BigInt values are coerced to numbers:

```js
true + 1; // 2
false + false; // 0
```

### Addition using BigInts

```js
1n + 2n; // 3n
```

You cannot mix BigInt and number operands in addition.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
"1" + 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

To do addition with a BigInt and a non-BigInt, convert either operand:

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### Addition using strings

If one of the operands is a string, the other is converted to a string and they are concatenated:

```js
"foo" + "bar"; // "foobar"
5 + "foo"; // "5foo"
"foo" + false; // "foofalse"
"2" + 2; // "22"
```

## Specifications



## Browser compatibility



## See also

- [Subtraction (`-`)](/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/Web/JavaScript/Reference/Operators/Division)
- [Multiplication (`*`)](/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/Web/JavaScript/Reference/Operators/Unary_plus)
