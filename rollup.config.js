import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import externals from 'rollup-plugin-node-externals';
import replace from '@rollup/plugin-replace';

export default {
    input: 'babel/index.js',
    output: {
        file: 'bundle/babel.cjs',
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
            }
        }),
    ],
};
