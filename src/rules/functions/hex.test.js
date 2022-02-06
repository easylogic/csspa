import { expect, test } from 'vitest';
import { FuncType } from '../../types/model';
import hex from './hex';


test("parse hex color - 8digit", () => {
    expect(hex({matchedString: "#ffffffff"})).toEqual({
        funcType: FuncType.COLOR,
        color: "#ffffffff",
        r: 255,
        g: 255,
        b: 255,
        a: 1,
    });
})
