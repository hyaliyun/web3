---
title: ":-moz-loading"
slug: Web/CSS/:-moz-loading
page-type: css-pseudo-class
status:
  - non-standard
---



The **`:-moz-loading`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) is a [Mozilla extension](/Web/CSS/Mozilla_Extensions) that matches elements that can't be displayed because they have not started loading, such as images that haven't started to arrive yet. Note that images that are _in the process_ of loading _are not_ matched by this pseudo-class.

> [!NOTE]
> This selector is mainly intended to be used by theme developers.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Examples

### Setting a background for images that are loading

```css
:-moz-loading {
  background-color: #aaa;
  background-image: url(loading-animation.gif) center no-repeat;
}
```

## Specifications

Not part of any standard.

## See also

