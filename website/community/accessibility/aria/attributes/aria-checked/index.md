---
title: aria-checked
slug: Web/Accessibility/ARIA/Attributes/aria-checked
page-type: aria-attribute
spec-urls:
  - https://w3c.github.io/aria/#aria-checked
  - https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/
---



The `aria-checked` attribute indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

> [!NOTE]
> Where possible use an HTML  element with `type="checkbox"` and `type="radio"` as these have built in semantics and do not require ARIA attributes.

## Description

The `aria-checked` attribute indicates whether the element is checked (`true`), unchecked (`false)`, or if the checked status is indeterminate (`mixed`), meaning it is neither checked nor unchecked. The `mixed` value is supported by the tri-state input roles of [`checkbox`](/Web/Accessibility/ARIA/Roles/checkbox_role) and [`menuitemcheckbox`](/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role).

The `mixed` value is not supported on [`radio`](/Web/Accessibility/ARIA/Roles/radio_role), [`menuitemradio`](/Web/Accessibility/ARIA/Roles/menuitemradio_role), or [`switch`](/Web/Accessibility/ARIA/Roles/switch_role) and elements that inherits from these. The value will be false if `mixed` is set when not supported.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

The `tabindex` attribute is required to enable focus. JavaScript is required to toggle the `aria-checked` state. And, if this checkbox is part of a submittable form, more JavaScript is required to set a name and a value.

The above could have been written as:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

By using the  element with `type="checkbox"` instead of ARIA, there is no need for any JavaScript.

## Values

- false
  - : The element supports being checked but is not currently checked.
- true
  - : The element is checked.
- mixed
  - : for [`checkbox`](/Web/Accessibility/ARIA/Roles/checkbox_role) and [`menuitemcheckbox`](/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) only, equivalent to `indeterminate`, indicating a mixed mode value of neither checked nor unchecked.
- undefined (default)
  - : The element does not support being checked.

## Associated roles

Used in roles:

- [`checkbox`](/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`menuitemcheckbox`](/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/Web/Accessibility/ARIA/Roles/radio_role)
- [`switch`](/Web/Accessibility/ARIA/Roles/switch_role)

## Associated interfaces

- {{domxref("Element.ariaChecked")}}
  - : The [`ariaChecked`](/Web/API/Element/ariaChecked) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-checked` attribute.
- {{domxref("ElementInternals.ariaChecked")}}
  - : The [`ariaChecked`](/Web/API/ElementInternals/ariaChecked) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-checked` attribute.

```js
myHTMLElement.ariaChecked = true;
```

## Specifications



## See also

- [`<input type="checkbox">`](/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/Web/HTML/Element/input/radio)
- [`aria-pressed`](/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-selected`](/Web/Accessibility/ARIA/Attributes/aria-selected)
- [Two state checkbox example](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Mix-state checkbox example](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
