---
title: "SyntaxError: string literal contains an unescaped line break"
slug: Web/JavaScript/Reference/Errors/String_literal_EOL
page-type: javascript-error
---



The JavaScript error "string literal contains an unescaped line break" occurs when there is an unterminated
[string literal](/Web/JavaScript/Guide/Grammar_and_types#string_literals) somewhere. String literals must be enclosed by single
(`'`) or double (`"`) quotes and cannot split across multiple lines.

## Message

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: '' string literal contains an unescaped line break (Firefox)
SyntaxError: Unexpected EOF (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There is an unterminated
[string literal](/Web/JavaScript/Guide/Grammar_and_types#string_literals) somewhere. String literals must be
enclosed by single (`'`) or double (`"`) quotes. JavaScript makes
no distinction between single-quoted strings and double-quoted strings.
[Escape sequences](/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) work
in strings created with either single or double quotes.
To fix this error, check if:

- you have opening and closing quotes (single or double) for your string literal,
- you have escaped your string literal correctly,
- your string literal isn't split across multiple lines.

## Examples

### Multiple lines

You can't split a string across multiple lines like this in JavaScript:

```js-nolint example-bad
const longString = "This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Instead, use the [+ operator](/Web/JavaScript/Reference/Operators/Addition),
a backslash, or [template literals](/Web/JavaScript/Reference/Template_literals).
The `+` operator variant looks like this:

```js example-good
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Or you can use the backslash character ("\\") at the end of each line to indicate that
the string will continue on the next line. Make sure there is no space or any other
character after the backslash (except for a line break), or as an indent; otherwise it
will not work. That form looks like this:

```js example-good
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Another possibility is to use [template literals](/Web/JavaScript/Reference/Template_literals).

```js example-good
const longString = `This is a very long string which needs 
to wrap across multiple lines because 
otherwise my code is unreadable.`;
```

## See also

- [string literal](/Web/JavaScript/Guide/Grammar_and_types#string_literals)
- [Template literals](/Web/JavaScript/Reference/Template_literals)
