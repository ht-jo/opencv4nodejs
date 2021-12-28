import { KeyPoint } from './KeyPoint.d';
import { Mat } from './Mat.d';
export * as cv from './cv';

declare module "./openCV.js" {
  export class KeyPointDetector {
    detect(image: Mat): KeyPoint[];
    detectAsync(image: Mat): Promise<KeyPoint[]>;
  }
}