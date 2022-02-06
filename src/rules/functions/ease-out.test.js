import { expect, test } from 'vitest';
import { FuncType } from '../../types/model';
import easeOut from './ease-out';



test("parse timing function - ease-out", () => {
    expect(easeOut({item: {matchedString: 'ease-out'}})).toEqual({
        funcType: FuncType.TIMING,
        name: 'ease-out',
        matchedString: 'ease-out',
        x1: 0, 
        y1: 0, 
        x2: 0.58, 
        y2: 1
    });
})
