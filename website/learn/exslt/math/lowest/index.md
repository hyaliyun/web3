---
title: math:lowest()
slug: Web/EXSLT/math/lowest
page-type: exslt-function
---



`math:lowest()` returns the node in the specified node-set with the lowest value (where the lowest value calculated using [`math:min()`](/Web/EXSLT/math/min)).

A node has this minimum value if converting its string value to a number equals the minimum value.

## Syntax

```plain
math:lowest(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose lowest value is to be returned.

### Return value

A result tree fragment consisting of copies of the nodes returned by [`math:min()`](/Web/EXSLT/math/min).

## Specifications

[EXSLT - MATH:LOWEST](https://exslt.github.io/math/functions/lowest/index.html)
