import {
    parse,
    types,
    traverse,
    codeFrameColumns,
} from '../';

const {isIdentifier} = types;

// THROWS Expected 1-2 arguments, but got 3
isIdentifier(1, 2, 3);
// THROWS Type 'boolean' is not assignable to type 'number'
const a: number = isIdentifier({});

// THROWS Argument of type 'number' is not assignable to parameter of type 'string'.
parse(a);
// THROWS Expected 3 arguments, but got 0.
codeFrameColumns();

// THROWS Expected 2-3 arguments, but got 1.
traverse(5);
