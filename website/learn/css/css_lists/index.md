---
title: CSS lists and counters
slug: Web/CSS/CSS_lists
page-type: css-module
spec-urls: https://drafts.csswg.org/css-lists/
---



The **CSS lists and counters** module enables styling and positioning of list item bullets and manipulating their values with a combination of strings, counters, and other features.

A list item's marker, whether a bullet symbol or ordinal counter, is its defining feature. List items are not limited to {{HTMLElement("li")}} elements nested within {{HTMLElement("ol")}} or {{HTMLElement("ul")}} elements. Rather, list items are any element with `display: list-item` set.

This module defines CSS features to set and reset a list's counters, set which [counter-styles](/Web/CSS/CSS_counter_styles) or symbols to use as its markers, and position those markers. It also provides developers with the ability to create customized markers.

## Reference

### Properties

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} shorthand

There is also a `marker-side` property, which is yet to be fully defined or implemented.

### Pseudo-elements

- {{cssxref("::marker")}}

### Functions

- {{cssxref("counter")}}
- {{cssxref("counters")}}

### Data types

- [`<counter>`](/Web/CSS/content#counter)
- [`<counter-name>`](/Web/CSS/counter#counter-name)
- [`<counter-style>`](/Web/CSS/counter#counter-style)

## Guides

- [Consistent list indentation](/Web/CSS/CSS_lists/Consistent_list_indentation)

  - : Explains how to achieve consistent list indentation across different browsers.

- [Using CSS Counters](/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Explains how to use the CSS counter properties to control list counters.

## Related concepts

- [CSS counter styles](/Web/CSS/CSS_counter_styles)

  - {{cssxref("@counter-style")}} at-rule
  - [`<counter-style-name>`](/Web/CSS/@counter-style#counter-style-name) data type
  - [`<symbol>`](/Web/CSS/@counter-style/symbols#values) data type
  - {{cssxref("symbols", "symbols()")}} function

- {{HTMLElement("ol")}} `start`, `reversed`, and `type` attributes
- {{HTMLElement("ul")}} `type` attribute
- {{HTMLElement("li")}} `type` and `value` attributes

## Specifications



## See also

- [CSS counter styles](/Web/CSS/CSS_counter_styles) module
- [CSS pseudo-elements](/Web/CSS/CSS_pseudo-elements) module
- [CSS generated content](/Web/CSS/CSS_generated_content) module
