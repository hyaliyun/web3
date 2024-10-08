---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
page-type: css-property
browser-compat: css.properties.grid-template-areas
---



The **`grid-template-areas`** [CSS](/Web/CSS) property specifies named {{glossary("grid areas")}}, establishing the cells in the grid and assigning them names.

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

Those areas are not associated with any particular grid item, but can be referenced from the grid-placement properties {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, and their shorthands {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, and {{cssxref("grid-area")}}.

## Syntax

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* Global values */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### Values

- `none`
  - : The grid container doesn't define any named grid areas.
- `{{cssxref("&lt;string&gt;")}}+`

  - : A row is created for every separate string listed, and a column is created for each cell in the string. Multiple cell tokens with the same name within and between rows create a single named grid area that spans the corresponding grid cells. Unless those cells form a rectangle, the declaration is invalid.

    All the remaining unnamed areas in a grid can be referred using _null cell tokens_. A null cell token is a sequence of one or more `.` (U+002E FULL STOP) characters, e.g. `.`, `...`, or `.....` etc. A null cell token can be used to create empty spaces in the grid.

## Formal definition



## Formal syntax



## Examples

### Specifying named grid areas

#### HTML

```html
<div id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</div>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

In the above code, a null token (`.`) was used to create an unnamed area in the grid container, which we used to create an empty space at the bottom left corner of the grid.

#### Result

{{EmbedLiveSample("Specifying_named_grid_areas", "100%", "285px")}}

## Specifications



## Browser compatibility



## See also

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [Grid template areas](/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)
