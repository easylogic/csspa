import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import { FuncType } from '../../types/model';
import steps from './steps';

test("parse rgba color", () => {
    expect(steps({parseValue, item: {matchedString: 'steps(5, start)', parameters: ['5', 'start']}})).toEqual({
        funcType: FuncType.TIMING,
        matchedString: 'steps(5, start)',
        name: 'steps',
        count: 5,
        direction: 'start'
    });
})
 