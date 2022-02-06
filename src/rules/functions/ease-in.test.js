import { expect, test } from 'vitest';
import { FuncType } from '../../types/model';
import easeIn from './ease-in';



test("parse timing function - ease", () => {
    expect(easeIn({item: {matchedString: 'ease-in'}})).toEqual({
        funcType: FuncType.TIMING,
        name: 'ease-in',
        matchedString: 'ease-in',
        x1: 0.42, 
        y1: 0, 
        x2: 1, 
        y2: 1
    });
})
