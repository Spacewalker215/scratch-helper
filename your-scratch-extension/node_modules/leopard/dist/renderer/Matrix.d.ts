export default class Matrix {
    static create(): MatrixType;
    static identity(dst: MatrixType): MatrixType;
    static translate(dst: MatrixType, src: MatrixType, x: number, y: number): MatrixType;
    static rotate(dst: MatrixType, src: MatrixType, rad: number): MatrixType;
    static scale(dst: MatrixType, src: MatrixType, x: number, y: number): MatrixType;
    static transformPoint(m: MatrixType, dst: [number, number], src: [number, number]): [number, number];
}
export type MatrixType = Float32Array;
