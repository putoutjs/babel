import {run} from 'madrun';

const env = {
    MINIFY: 1,
};

export default {
    'test': () => `tape 'test/*.js'`,
    'watch:test': async () => `nodemon -w lib -w test -x ${await run('test')}`,
    'lint': () => `putout .`,
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
    'coverage': async () => `c8 ${await run('test')}`,
    'report': () => 'c8 report --reporter=lcov',
    'wisdom': () => run('build'),
    'build': () => run('build:*'),
    'build:types': () => rollup('types'),
    'build:generator': () => rollup('generator'),
    'build:code-frame': () => rollup('code-frame'),
    'build:traverse': () => rollup('traverse'),
    'build:parser': () => rollup('parser'),
    'build:template': () => rollup('template'),
};

function rollup(name) {
    return `rollup -c rollup-${name}.config.js`;
}
