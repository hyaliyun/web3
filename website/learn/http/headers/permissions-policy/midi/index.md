---
title: "Permissions-Policy: midi"
slug: Web/HTTP/Headers/Permissions-Policy/midi
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.midi
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `midi` directive controls whether the current document is allowed to use the [Web MIDI API](/Web/API/Web_MIDI_API).

Specifically, where a defined policy blocks use of this feature, {{domxref("Navigator.requestMIDIAccess()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: midi=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `midi` is `self`.

## Specifications



## Browser compatibility



## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
