import { FuncType } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.TIMING,
        name: 'linear',
        matchedString: item.matchedString,
        x1: 0, 
        y1: 0, 
        x2: 1, 
        y2: 1
    }
}