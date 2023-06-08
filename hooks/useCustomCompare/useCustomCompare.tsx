import { useRef } from 'react';
import { usePrevious } from '../usePrevious';

export function useCustomCompare<T>(
  value: T,
  areEquel: (previous: T, current: T) => boolean,
) {
  const changeRef = useRef(0);
  const previousValue = usePrevious(value).current;
  
  if (changeRef.current === 0 || !areEquel(previousValue as T, value)) {
    changeRef.current++;
  }

  return changeRef.current;
};