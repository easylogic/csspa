import { FuncType } from "../../types/model";

export default function ({parseValue, item}) {

    const value = parseValue(item.parameters[0])[0];

    return {
        funcType: FuncType.TIMING,
        name: 'steps',
        matchedString: item.matchedString,
        count: value.parsed.value, 
        direction: item.parameters[1]
    }
}