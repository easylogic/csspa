
export const TimingFunction = {
    LINEAR: "linear",
    EASE: "ease",
    EASE_IN: "ease-in",
    EASE_OUT: "ease-out",
    EASE_IN_OUT: "ease-in-out",
    STEPS: "steps",
    CUBIC_BEZIER: "cubic-bezier",
    PATH: "path"

}

export const FuncType = {
    COMMA: 'comma',    
    COLOR: 'color',
    LENGTH: 'length',
    GRADIENT: 'gradient',
    TIMING: 'timing',
    KEYWORD: 'keyword',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    FUNCTION: 'function',
    UNKNOWN: 'unknown'
}

export const GradientType = {
    STATIC: "static-gradient",
    LINEAR: "linear-gradient",
    RADIAL: "radial-gradient",
    CONIC: "conic-gradient",
    REPEATING_LINEAR: "repeating-linear-gradient",
    REPEATING_RADIAL: "repeating-radial-gradient",
    REPEATING_CONIC: "repeating-conic-gradient",
    IMAGE: "image",
    URL: 'url'
}


// order is very important (number, length, 8 digit color, 6 digit color, 3 digit color, keyword, color name)
export const CSS_FUNC_REGEXP = /(([\-]?[\d.]+)(px|pt|fr|r?em|deg|vh|vw|m?s|%|g?rad|turn)?)|#(?:[\da-f]{8})|(#(?:[\da-f]{3}){1,2}|([a-z_\-]+)\([^\(\)]+\)|([a-z_\-]+))|(\,)/gi;
export const CSS_LENGTH_REGEXP = /^[\-]?([\d.]+)(px|pt|fr|r?em|deg|vh|vw|m?s|%|g?rad|turn)?$/gi;
export const CSS_KEYWORD_REGEXP = /^[a-z_\-]+$/gi;

export const GRADIENT_LIST = [
    GradientType.STATIC,
    GradientType.LINEAR,
    GradientType.RADIAL,
    GradientType.CONIC,
    GradientType.REPEATING_CONIC,
    GradientType.REPEATING_LINEAR,
    GradientType.REPEATING_RADIAL
];

export const TIMIING_LIST = [
    TimingFunction.LINEAR,
    TimingFunction.EASE,
    TimingFunction.EASE_IN,
    TimingFunction.EASE_OUT,
    TimingFunction.EASE_IN_OUT,
]

