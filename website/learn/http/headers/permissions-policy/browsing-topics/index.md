---
title: "Permissions-Policy: browsing-topics"
slug: Web/HTTP/Headers/Permissions-Policy/browsing-topics
page-type: http-permissions-policy-directive
status:
  - experimental
  - non-standard
browser-compat: http.headers.Permissions-Policy.browsing-topics
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `browsing-topics` directive controls access to the [Topics API](/Web/API/Topics_API).

Where a policy specifically disallows the use of the Topics API, any attempts to call the {{domxref("Document.browsingTopics()")}} method or send a request with a {{httpheader("Sec-Browsing-Topics")}} header will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `browsing-topics` is `*`.

## Specifications

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

## Browser compatibility



## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
- [Topics API](/Web/API/Topics_API)
- {{domxref("Document.browsingTopics()")}}
