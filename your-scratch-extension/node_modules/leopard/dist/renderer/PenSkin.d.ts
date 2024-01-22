import Skin from "./Skin";
import type Color from "../Color";
import type Renderer from "../Renderer";
import type { FramebufferInfo } from "../Renderer";
export default class PenSkin extends Skin {
    _framebufferInfo: FramebufferInfo;
    private _lastPenState;
    constructor(renderer: Renderer, width: number, height: number);
    destroy(): void;
    getTexture(): WebGLTexture;
    getImageData(): ImageData | null;
    penLine(pt1: {
        x: number;
        y: number;
    }, pt2: {
        x: number;
        y: number;
    }, color: Color, size: number): void;
    clear(): void;
}
