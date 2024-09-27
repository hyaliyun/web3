---
title: WebAssembly.compile()
page-type: webassembly-function
browser-compat: webassembly.api.compile_static
---



The **`WebAssembly.compile()`** static method compiles WebAssembly binary code into a [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiate()`](/WebAssembly/JavaScript_interface/instantiate_static) function should be used).

> [!NOTE]
> Webpages that have strict [Content Security Policy (CSP)](/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compile(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}}
    containing the binary code of the Wasm module you want to compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object
representing the compiled module.

### Exceptions

- If `bufferSource` is not a [typed array](/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}},
  the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/WebAssembly/JavaScript_interface/CompileError).

## Examples

### Using compile

The following example compiles the loaded simple.wasm byte code using the
`compile()` function and then sends it to a [worker](/Web/API/Web_Workers_API) using [postMessage()](/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> You'll probably want to use
> [`WebAssembly.compileStreaming()`](/WebAssembly/JavaScript_interface/compileStreaming_static) in most cases, as it is more efficient
> than `compile()`.

## Specifications



## Browser compatibility



## See also

- [WebAssembly](/WebAssembly) overview page
- [WebAssembly concepts](/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/WebAssembly/Using_the_JavaScript_API)
