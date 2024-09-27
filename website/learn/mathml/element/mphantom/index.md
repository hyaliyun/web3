---
title: <mphantom>
slug: Web/MathML/Element/mphantom
page-type: mathml-element
browser-compat: mathml.elements.mphantom
---



The **`<mphantom>`** [MathML](/Web/MathML) element is rendered invisibly, but dimensions (such as height, width, and baseline position) are still kept.

## Attributes

This element accepts the [global MathML attributes](/Web/MathML/Global_attributes).

## Examples

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>+</mo>
    <mphantom>
      <mi>y</mi>
      <mo>+</mo>
    </mphantom>
    <mi>z</mi>
  </mrow>
</math>
```

{{EmbedLiveSample('Examples')}}

## Specifications



## Browser compatibility



## See also

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}
