import {run} from 'madrun';

export default {
    'test': () => run(['build', 'test:*']),
    'test:js': () => `tape 'lib/*.spec.js'`,
    'test:dts': () => 'check-dts test/*.ts',
    'watch:test': async () => `nodemon -w lib -w test -x "${await run('test')}"`,
    'lint': () => `putout .`,
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
    'coverage': async () => `c8 ${await run('test')}`,
    'report': () => 'c8 report --reporter=lcov',
    'wisdom': () => run('test'),
    'prewisdom': () => run('test:dts'),
    'clean': () => 'rm -rf bundle',
    'build': async () => await run(['clean', 'build:js', 'build:fix:*']),
    'build:babel': () => './scripts/build-babel.sh',
    'build:js': () => 'tsup --format esm lib/index.js --target es2024 -d bundle --dts-resolve --dts lib/index.d.ts --metafile',
    'build:types': () => 'tsup lib/index.d.ts -d bundle --dts-only',
    'build:fix:dts': () => `mv bundle/index.d.d.ts bundle/index.d.ts`,
    'postbuild': () => 'node scripts/transform.js',
};
