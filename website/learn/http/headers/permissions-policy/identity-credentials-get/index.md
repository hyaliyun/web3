---
title: "Permissions-Policy: identity-credentials-get"
slug: Web/HTTP/Headers/Permissions-Policy/identity-credentials-get
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.identity-credentials-get
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `identity-credentials-get` directive controls whether the current document is allowed to use the [Federated Credential Management API (FedCM)](/Web/API/FedCM_API), and more specifically the {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} method with an `identity` option.

Where this policy forbids use of the API, the {{jsxref("Promise")}} returned by the `get()` call will reject with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: identity-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `identity-credentials-get` is `self`.

## Specifications



## Browser compatibility



## See also

- [Federated Credential Management API (FedCM)](/Web/API/FedCM_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
