---
title: border-top
slug: Web/CSS/border-top
page-type: css-shorthand-property
browser-compat: css.properties.border-top
---



The **`border-top`** [shorthand](/Web/CSS/Shorthand_properties) [CSS](/Web/CSS) property sets all the properties of an element's top [border](/Web/CSS/border).

{{EmbedInteractiveExample("pages/css/border-top.html")}}

As with all shorthand properties, `border-top` always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. Consider the following code:

```css
border-top-style: dotted;
border-top: thick green;
```

It is actually the same as this one:

```css
border-top-style: dotted;
border-top: none thick green;
```

The value of {{cssxref("border-top-style")}} given before `border-top` is ignored. Since the default value of {{cssxref("border-top-style")}} is `none`, not specifying the `border-style` part results in no border.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-top-color`](/Web/CSS/border-top-color)
- [`border-top-style`](/Web/CSS/border-top-style)
- [`border-top-width`](/Web/CSS/border-top-width)

## Syntax

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* Global values */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: revert-layer;
border-top: unset;
```

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

### Values

- `<br-width>`
  - : See {{cssxref("border-top-width")}}.
- `<br-style>`
  - : See {{cssxref("border-top-style")}}.
- 
  - : See {{cssxref("border-top-color")}}.

## Formal definition



## Formal syntax



## Examples

### Applying a top border

#### HTML

```html
<div>This box has a border on the top side.</div>
```

#### CSS

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Results

{{EmbedLiveSample('Applying_a_top_border')}}

## Specifications



## Browser compatibility



## See also

- [`border`](/Web/CSS/border)
- [`border-block`](/Web/CSS/border-block)
- [`outline`](/Web/CSS/outline)
