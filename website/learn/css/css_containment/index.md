---
title: CSS containment
slug: Web/CSS/CSS_containment
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-contain-2/
  - https://drafts.csswg.org/css-contain-3/
---



The **CSS containment** module defines containment and container queries.

Containment enables the isolation of page subtrees from the rest of the DOM. The browser can then improve performance by optimizing the rendering of these independent parts.

Container queries are similar to dimension [media queries](/Web/CSS/CSS_media_queries), except that the queries are based on the dimensions of a specific container element defined as a _containment context_, rather than on the dimensions of the viewport. Container queries enable querying a container's size, properties, and property values to conditionally apply CSS styles. When applying these conditional styles, you can use container query length units, which specify lengths relative to the dimensions of the query container. Additional properties are defined to enable establishing a specific element as a query container and giving it a specific name.

## Reference

### Properties

- {{cssxref("contain")}}
- {{cssxref("container")}} shorthand
  - {{cssxref("container-name")}}
  - {{cssxref("container-type")}}
- {{cssxref("content-visibility")}}

### At-rules and descriptors

- {{cssxref("@container")}}
- [`@container` descriptors](/Web/CSS/@container#descriptors):
  - `aspect-ratio`
  - `block-size`
  - `height`
  - `inline-size`
  - `orientation`
  - `width`

### Functions

- [`style()`](/Web/CSS/@container#container_style_queries)

### Data types

- [`<container-name>`](/Web/CSS/@container#values)
- [`<style-feature>`](/Web/CSS/@container#container_style_queries)
- [Container relative `<length>` units](/Web/CSS/length#container_query_length_units)

### Events

- {{domxref("Element.contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}

### Interfaces

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
  - {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} property
- {{domxref("CSSContainerRule")}}
  - {{domxref("CSSContainerRule.containerName")}}
  - {{domxref("CSSContainerRule.containerQuery")}}

## Guides

- [CSS container queries](/Web/CSS/CSS_containment/Container_queries)

  - : A guide to using container queries with `@container`, including naming containment contexts.

- [Using CSS containment](/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` for a better user experience.

- [Using container size and style queries](/Web/CSS/CSS_containment/Container_size_and_style_queries)

  - : A guide to writing container size and style queries with `@container`, including style queries for custom properties, query syntax and names, and nesting container queries.

## Related concepts

- [Layout and the containing block](/Web/CSS/Containing_block)
- [Block formatting context](/Web/CSS/CSS_display/Block_formatting_context)

- [CSS media queries](/Web/CSS/CSS_media_queries) module

  - {{cssxref("@media")}} at-rule
  - [CSS logical operators](/Web/CSS/@media#logical_operators) (`not`, `or`, and `and`)

- [CSS transitions](/Web/CSS/CSS_transitions) module

  - {{cssxref("@starting-style")}} at-rule
  - {{cssxref("transition-behavior")}} property

- CSS box sizing module

  - {{CSSxRef("aspect-ratio")}} property
  - {{cssxref("contain-intrinsic-size")}} shorthand property
  - {{CSSxRef("contain-intrinsic-inline-size")}} property
  - {{CSSxRef("contain-intrinsic-size")}} property
  - {{CSSxRef("contain-intrinsic-width")}} property
  - {{CSSxRef("contain-intrinsic-height")}} property

- [CSS counter styles](/Web/CSS/CSS_counter_styles) module

  - [Using CSS counters](/Web/CSS/CSS_counter_styles/Using_CSS_counters) guide

- [CSS nesting](/Web/CSS/CSS_nesting) module
  - [CSS nesting at-rules](/Web/CSS/CSS_nesting/Nesting_at-rules) guide

## Specifications



## See also

- [Using feature queries](/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Using CSS media queries](/Web/CSS/CSS_media_queries/Using_media_queries)
- [Understanding aspect ratios](/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} at-rule
