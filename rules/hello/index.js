'use strict';

const {types} = require('putout');
const {
    TSTypeReference,
    TSTypeAnnotation,
} = types;

module.exports.report = () => `Use 'if condition' instead of 'ternary expression'`;

module.exports.fix = (path) => {
    const {key} = path.node;
    path.node.typeAnnotation = TSTypeAnnotation(TSTypeReference(key));
};

module.exports.traverse = ({push}) => ({
    TSPropertySignature(path) {
        push(path);
    },
});
