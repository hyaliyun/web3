---
title: border-inline-start-color
slug: Web/CSS/border-inline-start-color
page-type: css-property
browser-compat: css.properties.border-inline-start-color
---



The **`border-inline-start-color`** [CSS](/Web/CSS) property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, or {{cssxref("border-left-color")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-start-color.html")}}

## Syntax

```css
border-inline-start-color: red;
border-inline-start-color: #ee4141;

/* Global values */
border-inline-start-color: inherit;
border-inline-start-color: initial;
border-inline-start-color: revert;
border-inline-start-color: revert-layer;
border-inline-start-color: unset;
```

Related properties are {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}, and {{cssxref("border-inline-end-color")}}, which define the other border colors of the element.

### Values

- 
  - : The color of the border.

## Formal definition



## Formal syntax



## Examples

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-start-color: red;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Specifications



## Browser compatibility



## See also

- [CSS Logical Properties and Values](/Web/CSS/CSS_logical_properties_and_values)
- This property maps to one of the physical border properties: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, and {{cssxref("border-left-color")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
