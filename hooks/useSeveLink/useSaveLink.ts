import { useLayoutEffect, useRef } from 'react';

export function useSaveLink<Value>(value: Value) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}