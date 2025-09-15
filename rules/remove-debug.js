'use strict';

const MIXIN = `
  var mixinPlugins = {
      estree,
      jsx,
      flow,
      typescript,
      v8intrinsic,
      placeholders,
  };
`;

module.exports.report = () => 'Remove flow';

module.exports.replace = () => ({
    'var require_common = __': 'var require_common = () => () => {}',
    'var require_browser = __': 'var require_browser = () => () => {}',
    'var require_ms = __': 'var require_ms = () => () => {}',
    'var require_node = __': 'var require_node = () => () => {}',
});
