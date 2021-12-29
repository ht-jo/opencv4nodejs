export * as cv from './openCV.js';

declare module "./openCV.js" {
  export const xmodules: {
    dnn: boolean;
    face: boolean;
    text: boolean;
    tracking: boolean;
    xfeatures2d: boolean;
    ximgproc: boolean;
  }

  export const version: {
    major: number;
    minor: number;
  }
}