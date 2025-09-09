'use strict';

const commonjs = require('@rollup/plugin-commonjs');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json');

const externals = require('rollup-plugin-node-externals');
const replace = require('@rollup/plugin-replace');
import { visualizer } from 'rollup-plugin-visualizer';

module.exports = {
    input: 'lib/index.js',
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
        commonjs({
            strictRequires: 'auto',
        }),
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
    visualizer({
      filename: './stats.html',
    }),
};
