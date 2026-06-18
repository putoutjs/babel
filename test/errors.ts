import {
    parse,
    types,
    Node,
} from '../lib/index.js';

const {identifier, isIdentifier} = types;

// THROWS Expected 1-2 arguments, but got 3
isIdentifier(1, 2, 3);
// THROWS No overload matches this call.
const a = isIdentifier('x');

const node: Node = identifier('hello');

// THROWS '"hello"' has no properties in common with type 'Partial<{ name: string; decorators: Decorator[] | null | undefined; optional: boolean | null | undefined; typeAnnotation: TSTypeAnnotation | TypeAnnotation | null | undefined; ... 7 more ...; extra: Record<...> | undefined; }>'.
isIdentifier(node, 'hello');
// THROWS Argument of type 'boolean' is not assignable to parameter of type 'string'
parse(a);

