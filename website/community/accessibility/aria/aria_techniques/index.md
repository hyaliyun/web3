---
title: "Using ARIA: Roles, states, and properties"
slug: Web/Accessibility/ARIA/ARIA_Techniques
page-type: guide
---



ARIA defines semantics that can be applied to elements, with these divided into **roles** (defining a type of user interface element) and **states** and **properties** that are supported by a role. Authors must assign an ARIA role and the appropriate states and properties to an element during its life-cycle, unless the element already has appropriate ARIA semantics (via use of an appropriate HTML element). Addition of ARIA semantics only exposes extra information to a browser's accessibility API, and does not affect a page's DOM.

## Roles

### Widget roles

- [`button`](/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`gridcell`](/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/Web/Accessibility/ARIA/Roles/option_role)
- [`progressbar`](/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`radio`](/Web/Accessibility/ARIA/Roles/radio_role)
- [`scrollbar`](/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`searchbox`](/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`separator`](/Web/Accessibility/ARIA/Roles/separator_role) (when focusable)
- [`slider`](/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/Web/Accessibility/ARIA/Roles/switch_role)
- [`tab`](/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel`](/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [`textbox`](/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/Web/Accessibility/ARIA/Roles/treeitem_role)

### Composite roles

The techniques below describe each composite role as well as their required and optional child roles.

- [`combobox`](/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/Web/Accessibility/ARIA/Roles/grid_role) (including [`row`](/Web/Accessibility/ARIA/Roles/row_role), [`gridcell`](/Web/Accessibility/ARIA/Roles/gridcell_role), [`rowheader`](/Web/Accessibility/ARIA/Roles/rowheader_role), [`columnheader`](/Web/Accessibility/ARIA/Roles/columnheader_role) roles)
- [`listbox`](/Web/Accessibility/ARIA/Roles/listbox_role) (including [`option`](/Web/Accessibility/ARIA/Roles/option_role) role)
- [`menu`](/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/Web/Accessibility/ARIA/Roles/radiogroup_role) (see [`radio` role](/Web/Accessibility/ARIA/Roles/radio_role))
- [`tablist`](/Web/Accessibility/ARIA/Roles/tablist_role) (including [`tab`](/Web/Accessibility/ARIA/Roles/tab_role) and [`tabpanel`](/Web/Accessibility/ARIA/Roles/tabpanel_role) roles)
- [`tree`](/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/Web/Accessibility/ARIA/Roles/treegrid_role)

### Document structure roles

- [`application`](/Web/Accessibility/ARIA/Roles/application_role)
- [`article`](/Web/Accessibility/ARIA/Roles/article_role)
- [`cell`](/Web/Accessibility/ARIA/Roles/cell_role)
- [`columnheader`](/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`definition`](/Web/Accessibility/ARIA/Roles/definition_role)
- [`directory`](/Web/Accessibility/ARIA/Roles/directory_role)
- [`document`](/Web/Accessibility/ARIA/Roles/document_role)
- [`feed`](/Web/Accessibility/ARIA/Roles/feed_role)
- [`figure`](/Web/Accessibility/ARIA/Roles/figure_role)
- [`group`](/Web/Accessibility/ARIA/Roles/group_role)
- [`heading`](/Web/Accessibility/ARIA/Roles/heading_role)
- [`img`](/Web/Accessibility/ARIA/Roles/img_role)
- [`list`](/Web/Accessibility/ARIA/Roles/list_role)
- [`listitem`](/Web/Accessibility/ARIA/Roles/listitem_role)
- [`math`](/Web/Accessibility/ARIA/Roles/math_role)
- [`none`](/Web/Accessibility/ARIA/Roles/none_role)
- [`note`](/Web/Accessibility/ARIA/Roles/note_role)
- [`presentation`](/Web/Accessibility/ARIA/Roles/presentation_role)
- [`row`](/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup`](/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [`rowheader`](/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`separator`](/Web/Accessibility/ARIA/Roles/separator_role)
- [`table`](/Web/Accessibility/ARIA/Roles/table_role)
- [`term`](/Web/Accessibility/ARIA/Roles/term_role)
- [`toolbar`](/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tooltip`](/Web/Accessibility/ARIA/Roles/tooltip_role)

### Landmark roles

- [`banner`](/Web/Accessibility/ARIA/Roles/banner_role)
- [`complementary`](/Web/Accessibility/ARIA/Roles/complementary_role)
- [`contentinfo`](/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [`form`](/Web/Accessibility/ARIA/Roles/form_role)
- [`main`](/Web/Accessibility/ARIA/Roles/main_role)
- [`navigation`](/Web/Accessibility/ARIA/Roles/navigation_role)
- [`region`](/Web/Accessibility/ARIA/Roles/region_role)
- [`search`](/Web/Accessibility/ARIA/Roles/search_role)

### Live Region Roles

- [`alert`](/Web/Accessibility/ARIA/Roles/alert_role)
- [`log`](/Web/Accessibility/ARIA/Roles/log_role)
- [`marquee`](/Web/Accessibility/ARIA/Roles/marquee_role)
- [`status`](/Web/Accessibility/ARIA/Roles/status_role)
- [`timer`](/Web/Accessibility/ARIA/Roles/timer_role)

### Window Roles

- [`alertdialog`](/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/Web/Accessibility/ARIA/Roles/dialog_role)

## States and properties

### Widget attributes

- [`aria-autocomplete`](/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [`aria-checked`](/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-current`](/Web/Accessibility/ARIA/Attributes/aria-current)
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

### Live region attributes

- [`aria-live`](/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/Web/Accessibility/ARIA/Attributes/aria-busy)

### Drag &amp; drop attributes

- [`aria-dropeffect`](/Web/Accessibility/ARIA/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/Web/Accessibility/ARIA/Attributes/aria-grabbed) {{deprecated_inline}}

### Relationship attributes

- [`aria-activedescendant`](/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- [`aria-colcount`](/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`aria-colindex`](/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-colspan`](/Web/Accessibility/ARIA/Attributes/aria-colspan)
- [`aria-controls`](/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-describedby`](/Web/Accessibility/ARIA/Attributes/aria-describedby)
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

### MicrosoftEdge-specific properties

- `x-ms-aria-flowfrom` {{Non-standard_Inline}}
