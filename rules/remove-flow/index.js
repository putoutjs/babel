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
    'var FlowErrors = __': '',
    'function FlowExportDeclaration(__args) {__body}': '',
    'FlowExportDeclaration.call(this, node)': '',
    'function isFlowType(__args) {__body}': 'function isFlowType() {}',
    'function isFlow(__args) {__body}': 'function isFlow() {}',
    'function isFlowBaseAnnotation(__args) {__body}': 'function isFlowBaseAnnotation() {}',
    'function isFlowDeclaration(__args) {__body}': 'function isFlowDeclaration() {}',
    'function isFlowPredicate(__args) {__body}': 'function isFlowPredicate() {}',
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
