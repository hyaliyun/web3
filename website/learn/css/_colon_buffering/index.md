---
title: ":buffering"
slug: Web/CSS/:buffering
page-type: css-pseudo-class
browser-compat: css.selectors.buffering
---



The **`:buffering`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) selector represents an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when the playable element is buffering a media resource.

An element is considered as buffering when that element cannot continue playing because it is trying to load media data but does not yet have enough data to begin or continue playback.
For more information, see the [Media buffering, seeking, and time ranges](/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable) guide.

> [!NOTE]
> An element is still considered to be {{cssxref(":playing")}} when it is "buffering".
> If `:buffering` matches an element, `:playing` will also match that element.

## Syntax

```css
:buffering {
  /* ... */
}
```

## Examples

### CSS

```css
:buffering {
  outline: 5px solid red;
}

video:buffering {
  outline: 5px solid blue;
}
```

## Specifications



## Browser compatibility



## See also

- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/Web/CSS/CSS_selectors)
