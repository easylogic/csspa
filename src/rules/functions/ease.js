import { FuncType } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.TIMING,
        name: 'ease',
        matchedString: item.matchedString,
        x1: 0.25, 
        y1: 0.1, 
        x2: 0.25, 
        y2: 1
    }
}