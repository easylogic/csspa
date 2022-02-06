import { expect, test } from 'vitest';
import { FuncType } from '../../types/model';
import rgb from './rgb';



test("parse rgba color", () => {
    expect(rgb({matchedString: 'rgb(255, 255, 255)', parameters: ['255', '255', '255']})).toEqual({
        funcType: FuncType.COLOR,
        color: "rgb(255, 255, 255)",
        r: 255,
        g: 255,
        b: 255,
        a: 1,
    });
})
