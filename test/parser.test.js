
import { expect, test } from 'vitest';
// import { parseGroupValue } from '../src/parser/group-parser';
import { parseOneValue } from '../src/parser/one-parser';
import { parseValue } from '../src/parser/value-parser';

test("parse path timing", () => {
    const result = parseOneValue("path(M0,0 L25,25)");    

    // console.log(JSON.stringify(result, null, 4));

    expect(result).toEqual({
        "matchedString": "path(M0,0 L25,25)",
        "startIndex": 0,
        "endIndex": 17,
        "func": "path",
        "args": "M0,0 L25,25",
        "parameters": [
            "M0,0 L25,25"
        ],
        "parsed": {
            "funcType": "timing",
            "name": "path",
            "d": "M0,0 L25,25"
        }
    });
})

test("create css linear-gradient timing test - ease", () => {
    const result = parseOneValue("linear-gradient(-0.7791965086794089% 40.30037452797422% 80.05772932007076% 40.021450975161% pad, #45abd6 0% ,rgb(14,71,119) 48.98766411675347% steps(3, start),rgb(137,111,133) 72.67366131157286% steps(10, start),#f69292 99.06577580909027% ease 15)");

    // console.log(JSON.stringify(result, null, 4));

    expect(result).toEqual({
        "matchedString": "linear-gradient(-0.7791965086794089% 40.30037452797422% 80.05772932007076% 40.021450975161% pad, #45abd6 0% ,rgb(14,71,119) 48.98766411675347% steps(3, start),rgb(137,111,133) 72.67366131157286% steps(10, start),#f69292 99.06577580909027% ease 15)",
        "startIndex": 0,
        "endIndex": 247,
        "func": "linear-gradient",
        "funcType": "gradient",
        "type": "linear-gradient",
        "args": "-0.7791965086794089% 40.30037452797422% 80.05772932007076% 40.021450975161% pad, #45abd6 0% ,rgb(14,71,119) 48.98766411675347% steps(3, start),rgb(137,111,133) 72.67366131157286% steps(10, start),#f69292 99.06577580909027% ease 15",
        "parameters": [
            [
                {
                    "matchedString": "-0.7791965086794089%",
                    "startIndex": 0,
                    "endIndex": 20,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 0.7791965086794089,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 16,
                    "fullTextEndIndex": 36
                },
                {
                    "matchedString": "40.30037452797422%",
                    "startIndex": 21,
                    "endIndex": 39,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 40.30037452797422,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 37,
                    "fullTextEndIndex": 55
                },
                {
                    "matchedString": "80.05772932007076%",
                    "startIndex": 40,
                    "endIndex": 58,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 80.05772932007076,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 56,
                    "fullTextEndIndex": 74
                },
                {
                    "matchedString": "40.021450975161%",
                    "startIndex": 59,
                    "endIndex": 75,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 40.021450975161,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 75,
                    "fullTextEndIndex": 91
                },
                {
                    "matchedString": "pad",
                    "startIndex": 76,
                    "endIndex": 79,
                    "func": "keyword",
                    "fullTextStartIndex": 92,
                    "fullTextEndIndex": 95
                }
            ],
            [
                {
                    "matchedString": "#45abd6",
                    "startIndex": 81,
                    "endIndex": 88,
                    "func": "hex",
                    "parsed": {
                        "funcType": "color",
                        "color": "#45abd6",
                        "r": 69,
                        "g": 171,
                        "b": 214,
                        "a": 1
                    },
                    "fullTextStartIndex": 97,
                    "fullTextEndIndex": 104
                },
                {
                    "matchedString": "0%",
                    "startIndex": 89,
                    "endIndex": 91,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 0,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 105,
                    "fullTextEndIndex": 107
                }
            ],
            [
                {
                    "matchedString": "rgb(14,71,119)",
                    "startIndex": 93,
                    "endIndex": 107,
                    "func": "rgb",
                    "args": "14,71,119",
                    "parameters": [
                        "14",
                        "71",
                        "119"
                    ],
                    "parsed": {
                        "funcType": "color",
                        "color": "rgb(14,71,119)",
                        "r": 14,
                        "g": 71,
                        "b": 119,
                        "a": 1
                    },
                    "fullTextStartIndex": 109,
                    "fullTextEndIndex": 123
                },
                {
                    "matchedString": "48.98766411675347%",
                    "startIndex": 108,
                    "endIndex": 126,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 48.98766411675347,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 124,
                    "fullTextEndIndex": 142
                },
                {
                    "matchedString": "steps(3, start)",
                    "startIndex": 127,
                    "endIndex": 142,
                    "func": "steps",
                    "args": "3, start",
                    "parameters": [
                        "3",
                        "start"
                    ],
                    "parsed": {
                        "funcType": "timing",
                        "name": "steps",
                        "matchedString": "steps(3, start)",
                        "count": 3,
                        "direction": "start"
                    },
                    "fullTextStartIndex": 143,
                    "fullTextEndIndex": 158
                }
            ],
            [
                {
                    "matchedString": "rgb(137,111,133)",
                    "startIndex": 143,
                    "endIndex": 159,
                    "func": "rgb",
                    "args": "137,111,133",
                    "parameters": [
                        "137",
                        "111",
                        "133"
                    ],
                    "parsed": {
                        "funcType": "color",
                        "color": "rgb(137,111,133)",
                        "r": 137,
                        "g": 111,
                        "b": 133,
                        "a": 1
                    },
                    "fullTextStartIndex": 159,
                    "fullTextEndIndex": 175
                },
                {
                    "matchedString": "72.67366131157286%",
                    "startIndex": 160,
                    "endIndex": 178,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 72.67366131157286,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 176,
                    "fullTextEndIndex": 194
                },
                {
                    "matchedString": "steps(10, start)",
                    "startIndex": 179,
                    "endIndex": 195,
                    "func": "steps",
                    "args": "10, start",
                    "parameters": [
                        "10",
                        "start"
                    ],
                    "parsed": {
                        "funcType": "timing",
                        "name": "steps",
                        "matchedString": "steps(10, start)",
                        "count": 10,
                        "direction": "start"
                    },
                    "fullTextStartIndex": 195,
                    "fullTextEndIndex": 211
                }
            ],
            [
                {
                    "matchedString": "#f69292",
                    "startIndex": 196,
                    "endIndex": 203,
                    "func": "hex",
                    "parsed": {
                        "funcType": "color",
                        "color": "#f69292",
                        "r": 246,
                        "g": 146,
                        "b": 146,
                        "a": 1
                    },
                    "fullTextStartIndex": 212,
                    "fullTextEndIndex": 219
                },
                {
                    "matchedString": "99.06577580909027%",
                    "startIndex": 204,
                    "endIndex": 222,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 99.06577580909027,
                        "unit": "%"
                    },
                    "fullTextStartIndex": 220,
                    "fullTextEndIndex": 238
                },
                {
                    "matchedString": "ease",
                    "startIndex": 223,
                    "endIndex": 227,
                    "func": "ease",
                    "parsed": {
                        "funcType": "timing",
                        "name": "ease",
                        "matchedString": "ease",
                        "x1": 0.25,
                        "y1": 0.1,
                        "x2": 0.25,
                        "y2": 1
                    },
                    "fullTextStartIndex": 239,
                    "fullTextEndIndex": 243
                },
                {
                    "matchedString": "15",
                    "startIndex": 228,
                    "endIndex": 230,
                    "func": "length",
                    "parsed": {
                        "funcType": "length",
                        "value": 15,
                        "unit": ""
                    },
                    "fullTextStartIndex": 244,
                    "fullTextEndIndex": 246
                }
            ]
        ]
    })
})

