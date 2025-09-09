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
    'var flow = __': '',
    [MIXIN]: `
    var mixinPlugins = {
        estree,
        jsx,
        typescript,
        v8intrinsic,
        placeholders,
    };
  `,
});
