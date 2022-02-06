import { FuncType } from "../../types/model";

export default function (item) {

    const str = item.matchedString.replace("#", "");
    var arr = [];
    var a = 1; 
    if (str.length == 3) {
        for (var i = 0, len = str.length; i < len; i++) {
            var char = str.substr(i, 1);
            arr.push(parseInt(char + char, 16));
        }
    } else if (str.length === 8) {
        for (var i = 0, len = str.length; i < len; i += 2) {
            arr.push(parseInt(str.substr(i, 2), 16));
        }

        a = arr.pop() / 255             
    } else {
        for (var i = 0, len = str.length; i < len; i += 2) {
            arr.push(parseInt(str.substr(i, 2), 16));
        }
    }

    return {
        funcType: FuncType.COLOR,
        color: item.matchedString,
        r: arr[0], 
        g: arr[1], 
        b: arr[2], 
        a
    }
}