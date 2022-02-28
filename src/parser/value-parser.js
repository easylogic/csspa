
import functions from "../rules/functions";
import ColorNames from "../types/ColorNames";
import { CSS_FUNC_REGEXP, CSS_KEYWORD_REGEXP, CSS_LENGTH_REGEXP, FuncType, GRADIENT_LIST, TIMIING_LIST } from "../types/model";



const CSS_FUNC_MATCHES = (str) => {

    if (str === ',') {
        return 'comma';
    } else if (str.indexOf('#') === 0) {
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

export function parseValue(str, {
    funcStartCharacter = '(',
    funcEndCharacter = ')',
    parameterSaparator = ',',
    customFuncMap = {}
} = {}) {
    let matches = str.match(CSS_FUNC_REGEXP);
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


    // 파싱된 text 들의 개별 시작점 위치를 배열에 저장 
    matches = matches.map(matchedString => {
        const startIndex = str.indexOf(matchedString, pos.next);

        pos.next = startIndex + matchedString.length;
        return {index: startIndex, matchedString}
    })

    pos.next = 0;

    for (var i = 0, len = matches.length; i < len; i++) {
        const {matchedString, index} = matches[i];

       
        // index 가 point.next 보다 작으면 그냥 넘어감
        // 이미 group 파싱이나 다른 것으로 인해서 파싱 된 상태 이므로 넘어감
        if (index < pos.next) continue; 

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

        const isContinue = checkParsedResult(item.startIndex, item.endIndex, item.matchedString)

        if (isContinue) {
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
                // FIXME: 예외 처리를 함수 형태로 빼야할 듯 하다.
                parameters: (func === 'path') ? [args] :  args.split(parameterSaparator).map(it => it.trim()),
            }
            parsedFunc = func;
        }

        const context = {parseValue, item, allString: str, funcStartCharacter, funcEndCharacter, parameterSaparator}


        // 미리 정의된 custom 함수를 찾는다. 
        let customFunctionCallback;
        if (CSS_FUNC_PARSER_MAP[parsedFunc]) {
            customFunctionCallback = CSS_FUNC_PARSER_MAP[parsedFunc] || CSS_FUNC_PARSER_MAP[item.matchedString]
        } else if (customFuncMap[parsedFunc] || customFuncMap[item.matchedString]) {
            customFunctionCallback = customFuncMap[parsedFunc] || customFuncMap[item.matchedString]
        }

        if (customFunctionCallback) {

            const parsed = customFunctionCallback.call(null, context);
            // item.parsed = parseFunction(context);

            if (parsed?.convert) {
                item = {
                    ...item,
                    ...parsed
                }

                delete item.convert;
            } else {
                item = {
                    ...item,
                    parsed
                }
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
