---
title: Set Timeouts
slug: Web/WebDriver/Commands/SetTimeouts
page-type: webdriver-command
browser-compat: webdriver.commands.SetTimeouts
---



The _Set Timeouts_ [command](/Web/WebDriver/Commands) of the [WebDriver](/Web/WebDriver) API sets the timeouts associated with the current session. The [session timeout](/Web/WebDriver/Timeouts) durations control such behavior as timeouts on [script injection](/Web/WebDriver/Timeouts#script), [document navigation](/Web/WebDriver/Timeouts#pageload), and [element retrieval](/Web/WebDriver/Timeouts#implicit).

## Syntax

| Method                                     | URI template                     |
| ------------------------------------------ | -------------------------------- |
| [`POST`](/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is a [`Timeouts`](/Web/WebDriver/Timeouts) object:

- `implicit`
  - : Time in milliseconds to retry the [element location strategy](/Web/WebDriver/WebElement) when finding an element. This defaults to 0, meaning the strategy is run only once.
- `pageLoad`
  - : Time in milliseconds to wait for the document to finish loading. By default, WebDriver will wait five minutes (or 300,000 ms).
- `script`
  - : Scripts injected with [Execute Script](/Web/WebDriver/Commands/ExecuteScript) or [Execute Async Script](/Web/WebDriver/Commands/ExecuteAsyncScript) will run until they hit the script timeout duration, which is also given in milliseconds. The scripts will then be interrupted and a [script timeout error](/Web/WebDriver/Errors/ScriptTimeoutError) will be returned. Defaults to 30 seconds (or 30,000 ms).

### Errors

- [Invalid session ID](/Web/WebDriver/Errors/InvalidSessionID)
  - : Session does not exist.

## Specifications



## Browser compatibility



## See also

- [`Timeouts`](/Web/WebDriver/Timeouts) object
- [List of WebDriver commands](/Web/WebDriver/Commands)
