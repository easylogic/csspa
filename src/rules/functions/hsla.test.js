import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import { FuncType } from '../../types/model';
import hsla from './hsla';

test("parse hsla color", () => {
    expect(hsla({item: {matchedString: 'hsla(360, 0, 0, 1)', parameters: ['360', '0', '0', '1']}})).toEqual({
        funcType: FuncType.COLOR,
        color: "hsla(360, 0, 0, 1)",
        h: 360,
        s: 0,
        l: 0,
        a: 1,
    });
})
