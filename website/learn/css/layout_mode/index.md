---
title: Layout mode
slug: Web/CSS/Layout_mode
page-type: guide
---



A [CSS](/Web/CSS) **layout mode**, sometimes called _layout_, is an algorithm that determines the position and size of boxes based on the way they interact with their sibling and ancestor boxes. There are several of them:

- _[Normal flow](/Web/CSS/CSS_flow_layout)_ — all elements are part of normal flow until you do something to take them out of it. Normal flow includes _block layout_, designed for laying out boxes such as paragraphs and _inline layout_, which lays out inline items such as text.
- [_Table layout_](/Web/CSS/CSS_table), designed for laying out tables.
- _Float layout_, designed to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
- [_Positioned layout_](/Web/CSS/CSS_positioned_layout), designed for positioning elements without much interaction with other elements.
- [_Multi-column layout_](/Web/CSS/CSS_multicol_layout), designed for laying content out in columns as in a newspaper.
- [_Flexible box layout_](/Web/CSS/CSS_flexible_box_layout), designed for laying out complex pages that can be resized smoothly.
- [_Grid layout_](/Web/CSS/CSS_grid_layout), designed for laying out elements relative to a fixed grid.

> [!NOTE]
> Not all [CSS properties](/Web/CSS/Reference) apply to all _layout modes_. Most of them apply to one or two of them and have no effect if they are set on an element participating in another layout mode.

## See also

- CSS key concepts:
  - [CSS syntax](/Web/CSS/Syntax)
  - [At-rules](/Web/CSS/At-rule)
  - [Comments](/Web/CSS/Comments)
  - [Specificity](/Web/CSS/Specificity)
  - [Inheritance](/Web/CSS/Inheritance)
  - [Box model](/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visual formatting models](/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/Web/CSS/initial_value)
    - [Computed values](/Web/CSS/computed_value)
    - [Used values](/Web/CSS/used_value)
    - [Actual values](/Web/CSS/actual_value)
  - [Value definition syntax](/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/Web/CSS/Shorthand_properties)
  - [Replaced elements](/Web/CSS/Replaced_element)
