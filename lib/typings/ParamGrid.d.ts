export * as cv from './cv';

declare module "./openCV.js" {
  export class ParamGrid {
    readonly minVal: number;
    readonly maxVal: number;
    readonly logStep: number;
    constructor(paramId: number);
    constructor(minVal: number, maxVal: number, logStep: number);
  }
}