import ColorNames from "../../types/ColorNames";

export default function ({item, parseValue}) {

    const color = ColorNames.getColorByName(item.matchedString);

    const value = parseValue(color)[0];

    return {
        ...value.parsed,
        color: item.matchedString
    }
}