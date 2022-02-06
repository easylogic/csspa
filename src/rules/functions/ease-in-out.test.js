import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import { FuncType } from '../../types/model';
import easeInOut from './ease-in-out';




test("parse timing function - ease-out", () => {
    expect(easeInOut({item: {matchedString: 'ease-in-out'}})).toEqual({
        funcType: FuncType.TIMING,
        name: 'ease-in-out',
        matchedString: 'ease-in-out',
        x1: 0.42, 
        y1: 0, 
        x2: 0.58, 
        y2: 1
    });
})
