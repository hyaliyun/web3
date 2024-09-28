---
title: WebAssembly.Module.imports()
slug: WebAssembly/JavaScript_interface/Module/imports_static
page-type: webassembly-static-method
browser-compat: webassembly.api.Module.imports_static
---



The **`WebAssembly.Module.imports()`** static method returns an array
containing descriptions of all the declared imports of the given `Module`.

## Syntax

```js-nolint
WebAssembly.Module.imports(module)
```

### Parameters

- `module`
  - : A [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object.

### Return value

An array containing objects representing the imported functions of the given module.

### Exceptions

If module is not a [`WebAssembly.Module`](/WebAssembly/JavaScript_interface/Module) object instance, a
{{jsxref("TypeError")}} is thrown.

## Examples

### Using imports

The following example compiles a loaded Wasm module and queries the module's imports.

See imports.html [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/imports.html) and
[live version](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html).

```js
WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) => {
  const imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
```

The console log displays the following description for the imported module:

```js
{ module: "my_namespace", name: "imported_func", kind: "function" }
```

## Specifications



## Browser compatibility



## See also

- [WebAssembly](/WebAssembly) overview page
- [WebAssembly concepts](/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/WebAssembly/Using_the_JavaScript_API)
