---
title: Caret
slug: Glossary/Caret
page-type: glossary-definition
---



A **caret** (sometimes called a "text cursor") is an indicator displayed on the screen to indicate where text input will be inserted.

Most user interfaces represent the caret using a thin vertical line or a character-sized box that flashes, but this can vary. This point in the text is called the **insertion point**. The word "caret" differentiates the text insertion point from the mouse cursor.

On the web, a caret is used to represent the insertion point in  and {{HTMLElement("textarea")}} elements, as well as any elements whose [`contenteditable`](/Web/HTML/Global_attributes#contenteditable) attribute is set, thereby allowing the contents of the element to be edited by the user.

## See also

- [Caret navigation](https://en.wikipedia.org/wiki/Caret_navigation) on Wikipedia

### CSS related to the caret

You can set the color of the caret for a given element's editable content by setting the element's CSS {{cssxref("caret-color")}} property to the appropriate  value.

### HTML elements that may present a caret

These elements provide text entry fields or boxes and therefore make use of the caret.

- [`<input type="text">`](/Web/HTML/Element/input/text)
- [`<input type="password">`](/Web/HTML/Element/input/password)
- [`<input type="search">`](/Web/HTML/Element/input/search)
- [`<input type="date">`](/Web/HTML/Element/input/date), [`<input type="time">`](/Web/HTML/Element/input/time), and [`<input type="datetime-local">`](/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/Web/HTML/Element/input/number), [`<input type="range">`](/Web/HTML/Element/input/range)
- [`<input type="email">`](/Web/HTML/Element/input/email), [`<input type="tel">`](/Web/HTML/Element/input/tel), and [`<input type="url">`](/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- Any element with its [`contenteditable`](/Web/HTML/Global_attributes#contenteditable) attribute set
