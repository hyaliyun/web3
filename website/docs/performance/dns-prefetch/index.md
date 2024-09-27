---
title: Using dns-prefetch
slug: Web/Performance/dns-prefetch
page-type: guide
---



**`DNS-prefetch`** is an attempt to resolve domain names before resources get requested. This could be a file loaded later or link target a user tries to follow.

## Why use dns-prefetch?

When a browser requests a resource from a (third party) server, that [cross-origin](/Web/HTTP/CORS)'s domain name must be resolved to an IP address before the browser can issue the request. This process is known as DNS resolution. While DNS caching can help to reduce this latency, DNS resolution can add significant latency to requests. For websites that open connections to many third parties, this latency can significantly reduce loading performance.

`dns-prefetch` helps developers mask DNS resolution latency. The [HTML `<link>` element](/Web/HTML/Element/link) offers this functionality by way of a [`rel` attribute](/Web/HTML/Attributes/rel) value of `dns-prefetch`. The [cross-origin](/Web/HTTP/CORS) domain is then specified in the [href attribute](/Web/HTML/Attributes):

## Syntax

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

## Examples

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
    <!-- and all other head elements -->
  </head>
  <body>
    <!-- your page content -->
  </body>
</html>
```

You should place `dns-prefetch` hints in the [`<head>` element](/Web/HTML/Element/head) any time your site references resources on cross-origin domains, but there are some things to keep in mind.

## Best practices

There are 3 main things to keep in mind:

**For one**, `dns-prefetch` is only effective for DNS lookups on [cross-origin](/Web/HTTP/CORS) domains, so avoid using it to point to your site or domain. This is because the IP behind your site's domain will have already been resolved by the time the browser sees the hint.

**Second**, it's also possible to specify `dns-prefetch` (and other resources hints) as an [HTTP header](/Web/HTTP/Headers) by using the [HTTP Link field](/Web/HTTP/Headers/Link):

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Third**, while `dns-prefetch` only performs a DNS lookup, [`preconnect`](/Web/HTML/Attributes/rel/preconnect) establishes a connection to a server. This process includes DNS resolution, as well as establishing the TCP connection, and performing the [TLS](/Glossary/TLS) handshake—if a site is served over HTTPS. Using `preconnect` provides an opportunity to further reduce the perceived latency of [cross-origin requests](/Web/HTTP/CORS). You can use it as an [HTTP header](/Web/HTTP/Headers) by using the [HTTP Link field](/Web/HTTP/Headers/Link):

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

or via the [HTML `<link>` element](/Web/HTML/Element/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> If a page needs to make connections to many third-party domains, preconnecting them all is counterproductive. The `preconnect` hint is best used for only the most critical connections. For the others, just use `<link rel="dns-prefetch">` to save time on the first step — the DNS lookup.

The logic behind pairing these hints is because support for dns-prefetch is better than support for preconnect. Browsers that don't support preconnect will still get some added benefit by falling back to dns-prefetch. Because this is an HTML feature, it is very fault-tolerant. If a non-supporting browser encounters a dns-prefetch hint—or any other resource hint—your site won't break. You just won't receive the benefits it provides.

Some resources such as fonts are loaded in anonymous mode. In such cases you should set the [crossorigin](/Web/HTML/Attributes/crossorigin) attribute with the preconnect hint. If you omit it, the browser will only perform the DNS lookup.

## See also

- [\<link>](/Web/HTML/Element/link)
- [HTML attribute: rel](/Web/HTML/Attributes/rel)
- [HTML rel attribute: preconnect](/Web/HTML/Attributes/rel/preconnect)
- [crossorigin](/Web/HTML/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/Web/HTTP/CORS)
- [HTTP headers](/Web/HTTP/Headers)
- [HTTP header Link](/Web/HTTP/Headers/Link)
