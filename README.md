# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

Pre-builts of Babel 8.

Includes:
- [`Replace picocolors with node:util.styleText() in @babel/code-frame`](https://github.com/babel/babel/pull/17678);
- [`cleanup optional AST checks`](https://github.com/babel/babel/pull/17759);
- [`Remove smart pipeline support and remove accessor property from Standardized alias`](https://github.com/babel/babel/pull/17732);
- [`Fix support super method call`](https://github.com/babel/babel/pull/17662);
- [`Fix hoisting of function declarations in loops and switch`](https://github.com/babel/babel/pull/17691);
- [`Enable strictNullChecks for @babel/core`](https://github.com/babel/babel/pull/17611);
- [`Improve generator performance`](https://github.com/babel/babel/pull/17718);
- [`generator: cleanup Babel 8 comments`](https://github.com/babel/babel/pull/17659);
- [`Remove @babel/plugin-transform-object-assign`](https://github.com/babel/babel/pull/17619);


Usage

```js
import {
    parse,
    types,
    generate,
    template,
    codeFrameColumns,
} from '@putout/babel';
```

## License

MIT
