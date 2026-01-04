export const report = () => `Use 'require' instead of 'createRequire'`;

export const replace = () => ({
    '(0, import_module.createRequire)(import_meta.url)': 'require',
});
