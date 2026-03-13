# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

Pre-builts of [Babel 8](https://github.com/babel/babel/releases/tag/v8.0.0-rc.2).
Includes:

- [`[Babel 8] Remove Import from the Expression alias`](https://github.com/babel/babel/pull/17867);
- [`Add locations option to parser`](https://github.com/babel/babel/pull/16935);
- [`Improve trailing comma comment handling`](https://github.com/babel/babel/pull/117782);
- [`Fix: parser: async x => {} must be in leading pos`](https://github.com/babel/babel/pull/17839);
- [`Fix TypeScript parser failing on async calls in ternary consequent`](https://github.com/babel/babel/pull/17799);

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
