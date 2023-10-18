export * from '@babel/parser';
export * as types from '@babel/types';
import {traverse} from '@babel/types';

interface Location {
    start: {
        line: number;
        column: number;
    };
}

interface CodeFrameOptions {}

declare function codeFrameColumns(rawLines: string, location: Location, options: CodeFrameOptions): string;
export {
    type codeFrameColumns,
    type traverse,
};
