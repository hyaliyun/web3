---
title: Practical security implementation guides
slug: Web/Security/Practical_implementation_guides
page-type: guide
---



Users frequently input sensitive data on websites, such as names, addresses, passwords, and banking details. As a web developer, it's crucial to protect this information from bad actors who use a wide range of exploits to steal such information and use it for personal gain. The focus of [web security](/Web/Security) is to help you protect your website against these exploits and secure your users' sensitive data.

This page lists guides that detail the best practices for implementing security features on websites. While these guides do not cover all possible security scenarios and cannot guarantee complete security of your website, following the information and best practices in these guides will make your sites significantly more secure.

## Content security fundamentals

Most of these guides are directly related to the [HTTP Observatory](/en-US/observatory) tool. Observatory performs security audits on a website and provides a grade and score along with recommendations for fixing the security issues it finds. These guides explain how to resolve issues surfaced by the HTTP Observatory tests: the tool links to the relevant guide for each issue, helping guide you towards an effective resolution. Interestingly, Mozilla's internal developer teams use this guidance when implementing websites to ensure that security best practices are applied.

The guides in the table below are listed in the order that we recommend implementing the security features they describe. This order is based on a combination of each feature's security impact and the ease of its implementation from both operational and developmental perspectives. The table provides information about each feature's impact, difficulty of implementation, whether or not it is required, and a brief description.

| Guide                                                                                                                                  | Impact  | Difficulty | Required | Description                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TLS configuration](/Web/Security/Practical_implementation_guides/TLS#tls_configuration)                                    | Medium  | Medium     | Yes      | Use the most secure [Transport Layer Security](/Glossary/TLS) (TLS) configuration available for your user base.                                                                  |
| TLS: [Resource loading](/Web/Security/Practical_implementation_guides/TLS#resource_loading)                                 | Maximum | Low        | Yes      | Load both passive and active resources via HTTPS.                                                                                                                                           |
| TLS: [HTTP redirection](/Web/Security/Practical_implementation_guides/TLS#http_redirection)                                 | Maximum | Low        | Yes      | Websites must redirect to HTTPS; API endpoints should disable HTTP entirely.                                                                                                                |
| TLS: [HSTS implementation](/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) | High    | Low        | Yes      | Notify user agents to connect to sites only over HTTPS, even if the original scheme chosen was HTTP, by using HTTP Strict transport security (HSTS).                                        |
| [Clickjacking prevention](/Web/Security/Practical_implementation_guides/Clickjacking)                                       | High    | Low        | Yes      | Control how your site may be framed within an {{htmlelement("iframe")}} to prevent [clickjacking](/Glossary/Clickjacking).                                                       |
| [CSRF prevention](/Web/Security/Practical_implementation_guides/CSRF_prevention)                                            | High    | Unknown    | Varies   | Protect against [Cross-site request forgery](/Glossary/CSRF) (CSRF) using `SameSite` cookies and anti-CSRF tokens.                                                               |
| [Secure cookie configuration](/Web/Security/Practical_implementation_guides/Cookies)                                        | High    | Medium     | Yes      | Set all cookies as restrictively as possible.                                                                                                                                               |
| [CORP implementation](/Web/Security/Practical_implementation_guides/CORP)                                                   | High    | Medium     | Yes      | Protect against speculative side-channel attacks by using Cross-Origin Resource Policy (CORP).                                                                                              |
| [MIME type verification](/Web/Security/Practical_implementation_guides/MIME_types)                                          | Low     | Low        | No       | Verify that all your websites are setting the proper [MIME types](/Glossary/MIME_type) for all resources.                                                                        |
| [CSP implementation](/Web/Security/Practical_implementation_guides/CSP)                                                     | High    | High       | Yes      | Provide fine-grained control over where site resources can be loaded from with [Content Security Policy](/Glossary/CSP) (CSP).                                                   |
| [CORS configuration](/Web/Security/Practical_implementation_guides/CORS)                                                    | High    | Low        | Yes      | Define the non-same origins that are allowed to access the content of pages and have resources loaded from them by using [Cross-Origin Resource Sharing](/Glossary/CORS) (CORS). |
| [Referrer policy configuration](/Web/Security/Practical_implementation_guides/Referrer_policy)                              | Low     | Low        | Yes      | Improve privacy for users and prevent leaking of internal URLs via the {{httpheader("Referer")}} header.                                                                                    |
| [robots.txt configuration](/Web/Security/Practical_implementation_guides/Robots_txt)                                        | Low     | Low        | No       | Tell robots (such as search engine indexers) how to behave by instructing them not to crawl certain paths on the website.                                                                   |
| [SRI implementation](/Web/Security/Practical_implementation_guides/SRI)                                                     | Low     | Low        | No       | Verify that fetched resources (for example, from a CDN) are delivered without unexpected manipulation by using [Subresource Integrity](/Glossary/SRI) (SRI).                     |

## User information security

- [How to turn off form autocompletion](/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
  - : Form fields support autocompletion; that is, their values can be remembered and automatically filled out next time a user visits your site. For certain types of data, you may wish to disable this feature; this article explains how.

## See also

- [Open Web Application Security Project (OWASP): Cheatsheet series](https://cheatsheetseries.owasp.org/)
- [OWASP: Attacks](https://owasp.org/www-community/attacks/)
