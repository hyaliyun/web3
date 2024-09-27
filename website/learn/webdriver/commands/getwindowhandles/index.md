---
title: Get Window Handles
slug: Web/WebDriver/Commands/GetWindowHandles
page-type: webdriver-command
browser-compat: webdriver.commands.GetWindowHandles
---



The _Get Window Handles_ [command](/Web/WebDriver/Command) of the [WebDriver](/Web/WebDriver) API returns a list of all [`WebWindow`](/Web/WebDriver/WebWindow)s. Each tab or window, depending on whether you are using a tabbed browser, is associated by a _window handle_ that is used as a reference when [switching to the window](/Web/WebDriver/Commands/SwitchToWindow).

In order to determine whether or not a particular interaction with the browser opens a new window, one can obtain the set of window handles before the interaction is performed and compare it with the set after the action is performed.

## Syntax

| Method                                    | URI template                           |
| ----------------------------------------- | -------------------------------------- |
| [`GET`](/Web/HTTP/Methods/GET) | `/session/{session id}/window/handles` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- Invalid session ID
  - : Session does not exist.

## Example

C#:

```cpp
using System.Collections.ObjectModel;
using OpenQA.Selenium.Firefox;

namespace MDNWebDriverExamples
{
    class Example
    {
        public static void Main(string[] args)
        {
            FirefoxDriver session = new FirefoxDriver();

            session.ExecuteScript("window.open()");

            ReadOnlyCollection<string> currentWindowHandles = session.WindowHandles;
        }
    }
}
```

## Specifications



## Browser compatibility



## See also

- [Switch To Window](/Web/WebDriver/Commands/SwitchToWindow) command
- [Get Window Handle](/Web/WebDriver/Commands/GetWindowHandle) command
- [Close Window](/Web/WebDriver/Commands/CloseWindow) command
