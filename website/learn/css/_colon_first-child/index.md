---
title: ":first-child"
slug: Web/CSS/:first-child
page-type: css-pseudo-class
browser-compat: css.selectors.first-child
---



The **`:first-child`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) represents the first element among a group of sibling elements.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-child.html", "tabbed-shorter")}}

## Syntax

```css
:first-child {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>

<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

#### CSS

```css
p:first-child {
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

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### Result

{{EmbedLiveSample('Styling_a_list')}}

## Specifications



## Browser compatibility



## See also

- 
- {{CSSxRef(":first-of-type")}}
- 
- {{CSSxRef(":nth-child", ":nth-child()")}}
