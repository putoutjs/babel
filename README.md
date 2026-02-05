# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

Pre-builts of [Babel 8](https://github.com/babel/babel/releases/tag/v8.0.0-rc.1).

Includes:
- [`remove deprecated default export from @babel/code-frame`](https://github.com/babel/babel/pull/17772);
- [`clean up unused error message`](https://github.com/babel/babel/pull/17764);

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
