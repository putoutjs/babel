import {parse, types} from '../';

const {isIdentifier} = types;

// THROWS Expected 1-2 arguments, but got 3
isIdentifier(1, 2, 3);
// THROWS Argument of type 'string' is not assignable to parameter of type 'Node'
const a = isIdentifier('x');

// THROWS Argument of type 'boolean' is not assignable to parameter of type 'string'
parse(a);
