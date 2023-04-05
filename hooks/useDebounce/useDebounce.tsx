import { useRef, useCallback } from 'react';
import { AnyFunction } from '../../utils/IsFunction/isFunction.types';

export function useDebounce(
  callback: AnyFunction,
  delay: number,
) {
  const timer = useRef();

  const debouncedCallback = useCallback((...args) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
}