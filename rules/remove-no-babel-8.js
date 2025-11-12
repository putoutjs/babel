'use strict';

module.exports.report = () => 'Remove no BABEL';

module.exports.replace = () => ({
    'var require_js_tokens_BABEL_8_BREAKING_false = __': '',
    [`module2.exports = bool2(process.env['BABEL_8_BREAKING']) ? require_js_tokens_BABEL_8_BREAKING_true() : require_js_tokens_BABEL_8_BREAKING_false();`]: 'module2.exports = require_js_tokens_BABEL_8_BREAKING_true()',
});
