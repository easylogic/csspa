import { FuncType } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.COLOR,
        color: item.matchedString,
        r: +item.parameters[0], 
        g: +item.parameters[1], 
        b: +item.parameters[2], 
        a: +item.parameters[3], 
    }
}