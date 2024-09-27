---
title: XSLT elements reference
slug: Web/XSLT/Element
page-type: landing-page
---



There are two types of elements discussed here: top-level elements and instructions. A top-level element must appear as the child of either `<xsl:stylesheet>` or `<xsl:transform>`. An instruction, on the other hand, is associated with a template. A stylesheet may include several templates. A third type of element, not discussed here, is the literal result element (LRE). An LRE also appears in a template. It consists of any non-instruction element that should be copied as-is to the result document, for example, an `<hr>` element in an HTML conversion stylesheet.

On a related note, any attribute in an LRE and some attributes of a limited number of XSLT elements can also include what is known as an attribute value template. An attribute value template is a string that includes an embedded XPath expression which is used to specify the value of an attribute. At run-time the expression is evaluated and the result of the evaluation is substituted for the XPath expression. For example, assume that a variable `image-dir` is defined as follows:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

The expression to be evaluated is placed inside curly braces:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

This would result in the following:

```xml
<img src="/images/mygraphic.jpg"/>
```

The element annotations that follow include a description, a syntax listing, a list of required and optional attributes, a description of type and position, its source in the W3C Recommendation and an explanation of the degree of present Gecko support.

- [`<xsl:apply-imports>`](/Web/XSLT/Element/apply-imports)
- [`<xsl:apply-templates>`](/Web/XSLT/Element/apply-templates)
- [`<xsl:attribute>`](/Web/XSLT/Element/attribute)
- [`<xsl:attribute-set>`](/Web/XSLT/Element/attribute-set)
- [`<xsl:call-template>`](/Web/XSLT/Element/call-template)
- [`<xsl:choose>`](/Web/XSLT/Element/choose)
- [`<xsl:comment>`](/Web/XSLT/Element/comment)
- [`<xsl:copy>`](/Web/XSLT/Element/copy)
- [`<xsl:copy-of>`](/Web/XSLT/Element/copy-of)
- [`<xsl:decimal-format>`](/Web/XSLT/Element/decimal-format)
- [`<xsl:element>`](/Web/XSLT/Element/element)
- [`<xsl:fallback>`](/Web/XSLT/Element/fallback) _(not supported)_
- [`<xsl:for-each>`](/Web/XSLT/Element/for-each)
- [`<xsl:if>`](/Web/XSLT/Element/if)
- [`<xsl:import>`](/Web/XSLT/Element/import) _(mostly supported)_
- [`<xsl:include>`](/Web/XSLT/Element/include)
- [`<xsl:key>`](/Web/XSLT/Element/key)
- [`<xsl:message>`](/Web/XSLT/Element/message)
- [`<xsl:namespace-alias>`](/Web/XSLT/Element/namespace-alias) _(not supported)_
- [`<xsl:number>`](/Web/XSLT/Element/number) _(partially supported)_
- [`<xsl:otherwise>`](/Web/XSLT/Element/otherwise)
- [`<xsl:output>`](/Web/XSLT/Element/output) _(partially supported)_
- [`<xsl:param>`](/Web/XSLT/Element/param)
- [`<xsl:preserve-space>`](/Web/XSLT/Element/preserve-space)
- [`<xsl:processing-instruction>`](/Web/XSLT/Element/processing-instruction)
- [`<xsl:sort>`](/Web/XSLT/Element/sort)
- [`<xsl:strip-space>`](/Web/XSLT/Element/strip-space)
- [`<xsl:stylesheet>`](/Web/XSLT/Element/stylesheet) _(partially supported)_
- [`<xsl:template>`](/Web/XSLT/Element/template)
- [`<xsl:text>`](/Web/XSLT/Element/text) _(partially supported)_
- [`<xsl:transform>`](/Web/XSLT/Element/transform)
- [`<xsl:value-of>`](/Web/XSLT/Element/value-of) _(partially supported)_
- [`<xsl:variable>`](/Web/XSLT/Element/variable)
- [`<xsl:when>`](/Web/XSLT/Element/when)
- [`<xsl:with-param>`](/Web/XSLT/Element/with-param)
