import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import externals from 'rollup-plugin-node-externals';

export default {
    input: 'babel/code-frame.js',
    output: {
        file: 'bundle/code-frame.cjs',
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
    ],
};
