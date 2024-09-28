---
title: ":root"
slug: Web/CSS/:root
page-type: css-pseudo-class
browser-compat: css.selectors.root
---



The **`:root`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) matches the root element of a tree representing the document. In HTML, `:root` represents the {{HTMLElement("html")}} element and is identical to the selector `html`, except that its [specificity](/Web/CSS/Specificity) is higher.

```css
/* Selects the root element of the document:
   <html> in the case of HTML */
:root {
  background: yellow;
}
```

## Syntax

```css
:root {
  /* ... */
}
```

## Examples

### Declaring global CSS variables

`:root` can be useful for declaring global [CSS variables](/Web/CSS/Using_CSS_custom_properties):

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Specifications



## Browser compatibility



## See also

- {{HTMLElement("html")}}
- {{domxref("Document.rootElement")}}
- {{domxref("Node.getRootNode()")}}
- {{domxref("Element.shadowRoot")}}
- {{domxref("ShadowRoot")}}
