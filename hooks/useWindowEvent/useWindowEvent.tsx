import { useEffect } from 'react';
import { GetWindowEvent } from "./useWindowEvent.types";
import { useEvent } from '../useEvent';

export function useWindowEvent<Type extends string>(
  type: Type,
  callbacl: (event: GetWindowEvent<Type>) => void,
): void;

export function useWindowEvent(type: string, callback: (event: Event) => void) {
  const eventCallback = useEvent(callback);

  useEffect(() => {
    window.addEventListener(type, eventCallback);

    return () => window.removeEventListener(type, eventCallback);
  }, [type, eventCallback]);
}