---
title: ":focus-within"
slug: Web/CSS/:focus-within
page-type: css-pseudo-class
browser-compat: css.selectors.focus-within
---



The **`:focus-within`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) matches an element if the element or any of its descendants are focused. In other words, it represents an element that is itself matched by the {{CSSxRef(":focus")}} pseudo-class or has a descendant that is matched by `:focus`. (This includes descendants in [shadow trees](/Web/API/Web_components/Using_shadow_DOM).)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-within.html", "tabbed-shorter")}}

This selector is useful, to take a common example, for highlighting an entire {{HTMLElement("form")}} container when the user focuses on one of its  fields.

## Syntax

```css
:focus-within {
  /* ... */
}
```

## Examples

In this example, the form will receive special coloring styles when either text input receives focus.

### HTML

```html
<p>Try typing into this form.</p>

<form>
  <label for="given_name">Given Name:</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">Family Name:</label>
  <input id="family_name" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### Result

{{EmbedLiveSample("Examples", 500, 150)}}

## Specifications



## Browser compatibility



## See also

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- [Grab your user's attention with the focus-within selector](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
