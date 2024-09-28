---
title: cursor
slug: Web/SVG/Attribute/cursor
page-type: svg-attribute
browser-compat: svg.global_attributes.cursor
---



[SVG Attribute reference home](/Web/SVG/Attribute)

The `cursor` attribute specifies the mouse cursor displayed when the mouse pointer is over an element.

This attribute behaves exactly like the CSS {{cssxref("cursor")}} property except that if the browser supports the {{ SVGElement("cursor") }} element, you should be able to use it with the [\<funciri>](/Web/SVG/Content_type#funciri) notation.

As a presentation attribute, it also can be used as a property directly inside a CSS stylesheet, see CSS {{cssxref("cursor")}} for further information.

## Usage context

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td>Presentation attribute</td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        [[<a href="/Web/SVG/Content_type#funciri">&#x3C;funciri></a
        >,]* [ <strong>auto</strong> | crosshair | default | pointer | move |
        e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize |
        s-resize | w-resize| text | wait | help ]] | inherit
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/interact.html#CursorProperty"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Elements

The following elements can use the `cursor` attribute

- [Container elements](/Web/SVG/Element#container_elements)
- [Graphics elements](/Web/SVG/Element#graphics_elements)

## Specifications



## Browser compatibility



## See also

- {{cssxref("cursor")}}
