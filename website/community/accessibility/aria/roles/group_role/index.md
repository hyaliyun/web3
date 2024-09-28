---
title: "ARIA: group role"
slug: Web/Accessibility/ARIA/Roles/group_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#group
---



The `group` role identifies a set of user interface objects that is not intended to be included in a page summary or table of contents by assistive technologies.

## Description

Most closely related to HTML's {{HTMLElement('fieldset')}} element, the `group` document structure role is used to identify a set of user interface objects which, as compared to [`region`](

The `group` role should be used to form a logical collection of items with related functionality, such as children in a [`tree`](ssA/Roles/dir).

When a `group` is used in the context of [`list`](LEle}, with neslement('li'n.

When used in the context of a [`listbox`]( {{HTMLElement('option')}} and {{HTMLElement('optgroup')}} instead.

`Group` elements may be nested.

The `group` role should not be used for major perceivable sections of a page. If a section is significant enough that it should be included in the page's table of contents, use the `region` role or a standard [landmark role](

When the role is added to an element, the browser will send out an accessible group event to assistive technology products, which can then notify the user about it.

## Examples

The HTML code example below uses the `group` role with a `tree` view:

```html
<div id="tree1" role="tree" tabindex="-1">
  <div
    id="animals"
    class="groupHeader"
    role="presentation"
    aria-owns="animalGroup"
    aria-expanded="true">
    <img role="presentation" tabindex="-1" src="images/treeExpanded.gif" />
    <span role="treeitem" tabindex="0">Animals</span>
  </div>
  <div id="animalGroup" role="group">
    <div id="birds" role="treeitem">
      <span tabindex="-1">Birds</span>
    </div>
    <div
      id="cats"
      class="groupHeader"
      role="presentation"
      aria-owns="catGroup"
      aria-expanded="false">
      <img role="presentation" tabindex="-1" src="images/treeContracted.gif" />
      <span role="treeitem" tabindex="0">Cats</span>
    </div>
    <div id="catGroup" role="group">
      <div id="siamese" role="treeitem">
        <span tabindex="-1">Siamese</span>
      </div>
      <div id="tabby" role="treeitem">
        <span tabindex="-1">Tabby</span>
      </div>
    </div>
  </div>
</div>
```

The following example uses the `group` role with a drop-down [`menu`](

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">Inbox</li>
    <li role="menuitem">Archive</li>
    <li role="menuitem">Trash</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Custom Folder 1</li>
    <li role="menuitem">Custom Folder 2</li>
    <li role="menuitem">Custom Folder 3</li>
  </ul>
  <ul role="group">
    <li role="menuitem">New Folder</li>
  </ul>
</div>
```

This menu could be constructed using {{HTMLElement('select')}} and {{HTMLElement('option')}} elements. In this case, the `group` role would be most similar to the {{HTMLElement('optgroup')}} element.

## Specifications



## See also

- The {{HTMLElement('fieldset')}} Element
- [ARIA: `section` role](
- [ARIA: `row` role](
- [ARIA: `select` role](
- [ARIA: `toolbar` role](
