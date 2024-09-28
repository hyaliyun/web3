---
title: "::cue"
slug: Web/CSS/::cue
page-type: css-pseudo-element
browser-compat: css.selectors.cue
---



The **`::cue`** [CSS](/Web/CSS) [pseudo-element](/Web/CSS/Pseudo-elements) matches [WebVTT](/Web/API/WebVTT_API) cues within a selected element.
This can be used to [style captions and other cues](/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in media with VTT tracks.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-cue.html", "tabbed-shorter")}}

The properties are applied to the entire set of cues as if they were a single unit. The only exception is that `background` and its longhand properties apply to each cue individually, to avoid creating boxes and obscuring unexpectedly large areas of the media.

In the example above, the `::cue(u)` selector selects all the [`<u>`](/Web/HTML/Element/u) elements inside [the cue text](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt).

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Permitted properties

Rules whose selectors include this element may only use the following CSS properties:

- [`background`](/Web/CSS/background)
- [`background-attachment`](/Web/CSS/background-attachment)
- [`background-clip`](/Web/CSS/background-clip)
- [`background-color`](/Web/CSS/background-color)
- [`background-image`](/Web/CSS/background-image)
- [`background-origin`](/Web/CSS/background-origin)
- [`background-position`](/Web/CSS/background-position)
- [`background-repeat`](/Web/CSS/background-repeat)
- [`background-size`](/Web/CSS/background-size)
- [`color`](/Web/CSS/color)
- [`font`](/Web/CSS/font)
- [`font-family`](/Web/CSS/font-family)
- [`font-size`](/Web/CSS/font-size)
- [`font-stretch`](/Web/CSS/font-stretch)
- [`font-style`](/Web/CSS/font-style)
- [`font-variant`](/Web/CSS/font-variant)
- [`font-weight`](/Web/CSS/font-weight)
- [`line-height`](/Web/CSS/line-height)
- [`opacity`](/Web/CSS/opacity)
- [`outline`](/Web/CSS/outline)
- [`outline-color`](/Web/CSS/outline-color)
- [`outline-style`](/Web/CSS/outline-style)
- [`outline-width`](/Web/CSS/outline-width)
- [`ruby-position`](/Web/CSS/ruby-position)
- [`text-combine-upright`](/Web/CSS/text-combine-upright)
- [`text-decoration`](/Web/CSS/text-decoration)
- [`text-decoration-color`](/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/Web/CSS/text-decoration-thickness)
- [`text-shadow`](/Web/CSS/text-shadow)
- [`visibility`](/Web/CSS/visibility)
- [`white-space`](/Web/CSS/white-space)

## Examples

### Styling WebVTT cues as white-on-black

The following CSS sets the cue style so that the text is white and the background is a translucent black box.

```css
::cue {
  color: #fff;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling WebVTT internal node objects

Cue text can include _internal node objects_ as the tags (similar to HTML elements) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, and `<lang>`.
The `::cue()` selector can be used to apply styles to content inside these tags to customize how the WebVTT track is displayed.
Consider the following cue text that uses the `<u>` tag to underline some text:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

The following CSS rule customizes the text inside the `<u>` tag with a color and a [text-decoration](/Web/CSS/text-decoration):

```css
::cue(u) {
  color: red;
  text-decoration: wavy overline lime;
}
```

## Specifications



## Browser compatibility



## See also

- [Web Video Tracks Format (WebVTT)](/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}
