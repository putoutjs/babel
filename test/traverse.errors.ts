import {NodePath} from '../lib/index.js';

const parsePath = (path: NodePath) => path.node;

// THROWS Argument of type 'number' is not assignable to parameter of type 'NodePath_Final'
parsePath(3);
