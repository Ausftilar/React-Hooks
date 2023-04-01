import {
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { StorageType, useStorageStateProps, useStorageStateReturn } from './useStorageState.types';
import { isFunction } from '../../utils/IsFunction';
import { sessionStorageWrapper, localStorageWrapper } from '../../utils/StorageWrapper';
import { useSaveLink } from '../useSeveLink';

export function useStorageState<T>({
  storageType,
  key,
  initialState,
}: useStorageStateProps<T>): useStorageStateReturn<T> {
  const isLocalStorage = storageType === StorageType.local;

  const [value, setValue] = useState(() => {
    const savedValue = isLocalStorage
      ? localStorageWrapper.get<T>(key)
      : sessionStorageWrapper.get<T>(key);

    if (savedValue !== undefined) return savedValue;

    return isFunction(initialState) ? initialState() : initialState;
  });

  const latestValue = useSaveLink(value);

  const updateValue = useCallback((newValueOrGetNewValue: SetStateAction<T>) => {
    setValue(newValueOrGetNewValue);

    const actualValue = isFunction(newValueOrGetNewValue)
      ? newValueOrGetNewValue(latestValue.current)
      : newValueOrGetNewValue;

    isLocalStorage
      ? localStorageWrapper.set(key, actualValue)
      : sessionStorageWrapper.set(key, actualValue);
  }, [key, latestValue]);

  return [value, updateValue];
}
