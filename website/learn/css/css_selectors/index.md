---
title: CSS selectors
slug: Web/CSS/CSS_selectors
page-type: css-module
spec-urls: https://drafts.csswg.org/selectors/
---



The **CSS selectors** module defines the patterns to select elements to which a set of CSS rules are then applied along with their {{cssxref("specificity")}}. The CSS selectors module provides us with more than 60 selectors and five combinators. [Other modules](#related_concepts) provide additional pseudo-class selectors and pseudo-elements.

In CSS, selectors are patterns used to match, or select, the elements you want to style. Selectors are also used in JavaScript to enable selecting the DOM nodes to return as a [`NodeList`](/Web/API/NodeList).

Selectors, whether used in CSS or JavaScript, enable targeting HTML elements based on their type, attributes, current states, and even position in the DOM. Combinators allow you to be more precise when selecting elements by enabling selecting elements based on their relationship to other elements.

## Reference

### Combinators and separators

- `+` ([Next-sibling combinator](/Web/CSS/Next-sibling_combinator))
- `>` ([Child combinator](/Web/CSS/Child_combinator))
- `||` ([Column combinator](/Web/CSS/Column_combinator))
- `~` ([Subsequent sibling combinator](/Web/CSS/Subsequent-sibling_combinator))
- " " ([Descendant combinator](/Web/CSS/Descendant_combinator))
- `|` ([Namespace separator](/Web/CSS/Namespace_separator))

### Selectors

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":blank")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":current")}}
- {{CSSXref(":current", ":current()")}}
- {{CSSXref(":default")}}
- {{CSSXref(":defined")}}
- {{CSSXref(":dir", ":dir()")}}
- {{CSSXref(":disabled")}}
- {{CSSXref(":empty")}}
- {{CSSXref(":enabled")}}
- {{CSSXref(":first-child")}}
- {{CSSXref(":first-of-type")}}
- {{CSSXref(":focus")}}
- {{CSSXref(":focus-visible")}}
- {{CSSXref(":focus-within")}}
- {{CSSXref(":fullscreen")}}
- {{CSSXref(":future")}}
- {{CSSXref(":has", ":has()")}}
- {{CSSXref(":hover")}}
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang", ":lang()")}}
- 
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- {{CSSXref(":local-link")}}
- `:matches()` (obsolete legacy selector alias for {{CSSXref( ":is", ":is()")}})
- {{CSSXref(":modal")}}
- {{CSSXref(":muted")}}
- {{CSSXref(":not", ":not()")}}
- {{CSSXref(":nth-child", ":nth-child()")}}
- {{CSSXref(":nth-of-type", ":nth-of-type()")}}
- {{CSSXref(":nth-last-child", ":nth-last-child()")}}
- {{CSSXref(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSXref(":only-child")}}
- {{CSSXref(":only-of-type")}}
- {{CSSXref(":optional")}}
- {{CSSXref(":out-of-range")}}
- {{CSSXref(":past")}}
- {{CSSXref(":paused")}}
- {{CSSXref(":picture-in-picture")}}
- {{CSSXref(":placeholder-shown")}}
- {{CSSXref(":playing")}}
- {{CSSXref(":read-only")}}
- {{CSSXref(":read-write")}}
- {{CSSXref(":required")}}
- {{CSSXref(":root")}}
- {{CSSXref(":scope")}}
- {{CSSXref(":seeking")}}
- {{CSSXref(":stalled")}}
- {{CSSXref(":target")}}
- {{CSSXref(":target-within")}}
- {{CSSXref(":user-invalid")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{CSSXref(":where", ":where()")}}
- [`:-webkit-` pseudo-classes](/Web/CSS/WebKit_Extensions#pseudo-classes)
- [Attribute selectors](/Web/CSS/Attribute_selectors)
- [Class selector](/Web/CSS/Class_selectors)
- [ID selectors](/Web/CSS/ID_selectors)
- [Type selectors](/Web/CSS/Type_selectors)
- [Universal selectors](/Web/CSS/Universal_selectors)

## Terms

- {{glossary("Pseudo-class")}} glossary term
- [Functional pseudo-classes](/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Combinators](/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
- [Simple selector](/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [Compound selector](/Web/CSS/CSS_selectors/Selector_structure#compound_selector)
- [Complex selector](/Web/CSS/CSS_selectors/Selector_structure#complex_selector)
- [Relative selector](/Web/CSS/CSS_selectors/Selector_structure#relative_selector)
- [Selector list](/Web/CSS/Selector_list)
- [Specificity](/Web/CSS/Specificity)

## Guides

- [CSS selectors and combinators](/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Overview of the different types of simple selectors and various combinators defined in the CSS selectors and the CSS pseudo modules.

- [CSS selector structure](/Web/CSS/CSS_selectors/Selector_structure)

  - : Explanation of the structure of CSS selectors and the terminologies introduced in the CSS selectors module, ranging from "simple selector" to "forgiving relative selector list".

- [Pseudo classes](/Web/CSS/Pseudo-classes)

  - : Lists the pseudo-classes, selectors that allow the selection of elements based on state information that is not contained in the document tree, defined in the various CSS modules and HTML.

- [Learn: CSS selectors](/Learn/CSS/Building_blocks/Selectors)

  - : Part of CSS building blocks, includes tutorials on [Type, class, and ID selectors](/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors), [Attribute selectors](/Learn/CSS/Building_blocks/Selectors/Attribute_selectors), [Pseudo-classes and pseudo-elements](/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), [Combinators](/Learn/CSS/Building_blocks/Selectors/Combinators), [Cascade, specificity, and inheritance](/Learn/CSS/Building_blocks/Cascade_and_inheritance), and [Cascade layers](/Learn/CSS/Building_blocks/Cascade_layers).

- [Using the `:target` pseudo-class in selectors](/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : Learn how to use the {{CSSXref(":target")}} pseudo-class to style the target element a URL's fragment identifier.

- [Learn: UI pseudo-classes](/Learn/Forms/UI_pseudo-classes)

  - : Learn the different UI pseudo-classes available for styling forms in different states.

- [Locating DOM elements using selectors](/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)

  - : The selectors API enables using selectors in JavaScript to retrieve element nodes from the DOM.

## Related concepts

- {{CSSXref(":popover-open")}} pseudo-class
- {{CSSXref(":state","state()")}} pseudo-class
- [CSS nesting](/Web/CSS/CSS_nesting) module
  - [`&` nesting selector](/Web/CSS/Nesting_selector)
- [CSS scoping](/Web/CSS/CSS_scoping) module

  - {{CSSXref(":host")}} pseudo-class
  - {{CSSXref(":host_function", ":host()")}} pseudo-class
  - {{cssxref(":host-context", ":host-context()")}} pseudo-class
  - {{CSSXref("::slotted")}} pseudo-element

- [CSS pseudo-element module](/Web/CSS/CSS_pseudo-elements) (representing entities not included in HTML)

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

- [CSS shadow parts module](/Web/CSS/CSS_shadow_parts)

  - {{CSSXref("::part")}} pseudo-element

- [CSS positioned layout module](/Web/CSS/CSS_positioned_layout)

  - {{CSSxRef("::backdrop")}}

- Other [pseudo-elements](/Web/CSS/Pseudo-elements)

  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} at-rule

- {{cssxref("important", "!important")}}
- [Specificity](/Web/CSS/Specificity)
- [Cascade](/Web/CSS/Cascade)

- {{domxref("Document.querySelector")}} method
- {{domxref("Document.querySelectorAll")}} method
- {{domxref("NodeList.forEach()")}} method

## Specifications



## See also

- [CSS pseudo-element module](/Web/CSS/CSS_pseudo-elements)
- [CSS cascade and inheritance module](/Web/CSS/CSS_cascade)
- [CSS nesting module](/Web/CSS/CSS_nesting)
- [Using shadow DOM](/Web/API/Web_components/Using_shadow_DOM)
