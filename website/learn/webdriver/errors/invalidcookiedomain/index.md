---
title: Invalid cookie domain
slug: Web/WebDriver/Errors/InvalidCookieDomain
page-type: webdriver-error
---

{{QuickLinksWithSubpages("/Web/WebDriver/Errors")}}

The **invalid cookie domain** error is a [WebDriver error](/Web/WebDriver/Errors) that occurs when an illegal attempt was made to set a [cookie](/Glossary/Cookie) under a different [domain](/Glossary/Domain) than that of the current document.

In WebDriver it is not permissible to set cookies for other domains than the domain of the [current browsing context](/Glossary/Browsing_context)'s [document](/Web/API/Document)'s domain.

This error will also happen if the document is _cookie-averse_, that is if the document is not loaded via `http://`, `https://`, or `ftp://`.

## Example

### Other domains

If the current domain were to be `example.com`, it would not be possible to [add a cookie](/Web/WebDriver/Commands/AddCookie) for the domain `example.org`:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
session.get("https://example.com/")
try:
    cookie = {"name": "foo",
              "value": "bar",
              "domain": "example.org"}
    session.add_cookie(cookie)
except exceptions.InvalidCookieDomainException as e:
    print(e.message)
```

Output:

```plain
InvalidCookieDomainException: https://example.org/
```

### Cookie-averse documents

This error may also occur when you visit a cookie-averse document, such as a file on your local disk:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
session.get("file:///home/jdoe/document.html")
try:
    foo_cookie = {"name": "foo", "value": "bar"}
    session.add_cookie(foo_cookie)
except exceptions.InvalidCookieDomainException as e:
    print(e.message)
```

Output:

```plain
InvalidCookieDomainException: Document is cookie-averse
```

## See also

- [List of WebDriver errors](/Web/WebDriver/Errors)
- Relevant WebDriver commands:

  - [Add Cookie](/Web/WebDriver/Commands/AddCookie)
  - [Delete Cookie](/Web/WebDriver/Commands/DeleteCookie)
  - [Delete All Cookies](/Web/WebDriver/Commands/DeleteAllCookies)
  - [Get All Cookies](/Web/WebDriver/Commands/GetAllCookies)
  - [Get Named Cookie](/Web/WebDriver/Commands/GetNamedCookie)
