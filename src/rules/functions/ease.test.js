import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import { FuncType } from '../../types/model';
import ease from './ease';



test("parse timing function - ease", () => {
    expect(ease({item: {matchedString: 'ease'}})).toEqual({
        funcType: FuncType.TIMING,
        name: 'ease',
        matchedString: 'ease',
        x1: 0.25, 
        y1: 0.1, 
        x2: 0.25, 
        y2: 1
    });
})
