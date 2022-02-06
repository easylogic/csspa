import { expect, test } from 'vitest';
import { FuncType } from '../../types/model';
import rgba from './rgba';



test("parse rgba color", () => {
    expect(rgba({item: {matchedString: 'rgba(255, 255, 255, 1)', parameters: ['255', '255', '255', '0.5']}})).toEqual({
        funcType: FuncType.COLOR,
        color: "rgba(255, 255, 255, 1)",
        r: 255,
        g: 255,
        b: 255,
        a: 0.5,
    });
})
