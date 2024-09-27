---
title: Resolved value
slug: Web/CSS/resolved_value
page-type: guide
spec-urls: https://drafts.csswg.org/cssom/#resolved-values
---



The **resolved value** of a [CSS](/Web/CSS) property is the value after applying active stylesheets and resolving any basic computation those values may contain. The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} method returns a live {{domxref("CSSStyleDeclaration")}} object containing the resolved values of all CSS properties applied to a specified element.

Historically, `getComputedStyle()` returned the [computed value](/Web/CSS/computed_value) of an element or pseudo-element. As CSS evolved, so did the concept of "computed value", but the values returned by `getComputedStyle()` had to remain the same for backward compatibility with deployed scripts. These values are the "resolved values".

For most properties, the resolved value is the [computed value](/Web/CSS/computed_value), but for a few legacy properties (including {{cssxref("width")}} and {{cssxref("height")}}), it is the [used value](/Web/CSS/used_value). See the specification link below for some per-property details.

## Specifications



## See also

- {{domxref("window.getComputedStyle")}}
- {{domxref("CSSStyleDeclaration.getPropertyValue")}}
- Values
  - [Initial values](/Web/CSS/initial_value)
  - [Computed values](/Web/CSS/computed_value)
  - [Used values](/Web/CSS/used_value)
  - [Actual values](/Web/CSS/actual_value)
- [CSS syntax](/Web/CSS/Syntax)
- [At-rules](/Web/CSS/At-rule)
- [Specificity](/Web/CSS/Specificity)
- [Inheritance](/Web/CSS/Inheritance)
- [Value definition syntax](/Web/CSS/Value_definition_syntax)
- [Shorthand properties](/Web/CSS/Shorthand_properties)
