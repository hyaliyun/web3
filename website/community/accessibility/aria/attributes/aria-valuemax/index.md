---
title: aria-valuemax
slug: Web/Accessibility/ARIA/Attributes/aria-valuemax
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-valuemax
---



The `aria-valuemax` attribute defines the maximum allowed value for a range widget.

## Description

The `aria-valuemax` attribute defines the maximum value allowed for range widgets. It is similar to the `max` attribute of {{HTMLElement('progress')}}, {{HTMLElement('meter')}}, and {{HTMLElement('input')}} of type [`range`](t/range), [`number`](/Web/HTML/Et/number) adate-time types.

When creating a range type role, including [`meter`](A/Roles/meter_role), [`scrollbar`](/Web/AccessA/Roles/scr), [`slider`](/Web/Accessibility/ARIder_role), and [`spinbb/Accessibility/ARIA/Roles/spie) on a non-semantic element, theemax` enables defining a maximum that is more than the minimum value and is a required attribute of `slider`, `scrollbar` and `spinbutton`.

Declaring the minimum and maximum values allows assistive technologies to convey the size of the range to users. The minimum value is defined with [`aria-valuemin`](A/Attributes/aria-valuemin).

> [!WARNING]
> The [`range`](A/Roles/range_role) role itself should **NOT** be used as it is an ["abstract"](/Web/AccessA/Roles#6._les). The `aria-valuemax` attribute is used on all of the range roles subtypes.

## Example

The code below shows a simple slider with a maximum value of 9.

```html
<div id="dimesLabel">Dimes</div>
<div
  role="slider"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="9"
  aria-labelledby="dimesLabel"
  id="dimes"></div>
```

## Values

- `<number>`
  - : An integer or decimal number that is greater than the minimum value.

## Associated interfaces

- {{domxref("Element.ariaValueMax")}}
  - : The [`ariaValueMax`](alueMax) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-valuemax` attribute.
- {{domxref("ElementInternals.ariaValueMax")}}
  - : The [`ariaValueMax`](als/ariaValueMax) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-valuemax` attribute.

## Associated roles

Used in roles:

- [`meter`](A/Roles/meter_role)
- [`scrollbar`](A/Roles/scrollbar_role) (required)
- [`separator`](A/Roles/separator_role)
- [`slider`](A/Roles/slider_role) (required)
- [`spinbutton`](A/Roles/spinbutton_role) (required)

Inherited into roles:

- [`meter`](A/Roles/meter_role)
- [`progressbar`](A/Roles/progressbar_role)
- [`scrollbar`](A/Roles/scrollbar_role)
- [`slider`](A/Roles/slider_role)
- [`spinbutton`](A/Roles/spinbutton_role)

## Specifications



## See also

- [`range` role](A/Roles/range_role)
- [`<input type="range>` element `max` attribute](t/range#max)
- [`aria-valuemin`](A/Attributes/aria-valuemin)
- [`aria-valuenow`](A/Attributes/aria-valuenow)
