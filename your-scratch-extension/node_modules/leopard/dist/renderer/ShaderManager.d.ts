import type Renderer from "../Renderer";
declare class Shader {
    private gl;
    program: WebGLProgram;
    uniforms: Record<string, WebGLUniformLocation>;
    attribs: Record<string, number>;
    constructor(gl: WebGLRenderingContext, program: WebGLProgram);
}
type DrawMode = keyof typeof ShaderManager["DrawModes"];
declare class ShaderManager {
    private renderer;
    private gl;
    private _shaderCache;
    constructor(renderer: Renderer);
    private _createShader;
    getShader(drawMode: DrawMode, effectBitmask?: number): Shader;
    static DrawModes: {
        readonly DEFAULT: "DEFAULT";
        readonly SILHOUETTE: "SILHOUETTE";
        readonly COLOR_MASK: "COLOR_MASK";
        readonly SPRITE_ID: "SPRITE_ID";
        readonly PEN_LINE: "PEN_LINE";
    };
}
export default ShaderManager;
export { Shader };
export type { DrawMode };
