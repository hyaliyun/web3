---
title: ":-moz-broken"
slug: Web/CSS/:-moz-broken
page-type: css-pseudo-class
status:
  - deprecated
  - non-standard
browser-compat: css.selectors.-moz-broken
---



The **`:-moz-broken`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) is a [Mozilla extension](/Web/CSS/Mozilla_Extensions) that matches elements representing broken image links.

> [!NOTE]
> This selector is mainly intended to be used by theme developers.

## Syntax

```css
:-moz-broken {
  /* ... */
}
```

## Examples

### HTML

```html
<img src="broken.jpg" alt="This image is broken. :-(" />
```

### CSS

```css
:-moz-broken {
  background: bisque;
  padding: 8px;
}
```

### Result



## Specifications

Not part of any standard.

## Browser compatibility



## See also

- [Firefox bug 11011](https://bugzil.la/11011)
