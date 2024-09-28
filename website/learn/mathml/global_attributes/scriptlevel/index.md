---
title: scriptlevel
slug: Web/MathML/Global_attributes/scriptlevel
page-type: mathml-attribute
browser-compat: mathml.global_attributes.scriptlevel
---



The **`scriptlevel`** [global attribute](/Web/MathML/Global_attributes) sets the [math-depth](/Web/CSS/math-depth) of a MathML element. It allows overriding rules from the [user agent stylesheet](/Web/CSS/Cascade#user-agent_stylesheets) that define automatic calculation of [font-size](/Web/CSS/font-size) within MathML formulas.

## Example

```html
<!-- math-depth defaults to 0 on the <math> root. -->
<math style="font-size: 64pt">
  <msubsup>
    <!-- math-depth and font-size remain unchanged on the base. -->
    <mtext>BASE</mtext>
    <!-- math-depth defaults to add(1) within the subscript, so it
         is incremented by 1 and the font-size is scaled down once. -->
    <mtext>SUBSCRIPT</mtext>
    <!-- math-depth defaults to add(1) within the superscript too, but
         the scriptlevel attribute tells to increment it by 2 instead,
         so the font-size is actually scaled down twice. -->
    <mtext scriptlevel="+2">SUPERSCRIPT</mtext>
  </msubsup>
</math>
```

## Syntax

```html-nolint
<math scriptlevel="-1"> <!-- decrease math-depth by 1 -->
<math scriptlevel="+2"> <!-- increase math-depth by 2 -->
<math scriptlevel="0"> <!-- reset math-depth to 0 -->
```

### Values

If `<U>` is an unsigned [integer](/Web/CSS/integer) (i.e. with prefix sign symbol removed) then the accepted values are:

- `<U>`
  - : Sets the `math-depth` to value `<U>`. This will set `font-size` of the element to the same value as the one of elements at the specified depth.
- `+<U>`
  - : Sets the `math-depth` to value `add(<U>)`. This will scale down `font-size` on the element `<U>` times.
- `-<U>`
  - : Sets the `math-depth` to value `add(-<U>)`. This will scale up `font-size` on the element `<U>` times.

## Specifications



## Browser compatibility



## See also

- All [global attributes](/Web/MathML/Global_attributes).
- The [displaystyle](/Web/MathML/Global_attributes/displaystyle) global attribute.
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
