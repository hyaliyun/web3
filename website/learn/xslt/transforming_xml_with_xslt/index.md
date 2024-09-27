---
title: Transforming XML with XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
page-type: guide
---



## An Overview

[An Overview](/Web/XSLT/Transforming_XML_with_XSLT/An_Overview)

The separation of content and presentation is a key design feature of [XML](/Web/XML). The structure of an XML document is designed to reflect and clarify important relationships among the individual aspects of the content itself, unhindered by a need to provide any indication about how this data should eventually be presented. This intelligent structuring is particularly important as more and more data transfers are automated and take place between highly heterogeneous machines linked by a network.

Yet eventually much of the content stored in XML documents will need to be presented to human readers. Because a browser provides a familiar and highly flexible interface, it is an ideal mechanism for delivering such presentation versions of XML content. Built from the ground up utilizing a wide variety of XML technologies, Firefox incorporates within itself all of the mechanisms needed to process both original XML documents and the specialized stylesheets used to style and lay them out for HTML display, reducing server load with client-side processing.

At present, Gecko (the layout engine behind Firefox) supports two forms of XML stylesheets. For basic control of appearance — fonts, colors, position, and so forth — Gecko uses [CSS](/Web/CSS).

Our focus here is on the second type of stylesheet that Gecko supports: the XSLT stylesheet. XSLT stands for eXtensible Stylesheet Language/Transform and the name is apt. XSLT allows a stylesheet author to transform a primary XML document in two significant ways: manipulating and sorting the content, including a wholesale reordering of it if so desired, and transforming the content into a different format (and in the case of Firefox, the focus is on converting it on the fly into HTML which can then be displayed by the browser).

## XSLT/XPath reference

### Elements

[Elements](/Web/XSLT/Element)

- [xsl:apply-imports](/Web/XSLT/Element/apply-imports) _(supported)_
- [xsl:apply-templates](/Web/XSLT/Element/apply-templates) _(supported)_
- [xsl:attribute](/Web/XSLT/Element/attribute) _(supported)_
- [xsl:attribute-set](/Web/XSLT/Element/attribute-set) _(supported)_
- [xsl:call-template](/Web/XSLT/Element/call-template) _(supported)_
- [xsl:choose](/Web/XSLT/Element/choose) _(supported)_
- [xsl:comment](/Web/XSLT/Element/comment) _(supported)_
- [xsl:copy](/Web/XSLT/Element/copy) _(supported)_
- [xsl:copy-of](/Web/XSLT/Element/copy-of) _(supported)_
- [xsl:decimal-format](/Web/XSLT/Element/decimal-format) _(supported)_
- [xsl:element](/Web/XSLT/Element/element) _(supported)_
- [xsl:fallback](/Web/XSLT/Element/fallback) _(not supported)_
- [xsl:for-each](/Web/XSLT/Element/for-each) _(supported)_
- [xsl:if](/Web/XSLT/Element/if) _(supported)_
- [xsl:import](/Web/XSLT/Element/import) _(mostly supported)_
- [xsl:include](/Web/XSLT/Element/include) _(supported)_
- [xsl:key](/Web/XSLT/Element/key) _(supported)_
- [xsl:message](/Web/XSLT/Element/message) _(supported)_
- [xsl:namespace-alias](/Web/XSLT/Element/namespace-alias) _(not supported)_
- [xsl:number](/Web/XSLT/Element/number) _(partially supported)_
- [xsl:otherwise](/Web/XSLT/Element/otherwise) _(supported)_
- [xsl:output](/Web/XSLT/Element/output) _(partially supported)_
- [xsl:param](/Web/XSLT/Element/param) _(supported)_
- [xsl:preserve-space](/Web/XSLT/Element/preserve-space) _(supported)_
- [xsl:processing-instruction](/Web/XSLT/Element/processing-instruction)
- [xsl:sort](/Web/XSLT/Element/sort) _(supported)_
- [xsl:strip-space](/Web/XSLT/Element/strip-space) _(supported)_
- [xsl:stylesheet](/Web/XSLT/Element/stylesheet) _(partially supported)_
- [xsl:template](/Web/XSLT/Element/template) _(supported)_
- [xsl:text](/Web/XSLT/Element/text) _(partially supported)_
- [xsl:transform](/Web/XSLT/Element/transform) _(supported)_
- [xsl:value-of](/Web/XSLT/Element/value-of) _(partially supported)_
- [xsl:variable](/Web/XSLT/Element/variable) _(supported)_
- [xsl:when](/Web/XSLT/Element/when) _(supported)_
- [xsl:with-param](/Web/XSLT/Element/with-param) _(supported)_

