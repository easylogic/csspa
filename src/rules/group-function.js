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


    if (result.length > 0) {
        return -1;
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
    } else if (type === 'comma') {
        return FuncType.COMMA;
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

        const lastIndex = findFunctionEndIndex(allString, item.startIndex, funcStartCharacter, funcEndCharacter);

        if (lastIndex === -1) {
            return {
                convert: true,
                funcType: makeFuncType(type),
                matchedString: allString,
                type,
                startIndex: item.startIndex,
                endIndex: item.startIndex + allString.length,
            };
        }    


        const matchedString = allString.substring(item.startIndex, lastIndex)
        const matchedStringIndex = matchedString.indexOf(funcStartCharacter) + funcStartCharacter.length;
        const args = allString.substring(item.startIndex + matchedStringIndex, item.startIndex + matchedString.lastIndexOf(funcEndCharacter));

        const startIndex = item.startIndex;
        const endIndex = item.startIndex + matchedString.length;

        const newParsed = parseValue(args).map(it => {
            return {
                ...it,

                fullTextStartIndex: item.startIndex + matchedStringIndex + it.startIndex,
                fullTextEndIndex: item.startIndex + matchedStringIndex + it.endIndex
            }
        })

        let parameters = []
        let commaIndex = 0;

        newParsed.forEach((it, index) => {

            if (it.func === FuncType.COMMA) {
                commaIndex++;
            } else {
                if (!parameters[commaIndex]) parameters[commaIndex] = [];
                parameters[commaIndex].push(it);
            }
    
        })
    
        return {
            convert: true,
            funcType: makeFuncType(type),
            type,
            startIndex,
            endIndex,
            matchedString,
            args,
            parameters,
        };
    }
}