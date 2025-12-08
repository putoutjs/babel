'use strict';

const USE_COLORS = `function useColors() {
    return 'colors' in inspectOpts ? Boolean(inspectOpts.colors) : (0, import_node_tty.isatty)(process.stderr.fd);
}`

module.exports.report = () => 'Remove debug';

module.exports.replace = () => ({
    'var import_node_tty = require("tty")': `var import_node_tty = {
        isatty: () => false,
    }`,
    'var import_node_util = require("util")': `var import_node_util = {
        formatWithOptions: () => false,
        inspect: () => false,
    }`,
    'var colors = process.stderr.getColorDepth && process.stderr.getColorDepth() > 2 ? __a : __b': 'var colors = []',
    'function createDebug(__args) {__body}': `function createDebug() {
        return {
            enabled: false,
        }
    }`,
    'var inspectOpts = __': 'var inspectOpts = {}',
    'function formatArgs(__args) {__body}': 'function formatArgs() {}',
    [USE_COLORS]: 'function useColors() {}',
});