### Axes

[Axes](/Web/XPath/Axes)

- [ancestor](/Web/XPath/Axes#ancestor)
- [ancestor-or-self](/Web/XPath/Axes#ancestor-or-self)
- [attribute](/Web/XPath/Axes#attribute)
- [child](/Web/XPath/Axes#child)
- [descendant](/Web/XPath/Axes#descendant)
- [descendant-or-self](/Web/XPath/Axes#descendant-or-self)
- [following](/Web/XPath/Axes#following)
- [following-sibling](/Web/XPath/Axes#following-sibling)
- [namespace](/Web/XPath/Axes#namespace) _(not supported)_
- [parent](/Web/XPath/Axes#parent)
- [preceding](/Web/XPath/Axes#preceding)
- [preceding-sibling](/Web/XPath/Axes#preceding-sibling)
- [self](/Web/XPath/Axes#self)

### Functions

[Functions](/Web/XPath/Functions)

- [boolean()](/Web/XPath/Functions/boolean) _(supported)_
- [ceiling()](/Web/XPath/Functions/ceiling) _(supported)_
- [concat()](/Web/XPath/Functions/concat) _(supported)_
- [contains()](/Web/XPath/Functions/contains) _(supported)_
- [count()](/Web/XPath/Functions/count) _(supported)_
- [current()](/Web/XPath/Functions/current) _(supported)_
- [document()](/Web/XPath/Functions/document) _(supported)_
- [element-available()](/Web/XPath/Functions/element-available) _(supported)_
- [false()](/Web/XPath/Functions/false) _(supported)_
- [floor()](/Web/XPath/Functions/floor) _(supported)_
- [format-number()](/Web/XPath/Functions/format-number) _(supported)_
- [function-available()](/Web/XPath/Functions/function-available) _(supported)_
- [generate-id()](/Web/XPath/Functions/generate-id) _(supported)_
- [id()](/Web/XPath/Functions/id) _(partially supported)_
- [key()](/Web/XPath/Functions/key) _(supported)_
- [lang()](/Web/XPath/Functions/lang) _(supported)_
- [last()](/Web/XPath/Functions/last) _(supported)_
- [local-name()](/Web/XPath/Functions/local-name) _(supported)_
- [name()](/Web/XPath/Functions/name) _(supported)_
- [namespace-uri()](/Web/XPath/Functions/namespace-uri) _(supported)_
- [normalize-space()](/Web/XPath/Functions/normalize-space) _(supported)_
- [not()](/Web/XPath/Functions/not) _(supported)_
- [number()](/Web/XPath/Functions/number) _(supported)_
- [position()](/Web/XPath/Functions/position) _(supported)_
- [round()](/Web/XPath/Functions/round) _(supported)_
- [starts-with()](/Web/XPath/Functions/starts-with) _(supported)_
- [string()](/Web/XPath/Functions/string) _(supported)_
- [string-length()](/Web/XPath/Functions/string-length) _(supported)_
- [substring()](/Web/XPath/Functions/substring) _(supported)_
- [substring-after()](/Web/XPath/Functions/substring-after) _(supported)_
- [substring-before()](/Web/XPath/Functions/substring-before) _(supported)_
- [sum()](/Web/XPath/Functions/sum) _(supported)_
- [system-property()](/Web/XPath/Functions/system-property) _(supported)_
- [translate()](/Web/XPath/Functions/translate) _(supported)_
- [true()](/Web/XPath/Functions/true) _(supported)_
- [unparsed-entity-url()](/Web/XPath/Functions/unparsed-entity-url) _(not supported)_

## For Further Reading

[For Further Reading](/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading)

- [Books](/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#books)
- [Digital](/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#digital)

  - [Websites](/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#websites)
  - [Articles](/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#articles)
  - [Tutorials/Examples](/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#tutorialsexamples)
  - [Other](/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#other)

## Original Document Information

- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.
