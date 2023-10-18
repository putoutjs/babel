import {types} from 'putout';

const {
    TSTypeReference,
    TSTypeAnnotation,
} = types;

export const report = () => `Use 'if condition' instead of 'ternary expression'`;

export const fix = (path) => {
    const {key} = path.node;
    path.node.typeAnnotation = TSTypeAnnotation(TSTypeReference(key));
};

export const traverse = ({push}) => ({
    TSPropertySignature(path) {
        push(path);
    },
});
