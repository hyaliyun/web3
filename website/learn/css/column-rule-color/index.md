---
title: column-rule-color
slug: Web/CSS/column-rule-color
page-type: css-property
browser-compat: css.properties.column-rule-color
---



The **`column-rule-color`** [CSS](/Web/CSS) property sets the color of the line drawn between columns in a multi-column layout.

{{EmbedInteractiveExample("pages/css/column-rule-color.html")}}

## Syntax

```css
/* <color> values */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Global values */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

The `column-rule-color` property is specified as a single `<color>` value.

### Values

- 
  - : The color of the rule that separates columns.

## Formal definition



## Formal syntax



## Examples

### Setting a blue column rule

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### Result

{{EmbedLiveSample("Setting_a_blue_column_rule")}}

## Specifications



## Browser compatibility



## See also

- The  data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, and {{cssxref("caret-color")}}
