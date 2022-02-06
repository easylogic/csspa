import { FuncType } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.TIMING,
        name: 'cubic-bezier',
        matchedString: item.matchedString,
        x1: +item.parameters[0],
        y1: +item.parameters[1],
        x2: +item.parameters[2],
        y2: +item.parameters[3]
    }
}