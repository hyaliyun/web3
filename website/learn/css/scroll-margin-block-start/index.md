---
title: scroll-margin-block-start
slug: Web/CSS/scroll-margin-block-start
page-type: css-property
browser-compat: css.properties.scroll-margin-block-start
---



The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

{{EmbedInteractiveExample("pages/css/scroll-margin-block-start.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* Global values */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: revert;
scroll-margin-block-start: revert-layer;
scroll-margin-block-start: unset;
```

### Values

- {{CSSXref("&lt;length&gt;")}}
  - : An outset from the block start edge of the scroll container.

## Formal definition



## Formal syntax



## Specifications



## Browser compatibility



## See also

- [CSS scroll snap](/Web/CSS/CSS_scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
