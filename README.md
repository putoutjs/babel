# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

Pre-builts of [Babel 8](https://github.com/babel/babel/releases/tag/v8.0.0-rc.6).
Includes:

- [use 0-based columns to match Babel AST locations](https://github.com/babel/babel/pull/17849);
- [fix: generator: improve new callee parens check](https://github.com/babel/babel/pull/18046);

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
