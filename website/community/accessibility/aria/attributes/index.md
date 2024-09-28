---
title: ARIA states and properties
slug: Web/Accessibility/ARIA/Attributes
page-type: landing-page
---



This page lists reference pages covering all the <abbr>WAI-ARIA</abbr> attributes discussed on MDN.

<abbr>ARIA</abbr> attributes enable modifying an element's states and properties as defined in the accessibility tree.

> [!NOTE]
> ARIA only modifies the accessibility tree, modifying how assistive technology presents the content to your users. ARIA doesn't change anything about an element's function or behavior. When not using semantic HTML elements for their intended purpose and default functionality, you must use JavaScript to manage behavior, focus, and ARIA states.

## ARIA attribute types

There are 4 categories of ARIA states and properties:

1. ### Widget attributes

   - [`aria-autocomplete`](/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
   - [`aria-checked`](/Web/Accessibility/ARIA/Attributes/aria-checked)
   - [`aria-disabled`](/Web/Accessibility/ARIA/Attributes/aria-disabled)
   - [`aria-errormessage`](/Web/Accessibility/ARIA/Attributes/aria-errormessage)
   - [`aria-expanded`](/Web/Accessibility/ARIA/Attributes/aria-expanded)
   - [`aria-haspopup`](/Web/Accessibility/ARIA/Attributes/aria-haspopup)
   - [`aria-hidden`](/Web/Accessibility/ARIA/Attributes/aria-hidden)
   - [`aria-invalid`](/Web/Accessibility/ARIA/Attributes/aria-invalid)
   - [`aria-label`](/Web/Accessibility/ARIA/Attributes/aria-label)
   - [`aria-level`](/Web/Accessibility/ARIA/Attributes/aria-level)
   - [`aria-modal`](/Web/Accessibility/ARIA/Attributes/aria-modal)
   - [`aria-multiline`](/Web/Accessibility/ARIA/Attributes/aria-multiline)
   - [`aria-multiselectable`](/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
   - [`aria-orientation`](/Web/Accessibility/ARIA/Attributes/aria-orientation)
   - [`aria-placeholder`](/Web/Accessibility/ARIA/Attributes/aria-placeholder)
   - [`aria-pressed`](/Web/Accessibility/ARIA/Attributes/aria-pressed)
   - [`aria-readonly`](/Web/Accessibility/ARIA/Attributes/aria-readonly)
   - [`aria-required`](/Web/Accessibility/ARIA/Attributes/aria-required)
   - [`aria-selected`](/Web/Accessibility/ARIA/Attributes/aria-selected)
   - [`aria-sort`](/Web/Accessibility/ARIA/Attributes/aria-sort)
   - [`aria-valuemax`](/Web/Accessibility/ARIA/Attributes/aria-valuemax)
   - [`aria-valuemin`](/Web/Accessibility/ARIA/Attributes/aria-valuemin)
   - [`aria-valuenow`](/Web/Accessibility/ARIA/Attributes/aria-valuenow)
   - [`aria-valuetext`](/Web/Accessibility/ARIA/Attributes/aria-valuetext)

2. ### Live region attributes

   - [`aria-busy`](/Web/Accessibility/ARIA/Attributes/aria-busy)
   - [`aria-live`](/Web/Accessibility/ARIA/Attributes/aria-live)
   - [`aria-relevant`](/Web/Accessibility/ARIA/Attributes/aria-relevant)
   - [`aria-atomic`](/Web/Accessibility/ARIA/Attributes/aria-atomic)

3. ### Drag-and-Drop attributes

   - [`aria-dropeffect`](/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
   - [`aria-grabbed`](/Web/Accessibility/ARIA/Attributes/aria-grabbed)

4. ### Relationship attributes

   - [`aria-activedescendant`](/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
   - [`aria-colcount`](/Web/Accessibility/ARIA/Attributes/aria-colcount)
   - [`aria-colindex`](/Web/Accessibility/ARIA/Attributes/aria-colindex)
   - [`aria-colspan`](/Web/Accessibility/ARIA/Attributes/aria-colspan)
   - [`aria-controls`](/Web/Accessibility/ARIA/Attributes/aria-controls)
   - [`aria-describedby`](/Web/Accessibility/ARIA/Attributes/aria-describedby)
   - [`aria-description`](/Web/Accessibility/ARIA/Attributes/aria-description)
   - [`aria-details`](/Web/Accessibility/ARIA/Attributes/aria-details)
   - [`aria-errormessage`](/Web/Accessibility/ARIA/Attributes/aria-errormessage)
   - [`aria-flowto`](/Web/Accessibility/ARIA/Attributes/aria-flowto)
   - [`aria-labelledby`](/Web/Accessibility/ARIA/Attributes/aria-labelledby)
   - [`aria-owns`](/Web/Accessibility/ARIA/Attributes/aria-owns)
   - [`aria-posinset`](/Web/Accessibility/ARIA/Attributes/aria-posinset)
   - [`aria-rowcount`](/Web/Accessibility/ARIA/Attributes/aria-rowcount)
   - [`aria-rowindex`](/Web/Accessibility/ARIA/Attributes/aria-rowindex)
   - [`aria-rowspan`](/Web/Accessibility/ARIA/Attributes/aria-rowspan)
   - [`aria-setsize`](/Web/Accessibility/ARIA/Attributes/aria-setsize)

## Global ARIA attributes

Some states and properties apply to all HTML elements regardless of whether an ARIA role is applied. These are defined as "Global" attributes. Global states and properties are supported by all roles and base markup elements.

Many of the above attributes are global, meaning they can be included on any element unless specifically disallowed:

- [`aria-atomic`](/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`aria-controls`](/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-current`](/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-describedby`](/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-disabled`](/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-dropeffect`](/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [`aria-errormessage`](/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-grabbed`](/Web/Accessibility/ARIA/Attributes/aria-grabbed)
- [`aria-haspopup`](/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)
- [`aria-label`](/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-labelledby`](/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-live`](/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-owns`](/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-relevant`](/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-roledescription`](/Web/Accessibility/ARIA/Attributes/aria-roledescription)

By "specifically disallowed," all the above attributes are global except for the `aria-label` and `aria-labelledby` properties, which are not allowed on elements with role [`presentation`](/Web/Accessibility/ARIA/Roles/presentation_role) nor its synonym [`none`](/Web/Accessibility/ARIA/Roles/none_role) role.

## States and properties defined on MDN

The following are the reference pages covering the <abbr>WAI-ARIA</abbr> states and properties discussed on <abbr>MDN</abbr>.

{{SubpagesWithSummaries}}

## See also

- [Using ARIA: roles, states, and properties](/Web/Accessibility/ARIA/ARIA_Techniques)
