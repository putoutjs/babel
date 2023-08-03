import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import externals from 'rollup-plugin-node-externals';

export default {
    input: 'babel/template.js',
    output: {
        file: 'bundle/template.cjs',
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
