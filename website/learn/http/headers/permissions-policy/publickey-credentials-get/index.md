---
title: "Permissions-Policy: publickey-credentials-get"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permissions-Policy.publickey-credentials-get
---



The HTTP {{HTTPHeader("Permissions-Policy")}} header `publickey-credentials-get` directive controls whether the current document is allowed to access the [Web Authentication API](/Web/API/Web_Authentication_API) to retrieve public-key credentials, i.e., via {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey})")}}.

Specifically, where a defined policy blocks the use of this feature, the {{jsxref("Promise")}} returned by `navigator.credentials.get({publicKey})` will reject with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: publickey-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `publickey-credentials-get` is `self`.

## Specifications



## Browser compatibility



## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/Web/API/Web_Authentication_API)
- {{DOMxRef("PublicKeyCredential")}} interface
