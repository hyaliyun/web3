---
title: "::-moz-list-number"
slug: Web/CSS/::-moz-list-number
page-type: css-pseudo-element
status:
  - experimental
  - non-standard
browser-compat: css.selectors.-moz-list-number
---



The **`::-moz-list-number`** [CSS](/Web/CSS) [pseudo-element](/Web/CSS/Pseudo-elements) is a [Mozilla extension](/Web/CSS/Mozilla_Extensions) that represents the marker (typically a number) of a list item ({{HTMLElement("li")}}) in an ordered list ({{HTMLElement("ol")}}).

## Syntax

```css
li::-moz-list-number {
  /* ... */
}
```

## Examples

### HTML

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### Result



## Specifications

Not part of any standard.

## Browser compatibility



## See also

- {{cssxref("::-moz-list-bullet")}}
- {{cssxref("::marker")}}
