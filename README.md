# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

Pre-builts of Babel 8.

Includes:
- [`Remove Babel 7 from the codebase`](https://github.com/babel/babel/pull/17618);
- [`Fix traverse NodePath caching`](https://github.com/babel/babel/pull/17568);
- [`Improve Unicode handling in code-frame tokenizer`](https://github.com/babel/babel/pull/17589);
- [`Improve traverse types`](https://github.com/babel/babel/pull/17574);
- [`Rename TSImportType.argument to .source`](https://github.com/babel/babel/pull/17610);
- [`Remove decorator parser plugin options`](https://github.com/babel/babel/pull/17643);
- [`Rename blacklist option`](https://github.com/babel/babel/pull/17671);
- [`Ensure `parseExpression` with `tokens: true` returns the exported tokens`](https://github.com/babel/babel/pull/17666);

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
