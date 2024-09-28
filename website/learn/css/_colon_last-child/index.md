---
title: ":last-child"
slug: Web/CSS/:last-child
page-type: css-pseudo-class
browser-compat: css.selectors.last-child
---



The **`:last-child`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) represents the last element among a group of sibling elements.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-last-child.html", "tabbed-shorter")}}

## Syntax

```css
:last-child {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<div>
  <p>This text isn't selected.</p>
  <p>This text is selected!</p>
</div>

<div>
  <p>This text isn't selected.</p>
  <h2>This text isn't selected: it's not a `p`.</h2>
</div>
```

#### CSS

```css
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### Result

{{EmbedLiveSample('Basic_example', 500, 200)}}

### Styling a list

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### Result

{{EmbedLiveSample('Styling_a_list')}}

## Specifications



## Browser compatibility



## See also

- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":nth-child")}}
