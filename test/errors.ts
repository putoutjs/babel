const {parse, isIdentifier} = require('../babel/index.ts');

const a: number = isIdentifier(1, 2, 3);

parse();
