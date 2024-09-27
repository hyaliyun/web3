---
title: aria-orientation
slug: Web/Accessibility/ARIA/Attributes/aria-orientation
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-orientation
---



The `aria-orientation` attribute indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

## Description

It may be important for the user to know the orientation to know how to navigate certain widgets, as orientation impacts the expected behaviors of the left, right, up and down arrows. The `aria-orientation` attribute is used to indicate to assistive technology users whether an element's orientation is `horizontal` or `vertical`, or `undefined`.

Several widgets have default orientations:

Horizontal by default:

- [`slider`](/Web/Accessibility/ARIA/Roles/slider_role),
- [`tablist`](/Web/Accessibility/ARIA/Roles/tablist_role)
- [`toolbar`](/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`menubar`](/Web/Accessibility/ARIA/Roles/menubar_role)

Vertical by default:

- [`scrollbar`](/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`tree`](/Web/Accessibility/ARIA/Roles/tree_role)
- [`listbox`](/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menu`](/Web/Accessibility/ARIA/Roles/menu_role)

Each [`separator`](/Web/Accessibility/ARIA/Roles/separator_role) should have `aria-orientation` consistent with the separator's orientation.

When nodes in a tree are arranged horizontally instead of its default vertical orientation, or when a tab list is vertical instead of its default horizontal, the down arrow performs as a right arrow normally would, and the up arrow performs as a left arrow normally would. In these instances, assistive technology users need to know the widget's orientation so as to navigate correctly.

Up and down arrows are generally available for normal browser scrolling, even when focus is inside a tree or tab list. Include `aria-orientation` to enable alerting users when a widget doesn't have the default, expected orientation and associated navigation.

Always remember that ARIA only modifies how assistive technology presents content to your users; altering the behavior of arrow keys requires JavaScript.

## Values

- `horizontal`
  - : The element is oriented horizontally.
- `undefined` (default)
  - : The element's orientation is unknown/ambiguous.
- `vertical`
  - : The element is oriented vertically.

## Associated interfaces

- {{domxref("Element.ariaOrientation")}}
  - : The [`ariaOrientation`](/Web/API/Element/ariaOrientation) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-orientation` attribute.
- {{domxref("ElementInternals.ariaOrientation")}}
  - : The [`ariaOrientation`](/Web/API/ElementInternals/ariaOrientation) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-orientation` attribute.

## Associated roles

Used in roles:

- [`scrollbar`](/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`select`](/Web/Accessibility/ARIA/Roles/select_role)
- [`separator`](/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/Web/Accessibility/ARIA/Roles/slider_role)
- [`tablist`](/Web/Accessibility/ARIA/Roles/tablist_role)
- [`toolbar`](/Web/Accessibility/ARIA/Roles/toolbar_role)

Inherited into roles:

- [`listbox`](/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menu`](/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`tree`](/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/Web/Accessibility/ARIA/Roles/treegrid_role)

## Specifications



## See also

- [Understanding WCAG: Keyboard](/Web/Accessibility/Understanding_WCAG/Keyboard)
