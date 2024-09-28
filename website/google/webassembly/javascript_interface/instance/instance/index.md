---
title: WebAssembly.Instance() constructor
slug: WebAssembly/JavaScript_interface/Instance/Instance
page-type: webassembly-constructor
browser-compat: webassembly.api.Instance.Instance
---



The **`WebAssembly.Instance()`** constructor creates a new
`Instance` object which is a stateful, executable instance of a
[`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module).

## Syntax

> [!WARNING]
> Since instantiation for large modules can be expensive,
> developers should only use the `Instance()` constructor when synchronous
> instantiation is absolutely required; the asynchronous
> [`WebAssembly.instantiateStreaming()`](/WebAssembly/JavaScript_interface/instantiateStreaming_static) method should be used at all other
> times.

```js
new WebAssembly.Instance(module, importObject);
```

### Parameters

- `module`
  - : The [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object to be instantiated.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/WebAssembly/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of `module` or
    else a [`WebAssembly.LinkError`](/WebAssembly/JavaScript_interface/LinkError) is thrown.

#### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, one of
  [`WebAssembly.CompileError`](/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/WebAssembly/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/WebAssembly/JavaScript_interface/RuntimeError) are thrown, depending on the cause of the failure.
- Some browsers may throw a {{jsxref("RangeError")}}, as they prohibit compilation and instantiation of Wasm with large buffers on the UI thread.

## Examples

### Synchronously instantiating a WebAssembly module

The `WebAssembly.Instance()` constructor function can be called to
synchronously instantiate a given [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object, for example:

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

However, the preferred way to get an `Instance` is through the asynchronous
[`WebAssembly.instantiateStreaming()`](/WebAssembly/JavaScript_interface/instantiateStreaming_static) function, for example like this:

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

## Specifications



## Browser compatibility



## See also

- [WebAssembly](/WebAssembly) overview page
- [WebAssembly concepts](/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/WebAssembly/Using_the_JavaScript_API)
