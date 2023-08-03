# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

**CommonJS** pre-builts of Babel 8.

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
