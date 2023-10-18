import {
    traverse,
    codeFrameColumns,
    types,
    template,
} from '../';

const rawLines = `class Foo {
  constructor()
}`;

const location = {
    start: {
        line: 2,
        column: 16,
    },
};

const result = codeFrameColumns(rawLines, location, {/* options */});

console.log(result);

const ast = {
    type: 'Identifier',
    name: 'hello',
    optional: null,
    typeAnnotation: null,
    decorators: null,
};

traverse(ast as types.Identifier, {});

template('const a = 5');
