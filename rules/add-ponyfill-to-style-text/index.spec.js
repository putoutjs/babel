import {createTest} from '@putout/test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['add-ponyfill-to-style-text', plugin],
    ],
});

test('babel: add-ponyfill-to-style-text: report', (t) => {
    t.report('add-ponyfill-to-style-text', `Add ponyfill to 'styleText()'`);
    t.end();
});

test('babel: add-ponyfill-to-style-text: transform', (t) => {
    t.transform('add-ponyfill-to-style-text');
    t.end();
});
