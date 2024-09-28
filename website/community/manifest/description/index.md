---
title: description
slug: Web/Manifest/description
page-type: web-manifest-member
browser-compat: html.manifest.description
---



The `description` member is a string in which developers can explain what the application does. `description` is directionality-capable, which means it can be displayed left to right or right to left based on the values of the [`dir`](/Web/Manifest) and [`lang`](/Web/Manifest) manifest members.

## Examples

Simple `description` in left-to-right language:

```json
"description": "Awesome application that will help you achieve your dreams."
```

`description` in Arabic, which will be displayed right-to-left:

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## Specifications



## Browser compatibility


