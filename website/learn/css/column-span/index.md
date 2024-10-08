---
title: column-span
slug: Web/CSS/column-span
page-type: css-property
browser-compat: css.properties.column-span
---



The **`column-span`** [CSS](/Web/CSS) property makes it possible for an element to span across all columns when its value is set to `all`.

{{EmbedInteractiveExample("pages/css/column-span.html")}}

An element that spans more than one column is called a **spanning element**.

## Syntax

```css
/* Keyword values */
column-span: none;
column-span: all;

/* Global values */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: revert-layer;
column-span: unset;
```

The `column-span` property is specified as one of the keyword values listed below.

### Values

- `none`
  - : The element does not span multiple columns.
- `all`
  - : The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appears. The element establishes a new block formatting context.

## Formal definition



## Formal syntax



## Examples

### Making a heading span columns

In this example, the heading is made to span across all the columns of the article.

#### HTML

```html
<article>
  <h2>Header spanning all of the columns</h2>
  <p>
    The h2 should span all the columns. The rest of the text should be
    distributed among the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
</article>
```

#### CSS

```css
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

#### Result

{{EmbedLiveSample('Making_a_heading_span_columns', 'auto', 260)}}

## Specifications



## Browser compatibility



## See also

- [Spanning and balancing columns](/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
- [Inline-level elements](/Glossary/Inline-level_content)
- {{domxref("HTMLSpanElement")}}
