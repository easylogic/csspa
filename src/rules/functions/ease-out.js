import { FuncType } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.TIMING,
        name: 'ease-out',
        matchedString: item.matchedString,
        x1: 0, 
        y1: 0, 
        x2: 0.58, 
        y2: 1
    }
}