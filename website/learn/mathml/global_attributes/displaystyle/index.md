---
title: displaystyle
slug: Web/MathML/Global_attributes/displaystyle
page-type: mathml-attribute
browser-compat: mathml.global_attributes.displaystyle
---



The **`displaystyle`** [global attribute](/Web/MathML/Global_attributes) is a boolean setting the [math-style](/Web/CSS/math-style) of a MathML element.

## Example

In this example, an [munder](/Web/MathML/Element/munder) element is used to attach a script "A" to a base "∑". By default, the summation symbol is rendered with the [font-size](/Web/CSS/font-size) inherited from its parent and the A as a scaled down subscript. With the explicit `displaystyle="true"` attribute, the summation symbol is instead drawn bigger and the "A" becomes an underscript.

```html
<math>
  <munder>
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
  <munder displaystyle="true">
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
</math>
```

## Syntax

```html-nolint
<math displaystyle="true"></math>
<math displaystyle="false"></math>
```

### Values

- `true`
  - : Sets the display style to `normal`.
- `false`
  - : Sets the display style to `compact`.

## Specifications



## Browser compatibility



## See also

- All [global attributes](/Web/MathML/Global_attributes).
- The [scriptlevel](/Web/MathML/Global_attributes/scriptlevel) global attribute.
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
