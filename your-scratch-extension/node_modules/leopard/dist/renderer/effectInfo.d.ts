declare const effectNames: readonly ["color", "fisheye", "whirl", "pixelate", "mosaic", "brightness", "ghost"];
declare const effectBitmasks: {
    readonly color: 1;
    readonly fisheye: 2;
    readonly whirl: 4;
    readonly pixelate: 8;
    readonly mosaic: 16;
    readonly brightness: 32;
    readonly ghost: 64;
};
export { effectNames, effectBitmasks };
