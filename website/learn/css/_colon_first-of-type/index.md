---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
page-type: css-pseudo-class
browser-compat: css.selectors.first-of-type
---



The **`:first-of-type`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) represents the first element of its type among a group of sibling elements.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-of-type.html", "tabbed-shorter")}}

## Syntax

```css
:first-of-type {
  /* ... */
}
```

## Examples

### Styling the first paragraph

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### Result

{{EmbedLiveSample('Styling_the_first_paragraph')}}

### Nested elements

This example shows how nested elements can also be targeted. Note that the [universal selector](/Web/CSS/Universal_selectors) (`*`) is implied when no type selector is written.

#### HTML

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <p>This `p` qualifies!</p>
  <div>This is the final `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample('Nested_elements', 500)}}

## Specifications



## Browser compatibility



## See also

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
