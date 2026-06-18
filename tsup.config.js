import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['lib/index.d.ts'],
    format: ['esm'],
    target: 'es2024',
    bundle: true,
    noExternal: [
        '@babel/code-frame',
        '@babel/generator',
        '@babel/parser',
        '@babel/template',
        '@babel/traverse',
        '@babel/types',
    ],
    dts: true,
});
