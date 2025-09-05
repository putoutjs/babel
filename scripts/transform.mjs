import {readFileSync, writeFileSync} from 'fs';
import putout from 'putout';
import * as convert from '../rules/convert-create-require-to-require/index.js';

const {stdout} = process;
const write = stdout.write.bind(stdout);

write('🚀transform bundle:\n\n');

logStart('read');
const data = readFileSync('./bundle/index.js', 'utf8');
logEnd();

logStart('transform');
const {code: result} = putout(data, {
    fix: true,
    plugins: [
        ['convert-create-require-to-require', convert],
    ]
});
logEnd();

logStart('write');
writeFileSync('./bundle/index.js', result);
logEnd();
logNewline();

function logStart(message) {
    const divider = Array(35 - message.length).join('.');
    write(message);
    write(divider);
}

function logEnd() {
    write('✅\n');
}

function logNewline() {
    write('\n');
}
