---
title: "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
page-type: http-cors-error
---



## Reason

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## What went wrong?

More than one {{HTTPHeader("Access-Control-Allow-Origin")}} header was sent by the
server. This isn't allowed.

If you have access to the server you can change your implementation to echo back an
origin in the `Access-Control-Allow-Origin` header. You cannot send back a
list of origins, because browsers only accept a value that is either a single origin or
null

## See also

- [CORS errors](/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/Web/HTTP/CORS)
- [Enable CORS: I want to add CORS support to my server](https://enable-cors.org/server.html)
