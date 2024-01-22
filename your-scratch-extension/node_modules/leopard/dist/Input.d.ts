import type { Stage } from "./Sprite";
type Mouse = {
    x: number;
    y: number;
    down: boolean;
};
export default class Input {
    private _stage;
    private _canvas;
    private _onKeyDown;
    mouse: Mouse;
    keys: string[];
    constructor(stage: Stage, canvas: HTMLCanvasElement, onKeyDown: (key: string) => unknown);
    private _mouseMove;
    private _mouseDown;
    private _mouseUp;
    private _keyup;
    private _keydown;
    private _getKeyName;
    keyPressed(name: string): boolean;
    focus(): void;
}
export type { Mouse };
