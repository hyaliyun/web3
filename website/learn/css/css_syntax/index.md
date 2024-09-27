---
title: CSS syntax
slug: Web/CSS/CSS_syntax
page-type: css-module
spec-urls: https://drafts.csswg.org/css-syntax
---



The **CSS syntax** module describes, in general terms, the structure and syntax of cascading stylesheets, or CSS. It defines CSS as the language for describing the rendering of structured documents (such as HTML and XML), on the web and elsewhere.

This module doesn't define any properties, [data types](/Web/CSS/CSS_Types), [functions](/Web/CSS/CSS_Functions), or [at-rules](/Web/CSS/At-rule). Rather, it elaborates on how all of these features should be defined and how user agents should parse CSS.

## At-rules

- none

> [!NOTE]
> The module explicitly states that {{cssxref("@charset")}} is not an actual at-rule, but rather an unrecognized legacy rule that should be omitted when a stylesheet is grammar-checked. The only valid `@charset` usage is at the very beginning of a stylesheet, where it is interpreted as a special byte sequence stripped before processing the content.

## Reference

### Key concepts

- {{cssxref("at-rule")}}
- [character escaping](/Web/CSS/custom-ident#escaping_characters)
- [CSS comments](/Web/CSS/Comments)
- [CSS declaration](/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS declaration block](/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS function](/Web/CSS/CSS_Functions)
- [invalid](/Web/CSS/CSS_syntax/Error_handling)
- [style rule](/Web/API/CSSStyleRule)

### Glossary terms

- {{glossary("CSS_Descriptor", "CSS descriptor")}}
- {{glossary("parse")}}
- {{glossary("stylesheet")}}
- {{glossary("whitespace")}}

## Guides

- [Syntax](/Web/CSS/Syntax)

  - : Overview of CSS syntax, including CSS declarations, declaration blocks, rulesets, and statements.

- [Value definition syntax](/Web/CSS/Value_definition_syntax)

  - : Explains the formal grammar for defining valid values for CSS properties and functions, along with semantic constraints. A guide for understanding CSS component value types, combinators, and multipliers.

- [CSS syntax error handling](/Web/CSS/CSS_syntax/Error_handling)

  - : Overview of how the user agent handles invalid CSS.

- [Learn CSS first steps: CSS syntax](/Learn/CSS/First_steps/What_is_CSS#css_syntax)

  - : Introductory guide to CSS, including an introduction to CSS syntax.

## Related concepts

[CSS selectors](/Web/CSS/CSS_selectors) module:

- [CSS specificity](/Web/CSS/Specificity)

[CSS cascade](/Web/CSS/CSS_cascade) module:

- {{cssxref("@import")}} at-rule
- {{cssxref("important")}} flag
- [Initial values](/Web/CSS/initial_value)
- [Computed values](/Web/CSS/computed_value)
- [Used values](/Web/CSS/used_value)
- [Actual values](/Web/CSS/actual_value)
- [CSS inheritance](/Web/CSS/Inheritance)
- {{Glossary("Property/CSS", "CSS property")}}

[CSS custom properties for cascading variables](/Web/CSS/CSS_cascading_variables) module:

- [custom property (`--*`)](/Web/CSS/--*)
- {{cssxref("var")}} function

[CSS conditional rules](/Web/CSS/CSS_conditional_rules) module:

- {{cssxref("@media")}} at-rule
- {{cssxref("@supports")}} at-rule

[CSS Object Model (CSSOM)](/Web/API/CSS_Object_Model) API:

- {{domxref("CSSValue.cssText", "cssText")}} property
- {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}} method
- {{domxref("CSSStyleSheet.replace()", "replace(text)")}} method

[WHATWG](/Glossary/WHATWG) specification:

- {{HTMLElement("style")}} element
- {{HTMLElement("link")}} element
- [`class`](/Web/HTML/Global_attributes/class) attribute
- [`rel`](/Web/HTML/Attributes/rel#stylesheet) attribute

## Specifications



## See also

- [CSS selectors](/Web/CSS/CSS_selectors) module
- [CSS values and units](/Web/CSS/CSS_Values_and_Units) module
