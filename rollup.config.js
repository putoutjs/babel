'use strict';

const commonjs = require('@rollup/plugin-commonjs');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json');

const externals = require('rollup-plugin-node-externals');
const replace = require('@rollup/plugin-replace');

module.exports = {
    input: 'babel/index.js',
    output: {
        file: 'bundle/index.cjs',
        format: 'cjs',
        globals: {
            navigator: {},
        },
    },
    plugins: [
        nodeResolve({
            preferBuiltins: false,
            browser: true,
        }),
        externals({
            deps: false,
        }),
        commonjs(),
        json(),
        replace({
            exclude: 'globals',
            preventAssignment: true,
            values: {
                'navigator.userAgentData': 'globalThis?.navigator?.userAgentData',
                'navigator.userAgent': 'globalThis?.navigator?.userAgent',
            },
        }),
    ],
};
