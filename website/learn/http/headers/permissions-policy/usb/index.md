---
title: "Permissions-Policy: usb"
slug: Web/HTTP/Headers/Permissions-Policy/usb
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.usb
---

 {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `usb` directive controls whether the current document is allowed to use the {{domxref("WebUSB API", "WebUSB API", "", "nocode")}}.

Specifically, where a defined policy blocks WebHID usage, the {{domxref("Navigator.usb")}} property will not be available.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `usb` is `self`.

## Specifications



## Browser compatibility



## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
