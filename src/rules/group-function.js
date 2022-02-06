import { GRADIENT_LIST, TIMIING_LIST, FuncType } from '../types/model';

const findFunctionEndIndex = (allString, startIndex, funcStartCharacter = '(', funcEndCharacter = ')') => {

    const result = []
    for (var i = startIndex; i < allString.length; i++) {
        const it = allString[i];

        if (it === funcStartCharacter) {
            result.push(funcStartCharacter)
        } else if (it === funcEndCharacter) {
            result.pop();

            if (result.length === 0) {
                break;
            }
        }

    }

    return i + 1;
}

const makeFuncType = (type) => {

    if (GRADIENT_LIST.includes(type)) {
        return FuncType.GRADIENT;
    } else if (TIMIING_LIST.includes(type)) {
        return FuncType.TIMING;
    } else if (type === 'color-name') {
        return FuncType.COLOR;
    } else if (type === 'hex') {
        return FuncType.COLOR;
    } else if (type === 'length') {
        return FuncType.LENGTH;
    }

    return type;
}



/** 
 * group function으로 묶어서 반환한다. 
 * 
 * parameters 를 자동으로 파싱해준다. 
 * 
 * @param {string} type  group function name
 * @param {function} parseValue value parser 
 * @returns 
 */
export const makeGroupFunction = (type) => {

    return ({ parseValue, item, allString, funcStartCharacter = '(', funcEndCharacter = ')', parameterSaparator = ',' }) => {

        const matchedString = allString.substring(item.startIndex, findFunctionEndIndex(allString, item.endIndex, funcStartCharacter, funcEndCharacter))
        const matchedStringIndex = matchedString.indexOf(funcStartCharacter) + funcStartCharacter.length;
        const args = allString.substring(matchedStringIndex, matchedString.lastIndexOf(funcEndCharacter));

        const startIndex = item.startIndex;
        const endIndex = item.startIndex + matchedString.length;

        const newParsed = parseValue(args).map(it => {
            return {
                ...it,

                fullTextStartIndex: item.startIndex + matchedStringIndex + it.startIndex,
                fullTextEndIndex: item.startIndex + matchedStringIndex + it.endIndex
            }
        })

        // console.log(newParsed);

        let parameters = []

        // parameterSaparator 로 구분되어진, 특정 파라미터 구간을 얻기 위해서 
        // 개별 item 의 startIndex 를 기준으로 문자열을 특정 키로 (@@startIndex:endIndex@@)  재조합 한다. 
        let tempArgsStartIndex = 0;
        let tempArgsResults = [];
        newParsed.forEach((it, index) => {
            const startString = args.substring(tempArgsStartIndex, it.startIndex)

            tempArgsResults.push(startString);
            tempArgsResults.push(`@@${it.startIndex}:${it.endIndex}@@`);

            tempArgsStartIndex = it.endIndex;
        })

        tempArgsResults.push(args.substring(tempArgsStartIndex));

        const tempArgs = tempArgsResults.join('');

        parameters = tempArgs.split(parameterSaparator).map((it) => {
            newParsed.forEach(item => {
                it = it.replace(`@@${item.startIndex}:${item.endIndex}@@`, item.matchedString);
            })

            return it.trim();
        });

        console.log(parameters);

        return {
            convert: true,
            funcType: makeFuncType(type),
            type,
            startIndex,
            endIndex,
            matchedString,
            args,
            parameters,
            parsed: newParsed,
            parsedParameters: parameters.map(it => {
                return parseValue(it);
            })
        };
    }
}