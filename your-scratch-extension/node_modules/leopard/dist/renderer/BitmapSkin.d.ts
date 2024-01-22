import type Renderer from "../Renderer";
import Skin from "./Skin";
export default class BitmapSkin extends Skin {
    private _image;
    private _imageData;
    private _texture;
    constructor(renderer: Renderer, image: HTMLImageElement);
    getImageData(): ImageData | null;
    getTexture(): WebGLTexture | null;
    destroy(): void;
}
