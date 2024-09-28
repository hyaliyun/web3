---
title: counter()
slug: Web/CSS/counter
page-type: css-function
browser-compat: css.types.counter
---



The **`counter()`** [CSS](/Web/CSS) [function](/Web/CSS/CSS_Functions) returns a string representing the current value of the named counter, if there is one.

The `counter()` function is generally used within [pseudo-element](/Web/CSS/Pseudo-elements) through the {{cssxref("content")}} property but, theoretically, it can be used wherever a [`<string>`](/Web/CSS/string) value is supported.

{{EmbedInteractiveExample("pages/tabbed/function-counter.html", "tabbed-shorter")}}

## Syntax

```css
/* Simple usage */
counter(countername);

/* changing the counter display */
counter(countername, upper-roman)
```

[Counters](/Web/CSS/CSS_counter_styles/Using_CSS_counters) have no visible effect by themselves.
The `counter()` and {{cssxref("counters", "counters()")}} functions are what make counters useful by returning developer-defined strings (or images).

### Values

The `counter()` function accepts up to two parameters. The first parameter is the `<counter-name>`. The optional second parameter is the `<counter-style>`.

- `<counter-name>`
  - : A {{cssxref("&lt;custom-ident&gt;")}} identifying the counter, which is the same case-sensitive name used with the {{cssxref("counter-reset")}} and {{cssxref("counter-increment")}} property values. The counter name cannot start with two dashes and can't be `none`, `unset`, `initial`, or `inherit`.
- `<counter-style>`
  - : A {{cssxref("&lt;list-style-type&gt;")}} name, {{cssxref("&lt;@counter-style&gt;")}} name or {{cssxref("symbols", "symbols()")}} function, where a counter style name is a `numeric`, `alphabetic`, or `symbolic` simple predefined counter style, a complex longhand east Asian or Ethiopic predefined counter style, or other [predefined counter style](/Web/CSS/CSS_counter_styles). If omitted, the counter-style defaults to `decimal`.

> [!NOTE]
> To join the counter values when nesting counters, use the {{cssxref("counters", "counters()")}} function, which provides an additional {{cssxref("string")}} parameter.

### Formal syntax



## Examples

### lower-roman compared to lower-alpha

In this example, we display a counter using `lower-roman` and `lower-alpha` list styles.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content:
    "[" counter(count, lower-roman) "] == ["
    counter(count, lower-alpha) "]";
}
```

#### Result

{{EmbedLiveSample("lower-roman compared to lower-alpha", "100%", 150)}}

### Displaying a counter using three styles

In this example, we use the `counter()` function three times.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

We include the `counter()` function with three different counter styles, including the default decimal value. We've added padding to the list to provide space for the long `::marker` string.

```css-nolint
ol {
  counter-reset: listCounter;
  padding-left: 5em;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    "Item #" counter(listCounter) " is: ";
}
li::after {
  content:
    "[" counter(listCounter, decimal-leading-zero) "] == ["
    counter(listCounter, upper-roman) "]";
}
```

#### Result

{{EmbedLiveSample("Displaying a counter using three styles", "100%", 150)}}

## Specifications



## Browser compatibility



## See also

- [Using CSS Counters](/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counters()`](/Web/CSS/counters) function
- [CSS lists and counters](/Web/CSS/CSS_lists) module
- [CSS counter styles](/Web/CSS/CSS_counter_styles) module
- [CSS generated content](/Web/CSS/CSS_generated_content) module
