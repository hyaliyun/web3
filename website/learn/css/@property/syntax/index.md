---
title: syntax
slug: Web/CSS/@property/syntax
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.property.syntax
---



The **`syntax`** [CSS](/Web/CSS) descriptor is required when using the {{cssxref("@property")}} [at-rule](/Web/CSS/At-rule) and describes the allowable syntax for the property.

## Syntax

The following are all valid syntax strings:

```css
syntax: "<color>"; /* accepts a color */

syntax: "<length> | <percentage>"; /* accepts lengths or percentages but not calc expressions with a combination of the two */

syntax: "small | medium | large"; /* accepts one of these values set as custom idents. */

syntax: "*"; /* any valid token */
```

## Values

A string with a supported syntax as defined by the specification. Supported syntaxes are a subset of [CSS types](/Web/CSS/CSS_Types). These may be used alone, or a number of types can be used in combination.

- `"<length>"`
  - : Any valid {{cssxref("&lt;length&gt;")}} values.
- `"<number>"`
  - : Any valid {{cssxref("&lt;number&gt;")}} values.
- `"<percentage>"`
  - : Any valid {{cssxref("&lt;percentage&gt;")}} values.
- `"<length-percentage>"`
  - : Any valid {{cssxref("&lt;length-percentage&gt;")}} values.
- `"<color>"`
  - : Any valid  values.
- `"<image>"`
  - : Any valid {{cssxref("&lt;image&gt;")}} values.
- `"<url>"`
  - : Any valid {{cssxref("url_value", "&lt;url&gt;")}} values.
- `"<integer>"`
  - : Any valid {{cssxref("&lt;integer&gt;")}} values.
- `"<angle>"`
  - : Any valid {{cssxref("&lt;angle&gt;")}} values.
- `"<time>"`
  - : Any valid {{cssxref("&lt;time&gt;")}} values.
- `"<resolution>"`
  - : Any valid {{cssxref("&lt;resolution&gt;")}} values.
- `"<transform-function>"`
  - : Any valid {{cssxref("&lt;transform-function&gt;")}} values.
- `"<custom-ident>"`
  - : Any valid {{cssxref("&lt;custom-ident&gt;")}} values.
- `"<transform-list>"`
  - : A list of valid {{cssxref("&lt;transform-function&gt;")}} values.

## Formal definition



## Formal syntax



## Examples

Add type checking to `--my-color` [custom property](/Web/CSS/--*), using the `<color>` syntax:

Using [CSS](/Web/CSS) {{cssxref('@property')}} [at-rule](/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Using [JavaScript](/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## Specifications



## Browser compatibility



## See also

- [CSS Properties and Values API](/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/Web/API/Houdini_APIs)
