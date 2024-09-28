---
title: rel=prerender
slug: Web/HTML/Attributes/rel/prerender
page-type: html-attribute-value
status:
  - deprecated
  - non-standard
browser-compat: html.elements.link.rel.prerender
---



The **`prerender`** keyword for the [`rel`](/Web/HTML/Element/link#rel) attribute of the {{HTMLElement("link")}} element is a hint to browsers that the user might need the target resource for the next navigation, and therefore the browser can likely improve the user experience by preemptively fetching and processing the resource — for example, by fetching its subresources or performing some rendering in the background offscreen.

This feature is superseded by the [Speculation Rules API](/Web/API/Speculation_Rules_API).

## Specifications



## Browser compatibility



## See also

- [Speculative loading](/Web/Performance/Speculative_loading) for a comparison of `<link rel="prerender">` and other similar performance improvement features.
