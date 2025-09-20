export * from '@babel/parser';
import type * as types from '@babel/types';
import type {traverse, Node} from '@babel/types';

interface Location {
    start: {
        line: number;
        column: number;
    };
}

interface CodeFrameOptions {}

interface TemplateOptions {}

declare function codeFrameColumns(rawLines: string, location: Location, options: CodeFrameOptions): string;
declare function template(source: string, options?: TemplateOptions): string;
declare function ast(source: string): Node;
declare function generate(ast: Node): string;
declare namespace template {
    export {
        ast,
    };
}

export type {
    traverse,
    types,
};
