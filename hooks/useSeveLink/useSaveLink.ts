import { useLayoutEffect, useRef } from 'react';

export function useSaveLink<T>(value: T) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}