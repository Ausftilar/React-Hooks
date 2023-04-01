import { SetStateAction } from 'react';

export enum StorageType {
  local = 'local',
  session = 'session',
}

export type useStorageStateProps<T> = {
  storageType: StorageType,
  key: string,
  initialState: T | (() => T),
}

export type useStorageStateReturn<T> = [T, (newValueOrGetNewValue: SetStateAction<T>) => void];
