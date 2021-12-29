import { Mat } from './Mat.d';
import { Size } from './Size.d';
export * as cv from './openCV.js';

declare module "./openCV.js" {
  export class VideoWriter {
    constructor(filePath: string, fourccCode: number, fps: number, frameSize: Size, isColor?: boolean);
    static fourcc(fourcc: string): number;
    get(property: number): void;
    release(): void;
    set(property: number, value: number): void;
    write(img: Mat): void;
    writeAsync(img: Mat): Promise<void>;
  }
}