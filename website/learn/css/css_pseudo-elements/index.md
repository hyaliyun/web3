---
title: CSS pseudo-elements
slug: Web/CSS/CSS_pseudo-elements
page-type: css-module
spec-urls: https://drafts.csswg.org/css-pseudo/
---



The **CSS pseudo-element** module defines abstract elements that are not directly present in the document tree. These abstract elements, called pseudo-elements, represent portions of the render tree that can be selected and styled. Pseudo-elements are used to create abstractions about the document tree beyond those provided by the document tree.

Pseudo-elements are prefixed with a double colon (`::`). You add pseudo-elements to selectors (as in `p::first-line`) to target and style these faux elements.

Pseudo-elements enable targeting entities not included in HTML and sections of content that cannot be targeted otherwise without adding extra markup. Consider the placeholder of an  element. This is an abstract element and not a distinct node in the document tree. You can select this placeholder by using the {{CSSXref("::placeholder")}} pseudo-element. As another example, the {{CSSXref("::selection")}} pseudo-element matches the content currently highlighted by a user, allowing you to style what is matched as the user interacts with the content and changes the selection. Similarly, the {{CSSXref("::first-line")}} pseudo-element targets the first line of an element, updating automatically if the character count of the first line changes, without having to query the element's line length.

## Reference

### Selectors

- {{CSSXref("::after")}}
- {{CSSXref("::before")}}
- {{CSSXref("::file-selector-button")}}
- {{CSSXref("::first-letter")}}
- {{CSSXref("::first-line")}}
- {{CSSXref("::grammar-error")}}
- {{CSSXref("::marker")}}
- {{CSSXref("::placeholder")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}

### Interfaces

- {{DOMxRef("CSSPseudoElement")}} interface
  - {{DOMxRef("CSSPseudoElement.element")}} property
  - {{DOMxRef("CSSPseudoElement.type")}} property

### Terms

- {{Glossary("Pseudo-element")}} glossary term

## Guides

- [CSS pseudo-elements](/Web/CSS/Pseudo-elements)

  - : Alphabetical list of pseudo-elements defined by all the CSS specifications and WebVTT.

- [Building blocks: Pseudo-classes and pseudo-elements](/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

  - : Part of CSS building blocks section on selectors. This article defines what a pseudo-element is and how it can be combined with pseudo-classes and be used for generating content with `::before` and `::after` pseudo-elements.

- [How to create fancy boxes using pseudo-elements](/Learn/CSS/Howto/Create_fancy_boxes#pseudo-elements)

  - : Example of styling generated content using `::before` and `::after` pseudo-elements for visual effects.

## Related concepts

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) cues:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS scoping](/Web/CSS/CSS_scoping) module

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS shadow parts](/Web/CSS/CSS_shadow_parts) module

  - {{CSSXref("::part")}}

- [CSS view transitions](/Web/CSS/CSS_view_transitions) module

  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS selectors](/Web/CSS/CSS_selectors)

  - [Attribute selectors](/Web/CSS/Attribute_selectors)
  - [Combinators](/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
  - [Class selectors](/Web/CSS/Class_selectors)
  - [ID selectors](/Web/CSS/ID_selectors)
  - [Type selectors](/Web/CSS/Type_selectors)
  - [Pseudo-classes](/Web/CSS/Pseudo-classes)
  - [Universal selectors](/Web/CSS/Universal_selectors)

- [`placeholder`](/Web/HTML/Element/input#placeholder) attribute of the `<input>` element
- [`:placeholder-shown`](/Web/CSS/:placeholder-shown) selector

- [CSS generated content](/Web/CSS/CSS_generated_content)

  - {{cssxref("content")}} property
  - {{cssxref("quotes")}} property

- [Text fragments](/Web/URI/Fragment/Text_fragments)

- {{DOMXref("AnimationEvent.pseudoElement")}} property
- {{DOMXref("KeyframeEffect.pseudoElement")}} property
- {{DOMXref("TransitionEvent.pseudoElement")}} property

## Specifications



## See also

- [Specificity](/Web/CSS/Specificity)
- [CSS selectors](/Web/CSS/CSS_selectors) module
- [CSS shadow-parts](/Web/CSS/CSS_shadow_parts) module
- [CSS generated content](/Web/CSS/CSS_generated_content) module
- [CSS positioned layout](/Web/CSS/CSS_positioned_layout) module
