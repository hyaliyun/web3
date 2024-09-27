---
title: inherits
slug: Web/CSS/@property/inherits
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.property.inherits
---



The **`inherits`** [CSS](/Web/CSS) descriptor is required when using the {{cssxref("@property")}} [at-rule](/Web/CSS/At-rule) and controls whether the custom property registration specified by `@property` inherits by default.

## Syntax

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}

@property --property-name {
  syntax: "<color>";
  inherits: true;
  initial-value: #c0ffee;
}
```

## Values

- `true`
  - : The property inherits by default.
- `false`
  - : The property does not inherit by default.

## Formal definition



## Formal syntax



## Examples

Add type checking to `--my-color` [custom property](/Web/CSS/--*), as a color, a default value, and not allow it to inherit its value:

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
