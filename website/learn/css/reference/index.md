---
title: CSS reference
slug: Web/CSS/Reference
page-type: landing-page
---



Use this **CSS reference** to browse an [alphabetical index](#index) of all of the standard [CSS](/Web/CSS) properties, [pseudo-classes](/Web/CSS/Pseudo-classes), [pseudo-elements](/Web/CSS/Pseudo-elements), [data types](/Web/CSS/CSS_Types), [functional notations](/Web/CSS/CSS_Functions) and [at-rules](/Web/CSS/At-rule). You can also browse [key CSS concepts](#concepts) and a list of [selectors organized by type](#selectors). Also included is a brief [DOM-CSS / CSSOM reference](#dom-css_cssom).

## Basic rule syntax

### Style rule syntax

```css
style-rule ::=
    selectors-list {
      properties-list
    }
```

Where:

```css
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

See the index of [_selectors_](#selectors), [_pseudo-classes_](#pseudo), and _[pseudo-elements](#pseudo)_ below. The syntax for each specified _value_ depends on the data type defined for each specified _property_.

#### Style rule examples

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

For a beginner-level introduction to the syntax of selectors, see our [guide on CSS Selectors](/Learn/CSS/Building_blocks/Selectors). Be aware that any [syntax](/Web/CSS/Syntax) error in a rule definition invalidates the entire rule. Invalid rules are ignored by the browser. Note that CSS rule definitions are entirely ({{Glossary("ASCII")}}) [text-based](https://www.w3.org/TR/css-syntax-3/#intro), whereas DOM-CSS / CSSOM (the rule management system) is [object-based](https://www.w3.org/TR/cssom/#introduction).

### At-rule syntax

As the structure of at-rules varies widely, please see [At-rule](/Web/CSS/At-rule) to find the syntax of the specific one you want.

## Index

> [!NOTE]
> This index does not include SVG-exclusive presentation attributes, which can be used as CSS properties on [SVG](/Web/SVG) elements.

> [!NOTE]
> The property names in this index do **not** include the JavaScript names which do differ from the CSS standard names.

{{CSS_Ref}}

## Selectors

The following are the various [selectors](/Web/CSS/CSS_selectors), which allow styles to be conditional based on various features of elements within the DOM.

### Basic selectors

**Basic selectors** are fundamental selectors; these are the most basic selectors that are frequently combined to create other, more complex selectors.

- [Universal selector](/Web/CSS/Universal_selectors) `*`
- [Type selector](/Web/CSS/Type_selectors) `elementname`
- [Class selector](/Web/CSS/Class_selectors) `.classname`
- [ID selector](/Web/CSS/ID_selectors) `#idname`
- [Attribute selector](/Web/CSS/Attribute_selectors) `[attr=value]`

### Grouping selectors

- [Selector list](/Web/CSS/Selector_list) `A, B`
  - : Specifies that both `A` and `B` elements are selected. This is a grouping method to select several matching elements.

### Combinators

Combinators are selectors that establish a relationship between two or more simple selectors, such as "`A` is a child of `B`" or "`A` is adjacent to `B`", creating a complex selector.

- [Next-sibling combinator](/Web/CSS/Next-sibling_combinator) `A + B`
  - : Specifies that the elements selected by both `A` and `B` have the same parent and that the element selected by `B` immediately follows the element selected by `A` horizontally.
- [Subsequent-sibling combinator](/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Specifies that the elements selected by both `A` and `B` share the same parent and that the element selected by `A` comes before—but not necessarily immediately before—the element selected by `B`.
- [Child combinator](/Web/CSS/Child_combinator) `A > B`
  - : Specifies that the element selected by `B` is the direct child of the element selected by `A`.
- [Descendant combinator](/Web/CSS/Descendant_combinator) `A B`
  - : Specifies that the element selected by `B` is a descendant of the element selected by `A`, but is not necessarily a direct child.
- [Column combinator](/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Specifies that the element selected by `B` is located within the table column specified by `A`. Elements which span multiple columns are considered to be a member of all of those columns.

### Pseudo

- [Pseudo classes](/Web/CSS/Pseudo-classes) `:`
  - : Specifies a special state of the selected element(s).
- [Pseudo elements](/Web/CSS/Pseudo-elements) `::`
  - : Represents entities that are not included in HTML.

> [!CALLOUT]
>
> See also [selectors in the Selectors specification](https://drafts.csswg.org/selectors/) and the [pseudo-element specification](https://drafts.csswg.org/css-pseudo/).

## Concepts

### Syntax and semantics

- [CSS syntax](/Web/CSS/Syntax)
- [At-rules](/Web/CSS/At-rule)
- [Cascade](/Web/CSS/Cascade)
- [Comments](/Web/CSS/Comments)
- [Descriptor](/Glossary/CSS_Descriptor)
- [Inheritance](/Web/CSS/Inheritance)
- [Shorthand properties](/Web/CSS/Shorthand_properties)
- [Specificity](/Web/CSS/Specificity)
- [Value definition syntax](/Web/CSS/Value_definition_syntax)
- [CSS unit and value types](/Web/CSS/CSS_Values_and_Units)
- [CSS functional notations](/Web/CSS/CSS_Functions)

### Values

- [Actual value](/Web/CSS/actual_value)
- [Computed value](/Web/CSS/computed_value)
- [Initial value](/Web/CSS/initial_value)
- [Resolved value](/Web/CSS/resolved_value)
- [Specified value](/Web/CSS/specified_value)
- [Used value](/Web/CSS/used_value)

### Layout

- [Block formatting context](/Web/CSS/CSS_display/Block_formatting_context)
- [Box model](/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Containing block](/Web/CSS/Containing_block)
- [Layout mode](/Web/CSS/Layout_mode)
- [Margin collapsing](/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Replaced elements](/Web/CSS/Replaced_element)
- [Stacking context](/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Visual formatting model](/Web/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Major object types

- {{DOMxRef("Document.styleSheets")}}
- {{DOMxRef("HTMLElement.style")}}
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSStyleDeclaration")}}

### Important methods

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## See also

- [Mozilla CSS extensions](/Web/CSS/Mozilla_Extensions) (prefixed with `-moz-`)
- [WebKit CSS extensions](/Web/CSS/WebKit_Extensions) (mostly prefixed with `-webkit-`)

## External Links

- [CSS Indices (w3.org)](https://www.w3.org/TR/CSS/#indices)
