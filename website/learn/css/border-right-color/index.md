---
title: border-right-color
slug: Web/CSS/border-right-color
page-type: css-property
browser-compat: css.properties.border-right-color
---



The **`border-right-color`** [CSS](/Web/CSS) property sets the color of an element's right [border](/Web/CSS/border). It can also be set with the shorthand CSS properties {{cssxref("border-color")}} or {{cssxref("border-right")}}.

{{EmbedInteractiveExample("pages/css/border-right-color.html")}}

## Syntax

```css
/* <color> values */
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255 0 0);
border-right-color: hsl(100deg 50% 25% / 75%);
border-right-color: currentcolor;
border-right-color: transparent;

/* Global values */
border-right-color: inherit;
border-right-color: initial;
border-right-color: revert;
border-right-color: revert-layer;
border-right-color: unset;
```

The `border-right-color` property is specified as a single value.

### Values

- 
  - : The color of the right border.

## Formal definition



## Formal syntax



## Examples

### A simple div with a border

#### HTML

```html
<div class="mybox">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="redtext">red</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-right-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### Result

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## Specifications



## Browser compatibility



## See also

- The border-related CSS shorthand properties: {{cssxref("border")}}, {{cssxref("border-right")}}, and {{cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{cssxref("border-left-color")}}, {{cssxref("border-bottom-color")}}, and {{cssxref("border-top-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-right-style")}} and {{cssxref("border-right-width")}}.
- The default [`currentcolor`](/Web/CSS/color_value#currentcolor_keyword) color value.
