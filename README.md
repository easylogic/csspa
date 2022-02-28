# @easylogic/csspa

## what is
simple css function parser like css value


## How to install 

```
npm install @easylogic/csspa
```

## How to use 

```js
import { parseOneValue } from '@easylogic/csspa'

const result = parseOneValue('red');

```

## How to test 

```sh
npm run test
```

## build 

```sh
npm run build
```

## How to run local dev server 

```
npm run dev
```

## support function  

* color 
  * rgb 
  * rgba
  * hsl 
  * hsla
  * hex (6, 8 digit)
  * color name 
* length
  * number
  * px
  * pt
  * fr
  * r?em
  * deg
  * vh
  * vw
  * m?s
  * %
  * g?rad
  * turn
* keyword 
  * linear
  * ease
  * ease-in
  * ease-out
  * ease-in-out
* single function
  * cubic-bezier
  * steps
  * path 
  * rgb
  * rgba
  * hsl
  * hsla
* group function 
  * linear-gradient 
  * radial-gradient 
  * conic-gradient   
  * repeating-linear-gradient 
  * repeating-radial-gradient 
  * repeating-conic-gradient   

## Use parse function - color 

```js
const result = parseOneValue('red');
```

```js
{
  "matchedString": "red",
  "startIndex": 0,
  "endIndex": 3,
  "func": "color-name",
  "parsed": {
    "funcType": "color",
    "color": "red",
    "r": 255,
    "g": 0,
    "b": 0,
    "a": 1
  }
}
```

## Use parse function - length

```js
const result = parseOneValue('10%');
```

```js
{
  "matchedString": "10%",
  "startIndex": 0,
  "endIndex": 3,
  "func": "length",
  "parsed": {
    "funcType": "length",
    "value": 10,
    "unit": "%"
  }
}
```

## Use parse function - keyword 

```js
const result = parseOneValue('linear');
```

```js
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
```

## Use parse function - group function 

```js
const result = parseOneValue('linear-gradient(rgba(255, 255, 255, 0.1), white 20%)')
```

```js

{
  "matchedString": "linear-gradient(rgba(255, 255, 255, 0.1), white 20%)",
  "startIndex": 0,
  "endIndex": 52,
  "func": "linear-gradient",
  "funcType": "gradient",
  "type": "linear-gradient",
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
        "fullTextStartIndex": 16,
        "fullTextEndIndex": 40
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
        "fullTextStartIndex": 42,
        "fullTextEndIndex": 47
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
        "fullTextStartIndex": 48,
        "fullTextEndIndex": 51
      }
    ]
  ]
}
```

## Use multi parameter parse 

This is useful for parsing multiple values ​​like box-shadow.

```js
const result = parseGroupValue('10px rgba(255, 255, 255, 0.1), 1px rgba(255, 255, 255, 0.1)')
```

```js
[
  [
    {
      "matchedString": "10px",
      "startIndex": 0,
      "endIndex": 4,
      "func": "length",
      "parsed": {
        "funcType": "length",
        "value": 10,
        "unit": "px"
      },
      "fullTextStartIndex": 5,
      "fullTextEndIndex": 9
    },
    {
      "matchedString": "rgba(255, 255, 255, 0.1)",
      "startIndex": 5,
      "endIndex": 29,
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
      "fullTextStartIndex": 10,
      "fullTextEndIndex": 34
    }
  ],
  [
    {
      "matchedString": "1px",
      "startIndex": 31,
      "endIndex": 34,
      "func": "length",
      "parsed": {
        "funcType": "length",
        "value": 1,
        "unit": "px"
      },
      "fullTextStartIndex": 36,
      "fullTextEndIndex": 39
    },
    {
      "matchedString": "rgba(255, 255, 255, 0.1)",
      "startIndex": 35,
      "endIndex": 59,
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
      "fullTextStartIndex": 40,
      "fullTextEndIndex": 64
    }
  ]
]
```


## license
MIT
