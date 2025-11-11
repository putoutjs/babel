import {run} from 'madrun';

const env = {
    BABEL_8_BREAKING: 1,
};

export default {
    'test': () => run(['build', 'test:*']),
    'test:js': () => `tape 'lib/*.spec.js'`,
    '_test:dts': () => 'check-dts test/*.ts',
    'watch:test': async () => `nodemon -w lib -w test -x "${await run('test')}"`,
    'lint': () => `putout .`,
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
    'coverage': async () => `c8 ${await run('test')}`,
    'report': () => 'c8 report --reporter=lcov',
    'wisdom': () => run('test'),
    'clean': () => 'rm -rf bundle',
    'build': async () => [env, await run(['clean', 'build:js', 'build:fix'])],
    'build:js': () => 'tsup lib/index.mjs --target es2020 -d bundle --dts-resolve --dts lib/index.d.ts --metafile',
    'build:types': () => 'tsup lib/index.d.ts -d bundle --dts-resolve --dts-only',
    'build:fix': () => `mv bundle/index.d.d.ts bundle/index.d.ts`,
    'postbuild': () => 'node scripts/transform.mjs',
};
