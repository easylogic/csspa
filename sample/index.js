import { parseGroupValue, parseOneValue } from "../src";


const testCases = [
    [parseOneValue, 'red'],
    [parseOneValue, '10%'],
    [parseOneValue, 'linear'],
    [parseOneValue, 'linear-gradient(rgba(255, 255, 255, 0.1), white 20%)'],
    [parseGroupValue, '10px rgba(255, 255, 255, 0.1), 1px rgba(255, 255, 255, 0.1)']
]

document.body.innerHTML = testCases.map(([parseFunction, testCase]) => {
    const result = parseFunction(testCase);
    
    return `
        <h3>${testCase}</h3>
        <pre>${JSON.stringify(result, null, 2)}</pre>
    `
}).join('');