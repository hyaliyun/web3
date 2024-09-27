---
title: layer()
slug: Web/CSS/@import/layer_function
page-type: css-function
browser-compat: css.at-rules.import.layer
---



The **`layer()`** [CSS](/Web/CSS) [function](/Web/CSS/CSS_Functions) is used along with the [`@import`](/Web/CSS/@import) [at-rule](/Web/CSS/At-rule) to put the imported resource in a separate named [cascade layer](/Web/CSS/@layer).

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

The `framework.themes.dark` is the layer into which the CSS file would be imported.

## Formal syntax

```plain
layer() = layer( <layer-name> )

<layer-name> =
  <ident> [ '.' <ident> ]*
```

## Specifications



## Browser compatibility



## See also

- {{CSSxRef("@import")}}
- [CSS cascade and inheritance](/Web/CSS/CSS_cascade) module
