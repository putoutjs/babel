import type {Node} from '@babel/types';

export * from '@babel/parser';
export {default as traverse} from '@babel/traverse';
export * as types from '@babel/types';
export type * from '@babel/types';
export type * from '@babel/traverse';
interface Location {
    start: {
        line: number;
        column: number;
    };
}

interface CodeFrameOptions {}

interface TemplateOptions {}

export declare function codeFrameColumns(rawLines: string, location: Location, options: CodeFrameOptions): string;
export declare function template(source: string, options?: TemplateOptions): string;

export declare function generate(ast: Node): string;

declare function ast(source: string): Node;
export declare namespace template {
    export {
        ast,
    };
}
