---
title: WebAssembly control flow instructions
slug: WebAssembly/Reference/Control_flow
page-type: landing-page
---



WebAssembly control flow instructions.

- [`block`](/WebAssembly/Reference/Control_flow/block)
  - : Creates a label that can later be branched out of with a [`br`](/WebAssembly/Reference/Control_flow/br).
- [`br`](/WebAssembly/Reference/Control_flow/br)
  - : Branches to a loop or block.
- [`call`](/WebAssembly/Reference/Control_flow/call)
  - : Calls a function.
- [`drop`](/WebAssembly/Reference/Control_flow/Drop)
  - : Pops a value from the stack, and discards it.
- [`end`](/WebAssembly/Reference/Control_flow/end)
  - : Can be used to end a `block`, `loop`, `if`, or `else`.
- [`if...else`](/WebAssembly/Reference/Control_flow/if...else)
  - : Executes a statement if the last item on the stack is true (`1`).
- [`loop`](/WebAssembly/Reference/Control_flow/loop)
  - : Creates a label that can later be branched to with a [`br`](/WebAssembly/Reference/Control_flow/br).
- [`nop`](/WebAssembly/Reference/Control_flow/nop)
  - : Does nothing.
- [`return`](/WebAssembly/Reference/Control_flow/return)
  - : Returns from a function.
- [`select`](/WebAssembly/Reference/Control_flow/Select)
  - : Selects one of its first two operands based on a boolean condition.
- [`unreachable`](/WebAssembly/Reference/Control_flow/unreachable)
  - : Denotes a point in code that should not be reachable.
