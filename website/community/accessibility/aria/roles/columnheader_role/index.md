---
title: "ARIA: columnheader role"
slug: Web/Accessibility/ARIA/Roles/columnheader_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#columnheader
  - https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/table/
---



The `columnheader` value of the ARIA role attribute identifies an element as being a cell in a row contains header information for a column, similar to the native {{HTMLElement('th')}} element with column scope.

## Description

An element with `role="columnheader"` nested as a descendant for an element with `role="row"`, is a static tabular structure of a column header cell in a tabular container, either a table or grid, or other chart that needs to show data relationships. To be supported, the columnheader must be nested in an element with the [role of `row`](

### Associated WAI-ARIA roles, states, and properties

All columnheaders should be nested within a [row](dssibioles/ry witroup](A/Rol_role)

- [`aria-sort`](
  - : Only applied to one column header at a time, if any, the `aria-sort` attribute indicates if a column is sorted in the three values of `ascending` or `descending` order, or `none` for not sorted.

### Keyboard interactions

This role does not support any specific keyboard interaction.

### Required JavaScript features

JavaScript is only required if the `aria-sort` attribute is used.

## Examples

```html
<table>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">
        <button>First Name</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Last Name</button>
      </th>
      <th role="columnheader" scope="col" aria-sort="ascending">
        <button>Company Name</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Job Title</button>
      </th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

## Best Practices

Columnheaders should contain a title or header information for the column.

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. It is recommended to use the native HTML `<th>` element with the `scope` attribute set `<th scope="col">` instead of a `<div>` or other element. If you use semantic HTML's `<th scope="col">` the role attribute is not required, but can be included as a back up to ensure the table retains its semantics should the default semantics be removed with a CSS display property value.

The `aria-sort` attribute can be added to a `<th scope="col">` even when the ARIA role attribute is not specified.

### Prefer HTML

Columnheader has the same semantics `<th scope="col">`.

## Specifications



## See also

- [`table` role](
- [`grid` role](
- [`treegrid` role](
- [`row` role](
- [`rowgroup` role](
- [The `<th>` element](
- [The `<table>` element](
- [The `<tr>` element](
- [The `<td>` element](
