'use strict';

const noop = () => {};

module.exports.report = () => `Cut types`;

module.exports.fix = noop;

module.exports.traverse = () => ({
    VariableDeclarator(path) {
        if (path.node.id.name.startsWith('index'))
            path.remove();
    },
    TSTypeAliasDeclaration(path) {
        if (path.node.id.name.startsWith('index'))
            path.remove();
    },
    TSModuleDeclaration(path) {
        if (path.node.id.name.startsWith('index'))
            path.node.id.name = 'types';
    },
    ExportSpecifier(path) {
        path.node.local = path.node.exported;
        path.node.exportKind = 'value';
    },
});
