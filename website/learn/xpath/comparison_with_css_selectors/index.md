---
title: Comparison of CSS Selectors and XPath
slug: Web/XPath/Comparison_with_CSS_selectors
page-type: guide
---



This article seeks to document the difference between CSS Selectors and XPath for web developers to be able to better choose the right tool for the right job.

| [XPath feature](/Web/XPath)                                                                                                                                       | [CSS equivalent](/Web/CSS/CSS_selectors)                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`ancestor`](/Web/XPath/Axes#ancestor), [`parent`](/Web/XPath/Axes#parent) or [`preceding-sibling`](/Web/XPath/Axes#preceding-sibling) axis | {{CSSxRef(":has",":has()")}} selector                                                                                                                        |
| [`attribute`](/Web/XPath/Axes#attribute) axis                                                                                                                     | [Attribute selectors](/Web/CSS/Attribute_selectors)                                                                                               |
| [`child`](/Web/XPath/Axes#child) axis                                                                                                                             | [Child combinator](/Web/CSS/Child_combinator)                                                                                                     |
| [`descendant`](/Web/XPath/Axes#descendant) axis                                                                                                                   | [Descendant combinator](/Web/CSS/Descendant_combinator)                                                                                           |
| [`following-sibling`](/Web/XPath/Axes#following-sibling) axis                                                                                                     | [Subsequent-sibling combinator](/Web/CSS/Subsequent-sibling_combinator) or [Next-sibling combinator](/Web/CSS/Next-sibling_combinator) |
| [`self`](/Web/XPath/Axes#self) axis                                                                                                                               | {{CSSxRef(":scope")}} or {{CSSxRef(":host")}} selector                                                                                                       |
