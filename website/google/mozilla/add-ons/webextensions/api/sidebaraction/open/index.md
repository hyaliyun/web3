---
title: sidebarAction.open()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
page-type: webextension-api-function
browser-compat: webextensions.api.sidebarAction.open
---



Open the sidebar in the active window.

You can only call this function from inside the handler for a [user action](/Mozilla/Add-ons/WebExtensions/User_actions).

This is an asynchronous function that returns a [`Promise`](/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
browser.sidebarAction.open()
```

### Parameters

None.

### Return value

A [`Promise`](/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with no arguments.

## Browser compatibility



## Examples

Open the sidebar when the user selects a context menu item:

```js
browser.menus.create({
  id: "open-sidebar",
  title: "open sidebar",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.open();
});
```


