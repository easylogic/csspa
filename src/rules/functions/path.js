import { FuncType, TimingFunction } from "../../types/model";

export default function ({item}) {

    return {
        funcType: FuncType.TIMING,
        name: TimingFunction.PATH,
        d: item.args,
    }
}