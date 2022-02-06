import { expect, test } from 'vitest';
import { FuncType } from '../../types/model';
import length from './length';

test("parse length", () => {
    expect(length({ item: {matchedString: "10%"}})).toEqual({
        funcType: FuncType.LENGTH,
        value: 10,
        unit: '%'
    });
})
