
import functions from "../rules/functions";
import ColorNames from "../types/ColorNames";
import { CSS_FUNC_REGEXP, CSS_KEYWORD_REGEXP, CSS_LENGTH_REGEXP, FuncType, GRADIENT_LIST, TIMIING_LIST } from "../types/model";



const CSS_FUNC_MATCHES = (str) => {
    if (str.indexOf('#') === 0) {
        return 'hex';
    } else if (ColorNames.isColorName(str)) {
        return 'color-name';
    } else if (GRADIENT_LIST.includes(str) || TIMIING_LIST.includes(str)) {
        return str;
    } else if (str.match(CSS_LENGTH_REGEXP)) {
        return "length"
    } else if (str.match(CSS_KEYWORD_REGEXP)) {
        return "keyword";
    }
}



const CSS_FUNC_PARSER_MAP = {
    ...functions
    
}

export function makeIndexString(it, prefix = '@') {
    return `${prefix}${it.startIndex}`.padEnd(10, '0');
}

export function parseValue(str, {
    funcStartCharacter = '(',
    funcEndCharacter = ')',
    parameterSaparator = ',',
    customFuncMap = {}
} = {}) {
    const matches = str.match(CSS_FUNC_REGEXP);
    let result = [];

    if (!matches) {
        return result;
    }

    function checkParsedResult(startIndex, endIndex, matchedString) {
        return result.some(it => {

            if (it.parsed && Array.isArray(it.parsed)) {
                return it.parsed.some(parsedIt => {
                    if (parsedIt.startIndex === startIndex && parsedIt.endIndex === endIndex && matchedString === parsedIt.matchedString) {
                        return true;
                    }

                    return false;
                })
            }

            if (it.startIndex === startIndex && it.endIndex === endIndex && matchedString === it.matchedString) {
                return true;
            }

            return false;
        })
    }

    var pos = { next: 0 }
    for (var i = 0, len = matches.length; i < len; i++) {
        const matchedString = matches[i];

        let parsedFunc = CSS_FUNC_MATCHES(matchedString);

        let item = {
            matchedString,
        }

        const startIndex = str.indexOf(item.matchedString, pos.next);

        if (startIndex < 0) {
            continue;
        }

        item.startIndex = startIndex;
        item.endIndex = startIndex + item.matchedString.length;

        if (checkParsedResult(item.startIndex, item.endIndex, item.matchedString)) {
            continue;
        }


        if (parsedFunc) {
            // NOOP 
            // 매칭 되는 문자열은 자체 파서를 가진다. 
            item = {
                ...item,
                func: parsedFunc,
            }
        } else {
            const [func, rest] = matchedString.split(funcStartCharacter)
            const [args] = rest.split(funcEndCharacter);

            item = {
                ...item,
                func,
                args,
                parameters: args.split(parameterSaparator).map(it => it.trim()),
            }
            parsedFunc = func;
        }

        const context = {parseValue, item, allString: str, funcStartCharacter, funcEndCharacter, parameterSaparator}

        if (CSS_FUNC_PARSER_MAP[parsedFunc]) {

            const parseFunction = CSS_FUNC_PARSER_MAP[parsedFunc];
            item.parsed = parseFunction(context);

            if (item.parsed?.convert) {
                item = {
                    ...item,
                    ...item.parsed
                }

                delete item.convert;
            }
        } else if (customFuncMap[parsedFunc] || customFuncMap[item.matchedString]) {
            const parseFunction = customFuncMap[parsedFunc] || customFuncMap[item.matchedString];
            item.parsed = parseFunction(context);
            if (item.parsed?.convert) {
                item = {
                    ...item,
                    ...item.parsed
                }

                delete item.convert;
            }
        }

        result.push(item);
        pos.next = item.endIndex;
        // i = item.endIndex - 1;
    }

    return result;
}

/**
 * 파싱된 값을 원복하기 
 * 
 * @param {object[]} result 
 * @returns 
 */
export function generateValue(result) {
    return "";
}
