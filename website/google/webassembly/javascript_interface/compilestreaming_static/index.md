---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming_static
page-type: webassembly-function
browser-compat: webassembly.api.compileStreaming_static
---



The **`WebAssembly.compileStreaming()`** static method compiles a [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) directly from a streamed underlying source.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiateStreaming()`](/WebAssembly/JavaScript_interface/instantiateStreaming_static) function should be used).

> [!NOTE]
> Webpages that have strict [Content Security Policy (CSP)](/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
```

### Parameters

- `source`
  - : A [`Response`](/Web/API/Response) object or a promise that will fulfill with one, representing the underlying source of a Wasm module you want to stream and compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object representing the compiled module.

### Exceptions

- If `source` is not a [`Response`](/Web/API/Response) or `Promise` resolving to a `Response`, the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a [`WebAssembly.CompileError`](/WebAssembly/JavaScript_interface/CompileError).
- If the `source` is a `Promise` that rejects, the promise rejects with the error.
- If the `source`'s `Result` has an error (e.g. bad MIME type), the promise rejects with an error.

## Examples

### Compile streaming

The following example (see our [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) also) directly streams a Wasm module from an underlying source then compiles it to a [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object. Because the `compileStreaming()` function accepts a promise for a [`Response`](/Web/API/Response) object, you can directly pass it a `Promise` from calling [`fetch()`](/Web/API/Window/fetch), without waiting for the promise to fulfill.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

The resulting module instance is then instantiated using
[`WebAssembly.instantiate()`](/WebAssembly/JavaScript_interface/instantiate_static), and the exported function invoked.

## Specifications



## Browser compatibility



## See also

- [WebAssembly](/WebAssembly) overview page
- [WebAssembly concepts](/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/WebAssembly/Using_the_JavaScript_API)
