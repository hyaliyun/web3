---
title: WebAssembly numeric instructions
slug: WebAssembly/Reference/Numeric
page-type: landing-page
---



WebAssembly numeric instructions.

## Constants

- [Const](/WebAssembly/Reference/Numeric/Const)
  - : Declare a constant numbers.

## Comparison

- [Equal](/WebAssembly/Reference/Numeric/Equal)
  - : Check if two numbers are equal.
- [Not equal](/WebAssembly/Reference/Numeric/Not_equal)
  - : Check if two numbers are not equal.
- [Greater than](/WebAssembly/Reference/Numeric/Greater_than)
  - : Check if a number is greater than another number.
- [Less than](/WebAssembly/Reference/Numeric/Less_than)
  - : Check if a number is less than another number.
- [Greater or equal](/WebAssembly/Reference/Numeric/Greater_or_equal)
  - : Check if a number is greater than or equal to another number.
- [Less or equal](/WebAssembly/Reference/Numeric/Less_or_equal)
  - : Check if a number is less than or equal to another number.

## Arithmetic

- [Addition](/WebAssembly/Reference/Numeric/Addition)
  - : Add up two numbers.
- [Subtraction](/WebAssembly/Reference/Numeric/Subtraction)
  - : Subtract one number from another number.
- [Multiplication](/WebAssembly/Reference/Numeric/Multiplication)
  - : Multiply one number by another number.
- [Division](/WebAssembly/Reference/Numeric/Division)
  - : Divide one number by another number.
- [Remainder](/WebAssembly/Reference/Numeric/Remainder)
  - : Calculate the remainder left over when one integer is divided by another integer.

## Conversion

- [Extend](/WebAssembly/Reference/Numeric/Extend)
  - : Convert (extend) `i32` to `i64`.
- [Wrap](/WebAssembly/Reference/Numeric/Wrap)
  - : Convert (wrap) `i64` to `i32`.
- [Promote](/WebAssembly/Reference/Numeric/Promote)
  - : Convert (promote) `f32` to `f64`.
- [Demote](/WebAssembly/Reference/Numeric/Demote)
  - : Convert (demote) `f64` to `f32`.
- [Convert](/WebAssembly/Reference/Numeric/Convert)
  - : Convert integers to floating points.
- [Truncate (float to int)](/WebAssembly/Reference/Numeric/Truncate_float_to_int)
  - : Convert (truncate fractional part) floating points to integers.
- [Reinterpret](/WebAssembly/Reference/Numeric/Reinterpret)
  - : Reinterpret the bytes of integers as floating points and vice versa.

## Floating point specific instructions

- [Min](/WebAssembly/Reference/Numeric/Min)
  - : Get the lower of two numbers.
- [Max](/WebAssembly/Reference/Numeric/Max)
  - : Get the higher of two numbers.
- [Nearest](/WebAssembly/Reference/Numeric/Nearest)
  - : Round a number to the nearest integer.
- [Ceil](/WebAssembly/Reference/Numeric/Ceil)
  - : Round up a number.
- [Floor](/WebAssembly/Reference/Numeric/Floor)
  - : Round down a number.
- [Truncate (float to float)](/WebAssembly/Reference/Numeric/Truncate_float_to_float)
  - : Discard the fractional part of a number.
- [Absolute](/WebAssembly/Reference/Numeric/Absolute)
  - : Get the absolute value of a number.
- [Negate](/WebAssembly/Reference/Numeric/Negate)
  - : Negate a number.
- [Square root](/WebAssembly/Reference/Numeric/Square_root)
  - : Get the square root of a number.
- [Copy sign](/WebAssembly/Reference/Numeric/Copy_sign)
  - : Copy just the sign bit from one number to another.

## Bitwise

- [AND](/WebAssembly/Reference/Numeric/AND)
  - : Used for performing a bitwise AND.
- [OR](/WebAssembly/Reference/Numeric/OR)
  - : Used for performing a bitwise OR.
- [XOR](/WebAssembly/Reference/Numeric/XOR)
  - : Used for performing a bitwise XOR.
- [Left shift](/WebAssembly/Reference/Numeric/Left_shift)
  - : Used for performing a bitwise left-shift.
- [Right shift](/WebAssembly/Reference/Numeric/Right_shift)
  - : Used for performing a bitwise right-shift.
- [Left rotate](/WebAssembly/Reference/Numeric/Left_rotate)
  - : Used for performing a bitwise left-rotate.
- [Right rotate](/WebAssembly/Reference/Numeric/Right_rotate)
  - : Used for performing a bitwise right-rotate.
- [Count leading zeros](/WebAssembly/Reference/Numeric/Count_leading_zeros)
  - : Count the amount of leading zeros in a numbers binary representation.
- [Count trailing zeros](/WebAssembly/Reference/Numeric/Count_trailing_zeros)
  - : Count the amount of trailing zeros in a numbers binary representation.
- [Population count](/WebAssembly/Reference/Numeric/Population_count)
  - : Count the total amount of 1s in a numbers binary representation.
