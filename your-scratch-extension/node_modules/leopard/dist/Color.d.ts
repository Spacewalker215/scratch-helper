/**
 * RGBA color, with each component going from 0 to 255. Components may still be decimal.
 */
export type RGBA = [number, number, number, number];
/**
 * RGBA color, with each component going from 0 to 1.
 */
export type RGBANormalized = [number, number, number, number];
export default class Color {
    private _h;
    private _s;
    private _v;
    private _a;
    constructor(h?: number, s?: number, v?: number, a?: number);
    static rgb(r: number, g: number, b: number, a?: number): Color;
    static hsv(h: number, s: number, v: number, a?: number): Color;
    static num(n: number | string): Color;
    get r(): number;
    set r(r: number);
    get g(): number;
    set g(g: number);
    get b(): number;
    set b(b: number);
    get a(): number;
    set a(a: number);
    get h(): number;
    set h(h: number);
    get s(): number;
    set s(s: number);
    get v(): number;
    set v(v: number);
    private _setRGB;
    toHexString(forceIncludeAlpha?: boolean): string;
    toRGBString(forceIncludeAlpha?: boolean): string;
    toRGBA(): RGBA;
    toRGBANormalized(): RGBANormalized;
    toString(): string;
}
