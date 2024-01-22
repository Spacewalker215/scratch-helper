import Skin from "./Skin";
import type Renderer from "../Renderer";
export default class VectorSkin extends Skin {
    private _image;
    private _canvas;
    private _ctx;
    private _imageDataMipLevel;
    private _imageData;
    private _maxTextureSize;
    private _mipmaps;
    constructor(renderer: Renderer, image: HTMLImageElement);
    private static mipLevelForScale;
    getImageData(scale: number): ImageData | null;
    private _drawSvgToCanvas;
    private _createMipmap;
    getTexture(scale: number): WebGLTexture | null;
    destroy(): void;
}
