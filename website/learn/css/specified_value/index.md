---
title: Specified value
slug: Web/CSS/specified_value
page-type: guide
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#specified-value
---



The **specified value** of a [CSS](/Web/CSS) property is the value it receives from the document's style sheet. The specified value for a given property is determined according to the following rules:

1. If the document's style sheet explicitly specifies a value for the property, the given value will be used.
2. If the document's style sheet doesn't specify a value but it is an inherited property, the value will be taken from the parent element.
3. If none of the above apply, the element's [initial value](/Web/CSS/initial_value) will be used.

## Examples

### HTML

```html
<p>My specified color is given explicitly in the CSS.</p>

<div>
  The specified values of all my properties default to their initial values,
  because none of them are given in the CSS.
</div>

<div class="fun">
  <p>
    The specified value of my font family is not given explicitly in the CSS, so
    it is inherited from my parent. However, the border is not an inheriting
    property.
  </p>
</div>
```

### CSS

```css
.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
```

### Result

{{EmbedLiveSample("Examples", 500, 220)}}

## Specifications



## See also

- [Specificity](/Web/CSS/Specificity)
- [Inheritance](/Web/CSS/Inheritance)
- [CSS syntax](/Web/CSS/Syntax)
- [At-rules](/Web/CSS/At-rule)
- [Box model](/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout modes](/Web/CSS/Layout_mode)
- [Visual formatting models](/Web/CSS/Visual_formatting_model)
- [Margin collapsing](/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/Web/CSS/initial_value), [computed](/Web/CSS/computed_value), [used](/Web/CSS/used_value), and [actual](/Web/CSS/actual_value) values
- [Value definition syntax](/Web/CSS/Value_definition_syntax)
- [Shorthand properties](/Web/CSS/Shorthand_properties)
- [Replaced elements](/Web/CSS/Replaced_element)
