import { AnyFunction } from './isFunction.types';

export function isFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function';
}