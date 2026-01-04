import {test} from 'supertape';
import {types, parse} from '../bundle/index.js';

test('@putout/babel: types', (t) => {
    const {isIdentifier} = types;
    const result = isIdentifier({});
    
    t.notOk(result);
    t.end();
});

test('@putout/babel: parse', (t) => {
    const result = parse('const a = b');
    
    t.ok(result);
    t.end();
});
