import Drawable from "./renderer/Drawable";
import Rectangle from "./renderer/Rectangle";
import ShaderManager, { Shader } from "./renderer/ShaderManager";
import type Skin from "./renderer/Skin";
import Costume from "./Costume";
import type Color from "./Color";
import type Project from "./Project";
import { Sprite, Stage, SpeechBubble } from "./Sprite";
export type FramebufferInfo = {
    texture: WebGLTexture;
    width: number;
    height: number;
    framebuffer: WebGLFramebuffer;
};
export default class Renderer {
    project: Project;
    stage: HTMLCanvasElement;
    gl: WebGLRenderingContext;
    renderTarget: HTMLElement | null;
    _shaderManager: ShaderManager;
    private _drawables;
    private _skins;
    private _currentShader;
    private _currentFramebuffer;
    private _screenSpaceScale;
    private _penSkin;
    private _collisionBuffer;
    constructor(project: Project, renderTarget: HTMLElement | string | null);
    _getSkin(obj: Costume | SpeechBubble): Skin;
    _getDrawable(sprite: Sprite | Stage): Drawable;
    _createFramebufferInfo(width: number, height: number, filtering: WebGLRenderingContext["NEAREST"] | WebGLRenderingContext["LINEAR"], stencil?: boolean): FramebufferInfo;
    _setShader(shader: Shader): boolean;
    _setFramebuffer(framebufferInfo: FramebufferInfo | null): void;
    setRenderTarget(renderTarget: HTMLElement | string | null): void;
    private _renderLayers;
    private _updateStageSize;
    private _resize;
    update(): void;
    private static createStage;
    private _calculateSpeechBubbleMatrix;
    private _renderSkin;
    private renderSprite;
    getTightBoundingBox(sprite: Sprite | Stage): Rectangle;
    getBoundingBox(sprite: Sprite | Stage): Rectangle;
    private _stencilSprite;
    checkSpriteCollision(spr: Sprite | Stage, targets: Set<Sprite | Stage> | (Sprite | Stage)[] | Sprite | Stage, fast?: boolean, sprColor?: Color): boolean;
    checkColorCollision(spr: Sprite | Stage, targetsColor: Color, sprColor?: Color): boolean;
    pick(sprites: (Sprite | Stage)[], point: {
        x: number;
        y: number;
    }): Sprite | Stage | null;
    checkPointCollision(spr: Sprite | Stage, point: {
        x: number;
        y: number;
    }, fast?: boolean): boolean;
    penLine(pt1: {
        x: number;
        y: number;
    }, pt2: {
        x: number;
        y: number;
    }, color: Color, size: number): void;
    clearPen(): void;
    stamp(spr: Sprite | Stage): void;
    displayAskBox(question: string): Promise<string>;
}
