---
title: "Permissions-Policy: attribution-reporting"
slug: Web/HTTP/Headers/Permissions-Policy/attribution-reporting
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.attribution-reporting
---

 {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `attribution-reporting` directive controls whether the current document is allowed to use the [Attribution Reporting API](/Web/API/Attribution_Reporting_API).

Specifically, where a defined policy blocks the use of this feature:

- Background `attributionsrc` requests won't be made.
- The {{domxref("XMLHttpRequest.setAttributionReporting()")}} method will throw an exception when called.
- The [`attributionReporting`](/Web/API/RequestInit#attributionreporting) option, when included on a {{domxref("Window/fetch", "fetch()")}} call, will cause it to throw an exception.
- Registration headers ({{httpheader("Attribution-Reporting-Register-Source")}} and {{httpheader("Attribution-Reporting-Register-Trigger")}}) in HTTP responses on associated documents will be ignored.

## Syntax

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `attribution-reporting` is `*`.

## Specifications



## Browser compatibility



## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/Web/HTTP/Permissions_Policy)
- [Attribution Reporting API](/Web/API/Attribution_Reporting_API)
