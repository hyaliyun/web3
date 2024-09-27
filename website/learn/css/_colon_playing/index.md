---
title: ":playing"
slug: Web/CSS/:playing
page-type: css-pseudo-class
browser-compat: css.selectors.playing
---



The **`:playing`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) selector represents the playback state of an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when that element is "playing".
An element is considered to be playing if it is currently playing the media resource, or if it has temporarily stopped for reasons other than user intent (such as {{cssxref(":buffering")}} or {{cssxref(":stalled")}}).

## Syntax

```css
:playing {
  /* ... */
}
```

## Examples

### CSS

```css
:playing {
  border: 5px solid green;
}
```

## Specifications



## Browser compatibility



## See also

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/Web/CSS/CSS_selectors)
