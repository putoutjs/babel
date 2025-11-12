'use strict';

const FN = `() => () => ({
    enabled: false,
})`;

module.exports.report = () => 'Remove flow';

module.exports.replace = () => ({
    'var require_common = __': `var require_common = ${FN}`,
    'var require_browser = __': `var require_browser = ${FN}`,
    'var require_ms = __': `var require_ms = () => () => {}`,
    'var require_node = __': `var require_node = ${FN}`,
    'var require_supports_color = __': '',
});

