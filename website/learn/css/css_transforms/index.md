---
title: CSS transforms
slug: Web/CSS/CSS_transforms
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-transforms/
  - https://drafts.csswg.org/css-transforms-2/
---



The **CSS transforms** module defines how elements styled with CSS can be transformed in two-dimensional or three-dimensional space.

## CSS transforms in action

Use the sliders in the frame below to modify the translation, rotation, scale, and skew CSS transform properties of the cube in 3D space. As you move the cube through 3D space, notice the way it interacts with the element labelled `z:0px`, which is located at the 3D position `(0, 0, 0)`.

{{EmbedGHLiveSample("css-examples/modules/transforms.html", '100%', 900)}}

You can also use the `perspective` slider to modify the [`perspective`](/Web/CSS/perspective) property of the cube's container, which determines the distance between you and the `z=0` plane.

The [`perspective-origin`](/Web/CSS/perspective-origin) sliders determine where you, the viewer, are looking into the 3D space for purposes of determining the view's _vanishing point_. This vanishing point is indicated by a small red dot. You can imagine modifying these sliders as physically moving your head up, down, left, and right to see different parts of the cube without moving the cube itself.

The `backface-visibility` checkbox determines whether the cube's back faces are set to `visible` or `hidden`.

The cube in the above example is comprised of six `<div>` elements, all of which are styled with CSS to create the cube's faces. The cube is not drawn using a 2D or 3D canvas context, so **you can inspect the faces of the cube with your browser's developer tools as you would inspect any other DOM element**. Try using your browser's developer tools element picker to inspect different faces of the cube as you transform its position and rotation.

> [!NOTE]
> The order in which transformations, including 3D rotations, are applied affects the resultant transformation. In the above example, transforms are translated, scaled, rotated, then skewed. The rotations are applied in the order X → Y → Z.

You can [view this example's source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/transforms.html).

## Reference

### Properties

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("rotate")}}
- {{cssxref("scale")}}
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}
- {{cssxref("translate")}}

### Functions

- {{cssxref("transform-function/matrix", "matrix()")}}
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- {{cssxref("transform-function/perspective", "perspective()")}}
- {{cssxref("transform-function/rotate", "rotate()")}}
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
- {{cssxref("transform-function/rotateX", "rotateX()")}}
- {{cssxref("transform-function/rotateY", "rotateY()")}}
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewX", "skewX()")}}
- {{cssxref("transform-function/skewY", "skewY()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translate3d", "translate()")}}
- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translateZ", "translateZ()")}}

### Data types

- {{cssxref("&lt;transform-function&gt;")}}

## Guides

- [Using CSS transforms](/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Step-by-step tutorial about how to transform elements styled with CSS.
- [Coordinate systems](/Web/CSS/CSSOM_view/Coordinate_systems)
  - : Describes the way pixel locations are defined in the CSS object model.
- [Performance fundamentals: Use CSS transforms](/Web/Performance/Fundamentals#use_css_transforms)
  - : An overview of web performance fundamentals, including how CSS transforms can improve performance.
- [Matrix math for the web](/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Describes how object transformations can be represented by mathematical matrices.

## Related concepts

- CSS Properties:
  - [`animation`](/Web/CSS/animation)
  - [`background-position`](/Web/CSS/background-position)
  - [`clip`](/Web/CSS/clip)
  - [`clip-path`](/Web/CSS/clip-path)
  - [`contain`](/Web/CSS/contain)
  - [`content-visibility`](/Web/CSS/content-visibility)
  - [`isolation`](/Web/CSS/isolation)
  - [`mask`](/Web/CSS/mask)
  - [`mask-border-source`](/Web/CSS/mask-border-source)
  - [`mask-image`](/Web/CSS/mask-image)
  - [`mix-blend-mode`](/Web/CSS/mix-blend-mode)
  - [`opacity`](/Web/CSS/opacity)
  - [`overflow`](/Web/CSS/overflow)
  - [`transition`](/Web/CSS/transition)
  - [`visibility`](/Web/CSS/visibility)
- Data types:
  - [`<angle>`](/Web/CSS/angle)
  - {{cssxref("length-percentage")}}
  - {{cssxref("length")}}
  - [`<number>`](/Web/CSS/number)
  - {{cssxref("percentage")}}
  - [`<position>`](/Web/CSS/position_value)
- Glossary terms:
  - [Interpolation](/Glossary/Interpolation)
  - [Stacking context](/Glossary/Stacking_context)
- [SVG](/Web/SVG) concepts:
  - [`<animate>`](/Web/SVG/Element/animate) element
  - [`<animateTransform>`](/Web/SVG/Element/animateTransform) element
  - [`<set>`](/Web/SVG/Element/set) element
  - [`transform`](/Web/SVG/Attribute/transform) element

## Specifications



## See also

- [Basic SVG transformations](/Web/SVG/Tutorial/Basic_Transformations) tutorial
- [CSS animations](/Web/CSS/CSS_animations) module
- [CSS transitions](/Web/CSS/CSS_transitions) module
