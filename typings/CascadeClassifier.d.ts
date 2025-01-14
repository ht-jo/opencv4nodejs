import { Size } from './Size.d';
import { Mat } from './Mat.d';
import { Rect } from './Rect.d';

export class CascadeClassifier {
  constructor(xmlFilePath: string);
  detectMultiScale(img: Mat, opts: { scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size }): { objects: Rect[], numDetections: number[] };
  detectMultiScale(img: Mat, scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size): { objects: Rect[], numDetections: number[] };
  
  detectMultiScaleAsync(img: Mat, opts: { scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size }): Promise<{ objects: Rect[], numDetections: number[] }>;
  detectMultiScaleAsync(img: Mat, scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size): Promise<{ objects: Rect[], numDetections: number[] }>;

  detectMultiScaleGpu(img: Mat, opt: { scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size }): { objects: Rect[], numDetections: number[] };
  detectMultiScaleGpu(img: Mat, scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size): { objects: Rect[], numDetections: number[] };

  detectMultiScaleGpuAsync(img: Mat, opt: { scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size }): Promise<{ objects: Rect[], numDetections: number[] }>;
  detectMultiScaleGpuAsync(img: Mat, scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size): Promise<{ objects: Rect[], numDetections: number[] }>;
  
  detectMultiScaleWithRejectLevels(img: Mat, scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size): { objects: Rect[], rejectLevels: number[], levelWeights: number[] };
  detectMultiScaleWithRejectLevelsAsync(img: Mat, scaleFactor?: number, minNeighbors?: number, flags?: number, minSize?: Size, maxSize?: Size): Promise<{ objects: Rect[], rejectLevels: number[], levelWeights: number[] }>;
}
