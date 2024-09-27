---
title: Actual value
slug: Web/CSS/actual_value
page-type: guide
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#actual-value
---



The **actual value** of a [CSS](/Web/CSS) property is the [used value](/Web/CSS/used_value) of that property after any necessary approximations have been applied. For example, a {{glossary("user agent")}} that can only render borders with a whole-number pixel width may round the thickness of the border to the nearest integer.

## Calculating a property's actual value

The {{glossary("user agent")}} performs four steps to calculate a property's actual (final) value:

1. First, the [specified value](/Web/CSS/specified_value) is determined based on the result of [cascading](/Web/CSS/Cascade), [inheritance](/Web/CSS/Inheritance), or using the [initial value](/Web/CSS/initial_value).
2. Next, the [computed value](/Web/CSS/computed_value) is calculated according to the specification (for example, a `span` with `position: absolute` will have its computed `display` changed to `block`).
3. Then, layout is calculated, resulting in the [used value](/Web/CSS/used_value).
4. Finally, the used value is transformed according to the limitations of the local environment, resulting in the actual value.

## Specifications



## See also

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
    - [Computed values](/Web/CSS/computed_value)
    - [Used values](/Web/CSS/used_value)
    - [Resolved values](/Web/CSS/resolved_value)
  - [Value definition syntax](/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/Web/CSS/Shorthand_properties)
  - [Replaced elements](/Web/CSS/Replaced_element)
