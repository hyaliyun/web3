---
title: "Permissions-Policy: display-capture"
slug: Web/HTTP/Headers/Permissions-Policy/display-capture
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permissions-Policy.display-capture
---



The HTTP {{HTTPHeader("Permissions-Policy")}} header `display-capture` directive controls whether or not the document is permitted to use [Screen Capture API](/Web/API/Screen_Capture_API), that is, {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} to capture the screen's contents.

If `display-capture` is disabled in a document, the document will not be able to initiate screen capture via {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} and will throw a `NotAllowedError` exception.

## Syntax

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `display-capture` is `self`.

## Specifications



## Browser compatibility



## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
- [Screen Capture API](/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/Web/API/Screen_Capture_API/Using_Screen_Capture)
