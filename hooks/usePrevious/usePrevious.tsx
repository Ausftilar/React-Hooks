import { useEffect, useRef } from 'react';

export function usePrevious<Value>(value: Value) {
  const prevValue = useRef<Value | null>(null);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue;
}