---
title: <mover>
slug: Web/MathML/Element/mover
page-type: mathml-element
browser-compat: mathml.elements.mover
---



The **`<mover>`** [MathML](/Web/MathML) element is used to attach an accent or a limit over an expression. Use the following syntax: `<mover> base overscript </mover>`

## Attributes

This element's attributes include the [global MathML attributes](/Web/MathML/Global_attributes) as well as the following attribute:

- `accent`
  - : A [`<boolean>`](/Web/MathML/Values#mathml-specific_types) indicating whether the over script should be treated as an accent (i.e. drawn bigger and closer to the base expression).

## Examples

```html
<math display="block">
  <mover accent="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DE;<!--TOP CURLY BRACKET--></mo>
  </mover>
</math>
```

{{ EmbedLiveSample('mover_example', 700, 200, "", "") }}

## Specifications



## Browser compatibility



## See also

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
