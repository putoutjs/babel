export * from '@babel/parser';
export * as types from '@babel/types';

interface Location {
    start: {
        line: number;
        column: number;
    };
}

interface Options {}

declare function codeFrameColumns(rawLines: string, location: Location, options: Options): string;
export {
    type codeFrameColumns,
};
