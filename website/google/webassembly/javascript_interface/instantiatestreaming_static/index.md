---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
page-type: webassembly-function
browser-compat: webassembly.api.instantiateStreaming_static
---



The **`WebAssembly.instantiateStreaming()`** static method compiles
and instantiates a WebAssembly module directly from a streamed underlying source. This
is the most efficient, optimized way to load Wasm code.

> [!NOTE]
> Webpages that have strict [Content Security Policy (CSP)](/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### Parameters

- `source`
  - : A [`Response`](/Web/API/Response)
    object or a promise that will fulfill with one, representing the underlying source of
    a Wasm module you want to stream, compile, and instantiate.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/WebAssembly/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of the compiled module or
    else a
    [`WebAssembly.LinkError`](/WebAssembly/JavaScript_interface/LinkError)
    is thrown.

### Return value

A `Promise` that resolves to a `ResultObject` which contains two
fields:

- `module`: A [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object representing the
  compiled WebAssembly module. This `Module` can be instantiated again or
  shared via [postMessage()](/Web/API/Worker/postMessage).
- `instance`: A [`WebAssembly.Instance`](/WebAssembly/JavaScript_interface/Instance) object that contains all
  the [Exported WebAssembly functions](/WebAssembly/Exported_functions).

### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/WebAssembly/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/WebAssembly/JavaScript_interface/RuntimeError), depending on the cause of the failure.

## Examples

### Instantiating streaming

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also)
directly streams a Wasm module from an underlying source then
compiles and instantiates it, the promise fulfilling with a `ResultObject`.
Because the `instantiateStreaming()` function accepts a promise for a [`Response`](/Web/API/Response)
object, you can directly pass it a [`fetch()`](/Web/API/Window/fetch)
call, and it will pass the response into the function when it fulfills.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

The `ResultObject`'s instance member is then accessed, and the contained
exported function invoked.

> [!NOTE]
> For this to work, `.wasm` files should be returned
> with an `application/wasm` MIME type by the server.

## Specifications



## Browser compatibility



## See also

- [WebAssembly](/WebAssembly) overview page
- [WebAssembly concepts](/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/WebAssembly/Using_the_JavaScript_API)
