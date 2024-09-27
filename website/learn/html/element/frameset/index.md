---
title: <frameset>
slug: Web/HTML/Element/frameset
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.frameset
---



The **`<frameset>`** [HTML](/Web/HTML) element is used to contain {{HTMLElement("frame")}} elements.

> [!NOTE]
> Because the use of frames is now discouraged in favor of using {{HTMLElement("iframe")}}, this element is not typically used by modern websites.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/Web/HTML/Global_attributes).

- `cols` {{Deprecated_Inline}}
  - : This attribute specifies the number and size of horizontal spaces in a frameset.
- `rows` {{Deprecated_Inline}}
  - : This attribute specifies the number and size of vertical spaces in a frameset.

## Example

### A frameset document

A frameset document has a `<frameset>` element instead of a {{HTMLElement("body")}} element. The {{HTMLElement("frame")}} elements are placed within the `<frameset>`.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="50%, 50%">
    <frame
      src="https://developer.mozilla.org/Web/HTML/Element/iframe" />
    <frame
      src="https://developer.mozilla.org/Web/HTML/Element/frame" />
  </frameset>
</html>
```

If you want to embed another HTML page into the {{HTMLElement("body")}} of a document, use an {{HTMLElement("iframe")}} element.

## Specifications



## Browser compatibility



## See also

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
