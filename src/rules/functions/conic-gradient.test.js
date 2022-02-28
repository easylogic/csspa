import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import conicGradient from './conic-gradient';


test("parse conic-gradient", () => {
    const target = 'conic-gradient(rgba(255, 255, 255, 0.1), white 20%)'
    const result = conicGradient({ parseValue, item: {
        startIndex: 0,
        endIndex: target.length - 1,
    }, allString: target})
    // console.log(JSON.stringify(result, null, 2))
    expect(result).toEqual({
      "convert": true,
      "funcType": "gradient",
      "type": "conic-gradient",
      "startIndex": 0,
      "endIndex": 51,
      "matchedString": "conic-gradient(rgba(255, 255, 255, 0.1), white 20%)",
      "args": "rgba(255, 255, 255, 0.1), white 20%",
      "parameters": [
        [
          {
            "matchedString": "rgba(255, 255, 255, 0.1)",
            "startIndex": 0,
            "endIndex": 24,
            "func": "rgba",
            "args": "255, 255, 255, 0.1",
            "parameters": [
              "255",
              "255",
              "255",
              "0.1"
            ],
            "parsed": {
              "funcType": "color",
              "color": "rgba(255, 255, 255, 0.1)",
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 0.1
            },
            "fullTextStartIndex": 15,
            "fullTextEndIndex": 39
          }
        ],
        [
          {
            "matchedString": "white",
            "startIndex": 26,
            "endIndex": 31,
            "func": "color-name",
            "parsed": {
              "funcType": "color",
              "color": "white",
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            },
            "fullTextStartIndex": 41,
            "fullTextEndIndex": 46
          },
          {
            "matchedString": "20%",
            "startIndex": 32,
            "endIndex": 35,
            "func": "length",
            "parsed": {
              "funcType": "length",
              "value": 20,
              "unit": "%"
            },
            "fullTextStartIndex": 47,
            "fullTextEndIndex": 50
          }
        ]
      ]
    });
})
