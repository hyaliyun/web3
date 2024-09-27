---
title: "Permissions-Policy: magnetometer"
slug: Web/HTTP/Headers/Permissions-Policy/magnetometer
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.magnetometer
---

 {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `magnetometer` directive controls whether the current document is allowed to gather information about the orientation of the device through the {{domxref("Magnetometer")}} interface.

Specifically, where a defined policy blocks use of this feature, {{domxref("Magnetometer.Magnetometer", "Magnetometer()")}} constructor calls will throw a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `magnetometer` is `self`.

## Specifications



## Browser compatibility



## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
