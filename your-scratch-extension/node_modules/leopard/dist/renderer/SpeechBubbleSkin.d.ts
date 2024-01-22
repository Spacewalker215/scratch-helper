import Skin from "./Skin";
import type Renderer from "../Renderer";
import type { SpeechBubble } from "../Sprite";
export default class SpeechBubbleSkin extends Skin {
    private _canvas;
    private _ctx;
    private _texture;
    private _bubble;
    private _flipped;
    private _rendered;
    private _renderedScale;
    offsetX: number;
    offsetY: number;
    constructor(renderer: Renderer, bubble: SpeechBubble);
    private _restyleCanvas;
    get flipped(): boolean;
    set flipped(flipped: boolean);
    private _renderBubble;
    getTexture(scale: number): WebGLTexture;
    getImageData(scale: number): ImageData | null;
    destroy(): void;
}
