import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import { FuncType } from '../../types/model';
import colorName from './color-name';


test("parse color name", () => {
    expect(colorName({ parseValue, item: {matchedString: "white"} })).toEqual({
        funcType: FuncType.COLOR,
        color: "white",
        r: 255,
        g: 255,
        b: 255,
        a: 1,
    });
})
