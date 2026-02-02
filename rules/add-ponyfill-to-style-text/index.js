export const report = () => `Add ponyfill to 'styleText()'`;

export const replace = () => ({
    'import {styleText} from "util"': `{
        import * as util from 'util';
        const {styleText = (a, b) => b} = util;
    }`,
});
