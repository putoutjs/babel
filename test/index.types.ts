import {codeFrameColumns} from '..';

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
