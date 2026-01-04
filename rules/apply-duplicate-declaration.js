export const report = () => 'Apply duplicate declaration message';

export const replace = () => ({
    'throw this.path.hub.buildError(id, `Duplicate declaration "${name}"`, TypeError);': 'throw Error(`Duplicate declaration \'${name}\'`, TypeError);',
});
