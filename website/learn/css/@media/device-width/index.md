---
title: device-width
slug: Web/CSS/@media/device-width
page-type: css-media-feature
status:
  - deprecated
browser-compat: css.at-rules.media.device-width
---

 

> [!NOTE]
> To query for the width of the viewport, developers should use the [`width`](/Web/CSS/@media/width) media feature instead.

The **`device-width`** [CSS](/Web/CSS) [media feature](/Web/CSS/@media#media_features) can be used to test the width of an output device's rendering surface.

## Syntax

The `device-width` feature is specified as a {{cssxref("&lt;length&gt;")}} value. It is a range feature, meaning that you can also use the prefixed **`min-device-width`** and **`max-device-width`** variants to query minimum and maximum values, respectively.

## Examples

### Applying a special stylesheet for devices that are narrower than 800 pixels

```html
<link
  rel="stylesheet"
  media="screen and (max-device-width: 799px)"
  href="http://foo.bar.com/narrow-styles.css" />
```

## Specifications



## Browser compatibility



## See also

- [Using Media Queries](/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/Web/CSS/@media)
