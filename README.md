# @putout/babel [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/babel.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/babel "npm"

Pre-builts of [Babel 8](https://github.com/babel/babel/releases/tag/v8.0.0-rc.3).
Includes:


- [TS parser small fixes](https://github.com/babel/babel/pull/17954)
- [Fix decorators interaction with abstract/declare fields](https://github.com/babel/babel/pull/17947)
- [Improve bundling packages](https://github.com/babel/babel/pull/17831);
- [parseClass typings cleanup ](https://github.com/babel/babel/pull/17901);

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
