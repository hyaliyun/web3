---
title: <munder>
slug: Web/MathML/Element/munder
page-type: mathml-element
browser-compat: mathml.elements.munder
---



The **`<munder>`** [MathML](/Web/MathML) element is used to attach an accent or a limit under an expression. It uses the following syntax: `<munder> base underscript </munder>`

## Attributes

This element's attributes include the [global MathML attributes](/Web/MathML/Global_attributes) as well as the following attribute:

- `accentunder`
  - : A [`<boolean>`](/Web/MathML/Values#mathml-specific_types) indicating whether the under script should be treated as an accent (i.e. drawn bigger and closer to the base expression).

## Examples

```html
<math display="block">
  <munder accentunder="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DF;<!--BOTTOM CURLY BRACKET--></mo>
  </munder>
</math>
```

{{ EmbedLiveSample('munder_example', 700, 200, "", "") }}

## Specifications



## Browser compatibility



## See also

- {{ MathMLElement("mover") }} (Overscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
