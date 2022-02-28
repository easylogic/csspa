import { parseValue } from './value-parser';
import { makeGroupFunction } from '../rules/group-function';

export function parseGroupValue(str, customMapFuncName = 'temp') {
    return parseValue(`${customMapFuncName}(${str})`, {
        customFuncMap: {
            [customMapFuncName]: makeGroupFunction(customMapFuncName)
        }
    })[0]?.parameters;
} 