test("create css 8 digit color", () => {
    const result = parseValue("#ffffff34");   

    // console.log(JSON.stringify(result, null, 2));
    
    expect(result).toEqual([
        {
          "matchedString": "#ffffff34",
          "startIndex": 0,
          "endIndex": 9,
          "func": "hex",
          "parsed": {
            "funcType": "color",
            "color": "#ffffff34",
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 0.20392156862745098
          }
        }
      ])
})

test("create css color parser", () => {
    const result = parseValue('#FFFFFF white rgba(255, 255, 0.1, 0.5), hsl(360, 0.1, 0.1)')

    // console.log(JSON.stringify(result, null, 2));

    expect(result).toEqual([
        {
          "matchedString": "#FFFFFF",
          "startIndex": 0,
          "endIndex": 7,
          "func": "hex",
          "parsed": {
            "funcType": "color",
            "color": "#FFFFFF",
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        },
        {
          "matchedString": "white",
          "startIndex": 8,
          "endIndex": 13,
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
          "matchedString": "rgba(255, 255, 0.1, 0.5)",
          "startIndex": 14,
          "endIndex": 38,
          "func": "rgba",
          "args": "255, 255, 0.1, 0.5",
          "parameters": [
            "255",
            "255",
            "0.1",
            "0.5"
          ],
          "parsed": {
            "funcType": "color",
            "color": "rgba(255, 255, 0.1, 0.5)",
            "r": 255,
            "g": 255,
            "b": 0.1,
            "a": 0.5
          }
        },
        {
          "matchedString": ",",
          "startIndex": 38,
          "endIndex": 39,
          "func": "comma"
        },
        {
          "matchedString": "hsl(360, 0.1, 0.1)",
          "startIndex": 40,
          "endIndex": 58,
          "func": "hsl",
          "args": "360, 0.1, 0.1",
          "parameters": [
            "360",
            "0.1",
            "0.1"
          ],
          "parsed": {
            "funcType": "color",
            "color": "hsl(360, 0.1, 0.1)",
            "h": 360,
            "s": 0.1,
            "l": 0.1,
            "a": 1
          }
        }
      ]);

})

test("create css function parser", () => {
    const result = parseValue('linear-gradient( #FFFFFF white steps(5, step-start))')
    // console.log(JSON.stringify(result, null, 2))
    expect(result[0].parameters[0][0].matchedString).toEqual('#FFFFFF');

})

test("create linear-gradient parser", () => {
    const result = parseValue('linear-gradient( #FFFFFF, white)')



    // console.log(JSON.stringify(result, null, 2))
    expect(result[0].func).toEqual('linear-gradient');
})

test("create css linear-gradient parser with offset and color", () => {
    const result = parseValue('linear-gradient(to right, rgb(255, 0, 0) 0%, blue 100%)')

    // console.log(JSON.stringify(result, null, 2))

    expect(result[0].parameters.length).toEqual(3);
})

test("create timing function", () => {
    const result = parseValue('linear-gradient(to right, rgb(255, 0, 0) 0%, blue 100% ease 10)')

    // console.log(JSON.stringify(result, null, 2))

    expect(result[0].parameters.length).toEqual(3);
})

test("create timing function - ease", () => {
    const result = parseValue("ease");

    expect(result).toEqual([
        {
          matchedString: 'ease',
          startIndex: 0,
          endIndex: 4,
          func: 'ease',
          parsed: {
            funcType: 'timing',
            name: 'ease',
            matchedString: 'ease',
            x1: 0.25,
            y1: 0.1,
            x2: 0.25,
            y2: 1
          }
        }
    ]);
})

test("create timing function - linear", () => {
    const result = parseValue("linear");

    expect(result).toEqual([
        {
            "matchedString": "linear",
            "startIndex": 0,
            "endIndex": 6,
            "func": "linear",
            "parsed": {
                "funcType": "timing",
                "name": "linear",
                "matchedString": "linear",
                "x1": 0,
                "y1": 0,
                "x2": 1,
                "y2": 1
            }
        }
    ]);
})
