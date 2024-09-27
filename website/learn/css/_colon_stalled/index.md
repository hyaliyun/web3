---
title: ":stalled"
slug: Web/CSS/:stalled
page-type: css-pseudo-class
browser-compat: css.selectors.stalled
---



The **`:stalled`** [CSS](/Web/CSS) [pseudo-class](/Web/CSS/Pseudo-classes) selector represents an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when playback is stalled.
A resource is considered to be stalled if the user has requested playback of a specific position in the media resource, but it has failed to receive any data for some amount of time.
This is different from {{cssxref(":buffering")}} in that the media element is unexpectedly not loading data when stalled (e.g. due to a network error) for around 3 seconds (the exact time is [user agent dependent](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Like with the {{cssxref(":buffering")}} pseudo-class, the element is still considered to be "playing" when it is "stalled".
> If `:stalled` matches an element, {{cssxref(":playing")}} will also match that element.

## Syntax

```css
:stalled {
  /* ... */
}
```

## Examples

### CSS

```css
:stalled {
  outline: 5px solid red;
}

audio:stalled {
  background-color: red;
}
```

## Specifications



## Browser compatibility



## See also

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/Web/CSS/CSS_selectors)
- [`stalled`](/Web/API/HTMLMediaElement/stalled_event) event
