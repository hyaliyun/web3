---
title: <msub>
slug: Web/MathML/Element/msub
page-type: mathml-element
browser-compat: mathml.elements.msub
---



The **`<msub>`** [MathML](/Web/MathML) element is used to attach a subscript to an expression.

It uses the following syntax: `<msub> base subscript </msub>`.

## Attributes

This element's attributes include the [global MathML attributes](/Web/MathML/Global_attributes) as well as the following deprecated attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A {{cssxref("length-percentage")}} indicating the minimum amount to shift the baseline of the subscript down.

> [!NOTE]
> For the `subscriptshift` attribute, some browsers may also accept [legacy MathML lengths](/Web/MathML/Values#legacy_mathml_lengths).

## Examples

```html
<math display="block">
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
</math>
```

{{EmbedLiveSample('Examples')}}

## Specifications



## Browser compatibility



## See also

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
