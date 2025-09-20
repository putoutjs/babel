'use strict';

const {createTest} = require('@putout/test');
const plugin = require('./index.js');

const test = createTest(import.meta.url, {
    plugins: [
        ['remove-flow', plugin],
    ],
});

test('babel: remove-flow: report', (t) => {
    t.report('remove-flow', `Remove flow`);
    t.end();
});

test('babel: remove-flow: transform', (t) => {
    t.transform('remove-flow');
    t.end();
});
