'use strict';

module.exports.report = () => 'Apply duplicate declaration message';

module.exports.replace = () => ({
    'throw this.path.hub.buildError(id, `Duplicate declaration "${name}"`, TypeError);': 'throw Error(`Duplicate declaration \'${name}\'`, TypeError);',
});
