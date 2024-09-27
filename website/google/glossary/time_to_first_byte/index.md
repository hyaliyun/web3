---
title: Time to first byte
slug: Glossary/Time_to_first_byte
page-type: glossary-definition
---



**Time to First Byte** (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server. This time includes {{Glossary("DNS")}} lookup and establishing the connection using a {{Glossary("TCP")}} handshake and {{Glossary("TLS")}} handshake if the request is made over {{Glossary("HTTPS")}}.

TTFB is the time it takes between the start of the request and the start of the response, in milliseconds:

```plain
TTFB = responseStart - navigationStart
```

## See also

- [A typical HTTP session](/Web/HTTP/Session)
- [PerformanceResourceTiming](/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/Web/API/PerformanceTiming)
