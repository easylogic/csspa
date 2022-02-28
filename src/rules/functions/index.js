import colorName from "./color-name";
import conicGradient from "./conic-gradient";
import cubicBezier from "./cubic-bezier";
import ease from "./ease";
import easeIn from "./ease-in";
import easeOut from "./ease-out";
import hex from "./hex";
import hsl from "./hsl";
import hsla from "./hsla";
import length from "./length";
import linear from "./linear";
import linearGradient from "./linear-gradient";
import path from "./path";
import radialGradient from "./radial-gradient";
import repeatingConicGradient from "./repeating-conic-gradient";
import repeatingLinearGradient from "./repeating-linear-gradient";
import repeatingRadialGradient from "./repeating-radial-gradient";
import rgb from "./rgb";
import rgba from "./rgba";
import steps from "./steps";





export default {
    length,
    hex,
    rgb,
    rgba,
    hsl,
    hsla,
    'color-name': colorName,
    steps,
    cubicBezier,
    ease,
    'ease-in': easeIn,
    'ease-out': easeOut,
    linear,
    'linear-gradient' : linearGradient,
    'radial-gradient' : radialGradient,
    'conic-gradient' : conicGradient,
    'repeating-linear-gradient' : repeatingLinearGradient,
    'repeating-radial-gradient' : repeatingRadialGradient,
    'repeating-conic-gradient' : repeatingConicGradient,
    path,
}