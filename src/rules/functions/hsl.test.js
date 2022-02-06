import { expect, test } from 'vitest';
import { FuncType } from '../../types/model';
import hsl from './hsl';

test("parse hsl color", () => {
    expect(hsl({item: {matchedString: 'hsl(360, 0, 0)', parameters: ['360', '0', '0']}})).toEqual({
        funcType: FuncType.COLOR,
        color: "hsl(360, 0, 0)",
        h: 360,
        s: 0,
        l: 0,
        a: 1,
    });
})
