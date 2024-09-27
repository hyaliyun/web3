---
title: aria-errormessage
slug: Web/Accessibility/ARIA/Attributes/aria-errormessage
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-errormessage
---



The `aria-errormessage` attribute on an object identifies the element that provides an error message for that object.

## Description

When there is a user-created error, you want to let them know it exists and tell them how to fix it. There are two attributes you need to use: set [`aria-invalid="true"`](ibility/ARIA/Attributes/aria-invalid) to define the object as being in an error state, then add the `aria-errormessage` attribute with the value being the `id` of the element containing the error message text for that object.

The `aria-errormessage` attribute should only be used when the value of an object is not valid; when [`aria-invalid`](ibility/ARIA/Attributes/aria-invalid) is set to `true`. If the object is valid and you include the `aria-errormessage` attribute, make sure the element referenced is hidden, as the message it contains is not relevant.

When `aria-errormessage` is relevant, the element it references must be visible so users can see or hear the error message.

Often times, you will want the element with the error message to be an [ARIA live region](ibility/ARIA/ARIA_Live_Regions), such as when an error message is displayed to users after they have provided an invalid value. The error message should describe what is wrong and inform the user what is required to make the object valid. Adding the error message as an ARIA live region informs assistive technologies that the user may benefit from the error message content even if the error message wouldn't otherwise be conveyed to the user.

Include a visible error message and link the invalid object with the `aria-errormessage` attribute if the failure is visually apparent and an explicit description of the error is necessary.

## Example

We create some styles to:

1. Hide all error messages,
2. Make invalid objects appear invalid, and
3. Show error messages that are siblings coming after an invalid object.

We use `aria-invalid="true"` to identify invalid objects:

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

When an object is invalid, we use JavaScript to add `aria-invalid="true"`. The above CSS makes the `.errormessage` following an invalid object become visible.

```html
<p>
  <label for="email">Email address:</label>
  <input
    type="email"
    name="email"
    id="email"
    aria-invalid="true"
    aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p>
```

When we went from valid to invalid, the only JavaScript change for this example was an update to `aria-invalid` on the email input object. As the error message follows the input and becomes visible and available on the accessibility tree, we are able to keep our example simple. We could have also applied an [`aria-live`](ibility/ARIA/Attributes/aria-live) property or used a live region roles such as [`alert`](/Web/AccessA/Roles/alert_role).

## Values

- `id` reference
  - : The value of the `id` of the element containing the error message for the current element

## Associated roles

Used in roles:

- [`application`](ibility/ARIA/Roles/application_role)
- [`checkbox`](ibility/ARIA/Roles/checkbox_role)
- [`combobox`](ibility/ARIA/Roles/combobox_role)
- [`gridcell`](ibility/ARIA/Roles/gridcell_role)
- [`listbox`](ibility/ARIA/Roles/listbox_role)
- [`radiogroup`](ibility/ARIA/Roles/radiogroup_role)
- [`slider`](ibility/ARIA/Roles/slider_role)
- [`spinbutton`](ibility/ARIA/Roles/spinbutton_role)
- [`textbox`](ibility/ARIA/Roles/textbox_role)
- [`tree`](ibility/ARIA/Roles/tree_role)

Inherits from roles:

- [`columnheader`](ibility/ARIA/Roles/columnheader_role)
- [`rowheader`](ibility/ARIA/Roles/rowheader_role)
- [`searchbox`](ibility/ARIA/Roles/searchbox_role)
- [`switch`](ibility/ARIA/Roles/switch_role)
- [`treegrid`](ibility/ARIA/Roles/treegrid_role)

## Specifications



## See also

- CSS {{CSSxref(':invalid')}} pseudoclass
- [`aria-invalid`](ibility/ARIA/Attributes/aria-invalid)
- [`aria-describedby`](ibility/ARIA/Attributes/aria-describedby)
- [`aria-live`](ibility/ARIA/Attributes/aria-live)
