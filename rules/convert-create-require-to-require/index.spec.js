'use strict';

const {createTest} = require('@putout/test');
const plugin = require('./index.js');

const test = createTest(__dirname, {
    plugins: [
        ['convert-create-require-to-require', plugin],
    ],
});

test('babel: convert-create-require-to-require: report', (t) => {
    t.report('convert-create-require-to-require', `Use 'require' instead of 'createRequire'`);
    t.end();
});

test('babel: convert-create-require-to-require: transform', (t) => {
    t.transform('convert-create-require-to-require');
    t.end();
});
