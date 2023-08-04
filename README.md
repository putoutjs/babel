# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

**CommonJS** pre-builts of Babel 8: if you want to migrate to [v8](https://github.com/babel/babel/releases/tag/v8.0.0-alpha.1), but cannot support **ESM** right now.

Usage

```js
const {
    parse,
    types,
    generate,
    template,
    codeFrameColumns,
} = require('@putout/babel');
```

## Why not separate files?

Becaouse each of them will be about `1.8mb`:

<img width="479" alt="image" src="https://github.com/putoutjs/babel/assets/1573141/aa75f1bb-c312-4640-a605-fed0a0759427">


## License

MIT
