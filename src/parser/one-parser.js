import { parseValue } from './value-parser';

export function parseOneValue(str) {
    return parseValue(str)[0]
}