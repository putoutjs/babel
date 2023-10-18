import {run} from 'madrun';

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
    'build:old': () => 'rollup -c',
    'build': () => 'rm -rf bundle && tsup babel/index.mjs -d bundle --dts-resolve',
    copy,
};

function copy() {
    const cmdCopy = [
        'parser',
        'traverse',
        'generator',
        'template',
        'types',
        'code-frame',
        'globals-BABEL_8_BREAKING-true',
    ]
        .map(copyOne)
        .join('; ');
    
    return [
        'rm -rf packages',
        'mkdir packages',
        cmdCopy,
    ].join('; ');
}

function copyOne(name) {
    return `cp -fr ../babel/packages/babel-${name} packages/${name}`;
}
