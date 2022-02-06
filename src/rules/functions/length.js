import { CSS_LENGTH_REGEXP, FuncType } from "../../types/model";

export default function (item) {

    var arr = item.matchedString.replace(CSS_LENGTH_REGEXP, "$1 $2").split(" ");

    return {
        funcType: FuncType.LENGTH, 
        value: +arr[0],
        unit: arr[1],
    }
}