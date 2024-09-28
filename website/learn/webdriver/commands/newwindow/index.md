---
title: New Window
slug: Web/WebDriver/Commands/NewWindow
page-type: webdriver-command
browser-compat: webdriver.commands.NewWindow
---



The _New Window_ [command](/Web/WebDriver/Commands) of the [WebDriver](/Web/WebDriver) API opens a new top-level browsing context of type _window_ or _tab_, and returns with a dictionary containing the _handle_ of the new [WebWindow](/Web/WebDriver/WebWindow) and its created _type_. If the requested _type_ cannot be created by the browser, the alternative type will be tried to create.

## Syntax

| Method                                        | URI template                       |
| --------------------------------------------- | ---------------------------------- |
| [`POST`](/Web/HTTP/Methods/DELETE) | `/session/{session id}/window/new` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is an object:

- `type`
  - : Requested type of top-level browsing context.

### Response

The response payload is an object:

- handle
  - : The handle of the new [WebWindow](/Web/WebDriver/WebWindow).
- type
  - : The created type of top-level browsing context.

### Errors

- [Invalid session ID](/Web/WebDriver/Errors/InvalidSessionID)
  - : Session does not exist.
- [No such window](/Web/WebDriver/Errors/NoSuchWindow)
  - : If the [`window`](/Web/API/Window) has been closed.
- [Unexpected alert open](/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : A user prompt, such as [`window.alert`](/Web/API/Window/alert), blocks execution of command until it is dealt with.
- [Unsupported Operation](/Web/WebDriver/Errors/UnsupportedOperation)
  - : The driver or browser doesn't support the command for some reason (e.g., when it is not possible to create a new tab or window).

## Example

## Specifications



## Browser compatibility



## See also

- [Close Window](/Web/WebDriver/Commands/CloseWindow) command
