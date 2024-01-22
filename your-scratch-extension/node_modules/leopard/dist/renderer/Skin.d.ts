import type Renderer from "../Renderer";
export default abstract class Skin {
    protected renderer: Renderer;
    protected gl: WebGLRenderingContext;
    width: number;
    height: number;
    constructor(renderer: Renderer);
    /**
     * Get the skin's texture at a given screen-space scale.
     * @param scale The screen-space scale factor for the texture, as a ratio of screen pixels to texture pixels.
     */
    abstract getTexture(scale: number): WebGLTexture | null;
    /**
     * Gets the raster ImageData for a skin's texture at a given screen-space scale.
     * @param scale The screen-space scale factor for the texture, as a ratio of screen pixels to texture pixels.
     */
    abstract getImageData(scale: number): ImageData | null;
    protected _makeTexture(image: HTMLImageElement | HTMLCanvasElement | null, filtering: WebGLRenderingContext["NEAREST"] | WebGLRenderingContext["LINEAR"]): WebGLTexture;
    protected _setSizeFromImage(image: HTMLImageElement): void;
    abstract destroy(): void;
}
