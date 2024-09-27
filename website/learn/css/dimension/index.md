---
title: <dimension>
slug: Web/CSS/dimension
page-type: css-type
browser-compat: css.types.dimension
---



The **`<dimension>`** [CSS](/Web/CSS) [data type](/Web/CSS/CSS_Types) represents a {{CSSxRef("&lt;number&gt;")}} with a unit attached to it, for example `10px`.

CSS uses dimensions to specify distances ({{CSSxRef("&lt;length&gt;")}}), durations ({{CSSxRef("&lt;time&gt;")}}), frequencies ({{CSSxRef("&lt;frequency&gt;")}}), resolutions ({{CSSxRef("&lt;resolution&gt;")}}), and other quantities.

## Syntax

The syntax of `<dimension>` is a {{CSSxRef("&lt;number&gt;")}} immediately followed by a unit which is an identifier. Unit identifiers are case insensitive.

## Examples

### Valid dimensions

```plain example-good
12px      12 pixels
1rem      1 rem
1.2pt     1.2 points
2200ms    2200 milliseconds
5s        5 seconds
200hz     200 Hertz
200Hz     200 Hertz (values are case insensitive)
```

### Invalid dimensions

```plain example-bad
12 px       The unit must come immediately after the number.
12"px"      Units are identifiers and therefore unquoted.
3sec        The seconds unit is abbreviated "s" not "sec".
```

## Specifications



## Browser compatibility



## See also

- [CSS data types](/Web/CSS/CSS_Types)
- [Learn to style HTML using CSS](/Learn/CSS)
- CSS distances ({{CSSxRef("&lt;length&gt;")}}), durations ({{CSSxRef("&lt;time&gt;")}}), frequencies ({{CSSxRef("&lt;frequency&gt;")}}), and resolutions ({{CSSxRef("&lt;resolution&gt;")}})
