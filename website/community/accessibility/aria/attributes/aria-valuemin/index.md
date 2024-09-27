---
title: aria-valuemin
slug: Web/Accessibility/ARIA/Attributes/aria-valuemin
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-valuemin
---



The `aria-valuemin` attribute defines the minimum allowed value for a range widget.

## Description

The `aria-valuemin` attribute defines the minimum value allowed for range widgets. It is similar to the `min` attribute of {{HTMLElement('progress')}}, {{HTMLElement('meter')}}, and {{HTMLElement('input')}} of type [`range`](/Web/HTML/Element/input/range), [`number`](/Web/HTML/Element/input/number) and all the date-time types.

When creating a range type role, including [`meter`](/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/Web/Accessibility/ARIA/Roles/slider_role), and [`spinbutton`](/Web/Accessibility/ARIA/Roles/spinbutton_role) on a non-semantic element, the `aria-valuemin` enables defining a minimum that is less than the maximum value and is a required attribute of `slider`, `scrollbar` and `spinbutton`.

Declaring the minimum and maximum values allows assistive technologies to convey the size of the range to users.

The maximum value is defined with [`aria-valuemax`](/Web/Accessibility/ARIA/Attributes/aria-valuemax).

> [!WARNING]
> The [`range`](/Web/Accessibility/ARIA/Roles/range_role) role itself should **NOT** be used as it is an ["abstract"](/Web/Accessibility/ARIA/Roles#6._abstract_roles). The `aria-valuemin` attribute is used on all of the range roles subtypes.

## Values

- `<number>`
  - : A decimal number, below the maximum value.

## Associated interfaces

- {{domxref("Element.ariaValueMin")}}
  - : The [`ariaValueMin`](/Web/API/Element/ariaValueMin) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-valuemin` attribute.
- {{domxref("ElementInternals.ariaValueMin")}}
  - : The [`ariaValueMin`](/Web/API/ElementInternals/ariaValueMin) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-valuemin` attribute.

## Associated roles

Used in roles:

- [`meter`](/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/Web/Accessibility/ARIA/Roles/spinbutton_role)

Inherited into roles:

- [`meter`](/Web/Accessibility/ARIA/Roles/meter_role)
- [`progressbar`](/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`scrollbar`](/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`slider`](/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/Web/Accessibility/ARIA/Roles/spinbutton_role)

## Specifications



## See also

- [`range` role](/Web/Accessibility/ARIA/Roles/range_role)
- [`<input type="range>` element `min` attribute](/Web/HTML/Element/input/range#min)
- [`aria-valuemax`](/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuenow`](/Web/Accessibility/ARIA/Attributes/aria-valuenow)
