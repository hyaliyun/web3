---
title: ID selectors
slug: Web/CSS/ID_selectors
page-type: css-selector
browser-compat: css.selectors.id
---



The CSS **ID selector** matches an element based on the value of the element's [`id`](/Web/HTML/Global_attributes/id) attribute. In order for the element to be selected, its `id` attribute must match exactly the value given in the selector.

```css
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```

## Syntax

```css
#id_value { style properties }
```

Note that syntactically (but not specificity-wise), this is equivalent to the following [attribute selector](/Web/CSS/Attribute_selectors):

```css
[id=id_value] { style properties }
```

The `id_value` value must be a valid [CSS identifier](/Web/CSS/ident). HTML `id` attributes which are not valid CSS identifiers must be [escaped](/Web/CSS/ident#escaping_characters) before they can be used in ID selectors.

## Examples

### Valid ID selectors

#### HTML

```html
<p id="blue">This paragraph has a blue background.</p>
<p>This is just a regular paragraph.</p>
```

```html
<!-- The next two paragraphs have id attributes
that contain characters which must be escaped in CSS -->

<p id="item?one">This paragraph has a pink background.</p>
<p id="123item">This paragraph has a yellow background.</p>
```

#### CSS

```css
#blue {
  background-color: skyblue;
}
```

```css
/* In the next two rules, the id attributes must be escaped */

#item\?one {
  background-color: pink;
}

#\00003123item {
  background-color: yellow;
}
```

#### Result

{{EmbedLiveSample("Examples", '100%', 200)}}

### Invalid ID selectors

The ID selectors in the following rules are not valid CSS identifiers, and will be ignored.

```css example-bad
#item?one {
  background-color: green;
}

#123item {
  background-color: green;
}
```

## Specifications



## Browser compatibility



## See also

- [CSS Selectors](/Web/CSS/CSS_selectors)
- [Learn CSS: Selectors](/Learn/CSS/Building_blocks/Selectors)
