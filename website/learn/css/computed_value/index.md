---
title: Computed value
slug: Web/CSS/computed_value
page-type: guide
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#computed-value
---



The **computed value** of a [CSS](/Web/CSS) property is the value that is transferred from parent to child during inheritance. It is calculated from the [specified value](/Web/CSS/specified_value) by:

1. Handling the special values {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, and {{cssxref("unset")}}.
2. Doing the computation needed to reach the value described in the "Computed value" line in the property's definition table.

The computation needed to reach a property's computed value typically involves converting relative values (such as those in `em` units or percentages) to absolute values. For example, if an element has specified values `font-size: 16px` and `padding-top: 2em`, then the computed value of `padding-top` is `32px` (double the font size).

However, for some properties (those where percentages are relative to something that may require layout to determine, such as `width`, `margin-right`, `text-indent`, and `top`), percentage-specified values turn into percentage-computed values. Additionally, unitless numbers specified on the `line-height` property become the computed value, as specified. The relative values that remain in the computed value become absolute when the [used value](/Web/CSS/used_value) is determined.

> [!NOTE]
> The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API returns the [resolved value](/Web/CSS/resolved_value), which may either be the computed value or the [used value](/Web/CSS/used_value), depending on the property.

## Specifications



## See also

- {{domxref("window.getComputedStyle")}}
- CSS key concepts:
  - [CSS syntax](/Web/CSS/Syntax)
  - [At-rules](/Web/CSS/At-rule)
  - [Comments](/Web/CSS/Comments)
  - [Specificity](/Web/CSS/Specificity)
  - [Inheritance](/Web/CSS/Inheritance)
  - [Box model](/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/Web/CSS/Layout_mode)
  - [Visual formatting models](/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/Web/CSS/initial_value)
    - [Used values](/Web/CSS/used_value)
    - [Resolved values](/Web/CSS/resolved_value)
    - [Actual values](/Web/CSS/actual_value)
  - [Value definition syntax](/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/Web/CSS/Shorthand_properties)
  - [Replaced elements](/Web/CSS/Replaced_element)
