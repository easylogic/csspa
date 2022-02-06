import { expect, test } from 'vitest';
import { parseValue } from '../../parser/value-parser';
import repeatingLinearGradient from './repeating-linear-gradient';


test("parse repeating-linear-gradient", () => {
    const target = 'repeating-linear-gradient(rgba(255, 255, 255, 0.1), white 20%)'
    const result = repeatingLinearGradient({parseValue, item: {
        startIndex: 0,
        endIndex: target.length - 1,
    }, allString: target})
    // console.log(JSON.stringify(result, null, 2))
    expect(result).toEqual({
        "convert": true,
        "funcType": "gradient",
        "type": "repeating-linear-gradient",
        "startIndex": 0,
        "endIndex": 62,
        "matchedString": "repeating-linear-gradient(rgba(255, 255, 255, 0.1), white 20%)",
        "args": "rgba(255, 255, 255, 0.1), white 20%",
        "parameters": [
            "rgba(255, 255, 255, 0.1)",
            "white 20%"
        ],
        "parsed": [
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
                "fullTextStartIndex": 26,
                "fullTextEndIndex": 50
            },
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
                "fullTextStartIndex": 52,
                "fullTextEndIndex": 57
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
                "fullTextStartIndex": 58,
                "fullTextEndIndex": 61
            }
        ],
        "parsedParameters": [
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
                    }
                }
            ],
            [
                {
                    "matchedString": "white",
                    "startIndex": 0,
                    "endIndex": 5,
                    "func": "color-name",
                    "parsed": {
                        "funcType": "color",
                        "color": "white",
                        "r": 255,
                        "g": 255,
                        "b": 255,
                        "a": 1
                    }
                },
                {
                    "matchedString": "20%",
                    "startIndex": 6,
                    "endIndex": 9,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 20,
                        "unit": "%"
                    }
                }
            ]
        ]
    });
})
