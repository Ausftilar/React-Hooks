import { isArray } from '../IsArray';

export function isObject(object: unknown) {
  return object === Object(object) && !isArray(object) && typeof object !== 'function';
};