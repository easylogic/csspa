import { FuncType } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.COLOR,
        color: item.matchedString,
        h: +item.parameters[0], 
        s: +item.parameters[1],         
        l: +item.parameters[2], 
        a: +item.parameters[3], 
    }
}