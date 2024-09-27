---
title: ":-moz-last-node"
slug: Web/CSS/:-moz-last-node
page-type: css-pseudo-class
status:
  - experimental
  - non-standard
browser-compat: css.selectors.-moz-last-node
---



The **`:-moz-last-node`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) is a [Mozilla extension](/Web/CSS/Mozilla_Extensions) that represents any element that is the last child node of some other element. It differs from  because it does not match a last-child element with (non-whitespace) text after it.

> [!NOTE]
> Any whitespace at the end of an element is ignored for the determination of `:-moz-last-node`.

## Syntax

```css
:-moz-last-node {
  /* ... */
}
```

## Examples

### CSS

```css
span:-moz-last-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>This does not match.</span>
  <span>This matches!</span>
</p>

<p>
  <span>This doesn't match because it's followed by text.</span>
  Blahblah.
</p>
```

### Result



## Specifications

Not part of any standard.

## Browser compatibility



## See also

- 
- 
