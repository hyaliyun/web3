---
title: "-webkit-transform-2d"
slug: Web/CSS/@media/-webkit-transform-2d
page-type: css-media-feature
status:
  - non-standard
browser-compat: css.at-rules.media.-webkit-transform-2d
---

 {{ Non-standard_header }}

> [!NOTE]
> All browsers support the [`transform`](/Web/CSS/transform#browser_compatibility) property without vendor prefixes. Only WebKit (Safari), and not Chromium, based browsers supports the `-webkit-transform-2d` media feature. No browsers support `transform`, without the prefix or `2d` extension, as a media query. Use the [`@supports (transform)`](/Web/CSS/@supports) feature query instead.

The **`-webkit-transform-2d`** Boolean [CSS](/Web/CSS) [media feature](/Web/CSS/@media#media_features) is a [WebKit extension](/Web/CSS/WebKit_Extensions) whose value is `true` if vendor-prefixed CSS 2D {{cssxref("transform")}}s and non-standard vendor-prefixed media queries are supported.

Apple has [a description in Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` is a Boolean [CSS](/Web/CSS) [media feature](/Web/CSS/@media#media_features) whose value is `true` if the browser supports `-webkit` prefixed CSS 2D {{cssxref("transform")}}s.

### Values

- `true`
  - : The browser supports the 2D CSS transforms with the `-webkit` prefix.
- `false`
  - : The 2D CSS transforms prefixed with `-webkit` are not supported by the browser.

## Examples

### Basic example

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

This media feature is only supported by WebKit. The unprefixed [`transform`](/Web/CSS/transform) property is supported in all modern browsers. If possible, use an {{cssxref("@supports")}} feature query instead:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Specifications

Not part of any standard.

## Browser compatibility



## See also

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} and [using CSS transforms](/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} and [Using media queries](/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} and [using feature queries](/Web/CSS/CSS_conditional_rules/Using_feature_queries)
