import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import externals from 'rollup-plugin-node-externals';

export default {
    input: 'babel/index.js',
    output: {
        file: 'bundle/babel.cjs',
        format: 'cjs',
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
        alias({
            entries: [{
                find: 'globals-BABEL_8_BREAKING-false',
                replacement: 'globals',
            }],
        }),
    ],
};
