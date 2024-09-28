---
title: height
slug: Web/CSS/@media/height
page-type: css-media-feature
browser-compat: css.at-rules.media.height
---



The **`height`** [CSS](/Web/CSS) [media feature](/Web/CSS/@media#media_features) can be used to apply styles based on the height of the {{glossary("viewport")}} (or the page box, for [paged media](/Web/CSS/CSS_paged_media)).

## Syntax

The `height` feature is specified as a {{cssxref("&lt;length&gt;")}} value representing the viewport height. It is a range feature, meaning that you can also use the prefixed **`min-height`** and **`max-height`** variants to query minimum and maximum values, respectively.

## Examples

### HTML

```html
<div>Watch this element as you resize your viewport's height.</div>
```

### CSS

```css
/* Exact height */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* Minimum height */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* Maximum height */
@media (max-height: 40rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Result

{{EmbedLiveSample('Examples','90%')}}

## Specifications



## Browser compatibility



## See also

- [Using media queries](/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/Web/CSS/@media)
