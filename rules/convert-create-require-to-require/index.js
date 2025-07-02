'use strict';

module.exports.report = () => `Use 'require' instead of 'createRequire'`;

module.exports.replace = () => ({
    '(0, import_module.createRequire)(import_meta.url)': 'require',
});
