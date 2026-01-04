import {createTest} from '@putout/test';
import plugin from './index.js';

const test = createTest(import.meta.url, {
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
