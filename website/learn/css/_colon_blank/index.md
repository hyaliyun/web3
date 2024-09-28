---
title: ":blank"
slug: Web/CSS/:blank
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.blank
---



> [!NOTE]
> The `:blank` selector is considered at risk, as the CSSWG keeps changing it.
>
> See [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

The **`:blank`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) selects empty user input elements (e.g.  or {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Examples

### Simple :blank example

In eventual supporting browsers, the `:blank` pseudo-class will enable developers to highlight in some way input controls that are not required, but still have no content filled in, perhaps as a reminder to users.

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### Result

{{EmbedLiveSample('Simple_blank_example', '100%', 150)}}

## Specifications



## Browser compatibility



## See also

- {{CSSxRef(":empty")}}
