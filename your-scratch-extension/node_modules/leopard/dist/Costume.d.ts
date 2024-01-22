export default class Costume {
    name: string;
    url: string;
    img: HTMLImageElement;
    isBitmap: boolean;
    resolution: 2 | 1;
    center: {
        x: number;
        y: number;
    };
    constructor(name: string, url: string, center?: {
        x: number;
        y: number;
    });
    get width(): number;
    get height(): number;
}
