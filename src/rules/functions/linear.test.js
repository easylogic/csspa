import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import { FuncType } from '../../types/model';
import linear from './linear';

test("parse timing function - linear", () => {
    expect(linear({item: {matchedString: 'linear'}})).toEqual({
        funcType: FuncType.TIMING,
        name: 'linear',
        matchedString: 'linear',
        x1: 0, 
        y1: 0, 
        x2: 1, 
        y2: 1
    });
})
