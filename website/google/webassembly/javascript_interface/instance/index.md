---
title: WebAssembly.Instance
slug: WebAssembly/JavaScript_interface/Instance
page-type: webassembly-interface
browser-compat: webassembly.api.Instance
---



A **`WebAssembly.Instance`** object is a stateful, executable instance of a [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module). `Instance` objects contain all the [Exported WebAssembly functions](/WebAssembly/Exported_functions) that allow calling into WebAssembly code from JavaScript.

## Constructor

- [`WebAssembly.Instance()`](/WebAssembly/JavaScript_interface/Instance/Instance)
  - : Creates a new `Instance` object.

## Instance properties

- [`exports`](/WebAssembly/JavaScript_interface/Instance/exports)
  - : Returns an object containing as its members all the functions exported from the WebAssembly module instance, to allow them to be accessed and used by JavaScript. Read-only.

## Examples

### Synchronously instantiating a WebAssembly module

The `WebAssembly.Instance()` constructor function can be called to synchronously instantiate a given [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object, for example:

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

The preferred way to get an `Instance` is asynchronously, for example using the [`WebAssembly.instantiateStreaming()`](/WebAssembly/JavaScript_interface/instantiateStreaming_static) function like this:

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

This also demonstrates how the `exports` property is used to access exported functions.

## Specifications



## Browser compatibility



## See also

- [WebAssembly](/WebAssembly) overview page
- [WebAssembly concepts](/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/WebAssembly/Using_the_JavaScript_API)
