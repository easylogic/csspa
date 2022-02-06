import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import { FuncType } from '../../types/model';
import cubicBezier from './cubic-bezier';


test("parse timing function - cubic-bezier", () => {
    expect(cubicBezier({ item: { matchedString: 'cubic-bezier(0, 0, 1, 1)', parameters: ['0', '0', '1', '1'] } })).toEqual({
        funcType: FuncType.TIMING,
        name: 'cubic-bezier',
        matchedString: 'cubic-bezier(0, 0, 1, 1)',
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1
    });
})
