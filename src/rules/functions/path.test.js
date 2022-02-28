import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import path from './path';


test("parse path", () => {
    const target = "path(M0,0 L25,25)"
    const result = path({ parseValue, item: {
        startIndex: 0,
        endIndex: target.length - 1,
        args: "M0,0 L25,25"
    }, allString: target})

    expect(result).toEqual({
      "funcType": "timing",
      "name": "path",
      "d": "M0,0 L25,25"
    })
})
