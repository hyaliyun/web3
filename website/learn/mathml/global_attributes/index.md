---
title: Global attributes
slug: Web/MathML/Global_attributes
page-type: landing-page
browser-compat: mathml.global_attributes
---



**Global attributes** are attributes common to all MathML elements; they can be used on all elements, though they may have no effect on some elements.

Global attributes may be specified on all [MathML elements](/Web/MathML/Element), _even those not specified in the standard_. That means that any non-standard elements must still permit these attributes, even though using those elements means that the document is no longer MathML-compliant.

In addition to the basic MathML global attributes, the following global attributes also exist:

- The [event handler](/Web/Events/Event_handlers) attributes such as **`onclick`**, **`onfocus`**, etc.
- The [`href`](/Web/MathML/Global_attributes/href) attribute for making MathML element a hyperlink.

## List of global attributes

- [`class`](/Web/HTML/Global_attributes/class)
  - : A space-separated list of the classes of the element. Classes allow CSS and JavaScript to select and access specific elements via the [class selectors](/Web/CSS/Class_selectors) or functions like the method {{DOMxRef("Document.getElementsByClassName()")}}.
- [`data-*`](/Web/HTML/Global_attributes/data-*)
  - : Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the [MathML](/Web/MathML) and its {{glossary("DOM")}} representation that may be used by scripts. All such custom data are available via the {{DOMxRef("MathMLElement")}} interface of the element the attribute is set on. The {{DOMxRef("HTMLElement.dataset")}} property gives access to them.
- [`dir`](/Web/MathML/Global_attributes/dir)

  - : An [enumerated](/Glossary/Enumerated) attribute indicating the directionality of the MathML element. It can have the following values:

    - `ltr`, which means _left to right_ and is used to render mathematical expressions from the left to the right (e.g. English or Moroccan style);
    - `rtl`, which means _right to left_ and is used to render mathematical expressions from the right to the left (e.g. Maghreb or Machrek style);

- [`displaystyle`](/Web/MathML/Global_attributes/displaystyle):

  - : a boolean setting the [math-style](/Web/CSS/math-style) for the element.
    - `true`, which means `normal`.
    - `false`, which means `compact`.

- [`id`](/Web/HTML/Global_attributes/id)

  - : Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

- [`mathbackground`](/Web/MathML/Global_attributes/mathbackground)

  - : A [background-color](/Web/CSS/background-color) for the element.

- [`mathcolor`](/Web/MathML/Global_attributes/mathcolor)

  - : A [color](/Web/CSS/color) for the element.

- [`mathsize`](/Web/MathML/Global_attributes/mathsize)

  - : A {{cssxref("length-percentage")}} used as a [font-size](/Web/CSS/font-size) for the element.

- [`nonce`](/Web/HTML/Global_attributes/nonce)

  - : A cryptographic nonce ("number used once") which can be used by [Content Security Policy](/Web/HTTP/CSP) to determine whether a given fetch will be allowed to proceed.

- [`scriptlevel`](/Web/MathML/Global_attributes/scriptlevel)

  - : Specifies a [math-depth](/Web/CSS/math-depth) for the element. See the [scriptlevel page](/Web/MathML/Global_attributes/scriptlevel#values) for accepted values and mapping.

- [`style`](/Web/HTML/Global_attributes/style)
  - : Contains [CSS](/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the {{MathMLElement("style")}} element have mainly the purpose of allowing for quick styling, for example for testing purposes.
- [`tabindex`](/Web/HTML/Global_attributes/tabindex)

  - : An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

    - a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    - `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    - a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.

## Specifications



## Browser compatibility



## See also

- {{DOMxRef("Element")}} interface that allows querying most global attributes.
