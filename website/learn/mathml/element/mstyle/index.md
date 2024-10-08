---
title: <mstyle>
slug: Web/MathML/Element/mstyle
page-type: mathml-element
browser-compat: mathml.elements.mstyle
---



The **`<mstyle>`** [MathML](/Web/MathML) element is used to change the style of its children.

> [!NOTE]
> Historically, this element accepted almost all the MathML attributes and it was used to override the default attribute values of its descendants. It was later restricted to only a few relevant styling attributes that were used in existing web pages. Nowadays, these styling attributes are [common to all MathML elements](/Web/MathML/Global_attributes) and so `<mstyle>` is really just equivalent to an [`<mrow>`](/Web/MathML/Element/mrow) element. However, `<mstyle>` may still be relevant for compatibility with MathML implementations outside browsers.

## Attributes

This element's attributes include the [global MathML attributes](/Web/MathML/Global_attributes) as well as the following deprecated attributes:

- `background` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Use {{cssxref("background-color")}} instead.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Use {{cssxref("color")}} instead.
- `fontsize` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Use {{cssxref("font-size")}} instead.
- `fontstyle` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Use {{cssxref("font-style")}} instead.
- `fontweight` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Use {{cssxref("font-weight")}} instead.

## Examples

### Attributes mapped to CSS

The following example uses [global attributes](/Web/MathML/Global_attributes) `displaystyle` and `mathcolor` to respectively override the [`math-style`](/Web/CSS/math-style) and [`color`](/Web/CSS/color) of the `<munder>` and `<munderover>` children:

```html
<math display="block">
  <mstyle displaystyle="false" mathcolor="teal">
    <munder>
      <mo>∑</mo>
      <mi>I</mi>
    </munder>
    <munderover>
      <mo>∏</mo>
      <mrow>
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mi>N</mi>
    </munderover>
  </mstyle>
</math>
```

{{EmbedLiveSample('Attributes mapped to CSS')}}

### Legacy script attributes

The following example shows a formula with [`font-size`](/Web/CSS/font-size) set to `128pt`. It contains numbers that are placed in nested superscripts as well as an `<mstyle>` element with legacy attributes `scriptsizemultiplier` and `scriptminsize`. The `font-size` is multiplied by `0.5` when entering each superscript as long as that does not make it smaller than `16pt`.

```html
<math display="block" style="font-size: 128pt">
  <mstyle scriptsizemultiplier="0.5" scriptminsize="16pt">
    <msup>
      <mn>2</mn>
      <msup>
        <mn>2</mn>
        <msup>
          <mn>2</mn>
          <msup>
            <mn>2</mn>
            <msup>
              <mn>2</mn>
              <msup>
                <mn>2</mn>
                <mn>2</mn>
              </msup>
            </msup>
          </msup>
        </msup>
      </msup>
    </msup>
  </mstyle>
</math>
```

{{EmbedLiveSample('Legacy script attributes', 700, 400)}}

## Specifications



## Browser compatibility


