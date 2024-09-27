---
title: "SyntaxError: invalid named capture reference in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_named_capture_reference
page-type: javascript-error
---



The JavaScript exception "invalid named capture reference in regular expression" occurs when a regular expression pattern contains a [named backreference](/Web/JavaScript/Reference/Regular_expressions/Named_backreference) that does not refer to a [named capture group](/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) before it. The similar error message "invalid named reference in regular expression" is thrown when the sequence `\k` is encountered but is not followed by `<`.

## Message

```plain
SyntaxError: Invalid regular expression: /\k<x>/u: Invalid named capture referenced (V8-based)
SyntaxError: invalid named capture reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid \k<> named backreference (Safari)

SyntaxError: Invalid regular expression: /\k/u: Invalid named reference (V8-based)
SyntaxError: invalid named reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

You are using the escape sequence `\k` which is parsed as a [named backreference](/Web/JavaScript/Reference/Regular_expressions/Named_backreference), but the `\k` is either syntactically invalid or does not refer to a named capture group in the pattern.

`\k` only starts a named backreference when the pattern contains a [named capturing group](/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) or when the pattern is [Unicode-aware](/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode); otherwise, it is an [identity escape](/Web/JavaScript/Reference/Regular_expressions#escape_sequences) for the character `k`.

## Examples

### Invalid cases

```js example-bad
/\k<x>/u; // Does not refer to a named capture group
/(?<x>.+)\k<y>/u; // Does not refer to an existing named capture group
/(?<x>.+)\k{x}/u; // Invalid syntax
```

### Valid cases

```js example-good
/(?<x>.+)\k<x>/u; // Refers to an existing named capture group
```

## See also

- [Regular expressions](/Web/JavaScript/Reference/Regular_expressions)
- [Named backreference: `\k<name>`](/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Named capturing group: `(?<name>...)`](/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
