---
title: "Permissions-Policy: screen-wake-lock"
slug: Web/HTTP/Headers/Permissions-Policy/screen-wake-lock
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permissions-Policy.screen-wake-lock
---



The HTTP {{HTTPHeader("Permissions-Policy")}} header **`screen-wake-lock`** directive controls whether the current document is allowed to use [Screen Wake Lock API](/Web/API/Screen_Wake_Lock_API) to indicate that the device should not dim or turn off the screen.

Specifically, where a defined policy blocks use of this feature, {{domxref("WakeLock.request()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `NotAllowedError`.

## Syntax

```http
Permissions-Policy: screen-wake-lock=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `screen-wake-lock` is `self`.

## Specifications



## Browser compatibility



## See also

- [Screen Wake Lock API](/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
