---
title: tabs.printPreview()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/printPreview
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.printPreview
---



Opens print preview for the active tab.

This is an asynchronous function that returns a [`Promise`](/Web/JavaScript/Reference/Global_Objects/Promise). An extension can detect when print preview has been closed by listening to the [afterprint](/Web/API/Window/afterprint_event) event:

```js
window.addEventListener("afterprint", resumeFunction, false);
```

## Syntax

```js-nolint
let openingPreview = browser.tabs.printPreview()
```

### Parameters

None.

### Return value

A [`Promise`](/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the preview page has opened.

## Examples

In this example a background script listens for a click on a [browser action](/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), then opens print preview for the currently active tab:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.printPreview().then(() => {
    console.log("Entered print preview");
  });
});
```



## Browser compatibility


