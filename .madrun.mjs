import {run} from 'madrun';

export default {
    'test': () => run(['build', 'test:*']),
    'test:js': () => `tape 'lib/*.spec.js'`,
    'test:dts': () => 'check-dts test/*.ts',
    'watch:test': async () => `nodemon -w lib -w test -x ${await run('test')}`,
    'lint': () => `putout .`,
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
    'coverage': async () => `c8 ${await run('test')}`,
    'report': () => 'c8 report --reporter=lcov',
    'wisdom': () => run('test'),
    'build-old': () => 'rollup -c',
    'clean': () => 'rm -rf bundle',
    'build': () => run(['clean', 'build:js', 'build:fix']),
    'build:js': () => 'tsup --target es5 lib/index.mjs -d bundle --dts-resolve --dts lib/index.d.ts',
    'build:types': () => 'tsup --target es5 lib/index.d.ts -d bundle --dts-resolve --dts-only',
    'build:fix': () => `mv bundle/index.d.d.ts bundle/index.d.ts`,
};
