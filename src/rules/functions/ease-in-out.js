import { FuncType } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.TIMING,
        name: 'ease-in-out',
        matchedString: item.matchedString,
        x1: 0.42, 
        y1: 0, 
        x2: 0.58, 
        y2: 1
    }
}