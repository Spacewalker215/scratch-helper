import type { MatrixType } from "./Matrix";
export default class Rectangle {
    left: number;
    right: number;
    bottom: number;
    top: number;
    constructor();
    static fromBounds(left: number, right: number, bottom: number, top: number, result?: Rectangle): Rectangle;
    static fromMatrix(matrix: MatrixType, result?: Rectangle): Rectangle;
    static copy(src: Rectangle, dst: Rectangle): Rectangle;
    snapToInt(): this;
    intersects(rect: Rectangle): boolean;
    containsPoint(x: number, y: number): boolean;
    clamp(left: number, right: number, bottom: number, top: number): this;
    static union(rect1: Rectangle, rect2: Rectangle, result?: Rectangle): Rectangle;
    static intersection(rect1: Rectangle, rect2: Rectangle, result?: Rectangle): Rectangle;
    get width(): number;
    get height(): number;
}
